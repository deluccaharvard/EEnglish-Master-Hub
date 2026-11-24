import express from "express";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

interface StoredUserRecord {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  salt: string;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const SESSION_SECRET = process.env.SESSION_SECRET || "acg-rubro-negro-platform-secret-key";

function readUsers(): StoredUserRecord[] {
  try {
    if (!fs.existsSync(USERS_FILE)) {
      return [];
    }
    const raw = fs.readFileSync(USERS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeUsers(users: StoredUserRecord[]) {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
}

function hashPassword(password: string, salt: string): string {
  return crypto.scryptSync(password, salt, 64).toString("hex");
}

function signSessionToken(payload: { id: string; email: string; name: string; createdAt: string }): string {
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", SESSION_SECRET).update(data).digest("base64url");
  return `${data}.${sig}`;
}

function verifySessionToken(token: string): { id: string; email: string; name: string; createdAt: string } | null {
  try {
    const [data, sig] = token.split(".");
    if (!data || !sig) return null;
    const expectedSig = crypto.createHmac("sha256", SESSION_SECRET).update(data).digest("base64url");
    if (sig.length !== expectedSig.length) return null;
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig))) return null;
    return JSON.parse(Buffer.from(data, "base64url").toString("utf-8"));
  } catch {
    return null;
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API health
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Auth: Register
  app.post("/api/auth/register", (req, res) => {
    const { name, email, password } = req.body || {};
    const trimmedName = typeof name === "string" ? name.trim() : "";
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const rawPassword = typeof password === "string" ? password : "";

    if (!trimmedName || trimmedName.length < 2) {
      return res.status(400).json({ success: false, error: "Informe seu nome completo." });
    }
    if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
      return res.status(400).json({ success: false, error: "Informe um e-mail válido." });
    }
    if (rawPassword.length < 6) {
      return res.status(400).json({ success: false, error: "A senha deve ter no mínimo 6 caracteres." });
    }

    const users = readUsers();
    if (users.some((u) => u.email === normalizedEmail)) {
      return res.status(409).json({ success: false, error: "Este e-mail já está cadastrado. Faça login na aba Entrar." });
    }

    const salt = crypto.randomBytes(16).toString("hex");
    const passwordHash = hashPassword(rawPassword, salt);
    const newUser: StoredUserRecord = {
      id: crypto.randomUUID(),
      name: trimmedName,
      email: normalizedEmail,
      passwordHash,
      salt,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    writeUsers(users);

    const publicUser = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      provider: "local" as const,
      createdAt: newUser.createdAt,
    };
    const token = signSessionToken(publicUser);
    return res.json({ success: true, user: publicUser, token });
  });

  // Auth: Login
  app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body || {};
    const normalizedEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    const rawPassword = typeof password === "string" ? password : "";

    if (!normalizedEmail || !rawPassword) {
      return res.status(400).json({ success: false, error: "Preencha e-mail e senha para entrar." });
    }

    const users = readUsers();
    const user = users.find((u) => u.email === normalizedEmail);
    if (!user) {
      return res.status(401).json({ success: false, error: "E-mail ou senha inválidos." });
    }

    const candidateHash = hashPassword(rawPassword, user.salt);
    const matches =
      candidateHash.length === user.passwordHash.length &&
      crypto.timingSafeEqual(Buffer.from(candidateHash), Buffer.from(user.passwordHash));

    if (!matches) {
      return res.status(401).json({ success: false, error: "E-mail ou senha inválidos." });
    }

    const publicUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      provider: "local" as const,
      createdAt: user.createdAt,
    };
    const token = signSessionToken(publicUser);
    return res.json({ success: true, user: publicUser, token });
  });

  // Auth: Verify current session
  app.get("/api/auth/me", (req, res) => {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";
    const decoded = token ? verifySessionToken(token) : null;
    if (!decoded) {
      return res.status(401).json({ success: false, error: "Sessão inválida ou expirada." });
    }
    return res.json({
      success: true,
      user: { ...decoded, provider: "local" as const },
    });
  });

  // Server-side Gemini AI content generation
  app.post("/api/gemini/generate", async (req, res) => {
    const { mode, topic, difficulty, count } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(400).json({ error: "GEMINI_API_KEY is not configured", fallback: true });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      let promptText = "";
      let responseSchema: any = {};

      if (mode === "quiz") {
        promptText = `Gere ${count || 5} perguntas educativas de múltipla escolha para estudo de vocabulário de inglês com explicações em português. Tema: ${topic}, Dificuldade: ${difficulty}. Cada pergunta deve ter palavra em inglês, tradução em português, dica contextual e 4 opções (1 correta).`;
        responseSchema = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              topic: { type: Type.STRING },
              difficulty: { type: Type.STRING },
              question: { type: Type.STRING },
              wordEn: { type: Type.STRING },
              wordPt: { type: Type.STRING },
              hint: { type: Type.STRING },
              rationale: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    text: { type: Type.STRING },
                    isCorrect: { type: Type.BOOLEAN },
                    rationale: { type: Type.STRING },
                  },
                  required: ["id", "text", "isCorrect", "rationale"],
                },
              },
            },
            required: ["id", "topic", "difficulty", "question", "wordEn", "wordPt", "hint", "rationale", "options"],
          },
        };
      } else if (mode === "gaps") {
        promptText = `Gere ${count || 5} exercícios interativos de preenchimento de lacuna ('Fill in the Gaps') em inglês para falantes de português. Tema: ${topic}, Dificuldade: ${difficulty}. Cada frase em inglês deve ter '_________' no lugar do termo alvo, tradução da frase em português, a palavra alvo em inglês, tradução em português, dica explicativa e 4 opções (1 correta).`;
        responseSchema = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              sentence: { type: Type.STRING },
              sentencePt: { type: Type.STRING },
              gapWord: { type: Type.STRING },
              wordEn: { type: Type.STRING },
              wordPt: { type: Type.STRING },
              hint: { type: Type.STRING },
              rationale: { type: Type.STRING },
              options: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.STRING },
                    text: { type: Type.STRING },
                    isCorrect: { type: Type.BOOLEAN },
                    rationale: { type: Type.STRING },
                  },
                  required: ["id", "text", "isCorrect", "rationale"],
                },
              },
            },
            required: ["id", "sentence", "gapWord", "wordEn", "wordPt", "hint", "rationale", "options"],
          },
        };
      } else {
        promptText = `Gere ${count || 6} palavras de vocabulário em inglês com traduções em português, dicas claras de significado e uma frase de exemplo. Tema: ${topic}, Dificuldade: ${difficulty}. As palavras em inglês devem ser termos únicos ou compostos curtos para jogos de soletração, memória e colunas.`;
        responseSchema = {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              wordEn: { type: Type.STRING },
              wordPt: { type: Type.STRING },
              hint: { type: Type.STRING },
              rationale: { type: Type.STRING },
              sentence: { type: Type.STRING },
            },
            required: ["id", "wordEn", "wordPt", "hint", "rationale"],
          },
        };
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: promptText,
        config: {
          systemInstruction: "Você é um professor nativo de inglês que cria materiais de estudo interativos, dinâmicos e amigáveis para falantes de português.",
          responseMimeType: "application/json",
          responseSchema,
        },
      });

      const jsonText = response.text?.trim();
      if (!jsonText) {
        throw new Error("No response text from Gemini model");
      }

      const parsed = JSON.parse(jsonText);
      return res.json({ success: true, data: parsed });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      return res.status(500).json({ error: err.message || "Failed to generate AI content", fallback: true });
    }
  });

  // Server-side Lexico Polido: Refinador de Frases Corporativas & Diplomáticas
  app.post("/api/lexico/refine", async (req, res) => {
    const { phrase, category } = req.body;
    if (!phrase || !phrase.trim()) {
      return res.status(400).json({ error: "Phrase is required" });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Retorno inteligente de fallback
      return res.json({
        success: true,
        data: {
          refined: `Could you kindly consider: "${phrase.trim()}" in a more diplomatic and professional tone?`,
          explanation: "Substitui comandos diretos ou linguagem coloquial por uma abordagem consultiva e construtiva, facilitando o alinhamento interpessoal.",
        }
      });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const prompt = `Você é um especialista sênior em diplomacia e comunicação executiva em língua inglesa (inglês C2 corporativo).
O usuário enviou a frase cotidiana/informal (em português ou inglês): "${phrase}".
A intenção/categoria é: "${category || 'geral'}".
Transforme essa frase em uma versão impecável, elegante, fluida e diplomática em inglês de alto nível ('refined').
Forneça também uma breve explicação em português ('explanation') sobre por que essa formulação soa muito mais persuasiva, madura e respeitosa.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              refined: { type: Type.STRING },
              explanation: { type: Type.STRING }
            },
            required: ["refined", "explanation"]
          }
        }
      });

      const text = response.text?.trim();
      if (!text) throw new Error("Empty response from AI");
      const parsed = JSON.parse(text);
      return res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Lexico Refine Error:", error);
      return res.json({
        success: true,
        data: {
          refined: `I would like to suggest reviewing this perspective: "${phrase.trim()}".`,
          explanation: "Formulação diplomática que convida à reflexão colaborativa sem tom acusatório.",
          fallback: true
        }
      });
    }
  });

  // Server-side Lexico Polido: Sugerir nova expressão elegante
  app.post("/api/lexico/suggest", async (req, res) => {
    const { category } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      const fallbacks = [
        {
          cotidiano: "Give me an answer now.",
          elegante: "I would appreciate your feedback at your earliest convenience.",
          significado: "Elimina a pressão impositiva e utiliza o padrão executivo de máxima polidez.",
          categoria: category || "corporativo"
        },
        {
          cotidiano: "I think you made a mistake.",
          elegante: "Perhaps there might be an oversight we could re-examine together.",
          significado: "Preserva o relacionamento ao sugerir uma revisão conjunta sem apontar dedos diretamente.",
          categoria: category || "limites"
        },
        {
          cotidiano: "Good job on the slides.",
          elegante: "Your presentation was remarkably coherent and visually compelling.",
          significado: "Elogio de alto calibre que elogia especificamente a coerência de raciocínio e o impacto visual.",
          categoria: category || "elogios"
        }
      ];
      const random = fallbacks[Math.floor(Math.random() * fallbacks.length)];
      return res.json({ success: true, data: random });
    }

    try {
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });

      const prompt = `Gere 1 par de frases para um dicionário de inglês corporativo e diplomático.
Categoria: ${category || 'corporativo'}.
Deve conter:
- 'cotidiano': a frase como alguém diria normalmente ou de forma ríspida/informal (em inglês).
- 'elegante': a versão refinada, polida e diplomática usada por executivos nativos e diplomatas (em inglês).
- 'significado': explicação em português de 1 a 2 frases destacando por que a versão elegante é superior.
- 'categoria': "${category || 'corporativo'}".`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              cotidiano: { type: Type.STRING },
              elegante: { type: Type.STRING },
              significado: { type: Type.STRING },
              categoria: { type: Type.STRING }
            },
            required: ["cotidiano", "elegante", "significado", "categoria"]
          }
        }
      });

      const text = response.text?.trim();
      if (!text) throw new Error("Empty response");
      const parsed = JSON.parse(text);
      return res.json({ success: true, data: parsed });
    } catch (error: any) {
      console.error("Lexico Suggest Error:", error);
      return res.json({
        success: true,
        data: {
          cotidiano: "Tell me what to do.",
          elegante: "Could you kindly provide strategic guidance on next steps?",
          significado: "Substitui postura passiva por uma solicitação madura de alinhamento estratégico.",
          categoria: category || "corporativo",
          fallback: true
        }
      });
    }
  });

  // Vite middleware in dev; static file serving in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
