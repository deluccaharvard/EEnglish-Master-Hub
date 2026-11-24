import { VocabItem } from '../types';

/**
 * BANCO DE DADOS SQL COMPARTILHADO (600 PALAVRAS / 4 TEMAS / 3 NÍVEIS)
 * 
 * Estrutura Relacional Oficial para as 23 Ferramentas e Jogos da Plataforma.
 * Isolamento Arquitetural:
 * - Ferramentas com banco SQL compartilhado: Todos os 23 jogos e desafios do Hub.
 * - Ferramentas com bancos SQL individuais e ícones flutuantes próprios:
 *   1. Professor Virtual (src/data/teacherVocabularyData.ts - 400 termos do Guia PDF)
 *   2. Dicionário Bilíngue (src/data/lexicoData.ts - Léxico próprio de consulta)
 * 
 * Os 4 Temas Oficiais (150 palavras cada, 50 por nível de dificuldade):
 * 1. Ciência e Natureza (Science & Nature)
 * 2. Objetos Geométricos (Geometric Objects & Shapes)
 * 3. Objetos do Dia a Dia com Foco na Escola (School & Daily Objects)
 * 4. Geografia e Comida (Geography & Food)
 */

export interface SQLTableSchema {
  tableName: string;
  totalRows: number;
  description: string;
  columns: { name: string; type: string; description: string }[];
  themes: { id: string; name: string; wordCount: number; difficulties: { facil: number; medio: number; dificil: number } }[];
  isolatedTools: { name: string; icon: string; databaseType: string; description: string }[];
}

export const SHARED_SQL_METADATA: SQLTableSchema = {
  tableName: 'shared_vocabulary_sql',
  totalRows: 600,
  description: 'Banco de dados SQL compartilhado das 23 ferramentas e jogos da plataforma.',
  columns: [
    { name: 'id', type: 'VARCHAR(32) PRIMARY KEY', description: 'Chave primária única do registro no banco SQL' },
    { name: 'topic', type: 'VARCHAR(32)', description: 'Tema: ciencias, formas, objetos, geografia_comida' },
    { name: 'difficulty', type: 'VARCHAR(16)', description: 'Dificuldade: facil, medio, dificil' },
    { name: 'word_en', type: 'VARCHAR(64)', description: 'Palavra em língua inglesa' },
    { name: 'word_pt', type: 'VARCHAR(64)', description: 'Tradução precisa em português' },
    { name: 'phonetic', type: 'VARCHAR(64)', description: 'Guia fonético de pronúncia' },
    { name: 'sentence_en', type: 'TEXT', description: 'Frase contextual autêntica em inglês' },
    { name: 'sentence_pt', type: 'TEXT', description: 'Tradução da frase contextual' },
    { name: 'hint', type: 'TEXT', description: 'Dica pedagógica explicativa' },
    { name: 'rationale', type: 'TEXT', description: 'Justificativa de uso e etimologia' }
  ],
  themes: [
    { id: 'ciencias', name: 'Ciência e Natureza (Science & Nature)', wordCount: 150, difficulties: { facil: 50, medio: 50, dificil: 50 } },
    { id: 'formas', name: 'Objetos Geométricos (Geometric Objects & Shapes)', wordCount: 150, difficulties: { facil: 50, medio: 50, dificil: 50 } },
    { id: 'objetos', name: 'Objetos do Dia a Dia / Escola (School & Daily Objects)', wordCount: 150, difficulties: { facil: 50, medio: 50, dificil: 50 } },
    { id: 'geografia_comida', name: 'Geografia e Comida (Geography & Food)', wordCount: 150, difficulties: { facil: 50, medio: 50, dificil: 50 } }
  ],
  isolatedTools: [
    { name: '1 Professor Virtual', icon: 'GraduationCap', databaseType: 'Banco SQL Individual (400 Termos Guia PDF)', description: 'Ícone flutuante próprio com seu próprio banco de dados' },
    { name: '2 Dicionário Bilíngue', icon: 'BookOpen', databaseType: 'Banco SQL Individual (Léxico Próprio)', description: 'Ícone flutuante próprio com busca independente' }
  ]
};

export const LOCAL_DATABASE: VocabItem[] = [
  {
    "id": "sql-sci-f-01",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Sun",
    "wordPt": "Sol",
    "phonetic": "sʌn",
    "sentence": "The bright _________ warms the Earth during the day.",
    "sentencePt": "O sol brilhante aquece a Terra durante o dia.",
    "exampleEn": "The bright Sun warms the Earth during the day.",
    "examplePt": "O sol brilhante aquece a Terra durante o dia.",
    "gapWord": "Sun",
    "question": "Como se diz 'Sol' em inglês?",
    "hint": "Astro central luminoso do sistema solar.",
    "rationale": "'Sun' (sʌn): Astro central luminoso do sistema solar.",
    "options": [
      {
        "id": "A",
        "text": "Sun",
        "isCorrect": true,
        "rationale": "'Sun' é a tradução correta para 'Sol'."
      },
      {
        "id": "B",
        "text": "GASas",
        "isCorrect": false,
        "rationale": "'GASas' significa 'Gás', não 'Sol'."
      },
      {
        "id": "C",
        "text": "CLOUDloud",
        "isCorrect": false,
        "rationale": "'CLOUDloud' significa 'Nuvem', não 'Sol'."
      },
      {
        "id": "D",
        "text": "SANDand",
        "isCorrect": false,
        "rationale": "'SANDand' significa 'Areia', não 'Sol'."
      }
    ]
  },
  {
    "id": "sql-sci-f-02",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Moon",
    "wordPt": "Lua",
    "phonetic": "muːn",
    "sentence": "The full _________ illuminated the quiet night sky.",
    "sentencePt": "A lua cheia iluminou o céu tranquilo da noite.",
    "exampleEn": "The full Moon illuminated the quiet night sky.",
    "examplePt": "A lua cheia iluminou o céu tranquilo da noite.",
    "gapWord": "Moon",
    "question": "Como se diz 'Lua' em inglês?",
    "hint": "Satélite natural que orbita o planeta Terra.",
    "rationale": "'Moon' (muːn): Satélite natural que orbita o planeta Terra.",
    "options": [
      {
        "id": "A",
        "text": "DUSTust",
        "isCorrect": false,
        "rationale": "'DUSTust' significa 'Poeira', não 'Lua'."
      },
      {
        "id": "B",
        "text": "Moon",
        "isCorrect": true,
        "rationale": "'Moon' é a tradução correta para 'Lua'."
      },
      {
        "id": "C",
        "text": "WINDind",
        "isCorrect": false,
        "rationale": "'WINDind' significa 'Vento', não 'Lua'."
      },
      {
        "id": "D",
        "text": "PLANTlant",
        "isCorrect": false,
        "rationale": "'PLANTlant' significa 'Planta', não 'Lua'."
      }
    ]
  },
  {
    "id": "sql-sci-f-03",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Star",
    "wordPt": "Estrela",
    "phonetic": "stɑːr",
    "sentence": "Look at that distant _________ shining in the galaxy.",
    "sentencePt": "Olhe para aquela estrela distante brilhando na galáxia.",
    "exampleEn": "Look at that distant Star shining in the galaxy.",
    "examplePt": "Olhe para aquela estrela distante brilhando na galáxia.",
    "gapWord": "Star",
    "question": "Como se diz 'Estrela' em inglês?",
    "hint": "Corpo celeste de plasma que emite luz própria.",
    "rationale": "'Star' (stɑːr): Corpo celeste de plasma que emite luz própria.",
    "options": [
      {
        "id": "A",
        "text": "SANDand",
        "isCorrect": false,
        "rationale": "'SANDand' significa 'Areia', não 'Estrela'."
      },
      {
        "id": "B",
        "text": "HEARTeart",
        "isCorrect": false,
        "rationale": "'HEARTeart' significa 'Coração', não 'Estrela'."
      },
      {
        "id": "C",
        "text": "Star",
        "isCorrect": true,
        "rationale": "'Star' é a tradução correta para 'Estrela'."
      },
      {
        "id": "D",
        "text": "ICEce",
        "isCorrect": false,
        "rationale": "'ICEce' significa 'Gelo', não 'Estrela'."
      }
    ]
  },
  {
    "id": "sql-sci-f-04",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Rain",
    "wordPt": "Chuva",
    "phonetic": "reɪn",
    "sentence": "Gentle _________ fell over the green valley.",
    "sentencePt": "Uma chuva suave caiu sobre o vale verde.",
    "exampleEn": "Gentle Rain fell over the green valley.",
    "examplePt": "Uma chuva suave caiu sobre o vale verde.",
    "gapWord": "Rain",
    "question": "Como se diz 'Chuva' em inglês?",
    "hint": "Precipitação líquida de água da atmosfera.",
    "rationale": "'Rain' (reɪn): Precipitação líquida de água da atmosfera.",
    "options": [
      {
        "id": "A",
        "text": "HILLill",
        "isCorrect": false,
        "rationale": "'HILLill' significa 'Colina', não 'Chuva'."
      },
      {
        "id": "B",
        "text": "TREEree",
        "isCorrect": false,
        "rationale": "'TREEree' significa 'Árvore', não 'Chuva'."
      },
      {
        "id": "C",
        "text": "BIRDird",
        "isCorrect": false,
        "rationale": "'BIRDird' significa 'Pássaro', não 'Chuva'."
      },
      {
        "id": "D",
        "text": "Rain",
        "isCorrect": true,
        "rationale": "'Rain' é a tradução correta para 'Chuva'."
      }
    ]
  },
  {
    "id": "sql-sci-f-05",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Snow",
    "wordPt": "Neve",
    "phonetic": "snoʊ",
    "sentence": "White _________ covered the mountain peaks.",
    "sentencePt": "Neve branca cobriu os picos da montanha.",
    "exampleEn": "White Snow covered the mountain peaks.",
    "examplePt": "Neve branca cobriu os picos da montanha.",
    "gapWord": "Snow",
    "question": "Como se diz 'Neve' em inglês?",
    "hint": "Precipitação de cristais de gelo esbranquiçados.",
    "rationale": "'Snow' (snoʊ): Precipitação de cristais de gelo esbranquiçados.",
    "options": [
      {
        "id": "A",
        "text": "Snow",
        "isCorrect": true,
        "rationale": "'Snow' é a tradução correta para 'Neve'."
      },
      {
        "id": "B",
        "text": "RIVERiver",
        "isCorrect": false,
        "rationale": "'RIVERiver' significa 'Rio', não 'Neve'."
      },
      {
        "id": "C",
        "text": "LANDand",
        "isCorrect": false,
        "rationale": "'LANDand' significa 'Terra', não 'Neve'."
      },
      {
        "id": "D",
        "text": "SKINkin",
        "isCorrect": false,
        "rationale": "'SKINkin' significa 'Pele', não 'Neve'."
      }
    ]
  },
  {
    "id": "sql-sci-f-06",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Wind",
    "wordPt": "Vento",
    "phonetic": "wɪnd",
    "sentence": "A cold _________ blew across the open field.",
    "sentencePt": "Um vento frio soprou através do campo aberto.",
    "exampleEn": "A cold Wind blew across the open field.",
    "examplePt": "Um vento frio soprou através do campo aberto.",
    "gapWord": "Wind",
    "question": "Como se diz 'Vento' em inglês?",
    "hint": "Fluxo natural de ar em movimento.",
    "rationale": "'Wind' (wɪnd): Fluxo natural de ar em movimento.",
    "options": [
      {
        "id": "A",
        "text": "BUGug",
        "isCorrect": false,
        "rationale": "'BUGug' significa 'Inseto', não 'Vento'."
      },
      {
        "id": "B",
        "text": "Wind",
        "isCorrect": true,
        "rationale": "'Wind' é a tradução correta para 'Vento'."
      },
      {
        "id": "C",
        "text": "AIRir",
        "isCorrect": false,
        "rationale": "'AIRir' significa 'Ar', não 'Vento'."
      },
      {
        "id": "D",
        "text": "PARKark",
        "isCorrect": false,
        "rationale": "'PARKark' significa 'Parque', não 'Vento'."
      }
    ]
  },
  {
    "id": "sql-sci-f-07",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Cloud",
    "wordPt": "Nuvem",
    "phonetic": "klaʊd",
    "sentence": "A white _________ drifted slowly across the blue sky.",
    "sentencePt": "Uma nuvem branca flutuava lentamente pelo céu azul.",
    "exampleEn": "A white Cloud drifted slowly across the blue sky.",
    "examplePt": "Uma nuvem branca flutuava lentamente pelo céu azul.",
    "gapWord": "Cloud",
    "question": "Como se diz 'Nuvem' em inglês?",
    "hint": "Massa visível de minúsculas gotas de água suspensas.",
    "rationale": "'Cloud' (klaʊd): Massa visível de minúsculas gotas de água suspensas.",
    "options": [
      {
        "id": "A",
        "text": "SKINkin",
        "isCorrect": false,
        "rationale": "'SKINkin' significa 'Pele', não 'Nuvem'."
      },
      {
        "id": "B",
        "text": "ROCKock",
        "isCorrect": false,
        "rationale": "'ROCKock' significa 'Rocha', não 'Nuvem'."
      },
      {
        "id": "C",
        "text": "Cloud",
        "isCorrect": true,
        "rationale": "'Cloud' é a tradução correta para 'Nuvem'."
      },
      {
        "id": "D",
        "text": "PLANTlant",
        "isCorrect": false,
        "rationale": "'PLANTlant' significa 'Planta', não 'Nuvem'."
      }
    ]
  },
  {
    "id": "sql-sci-f-08",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Sky",
    "wordPt": "Céu",
    "phonetic": "skaɪ",
    "sentence": "Birds flew gracefully across the clear blue _________.",
    "sentencePt": "Pássaros voaram graciosamente pelo céu azul claro.",
    "exampleEn": "Birds flew gracefully across the clear blue Sky.",
    "examplePt": "Pássaros voaram graciosamente pelo céu azul claro.",
    "gapWord": "Sky",
    "question": "Como se diz 'Céu' em inglês?",
    "hint": "Esfera celeste visível sobre a Terra.",
    "rationale": "'Sky' (skaɪ): Esfera celeste visível sobre a Terra.",
    "options": [
      {
        "id": "A",
        "text": "LANDand",
        "isCorrect": false,
        "rationale": "'LANDand' significa 'Terra', não 'Céu'."
      },
      {
        "id": "B",
        "text": "DARKark",
        "isCorrect": false,
        "rationale": "'DARKark' significa 'Escuro', não 'Céu'."
      },
      {
        "id": "C",
        "text": "LIFEife",
        "isCorrect": false,
        "rationale": "'LIFEife' significa 'Vida', não 'Céu'."
      },
      {
        "id": "D",
        "text": "Sky",
        "isCorrect": true,
        "rationale": "'Sky' é a tradução correta para 'Céu'."
      }
    ]
  },
  {
    "id": "sql-sci-f-09",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Tree",
    "wordPt": "Árvore",
    "phonetic": "triː",
    "sentence": "The ancient oak _________ gave us fresh shade.",
    "sentencePt": "A árvore de carvalho centenária nos deu sombra fresca.",
    "exampleEn": "The ancient oak Tree gave us fresh shade.",
    "examplePt": "A árvore de carvalho centenária nos deu sombra fresca.",
    "gapWord": "Tree",
    "question": "Como se diz 'Árvore' em inglês?",
    "hint": "Planta lenhosa de grande porte com tronco e copa.",
    "rationale": "'Tree' (triː): Planta lenhosa de grande porte com tronco e copa.",
    "options": [
      {
        "id": "A",
        "text": "Tree",
        "isCorrect": true,
        "rationale": "'Tree' é a tradução correta para 'Árvore'."
      },
      {
        "id": "B",
        "text": "ATOMtom",
        "isCorrect": false,
        "rationale": "'ATOMtom' significa 'Átomo', não 'Árvore'."
      },
      {
        "id": "C",
        "text": "CELLell",
        "isCorrect": false,
        "rationale": "'CELLell' significa 'Célula', não 'Árvore'."
      },
      {
        "id": "D",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Árvore'."
      }
    ]
  },
  {
    "id": "sql-sci-f-10",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Leaf",
    "wordPt": "Folha",
    "phonetic": "liːf",
    "sentence": "A green _________ captured sunlight for photosynthesis.",
    "sentencePt": "Uma folha verde capturou luz solar para fotossíntese.",
    "exampleEn": "A green Leaf captured sunlight for photosynthesis.",
    "examplePt": "Uma folha verde capturou luz solar para fotossíntese.",
    "gapWord": "Leaf",
    "question": "Como se diz 'Folha' em inglês?",
    "hint": "Órgão laminar da planta responsável pela síntese de energia.",
    "rationale": "'Leaf' (liːf): Órgão laminar da planta responsável pela síntese de energia.",
    "options": [
      {
        "id": "A",
        "text": "HEATeat",
        "isCorrect": false,
        "rationale": "'HEATeat' significa 'Calor', não 'Folha'."
      },
      {
        "id": "B",
        "text": "Leaf",
        "isCorrect": true,
        "rationale": "'Leaf' é a tradução correta para 'Folha'."
      },
      {
        "id": "C",
        "text": "FLOWERlower",
        "isCorrect": false,
        "rationale": "'FLOWERlower' significa 'Flor', não 'Folha'."
      },
      {
        "id": "D",
        "text": "SKYky",
        "isCorrect": false,
        "rationale": "'SKYky' significa 'Céu', não 'Folha'."
      }
    ]
  },
  {
    "id": "sql-sci-f-11",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Root",
    "wordPt": "Raiz",
    "phonetic": "ruːt",
    "sentence": "The deep _________ anchors the plant in the soil.",
    "sentencePt": "A raiz profunda fixa a planta no solo.",
    "exampleEn": "The deep Root anchors the plant in the soil.",
    "examplePt": "A raiz profunda fixa a planta no solo.",
    "gapWord": "Root",
    "question": "Como se diz 'Raiz' em inglês?",
    "hint": "Parte subterrânea que absorve água e sais minerais.",
    "rationale": "'Root' (ruːt): Parte subterrânea que absorve água e sais minerais.",
    "options": [
      {
        "id": "A",
        "text": "HILLill",
        "isCorrect": false,
        "rationale": "'HILLill' significa 'Colina', não 'Raiz'."
      },
      {
        "id": "B",
        "text": "SKINkin",
        "isCorrect": false,
        "rationale": "'SKINkin' significa 'Pele', não 'Raiz'."
      },
      {
        "id": "C",
        "text": "Root",
        "isCorrect": true,
        "rationale": "'Root' é a tradução correta para 'Raiz'."
      },
      {
        "id": "D",
        "text": "HEARTeart",
        "isCorrect": false,
        "rationale": "'HEARTeart' significa 'Coração', não 'Raiz'."
      }
    ]
  },
  {
    "id": "sql-sci-f-12",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Seed",
    "wordPt": "Semente",
    "phonetic": "siːd",
    "sentence": "Plant the small _________ into the fertile earth.",
    "sentencePt": "Plante a pequena semente na terra fértil.",
    "exampleEn": "Plant the small Seed into the fertile earth.",
    "examplePt": "Plante a pequena semente na terra fértil.",
    "gapWord": "Seed",
    "question": "Como se diz 'Semente' em inglês?",
    "hint": "Estrutura reprodutiva que dá origem a uma nova planta.",
    "rationale": "'Seed' (siːd): Estrutura reprodutiva que dá origem a uma nova planta.",
    "options": [
      {
        "id": "A",
        "text": "RIVERiver",
        "isCorrect": false,
        "rationale": "'RIVERiver' significa 'Rio', não 'Semente'."
      },
      {
        "id": "B",
        "text": "BRAINrain",
        "isCorrect": false,
        "rationale": "'BRAINrain' significa 'Cérebro', não 'Semente'."
      },
      {
        "id": "C",
        "text": "DUSTust",
        "isCorrect": false,
        "rationale": "'DUSTust' significa 'Poeira', não 'Semente'."
      },
      {
        "id": "D",
        "text": "Seed",
        "isCorrect": true,
        "rationale": "'Seed' é a tradução correta para 'Semente'."
      }
    ]
  },
  {
    "id": "sql-sci-f-13",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Plant",
    "wordPt": "Planta",
    "phonetic": "plænt",
    "sentence": "Water this green _________ every morning.",
    "sentencePt": "Regue esta planta verde todas as manhãs.",
    "exampleEn": "Water this green Plant every morning.",
    "examplePt": "Regue esta planta verde todas as manhãs.",
    "gapWord": "Plant",
    "question": "Como se diz 'Planta' em inglês?",
    "hint": "Organismo vegetal autótrofo fotossintetizante.",
    "rationale": "'Plant' (plænt): Organismo vegetal autótrofo fotossintetizante.",
    "options": [
      {
        "id": "A",
        "text": "Plant",
        "isCorrect": true,
        "rationale": "'Plant' é a tradução correta para 'Planta'."
      },
      {
        "id": "B",
        "text": "HEATeat",
        "isCorrect": false,
        "rationale": "'HEATeat' significa 'Calor', não 'Planta'."
      },
      {
        "id": "C",
        "text": "GENEene",
        "isCorrect": false,
        "rationale": "'GENEene' significa 'Gene', não 'Planta'."
      },
      {
        "id": "D",
        "text": "SUNun",
        "isCorrect": false,
        "rationale": "'SUNun' significa 'Sol', não 'Planta'."
      }
    ]
  },
  {
    "id": "sql-sci-f-14",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Flower",
    "wordPt": "Flor",
    "phonetic": "ˈflaʊ.ər",
    "sentence": "The red rose _________ bloomed in early spring.",
    "sentencePt": "A flor da rosa vermelha desabrochou no início da primavera.",
    "exampleEn": "The red rose Flower bloomed in early spring.",
    "examplePt": "A flor da rosa vermelha desabrochou no início da primavera.",
    "gapWord": "Flower",
    "question": "Como se diz 'Flor' em inglês?",
    "hint": "Estrutura reprodutora colorida de plantas angiospermas.",
    "rationale": "'Flower' (ˈflaʊ.ər): Estrutura reprodutora colorida de plantas angiospermas.",
    "options": [
      {
        "id": "A",
        "text": "SANDand",
        "isCorrect": false,
        "rationale": "'SANDand' significa 'Areia', não 'Flor'."
      },
      {
        "id": "B",
        "text": "Flower",
        "isCorrect": true,
        "rationale": "'Flower' é a tradução correta para 'Flor'."
      },
      {
        "id": "C",
        "text": "LAKEake",
        "isCorrect": false,
        "rationale": "'LAKEake' significa 'Lago', não 'Flor'."
      },
      {
        "id": "D",
        "text": "CLOUDloud",
        "isCorrect": false,
        "rationale": "'CLOUDloud' significa 'Nuvem', não 'Flor'."
      }
    ]
  },
  {
    "id": "sql-sci-f-15",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Bird",
    "wordPt": "Pássaro",
    "phonetic": "bɜːrd",
    "sentence": "A colorful _________ built a nest in the branch.",
    "sentencePt": "Um pássaro colorido construiu um ninho no galho.",
    "exampleEn": "A colorful Bird built a nest in the branch.",
    "examplePt": "Um pássaro colorido construiu um ninho no galho.",
    "gapWord": "Bird",
    "question": "Como se diz 'Pássaro' em inglês?",
    "hint": "Animal vertebrado de sangue quente com penas e bico.",
    "rationale": "'Bird' (bɜːrd): Animal vertebrado de sangue quente com penas e bico.",
    "options": [
      {
        "id": "A",
        "text": "LIGHTight",
        "isCorrect": false,
        "rationale": "'LIGHTight' significa 'Luz', não 'Pássaro'."
      },
      {
        "id": "B",
        "text": "TREEree",
        "isCorrect": false,
        "rationale": "'TREEree' significa 'Árvore', não 'Pássaro'."
      },
      {
        "id": "C",
        "text": "Bird",
        "isCorrect": true,
        "rationale": "'Bird' é a tradução correta para 'Pássaro'."
      },
      {
        "id": "D",
        "text": "MINDind",
        "isCorrect": false,
        "rationale": "'MINDind' significa 'Mente', não 'Pássaro'."
      }
    ]
  },
  {
    "id": "sql-sci-f-16",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Fish",
    "wordPt": "Peixe",
    "phonetic": "fɪʃ",
    "sentence": "A small silver _________ swam quickly upstream.",
    "sentencePt": "Um pequeno peixe prateado nadou rapidamente rio acima.",
    "exampleEn": "A small silver Fish swam quickly upstream.",
    "examplePt": "Um pequeno peixe prateado nadou rapidamente rio acima.",
    "gapWord": "Fish",
    "question": "Como se diz 'Peixe' em inglês?",
    "hint": "Vertebrado aquático com brânquias e nadadeiras.",
    "rationale": "'Fish' (fɪʃ): Vertebrado aquático com brânquias e nadadeiras.",
    "options": [
      {
        "id": "A",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Peixe'."
      },
      {
        "id": "B",
        "text": "LAKEake",
        "isCorrect": false,
        "rationale": "'LAKEake' significa 'Lago', não 'Peixe'."
      },
      {
        "id": "C",
        "text": "BUGug",
        "isCorrect": false,
        "rationale": "'BUGug' significa 'Inseto', não 'Peixe'."
      },
      {
        "id": "D",
        "text": "Fish",
        "isCorrect": true,
        "rationale": "'Fish' é a tradução correta para 'Peixe'."
      }
    ]
  },
  {
    "id": "sql-sci-f-17",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Bug",
    "wordPt": "Inseto",
    "phonetic": "bʌɡ",
    "sentence": "A tiny _________ was crawling along the wooden fence.",
    "sentencePt": "Um pequeno inseto estava rastejando pela cerca de madeira.",
    "exampleEn": "A tiny Bug was crawling along the wooden fence.",
    "examplePt": "Um pequeno inseto estava rastejando pela cerca de madeira.",
    "gapWord": "Bug",
    "question": "Como se diz 'Inseto' em inglês?",
    "hint": "Termo comum para pequenos invertebrados e artrópodes.",
    "rationale": "'Bug' (bʌɡ): Termo comum para pequenos invertebrados e artrópodes.",
    "options": [
      {
        "id": "A",
        "text": "Bug",
        "isCorrect": true,
        "rationale": "'Bug' é a tradução correta para 'Inseto'."
      },
      {
        "id": "B",
        "text": "GENEene",
        "isCorrect": false,
        "rationale": "'GENEene' significa 'Gene', não 'Inseto'."
      },
      {
        "id": "C",
        "text": "ATOMtom",
        "isCorrect": false,
        "rationale": "'ATOMtom' significa 'Átomo', não 'Inseto'."
      },
      {
        "id": "D",
        "text": "DUSTust",
        "isCorrect": false,
        "rationale": "'DUSTust' significa 'Poeira', não 'Inseto'."
      }
    ]
  },
  {
    "id": "sql-sci-f-18",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Rock",
    "wordPt": "Rocha",
    "phonetic": "rɑːk",
    "sentence": "We sat upon a giant granite _________ near the cliff.",
    "sentencePt": "Sentamos sobre uma rocha gigante de granito perto do penhasco.",
    "exampleEn": "We sat upon a giant granite Rock near the cliff.",
    "examplePt": "Sentamos sobre uma rocha gigante de granito perto do penhasco.",
    "gapWord": "Rock",
    "question": "Como se diz 'Rocha' em inglês?",
    "hint": "Massa mineral sólida natural e compacta.",
    "rationale": "'Rock' (rɑːk): Massa mineral sólida natural e compacta.",
    "options": [
      {
        "id": "A",
        "text": "ATOMtom",
        "isCorrect": false,
        "rationale": "'ATOMtom' significa 'Átomo', não 'Rocha'."
      },
      {
        "id": "B",
        "text": "Rock",
        "isCorrect": true,
        "rationale": "'Rock' é a tradução correta para 'Rocha'."
      },
      {
        "id": "C",
        "text": "HILLill",
        "isCorrect": false,
        "rationale": "'HILLill' significa 'Colina', não 'Rocha'."
      },
      {
        "id": "D",
        "text": "ROOToot",
        "isCorrect": false,
        "rationale": "'ROOToot' significa 'Raiz', não 'Rocha'."
      }
    ]
  },
  {
    "id": "sql-sci-f-19",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Stone",
    "wordPt": "Pedra",
    "phonetic": "stoʊn",
    "sentence": "He tossed a smooth _________ into the calm lake.",
    "sentencePt": "Ele jogou uma pedra lisa no lago calmo.",
    "exampleEn": "He tossed a smooth Stone into the calm lake.",
    "examplePt": "Ele jogou uma pedra lisa no lago calmo.",
    "gapWord": "Stone",
    "question": "Como se diz 'Pedra' em inglês?",
    "hint": "Pedaço pequeno e sólido de matéria mineral.",
    "rationale": "'Stone' (stoʊn): Pedaço pequeno e sólido de matéria mineral.",
    "options": [
      {
        "id": "A",
        "text": "BIRDird",
        "isCorrect": false,
        "rationale": "'BIRDird' significa 'Pássaro', não 'Pedra'."
      },
      {
        "id": "B",
        "text": "AIRir",
        "isCorrect": false,
        "rationale": "'AIRir' significa 'Ar', não 'Pedra'."
      },
      {
        "id": "C",
        "text": "Stone",
        "isCorrect": true,
        "rationale": "'Stone' é a tradução correta para 'Pedra'."
      },
      {
        "id": "D",
        "text": "RIVERiver",
        "isCorrect": false,
        "rationale": "'RIVERiver' significa 'Rio', não 'Pedra'."
      }
    ]
  },
  {
    "id": "sql-sci-f-20",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Soil",
    "wordPt": "Solo",
    "phonetic": "sɔɪl",
    "sentence": "Worms aerate the dark, nutrient-rich _________.",
    "sentencePt": "Minhocas arejam o solo escuro e rico em nutrientes.",
    "exampleEn": "Worms aerate the dark, nutrient-rich Soil.",
    "examplePt": "Minhocas arejam o solo escuro e rico em nutrientes.",
    "gapWord": "Soil",
    "question": "Como se diz 'Solo' em inglês?",
    "hint": "Camada superficial da terra onde crescem os vegetais.",
    "rationale": "'Soil' (sɔɪl): Camada superficial da terra onde crescem os vegetais.",
    "options": [
      {
        "id": "A",
        "text": "CELLell",
        "isCorrect": false,
        "rationale": "'CELLell' significa 'Célula', não 'Solo'."
      },
      {
        "id": "B",
        "text": "WINDind",
        "isCorrect": false,
        "rationale": "'WINDind' significa 'Vento', não 'Solo'."
      },
      {
        "id": "C",
        "text": "BONEone",
        "isCorrect": false,
        "rationale": "'BONEone' significa 'Osso', não 'Solo'."
      },
      {
        "id": "D",
        "text": "Soil",
        "isCorrect": true,
        "rationale": "'Soil' é a tradução correta para 'Solo'."
      }
    ]
  },
  {
    "id": "sql-sci-f-21",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Sand",
    "wordPt": "Areia",
    "phonetic": "sænd",
    "sentence": "Warm yellow _________ stretched for miles on the coast.",
    "sentencePt": "Areia amarela quente estendia-se por milhas no litoral.",
    "exampleEn": "Warm yellow Sand stretched for miles on the coast.",
    "examplePt": "Areia amarela quente estendia-se por milhas no litoral.",
    "gapWord": "Sand",
    "question": "Como se diz 'Areia' em inglês?",
    "hint": "Fragmentos finos de minerais e quartzo em praias.",
    "rationale": "'Sand' (sænd): Fragmentos finos de minerais e quartzo em praias.",
    "options": [
      {
        "id": "A",
        "text": "Sand",
        "isCorrect": true,
        "rationale": "'Sand' é a tradução correta para 'Areia'."
      },
      {
        "id": "B",
        "text": "BLOODlood",
        "isCorrect": false,
        "rationale": "'BLOODlood' significa 'Sangue', não 'Areia'."
      },
      {
        "id": "C",
        "text": "PLANTlant",
        "isCorrect": false,
        "rationale": "'PLANTlant' significa 'Planta', não 'Areia'."
      },
      {
        "id": "D",
        "text": "BODYody",
        "isCorrect": false,
        "rationale": "'BODYody' significa 'Corpo', não 'Areia'."
      }
    ]
  },
  {
    "id": "sql-sci-f-22",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Dust",
    "wordPt": "Poeira",
    "phonetic": "dʌst",
    "sentence": "Tiny specks of _________ floated in the morning sunlight.",
    "sentencePt": "Pequenas partículas de poeira flutuavam na luz do sol da manhã.",
    "exampleEn": "Tiny specks of Dust floated in the morning sunlight.",
    "examplePt": "Pequenas partículas de poeira flutuavam na luz do sol da manhã.",
    "gapWord": "Dust",
    "question": "Como se diz 'Poeira' em inglês?",
    "hint": "Partículas microscópicas de terra ou detritos suspensos.",
    "rationale": "'Dust' (dʌst): Partículas microscópicas de terra ou detritos suspensos.",
    "options": [
      {
        "id": "A",
        "text": "BRAINrain",
        "isCorrect": false,
        "rationale": "'BRAINrain' significa 'Cérebro', não 'Poeira'."
      },
      {
        "id": "B",
        "text": "Dust",
        "isCorrect": true,
        "rationale": "'Dust' é a tradução correta para 'Poeira'."
      },
      {
        "id": "C",
        "text": "LIFEife",
        "isCorrect": false,
        "rationale": "'LIFEife' significa 'Vida', não 'Poeira'."
      },
      {
        "id": "D",
        "text": "SKYky",
        "isCorrect": false,
        "rationale": "'SKYky' significa 'Céu', não 'Poeira'."
      }
    ]
  },
  {
    "id": "sql-sci-f-23",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Air",
    "wordPt": "Ar",
    "phonetic": "eər",
    "sentence": "Inhale deeply the fresh, clean forest _________.",
    "sentencePt": "Inale profundamente o ar fresco e puro da floresta.",
    "exampleEn": "Inhale deeply the fresh, clean forest Air.",
    "examplePt": "Inale profundamente o ar fresco e puro da floresta.",
    "gapWord": "Air",
    "question": "Como se diz 'Ar' em inglês?",
    "hint": "Mistura gasosa atmosférica necessária à respiração.",
    "rationale": "'Air' (eər): Mistura gasosa atmosférica necessária à respiração.",
    "options": [
      {
        "id": "A",
        "text": "SKINkin",
        "isCorrect": false,
        "rationale": "'SKINkin' significa 'Pele', não 'Ar'."
      },
      {
        "id": "B",
        "text": "PLANTlant",
        "isCorrect": false,
        "rationale": "'PLANTlant' significa 'Planta', não 'Ar'."
      },
      {
        "id": "C",
        "text": "Air",
        "isCorrect": true,
        "rationale": "'Air' é a tradução correta para 'Ar'."
      },
      {
        "id": "D",
        "text": "PARKark",
        "isCorrect": false,
        "rationale": "'PARKark' significa 'Parque', não 'Ar'."
      }
    ]
  },
  {
    "id": "sql-sci-f-24",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Gas",
    "wordPt": "Gás",
    "phonetic": "ɡæs",
    "sentence": "Helium is a lighter-than-air noble _________.",
    "sentencePt": "O hélio é um gás nobre mais leve que o ar.",
    "exampleEn": "Helium is a lighter-than-air noble Gas.",
    "examplePt": "O hélio é um gás nobre mais leve que o ar.",
    "gapWord": "Gas",
    "question": "Como se diz 'Gás' em inglês?",
    "hint": "Estado físico da matéria sem formato ou volume definidos.",
    "rationale": "'Gas' (ɡæs): Estado físico da matéria sem formato ou volume definidos.",
    "options": [
      {
        "id": "A",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela', não 'Gás'."
      },
      {
        "id": "B",
        "text": "COLDold",
        "isCorrect": false,
        "rationale": "'COLDold' significa 'Frio', não 'Gás'."
      },
      {
        "id": "C",
        "text": "SEEDeed",
        "isCorrect": false,
        "rationale": "'SEEDeed' significa 'Semente', não 'Gás'."
      },
      {
        "id": "D",
        "text": "Gas",
        "isCorrect": true,
        "rationale": "'Gas' é a tradução correta para 'Gás'."
      }
    ]
  },
  {
    "id": "sql-sci-f-25",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Ice",
    "wordPt": "Gelo",
    "phonetic": "aɪs",
    "sentence": "Polar _________ reflects solar radiation back to space.",
    "sentencePt": "O gelo polar reflete a radiação solar de volta ao espaço.",
    "exampleEn": "Polar Ice reflects solar radiation back to space.",
    "examplePt": "O gelo polar reflete a radiação solar de volta ao espaço.",
    "gapWord": "Ice",
    "question": "Como se diz 'Gelo' em inglês?",
    "hint": "Água solidificada abaixo de zero grau Celsius.",
    "rationale": "'Ice' (aɪs): Água solidificada abaixo de zero grau Celsius.",
    "options": [
      {
        "id": "A",
        "text": "Ice",
        "isCorrect": true,
        "rationale": "'Ice' é a tradução correta para 'Gelo'."
      },
      {
        "id": "B",
        "text": "LEAFeaf",
        "isCorrect": false,
        "rationale": "'LEAFeaf' significa 'Folha', não 'Gelo'."
      },
      {
        "id": "C",
        "text": "GENEene",
        "isCorrect": false,
        "rationale": "'GENEene' significa 'Gene', não 'Gelo'."
      },
      {
        "id": "D",
        "text": "LIGHTight",
        "isCorrect": false,
        "rationale": "'LIGHTight' significa 'Luz', não 'Gelo'."
      }
    ]
  },
  {
    "id": "sql-sci-f-26",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Fire",
    "wordPt": "Fogo",
    "phonetic": "ˈfaɪ.ər",
    "sentence": "Campers gathered around the warming campfire _________.",
    "sentencePt": "Os campistas se reuniram ao redor do fogo aquecedor.",
    "exampleEn": "Campers gathered around the warming campfire Fire.",
    "examplePt": "Os campistas se reuniram ao redor do fogo aquecedor.",
    "gapWord": "Fire",
    "question": "Como se diz 'Fogo' em inglês?",
    "hint": "Combustão química rápida que gera luz e calor.",
    "rationale": "'Fire' (ˈfaɪ.ər): Combustão química rápida que gera luz e calor.",
    "options": [
      {
        "id": "A",
        "text": "DROProp",
        "isCorrect": false,
        "rationale": "'DROProp' significa 'Gota', não 'Fogo'."
      },
      {
        "id": "B",
        "text": "Fire",
        "isCorrect": true,
        "rationale": "'Fire' é a tradução correta para 'Fogo'."
      },
      {
        "id": "C",
        "text": "LANDand",
        "isCorrect": false,
        "rationale": "'LANDand' significa 'Terra', não 'Fogo'."
      },
      {
        "id": "D",
        "text": "SKINkin",
        "isCorrect": false,
        "rationale": "'SKINkin' significa 'Pele', não 'Fogo'."
      }
    ]
  },
  {
    "id": "sql-sci-f-27",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Heat",
    "wordPt": "Calor",
    "phonetic": "hiːt",
    "sentence": "The midday _________ was intense on the open plains.",
    "sentencePt": "O calor do meio-dia era intenso nas planícies abertas.",
    "exampleEn": "The midday Heat was intense on the open plains.",
    "examplePt": "O calor do meio-dia era intenso nas planícies abertas.",
    "gapWord": "Heat",
    "question": "Como se diz 'Calor' em inglês?",
    "hint": "Energia térmica transferida entre corpos com temperaturas distintas.",
    "rationale": "'Heat' (hiːt): Energia térmica transferida entre corpos com temperaturas distintas.",
    "options": [
      {
        "id": "A",
        "text": "FISHish",
        "isCorrect": false,
        "rationale": "'FISHish' significa 'Peixe', não 'Calor'."
      },
      {
        "id": "B",
        "text": "SKYky",
        "isCorrect": false,
        "rationale": "'SKYky' significa 'Céu', não 'Calor'."
      },
      {
        "id": "C",
        "text": "Heat",
        "isCorrect": true,
        "rationale": "'Heat' é a tradução correta para 'Calor'."
      },
      {
        "id": "D",
        "text": "BUGug",
        "isCorrect": false,
        "rationale": "'BUGug' significa 'Inseto', não 'Calor'."
      }
    ]
  },
  {
    "id": "sql-sci-f-28",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Cold",
    "wordPt": "Frio",
    "phonetic": "koʊld",
    "sentence": "The winter air felt bitterly _________ tonight.",
    "sentencePt": "O ar de inverno parecia amargamente frio esta noite.",
    "exampleEn": "The winter air felt bitterly Cold tonight.",
    "examplePt": "O ar de inverno parecia amargamente frio esta noite.",
    "gapWord": "Cold",
    "question": "Como se diz 'Frio' em inglês?",
    "hint": "Sensação ou estado de baixa temperatura térmica.",
    "rationale": "'Cold' (koʊld): Sensação ou estado de baixa temperatura térmica.",
    "options": [
      {
        "id": "A",
        "text": "SANDand",
        "isCorrect": false,
        "rationale": "'SANDand' significa 'Areia', não 'Frio'."
      },
      {
        "id": "B",
        "text": "HEARTeart",
        "isCorrect": false,
        "rationale": "'HEARTeart' significa 'Coração', não 'Frio'."
      },
      {
        "id": "C",
        "text": "PARKark",
        "isCorrect": false,
        "rationale": "'PARKark' significa 'Parque', não 'Frio'."
      },
      {
        "id": "D",
        "text": "Cold",
        "isCorrect": true,
        "rationale": "'Cold' é a tradução correta para 'Frio'."
      }
    ]
  },
  {
    "id": "sql-sci-f-29",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Light",
    "wordPt": "Luz",
    "phonetic": "laɪt",
    "sentence": "Visible _________ is composed of different wavelengths.",
    "sentencePt": "A luz visível é composta por diferentes comprimentos de onda.",
    "exampleEn": "Visible Light is composed of different wavelengths.",
    "examplePt": "A luz visível é composta por diferentes comprimentos de onda.",
    "gapWord": "Light",
    "question": "Como se diz 'Luz' em inglês?",
    "hint": "Radiação eletromagnética perceptível pela visão.",
    "rationale": "'Light' (laɪt): Radiação eletromagnética perceptível pela visão.",
    "options": [
      {
        "id": "A",
        "text": "Light",
        "isCorrect": true,
        "rationale": "'Light' é a tradução correta para 'Luz'."
      },
      {
        "id": "B",
        "text": "TREEree",
        "isCorrect": false,
        "rationale": "'TREEree' significa 'Árvore', não 'Luz'."
      },
      {
        "id": "C",
        "text": "ROOToot",
        "isCorrect": false,
        "rationale": "'ROOToot' significa 'Raiz', não 'Luz'."
      },
      {
        "id": "D",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Luz'."
      }
    ]
  },
  {
    "id": "sql-sci-f-30",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Dark",
    "wordPt": "Escuro",
    "phonetic": "dɑːrk",
    "sentence": "The cave became pitch _________ without our lanterns.",
    "sentencePt": "A caverna ficou completamente escura sem as nossas lanternas.",
    "exampleEn": "The cave became pitch Dark without our lanterns.",
    "examplePt": "A caverna ficou completamente escura sem as nossas lanternas.",
    "gapWord": "Dark",
    "question": "Como se diz 'Escuro' em inglês?",
    "hint": "Ausência de claridade ou iluminação visível.",
    "rationale": "'Dark' (dɑːrk): Ausência de claridade ou iluminação visível.",
    "options": [
      {
        "id": "A",
        "text": "FACTact",
        "isCorrect": false,
        "rationale": "'FACTact' significa 'Fato', não 'Escuro'."
      },
      {
        "id": "B",
        "text": "Dark",
        "isCorrect": true,
        "rationale": "'Dark' é a tradução correta para 'Escuro'."
      },
      {
        "id": "C",
        "text": "GASas",
        "isCorrect": false,
        "rationale": "'GASas' significa 'Gás', não 'Escuro'."
      },
      {
        "id": "D",
        "text": "HEARTeart",
        "isCorrect": false,
        "rationale": "'HEARTeart' significa 'Coração', não 'Escuro'."
      }
    ]
  },
  {
    "id": "sql-sci-f-31",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Wave",
    "wordPt": "Onda",
    "phonetic": "weɪv",
    "sentence": "A rolling ocean _________ broke against the rocky reef.",
    "sentencePt": "Uma onda oceânica quebrou contra o recife rochoso.",
    "exampleEn": "A rolling ocean Wave broke against the rocky reef.",
    "examplePt": "Uma onda oceânica quebrou contra o recife rochoso.",
    "gapWord": "Wave",
    "question": "Como se diz 'Onda' em inglês?",
    "hint": "Oscilação ou perturbação que propaga energia.",
    "rationale": "'Wave' (weɪv): Oscilação ou perturbação que propaga energia.",
    "options": [
      {
        "id": "A",
        "text": "WINDind",
        "isCorrect": false,
        "rationale": "'WINDind' significa 'Vento', não 'Onda'."
      },
      {
        "id": "B",
        "text": "SUNun",
        "isCorrect": false,
        "rationale": "'SUNun' significa 'Sol', não 'Onda'."
      },
      {
        "id": "C",
        "text": "Wave",
        "isCorrect": true,
        "rationale": "'Wave' é a tradução correta para 'Onda'."
      },
      {
        "id": "D",
        "text": "BODYody",
        "isCorrect": false,
        "rationale": "'BODYody' significa 'Corpo', não 'Onda'."
      }
    ]
  },
  {
    "id": "sql-sci-f-32",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Drop",
    "wordPt": "Gota",
    "phonetic": "drɑːp",
    "sentence": "A single dew _________ sparkled on the spiderweb.",
    "sentencePt": "Uma única gota de orvalho brilhou na teia de aranha.",
    "exampleEn": "A single dew Drop sparkled on the spiderweb.",
    "examplePt": "Uma única gota de orvalho brilhou na teia de aranha.",
    "gapWord": "Drop",
    "question": "Como se diz 'Gota' em inglês?",
    "hint": "Pequena porção globular de líquido.",
    "rationale": "'Drop' (drɑːp): Pequena porção globular de líquido.",
    "options": [
      {
        "id": "A",
        "text": "PLANTlant",
        "isCorrect": false,
        "rationale": "'PLANTlant' significa 'Planta', não 'Gota'."
      },
      {
        "id": "B",
        "text": "WAVEave",
        "isCorrect": false,
        "rationale": "'WAVEave' significa 'Onda', não 'Gota'."
      },
      {
        "id": "C",
        "text": "AIRir",
        "isCorrect": false,
        "rationale": "'AIRir' significa 'Ar', não 'Gota'."
      },
      {
        "id": "D",
        "text": "Drop",
        "isCorrect": true,
        "rationale": "'Drop' é a tradução correta para 'Gota'."
      }
    ]
  },
  {
    "id": "sql-sci-f-33",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Sea",
    "wordPt": "Mar",
    "phonetic": "siː",
    "sentence": "The vast salty _________ covers most of our planet.",
    "sentencePt": "O vasto mar salgado cobre a maior parte do nosso planeta.",
    "exampleEn": "The vast salty Sea covers most of our planet.",
    "examplePt": "O vasto mar salgado cobre a maior parte do nosso planeta.",
    "gapWord": "Sea",
    "question": "Como se diz 'Mar' em inglês?",
    "hint": "Grande massa de água salgada contígua aos oceanos.",
    "rationale": "'Sea' (siː): Grande massa de água salgada contígua aos oceanos.",
    "options": [
      {
        "id": "A",
        "text": "Sea",
        "isCorrect": true,
        "rationale": "'Sea' é a tradução correta para 'Mar'."
      },
      {
        "id": "B",
        "text": "LIFEife",
        "isCorrect": false,
        "rationale": "'LIFEife' significa 'Vida', não 'Mar'."
      },
      {
        "id": "C",
        "text": "MOONoon",
        "isCorrect": false,
        "rationale": "'MOONoon' significa 'Lua', não 'Mar'."
      },
      {
        "id": "D",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela', não 'Mar'."
      }
    ]
  },
  {
    "id": "sql-sci-f-34",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "River",
    "wordPt": "Rio",
    "phonetic": "ˈrɪv.ər",
    "sentence": "The mighty Amazon _________ carries immense volume.",
    "sentencePt": "O imponente rio Amazonas transporta um volume imenso.",
    "exampleEn": "The mighty Amazon River carries immense volume.",
    "examplePt": "O imponente rio Amazonas transporta um volume imenso.",
    "gapWord": "River",
    "question": "Como se diz 'Rio' em inglês?",
    "hint": "Curso de água natural de fluxo contínuo.",
    "rationale": "'River' (ˈrɪv.ər): Curso de água natural de fluxo contínuo.",
    "options": [
      {
        "id": "A",
        "text": "ROOToot",
        "isCorrect": false,
        "rationale": "'ROOToot' significa 'Raiz', não 'Rio'."
      },
      {
        "id": "B",
        "text": "River",
        "isCorrect": true,
        "rationale": "'River' é a tradução correta para 'Rio'."
      },
      {
        "id": "C",
        "text": "MOONoon",
        "isCorrect": false,
        "rationale": "'MOONoon' significa 'Lua', não 'Rio'."
      },
      {
        "id": "D",
        "text": "LIFEife",
        "isCorrect": false,
        "rationale": "'LIFEife' significa 'Vida', não 'Rio'."
      }
    ]
  },
  {
    "id": "sql-sci-f-35",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Lake",
    "wordPt": "Lago",
    "phonetic": "leɪk",
    "sentence": "Pine trees reflected on the mirror-like _________.",
    "sentencePt": "Pinheiros refletiam no lago semelhante a um espelho.",
    "exampleEn": "Pine trees reflected on the mirror-like Lake.",
    "examplePt": "Pinheiros refletiam no lago semelhante a um espelho.",
    "gapWord": "Lake",
    "question": "Como se diz 'Lago' em inglês?",
    "hint": "Corpo de água doce cercado inteiramente por terra.",
    "rationale": "'Lake' (leɪk): Corpo de água doce cercado inteiramente por terra.",
    "options": [
      {
        "id": "A",
        "text": "LIFEife",
        "isCorrect": false,
        "rationale": "'LIFEife' significa 'Vida', não 'Lago'."
      },
      {
        "id": "B",
        "text": "ICEce",
        "isCorrect": false,
        "rationale": "'ICEce' significa 'Gelo', não 'Lago'."
      },
      {
        "id": "C",
        "text": "Lake",
        "isCorrect": true,
        "rationale": "'Lake' é a tradução correta para 'Lago'."
      },
      {
        "id": "D",
        "text": "SNOWnow",
        "isCorrect": false,
        "rationale": "'SNOWnow' significa 'Neve', não 'Lago'."
      }
    ]
  },
  {
    "id": "sql-sci-f-36",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Park",
    "wordPt": "Parque",
    "phonetic": "pɑːrk",
    "sentence": "We visited the national _________ to see wildlife.",
    "sentencePt": "Visitamos o parque nacional para observar a vida selvagem.",
    "exampleEn": "We visited the national Park to see wildlife.",
    "examplePt": "Visitamos o parque nacional para observar a vida selvagem.",
    "gapWord": "Park",
    "question": "Como se diz 'Parque' em inglês?",
    "hint": "Área preservada de proteção da natureza e biodiversidade.",
    "rationale": "'Park' (pɑːrk): Área preservada de proteção da natureza e biodiversidade.",
    "options": [
      {
        "id": "A",
        "text": "LANDand",
        "isCorrect": false,
        "rationale": "'LANDand' significa 'Terra', não 'Parque'."
      },
      {
        "id": "B",
        "text": "BUGug",
        "isCorrect": false,
        "rationale": "'BUGug' significa 'Inseto', não 'Parque'."
      },
      {
        "id": "C",
        "text": "SKYky",
        "isCorrect": false,
        "rationale": "'SKYky' significa 'Céu', não 'Parque'."
      },
      {
        "id": "D",
        "text": "Park",
        "isCorrect": true,
        "rationale": "'Park' é a tradução correta para 'Parque'."
      }
    ]
  },
  {
    "id": "sql-sci-f-37",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Land",
    "wordPt": "Terra",
    "phonetic": "lænd",
    "sentence": "After two weeks sailing they finally reached dry _________.",
    "sentencePt": "Após duas semanas navegando finalmente alcançaram terra firme.",
    "exampleEn": "After two weeks sailing they finally reached dry Land.",
    "examplePt": "Após duas semanas navegando finalmente alcançaram terra firme.",
    "gapWord": "Land",
    "question": "Como se diz 'Terra' em inglês?",
    "hint": "Superfície sólida continental em oposição ao oceano.",
    "rationale": "'Land' (lænd): Superfície sólida continental em oposição ao oceano.",
    "options": [
      {
        "id": "A",
        "text": "Land",
        "isCorrect": true,
        "rationale": "'Land' é a tradução correta para 'Terra'."
      },
      {
        "id": "B",
        "text": "SANDand",
        "isCorrect": false,
        "rationale": "'SANDand' significa 'Areia', não 'Terra'."
      },
      {
        "id": "C",
        "text": "CLOUDloud",
        "isCorrect": false,
        "rationale": "'CLOUDloud' significa 'Nuvem', não 'Terra'."
      },
      {
        "id": "D",
        "text": "ROOToot",
        "isCorrect": false,
        "rationale": "'ROOToot' significa 'Raiz', não 'Terra'."
      }
    ]
  },
  {
    "id": "sql-sci-f-38",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Hill",
    "wordPt": "Colina",
    "phonetic": "hɪl",
    "sentence": "From the grassy _________ we had a panoramic view.",
    "sentencePt": "Da colina gramada tínhamos uma vista panorâmica.",
    "exampleEn": "From the grassy Hill we had a panoramic view.",
    "examplePt": "Da colina gramada tínhamos uma vista panorâmica.",
    "gapWord": "Hill",
    "question": "Como se diz 'Colina' em inglês?",
    "hint": "Elevação moderada do relevo do terreno.",
    "rationale": "'Hill' (hɪl): Elevação moderada do relevo do terreno.",
    "options": [
      {
        "id": "A",
        "text": "BIRDird",
        "isCorrect": false,
        "rationale": "'BIRDird' significa 'Pássaro', não 'Colina'."
      },
      {
        "id": "B",
        "text": "Hill",
        "isCorrect": true,
        "rationale": "'Hill' é a tradução correta para 'Colina'."
      },
      {
        "id": "C",
        "text": "BRAINrain",
        "isCorrect": false,
        "rationale": "'BRAINrain' significa 'Cérebro', não 'Colina'."
      },
      {
        "id": "D",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Colina'."
      }
    ]
  },
  {
    "id": "sql-sci-f-39",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Atom",
    "wordPt": "Átomo",
    "phonetic": "ˈæt.əm",
    "sentence": "An _________ is made of protons, neutrons, and electrons.",
    "sentencePt": "Um átomo é composto por prótons, nêutrons e elétrons.",
    "exampleEn": "An Atom is made of protons, neutrons, and electrons.",
    "examplePt": "Um átomo é composto por prótons, nêutrons e elétrons.",
    "gapWord": "Atom",
    "question": "Como se diz 'Átomo' em inglês?",
    "hint": "Unidade básica fundamental que constitui a matéria.",
    "rationale": "'Atom' (ˈæt.əm): Unidade básica fundamental que constitui a matéria.",
    "options": [
      {
        "id": "A",
        "text": "SUNun",
        "isCorrect": false,
        "rationale": "'SUNun' significa 'Sol', não 'Átomo'."
      },
      {
        "id": "B",
        "text": "SANDand",
        "isCorrect": false,
        "rationale": "'SANDand' significa 'Areia', não 'Átomo'."
      },
      {
        "id": "C",
        "text": "Atom",
        "isCorrect": true,
        "rationale": "'Atom' é a tradução correta para 'Átomo'."
      },
      {
        "id": "D",
        "text": "FACTact",
        "isCorrect": false,
        "rationale": "'FACTact' significa 'Fato', não 'Átomo'."
      }
    ]
  },
  {
    "id": "sql-sci-f-40",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Cell",
    "wordPt": "Célula",
    "phonetic": "sɛl",
    "sentence": "The biological _________ is the building block of life.",
    "sentencePt": "A célula biológica é o bloco construtor da vida.",
    "exampleEn": "The biological Cell is the building block of life.",
    "examplePt": "A célula biológica é o bloco construtor da vida.",
    "gapWord": "Cell",
    "question": "Como se diz 'Célula' em inglês?",
    "hint": "Menor unidade estrutural viva dos organismos.",
    "rationale": "'Cell' (sɛl): Menor unidade estrutural viva dos organismos.",
    "options": [
      {
        "id": "A",
        "text": "LEAFeaf",
        "isCorrect": false,
        "rationale": "'LEAFeaf' significa 'Folha', não 'Célula'."
      },
      {
        "id": "B",
        "text": "GASas",
        "isCorrect": false,
        "rationale": "'GASas' significa 'Gás', não 'Célula'."
      },
      {
        "id": "C",
        "text": "CLOUDloud",
        "isCorrect": false,
        "rationale": "'CLOUDloud' significa 'Nuvem', não 'Célula'."
      },
      {
        "id": "D",
        "text": "Cell",
        "isCorrect": true,
        "rationale": "'Cell' é a tradução correta para 'Célula'."
      }
    ]
  },
  {
    "id": "sql-sci-f-41",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Gene",
    "wordPt": "Gene",
    "phonetic": "dʒiːn",
    "sentence": "Each distinct _________ codes for a specific protein.",
    "sentencePt": "Cada gene distinto codifica uma proteína específica.",
    "exampleEn": "Each distinct Gene codes for a specific protein.",
    "examplePt": "Cada gene distinto codifica uma proteína específica.",
    "gapWord": "Gene",
    "question": "Como se diz 'Gene' em inglês?",
    "hint": "Segmento de DNA responsável pela hereditariedade.",
    "rationale": "'Gene' (dʒiːn): Segmento de DNA responsável pela hereditariedade.",
    "options": [
      {
        "id": "A",
        "text": "Gene",
        "isCorrect": true,
        "rationale": "'Gene' é a tradução correta para 'Gene'."
      },
      {
        "id": "B",
        "text": "ROCKock",
        "isCorrect": false,
        "rationale": "'ROCKock' significa 'Rocha', não 'Gene'."
      },
      {
        "id": "C",
        "text": "BLOODlood",
        "isCorrect": false,
        "rationale": "'BLOODlood' significa 'Sangue', não 'Gene'."
      },
      {
        "id": "D",
        "text": "LIFEife",
        "isCorrect": false,
        "rationale": "'LIFEife' significa 'Vida', não 'Gene'."
      }
    ]
  },
  {
    "id": "sql-sci-f-42",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Bone",
    "wordPt": "Osso",
    "phonetic": "boʊn",
    "sentence": "The femur is the strongest _________ in the body.",
    "sentencePt": "O fêmur é o osso mais resistente do corpo humano.",
    "exampleEn": "The femur is the strongest Bone in the body.",
    "examplePt": "O fêmur é o osso mais resistente do corpo humano.",
    "gapWord": "Bone",
    "question": "Como se diz 'Osso' em inglês?",
    "hint": "Elemento rígido mineralizado que constitui o esqueleto.",
    "rationale": "'Bone' (boʊn): Elemento rígido mineralizado que constitui o esqueleto.",
    "options": [
      {
        "id": "A",
        "text": "LIFEife",
        "isCorrect": false,
        "rationale": "'LIFEife' significa 'Vida', não 'Osso'."
      },
      {
        "id": "B",
        "text": "Bone",
        "isCorrect": true,
        "rationale": "'Bone' é a tradução correta para 'Osso'."
      },
      {
        "id": "C",
        "text": "ROCKock",
        "isCorrect": false,
        "rationale": "'ROCKock' significa 'Rocha', não 'Osso'."
      },
      {
        "id": "D",
        "text": "BUGug",
        "isCorrect": false,
        "rationale": "'BUGug' significa 'Inseto', não 'Osso'."
      }
    ]
  },
  {
    "id": "sql-sci-f-43",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Skin",
    "wordPt": "Pele",
    "phonetic": "skɪn",
    "sentence": "Human _________ helps regulate body temperature.",
    "sentencePt": "A pele humana ajuda a regular a temperatura corpórea.",
    "exampleEn": "Human Skin helps regulate body temperature.",
    "examplePt": "A pele humana ajuda a regular a temperatura corpórea.",
    "gapWord": "Skin",
    "question": "Como se diz 'Pele' em inglês?",
    "hint": "Órgão tegumentar protetor externo do organismo.",
    "rationale": "'Skin' (skɪn): Órgão tegumentar protetor externo do organismo.",
    "options": [
      {
        "id": "A",
        "text": "FACTact",
        "isCorrect": false,
        "rationale": "'FACTact' significa 'Fato', não 'Pele'."
      },
      {
        "id": "B",
        "text": "GASas",
        "isCorrect": false,
        "rationale": "'GASas' significa 'Gás', não 'Pele'."
      },
      {
        "id": "C",
        "text": "Skin",
        "isCorrect": true,
        "rationale": "'Skin' é a tradução correta para 'Pele'."
      },
      {
        "id": "D",
        "text": "COLDold",
        "isCorrect": false,
        "rationale": "'COLDold' significa 'Frio', não 'Pele'."
      }
    ]
  },
  {
    "id": "sql-sci-f-44",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Blood",
    "wordPt": "Sangue",
    "phonetic": "blʌd",
    "sentence": "Nutrients and oxygen circulate throughout the _________.",
    "sentencePt": "Nutrientes e oxigênio circulam através do sangue.",
    "exampleEn": "Nutrients and oxygen circulate throughout the Blood.",
    "examplePt": "Nutrientes e oxigênio circulam através do sangue.",
    "gapWord": "Blood",
    "question": "Como se diz 'Sangue' em inglês?",
    "hint": "Fluido circulatório vital dos vertebrados.",
    "rationale": "'Blood' (blʌd): Fluido circulatório vital dos vertebrados.",
    "options": [
      {
        "id": "A",
        "text": "FLOWERlower",
        "isCorrect": false,
        "rationale": "'FLOWERlower' significa 'Flor', não 'Sangue'."
      },
      {
        "id": "B",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela', não 'Sangue'."
      },
      {
        "id": "C",
        "text": "ICEce",
        "isCorrect": false,
        "rationale": "'ICEce' significa 'Gelo', não 'Sangue'."
      },
      {
        "id": "D",
        "text": "Blood",
        "isCorrect": true,
        "rationale": "'Blood' é a tradução correta para 'Sangue'."
      }
    ]
  },
  {
    "id": "sql-sci-f-45",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Heart",
    "wordPt": "Coração",
    "phonetic": "hɑːrt",
    "sentence": "The muscular _________ pumps oxygenated fluid tirelessly.",
    "sentencePt": "O coração muscular bombeia fluido oxigenado incansavelmente.",
    "exampleEn": "The muscular Heart pumps oxygenated fluid tirelessly.",
    "examplePt": "O coração muscular bombeia fluido oxigenado incansavelmente.",
    "gapWord": "Heart",
    "question": "Como se diz 'Coração' em inglês?",
    "hint": "Órgão central bombeador do sistema cardiovascular.",
    "rationale": "'Heart' (hɑːrt): Órgão central bombeador do sistema cardiovascular.",
    "options": [
      {
        "id": "A",
        "text": "Heart",
        "isCorrect": true,
        "rationale": "'Heart' é a tradução correta para 'Coração'."
      },
      {
        "id": "B",
        "text": "ICEce",
        "isCorrect": false,
        "rationale": "'ICEce' significa 'Gelo', não 'Coração'."
      },
      {
        "id": "C",
        "text": "LEAFeaf",
        "isCorrect": false,
        "rationale": "'LEAFeaf' significa 'Folha', não 'Coração'."
      },
      {
        "id": "D",
        "text": "DARKark",
        "isCorrect": false,
        "rationale": "'DARKark' significa 'Escuro', não 'Coração'."
      }
    ]
  },
  {
    "id": "sql-sci-f-46",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Brain",
    "wordPt": "Cérebro",
    "phonetic": "breɪn",
    "sentence": "The human _________ contains billions of active neurons.",
    "sentencePt": "O cérebro humano contém bilhões de neurônios ativos.",
    "exampleEn": "The human Brain contains billions of active neurons.",
    "examplePt": "O cérebro humano contém bilhões de neurônios ativos.",
    "gapWord": "Brain",
    "question": "Como se diz 'Cérebro' em inglês?",
    "hint": "Centro biológico coordenador do sistema nervoso.",
    "rationale": "'Brain' (breɪn): Centro biológico coordenador do sistema nervoso.",
    "options": [
      {
        "id": "A",
        "text": "GASas",
        "isCorrect": false,
        "rationale": "'GASas' significa 'Gás', não 'Cérebro'."
      },
      {
        "id": "B",
        "text": "Brain",
        "isCorrect": true,
        "rationale": "'Brain' é a tradução correta para 'Cérebro'."
      },
      {
        "id": "C",
        "text": "CLOUDloud",
        "isCorrect": false,
        "rationale": "'CLOUDloud' significa 'Nuvem', não 'Cérebro'."
      },
      {
        "id": "D",
        "text": "SOILoil",
        "isCorrect": false,
        "rationale": "'SOILoil' significa 'Solo', não 'Cérebro'."
      }
    ]
  },
  {
    "id": "sql-sci-f-47",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Body",
    "wordPt": "Corpo",
    "phonetic": "ˈbɑː.di",
    "sentence": "Hydration is essential for keeping the _________ healthy.",
    "sentencePt": "Hidratação é essencial para manter o corpo saudável.",
    "exampleEn": "Hydration is essential for keeping the Body healthy.",
    "examplePt": "Hidratação é essencial para manter o corpo saudável.",
    "gapWord": "Body",
    "question": "Como se diz 'Corpo' em inglês?",
    "hint": "Estrutura biológica integral de um ser vivo.",
    "rationale": "'Body' (ˈbɑː.di): Estrutura biológica integral de um ser vivo.",
    "options": [
      {
        "id": "A",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela', não 'Corpo'."
      },
      {
        "id": "B",
        "text": "SKYky",
        "isCorrect": false,
        "rationale": "'SKYky' significa 'Céu', não 'Corpo'."
      },
      {
        "id": "C",
        "text": "Body",
        "isCorrect": true,
        "rationale": "'Body' é a tradução correta para 'Corpo'."
      },
      {
        "id": "D",
        "text": "BIRDird",
        "isCorrect": false,
        "rationale": "'BIRDird' significa 'Pássaro', não 'Corpo'."
      }
    ]
  },
  {
    "id": "sql-sci-f-48",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Mind",
    "wordPt": "Mente",
    "phonetic": "maɪnd",
    "sentence": "Curiosity keeps the scientific _________ sharp.",
    "sentencePt": "A curiosidade mantém a mente científica aguçada.",
    "exampleEn": "Curiosity keeps the scientific Mind sharp.",
    "examplePt": "A curiosidade mantém a mente científica aguçada.",
    "gapWord": "Mind",
    "question": "Como se diz 'Mente' em inglês?",
    "hint": "Faculdade intelectual, percepção e consciência.",
    "rationale": "'Mind' (maɪnd): Faculdade intelectual, percepção e consciência.",
    "options": [
      {
        "id": "A",
        "text": "FIREire",
        "isCorrect": false,
        "rationale": "'FIREire' significa 'Fogo', não 'Mente'."
      },
      {
        "id": "B",
        "text": "HILLill",
        "isCorrect": false,
        "rationale": "'HILLill' significa 'Colina', não 'Mente'."
      },
      {
        "id": "C",
        "text": "WINDind",
        "isCorrect": false,
        "rationale": "'WINDind' significa 'Vento', não 'Mente'."
      },
      {
        "id": "D",
        "text": "Mind",
        "isCorrect": true,
        "rationale": "'Mind' é a tradução correta para 'Mente'."
      }
    ]
  },
  {
    "id": "sql-sci-f-49",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Life",
    "wordPt": "Vida",
    "phonetic": "laɪf",
    "sentence": "Water is universally required for organic _________.",
    "sentencePt": "A água é universalmente requerida para a vida orgânica.",
    "exampleEn": "Water is universally required for organic Life.",
    "examplePt": "A água é universalmente requerida para a vida orgânica.",
    "gapWord": "Life",
    "question": "Como se diz 'Vida' em inglês?",
    "hint": "Condição existencial caracterizada por metabolismo e replicação.",
    "rationale": "'Life' (laɪf): Condição existencial caracterizada por metabolismo e replicação.",
    "options": [
      {
        "id": "A",
        "text": "Life",
        "isCorrect": true,
        "rationale": "'Life' é a tradução correta para 'Vida'."
      },
      {
        "id": "B",
        "text": "DUSTust",
        "isCorrect": false,
        "rationale": "'DUSTust' significa 'Poeira', não 'Vida'."
      },
      {
        "id": "C",
        "text": "MOONoon",
        "isCorrect": false,
        "rationale": "'MOONoon' significa 'Lua', não 'Vida'."
      },
      {
        "id": "D",
        "text": "SKINkin",
        "isCorrect": false,
        "rationale": "'SKINkin' significa 'Pele', não 'Vida'."
      }
    ]
  },
  {
    "id": "sql-sci-f-50",
    "topic": "ciencias",
    "difficulty": "facil",
    "wordEn": "Fact",
    "wordPt": "Fato",
    "phonetic": "fækt",
    "sentence": "Empirical evidence supports this scientific _________.",
    "sentencePt": "Evidências empíricas sustentam este fato científico.",
    "exampleEn": "Empirical evidence supports this scientific Fact.",
    "examplePt": "Evidências empíricas sustentam este fato científico.",
    "gapWord": "Fact",
    "question": "Como se diz 'Fato' em inglês?",
    "hint": "Dado comprovado por observação ou experimentação objetiva.",
    "rationale": "'Fact' (fækt): Dado comprovado por observação ou experimentação objetiva.",
    "options": [
      {
        "id": "A",
        "text": "AIRir",
        "isCorrect": false,
        "rationale": "'AIRir' significa 'Ar', não 'Fato'."
      },
      {
        "id": "B",
        "text": "Fact",
        "isCorrect": true,
        "rationale": "'Fact' é a tradução correta para 'Fato'."
      },
      {
        "id": "C",
        "text": "HEATeat",
        "isCorrect": false,
        "rationale": "'HEATeat' significa 'Calor', não 'Fato'."
      },
      {
        "id": "D",
        "text": "SKINkin",
        "isCorrect": false,
        "rationale": "'SKINkin' significa 'Pele', não 'Fato'."
      }
    ]
  },
  {
    "id": "sql-sci-m-01",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Planet",
    "wordPt": "Planeta",
    "phonetic": "ˈplæn.ɪt",
    "sentence": "Mars is the fourth _________ from the Sun.",
    "sentencePt": "Marte é o quarto planeta a partir do Sol.",
    "exampleEn": "Mars is the fourth Planet from the Sun.",
    "examplePt": "Marte é o quarto planeta a partir do Sol.",
    "gapWord": "Planet",
    "question": "Como se diz 'Planeta' em inglês?",
    "hint": "Corpo celeste esférico em órbita estelar com dominância orbital.",
    "rationale": "'Planet' (ˈplæn.ɪt): Corpo celeste esférico em órbita estelar com dominância orbital.",
    "options": [
      {
        "id": "A",
        "text": "Planet",
        "isCorrect": true,
        "rationale": "'Planet' é a tradução correta para 'Planeta'."
      },
      {
        "id": "B",
        "text": "FRICTIONriction",
        "isCorrect": false,
        "rationale": "'FRICTIONriction' significa 'Atrito', não 'Planeta'."
      },
      {
        "id": "C",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano', não 'Planeta'."
      },
      {
        "id": "D",
        "text": "SEASONeason",
        "isCorrect": false,
        "rationale": "'SEASONeason' significa 'Estação do Ano', não 'Planeta'."
      }
    ]
  },
  {
    "id": "sql-sci-m-02",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Galaxy",
    "wordPt": "Galáxia",
    "phonetic": "ˈɡæl.ək.si",
    "sentence": "The Milky Way is a barred spiral _________.",
    "sentencePt": "A Via Láctea é uma galáxia espiral barrada.",
    "exampleEn": "The Milky Way is a barred spiral Galaxy.",
    "examplePt": "A Via Láctea é uma galáxia espiral barrada.",
    "gapWord": "Galaxy",
    "question": "Como se diz 'Galáxia' em inglês?",
    "hint": "Sistema astronômico maciço composto por bilhões de estrelas.",
    "rationale": "'Galaxy' (ˈɡæl.ək.si): Sistema astronômico maciço composto por bilhões de estrelas.",
    "options": [
      {
        "id": "A",
        "text": "POWERower",
        "isCorrect": false,
        "rationale": "'POWERower' significa 'Potência / Força', não 'Galáxia'."
      },
      {
        "id": "B",
        "text": "Galaxy",
        "isCorrect": true,
        "rationale": "'Galaxy' é a tradução correta para 'Galáxia'."
      },
      {
        "id": "C",
        "text": "PHYSICShysics",
        "isCorrect": false,
        "rationale": "'PHYSICShysics' significa 'Física', não 'Galáxia'."
      },
      {
        "id": "D",
        "text": "FRICTIONriction",
        "isCorrect": false,
        "rationale": "'FRICTIONriction' significa 'Atrito', não 'Galáxia'."
      }
    ]
  },
  {
    "id": "sql-sci-m-03",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Gravity",
    "wordPt": "Gravidade",
    "phonetic": "ˈɡræv.ə.ti",
    "sentence": "The force of _________ pulls objects toward the planet center.",
    "sentencePt": "A força da gravidade atrai os corpos em direção ao centro do planeta.",
    "exampleEn": "The force of Gravity pulls objects toward the planet center.",
    "examplePt": "A força da gravidade atrai os corpos em direção ao centro do planeta.",
    "gapWord": "Gravity",
    "question": "Como se diz 'Gravidade' em inglês?",
    "hint": "Interação física fundamental atrativa entre massas.",
    "rationale": "'Gravity' (ˈɡræv.ə.ti): Interação física fundamental atrativa entre massas.",
    "options": [
      {
        "id": "A",
        "text": "ECOSYSTEMcosystem",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMcosystem' significa 'Ecossistema', não 'Gravidade'."
      },
      {
        "id": "B",
        "text": "THUNDERhunder",
        "isCorrect": false,
        "rationale": "'THUNDERhunder' significa 'Trovão', não 'Gravidade'."
      },
      {
        "id": "C",
        "text": "Gravity",
        "isCorrect": true,
        "rationale": "'Gravity' é a tradução correta para 'Gravidade'."
      },
      {
        "id": "D",
        "text": "SENSORensor",
        "isCorrect": false,
        "rationale": "'SENSORensor' significa 'Sensor', não 'Gravidade'."
      }
    ]
  },
  {
    "id": "sql-sci-m-04",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Space",
    "wordPt": "Espaço",
    "phonetic": "speɪs",
    "sentence": "Telescopes observe stars in deep outer _________.",
    "sentencePt": "Telescópios observam estrelas no espaço sideral profundo.",
    "exampleEn": "Telescopes observe stars in deep outer Space.",
    "examplePt": "Telescópios observam estrelas no espaço sideral profundo.",
    "gapWord": "Space",
    "question": "Como se diz 'Espaço' em inglês?",
    "hint": "Vazio cósmico tridimensional fora da atmosfera terrestre.",
    "rationale": "'Space' (speɪs): Vazio cósmico tridimensional fora da atmosfera terrestre.",
    "options": [
      {
        "id": "A",
        "text": "JUNGLEungle",
        "isCorrect": false,
        "rationale": "'JUNGLEungle' significa 'Selva', não 'Espaço'."
      },
      {
        "id": "B",
        "text": "ENERGYnergy",
        "isCorrect": false,
        "rationale": "'ENERGYnergy' significa 'Energia', não 'Espaço'."
      },
      {
        "id": "C",
        "text": "GLACIERlacier",
        "isCorrect": false,
        "rationale": "'GLACIERlacier' significa 'Geleira', não 'Espaço'."
      },
      {
        "id": "D",
        "text": "Space",
        "isCorrect": true,
        "rationale": "'Space' é a tradução correta para 'Espaço'."
      }
    ]
  },
  {
    "id": "sql-sci-m-05",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Climate",
    "wordPt": "Clima",
    "phonetic": "ˈklaɪ.mət",
    "sentence": "The regional _________ has become hotter over the decade.",
    "sentencePt": "O clima regional tornou-se mais quente ao longo da década.",
    "exampleEn": "The regional Climate has become hotter over the decade.",
    "examplePt": "O clima regional tornou-se mais quente ao longo da década.",
    "gapWord": "Climate",
    "question": "Como se diz 'Clima' em inglês?",
    "hint": "Padrão meteorológico médio de longo prazo de uma região.",
    "rationale": "'Climate' (ˈklaɪ.mət): Padrão meteorológico médio de longo prazo de uma região.",
    "options": [
      {
        "id": "A",
        "text": "Climate",
        "isCorrect": true,
        "rationale": "'Climate' é a tradução correta para 'Clima'."
      },
      {
        "id": "B",
        "text": "POWERower",
        "isCorrect": false,
        "rationale": "'POWERower' significa 'Potência / Força', não 'Clima'."
      },
      {
        "id": "C",
        "text": "ENERGYnergy",
        "isCorrect": false,
        "rationale": "'ENERGYnergy' significa 'Energia', não 'Clima'."
      },
      {
        "id": "D",
        "text": "FORCEorce",
        "isCorrect": false,
        "rationale": "'FORCEorce' significa 'Força', não 'Clima'."
      }
    ]
  },
  {
    "id": "sql-sci-m-06",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Weather",
    "wordPt": "Tempo Meteorológico",
    "phonetic": "ˈwɛð.ər",
    "sentence": "Check the local _________ forecast before going on a hike.",
    "sentencePt": "Verifique a previsão do tempo meteorológico antes de caminhar.",
    "exampleEn": "Check the local Weather forecast before going on a hike.",
    "examplePt": "Verifique a previsão do tempo meteorológico antes de caminhar.",
    "gapWord": "Weather",
    "question": "Como se diz 'Tempo Meteorológico' em inglês?",
    "hint": "Estado atmosférico momentâneo e variável.",
    "rationale": "'Weather' (ˈwɛð.ər): Estado atmosférico momentâneo e variável.",
    "options": [
      {
        "id": "A",
        "text": "REPTILEeptile",
        "isCorrect": false,
        "rationale": "'REPTILEeptile' significa 'Réptil', não 'Tempo Meteorológico'."
      },
      {
        "id": "B",
        "text": "Weather",
        "isCorrect": true,
        "rationale": "'Weather' é a tradução correta para 'Tempo Meteorológico'."
      },
      {
        "id": "C",
        "text": "NATUREature",
        "isCorrect": false,
        "rationale": "'NATUREature' significa 'Natureza', não 'Tempo Meteorológico'."
      },
      {
        "id": "D",
        "text": "ELEMENTlement",
        "isCorrect": false,
        "rationale": "'ELEMENTlement' significa 'Elemento Químico', não 'Tempo Meteorológico'."
      }
    ]
  },
  {
    "id": "sql-sci-m-07",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Season",
    "wordPt": "Estação do Ano",
    "phonetic": "ˈsiː.zən",
    "sentence": "Autumn is the harvest _________ when leaves turn golden.",
    "sentencePt": "O outono é a estação do ano da colheita quando as folhas ficam douradas.",
    "exampleEn": "Autumn is the harvest Season when leaves turn golden.",
    "examplePt": "O outono é a estação do ano da colheita quando as folhas ficam douradas.",
    "gapWord": "Season",
    "question": "Como se diz 'Estação do Ano' em inglês?",
    "hint": "Período climático anual delimitado pela inclinação da Terra.",
    "rationale": "'Season' (ˈsiː.zən): Período climático anual delimitado pela inclinação da Terra.",
    "options": [
      {
        "id": "A",
        "text": "MOLECULEolecule",
        "isCorrect": false,
        "rationale": "'MOLECULEolecule' significa 'Molécula', não 'Estação do Ano'."
      },
      {
        "id": "B",
        "text": "RADIATIONadiation",
        "isCorrect": false,
        "rationale": "'RADIATIONadiation' significa 'Radiação', não 'Estação do Ano'."
      },
      {
        "id": "C",
        "text": "Season",
        "isCorrect": true,
        "rationale": "'Season' é a tradução correta para 'Estação do Ano'."
      },
      {
        "id": "D",
        "text": "SCIENCEcience",
        "isCorrect": false,
        "rationale": "'SCIENCEcience' significa 'Ciência', não 'Estação do Ano'."
      }
    ]
  },
  {
    "id": "sql-sci-m-08",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Storm",
    "wordPt": "Tempestade",
    "phonetic": "stɔːrm",
    "sentence": "The severe electrical _________ knocked out power lines.",
    "sentencePt": "A severa tempestade elétrica derrubou as linhas de energia.",
    "exampleEn": "The severe electrical Storm knocked out power lines.",
    "examplePt": "A severa tempestade elétrica derrubou as linhas de energia.",
    "gapWord": "Storm",
    "question": "Como se diz 'Tempestade' em inglês?",
    "hint": "Perturbação violenta da atmosfera com ventos e chuva forte.",
    "rationale": "'Storm' (stɔːrm): Perturbação violenta da atmosfera com ventos e chuva forte.",
    "options": [
      {
        "id": "A",
        "text": "NATUREature",
        "isCorrect": false,
        "rationale": "'NATUREature' significa 'Natureza', não 'Tempestade'."
      },
      {
        "id": "B",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano', não 'Tempestade'."
      },
      {
        "id": "C",
        "text": "JUNGLEungle",
        "isCorrect": false,
        "rationale": "'JUNGLEungle' significa 'Selva', não 'Tempestade'."
      },
      {
        "id": "D",
        "text": "Storm",
        "isCorrect": true,
        "rationale": "'Storm' é a tradução correta para 'Tempestade'."
      }
    ]
  },
  {
    "id": "sql-sci-m-09",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Thunder",
    "wordPt": "Trovão",
    "phonetic": "ˈθʌn.dər",
    "sentence": "A booming crack of _________ echoed through the valley.",
    "sentencePt": "Um estrondo estrondoso de trovão ecoou pelo vale.",
    "exampleEn": "A booming crack of Thunder echoed through the valley.",
    "examplePt": "Um estrondo estrondoso de trovão ecoou pelo vale.",
    "gapWord": "Thunder",
    "question": "Como se diz 'Trovão' em inglês?",
    "hint": "Onda de choque sonora causada pela expansão do ar pelo raio.",
    "rationale": "'Thunder' (ˈθʌn.dər): Onda de choque sonora causada pela expansão do ar pelo raio.",
    "options": [
      {
        "id": "A",
        "text": "Thunder",
        "isCorrect": true,
        "rationale": "'Thunder' é a tradução correta para 'Trovão'."
      },
      {
        "id": "B",
        "text": "NATUREature",
        "isCorrect": false,
        "rationale": "'NATUREature' significa 'Natureza', não 'Trovão'."
      },
      {
        "id": "C",
        "text": "GLACIERlacier",
        "isCorrect": false,
        "rationale": "'GLACIERlacier' significa 'Geleira', não 'Trovão'."
      },
      {
        "id": "D",
        "text": "STORMtorm",
        "isCorrect": false,
        "rationale": "'STORMtorm' significa 'Tempestade', não 'Trovão'."
      }
    ]
  },
  {
    "id": "sql-sci-m-10",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Lightning",
    "wordPt": "Relâmpago",
    "phonetic": "ˈlaɪt.nɪŋ",
    "sentence": "A brilliant flash of _________ lit the dark horizon.",
    "sentencePt": "Um clarão brilhante de relâmpago iluminou o horizonte escuro.",
    "exampleEn": "A brilliant flash of Lightning lit the dark horizon.",
    "examplePt": "Um clarão brilhante de relâmpago iluminou o horizonte escuro.",
    "gapWord": "Lightning",
    "question": "Como se diz 'Relâmpago' em inglês?",
    "hint": "Descarga eletrostática luminosa entre nuvens e solo.",
    "rationale": "'Lightning' (ˈlaɪt.nɪŋ): Descarga eletrostática luminosa entre nuvens e solo.",
    "options": [
      {
        "id": "A",
        "text": "ECOSYSTEMcosystem",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMcosystem' significa 'Ecossistema', não 'Relâmpago'."
      },
      {
        "id": "B",
        "text": "Lightning",
        "isCorrect": true,
        "rationale": "'Lightning' é a tradução correta para 'Relâmpago'."
      },
      {
        "id": "C",
        "text": "STREAMtream",
        "isCorrect": false,
        "rationale": "'STREAMtream' significa 'Riacho', não 'Relâmpago'."
      },
      {
        "id": "D",
        "text": "INSECTnsect",
        "isCorrect": false,
        "rationale": "'INSECTnsect' significa 'Inseto', não 'Relâmpago'."
      }
    ]
  },
  {
    "id": "sql-sci-m-11",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Forest",
    "wordPt": "Floresta",
    "phonetic": "ˈfɔːr.ɪst",
    "sentence": "The dense tropical _________ hosts rich wildlife.",
    "sentencePt": "A densa floresta tropical abriga uma rica vida selvagem.",
    "exampleEn": "The dense tropical Forest hosts rich wildlife.",
    "examplePt": "A densa floresta tropical abriga uma rica vida selvagem.",
    "gapWord": "Forest",
    "question": "Como se diz 'Floresta' em inglês?",
    "hint": "Ecossistema terrestre dominado por cobertura de árvores.",
    "rationale": "'Forest' (ˈfɔːr.ɪst): Ecossistema terrestre dominado por cobertura de árvores.",
    "options": [
      {
        "id": "A",
        "text": "SCIENCEcience",
        "isCorrect": false,
        "rationale": "'SCIENCEcience' significa 'Ciência', não 'Floresta'."
      },
      {
        "id": "B",
        "text": "PRESSUREressure",
        "isCorrect": false,
        "rationale": "'PRESSUREressure' significa 'Pressão', não 'Floresta'."
      },
      {
        "id": "C",
        "text": "Forest",
        "isCorrect": true,
        "rationale": "'Forest' é a tradução correta para 'Floresta'."
      },
      {
        "id": "D",
        "text": "VOLTAGEoltage",
        "isCorrect": false,
        "rationale": "'VOLTAGEoltage' significa 'Tensão Elétrica / Voltagem', não 'Floresta'."
      }
    ]
  },
  {
    "id": "sql-sci-m-12",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Jungle",
    "wordPt": "Selva",
    "phonetic": "ˈdʒʌŋ.ɡəl",
    "sentence": "Explorers navigated the humid rainforest _________.",
    "sentencePt": "Exploradores navegaram pela selva úmida da mata tropical.",
    "exampleEn": "Explorers navigated the humid rainforest Jungle.",
    "examplePt": "Exploradores navegaram pela selva úmida da mata tropical.",
    "gapWord": "Jungle",
    "question": "Como se diz 'Selva' em inglês?",
    "hint": "Mata fechada, tropical e luxuriante com vegetação densa.",
    "rationale": "'Jungle' (ˈdʒʌŋ.ɡəl): Mata fechada, tropical e luxuriante com vegetação densa.",
    "options": [
      {
        "id": "A",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano', não 'Selva'."
      },
      {
        "id": "B",
        "text": "REACTIONeaction",
        "isCorrect": false,
        "rationale": "'REACTIONeaction' significa 'Reação Química', não 'Selva'."
      },
      {
        "id": "C",
        "text": "ISLANDsland",
        "isCorrect": false,
        "rationale": "'ISLANDsland' significa 'Ilha', não 'Selva'."
      },
      {
        "id": "D",
        "text": "Jungle",
        "isCorrect": true,
        "rationale": "'Jungle' é a tradução correta para 'Selva'."
      }
    ]
  },
  {
    "id": "sql-sci-m-13",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Desert",
    "wordPt": "Deserto",
    "phonetic": "ˈdɛz.ərt",
    "sentence": "Cacti survive the arid conditions of the hot _________.",
    "sentencePt": "Cactos sobrevivem às condições áridas do deserto quente.",
    "exampleEn": "Cacti survive the arid conditions of the hot Desert.",
    "examplePt": "Cactos sobrevivem às condições áridas do deserto quente.",
    "gapWord": "Desert",
    "question": "Como se diz 'Deserto' em inglês?",
    "hint": "Bioma árido caracterizado por pouca precipitação pluviométrica.",
    "rationale": "'Desert' (ˈdɛz.ərt): Bioma árido caracterizado por pouca precipitação pluviométrica.",
    "options": [
      {
        "id": "A",
        "text": "Desert",
        "isCorrect": true,
        "rationale": "'Desert' é a tradução correta para 'Deserto'."
      },
      {
        "id": "B",
        "text": "GALAXYalaxy",
        "isCorrect": false,
        "rationale": "'GALAXYalaxy' significa 'Galáxia', não 'Deserto'."
      },
      {
        "id": "C",
        "text": "ANIMALnimal",
        "isCorrect": false,
        "rationale": "'ANIMALnimal' significa 'Animal', não 'Deserto'."
      },
      {
        "id": "D",
        "text": "DENSITYensity",
        "isCorrect": false,
        "rationale": "'DENSITYensity' significa 'Densidade', não 'Deserto'."
      }
    ]
  },
  {
    "id": "sql-sci-m-14",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Island",
    "wordPt": "Ilha",
    "phonetic": "ˈaɪ.lənd",
    "sentence": "The isolated volcanic _________ is home to rare birds.",
    "sentencePt": "A ilha vulcânica isolada abriga aves raras.",
    "exampleEn": "The isolated volcanic Island is home to rare birds.",
    "examplePt": "A ilha vulcânica isolada abriga aves raras.",
    "gapWord": "Island",
    "question": "Como se diz 'Ilha' em inglês?",
    "hint": "Porção de terra cercada de água por todos os lados.",
    "rationale": "'Island' (ˈaɪ.lənd): Porção de terra cercada de água por todos os lados.",
    "options": [
      {
        "id": "A",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano', não 'Ilha'."
      },
      {
        "id": "B",
        "text": "Island",
        "isCorrect": true,
        "rationale": "'Island' é a tradução correta para 'Ilha'."
      },
      {
        "id": "C",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta', não 'Ilha'."
      },
      {
        "id": "D",
        "text": "MAGNETagnet",
        "isCorrect": false,
        "rationale": "'MAGNETagnet' significa 'Ímã', não 'Ilha'."
      }
    ]
  },
  {
    "id": "sql-sci-m-15",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Volcano",
    "wordPt": "Vulcão",
    "phonetic": "vɑːlˈkeɪ.noʊ",
    "sentence": "The active _________ spewed molten magma and ash.",
    "sentencePt": "O vulcão ativo expeliu magma fundido e cinzas.",
    "exampleEn": "The active Volcano spewed molten magma and ash.",
    "examplePt": "O vulcão ativo expeliu magma fundido e cinzas.",
    "gapWord": "Volcano",
    "question": "Como se diz 'Vulcão' em inglês?",
    "hint": "Abertura na crosta terrestre por onde escapam lava e gases.",
    "rationale": "'Volcano' (vɑːlˈkeɪ.noʊ): Abertura na crosta terrestre por onde escapam lava e gases.",
    "options": [
      {
        "id": "A",
        "text": "WEATHEReather",
        "isCorrect": false,
        "rationale": "'WEATHEReather' significa 'Tempo Meteorológico', não 'Vulcão'."
      },
      {
        "id": "B",
        "text": "FRICTIONriction",
        "isCorrect": false,
        "rationale": "'FRICTIONriction' significa 'Atrito', não 'Vulcão'."
      },
      {
        "id": "C",
        "text": "Volcano",
        "isCorrect": true,
        "rationale": "'Volcano' é a tradução correta para 'Vulcão'."
      },
      {
        "id": "D",
        "text": "PRESSUREressure",
        "isCorrect": false,
        "rationale": "'PRESSUREressure' significa 'Pressão', não 'Vulcão'."
      }
    ]
  },
  {
    "id": "sql-sci-m-16",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Ocean",
    "wordPt": "Oceano",
    "phonetic": "ˈoʊ.ʃən",
    "sentence": "The Pacific is the largest _________ on Earth.",
    "sentencePt": "O Pacífico é o maior oceano da Terra.",
    "exampleEn": "The Pacific is the largest Ocean on Earth.",
    "examplePt": "O Pacífico é o maior oceano da Terra.",
    "gapWord": "Ocean",
    "question": "Como se diz 'Oceano' em inglês?",
    "hint": "Grande massa contínua de água salgada que cobre os continentes.",
    "rationale": "'Ocean' (ˈoʊ.ʃən): Grande massa contínua de água salgada que cobre os continentes.",
    "options": [
      {
        "id": "A",
        "text": "THEORYheory",
        "isCorrect": false,
        "rationale": "'THEORYheory' significa 'Teoria Científica', não 'Oceano'."
      },
      {
        "id": "B",
        "text": "RADIATIONadiation",
        "isCorrect": false,
        "rationale": "'RADIATIONadiation' significa 'Radiação', não 'Oceano'."
      },
      {
        "id": "C",
        "text": "VALLEYalley",
        "isCorrect": false,
        "rationale": "'VALLEYalley' significa 'Vale', não 'Oceano'."
      },
      {
        "id": "D",
        "text": "Ocean",
        "isCorrect": true,
        "rationale": "'Ocean' é a tradução correta para 'Oceano'."
      }
    ]
  },
  {
    "id": "sql-sci-m-17",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Stream",
    "wordPt": "Riacho",
    "phonetic": "striːm",
    "sentence": "A clear mountain _________ babbling over pebbles.",
    "sentencePt": "Um riacho límpido da montanha murmurando sobre pedrinhas.",
    "exampleEn": "A clear mountain Stream babbling over pebbles.",
    "examplePt": "Um riacho límpido da montanha murmurando sobre pedrinhas.",
    "gapWord": "Stream",
    "question": "Como se diz 'Riacho' em inglês?",
    "hint": "Pequeno curso de água natural menor que um rio.",
    "rationale": "'Stream' (striːm): Pequeno curso de água natural menor que um rio.",
    "options": [
      {
        "id": "A",
        "text": "Stream",
        "isCorrect": true,
        "rationale": "'Stream' é a tradução correta para 'Riacho'."
      },
      {
        "id": "B",
        "text": "GRAVITYravity",
        "isCorrect": false,
        "rationale": "'GRAVITYravity' significa 'Gravidade', não 'Riacho'."
      },
      {
        "id": "C",
        "text": "ISLANDsland",
        "isCorrect": false,
        "rationale": "'ISLANDsland' significa 'Ilha', não 'Riacho'."
      },
      {
        "id": "D",
        "text": "REPTILEeptile",
        "isCorrect": false,
        "rationale": "'REPTILEeptile' significa 'Réptil', não 'Riacho'."
      }
    ]
  },
  {
    "id": "sql-sci-m-18",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Valley",
    "wordPt": "Vale",
    "phonetic": "ˈvæl.i",
    "sentence": "A fertile river _________ lay between two mountain ranges.",
    "sentencePt": "Um fértil vale fluvial ficava entre duas cordilheiras.",
    "exampleEn": "A fertile river Valley lay between two mountain ranges.",
    "examplePt": "Um fértil vale fluvial ficava entre duas cordilheiras.",
    "gapWord": "Valley",
    "question": "Como se diz 'Vale' em inglês?",
    "hint": "Depressão de terreno alongada escavada por rios ou geleiras.",
    "rationale": "'Valley' (ˈvæl.i): Depressão de terreno alongada escavada por rios ou geleiras.",
    "options": [
      {
        "id": "A",
        "text": "THEORYheory",
        "isCorrect": false,
        "rationale": "'THEORYheory' significa 'Teoria Científica', não 'Vale'."
      },
      {
        "id": "B",
        "text": "Valley",
        "isCorrect": true,
        "rationale": "'Valley' é a tradução correta para 'Vale'."
      },
      {
        "id": "C",
        "text": "STORMtorm",
        "isCorrect": false,
        "rationale": "'STORMtorm' significa 'Tempestade', não 'Vale'."
      },
      {
        "id": "D",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta', não 'Vale'."
      }
    ]
  },
  {
    "id": "sql-sci-m-19",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Glacier",
    "wordPt": "Geleira",
    "phonetic": "ˈɡleɪ.ʃər",
    "sentence": "The slow-moving _________ carved out a deep fjord.",
    "sentencePt": "A geleira de movimento lento esculpiu um fiorde profundo.",
    "exampleEn": "The slow-moving Glacier carved out a deep fjord.",
    "examplePt": "A geleira de movimento lento esculpiu um fiorde profundo.",
    "gapWord": "Glacier",
    "question": "Como se diz 'Geleira' em inglês?",
    "hint": "Grande massa espessa de gelo em movimento lento.",
    "rationale": "'Glacier' (ˈɡleɪ.ʃər): Grande massa espessa de gelo em movimento lento.",
    "options": [
      {
        "id": "A",
        "text": "SCIENCEcience",
        "isCorrect": false,
        "rationale": "'SCIENCEcience' significa 'Ciência', não 'Geleira'."
      },
      {
        "id": "B",
        "text": "MAMMALammal",
        "isCorrect": false,
        "rationale": "'MAMMALammal' significa 'Mamífero', não 'Geleira'."
      },
      {
        "id": "C",
        "text": "Glacier",
        "isCorrect": true,
        "rationale": "'Glacier' é a tradução correta para 'Geleira'."
      },
      {
        "id": "D",
        "text": "FORCEorce",
        "isCorrect": false,
        "rationale": "'FORCEorce' significa 'Força', não 'Geleira'."
      }
    ]
  },
  {
    "id": "sql-sci-m-20",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Species",
    "wordPt": "Espécie",
    "phonetic": "ˈspiː.ʃiːz",
    "sentence": "Biologists documented a newly discovered plant _________.",
    "sentencePt": "Biólogos documentaram uma espécie de planta recém-descoberta.",
    "exampleEn": "Biologists documented a newly discovered plant Species.",
    "examplePt": "Biólogos documentaram uma espécie de planta recém-descoberta.",
    "gapWord": "Species",
    "question": "Como se diz 'Espécie' em inglês?",
    "hint": "Grupo taxonômico fundamental cujos membros se reproduzem entre si.",
    "rationale": "'Species' (ˈspiː.ʃiːz): Grupo taxonômico fundamental cujos membros se reproduzem entre si.",
    "options": [
      {
        "id": "A",
        "text": "FRICTIONriction",
        "isCorrect": false,
        "rationale": "'FRICTIONriction' significa 'Atrito', não 'Espécie'."
      },
      {
        "id": "B",
        "text": "FORMULAormula",
        "isCorrect": false,
        "rationale": "'FORMULAormula' significa 'Fórmula', não 'Espécie'."
      },
      {
        "id": "C",
        "text": "GALAXYalaxy",
        "isCorrect": false,
        "rationale": "'GALAXYalaxy' significa 'Galáxia', não 'Espécie'."
      },
      {
        "id": "D",
        "text": "Species",
        "isCorrect": true,
        "rationale": "'Species' é a tradução correta para 'Espécie'."
      }
    ]
  },
  {
    "id": "sql-sci-m-21",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Animal",
    "wordPt": "Animal",
    "phonetic": "ˈæn.ə.məl",
    "sentence": "Every wild _________ plays a role in the ecosystem.",
    "sentencePt": "Cada animal selvagem desempenha um papel no ecossistema.",
    "exampleEn": "Every wild Animal plays a role in the ecosystem.",
    "examplePt": "Cada animal selvagem desempenha um papel no ecossistema.",
    "gapWord": "Animal",
    "question": "Como se diz 'Animal' em inglês?",
    "hint": "Ser vivo pluricelular heterótrofo com locomoção.",
    "rationale": "'Animal' (ˈæn.ə.məl): Ser vivo pluricelular heterótrofo com locomoção.",
    "options": [
      {
        "id": "A",
        "text": "Animal",
        "isCorrect": true,
        "rationale": "'Animal' é a tradução correta para 'Animal'."
      },
      {
        "id": "B",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto', não 'Animal'."
      },
      {
        "id": "C",
        "text": "POWERower",
        "isCorrect": false,
        "rationale": "'POWERower' significa 'Potência / Força', não 'Animal'."
      },
      {
        "id": "D",
        "text": "MOLECULEolecule",
        "isCorrect": false,
        "rationale": "'MOLECULEolecule' significa 'Molécula', não 'Animal'."
      }
    ]
  },
  {
    "id": "sql-sci-m-22",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Mammal",
    "wordPt": "Mamífero",
    "phonetic": "ˈmæm.əl",
    "sentence": "A whale is an aquatic _________ that nurses its young.",
    "sentencePt": "A baleia é um mamífero aquático que amamenta seus filhotes.",
    "exampleEn": "A whale is an aquatic Mammal that nurses its young.",
    "examplePt": "A baleia é um mamífero aquático que amamenta seus filhotes.",
    "gapWord": "Mammal",
    "question": "Como se diz 'Mamífero' em inglês?",
    "hint": "Vertebrado com glândulas mamárias e pelos corporais.",
    "rationale": "'Mammal' (ˈmæm.əl): Vertebrado com glândulas mamárias e pelos corporais.",
    "options": [
      {
        "id": "A",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto', não 'Mamífero'."
      },
      {
        "id": "B",
        "text": "Mammal",
        "isCorrect": true,
        "rationale": "'Mammal' é a tradução correta para 'Mamífero'."
      },
      {
        "id": "C",
        "text": "MOTIONotion",
        "isCorrect": false,
        "rationale": "'MOTIONotion' significa 'Movimento', não 'Mamífero'."
      },
      {
        "id": "D",
        "text": "SPECIESpecies",
        "isCorrect": false,
        "rationale": "'SPECIESpecies' significa 'Espécie', não 'Mamífero'."
      }
    ]
  },
  {
    "id": "sql-sci-m-23",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Reptile",
    "wordPt": "Réptil",
    "phonetic": "ˈrɛp.taɪl",
    "sentence": "The cold-blooded _________ basked on the sunlit rock.",
    "sentencePt": "O réptil de sangue frio tomava sol sobre a rocha iluminada.",
    "exampleEn": "The cold-blooded Reptile basked on the sunlit rock.",
    "examplePt": "O réptil de sangue frio tomava sol sobre a rocha iluminada.",
    "gapWord": "Reptile",
    "question": "Como se diz 'Réptil' em inglês?",
    "hint": "Vertebrado ectotérmico com escamas ou placas córneas.",
    "rationale": "'Reptile' (ˈrɛp.taɪl): Vertebrado ectotérmico com escamas ou placas córneas.",
    "options": [
      {
        "id": "A",
        "text": "BIOLOGYiology",
        "isCorrect": false,
        "rationale": "'BIOLOGYiology' significa 'Biologia', não 'Réptil'."
      },
      {
        "id": "B",
        "text": "MOLECULEolecule",
        "isCorrect": false,
        "rationale": "'MOLECULEolecule' significa 'Molécula', não 'Réptil'."
      },
      {
        "id": "C",
        "text": "Reptile",
        "isCorrect": true,
        "rationale": "'Reptile' é a tradução correta para 'Réptil'."
      },
      {
        "id": "D",
        "text": "VOLCANOolcano",
        "isCorrect": false,
        "rationale": "'VOLCANOolcano' significa 'Vulcão', não 'Réptil'."
      }
    ]
  },
  {
    "id": "sql-sci-m-24",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Insect",
    "wordPt": "Inseto",
    "phonetic": "ˈɪn.sɛkt",
    "sentence": "An ant is a social _________ with six jointed legs.",
    "sentencePt": "A formiga é um inseto social com seis patas articuladas.",
    "exampleEn": "An ant is a social Insect with six jointed legs.",
    "examplePt": "A formiga é um inseto social com seis patas articuladas.",
    "gapWord": "Insect",
    "question": "Como se diz 'Inseto' em inglês?",
    "hint": "Artrópode invertebrado com corpo dividido em três tagmas.",
    "rationale": "'Insect' (ˈɪn.sɛkt): Artrópode invertebrado com corpo dividido em três tagmas.",
    "options": [
      {
        "id": "A",
        "text": "RADIATIONadiation",
        "isCorrect": false,
        "rationale": "'RADIATIONadiation' significa 'Radiação', não 'Inseto'."
      },
      {
        "id": "B",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto', não 'Inseto'."
      },
      {
        "id": "C",
        "text": "MAMMALammal",
        "isCorrect": false,
        "rationale": "'MAMMALammal' significa 'Mamífero', não 'Inseto'."
      },
      {
        "id": "D",
        "text": "Insect",
        "isCorrect": true,
        "rationale": "'Insect' é a tradução correta para 'Inseto'."
      }
    ]
  },
  {
    "id": "sql-sci-m-25",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Organism",
    "wordPt": "Organismo",
    "phonetic": "ˈɔːr.ɡən.ɪ.zəm",
    "sentence": "Even a single-celled _________ demonstrates life processes.",
    "sentencePt": "Mesmo um organismo unicelular demonstra processos vitais.",
    "exampleEn": "Even a single-celled Organism demonstrates life processes.",
    "examplePt": "Mesmo um organismo unicelular demonstra processos vitais.",
    "gapWord": "Organism",
    "question": "Como se diz 'Organismo' em inglês?",
    "hint": "Qualquer entidade viva individual funcional.",
    "rationale": "'Organism' (ˈɔːr.ɡən.ɪ.zəm): Qualquer entidade viva individual funcional.",
    "options": [
      {
        "id": "A",
        "text": "Organism",
        "isCorrect": true,
        "rationale": "'Organism' é a tradução correta para 'Organismo'."
      },
      {
        "id": "B",
        "text": "POWERower",
        "isCorrect": false,
        "rationale": "'POWERower' significa 'Potência / Força', não 'Organismo'."
      },
      {
        "id": "C",
        "text": "SCIENCEcience",
        "isCorrect": false,
        "rationale": "'SCIENCEcience' significa 'Ciência', não 'Organismo'."
      },
      {
        "id": "D",
        "text": "THUNDERhunder",
        "isCorrect": false,
        "rationale": "'THUNDERhunder' significa 'Trovão', não 'Organismo'."
      }
    ]
  },
  {
    "id": "sql-sci-m-26",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Ecosystem",
    "wordPt": "Ecossistema",
    "phonetic": "ˈiː.koʊˌsɪs.təm",
    "sentence": "Coral reefs form a fragile marine _________.",
    "sentencePt": "Recifes de corais formam um frágil ecossistema marinho.",
    "exampleEn": "Coral reefs form a fragile marine Ecosystem.",
    "examplePt": "Recifes de corais formam um frágil ecossistema marinho.",
    "gapWord": "Ecosystem",
    "question": "Como se diz 'Ecossistema' em inglês?",
    "hint": "Comunidade biológica em interação com seu ambiente físico.",
    "rationale": "'Ecosystem' (ˈiː.koʊˌsɪs.təm): Comunidade biológica em interação com seu ambiente físico.",
    "options": [
      {
        "id": "A",
        "text": "CLIMATElimate",
        "isCorrect": false,
        "rationale": "'CLIMATElimate' significa 'Clima', não 'Ecossistema'."
      },
      {
        "id": "B",
        "text": "Ecosystem",
        "isCorrect": true,
        "rationale": "'Ecosystem' é a tradução correta para 'Ecossistema'."
      },
      {
        "id": "C",
        "text": "SPECTRUMpectrum",
        "isCorrect": false,
        "rationale": "'SPECTRUMpectrum' significa 'Espectro', não 'Ecossistema'."
      },
      {
        "id": "D",
        "text": "THUNDERhunder",
        "isCorrect": false,
        "rationale": "'THUNDERhunder' significa 'Trovão', não 'Ecossistema'."
      }
    ]
  },
  {
    "id": "sql-sci-m-27",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Nature",
    "wordPt": "Natureza",
    "phonetic": "ˈneɪ.tʃər",
    "sentence": "Botanists study the wonders and laws of _________.",
    "sentencePt": "Botânicos estudam as maravilhas e leis da natureza.",
    "exampleEn": "Botanists study the wonders and laws of Nature.",
    "examplePt": "Botânicos estudam as maravilhas e leis da natureza.",
    "gapWord": "Nature",
    "question": "Como se diz 'Natureza' em inglês?",
    "hint": "Mundo físico e biológico espontâneo não alterado pelo homem.",
    "rationale": "'Nature' (ˈneɪ.tʃər): Mundo físico e biológico espontâneo não alterado pelo homem.",
    "options": [
      {
        "id": "A",
        "text": "FORMULAormula",
        "isCorrect": false,
        "rationale": "'FORMULAormula' significa 'Fórmula', não 'Natureza'."
      },
      {
        "id": "B",
        "text": "BIOLOGYiology",
        "isCorrect": false,
        "rationale": "'BIOLOGYiology' significa 'Biologia', não 'Natureza'."
      },
      {
        "id": "C",
        "text": "Nature",
        "isCorrect": true,
        "rationale": "'Nature' é a tradução correta para 'Natureza'."
      },
      {
        "id": "D",
        "text": "INSECTnsect",
        "isCorrect": false,
        "rationale": "'INSECTnsect' significa 'Inseto', não 'Natureza'."
      }
    ]
  },
  {
    "id": "sql-sci-m-28",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Element",
    "wordPt": "Elemento Químico",
    "phonetic": "ˈɛl.ə.mənt",
    "sentence": "Iron is a metallic chemical _________ on the periodic table.",
    "sentencePt": "O ferro é um elemento químico metálico na tabela periódica.",
    "exampleEn": "Iron is a metallic chemical Element on the periodic table.",
    "examplePt": "O ferro é um elemento químico metálico na tabela periódica.",
    "gapWord": "Element",
    "question": "Como se diz 'Elemento Químico' em inglês?",
    "hint": "Substância pura composta por átomos do mesmo número atômico.",
    "rationale": "'Element' (ˈɛl.ə.mənt): Substância pura composta por átomos do mesmo número atômico.",
    "options": [
      {
        "id": "A",
        "text": "ECOSYSTEMcosystem",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMcosystem' significa 'Ecossistema', não 'Elemento Químico'."
      },
      {
        "id": "B",
        "text": "ISLANDsland",
        "isCorrect": false,
        "rationale": "'ISLANDsland' significa 'Ilha', não 'Elemento Químico'."
      },
      {
        "id": "C",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta', não 'Elemento Químico'."
      },
      {
        "id": "D",
        "text": "Element",
        "isCorrect": true,
        "rationale": "'Element' é a tradução correta para 'Elemento Químico'."
      }
    ]
  },
  {
    "id": "sql-sci-m-29",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Compound",
    "wordPt": "Composto Químico",
    "phonetic": "ˈkɑːm.paʊnd",
    "sentence": "Water is a chemical _________ formed by hydrogen and oxygen.",
    "sentencePt": "A água é um composto químico formado por hidrogênio e oxigênio.",
    "exampleEn": "Water is a chemical Compound formed by hydrogen and oxygen.",
    "examplePt": "A água é um composto químico formado por hidrogênio e oxigênio.",
    "gapWord": "Compound",
    "question": "Como se diz 'Composto Químico' em inglês?",
    "hint": "Substância formada pela combinação química de múltiplos elementos.",
    "rationale": "'Compound' (ˈkɑːm.paʊnd): Substância formada pela combinação química de múltiplos elementos.",
    "options": [
      {
        "id": "A",
        "text": "Compound",
        "isCorrect": true,
        "rationale": "'Compound' é a tradução correta para 'Composto Químico'."
      },
      {
        "id": "B",
        "text": "ECOSYSTEMcosystem",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMcosystem' significa 'Ecossistema', não 'Composto Químico'."
      },
      {
        "id": "C",
        "text": "CLIMATElimate",
        "isCorrect": false,
        "rationale": "'CLIMATElimate' significa 'Clima', não 'Composto Químico'."
      },
      {
        "id": "D",
        "text": "PRESSUREressure",
        "isCorrect": false,
        "rationale": "'PRESSUREressure' significa 'Pressão', não 'Composto Químico'."
      }
    ]
  },
  {
    "id": "sql-sci-m-30",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Molecule",
    "wordPt": "Molécula",
    "phonetic": "ˈmɑː.lɪ.kjuːl",
    "sentence": "Two atoms bonded together create a stable _________.",
    "sentencePt": "Dois átomos ligados entre si criam uma molécula estável.",
    "exampleEn": "Two atoms bonded together create a stable Molecule.",
    "examplePt": "Dois átomos ligados entre si criam uma molécula estável.",
    "gapWord": "Molecule",
    "question": "Como se diz 'Molécula' em inglês?",
    "hint": "Grupo neutro de átomos unidos por ligações químicas.",
    "rationale": "'Molecule' (ˈmɑː.lɪ.kjuːl): Grupo neutro de átomos unidos por ligações químicas.",
    "options": [
      {
        "id": "A",
        "text": "SENSORensor",
        "isCorrect": false,
        "rationale": "'SENSORensor' significa 'Sensor', não 'Molécula'."
      },
      {
        "id": "B",
        "text": "Molecule",
        "isCorrect": true,
        "rationale": "'Molecule' é a tradução correta para 'Molécula'."
      },
      {
        "id": "C",
        "text": "SPECIESpecies",
        "isCorrect": false,
        "rationale": "'SPECIESpecies' significa 'Espécie', não 'Molécula'."
      },
      {
        "id": "D",
        "text": "SCIENCEcience",
        "isCorrect": false,
        "rationale": "'SCIENCEcience' significa 'Ciência', não 'Molécula'."
      }
    ]
  },
  {
    "id": "sql-sci-m-31",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Reaction",
    "wordPt": "Reação Química",
    "phonetic": "riˈæk.ʃən",
    "sentence": "The exothermic chemical _________ released abundant heat.",
    "sentencePt": "A reação química exotérmica liberou calor abundante.",
    "exampleEn": "The exothermic chemical Reaction released abundant heat.",
    "examplePt": "A reação química exotérmica liberou calor abundante.",
    "gapWord": "Reaction",
    "question": "Como se diz 'Reação Química' em inglês?",
    "hint": "Processo de transformação de reagentes em novos produtos.",
    "rationale": "'Reaction' (riˈæk.ʃən): Processo de transformação de reagentes em novos produtos.",
    "options": [
      {
        "id": "A",
        "text": "MOTIONotion",
        "isCorrect": false,
        "rationale": "'MOTIONotion' significa 'Movimento', não 'Reação Química'."
      },
      {
        "id": "B",
        "text": "THEORYheory",
        "isCorrect": false,
        "rationale": "'THEORYheory' significa 'Teoria Científica', não 'Reação Química'."
      },
      {
        "id": "C",
        "text": "Reaction",
        "isCorrect": true,
        "rationale": "'Reaction' é a tradução correta para 'Reação Química'."
      },
      {
        "id": "D",
        "text": "SCIENCEcience",
        "isCorrect": false,
        "rationale": "'SCIENCEcience' significa 'Ciência', não 'Reação Química'."
      }
    ]
  },
  {
    "id": "sql-sci-m-32",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Energy",
    "wordPt": "Energia",
    "phonetic": "ˈɛn.ər.dʒi",
    "sentence": "Solar panels convert light into electrical _________.",
    "sentencePt": "Painéis solares convertem luz em energia elétrica.",
    "exampleEn": "Solar panels convert light into electrical Energy.",
    "examplePt": "Painéis solares convertem luz em energia elétrica.",
    "gapWord": "Energy",
    "question": "Como se diz 'Energia' em inglês?",
    "hint": "Capacidade fundamental de realizar trabalho físico ou gerar calor.",
    "rationale": "'Energy' (ˈɛn.ər.dʒi): Capacidade fundamental de realizar trabalho físico ou gerar calor.",
    "options": [
      {
        "id": "A",
        "text": "VALLEYalley",
        "isCorrect": false,
        "rationale": "'VALLEYalley' significa 'Vale', não 'Energia'."
      },
      {
        "id": "B",
        "text": "MOLECULEolecule",
        "isCorrect": false,
        "rationale": "'MOLECULEolecule' significa 'Molécula', não 'Energia'."
      },
      {
        "id": "C",
        "text": "ECOSYSTEMcosystem",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMcosystem' significa 'Ecossistema', não 'Energia'."
      },
      {
        "id": "D",
        "text": "Energy",
        "isCorrect": true,
        "rationale": "'Energy' é a tradução correta para 'Energia'."
      }
    ]
  },
  {
    "id": "sql-sci-m-33",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Power",
    "wordPt": "Potência / Força",
    "phonetic": "ˈpaʊ.ər",
    "sentence": "Wind turbines generate clean electric _________.",
    "sentencePt": "Turbinas eólicas geram potência elétrica limpa.",
    "exampleEn": "Wind turbines generate clean electric Power.",
    "examplePt": "Turbinas eólicas geram potência elétrica limpa.",
    "gapWord": "Power",
    "question": "Como se diz 'Potência / Força' em inglês?",
    "hint": "Taxa temporal de transferência ou conversão de energia.",
    "rationale": "'Power' (ˈpaʊ.ər): Taxa temporal de transferência ou conversão de energia.",
    "options": [
      {
        "id": "A",
        "text": "Power",
        "isCorrect": true,
        "rationale": "'Power' é a tradução correta para 'Potência / Força'."
      },
      {
        "id": "B",
        "text": "ISLANDsland",
        "isCorrect": false,
        "rationale": "'ISLANDsland' significa 'Ilha', não 'Potência / Força'."
      },
      {
        "id": "C",
        "text": "PHYSICShysics",
        "isCorrect": false,
        "rationale": "'PHYSICShysics' significa 'Física', não 'Potência / Força'."
      },
      {
        "id": "D",
        "text": "THEORYheory",
        "isCorrect": false,
        "rationale": "'THEORYheory' significa 'Teoria Científica', não 'Potência / Força'."
      }
    ]
  },
  {
    "id": "sql-sci-m-34",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Force",
    "wordPt": "Força",
    "phonetic": "fɔːrs",
    "sentence": "Applying opposite _________ stopped the moving cart.",
    "sentencePt": "Aplicar uma força oposta parou o carrinho em movimento.",
    "exampleEn": "Applying opposite Force stopped the moving cart.",
    "examplePt": "Aplicar uma força oposta parou o carrinho em movimento.",
    "gapWord": "Force",
    "question": "Como se diz 'Força' em inglês?",
    "hint": "Ação vetorial capaz de alterar o estado de repouso ou movimento.",
    "rationale": "'Force' (fɔːrs): Ação vetorial capaz de alterar o estado de repouso ou movimento.",
    "options": [
      {
        "id": "A",
        "text": "INSECTnsect",
        "isCorrect": false,
        "rationale": "'INSECTnsect' significa 'Inseto', não 'Força'."
      },
      {
        "id": "B",
        "text": "Force",
        "isCorrect": true,
        "rationale": "'Force' é a tradução correta para 'Força'."
      },
      {
        "id": "C",
        "text": "ELEMENTlement",
        "isCorrect": false,
        "rationale": "'ELEMENTlement' significa 'Elemento Químico', não 'Força'."
      },
      {
        "id": "D",
        "text": "WEATHEReather",
        "isCorrect": false,
        "rationale": "'WEATHEReather' significa 'Tempo Meteorológico', não 'Força'."
      }
    ]
  },
  {
    "id": "sql-sci-m-35",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Motion",
    "wordPt": "Movimento",
    "phonetic": "ˈmoʊ.ʃən",
    "sentence": "Planetary _________ follows Kepler's three laws.",
    "sentencePt": "O movimento planetário segue as três leis de Kepler.",
    "exampleEn": "Planetary Motion follows Kepler's three laws.",
    "examplePt": "O movimento planetário segue as três leis de Kepler.",
    "gapWord": "Motion",
    "question": "Como se diz 'Movimento' em inglês?",
    "hint": "Mudança de posição de um corpo ao longo do tempo.",
    "rationale": "'Motion' (ˈmoʊ.ʃən): Mudança de posição de um corpo ao longo do tempo.",
    "options": [
      {
        "id": "A",
        "text": "NATUREature",
        "isCorrect": false,
        "rationale": "'NATUREature' significa 'Natureza', não 'Movimento'."
      },
      {
        "id": "B",
        "text": "GALAXYalaxy",
        "isCorrect": false,
        "rationale": "'GALAXYalaxy' significa 'Galáxia', não 'Movimento'."
      },
      {
        "id": "C",
        "text": "Motion",
        "isCorrect": true,
        "rationale": "'Motion' é a tradução correta para 'Movimento'."
      },
      {
        "id": "D",
        "text": "CLIMATElimate",
        "isCorrect": false,
        "rationale": "'CLIMATElimate' significa 'Clima', não 'Movimento'."
      }
    ]
  },
  {
    "id": "sql-sci-m-36",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Magnet",
    "wordPt": "Ímã",
    "phonetic": "ˈmæɡ.nət",
    "sentence": "The strong permanent _________ attracted the iron filings.",
    "sentencePt": "O forte ímã permanente atraiu as limalhas de ferro.",
    "exampleEn": "The strong permanent Magnet attracted the iron filings.",
    "examplePt": "O forte ímã permanente atraiu as limalhas de ferro.",
    "gapWord": "Magnet",
    "question": "Como se diz 'Ímã' em inglês?",
    "hint": "Objeto ou material dotado de campo magnético atrativo.",
    "rationale": "'Magnet' (ˈmæɡ.nət): Objeto ou material dotado de campo magnético atrativo.",
    "options": [
      {
        "id": "A",
        "text": "MOTIONotion",
        "isCorrect": false,
        "rationale": "'MOTIONotion' significa 'Movimento', não 'Ímã'."
      },
      {
        "id": "B",
        "text": "REPTILEeptile",
        "isCorrect": false,
        "rationale": "'REPTILEeptile' significa 'Réptil', não 'Ímã'."
      },
      {
        "id": "C",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto', não 'Ímã'."
      },
      {
        "id": "D",
        "text": "Magnet",
        "isCorrect": true,
        "rationale": "'Magnet' é a tradução correta para 'Ímã'."
      }
    ]
  },
  {
    "id": "sql-sci-m-37",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Voltage",
    "wordPt": "Tensão Elétrica / Voltagem",
    "phonetic": "ˈvoʊl.tɪdʒ",
    "sentence": "The generator produced high electrical _________.",
    "sentencePt": "O gerador produziu alta tensão elétrica.",
    "exampleEn": "The generator produced high electrical Voltage.",
    "examplePt": "O gerador produziu alta tensão elétrica.",
    "gapWord": "Voltage",
    "question": "Como se diz 'Tensão Elétrica / Voltagem' em inglês?",
    "hint": "Diferença de potencial elétrico entre dois pontos.",
    "rationale": "'Voltage' (ˈvoʊl.tɪdʒ): Diferença de potencial elétrico entre dois pontos.",
    "options": [
      {
        "id": "A",
        "text": "Voltage",
        "isCorrect": true,
        "rationale": "'Voltage' é a tradução correta para 'Tensão Elétrica / Voltagem'."
      },
      {
        "id": "B",
        "text": "FORMULAormula",
        "isCorrect": false,
        "rationale": "'FORMULAormula' significa 'Fórmula', não 'Tensão Elétrica / Voltagem'."
      },
      {
        "id": "C",
        "text": "REACTIONeaction",
        "isCorrect": false,
        "rationale": "'REACTIONeaction' significa 'Reação Química', não 'Tensão Elétrica / Voltagem'."
      },
      {
        "id": "D",
        "text": "POWERower",
        "isCorrect": false,
        "rationale": "'POWERower' significa 'Potência / Força', não 'Tensão Elétrica / Voltagem'."
      }
    ]
  },
  {
    "id": "sql-sci-m-38",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Density",
    "wordPt": "Densidade",
    "phonetic": "ˈdɛn.sə.ti",
    "sentence": "Oil floats on water because it has lower _________.",
    "sentencePt": "O óleo flutua na água porque possui menor densidade.",
    "exampleEn": "Oil floats on water because it has lower Density.",
    "examplePt": "O óleo flutua na água porque possui menor densidade.",
    "gapWord": "Density",
    "question": "Como se diz 'Densidade' em inglês?",
    "hint": "Relação física entre a massa e o volume ocupado.",
    "rationale": "'Density' (ˈdɛn.sə.ti): Relação física entre a massa e o volume ocupado.",
    "options": [
      {
        "id": "A",
        "text": "WEATHEReather",
        "isCorrect": false,
        "rationale": "'WEATHEReather' significa 'Tempo Meteorológico', não 'Densidade'."
      },
      {
        "id": "B",
        "text": "Density",
        "isCorrect": true,
        "rationale": "'Density' é a tradução correta para 'Densidade'."
      },
      {
        "id": "C",
        "text": "GLACIERlacier",
        "isCorrect": false,
        "rationale": "'GLACIERlacier' significa 'Geleira', não 'Densidade'."
      },
      {
        "id": "D",
        "text": "CLIMATElimate",
        "isCorrect": false,
        "rationale": "'CLIMATElimate' significa 'Clima', não 'Densidade'."
      }
    ]
  },
  {
    "id": "sql-sci-m-39",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Pressure",
    "wordPt": "Pressão",
    "phonetic": "ˈprɛʃ.ər",
    "sentence": "Atmospheric _________ decreases as altitude increases.",
    "sentencePt": "A pressão atmosférica diminui à medida que a altitude aumenta.",
    "exampleEn": "Atmospheric Pressure decreases as altitude increases.",
    "examplePt": "A pressão atmosférica diminui à medida que a altitude aumenta.",
    "gapWord": "Pressure",
    "question": "Como se diz 'Pressão' em inglês?",
    "hint": "Força perpendicular aplicada por unidade de área de superfície.",
    "rationale": "'Pressure' (ˈprɛʃ.ər): Força perpendicular aplicada por unidade de área de superfície.",
    "options": [
      {
        "id": "A",
        "text": "FORMULAormula",
        "isCorrect": false,
        "rationale": "'FORMULAormula' significa 'Fórmula', não 'Pressão'."
      },
      {
        "id": "B",
        "text": "JUNGLEungle",
        "isCorrect": false,
        "rationale": "'JUNGLEungle' significa 'Selva', não 'Pressão'."
      },
      {
        "id": "C",
        "text": "Pressure",
        "isCorrect": true,
        "rationale": "'Pressure' é a tradução correta para 'Pressão'."
      },
      {
        "id": "D",
        "text": "ENERGYnergy",
        "isCorrect": false,
        "rationale": "'ENERGYnergy' significa 'Energia', não 'Pressão'."
      }
    ]
  },
  {
    "id": "sql-sci-m-40",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Friction",
    "wordPt": "Atrito",
    "phonetic": "ˈfrɪk.ʃən",
    "sentence": "Tire tread creates necessary _________ on wet roads.",
    "sentencePt": "A banda de rodagem cria o atrito necessário em estradas molhadas.",
    "exampleEn": "Tire tread creates necessary Friction on wet roads.",
    "examplePt": "A banda de rodagem cria o atrito necessário em estradas molhadas.",
    "gapWord": "Friction",
    "question": "Como se diz 'Atrito' em inglês?",
    "hint": "Resistência ao movimento relativo de duas superfícies em contato.",
    "rationale": "'Friction' (ˈfrɪk.ʃən): Resistência ao movimento relativo de duas superfícies em contato.",
    "options": [
      {
        "id": "A",
        "text": "LABab",
        "isCorrect": false,
        "rationale": "'LABab' significa 'Laboratório', não 'Atrito'."
      },
      {
        "id": "B",
        "text": "REACTIONeaction",
        "isCorrect": false,
        "rationale": "'REACTIONeaction' significa 'Reação Química', não 'Atrito'."
      },
      {
        "id": "C",
        "text": "POWERower",
        "isCorrect": false,
        "rationale": "'POWERower' significa 'Potência / Força', não 'Atrito'."
      },
      {
        "id": "D",
        "text": "Friction",
        "isCorrect": true,
        "rationale": "'Friction' é a tradução correta para 'Atrito'."
      }
    ]
  },
  {
    "id": "sql-sci-m-41",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Radiation",
    "wordPt": "Radiação",
    "phonetic": "ˌreɪ.diˈeɪ.ʃən",
    "sentence": "The ozone layer shields us from ultraviolet _________.",
    "sentencePt": "A camada de ozônio nos protege da radiação ultravioleta.",
    "exampleEn": "The ozone layer shields us from ultraviolet Radiation.",
    "examplePt": "A camada de ozônio nos protege da radiação ultravioleta.",
    "gapWord": "Radiation",
    "question": "Como se diz 'Radiação' em inglês?",
    "hint": "Propagação de energia em forma de ondas ou partículas.",
    "rationale": "'Radiation' (ˌreɪ.diˈeɪ.ʃən): Propagação de energia em forma de ondas ou partículas.",
    "options": [
      {
        "id": "A",
        "text": "Radiation",
        "isCorrect": true,
        "rationale": "'Radiation' é a tradução correta para 'Radiação'."
      },
      {
        "id": "B",
        "text": "VOLTAGEoltage",
        "isCorrect": false,
        "rationale": "'VOLTAGEoltage' significa 'Tensão Elétrica / Voltagem', não 'Radiação'."
      },
      {
        "id": "C",
        "text": "CHEMISTRYhemistry",
        "isCorrect": false,
        "rationale": "'CHEMISTRYhemistry' significa 'Química', não 'Radiação'."
      },
      {
        "id": "D",
        "text": "SEASONeason",
        "isCorrect": false,
        "rationale": "'SEASONeason' significa 'Estação do Ano', não 'Radiação'."
      }
    ]
  },
  {
    "id": "sql-sci-m-42",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Spectrum",
    "wordPt": "Espectro",
    "phonetic": "ˈspɛk.trəm",
    "sentence": "A glass prism splits white light into a color _________.",
    "sentencePt": "Um prisma de vidro divide a luz branca em um espectro de cores.",
    "exampleEn": "A glass prism splits white light into a color Spectrum.",
    "examplePt": "Um prisma de vidro divide a luz branca em um espectro de cores.",
    "gapWord": "Spectrum",
    "question": "Como se diz 'Espectro' em inglês?",
    "hint": "Distribuição contínua de intensidade em função da frequência.",
    "rationale": "'Spectrum' (ˈspɛk.trəm): Distribuição contínua de intensidade em função da frequência.",
    "options": [
      {
        "id": "A",
        "text": "VOLTAGEoltage",
        "isCorrect": false,
        "rationale": "'VOLTAGEoltage' significa 'Tensão Elétrica / Voltagem', não 'Espectro'."
      },
      {
        "id": "B",
        "text": "Spectrum",
        "isCorrect": true,
        "rationale": "'Spectrum' é a tradução correta para 'Espectro'."
      },
      {
        "id": "C",
        "text": "BIOLOGYiology",
        "isCorrect": false,
        "rationale": "'BIOLOGYiology' significa 'Biologia', não 'Espectro'."
      },
      {
        "id": "D",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano', não 'Espectro'."
      }
    ]
  },
  {
    "id": "sql-sci-m-43",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Physics",
    "wordPt": "Física",
    "phonetic": "ˈfɪz.ɪks",
    "sentence": "Theoretical _________ explains the fundamental forces of nature.",
    "sentencePt": "A física teórica explica as forças fundamentais da natureza.",
    "exampleEn": "Theoretical Physics explains the fundamental forces of nature.",
    "examplePt": "A física teórica explica as forças fundamentais da natureza.",
    "gapWord": "Physics",
    "question": "Como se diz 'Física' em inglês?",
    "hint": "Ciência que estuda matéria, energia, espaço e tempo.",
    "rationale": "'Physics' (ˈfɪz.ɪks): Ciência que estuda matéria, energia, espaço e tempo.",
    "options": [
      {
        "id": "A",
        "text": "ENERGYnergy",
        "isCorrect": false,
        "rationale": "'ENERGYnergy' significa 'Energia', não 'Física'."
      },
      {
        "id": "B",
        "text": "WEATHEReather",
        "isCorrect": false,
        "rationale": "'WEATHEReather' significa 'Tempo Meteorológico', não 'Física'."
      },
      {
        "id": "C",
        "text": "Physics",
        "isCorrect": true,
        "rationale": "'Physics' é a tradução correta para 'Física'."
      },
      {
        "id": "D",
        "text": "FORCEorce",
        "isCorrect": false,
        "rationale": "'FORCEorce' significa 'Força', não 'Física'."
      }
    ]
  },
  {
    "id": "sql-sci-m-44",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Biology",
    "wordPt": "Biologia",
    "phonetic": "baɪˈɑː.lə.dʒi",
    "sentence": "Molecular _________ examines cellular mechanisms.",
    "sentencePt": "A biologia molecular examina mecanismos celulares.",
    "exampleEn": "Molecular Biology examines cellular mechanisms.",
    "examplePt": "A biologia molecular examina mecanismos celulares.",
    "gapWord": "Biology",
    "question": "Como se diz 'Biologia' em inglês?",
    "hint": "Ciência natural que estuda a vida e os organismos vivos.",
    "rationale": "'Biology' (baɪˈɑː.lə.dʒi): Ciência natural que estuda a vida e os organismos vivos.",
    "options": [
      {
        "id": "A",
        "text": "SPECIESpecies",
        "isCorrect": false,
        "rationale": "'SPECIESpecies' significa 'Espécie', não 'Biologia'."
      },
      {
        "id": "B",
        "text": "MOLECULEolecule",
        "isCorrect": false,
        "rationale": "'MOLECULEolecule' significa 'Molécula', não 'Biologia'."
      },
      {
        "id": "C",
        "text": "FORCEorce",
        "isCorrect": false,
        "rationale": "'FORCEorce' significa 'Força', não 'Biologia'."
      },
      {
        "id": "D",
        "text": "Biology",
        "isCorrect": true,
        "rationale": "'Biology' é a tradução correta para 'Biologia'."
      }
    ]
  },
  {
    "id": "sql-sci-m-45",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Chemistry",
    "wordPt": "Química",
    "phonetic": "ˈkɛm.ɪ.stri",
    "sentence": "Organic _________ studies carbon-based compounds.",
    "sentencePt": "A química orgânica estuda os compostos à base de carbono.",
    "exampleEn": "Organic Chemistry studies carbon-based compounds.",
    "examplePt": "A química orgânica estuda os compostos à base de carbono.",
    "gapWord": "Chemistry",
    "question": "Como se diz 'Química' em inglês?",
    "hint": "Ciência da composição, estrutura e propriedades da matéria.",
    "rationale": "'Chemistry' (ˈkɛm.ɪ.stri): Ciência da composição, estrutura e propriedades da matéria.",
    "options": [
      {
        "id": "A",
        "text": "Chemistry",
        "isCorrect": true,
        "rationale": "'Chemistry' é a tradução correta para 'Química'."
      },
      {
        "id": "B",
        "text": "NATUREature",
        "isCorrect": false,
        "rationale": "'NATUREature' significa 'Natureza', não 'Química'."
      },
      {
        "id": "C",
        "text": "STORMtorm",
        "isCorrect": false,
        "rationale": "'STORMtorm' significa 'Tempestade', não 'Química'."
      },
      {
        "id": "D",
        "text": "REACTIONeaction",
        "isCorrect": false,
        "rationale": "'REACTIONeaction' significa 'Reação Química', não 'Química'."
      }
    ]
  },
  {
    "id": "sql-sci-m-46",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Formula",
    "wordPt": "Fórmula",
    "phonetic": "ˈfɔːr.mjə.lə",
    "sentence": "Water is represented by the chemical _________ H₂O.",
    "sentencePt": "A água é representada pela fórmula química H₂O.",
    "exampleEn": "Water is represented by the chemical Formula H₂O.",
    "examplePt": "A água é representada pela fórmula química H₂O.",
    "gapWord": "Formula",
    "question": "Como se diz 'Fórmula' em inglês?",
    "hint": "Expressão concisa de elementos ou regras matemáticas e científicas.",
    "rationale": "'Formula' (ˈfɔːr.mjə.lə): Expressão concisa de elementos ou regras matemáticas e científicas.",
    "options": [
      {
        "id": "A",
        "text": "CHEMISTRYhemistry",
        "isCorrect": false,
        "rationale": "'CHEMISTRYhemistry' significa 'Química', não 'Fórmula'."
      },
      {
        "id": "B",
        "text": "Formula",
        "isCorrect": true,
        "rationale": "'Formula' é a tradução correta para 'Fórmula'."
      },
      {
        "id": "C",
        "text": "DENSITYensity",
        "isCorrect": false,
        "rationale": "'DENSITYensity' significa 'Densidade', não 'Fórmula'."
      },
      {
        "id": "D",
        "text": "SCIENCEcience",
        "isCorrect": false,
        "rationale": "'SCIENCEcience' significa 'Ciência', não 'Fórmula'."
      }
    ]
  },
  {
    "id": "sql-sci-m-47",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Theory",
    "wordPt": "Teoria Científica",
    "phonetic": "ˈθiː.ə.ri",
    "sentence": "The _________ of evolution explains biodiversity.",
    "sentencePt": "A teoria da evolução explica a biodiversidade.",
    "exampleEn": "The Theory of evolution explains biodiversity.",
    "examplePt": "A teoria da evolução explica a biodiversidade.",
    "gapWord": "Theory",
    "question": "Como se diz 'Teoria Científica' em inglês?",
    "hint": "Conjunto coerente de princípios explicativos com validação empírica.",
    "rationale": "'Theory' (ˈθiː.ə.ri): Conjunto coerente de princípios explicativos com validação empírica.",
    "options": [
      {
        "id": "A",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto', não 'Teoria Científica'."
      },
      {
        "id": "B",
        "text": "VALLEYalley",
        "isCorrect": false,
        "rationale": "'VALLEYalley' significa 'Vale', não 'Teoria Científica'."
      },
      {
        "id": "C",
        "text": "Theory",
        "isCorrect": true,
        "rationale": "'Theory' é a tradução correta para 'Teoria Científica'."
      },
      {
        "id": "D",
        "text": "CLIMATElimate",
        "isCorrect": false,
        "rationale": "'CLIMATElimate' significa 'Clima', não 'Teoria Científica'."
      }
    ]
  },
  {
    "id": "sql-sci-m-48",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Science",
    "wordPt": "Ciência",
    "phonetic": "ˈsaɪ.əns",
    "sentence": "Modern _________ relies on rigorous empirical methods.",
    "sentencePt": "A ciência moderna apoia-se em métodos empíricos rigorosos.",
    "exampleEn": "Modern Science relies on rigorous empirical methods.",
    "examplePt": "A ciência moderna apoia-se em métodos empíricos rigorosos.",
    "gapWord": "Science",
    "question": "Como se diz 'Ciência' em inglês?",
    "hint": "Conhecimento sistemático obtido pelo método científico.",
    "rationale": "'Science' (ˈsaɪ.əns): Conhecimento sistemático obtido pelo método científico.",
    "options": [
      {
        "id": "A",
        "text": "SPECIESpecies",
        "isCorrect": false,
        "rationale": "'SPECIESpecies' significa 'Espécie', não 'Ciência'."
      },
      {
        "id": "B",
        "text": "WEATHEReather",
        "isCorrect": false,
        "rationale": "'WEATHEReather' significa 'Tempo Meteorológico', não 'Ciência'."
      },
      {
        "id": "C",
        "text": "NATUREature",
        "isCorrect": false,
        "rationale": "'NATUREature' significa 'Natureza', não 'Ciência'."
      },
      {
        "id": "D",
        "text": "Science",
        "isCorrect": true,
        "rationale": "'Science' é a tradução correta para 'Ciência'."
      }
    ]
  },
  {
    "id": "sql-sci-m-49",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Lab",
    "wordPt": "Laboratório",
    "phonetic": "læb",
    "sentence": "Chemists conducted experiments in the research _________.",
    "sentencePt": "Químicos realizaram experimentos no laboratório de pesquisa.",
    "exampleEn": "Chemists conducted experiments in the research Lab.",
    "examplePt": "Químicos realizaram experimentos no laboratório de pesquisa.",
    "gapWord": "Lab",
    "question": "Como se diz 'Laboratório' em inglês?",
    "hint": "Ambiente controlado e equipado para pesquisas científicas.",
    "rationale": "'Lab' (læb): Ambiente controlado e equipado para pesquisas científicas.",
    "options": [
      {
        "id": "A",
        "text": "Lab",
        "isCorrect": true,
        "rationale": "'Lab' é a tradução correta para 'Laboratório'."
      },
      {
        "id": "B",
        "text": "POWERower",
        "isCorrect": false,
        "rationale": "'POWERower' significa 'Potência / Força', não 'Laboratório'."
      },
      {
        "id": "C",
        "text": "SPECIESpecies",
        "isCorrect": false,
        "rationale": "'SPECIESpecies' significa 'Espécie', não 'Laboratório'."
      },
      {
        "id": "D",
        "text": "LIGHTNINGightning",
        "isCorrect": false,
        "rationale": "'LIGHTNINGightning' significa 'Relâmpago', não 'Laboratório'."
      }
    ]
  },
  {
    "id": "sql-sci-m-50",
    "topic": "ciencias",
    "difficulty": "medio",
    "wordEn": "Sensor",
    "wordPt": "Sensor",
    "phonetic": "ˈsɛn.sər",
    "sentence": "The digital thermal _________ recorded temperature changes.",
    "sentencePt": "O sensor térmico digital registrou as mudanças de temperatura.",
    "exampleEn": "The digital thermal Sensor recorded temperature changes.",
    "examplePt": "O sensor térmico digital registrou as mudanças de temperatura.",
    "gapWord": "Sensor",
    "question": "Como se diz 'Sensor' em inglês?",
    "hint": "Dispositivo que detecta estímulos físicos e os converte em sinal.",
    "rationale": "'Sensor' (ˈsɛn.sər): Dispositivo que detecta estímulos físicos e os converte em sinal.",
    "options": [
      {
        "id": "A",
        "text": "DENSITYensity",
        "isCorrect": false,
        "rationale": "'DENSITYensity' significa 'Densidade', não 'Sensor'."
      },
      {
        "id": "B",
        "text": "Sensor",
        "isCorrect": true,
        "rationale": "'Sensor' é a tradução correta para 'Sensor'."
      },
      {
        "id": "C",
        "text": "POWERower",
        "isCorrect": false,
        "rationale": "'POWERower' significa 'Potência / Força', não 'Sensor'."
      },
      {
        "id": "D",
        "text": "REACTIONeaction",
        "isCorrect": false,
        "rationale": "'REACTIONeaction' significa 'Reação Química', não 'Sensor'."
      }
    ]
  },
  {
    "id": "sql-sci-d-01",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Photosynthesis",
    "wordPt": "Fotossíntese",
    "phonetic": "ˌfoʊ.toʊˈsɪn.θə.sɪs",
    "sentence": "Plants generate glucose through the process of _________.",
    "sentencePt": "Plantas geram glicose através do processo de fotossíntese.",
    "exampleEn": "Plants generate glucose through the process of Photosynthesis.",
    "examplePt": "Plantas geram glicose através do processo de fotossíntese.",
    "gapWord": "Photosynthesis",
    "question": "Como se diz 'Fotossíntese' em inglês?",
    "hint": "Processo bioquímico em que plantas convertem luz em carboidratos.",
    "rationale": "'Photosynthesis' (ˌfoʊ.toʊˈsɪn.θə.sɪs): Processo bioquímico em que plantas convertem luz em carboidratos.",
    "options": [
      {
        "id": "A",
        "text": "Photosynthesis",
        "isCorrect": true,
        "rationale": "'Photosynthesis' é a tradução correta para 'Fotossíntese'."
      },
      {
        "id": "B",
        "text": "REFRACTIONefraction",
        "isCorrect": false,
        "rationale": "'REFRACTIONefraction' significa 'Refração', não 'Fotossíntese'."
      },
      {
        "id": "C",
        "text": "BIODIVERSITYiodiversity",
        "isCorrect": false,
        "rationale": "'BIODIVERSITYiodiversity' significa 'Biodiversidade', não 'Fotossíntese'."
      },
      {
        "id": "D",
        "text": "LUMINOSITYuminosity",
        "isCorrect": false,
        "rationale": "'LUMINOSITYuminosity' significa 'Luminosidade Estelar', não 'Fotossíntese'."
      }
    ]
  },
  {
    "id": "sql-sci-d-02",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Biodiversity",
    "wordPt": "Biodiversidade",
    "phonetic": "ˌbaɪ.oʊ.daɪˈvɜːr.sə.ti",
    "sentence": "Deforestation directly threatens Amazonian _________.",
    "sentencePt": "O desmatamento ameaça diretamente a biodiversidade amazônica.",
    "exampleEn": "Deforestation directly threatens Amazonian Biodiversity.",
    "examplePt": "O desmatamento ameaça diretamente a biodiversidade amazônica.",
    "gapWord": "Biodiversity",
    "question": "Como se diz 'Biodiversidade' em inglês?",
    "hint": "Variedade e variabilidade de formas de vida em um ecossistema.",
    "rationale": "'Biodiversity' (ˌbaɪ.oʊ.daɪˈvɜːr.sə.ti): Variedade e variabilidade de formas de vida em um ecossistema.",
    "options": [
      {
        "id": "A",
        "text": "RADIOACTIVITYadioactivity",
        "isCorrect": false,
        "rationale": "'RADIOACTIVITYadioactivity' significa 'Radioatividade', não 'Biodiversidade'."
      },
      {
        "id": "B",
        "text": "Biodiversity",
        "isCorrect": true,
        "rationale": "'Biodiversity' é a tradução correta para 'Biodiversidade'."
      },
      {
        "id": "C",
        "text": "NUCLEOSYNTHESISucleosynthesis",
        "isCorrect": false,
        "rationale": "'NUCLEOSYNTHESISucleosynthesis' significa 'Nucleossíntese', não 'Biodiversidade'."
      },
      {
        "id": "D",
        "text": "CHROMATOGRAPHYhromatography",
        "isCorrect": false,
        "rationale": "'CHROMATOGRAPHYhromatography' significa 'Cromatografia', não 'Biodiversidade'."
      }
    ]
  },
  {
    "id": "sql-sci-d-03",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Ecosystems",
    "wordPt": "Ecossistemas",
    "phonetic": "ˈiː.koʊˌsɪs.təmz",
    "sentence": "Wetlands are highly productive aquatic _________.",
    "sentencePt": "Zonas úmidas são ecossistemas aquáticos altamente produtivos.",
    "exampleEn": "Wetlands are highly productive aquatic Ecosystems.",
    "examplePt": "Zonas úmidas são ecossistemas aquáticos altamente produtivos.",
    "gapWord": "Ecosystems",
    "question": "Como se diz 'Ecossistemas' em inglês?",
    "hint": "Conjuntos integrados de comunidades bióticas e fatores abióticos.",
    "rationale": "'Ecosystems' (ˈiː.koʊˌsɪs.təmz): Conjuntos integrados de comunidades bióticas e fatores abióticos.",
    "options": [
      {
        "id": "A",
        "text": "PATHOGENathogen",
        "isCorrect": false,
        "rationale": "'PATHOGENathogen' significa 'Patógeno', não 'Ecossistemas'."
      },
      {
        "id": "B",
        "text": "BIOTECHNOLOGYiotechnology",
        "isCorrect": false,
        "rationale": "'BIOTECHNOLOGYiotechnology' significa 'Biotecnologia', não 'Ecossistemas'."
      },
      {
        "id": "C",
        "text": "Ecosystems",
        "isCorrect": true,
        "rationale": "'Ecosystems' é a tradução correta para 'Ecossistemas'."
      },
      {
        "id": "D",
        "text": "QUANTUMuantum",
        "isCorrect": false,
        "rationale": "'QUANTUMuantum' significa 'Quântico', não 'Ecossistemas'."
      }
    ]
  },
  {
    "id": "sql-sci-d-04",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Atmosphere",
    "wordPt": "Atmosfera",
    "phonetic": "ˈæt.məs.fɪr",
    "sentence": "Gases in the _________ trap solar heat naturally.",
    "sentencePt": "Gases na atmosfera retêm o calor solar naturalmente.",
    "exampleEn": "Gases in the Atmosphere trap solar heat naturally.",
    "examplePt": "Gases na atmosfera retêm o calor solar naturalmente.",
    "gapWord": "Atmosphere",
    "question": "Como se diz 'Atmosfera' em inglês?",
    "hint": "Camada gasosa que envolve e protege um corpo celeste.",
    "rationale": "'Atmosphere' (ˈæt.məs.fɪr): Camada gasosa que envolve e protege um corpo celeste.",
    "options": [
      {
        "id": "A",
        "text": "TROPOSPHEREroposphere",
        "isCorrect": false,
        "rationale": "'TROPOSPHEREroposphere' significa 'Troposfera', não 'Atmosfera'."
      },
      {
        "id": "B",
        "text": "ELECTROMOTIVElectromotive",
        "isCorrect": false,
        "rationale": "'ELECTROMOTIVElectromotive' significa 'Eletromotriz', não 'Atmosfera'."
      },
      {
        "id": "C",
        "text": "MICROBIOLOGYicrobiology",
        "isCorrect": false,
        "rationale": "'MICROBIOLOGYicrobiology' significa 'Microbiologia', não 'Atmosfera'."
      },
      {
        "id": "D",
        "text": "Atmosphere",
        "isCorrect": true,
        "rationale": "'Atmosphere' é a tradução correta para 'Atmosfera'."
      }
    ]
  },
  {
    "id": "sql-sci-d-05",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Stratosphere",
    "wordPt": "Estratopausa / Estratosfera",
    "phonetic": "ˈstræt.ə.sfɪr",
    "sentence": "The protective ozone layer resides in the _________.",
    "sentencePt": "A camada protetora de ozônio reside na estratosfera.",
    "exampleEn": "The protective ozone layer resides in the Stratosphere.",
    "examplePt": "A camada protetora de ozônio reside na estratosfera.",
    "gapWord": "Stratosphere",
    "question": "Como se diz 'Estratopausa / Estratosfera' em inglês?",
    "hint": "Segunda camada da atmosfera acima da troposfera contendo ozônio.",
    "rationale": "'Stratosphere' (ˈstræt.ə.sfɪr): Segunda camada da atmosfera acima da troposfera contendo ozônio.",
    "options": [
      {
        "id": "A",
        "text": "Stratosphere",
        "isCorrect": true,
        "rationale": "'Stratosphere' é a tradução correta para 'Estratopausa / Estratosfera'."
      },
      {
        "id": "B",
        "text": "CHROMATOGRAPHYhromatography",
        "isCorrect": false,
        "rationale": "'CHROMATOGRAPHYhromatography' significa 'Cromatografia', não 'Estratopausa / Estratosfera'."
      },
      {
        "id": "C",
        "text": "CRYSTALLOGRAPHYrystallography",
        "isCorrect": false,
        "rationale": "'CRYSTALLOGRAPHYrystallography' significa 'Cristalografia', não 'Estratopausa / Estratosfera'."
      },
      {
        "id": "D",
        "text": "ECOSYSTEMScosystems",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMScosystems' significa 'Ecossistemas', não 'Estratopausa / Estratosfera'."
      }
    ]
  },
  {
    "id": "sql-sci-d-06",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Troposphere",
    "wordPt": "Troposfera",
    "phonetic": "ˈtroʊ.pə.sfɪr",
    "sentence": "Almost all weather phenomena occur within the _________.",
    "sentencePt": "Quase todos os fenômenos meteorológicos ocorrem na troposfera.",
    "exampleEn": "Almost all weather phenomena occur within the Troposphere.",
    "examplePt": "Quase todos os fenômenos meteorológicos ocorrem na troposfera.",
    "gapWord": "Troposphere",
    "question": "Como se diz 'Troposfera' em inglês?",
    "hint": "Camada atmosférica inferior em contato com a superfície.",
    "rationale": "'Troposphere' (ˈtroʊ.pə.sfɪr): Camada atmosférica inferior em contato com a superfície.",
    "options": [
      {
        "id": "A",
        "text": "SYMBIOSISymbiosis",
        "isCorrect": false,
        "rationale": "'SYMBIOSISymbiosis' significa 'Simbiose', não 'Troposfera'."
      },
      {
        "id": "B",
        "text": "Troposphere",
        "isCorrect": true,
        "rationale": "'Troposphere' é a tradução correta para 'Troposfera'."
      },
      {
        "id": "C",
        "text": "MICROBIOMEicrobiome",
        "isCorrect": false,
        "rationale": "'MICROBIOMEicrobiome' significa 'Microbioma', não 'Troposfera'."
      },
      {
        "id": "D",
        "text": "GEOPHYSICSeophysics",
        "isCorrect": false,
        "rationale": "'GEOPHYSICSeophysics' significa 'Geofísica', não 'Troposfera'."
      }
    ]
  },
  {
    "id": "sql-sci-d-07",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Astrophysics",
    "wordPt": "Astrofísica",
    "phonetic": "ˌæs.troʊˈfɪz.ɪks",
    "sentence": "Researchers in _________ investigate stellar evolution.",
    "sentencePt": "Pesquisadores em astrofísica investigam a evolução estelar.",
    "exampleEn": "Researchers in Astrophysics investigate stellar evolution.",
    "examplePt": "Pesquisadores em astrofísica investigam a evolução estelar.",
    "gapWord": "Astrophysics",
    "question": "Como se diz 'Astrofísica' em inglês?",
    "hint": "Ramo da astronomia que aplica princípios da física aos astros.",
    "rationale": "'Astrophysics' (ˌæs.troʊˈfɪz.ɪks): Ramo da astronomia que aplica princípios da física aos astros.",
    "options": [
      {
        "id": "A",
        "text": "DIFFRACTIONiffraction",
        "isCorrect": false,
        "rationale": "'DIFFRACTIONiffraction' significa 'Difração', não 'Astrofísica'."
      },
      {
        "id": "B",
        "text": "ELECTROMAGNETISMlectromagnetism",
        "isCorrect": false,
        "rationale": "'ELECTROMAGNETISMlectromagnetism' significa 'Eletromagnetismo', não 'Astrofísica'."
      },
      {
        "id": "C",
        "text": "Astrophysics",
        "isCorrect": true,
        "rationale": "'Astrophysics' é a tradução correta para 'Astrofísica'."
      },
      {
        "id": "D",
        "text": "SPECTROSCOPYpectroscopy",
        "isCorrect": false,
        "rationale": "'SPECTROSCOPYpectroscopy' significa 'Espectroscopia', não 'Astrofísica'."
      }
    ]
  },
  {
    "id": "sql-sci-d-08",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Thermodynamics",
    "wordPt": "Termodinâmica",
    "phonetic": "ˌθɜːr.moʊ.daɪˈnæm.ɪks",
    "sentence": "The laws of _________ govern heat and energy transfer.",
    "sentencePt": "As leis da termodinâmica governam a transferência de calor e energia.",
    "exampleEn": "The laws of Thermodynamics govern heat and energy transfer.",
    "examplePt": "As leis da termodinâmica governam a transferência de calor e energia.",
    "gapWord": "Thermodynamics",
    "question": "Como se diz 'Termodinâmica' em inglês?",
    "hint": "Estudo das relações entre calor, trabalho mecânico e outras energias.",
    "rationale": "'Thermodynamics' (ˌθɜːr.moʊ.daɪˈnæm.ɪks): Estudo das relações entre calor, trabalho mecânico e outras energias.",
    "options": [
      {
        "id": "A",
        "text": "ASTROPHYSICSstrophysics",
        "isCorrect": false,
        "rationale": "'ASTROPHYSICSstrophysics' significa 'Astrofísica', não 'Termodinâmica'."
      },
      {
        "id": "B",
        "text": "ELECTROMOTIVElectromotive",
        "isCorrect": false,
        "rationale": "'ELECTROMOTIVElectromotive' significa 'Eletromotriz', não 'Termodinâmica'."
      },
      {
        "id": "C",
        "text": "GENETICSenetics",
        "isCorrect": false,
        "rationale": "'GENETICSenetics' significa 'Genética', não 'Termodinâmica'."
      },
      {
        "id": "D",
        "text": "Thermodynamics",
        "isCorrect": true,
        "rationale": "'Thermodynamics' é a tradução correta para 'Termodinâmica'."
      }
    ]
  },
  {
    "id": "sql-sci-d-09",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Electromagnetism",
    "wordPt": "Eletromagnetismo",
    "phonetic": "iˌlɛk.troʊˈmæɡ.nə.tɪ.zəm",
    "sentence": "Maxwell unified electricity and magnetism into _________.",
    "sentencePt": "Maxwell unificou eletricidade e magnetismo no eletromagnetismo.",
    "exampleEn": "Maxwell unified electricity and magnetism into Electromagnetism.",
    "examplePt": "Maxwell unificou eletricidade e magnetismo no eletromagnetismo.",
    "gapWord": "Electromagnetism",
    "question": "Como se diz 'Eletromagnetismo' em inglês?",
    "hint": "Força fundamental mediada por fótons entre partículas carregadas.",
    "rationale": "'Electromagnetism' (iˌlɛk.troʊˈmæɡ.nə.tɪ.zəm): Força fundamental mediada por fótons entre partículas carregadas.",
    "options": [
      {
        "id": "A",
        "text": "Electromagnetism",
        "isCorrect": true,
        "rationale": "'Electromagnetism' é a tradução correta para 'Eletromagnetismo'."
      },
      {
        "id": "B",
        "text": "ECOSYSTEMScosystems",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMScosystems' significa 'Ecossistemas', não 'Eletromagnetismo'."
      },
      {
        "id": "C",
        "text": "SPECTROSCOPYpectroscopy",
        "isCorrect": false,
        "rationale": "'SPECTROSCOPYpectroscopy' significa 'Espectroscopia', não 'Eletromagnetismo'."
      },
      {
        "id": "D",
        "text": "PHOTOSYNTHESIShotosynthesis",
        "isCorrect": false,
        "rationale": "'PHOTOSYNTHESIShotosynthesis' significa 'Fotossíntese', não 'Eletromagnetismo'."
      }
    ]
  },
  {
    "id": "sql-sci-d-10",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Quantum",
    "wordPt": "Quântico",
    "phonetic": "ˈkwɑːn.təm",
    "sentence": "Light emission is explained by _________ mechanics.",
    "sentencePt": "A emissão de luz é explicada pela mecânica quântica.",
    "exampleEn": "Light emission is explained by Quantum mechanics.",
    "examplePt": "A emissão de luz é explicada pela mecânica quântica.",
    "gapWord": "Quantum",
    "question": "Como se diz 'Quântico' em inglês?",
    "hint": "Relativo à menor unidade indivisível de grandeza física.",
    "rationale": "'Quantum' (ˈkwɑːn.təm): Relativo à menor unidade indivisível de grandeza física.",
    "options": [
      {
        "id": "A",
        "text": "SEISMOLOGYeismology",
        "isCorrect": false,
        "rationale": "'SEISMOLOGYeismology' significa 'Sismologia', não 'Quântico'."
      },
      {
        "id": "B",
        "text": "Quantum",
        "isCorrect": true,
        "rationale": "'Quantum' é a tradução correta para 'Quântico'."
      },
      {
        "id": "C",
        "text": "NEUROPLASTICITYeuroplasticity",
        "isCorrect": false,
        "rationale": "'NEUROPLASTICITYeuroplasticity' significa 'Neuroplasticidade', não 'Quântico'."
      },
      {
        "id": "D",
        "text": "MICROBIOLOGYicrobiology",
        "isCorrect": false,
        "rationale": "'MICROBIOLOGYicrobiology' significa 'Microbiologia', não 'Quântico'."
      }
    ]
  },
  {
    "id": "sql-sci-d-11",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Neuroscience",
    "wordPt": "Neurociência",
    "phonetic": "ˈnʊr.oʊˌsaɪ.əns",
    "sentence": "Modern _________ explores synaptic plasticity in the brain.",
    "sentencePt": "A neurociência moderna explora a plasticidade sináptica no cérebro.",
    "exampleEn": "Modern Neuroscience explores synaptic plasticity in the brain.",
    "examplePt": "A neurociência moderna explora a plasticidade sináptica no cérebro.",
    "gapWord": "Neuroscience",
    "question": "Como se diz 'Neurociência' em inglês?",
    "hint": "Estudo multidisciplinar do sistema nervoso e sua função.",
    "rationale": "'Neuroscience' (ˈnʊr.oʊˌsaɪ.əns): Estudo multidisciplinar do sistema nervoso e sua função.",
    "options": [
      {
        "id": "A",
        "text": "CRYSTALLOGRAPHYrystallography",
        "isCorrect": false,
        "rationale": "'CRYSTALLOGRAPHYrystallography' significa 'Cristalografia', não 'Neurociência'."
      },
      {
        "id": "B",
        "text": "ECOSYSTEMScosystems",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMScosystems' significa 'Ecossistemas', não 'Neurociência'."
      },
      {
        "id": "C",
        "text": "Neuroscience",
        "isCorrect": true,
        "rationale": "'Neuroscience' é a tradução correta para 'Neurociência'."
      },
      {
        "id": "D",
        "text": "BIOCHEMISTRYiochemistry",
        "isCorrect": false,
        "rationale": "'BIOCHEMISTRYiochemistry' significa 'Bioquímica', não 'Neurociência'."
      }
    ]
  },
  {
    "id": "sql-sci-d-12",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Genetics",
    "wordPt": "Genética",
    "phonetic": "dʒəˈnɛt.ɪks",
    "sentence": "Mendel pioneered the fundamental principles of _________.",
    "sentencePt": "Mendel foi pioneiro nos princípios fundamentais da genética.",
    "exampleEn": "Mendel pioneered the fundamental principles of Genetics.",
    "examplePt": "Mendel foi pioneiro nos princípios fundamentais da genética.",
    "gapWord": "Genetics",
    "question": "Como se diz 'Genética' em inglês?",
    "hint": "Ciência biológica da hereditariedade e variação dos genes.",
    "rationale": "'Genetics' (dʒəˈnɛt.ɪks): Ciência biológica da hereditariedade e variação dos genes.",
    "options": [
      {
        "id": "A",
        "text": "STRATOSPHEREtratosphere",
        "isCorrect": false,
        "rationale": "'STRATOSPHEREtratosphere' significa 'Estratopausa / Estratosfera', não 'Genética'."
      },
      {
        "id": "B",
        "text": "SPECTROMETRYpectrometry",
        "isCorrect": false,
        "rationale": "'SPECTROMETRYpectrometry' significa 'Espectrometria', não 'Genética'."
      },
      {
        "id": "C",
        "text": "MICROBIOMEicrobiome",
        "isCorrect": false,
        "rationale": "'MICROBIOMEicrobiome' significa 'Microbioma', não 'Genética'."
      },
      {
        "id": "D",
        "text": "Genetics",
        "isCorrect": true,
        "rationale": "'Genetics' é a tradução correta para 'Genética'."
      }
    ]
  },
  {
    "id": "sql-sci-d-13",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Chromosome",
    "wordPt": "Cromossomo",
    "phonetic": "ˈkroʊ.mə.soʊm",
    "sentence": "Human cells carry 23 pairs in each nucleus _________.",
    "sentencePt": "Células humanas carregam 23 pares em cada núcleo de cromossomo.",
    "exampleEn": "Human cells carry 23 pairs in each nucleus Chromosome.",
    "examplePt": "Células humanas carregam 23 pares em cada núcleo de cromossomo.",
    "gapWord": "Chromosome",
    "question": "Como se diz 'Cromossomo' em inglês?",
    "hint": "Estrutura condensada de DNA e histonas portadora de genes.",
    "rationale": "'Chromosome' (ˈkroʊ.mə.soʊm): Estrutura condensada de DNA e histonas portadora de genes.",
    "options": [
      {
        "id": "A",
        "text": "Chromosome",
        "isCorrect": true,
        "rationale": "'Chromosome' é a tradução correta para 'Cromossomo'."
      },
      {
        "id": "B",
        "text": "ELECTROMOTIVElectromotive",
        "isCorrect": false,
        "rationale": "'ELECTROMOTIVElectromotive' significa 'Eletromotriz', não 'Cromossomo'."
      },
      {
        "id": "C",
        "text": "HYPOTHESISypothesis",
        "isCorrect": false,
        "rationale": "'HYPOTHESISypothesis' significa 'Hipótese', não 'Cromossomo'."
      },
      {
        "id": "D",
        "text": "STRATOSPHEREtratosphere",
        "isCorrect": false,
        "rationale": "'STRATOSPHEREtratosphere' significa 'Estratopausa / Estratosfera', não 'Cromossomo'."
      }
    ]
  },
  {
    "id": "sql-sci-d-14",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Mutation",
    "wordPt": "Mutação Genética",
    "phonetic": "mjuːˈteɪ.ʃən",
    "sentence": "A random genetic _________ can alter organism traits.",
    "sentencePt": "Uma mutação genética aleatória pode alterar traços do organismo.",
    "exampleEn": "A random genetic Mutation can alter organism traits.",
    "examplePt": "Uma mutação genética aleatória pode alterar traços do organismo.",
    "gapWord": "Mutation",
    "question": "Como se diz 'Mutação Genética' em inglês?",
    "hint": "Alteração permanente na sequência de nucleotídeos do genoma.",
    "rationale": "'Mutation' (mjuːˈteɪ.ʃən): Alteração permanente na sequência de nucleotídeos do genoma.",
    "options": [
      {
        "id": "A",
        "text": "PATHOGENathogen",
        "isCorrect": false,
        "rationale": "'PATHOGENathogen' significa 'Patógeno', não 'Mutação Genética'."
      },
      {
        "id": "B",
        "text": "Mutation",
        "isCorrect": true,
        "rationale": "'Mutation' é a tradução correta para 'Mutação Genética'."
      },
      {
        "id": "C",
        "text": "MICROBIOMEicrobiome",
        "isCorrect": false,
        "rationale": "'MICROBIOMEicrobiome' significa 'Microbioma', não 'Mutação Genética'."
      },
      {
        "id": "D",
        "text": "ATMOSPHEREtmosphere",
        "isCorrect": false,
        "rationale": "'ATMOSPHEREtmosphere' significa 'Atmosfera', não 'Mutação Genética'."
      }
    ]
  },
  {
    "id": "sql-sci-d-15",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Hypothesis",
    "wordPt": "Hipótese",
    "phonetic": "haɪˈpɑː.θə.sɪs",
    "sentence": "Experiments were designed to test this novel _________.",
    "sentencePt": "Experimentos foram concebidos para testar esta nova hipótese.",
    "exampleEn": "Experiments were designed to test this novel Hypothesis.",
    "examplePt": "Experimentos foram concebidos para testar esta nova hipótese.",
    "gapWord": "Hypothesis",
    "question": "Como se diz 'Hipótese' em inglês?",
    "hint": "Suposição testável formulada como explicação provisória.",
    "rationale": "'Hypothesis' (haɪˈpɑː.θə.sɪs): Suposição testável formulada como explicação provisória.",
    "options": [
      {
        "id": "A",
        "text": "ASTROPHYSICSstrophysics",
        "isCorrect": false,
        "rationale": "'ASTROPHYSICSstrophysics' significa 'Astrofísica', não 'Hipótese'."
      },
      {
        "id": "B",
        "text": "GRAVITATIONravitation",
        "isCorrect": false,
        "rationale": "'GRAVITATIONravitation' significa 'Gravitação Universal', não 'Hipótese'."
      },
      {
        "id": "C",
        "text": "Hypothesis",
        "isCorrect": true,
        "rationale": "'Hypothesis' é a tradução correta para 'Hipótese'."
      },
      {
        "id": "D",
        "text": "STRATOSPHEREtratosphere",
        "isCorrect": false,
        "rationale": "'STRATOSPHEREtratosphere' significa 'Estratopausa / Estratosfera', não 'Hipótese'."
      }
    ]
  },
  {
    "id": "sql-sci-d-16",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Methodology",
    "wordPt": "Metodologia",
    "phonetic": "ˌmɛθ.əˈdɑː.lə.dʒi",
    "sentence": "Scientific rigor requires a validated experimental _________.",
    "sentencePt": "Rigor científico exige uma metodologia experimental validada.",
    "exampleEn": "Scientific rigor requires a validated experimental Methodology.",
    "examplePt": "Rigor científico exige uma metodologia experimental validada.",
    "gapWord": "Methodology",
    "question": "Como se diz 'Metodologia' em inglês?",
    "hint": "Conjunto sistemático de métodos e técnicas de pesquisa.",
    "rationale": "'Methodology' (ˌmɛθ.əˈdɑː.lə.dʒi): Conjunto sistemático de métodos e técnicas de pesquisa.",
    "options": [
      {
        "id": "A",
        "text": "SYMBIOSISymbiosis",
        "isCorrect": false,
        "rationale": "'SYMBIOSISymbiosis' significa 'Simbiose', não 'Metodologia'."
      },
      {
        "id": "B",
        "text": "METEOROLOGYeteorology",
        "isCorrect": false,
        "rationale": "'METEOROLOGYeteorology' significa 'Meteorologia', não 'Metodologia'."
      },
      {
        "id": "C",
        "text": "ELECTROMAGNETISMlectromagnetism",
        "isCorrect": false,
        "rationale": "'ELECTROMAGNETISMlectromagnetism' significa 'Eletromagnetismo', não 'Metodologia'."
      },
      {
        "id": "D",
        "text": "Methodology",
        "isCorrect": true,
        "rationale": "'Methodology' é a tradução correta para 'Metodologia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-17",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Spectrometry",
    "wordPt": "Espectrometria",
    "phonetic": "spɛkˈtrɑː.mə.tri",
    "sentence": "Mass _________ identifies unknown chemical elements.",
    "sentencePt": "A espectrometria de massa identifica elementos químicos desconhecidos.",
    "exampleEn": "Mass Spectrometry identifies unknown chemical elements.",
    "examplePt": "A espectrometria de massa identifica elementos químicos desconhecidos.",
    "gapWord": "Spectrometry",
    "question": "Como se diz 'Espectrometria' em inglês?",
    "hint": "Técnica analítica de separação e medição espectral de íons.",
    "rationale": "'Spectrometry' (spɛkˈtrɑː.mə.tri): Técnica analítica de separação e medição espectral de íons.",
    "options": [
      {
        "id": "A",
        "text": "Spectrometry",
        "isCorrect": true,
        "rationale": "'Spectrometry' é a tradução correta para 'Espectrometria'."
      },
      {
        "id": "B",
        "text": "ENDOCRINOLOGYndocrinology",
        "isCorrect": false,
        "rationale": "'ENDOCRINOLOGYndocrinology' significa 'Endocrinologia', não 'Espectrometria'."
      },
      {
        "id": "C",
        "text": "ASTROPHYSICSstrophysics",
        "isCorrect": false,
        "rationale": "'ASTROPHYSICSstrophysics' significa 'Astrofísica', não 'Espectrometria'."
      },
      {
        "id": "D",
        "text": "SYMBIOSISymbiosis",
        "isCorrect": false,
        "rationale": "'SYMBIOSISymbiosis' significa 'Simbiose', não 'Espectrometria'."
      }
    ]
  },
  {
    "id": "sql-sci-d-18",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Chromatography",
    "wordPt": "Cromatografia",
    "phonetic": "ˌkroʊ.məˈtɑː.ɡrə.fi",
    "sentence": "Biochemists separated the pigments using gas _________.",
    "sentencePt": "Bioquímicos separaram os pigmentos usando cromatografia gasosa.",
    "exampleEn": "Biochemists separated the pigments using gas Chromatography.",
    "examplePt": "Bioquímicos separaram os pigmentos usando cromatografia gasosa.",
    "gapWord": "Chromatography",
    "question": "Como se diz 'Cromatografia' em inglês?",
    "hint": "Método de separação física dos componentes de uma mistura.",
    "rationale": "'Chromatography' (ˌkroʊ.məˈtɑː.ɡrə.fi): Método de separação física dos componentes de uma mistura.",
    "options": [
      {
        "id": "A",
        "text": "PATHOGENathogen",
        "isCorrect": false,
        "rationale": "'PATHOGENathogen' significa 'Patógeno', não 'Cromatografia'."
      },
      {
        "id": "B",
        "text": "Chromatography",
        "isCorrect": true,
        "rationale": "'Chromatography' é a tradução correta para 'Cromatografia'."
      },
      {
        "id": "C",
        "text": "NUCLEOSYNTHESISucleosynthesis",
        "isCorrect": false,
        "rationale": "'NUCLEOSYNTHESISucleosynthesis' significa 'Nucleossíntese', não 'Cromatografia'."
      },
      {
        "id": "D",
        "text": "NEUROSCIENCEeuroscience",
        "isCorrect": false,
        "rationale": "'NEUROSCIENCEeuroscience' significa 'Neurociência', não 'Cromatografia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-19",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Microbiology",
    "wordPt": "Microbiologia",
    "phonetic": "ˌmaɪ.kroʊ.baɪˈɑː.lə.dʒi",
    "sentence": "Pasteur laid the groundwork for medical _________.",
    "sentencePt": "Pasteur lançou as bases da microbiologia médica.",
    "exampleEn": "Pasteur laid the groundwork for medical Microbiology.",
    "examplePt": "Pasteur lançou as bases da microbiologia médica.",
    "gapWord": "Microbiology",
    "question": "Como se diz 'Microbiologia' em inglês?",
    "hint": "Estudo dos microrganismos unicelulares e acelulares.",
    "rationale": "'Microbiology' (ˌmaɪ.kroʊ.baɪˈɑː.lə.dʒi): Estudo dos microrganismos unicelulares e acelulares.",
    "options": [
      {
        "id": "A",
        "text": "CHROMOSOMEhromosome",
        "isCorrect": false,
        "rationale": "'CHROMOSOMEhromosome' significa 'Cromossomo', não 'Microbiologia'."
      },
      {
        "id": "B",
        "text": "TROPOSPHEREroposphere",
        "isCorrect": false,
        "rationale": "'TROPOSPHEREroposphere' significa 'Troposfera', não 'Microbiologia'."
      },
      {
        "id": "C",
        "text": "Microbiology",
        "isCorrect": true,
        "rationale": "'Microbiology' é a tradução correta para 'Microbiologia'."
      },
      {
        "id": "D",
        "text": "BIODIVERSITYiodiversity",
        "isCorrect": false,
        "rationale": "'BIODIVERSITYiodiversity' significa 'Biodiversidade', não 'Microbiologia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-20",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Biochemistry",
    "wordPt": "Bioquímica",
    "phonetic": "ˌbaɪ.oʊˈkɛm.ɪ.stri",
    "sentence": "Enzyme kinetics is a central focus in _________.",
    "sentencePt": "Cinética enzimática é um foco central na bioquímica.",
    "exampleEn": "Enzyme kinetics is a central focus in Biochemistry.",
    "examplePt": "Cinética enzimática é um foco central na bioquímica.",
    "gapWord": "Biochemistry",
    "question": "Como se diz 'Bioquímica' em inglês?",
    "hint": "Química dos processos e substâncias dos seres vivos.",
    "rationale": "'Biochemistry' (ˌbaɪ.oʊˈkɛm.ɪ.stri): Química dos processos e substâncias dos seres vivos.",
    "options": [
      {
        "id": "A",
        "text": "TELEMETRYelemetry",
        "isCorrect": false,
        "rationale": "'TELEMETRYelemetry' significa 'Telemetria', não 'Bioquímica'."
      },
      {
        "id": "B",
        "text": "CHROMOSOMEhromosome",
        "isCorrect": false,
        "rationale": "'CHROMOSOMEhromosome' significa 'Cromossomo', não 'Bioquímica'."
      },
      {
        "id": "C",
        "text": "NEUROPLASTICITYeuroplasticity",
        "isCorrect": false,
        "rationale": "'NEUROPLASTICITYeuroplasticity' significa 'Neuroplasticidade', não 'Bioquímica'."
      },
      {
        "id": "D",
        "text": "Biochemistry",
        "isCorrect": true,
        "rationale": "'Biochemistry' é a tradução correta para 'Bioquímica'."
      }
    ]
  },
  {
    "id": "sql-sci-d-21",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Geophysics",
    "wordPt": "Geofísica",
    "phonetic": "ˌdʒiː.oʊˈfɪz.ɪks",
    "sentence": "Seismic waves are measured by experts in _________.",
    "sentencePt": "Ondas sísmicas são medidas por especialistas em geofísica.",
    "exampleEn": "Seismic waves are measured by experts in Geophysics.",
    "examplePt": "Ondas sísmicas são medidas por especialistas em geofísica.",
    "gapWord": "Geophysics",
    "question": "Como se diz 'Geofísica' em inglês?",
    "hint": "Aplicação da física ao estudo da Terra e de sua dinâmica.",
    "rationale": "'Geophysics' (ˌdʒiː.oʊˈfɪz.ɪks): Aplicação da física ao estudo da Terra e de sua dinâmica.",
    "options": [
      {
        "id": "A",
        "text": "Geophysics",
        "isCorrect": true,
        "rationale": "'Geophysics' é a tradução correta para 'Geofísica'."
      },
      {
        "id": "B",
        "text": "ECOSYSTEMScosystems",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMScosystems' significa 'Ecossistemas', não 'Geofísica'."
      },
      {
        "id": "C",
        "text": "CRYSTALLOGRAPHYrystallography",
        "isCorrect": false,
        "rationale": "'CRYSTALLOGRAPHYrystallography' significa 'Cristalografia', não 'Geofísica'."
      },
      {
        "id": "D",
        "text": "HYPOTHESISypothesis",
        "isCorrect": false,
        "rationale": "'HYPOTHESISypothesis' significa 'Hipótese', não 'Geofísica'."
      }
    ]
  },
  {
    "id": "sql-sci-d-22",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Crystallography",
    "wordPt": "Cristalografia",
    "phonetic": "ˌkrɪs.təˈlɑː.ɡrə.fi",
    "sentence": "Franklin used X-ray _________ to reveal DNA structure.",
    "sentencePt": "Franklin utilizou cristalografia de raios-X para revelar a estrutura do DNA.",
    "exampleEn": "Franklin used X-ray Crystallography to reveal DNA structure.",
    "examplePt": "Franklin utilizou cristalografia de raios-X para revelar a estrutura do DNA.",
    "gapWord": "Crystallography",
    "question": "Como se diz 'Cristalografia' em inglês?",
    "hint": "Estudo experimental da disposição de átomos em sólidos cristalinos.",
    "rationale": "'Crystallography' (ˌkrɪs.təˈlɑː.ɡrə.fi): Estudo experimental da disposição de átomos em sólidos cristalinos.",
    "options": [
      {
        "id": "A",
        "text": "GRAVITATIONravitation",
        "isCorrect": false,
        "rationale": "'GRAVITATIONravitation' significa 'Gravitação Universal', não 'Cristalografia'."
      },
      {
        "id": "B",
        "text": "Crystallography",
        "isCorrect": true,
        "rationale": "'Crystallography' é a tradução correta para 'Cristalografia'."
      },
      {
        "id": "C",
        "text": "REFRACTIONefraction",
        "isCorrect": false,
        "rationale": "'REFRACTIONefraction' significa 'Refração', não 'Cristalografia'."
      },
      {
        "id": "D",
        "text": "PHOSPHORESCENCEhosphorescence",
        "isCorrect": false,
        "rationale": "'PHOSPHORESCENCEhosphorescence' significa 'Fosforescência', não 'Cristalografia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-23",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Spectroscopy",
    "wordPt": "Espectroscopia",
    "phonetic": "spɛkˈtrɑː.skə.pi",
    "sentence": "Astronomers determine star composition through _________.",
    "sentencePt": "Astrônomos determinam a composição estelar por espectroscopia.",
    "exampleEn": "Astronomers determine star composition through Spectroscopy.",
    "examplePt": "Astrônomos determinam a composição estelar por espectroscopia.",
    "gapWord": "Spectroscopy",
    "question": "Como se diz 'Espectroscopia' em inglês?",
    "hint": "Análise da interação entre matéria e radiação eletromagnética.",
    "rationale": "'Spectroscopy' (spɛkˈtrɑː.skə.pi): Análise da interação entre matéria e radiação eletromagnética.",
    "options": [
      {
        "id": "A",
        "text": "ELECTROMAGNETISMlectromagnetism",
        "isCorrect": false,
        "rationale": "'ELECTROMAGNETISMlectromagnetism' significa 'Eletromagnetismo', não 'Espectroscopia'."
      },
      {
        "id": "B",
        "text": "METABOLISMetabolism",
        "isCorrect": false,
        "rationale": "'METABOLISMetabolism' significa 'Metabolismo', não 'Espectroscopia'."
      },
      {
        "id": "C",
        "text": "Spectroscopy",
        "isCorrect": true,
        "rationale": "'Spectroscopy' é a tradução correta para 'Espectroscopia'."
      },
      {
        "id": "D",
        "text": "EVOLUTIONARYvolutionary",
        "isCorrect": false,
        "rationale": "'EVOLUTIONARYvolutionary' significa 'Evolucionário / Evolutivo', não 'Espectroscopia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-24",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Neuroplasticity",
    "wordPt": "Neuroplasticidade",
    "phonetic": "ˌnʊr.oʊ.plæˈstɪs.ə.ti",
    "sentence": "Learning new skills reorganizes pathways via _________.",
    "sentencePt": "Aprender novas habilidades reorganiza caminhos via neuroplasticidade.",
    "exampleEn": "Learning new skills reorganizes pathways via Neuroplasticity.",
    "examplePt": "Aprender novas habilidades reorganiza caminhos via neuroplasticidade.",
    "gapWord": "Neuroplasticity",
    "question": "Como se diz 'Neuroplasticidade' em inglês?",
    "hint": "Capacidade adaptativa do cérebro de remodelar conexões sinápticas.",
    "rationale": "'Neuroplasticity' (ˌnʊr.oʊ.plæˈstɪs.ə.ti): Capacidade adaptativa do cérebro de remodelar conexões sinápticas.",
    "options": [
      {
        "id": "A",
        "text": "ENDOCRINOLOGYndocrinology",
        "isCorrect": false,
        "rationale": "'ENDOCRINOLOGYndocrinology' significa 'Endocrinologia', não 'Neuroplasticidade'."
      },
      {
        "id": "B",
        "text": "NUCLEOSYNTHESISucleosynthesis",
        "isCorrect": false,
        "rationale": "'NUCLEOSYNTHESISucleosynthesis' significa 'Nucleossíntese', não 'Neuroplasticidade'."
      },
      {
        "id": "C",
        "text": "EPIGENETICSpigenetics",
        "isCorrect": false,
        "rationale": "'EPIGENETICSpigenetics' significa 'Epigenética', não 'Neuroplasticidade'."
      },
      {
        "id": "D",
        "text": "Neuroplasticity",
        "isCorrect": true,
        "rationale": "'Neuroplasticity' é a tradução correta para 'Neuroplasticidade'."
      }
    ]
  },
  {
    "id": "sql-sci-d-25",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Epigenetics",
    "wordPt": "Epigenética",
    "phonetic": "ˌɛp.ɪ.dʒəˈnɛt.ɪks",
    "sentence": "Environmental factors influence gene activity through _________.",
    "sentencePt": "Fatores ambientais influenciam a atividade gênica via epigenética.",
    "exampleEn": "Environmental factors influence gene activity through Epigenetics.",
    "examplePt": "Fatores ambientais influenciam a atividade gênica via epigenética.",
    "gapWord": "Epigenetics",
    "question": "Como se diz 'Epigenética' em inglês?",
    "hint": "Modificações hereditárias na expressão gênica sem alteração do DNA.",
    "rationale": "'Epigenetics' (ˌɛp.ɪ.dʒəˈnɛt.ɪks): Modificações hereditárias na expressão gênica sem alteração do DNA.",
    "options": [
      {
        "id": "A",
        "text": "Epigenetics",
        "isCorrect": true,
        "rationale": "'Epigenetics' é a tradução correta para 'Epigenética'."
      },
      {
        "id": "B",
        "text": "EVOLUTIONARYvolutionary",
        "isCorrect": false,
        "rationale": "'EVOLUTIONARYvolutionary' significa 'Evolucionário / Evolutivo', não 'Epigenética'."
      },
      {
        "id": "C",
        "text": "BIOTECHNOLOGYiotechnology",
        "isCorrect": false,
        "rationale": "'BIOTECHNOLOGYiotechnology' significa 'Biotecnologia', não 'Epigenética'."
      },
      {
        "id": "D",
        "text": "SUPERCONDUCTIVITYuperconductivity",
        "isCorrect": false,
        "rationale": "'SUPERCONDUCTIVITYuperconductivity' significa 'Supercondutividade', não 'Epigenética'."
      }
    ]
  },
  {
    "id": "sql-sci-d-26",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Endocrinology",
    "wordPt": "Endocrinologia",
    "phonetic": "ˌɛn.doʊ.krɪˈnɑː.lə.dʒi",
    "sentence": "Hormonal feedback loops are studied in clinical _________.",
    "sentencePt": "Mecanismos de retroalimentação hormonal são estudados na endocrinologia.",
    "exampleEn": "Hormonal feedback loops are studied in clinical Endocrinology.",
    "examplePt": "Mecanismos de retroalimentação hormonal são estudados na endocrinologia.",
    "gapWord": "Endocrinology",
    "question": "Como se diz 'Endocrinologia' em inglês?",
    "hint": "Especialidade médica e biológica das glândulas e hormônios.",
    "rationale": "'Endocrinology' (ˌɛn.doʊ.krɪˈnɑː.lə.dʒi): Especialidade médica e biológica das glândulas e hormônios.",
    "options": [
      {
        "id": "A",
        "text": "LUMINOSITYuminosity",
        "isCorrect": false,
        "rationale": "'LUMINOSITYuminosity' significa 'Luminosidade Estelar', não 'Endocrinologia'."
      },
      {
        "id": "B",
        "text": "Endocrinology",
        "isCorrect": true,
        "rationale": "'Endocrinology' é a tradução correta para 'Endocrinologia'."
      },
      {
        "id": "C",
        "text": "CHROMOSOMEhromosome",
        "isCorrect": false,
        "rationale": "'CHROMOSOMEhromosome' significa 'Cromossomo', não 'Endocrinologia'."
      },
      {
        "id": "D",
        "text": "TELEMETRYelemetry",
        "isCorrect": false,
        "rationale": "'TELEMETRYelemetry' significa 'Telemetria', não 'Endocrinologia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-27",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Microbiome",
    "wordPt": "Microbioma",
    "phonetic": "ˈmaɪ.kroʊ.baɪ.oʊm",
    "sentence": "The human gut _________ plays a vital role in immunity.",
    "sentencePt": "O microbioma intestinal humano desempenha papel vital na imunidade.",
    "exampleEn": "The human gut Microbiome plays a vital role in immunity.",
    "examplePt": "O microbioma intestinal humano desempenha papel vital na imunidade.",
    "gapWord": "Microbiome",
    "question": "Como se diz 'Microbioma' em inglês?",
    "hint": "Comunidade ecológica de microrganismos que habitam um hospedeiro.",
    "rationale": "'Microbiome' (ˈmaɪ.kroʊ.baɪ.oʊm): Comunidade ecológica de microrganismos que habitam um hospedeiro.",
    "options": [
      {
        "id": "A",
        "text": "GEOPHYSICSeophysics",
        "isCorrect": false,
        "rationale": "'GEOPHYSICSeophysics' significa 'Geofísica', não 'Microbioma'."
      },
      {
        "id": "B",
        "text": "BIOCHEMISTRYiochemistry",
        "isCorrect": false,
        "rationale": "'BIOCHEMISTRYiochemistry' significa 'Bioquímica', não 'Microbioma'."
      },
      {
        "id": "C",
        "text": "Microbiome",
        "isCorrect": true,
        "rationale": "'Microbiome' é a tradução correta para 'Microbioma'."
      },
      {
        "id": "D",
        "text": "PALEONTOLOGYaleontology",
        "isCorrect": false,
        "rationale": "'PALEONTOLOGYaleontology' significa 'Paleontologia', não 'Microbioma'."
      }
    ]
  },
  {
    "id": "sql-sci-d-28",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Superconductivity",
    "wordPt": "Supercondutividade",
    "phonetic": "ˌsuː.pərˌkɑːn.dʌkˈtɪv.ə.ti",
    "sentence": "Zero electrical resistance occurs during low-temp _________.",
    "sentencePt": "Resistência elétrica zero ocorre durante a supercondutividade criogênica.",
    "exampleEn": "Zero electrical resistance occurs during low-temp Superconductivity.",
    "examplePt": "Resistência elétrica zero ocorre durante a supercondutividade criogênica.",
    "gapWord": "Superconductivity",
    "question": "Como se diz 'Supercondutividade' em inglês?",
    "hint": "Estado quântico com perda total de resistência elétrica.",
    "rationale": "'Superconductivity' (ˌsuː.pərˌkɑːn.dʌkˈtɪv.ə.ti): Estado quântico com perda total de resistência elétrica.",
    "options": [
      {
        "id": "A",
        "text": "NEUROPLASTICITYeuroplasticity",
        "isCorrect": false,
        "rationale": "'NEUROPLASTICITYeuroplasticity' significa 'Neuroplasticidade', não 'Supercondutividade'."
      },
      {
        "id": "B",
        "text": "METABOLISMetabolism",
        "isCorrect": false,
        "rationale": "'METABOLISMetabolism' significa 'Metabolismo', não 'Supercondutividade'."
      },
      {
        "id": "C",
        "text": "THERMODYNAMICShermodynamics",
        "isCorrect": false,
        "rationale": "'THERMODYNAMICShermodynamics' significa 'Termodinâmica', não 'Supercondutividade'."
      },
      {
        "id": "D",
        "text": "Superconductivity",
        "isCorrect": true,
        "rationale": "'Superconductivity' é a tradução correta para 'Supercondutividade'."
      }
    ]
  },
  {
    "id": "sql-sci-d-29",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Nucleosynthesis",
    "wordPt": "Nucleossíntese",
    "phonetic": "ˌnjuː.kli.oʊˈsɪn.θə.sɪs",
    "sentence": "Heavy elements were forged through stellar _________.",
    "sentencePt": "Elementos pesados foram forjados através de nucleossíntese estelar.",
    "exampleEn": "Heavy elements were forged through stellar Nucleosynthesis.",
    "examplePt": "Elementos pesados foram forjados através de nucleossíntese estelar.",
    "gapWord": "Nucleosynthesis",
    "question": "Como se diz 'Nucleossíntese' em inglês?",
    "hint": "Criação de novos núcleos atômicos a partir de reações nucleares.",
    "rationale": "'Nucleosynthesis' (ˌnjuː.kli.oʊˈsɪn.θə.sɪs): Criação de novos núcleos atômicos a partir de reações nucleares.",
    "options": [
      {
        "id": "A",
        "text": "Nucleosynthesis",
        "isCorrect": true,
        "rationale": "'Nucleosynthesis' é a tradução correta para 'Nucleossíntese'."
      },
      {
        "id": "B",
        "text": "HYPOTHESISypothesis",
        "isCorrect": false,
        "rationale": "'HYPOTHESISypothesis' significa 'Hipótese', não 'Nucleossíntese'."
      },
      {
        "id": "C",
        "text": "TELEMETRYelemetry",
        "isCorrect": false,
        "rationale": "'TELEMETRYelemetry' significa 'Telemetria', não 'Nucleossíntese'."
      },
      {
        "id": "D",
        "text": "MUTATIONutation",
        "isCorrect": false,
        "rationale": "'MUTATIONutation' significa 'Mutação Genética', não 'Nucleossíntese'."
      }
    ]
  },
  {
    "id": "sql-sci-d-30",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Electromotive",
    "wordPt": "Eletromotriz",
    "phonetic": "iˌlɛk.troʊˈmoʊ.tɪv",
    "sentence": "The chemical battery generates an _________ force of 12V.",
    "sentencePt": "A bateria química gera uma força eletromotriz de 12V.",
    "exampleEn": "The chemical battery generates an Electromotive force of 12V.",
    "examplePt": "A bateria química gera uma força eletromotriz de 12V.",
    "gapWord": "Electromotive",
    "question": "Como se diz 'Eletromotriz' em inglês?",
    "hint": "Força geradora de diferença de potencial elétrico em circuitos.",
    "rationale": "'Electromotive' (iˌlɛk.troʊˈmoʊ.tɪv): Força geradora de diferença de potencial elétrico em circuitos.",
    "options": [
      {
        "id": "A",
        "text": "METEOROLOGYeteorology",
        "isCorrect": false,
        "rationale": "'METEOROLOGYeteorology' significa 'Meteorologia', não 'Eletromotriz'."
      },
      {
        "id": "B",
        "text": "Electromotive",
        "isCorrect": true,
        "rationale": "'Electromotive' é a tradução correta para 'Eletromotriz'."
      },
      {
        "id": "C",
        "text": "PATHOGENathogen",
        "isCorrect": false,
        "rationale": "'PATHOGENathogen' significa 'Patógeno', não 'Eletromotriz'."
      },
      {
        "id": "D",
        "text": "MICROBIOMEicrobiome",
        "isCorrect": false,
        "rationale": "'MICROBIOMEicrobiome' significa 'Microbioma', não 'Eletromotriz'."
      }
    ]
  },
  {
    "id": "sql-sci-d-31",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Gravitation",
    "wordPt": "Gravitação Universal",
    "phonetic": "ˌɡræv.əˈteɪ.ʃən",
    "sentence": "Newton formulated the inverse-square law of _________.",
    "sentencePt": "Newton formulou a lei do inverso do quadrado da gravitação universal.",
    "exampleEn": "Newton formulated the inverse-square law of Gravitation.",
    "examplePt": "Newton formulou a lei do inverso do quadrado da gravitação universal.",
    "gapWord": "Gravitation",
    "question": "Como se diz 'Gravitação Universal' em inglês?",
    "hint": "Atração gravitacional mútua descrita entre massas no universo.",
    "rationale": "'Gravitation' (ˌɡræv.əˈteɪ.ʃən): Atração gravitacional mútua descrita entre massas no universo.",
    "options": [
      {
        "id": "A",
        "text": "CHROMATOGRAPHYhromatography",
        "isCorrect": false,
        "rationale": "'CHROMATOGRAPHYhromatography' significa 'Cromatografia', não 'Gravitação Universal'."
      },
      {
        "id": "B",
        "text": "PHOSPHORESCENCEhosphorescence",
        "isCorrect": false,
        "rationale": "'PHOSPHORESCENCEhosphorescence' significa 'Fosforescência', não 'Gravitação Universal'."
      },
      {
        "id": "C",
        "text": "Gravitation",
        "isCorrect": true,
        "rationale": "'Gravitation' é a tradução correta para 'Gravitação Universal'."
      },
      {
        "id": "D",
        "text": "TROPOSPHEREroposphere",
        "isCorrect": false,
        "rationale": "'TROPOSPHEREroposphere' significa 'Troposfera', não 'Gravitação Universal'."
      }
    ]
  },
  {
    "id": "sql-sci-d-32",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Luminosity",
    "wordPt": "Luminosidade Estelar",
    "phonetic": "ˌluː.məˈnɑː.sə.ti",
    "sentence": "A supergiant star radiates immense intrinsic _________.",
    "sentencePt": "Uma estrela supergigante irradia imensa luminosidade intrínseca.",
    "exampleEn": "A supergiant star radiates immense intrinsic Luminosity.",
    "examplePt": "Uma estrela supergigante irradia imensa luminosidade intrínseca.",
    "gapWord": "Luminosity",
    "question": "Como se diz 'Luminosidade Estelar' em inglês?",
    "hint": "Potência total de energia eletromagnética emitida por um astro.",
    "rationale": "'Luminosity' (ˌluː.məˈnɑː.sə.ti): Potência total de energia eletromagnética emitida por um astro.",
    "options": [
      {
        "id": "A",
        "text": "ASTRONOMYstronomy",
        "isCorrect": false,
        "rationale": "'ASTRONOMYstronomy' significa 'Astronomia', não 'Luminosidade Estelar'."
      },
      {
        "id": "B",
        "text": "BIOCHEMISTRYiochemistry",
        "isCorrect": false,
        "rationale": "'BIOCHEMISTRYiochemistry' significa 'Bioquímica', não 'Luminosidade Estelar'."
      },
      {
        "id": "C",
        "text": "CHROMOSOMEhromosome",
        "isCorrect": false,
        "rationale": "'CHROMOSOMEhromosome' significa 'Cromossomo', não 'Luminosidade Estelar'."
      },
      {
        "id": "D",
        "text": "Luminosity",
        "isCorrect": true,
        "rationale": "'Luminosity' é a tradução correta para 'Luminosidade Estelar'."
      }
    ]
  },
  {
    "id": "sql-sci-d-33",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Homeostasis",
    "wordPt": "Homeostase",
    "phonetic": "ˌhoʊ.mi.oʊˈsteɪ.sɪs",
    "sentence": "Sweating regulates internal temperature to maintain _________.",
    "sentencePt": "O suor regula a temperatura interna para manter a homeostase.",
    "exampleEn": "Sweating regulates internal temperature to maintain Homeostasis.",
    "examplePt": "O suor regula a temperatura interna para manter a homeostase.",
    "gapWord": "Homeostasis",
    "question": "Como se diz 'Homeostase' em inglês?",
    "hint": "Estado estável dinâmico de equilíbrio fisiológico do organismo.",
    "rationale": "'Homeostasis' (ˌhoʊ.mi.oʊˈsteɪ.sɪs): Estado estável dinâmico de equilíbrio fisiológico do organismo.",
    "options": [
      {
        "id": "A",
        "text": "Homeostasis",
        "isCorrect": true,
        "rationale": "'Homeostasis' é a tradução correta para 'Homeostase'."
      },
      {
        "id": "B",
        "text": "ECOSYSTEMScosystems",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMScosystems' significa 'Ecossistemas', não 'Homeostase'."
      },
      {
        "id": "C",
        "text": "QUANTUMuantum",
        "isCorrect": false,
        "rationale": "'QUANTUMuantum' significa 'Quântico', não 'Homeostase'."
      },
      {
        "id": "D",
        "text": "ATMOSPHEREtmosphere",
        "isCorrect": false,
        "rationale": "'ATMOSPHEREtmosphere' significa 'Atmosfera', não 'Homeostase'."
      }
    ]
  },
  {
    "id": "sql-sci-d-34",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Metabolism",
    "wordPt": "Metabolismo",
    "phonetic": "məˈtæb.əˌlɪz.əm",
    "sentence": "Cellular respiration is a core component of human _________.",
    "sentencePt": "A respiração celular é um componente central do metabolismo humano.",
    "exampleEn": "Cellular respiration is a core component of human Metabolism.",
    "examplePt": "A respiração celular é um componente central do metabolismo humano.",
    "gapWord": "Metabolism",
    "question": "Como se diz 'Metabolismo' em inglês?",
    "hint": "Conjunto de transformações químicas celulares vitais.",
    "rationale": "'Metabolism' (məˈtæb.əˌlɪz.əm): Conjunto de transformações químicas celulares vitais.",
    "options": [
      {
        "id": "A",
        "text": "EPIGENETICSpigenetics",
        "isCorrect": false,
        "rationale": "'EPIGENETICSpigenetics' significa 'Epigenética', não 'Metabolismo'."
      },
      {
        "id": "B",
        "text": "Metabolism",
        "isCorrect": true,
        "rationale": "'Metabolism' é a tradução correta para 'Metabolismo'."
      },
      {
        "id": "C",
        "text": "PHOTOSYNTHESIShotosynthesis",
        "isCorrect": false,
        "rationale": "'PHOTOSYNTHESIShotosynthesis' significa 'Fotossíntese', não 'Metabolismo'."
      },
      {
        "id": "D",
        "text": "ECOSYSTEMScosystems",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMScosystems' significa 'Ecossistemas', não 'Metabolismo'."
      }
    ]
  },
  {
    "id": "sql-sci-d-35",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Pathogen",
    "wordPt": "Patógeno",
    "phonetic": "ˈpæθ.ə.dʒən",
    "sentence": "The immune system identifies and neutralizes the foreign _________.",
    "sentencePt": "O sistema imunológico identifica e neutraliza o patógeno invasor.",
    "exampleEn": "The immune system identifies and neutralizes the foreign Pathogen.",
    "examplePt": "O sistema imunológico identifica e neutraliza o patógeno invasor.",
    "gapWord": "Pathogen",
    "question": "Como se diz 'Patógeno' em inglês?",
    "hint": "Agente biológico microscópico capaz de causar doenças.",
    "rationale": "'Pathogen' (ˈpæθ.ə.dʒən): Agente biológico microscópico capaz de causar doenças.",
    "options": [
      {
        "id": "A",
        "text": "PHOSPHORESCENCEhosphorescence",
        "isCorrect": false,
        "rationale": "'PHOSPHORESCENCEhosphorescence' significa 'Fosforescência', não 'Patógeno'."
      },
      {
        "id": "B",
        "text": "SYMBIOSISymbiosis",
        "isCorrect": false,
        "rationale": "'SYMBIOSISymbiosis' significa 'Simbiose', não 'Patógeno'."
      },
      {
        "id": "C",
        "text": "Pathogen",
        "isCorrect": true,
        "rationale": "'Pathogen' é a tradução correta para 'Patógeno'."
      },
      {
        "id": "D",
        "text": "PALEONTOLOGYaleontology",
        "isCorrect": false,
        "rationale": "'PALEONTOLOGYaleontology' significa 'Paleontologia', não 'Patógeno'."
      }
    ]
  },
  {
    "id": "sql-sci-d-36",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Symbiosis",
    "wordPt": "Simbiose",
    "phonetic": "ˌsɪm.baɪˈoʊ.sɪs",
    "sentence": "Lichens represent a classic mutualistic _________ between algae and fungi.",
    "sentencePt": "Líquens representam uma clássica simbiose mutualística entre algas e fungos.",
    "exampleEn": "Lichens represent a classic mutualistic Symbiosis between algae and fungi.",
    "examplePt": "Líquens representam uma clássica simbiose mutualística entre algas e fungos.",
    "gapWord": "Symbiosis",
    "question": "Como se diz 'Simbiose' em inglês?",
    "hint": "Interação ecológica próxima e prolongada entre duas espécies.",
    "rationale": "'Symbiosis' (ˌsɪm.baɪˈoʊ.sɪs): Interação ecológica próxima e prolongada entre duas espécies.",
    "options": [
      {
        "id": "A",
        "text": "SPECTROMETRYpectrometry",
        "isCorrect": false,
        "rationale": "'SPECTROMETRYpectrometry' significa 'Espectrometria', não 'Simbiose'."
      },
      {
        "id": "B",
        "text": "NUCLEOSYNTHESISucleosynthesis",
        "isCorrect": false,
        "rationale": "'NUCLEOSYNTHESISucleosynthesis' significa 'Nucleossíntese', não 'Simbiose'."
      },
      {
        "id": "C",
        "text": "ECOSYSTEMScosystems",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMScosystems' significa 'Ecossistemas', não 'Simbiose'."
      },
      {
        "id": "D",
        "text": "Symbiosis",
        "isCorrect": true,
        "rationale": "'Symbiosis' é a tradução correta para 'Simbiose'."
      }
    ]
  },
  {
    "id": "sql-sci-d-37",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Diffraction",
    "wordPt": "Difração",
    "phonetic": "dɪˈfræk.ʃən",
    "sentence": "Wave bending around narrow obstacles illustrates optical _________.",
    "sentencePt": "O encurvamento de ondas em obstáculos estreitos ilustra a difração óptica.",
    "exampleEn": "Wave bending around narrow obstacles illustrates optical Diffraction.",
    "examplePt": "O encurvamento de ondas em obstáculos estreitos ilustra a difração óptica.",
    "gapWord": "Diffraction",
    "question": "Como se diz 'Difração' em inglês?",
    "hint": "Desvio ou espalhamento de ondas ao contornar fendas ou bordas.",
    "rationale": "'Diffraction' (dɪˈfræk.ʃən): Desvio ou espalhamento de ondas ao contornar fendas ou bordas.",
    "options": [
      {
        "id": "A",
        "text": "Diffraction",
        "isCorrect": true,
        "rationale": "'Diffraction' é a tradução correta para 'Difração'."
      },
      {
        "id": "B",
        "text": "NANOTECHNOLOGYanotechnology",
        "isCorrect": false,
        "rationale": "'NANOTECHNOLOGYanotechnology' significa 'Nanotecnologia', não 'Difração'."
      },
      {
        "id": "C",
        "text": "ASTROPHYSICSstrophysics",
        "isCorrect": false,
        "rationale": "'ASTROPHYSICSstrophysics' significa 'Astrofísica', não 'Difração'."
      },
      {
        "id": "D",
        "text": "RADIOACTIVITYadioactivity",
        "isCorrect": false,
        "rationale": "'RADIOACTIVITYadioactivity' significa 'Radioatividade', não 'Difração'."
      }
    ]
  },
  {
    "id": "sql-sci-d-38",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Refraction",
    "wordPt": "Refração",
    "phonetic": "rɪˈfræk.ʃən",
    "sentence": "Light bends as it enters water due to optical _________.",
    "sentencePt": "A luz se desvia ao penetrar na água devido à refração óptica.",
    "exampleEn": "Light bends as it enters water due to optical Refraction.",
    "examplePt": "A luz se desvia ao penetrar na água devido à refração óptica.",
    "gapWord": "Refraction",
    "question": "Como se diz 'Refração' em inglês?",
    "hint": "Mudança na direção da onda pela variação de velocidade no meio.",
    "rationale": "'Refraction' (rɪˈfræk.ʃən): Mudança na direção da onda pela variação de velocidade no meio.",
    "options": [
      {
        "id": "A",
        "text": "METABOLISMetabolism",
        "isCorrect": false,
        "rationale": "'METABOLISMetabolism' significa 'Metabolismo', não 'Refração'."
      },
      {
        "id": "B",
        "text": "Refraction",
        "isCorrect": true,
        "rationale": "'Refraction' é a tradução correta para 'Refração'."
      },
      {
        "id": "C",
        "text": "EPIGENETICSpigenetics",
        "isCorrect": false,
        "rationale": "'EPIGENETICSpigenetics' significa 'Epigenética', não 'Refração'."
      },
      {
        "id": "D",
        "text": "LUMINOSITYuminosity",
        "isCorrect": false,
        "rationale": "'LUMINOSITYuminosity' significa 'Luminosidade Estelar', não 'Refração'."
      }
    ]
  },
  {
    "id": "sql-sci-d-39",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Fluorescence",
    "wordPt": "Fluorescência",
    "phonetic": "flʊˈrɛs.əns",
    "sentence": "Minerals glow under UV illumination exhibiting bright _________.",
    "sentencePt": "Minerais brilham sob luz ultravioleta exibindo fluorescência brilhante.",
    "exampleEn": "Minerals glow under UV illumination exhibiting bright Fluorescence.",
    "examplePt": "Minerais brilham sob luz ultravioleta exibindo fluorescência brilhante.",
    "gapWord": "Fluorescence",
    "question": "Como se diz 'Fluorescência' em inglês?",
    "hint": "Emissão de luz imediata por substância excitada por radiação.",
    "rationale": "'Fluorescence' (flʊˈrɛs.əns): Emissão de luz imediata por substância excitada por radiação.",
    "options": [
      {
        "id": "A",
        "text": "REFRACTIONefraction",
        "isCorrect": false,
        "rationale": "'REFRACTIONefraction' significa 'Refração', não 'Fluorescência'."
      },
      {
        "id": "B",
        "text": "NUCLEOSYNTHESISucleosynthesis",
        "isCorrect": false,
        "rationale": "'NUCLEOSYNTHESISucleosynthesis' significa 'Nucleossíntese', não 'Fluorescência'."
      },
      {
        "id": "C",
        "text": "Fluorescence",
        "isCorrect": true,
        "rationale": "'Fluorescence' é a tradução correta para 'Fluorescência'."
      },
      {
        "id": "D",
        "text": "QUANTUMuantum",
        "isCorrect": false,
        "rationale": "'QUANTUMuantum' significa 'Quântico', não 'Fluorescência'."
      }
    ]
  },
  {
    "id": "sql-sci-d-40",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Phosphorescence",
    "wordPt": "Fosforescência",
    "phonetic": "ˌfɑːs.fəˈrɛs.əns",
    "sentence": "Glow-in-the-dark stickers display sustained _________.",
    "sentencePt": "Adesivos que brilham no escuro exibem fosforescência duradoura.",
    "exampleEn": "Glow-in-the-dark stickers display sustained Phosphorescence.",
    "examplePt": "Adesivos que brilham no escuro exibem fosforescência duradoura.",
    "gapWord": "Phosphorescence",
    "question": "Como se diz 'Fosforescência' em inglês?",
    "hint": "Emissão retardada e persistente de luz após excitação prévia.",
    "rationale": "'Phosphorescence' (ˌfɑːs.fəˈrɛs.əns): Emissão retardada e persistente de luz após excitação prévia.",
    "options": [
      {
        "id": "A",
        "text": "LUMINOSITYuminosity",
        "isCorrect": false,
        "rationale": "'LUMINOSITYuminosity' significa 'Luminosidade Estelar', não 'Fosforescência'."
      },
      {
        "id": "B",
        "text": "BIOCHEMISTRYiochemistry",
        "isCorrect": false,
        "rationale": "'BIOCHEMISTRYiochemistry' significa 'Bioquímica', não 'Fosforescência'."
      },
      {
        "id": "C",
        "text": "DIFFRACTIONiffraction",
        "isCorrect": false,
        "rationale": "'DIFFRACTIONiffraction' significa 'Difração', não 'Fosforescência'."
      },
      {
        "id": "D",
        "text": "Phosphorescence",
        "isCorrect": true,
        "rationale": "'Phosphorescence' é a tradução correta para 'Fosforescência'."
      }
    ]
  },
  {
    "id": "sql-sci-d-41",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Radioactivity",
    "wordPt": "Radioatividade",
    "phonetic": "ˌreɪ.di.oʊ.ækˈtɪv.ə.ti",
    "sentence": "Unstable atomic nuclei decay emitting ionizing _________.",
    "sentencePt": "Núcleos atômicos instáveis decaem emitindo radioatividade ionizante.",
    "exampleEn": "Unstable atomic nuclei decay emitting ionizing Radioactivity.",
    "examplePt": "Núcleos atômicos instáveis decaem emitindo radioatividade ionizante.",
    "gapWord": "Radioactivity",
    "question": "Como se diz 'Radioatividade' em inglês?",
    "hint": "Desintegração espontânea nuclear com emissão de partículas e energia.",
    "rationale": "'Radioactivity' (ˌreɪ.di.oʊ.ækˈtɪv.ə.ti): Desintegração espontânea nuclear com emissão de partículas e energia.",
    "options": [
      {
        "id": "A",
        "text": "Radioactivity",
        "isCorrect": true,
        "rationale": "'Radioactivity' é a tradução correta para 'Radioatividade'."
      },
      {
        "id": "B",
        "text": "BIOCHEMISTRYiochemistry",
        "isCorrect": false,
        "rationale": "'BIOCHEMISTRYiochemistry' significa 'Bioquímica', não 'Radioatividade'."
      },
      {
        "id": "C",
        "text": "NANOTECHNOLOGYanotechnology",
        "isCorrect": false,
        "rationale": "'NANOTECHNOLOGYanotechnology' significa 'Nanotecnologia', não 'Radioatividade'."
      },
      {
        "id": "D",
        "text": "STRATOSPHEREtratosphere",
        "isCorrect": false,
        "rationale": "'STRATOSPHEREtratosphere' significa 'Estratopausa / Estratosfera', não 'Radioatividade'."
      }
    ]
  },
  {
    "id": "sql-sci-d-42",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Astronomy",
    "wordPt": "Astronomia",
    "phonetic": "əˈstrɑː.nə.mi",
    "sentence": "The James Webb telescope opened a revolutionary era in _________.",
    "sentencePt": "O telescópio James Webb inaugurou uma era revolucionária na astronomia.",
    "exampleEn": "The James Webb telescope opened a revolutionary era in Astronomy.",
    "examplePt": "O telescópio James Webb inaugurou uma era revolucionária na astronomia.",
    "gapWord": "Astronomy",
    "question": "Como se diz 'Astronomia' em inglês?",
    "hint": "Ciência natural que estuda corpos celestes e o universo sideral.",
    "rationale": "'Astronomy' (əˈstrɑː.nə.mi): Ciência natural que estuda corpos celestes e o universo sideral.",
    "options": [
      {
        "id": "A",
        "text": "PHOSPHORESCENCEhosphorescence",
        "isCorrect": false,
        "rationale": "'PHOSPHORESCENCEhosphorescence' significa 'Fosforescência', não 'Astronomia'."
      },
      {
        "id": "B",
        "text": "Astronomy",
        "isCorrect": true,
        "rationale": "'Astronomy' é a tradução correta para 'Astronomia'."
      },
      {
        "id": "C",
        "text": "STRATOSPHEREtratosphere",
        "isCorrect": false,
        "rationale": "'STRATOSPHEREtratosphere' significa 'Estratopausa / Estratosfera', não 'Astronomia'."
      },
      {
        "id": "D",
        "text": "ECOSYSTEMScosystems",
        "isCorrect": false,
        "rationale": "'ECOSYSTEMScosystems' significa 'Ecossistemas', não 'Astronomia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-43",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Biotechnology",
    "wordPt": "Biotecnologia",
    "phonetic": "ˌbaɪ.oʊ.tɛkˈnɑː.lə.dʒi",
    "sentence": "Genetic engineering is a dynamic field of modern _________.",
    "sentencePt": "Engenharia genética é um campo dinâmico da biotecnologia moderna.",
    "exampleEn": "Genetic engineering is a dynamic field of modern Biotechnology.",
    "examplePt": "Engenharia genética é um campo dinâmico da biotecnologia moderna.",
    "gapWord": "Biotechnology",
    "question": "Como se diz 'Biotecnologia' em inglês?",
    "hint": "Aplicação tecnológica que utiliza sistemas biológicos e organismos.",
    "rationale": "'Biotechnology' (ˌbaɪ.oʊ.tɛkˈnɑː.lə.dʒi): Aplicação tecnológica que utiliza sistemas biológicos e organismos.",
    "options": [
      {
        "id": "A",
        "text": "HOMEOSTASISomeostasis",
        "isCorrect": false,
        "rationale": "'HOMEOSTASISomeostasis' significa 'Homeostase', não 'Biotecnologia'."
      },
      {
        "id": "B",
        "text": "THERMODYNAMICShermodynamics",
        "isCorrect": false,
        "rationale": "'THERMODYNAMICShermodynamics' significa 'Termodinâmica', não 'Biotecnologia'."
      },
      {
        "id": "C",
        "text": "Biotechnology",
        "isCorrect": true,
        "rationale": "'Biotechnology' é a tradução correta para 'Biotecnologia'."
      },
      {
        "id": "D",
        "text": "METHODOLOGYethodology",
        "isCorrect": false,
        "rationale": "'METHODOLOGYethodology' significa 'Metodologia', não 'Biotecnologia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-44",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Nanotechnology",
    "wordPt": "Nanotecnologia",
    "phonetic": "ˌnæn.oʊ.tɛkˈnɑː.lə.dʒi",
    "sentence": "Carbon nanotubes are manufactured using precision _________.",
    "sentencePt": "Nanotubos de carbono são fabricados usando nanotecnologia de precisão.",
    "exampleEn": "Carbon nanotubes are manufactured using precision Nanotechnology.",
    "examplePt": "Nanotubos de carbono são fabricados usando nanotecnologia de precisão.",
    "gapWord": "Nanotechnology",
    "question": "Como se diz 'Nanotecnologia' em inglês?",
    "hint": "Manipulação da matéria em escala atômica e molecular (1-100 nm).",
    "rationale": "'Nanotechnology' (ˌnæn.oʊ.tɛkˈnɑː.lə.dʒi): Manipulação da matéria em escala atômica e molecular (1-100 nm).",
    "options": [
      {
        "id": "A",
        "text": "FLUORESCENCEluorescence",
        "isCorrect": false,
        "rationale": "'FLUORESCENCEluorescence' significa 'Fluorescência', não 'Nanotecnologia'."
      },
      {
        "id": "B",
        "text": "MUTATIONutation",
        "isCorrect": false,
        "rationale": "'MUTATIONutation' significa 'Mutação Genética', não 'Nanotecnologia'."
      },
      {
        "id": "C",
        "text": "METEOROLOGYeteorology",
        "isCorrect": false,
        "rationale": "'METEOROLOGYeteorology' significa 'Meteorologia', não 'Nanotecnologia'."
      },
      {
        "id": "D",
        "text": "Nanotechnology",
        "isCorrect": true,
        "rationale": "'Nanotechnology' é a tradução correta para 'Nanotecnologia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-45",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Seismology",
    "wordPt": "Sismologia",
    "phonetic": "saɪzˈmɑː.lə.dʒi",
    "sentence": "Fault lines and tremors are mapped by researchers in _________.",
    "sentencePt": "Falhas geológicas e tremores são mapeados por pesquisadores em sismologia.",
    "exampleEn": "Fault lines and tremors are mapped by researchers in Seismology.",
    "examplePt": "Falhas geológicas e tremores são mapeados por pesquisadores em sismologia.",
    "gapWord": "Seismology",
    "question": "Como se diz 'Sismologia' em inglês?",
    "hint": "Estudo científico de terremotos e propagação de ondas sísmicas.",
    "rationale": "'Seismology' (saɪzˈmɑː.lə.dʒi): Estudo científico de terremotos e propagação de ondas sísmicas.",
    "options": [
      {
        "id": "A",
        "text": "Seismology",
        "isCorrect": true,
        "rationale": "'Seismology' é a tradução correta para 'Sismologia'."
      },
      {
        "id": "B",
        "text": "MICROBIOLOGYicrobiology",
        "isCorrect": false,
        "rationale": "'MICROBIOLOGYicrobiology' significa 'Microbiologia', não 'Sismologia'."
      },
      {
        "id": "C",
        "text": "BIOTECHNOLOGYiotechnology",
        "isCorrect": false,
        "rationale": "'BIOTECHNOLOGYiotechnology' significa 'Biotecnologia', não 'Sismologia'."
      },
      {
        "id": "D",
        "text": "STRATOSPHEREtratosphere",
        "isCorrect": false,
        "rationale": "'STRATOSPHEREtratosphere' significa 'Estratopausa / Estratosfera', não 'Sismologia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-46",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Meteorology",
    "wordPt": "Meteorologia",
    "phonetic": "ˌmiː.ti.əˈrɑː.lə.dʒi",
    "sentence": "Doppler radar is a fundamental diagnostic tool in _________.",
    "sentencePt": "O radar Doppler é uma ferramenta de diagnóstico fundamental na meteorologia.",
    "exampleEn": "Doppler radar is a fundamental diagnostic tool in Meteorology.",
    "examplePt": "O radar Doppler é uma ferramenta de diagnóstico fundamental na meteorologia.",
    "gapWord": "Meteorology",
    "question": "Como se diz 'Meteorologia' em inglês?",
    "hint": "Ciência que estuda os fenômenos atmosféricos e a previsão do tempo.",
    "rationale": "'Meteorology' (ˌmiː.ti.əˈrɑː.lə.dʒi): Ciência que estuda os fenômenos atmosféricos e a previsão do tempo.",
    "options": [
      {
        "id": "A",
        "text": "NEUROSCIENCEeuroscience",
        "isCorrect": false,
        "rationale": "'NEUROSCIENCEeuroscience' significa 'Neurociência', não 'Meteorologia'."
      },
      {
        "id": "B",
        "text": "Meteorology",
        "isCorrect": true,
        "rationale": "'Meteorology' é a tradução correta para 'Meteorologia'."
      },
      {
        "id": "C",
        "text": "ELECTROMOTIVElectromotive",
        "isCorrect": false,
        "rationale": "'ELECTROMOTIVElectromotive' significa 'Eletromotriz', não 'Meteorologia'."
      },
      {
        "id": "D",
        "text": "SPECTROSCOPYpectroscopy",
        "isCorrect": false,
        "rationale": "'SPECTROSCOPYpectroscopy' significa 'Espectroscopia', não 'Meteorologia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-47",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Paleontology",
    "wordPt": "Paleontologia",
    "phonetic": "ˌpeɪ.li.ɑːnˈtɑː.lə.dʒi",
    "sentence": "Fossilized dinosaur bones are analyzed in field _________.",
    "sentencePt": "Ossos fossilizados de dinossauros são analisados na paleontologia de campo.",
    "exampleEn": "Fossilized dinosaur bones are analyzed in field Paleontology.",
    "examplePt": "Ossos fossilizados de dinossauros são analisados na paleontologia de campo.",
    "gapWord": "Paleontology",
    "question": "Como se diz 'Paleontologia' em inglês?",
    "hint": "Ciência que estuda os fósseis para reconstituir formas de vida pretéritas.",
    "rationale": "'Paleontology' (ˌpeɪ.li.ɑːnˈtɑː.lə.dʒi): Ciência que estuda os fósseis para reconstituir formas de vida pretéritas.",
    "options": [
      {
        "id": "A",
        "text": "TELEMETRYelemetry",
        "isCorrect": false,
        "rationale": "'TELEMETRYelemetry' significa 'Telemetria', não 'Paleontologia'."
      },
      {
        "id": "B",
        "text": "MICROBIOMEicrobiome",
        "isCorrect": false,
        "rationale": "'MICROBIOMEicrobiome' significa 'Microbioma', não 'Paleontologia'."
      },
      {
        "id": "C",
        "text": "Paleontology",
        "isCorrect": true,
        "rationale": "'Paleontology' é a tradução correta para 'Paleontologia'."
      },
      {
        "id": "D",
        "text": "METABOLISMetabolism",
        "isCorrect": false,
        "rationale": "'METABOLISMetabolism' significa 'Metabolismo', não 'Paleontologia'."
      }
    ]
  },
  {
    "id": "sql-sci-d-48",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Evolutionary",
    "wordPt": "Evolucionário / Evolutivo",
    "phonetic": "ˌɛv.əˈluː.ʃəˌnɛr.i",
    "sentence": "Natural selection is the cornerstone of _________ biology.",
    "sentencePt": "A seleção natural é a pedra fundamental da biologia evolucionária.",
    "exampleEn": "Natural selection is the cornerstone of Evolutionary biology.",
    "examplePt": "A seleção natural é a pedra fundamental da biologia evolucionária.",
    "gapWord": "Evolutionary",
    "question": "Como se diz 'Evolucionário / Evolutivo' em inglês?",
    "hint": "Relativo à evolução biológica contínua das espécies ao longo das eras.",
    "rationale": "'Evolutionary' (ˌɛv.əˈluː.ʃəˌnɛr.i): Relativo à evolução biológica contínua das espécies ao longo das eras.",
    "options": [
      {
        "id": "A",
        "text": "RADIOACTIVITYadioactivity",
        "isCorrect": false,
        "rationale": "'RADIOACTIVITYadioactivity' significa 'Radioatividade', não 'Evolucionário / Evolutivo'."
      },
      {
        "id": "B",
        "text": "CRYSTALLOGRAPHYrystallography",
        "isCorrect": false,
        "rationale": "'CRYSTALLOGRAPHYrystallography' significa 'Cristalografia', não 'Evolucionário / Evolutivo'."
      },
      {
        "id": "C",
        "text": "GEOPHYSICSeophysics",
        "isCorrect": false,
        "rationale": "'GEOPHYSICSeophysics' significa 'Geofísica', não 'Evolucionário / Evolutivo'."
      },
      {
        "id": "D",
        "text": "Evolutionary",
        "isCorrect": true,
        "rationale": "'Evolutionary' é a tradução correta para 'Evolucionário / Evolutivo'."
      }
    ]
  },
  {
    "id": "sql-sci-d-49",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Biodegradable",
    "wordPt": "Biodegradável",
    "phonetic": "ˌbaɪ.oʊ.dɪˈɡreɪ.də.bəl",
    "sentence": "Eco-friendly packaging is certified as completely _________.",
    "sentencePt": "Embalagens ecológicas são certificadas como completamente biodegradáveis.",
    "exampleEn": "Eco-friendly packaging is certified as completely Biodegradable.",
    "examplePt": "Embalagens ecológicas são certificadas como completamente biodegradáveis.",
    "gapWord": "Biodegradable",
    "question": "Como se diz 'Biodegradável' em inglês?",
    "hint": "Capaz de ser decomposto naturalmente por microrganismos vivos.",
    "rationale": "'Biodegradable' (ˌbaɪ.oʊ.dɪˈɡreɪ.də.bəl): Capaz de ser decomposto naturalmente por microrganismos vivos.",
    "options": [
      {
        "id": "A",
        "text": "Biodegradable",
        "isCorrect": true,
        "rationale": "'Biodegradable' é a tradução correta para 'Biodegradável'."
      },
      {
        "id": "B",
        "text": "BIODIVERSITYiodiversity",
        "isCorrect": false,
        "rationale": "'BIODIVERSITYiodiversity' significa 'Biodiversidade', não 'Biodegradável'."
      },
      {
        "id": "C",
        "text": "BIOCHEMISTRYiochemistry",
        "isCorrect": false,
        "rationale": "'BIOCHEMISTRYiochemistry' significa 'Bioquímica', não 'Biodegradável'."
      },
      {
        "id": "D",
        "text": "SUPERCONDUCTIVITYuperconductivity",
        "isCorrect": false,
        "rationale": "'SUPERCONDUCTIVITYuperconductivity' significa 'Supercondutividade', não 'Biodegradável'."
      }
    ]
  },
  {
    "id": "sql-sci-d-50",
    "topic": "ciencias",
    "difficulty": "dificil",
    "wordEn": "Telemetry",
    "wordPt": "Telemetria",
    "phonetic": "təˈlɛm.ə.tri",
    "sentence": "Satellites transmit real-time orbital data through digital _________.",
    "sentencePt": "Satélites transmitem dados orbitais em tempo real através de telemetria digital.",
    "exampleEn": "Satellites transmit real-time orbital data through digital Telemetry.",
    "examplePt": "Satélites transmitem dados orbitais em tempo real através de telemetria digital.",
    "gapWord": "Telemetry",
    "question": "Como se diz 'Telemetria' em inglês?",
    "hint": "Medição remota e transmissão automática de dados à distância.",
    "rationale": "'Telemetry' (təˈlɛm.ə.tri): Medição remota e transmissão automática de dados à distância.",
    "options": [
      {
        "id": "A",
        "text": "CHROMATOGRAPHYhromatography",
        "isCorrect": false,
        "rationale": "'CHROMATOGRAPHYhromatography' significa 'Cromatografia', não 'Telemetria'."
      },
      {
        "id": "B",
        "text": "Telemetry",
        "isCorrect": true,
        "rationale": "'Telemetry' é a tradução correta para 'Telemetria'."
      },
      {
        "id": "C",
        "text": "BIOTECHNOLOGYiotechnology",
        "isCorrect": false,
        "rationale": "'BIOTECHNOLOGYiotechnology' significa 'Biotecnologia', não 'Telemetria'."
      },
      {
        "id": "D",
        "text": "ELECTROMAGNETISMlectromagnetism",
        "isCorrect": false,
        "rationale": "'ELECTROMAGNETISMlectromagnetism' significa 'Eletromagnetismo', não 'Telemetria'."
      }
    ]
  },
  {
    "id": "sql-geo-f-01",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Line",
    "wordPt": "Linha",
    "phonetic": "laɪn",
    "sentence": "Draw a straight _________ connecting the two points.",
    "sentencePt": "Desenhe uma linha reta conectando os dois pontos.",
    "exampleEn": "Draw a straight Line connecting the two points.",
    "examplePt": "Desenhe uma linha reta conectando os dois pontos.",
    "gapWord": "Line",
    "question": "Como se diz 'Linha' em inglês?",
    "hint": "Extensão contínua unidimensional sem largura.",
    "rationale": "'Line' (laɪn): Extensão contínua unidimensional sem largura.",
    "options": [
      {
        "id": "A",
        "text": "Line",
        "isCorrect": true,
        "rationale": "'Line' é a tradução correta para 'Linha'."
      },
      {
        "id": "B",
        "text": "BLOCKlock",
        "isCorrect": false,
        "rationale": "'BLOCKlock' significa 'Bloco', não 'Linha'."
      },
      {
        "id": "C",
        "text": "SPACEpace",
        "isCorrect": false,
        "rationale": "'SPACEpace' significa 'Espaço Tridimensional', não 'Linha'."
      },
      {
        "id": "D",
        "text": "PATHath",
        "isCorrect": false,
        "rationale": "'PATHath' significa 'Trajetória / Caminho', não 'Linha'."
      }
    ]
  },
  {
    "id": "sql-geo-f-02",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Dot",
    "wordPt": "Ponto / Pontinho",
    "phonetic": "dɑːt",
    "sentence": "Place a small black _________ at the exact center.",
    "sentencePt": "Coloque um pequeno ponto preto no centro exato.",
    "exampleEn": "Place a small black Dot at the exact center.",
    "examplePt": "Coloque um pequeno ponto preto no centro exato.",
    "gapWord": "Dot",
    "question": "Como se diz 'Ponto / Pontinho' em inglês?",
    "hint": "Marca pontual mínima ou sinal gráfico circular.",
    "rationale": "'Dot' (dɑːt): Marca pontual mínima ou sinal gráfico circular.",
    "options": [
      {
        "id": "A",
        "text": "ROWow",
        "isCorrect": false,
        "rationale": "'ROWow' significa 'Linha / Fileira', não 'Ponto / Pontinho'."
      },
      {
        "id": "B",
        "text": "Dot",
        "isCorrect": true,
        "rationale": "'Dot' é a tradução correta para 'Ponto / Pontinho'."
      },
      {
        "id": "C",
        "text": "SPOTpot",
        "isCorrect": false,
        "rationale": "'SPOTpot' significa 'Ponto / Mancha', não 'Ponto / Pontinho'."
      },
      {
        "id": "D",
        "text": "SIZEize",
        "isCorrect": false,
        "rationale": "'SIZEize' significa 'Tamanho / Dimensão', não 'Ponto / Pontinho'."
      }
    ]
  },
  {
    "id": "sql-geo-f-03",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Side",
    "wordPt": "Lado",
    "phonetic": "saɪd",
    "sentence": "A square has four equal _________ lengths.",
    "sentencePt": "Um quadrado tem quatro lados de comprimentos iguais.",
    "exampleEn": "A square has four equal Side lengths.",
    "examplePt": "Um quadrado tem quatro lados de comprimentos iguais.",
    "gapWord": "Side",
    "question": "Como se diz 'Lado' em inglês?",
    "hint": "Segmento que delimita o polígono.",
    "rationale": "'Side' (saɪd): Segmento que delimita o polígono.",
    "options": [
      {
        "id": "A",
        "text": "ARCrc",
        "isCorrect": false,
        "rationale": "'ARCrc' significa 'Arco', não 'Lado'."
      },
      {
        "id": "B",
        "text": "CORNERorner",
        "isCorrect": false,
        "rationale": "'CORNERorner' significa 'Canto / Esquina', não 'Lado'."
      },
      {
        "id": "C",
        "text": "Side",
        "isCorrect": true,
        "rationale": "'Side' é a tradução correta para 'Lado'."
      },
      {
        "id": "D",
        "text": "FRAMErame",
        "isCorrect": false,
        "rationale": "'FRAMErame' significa 'Moldura / Estrutura', não 'Lado'."
      }
    ]
  },
  {
    "id": "sql-geo-f-04",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Point",
    "wordPt": "Ponto Geométrico",
    "phonetic": "pɔɪnt",
    "sentence": "A _________ has position in space but no dimension.",
    "sentencePt": "Um ponto tem posição no espaço mas nenhuma dimensão.",
    "exampleEn": "A Point has position in space but no dimension.",
    "examplePt": "Um ponto tem posição no espaço mas nenhuma dimensão.",
    "gapWord": "Point",
    "question": "Como se diz 'Ponto Geométrico' em inglês?",
    "hint": "Elemento geométrico adimensional primitivo.",
    "rationale": "'Point' (pɔɪnt): Elemento geométrico adimensional primitivo.",
    "options": [
      {
        "id": "A",
        "text": "BACKack",
        "isCorrect": false,
        "rationale": "'BACKack' significa 'Trás / Face Posterior', não 'Ponto Geométrico'."
      },
      {
        "id": "B",
        "text": "CURVEurve",
        "isCorrect": false,
        "rationale": "'CURVEurve' significa 'Curva', não 'Ponto Geométrico'."
      },
      {
        "id": "C",
        "text": "BOXox",
        "isCorrect": false,
        "rationale": "'BOXox' significa 'Caixa / Bloco', não 'Ponto Geométrico'."
      },
      {
        "id": "D",
        "text": "Point",
        "isCorrect": true,
        "rationale": "'Point' é a tradução correta para 'Ponto Geométrico'."
      }
    ]
  },
  {
    "id": "sql-geo-f-05",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Ring",
    "wordPt": "Anel / Aro",
    "phonetic": "rɪŋ",
    "sentence": "The circular metal _________ slipped over the pole.",
    "sentencePt": "O anel metálico circular escorregou sobre o poste.",
    "exampleEn": "The circular metal Ring slipped over the pole.",
    "examplePt": "O anel metálico circular escorregou sobre o poste.",
    "gapWord": "Ring",
    "question": "Como se diz 'Anel / Aro' em inglês?",
    "hint": "Figura ou objeto circular oco em forma de coroa.",
    "rationale": "'Ring' (rɪŋ): Figura ou objeto circular oco em forma de coroa.",
    "options": [
      {
        "id": "A",
        "text": "Ring",
        "isCorrect": true,
        "rationale": "'Ring' é a tradução correta para 'Anel / Aro'."
      },
      {
        "id": "B",
        "text": "BASEase",
        "isCorrect": false,
        "rationale": "'BASEase' significa 'Base', não 'Anel / Aro'."
      },
      {
        "id": "C",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela Geométrica', não 'Anel / Aro'."
      },
      {
        "id": "D",
        "text": "CORNERorner",
        "isCorrect": false,
        "rationale": "'CORNERorner' significa 'Canto / Esquina', não 'Anel / Aro'."
      }
    ]
  },
  {
    "id": "sql-geo-f-06",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Form",
    "wordPt": "Forma / Formato",
    "phonetic": "fɔːrm",
    "sentence": "The sculptor created a dynamic abstract _________.",
    "sentencePt": "O escultor criou uma forma abstrata dinâmica.",
    "exampleEn": "The sculptor created a dynamic abstract Form.",
    "examplePt": "O escultor criou uma forma abstrata dinâmica.",
    "gapWord": "Form",
    "question": "Como se diz 'Forma / Formato' em inglês?",
    "hint": "Configuração externa visível de um corpo.",
    "rationale": "'Form' (fɔːrm): Configuração externa visível de um corpo.",
    "options": [
      {
        "id": "A",
        "text": "ROWow",
        "isCorrect": false,
        "rationale": "'ROWow' significa 'Linha / Fileira', não 'Forma / Formato'."
      },
      {
        "id": "B",
        "text": "Form",
        "isCorrect": true,
        "rationale": "'Form' é a tradução correta para 'Forma / Formato'."
      },
      {
        "id": "C",
        "text": "CROSSross",
        "isCorrect": false,
        "rationale": "'CROSSross' significa 'Cruz', não 'Forma / Formato'."
      },
      {
        "id": "D",
        "text": "TOPop",
        "isCorrect": false,
        "rationale": "'TOPop' significa 'Topo / Superior', não 'Forma / Formato'."
      }
    ]
  },
  {
    "id": "sql-geo-f-07",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Shape",
    "wordPt": "Forma Geométrica",
    "phonetic": "ʃeɪp",
    "sentence": "Identify each basic geometric _________ on the board.",
    "sentencePt": "Identifique cada forma geométrica básica no quadro.",
    "exampleEn": "Identify each basic geometric Shape on the board.",
    "examplePt": "Identifique cada forma geométrica básica no quadro.",
    "gapWord": "Shape",
    "question": "Como se diz 'Forma Geométrica' em inglês?",
    "hint": "Contorno ou perfil visual característico de uma figura.",
    "rationale": "'Shape' (ʃeɪp): Contorno ou perfil visual característico de uma figura.",
    "options": [
      {
        "id": "A",
        "text": "EDGEdge",
        "isCorrect": false,
        "rationale": "'EDGEdge' significa 'Aresta / Borda', não 'Forma Geométrica'."
      },
      {
        "id": "B",
        "text": "TOPop",
        "isCorrect": false,
        "rationale": "'TOPop' significa 'Topo / Superior', não 'Forma Geométrica'."
      },
      {
        "id": "C",
        "text": "Shape",
        "isCorrect": true,
        "rationale": "'Shape' é a tradução correta para 'Forma Geométrica'."
      },
      {
        "id": "D",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela Geométrica', não 'Forma Geométrica'."
      }
    ]
  },
  {
    "id": "sql-geo-f-08",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Box",
    "wordPt": "Caixa / Bloco",
    "phonetic": "bɑːks",
    "sentence": "Pack the books neatly inside the cardboard _________.",
    "sentencePt": "Embale os livros cuidadosamente dentro da caixa de papelão.",
    "exampleEn": "Pack the books neatly inside the cardboard Box.",
    "examplePt": "Embale os livros cuidadosamente dentro da caixa de papelão.",
    "gapWord": "Box",
    "question": "Como se diz 'Caixa / Bloco' em inglês?",
    "hint": "Recipiente ou sólido retangular de seis faces.",
    "rationale": "'Box' (bɑːks): Recipiente ou sólido retangular de seis faces.",
    "options": [
      {
        "id": "A",
        "text": "CENTERenter",
        "isCorrect": false,
        "rationale": "'CENTERenter' significa 'Centro', não 'Caixa / Bloco'."
      },
      {
        "id": "B",
        "text": "STRIPtrip",
        "isCorrect": false,
        "rationale": "'STRIPtrip' significa 'Tira / Faixa', não 'Caixa / Bloco'."
      },
      {
        "id": "C",
        "text": "BACKack",
        "isCorrect": false,
        "rationale": "'BACKack' significa 'Trás / Face Posterior', não 'Caixa / Bloco'."
      },
      {
        "id": "D",
        "text": "Box",
        "isCorrect": true,
        "rationale": "'Box' é a tradução correta para 'Caixa / Bloco'."
      }
    ]
  },
  {
    "id": "sql-geo-f-09",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Edge",
    "wordPt": "Aresta / Borda",
    "phonetic": "ɛdʒ",
    "sentence": "Be careful not to cut your finger on the sharp _________.",
    "sentencePt": "Tenha cuidado para não cortar o dedo na aresta afiada.",
    "exampleEn": "Be careful not to cut your finger on the sharp Edge.",
    "examplePt": "Tenha cuidado para não cortar o dedo na aresta afiada.",
    "gapWord": "Edge",
    "question": "Como se diz 'Aresta / Borda' em inglês?",
    "hint": "Linha de interseção entre duas superfícies adjacentes.",
    "rationale": "'Edge' (ɛdʒ): Linha de interseção entre duas superfícies adjacentes.",
    "options": [
      {
        "id": "A",
        "text": "Edge",
        "isCorrect": true,
        "rationale": "'Edge' é a tradução correta para 'Aresta / Borda'."
      },
      {
        "id": "B",
        "text": "FLATlat",
        "isCorrect": false,
        "rationale": "'FLATlat' significa 'Plano / Raso', não 'Aresta / Borda'."
      },
      {
        "id": "C",
        "text": "LEFTeft",
        "isCorrect": false,
        "rationale": "'LEFTeft' significa 'Esquerda', não 'Aresta / Borda'."
      },
      {
        "id": "D",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela Geométrica', não 'Aresta / Borda'."
      }
    ]
  },
  {
    "id": "sql-geo-f-10",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Cross",
    "wordPt": "Cruz",
    "phonetic": "krɔːs",
    "sentence": "The medical symbol features a bright red _________.",
    "sentencePt": "O símbolo médico apresenta uma cruz vermelha brilhante.",
    "exampleEn": "The medical symbol features a bright red Cross.",
    "examplePt": "O símbolo médico apresenta uma cruz vermelha brilhante.",
    "gapWord": "Cross",
    "question": "Como se diz 'Cruz' em inglês?",
    "hint": "Figura formada por duas linhas retas que se interceptam.",
    "rationale": "'Cross' (krɔːs): Figura formada por duas linhas retas que se interceptam.",
    "options": [
      {
        "id": "A",
        "text": "CORNERorner",
        "isCorrect": false,
        "rationale": "'CORNERorner' significa 'Canto / Esquina', não 'Cruz'."
      },
      {
        "id": "B",
        "text": "Cross",
        "isCorrect": true,
        "rationale": "'Cross' é a tradução correta para 'Cruz'."
      },
      {
        "id": "C",
        "text": "SPACEpace",
        "isCorrect": false,
        "rationale": "'SPACEpace' significa 'Espaço Tridimensional', não 'Cruz'."
      },
      {
        "id": "D",
        "text": "DISCisc",
        "isCorrect": false,
        "rationale": "'DISCisc' significa 'Disco', não 'Cruz'."
      }
    ]
  },
  {
    "id": "sql-geo-f-11",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Star",
    "wordPt": "Estrela Geométrica",
    "phonetic": "stɑːr",
    "sentence": "The geometric _________ has five pointed vertices.",
    "sentencePt": "A estrela geométrica possui cinco vértices pontiagudos.",
    "exampleEn": "The geometric Star has five pointed vertices.",
    "examplePt": "A estrela geométrica possui cinco vértices pontiagudos.",
    "gapWord": "Star",
    "question": "Como se diz 'Estrela Geométrica' em inglês?",
    "hint": "Polígono estrelado formado por pontas radiais.",
    "rationale": "'Star' (stɑːr): Polígono estrelado formado por pontas radiais.",
    "options": [
      {
        "id": "A",
        "text": "GRIDrid",
        "isCorrect": false,
        "rationale": "'GRIDrid' significa 'Grade / Gradeado', não 'Estrela Geométrica'."
      },
      {
        "id": "B",
        "text": "BLOCKlock",
        "isCorrect": false,
        "rationale": "'BLOCKlock' significa 'Bloco', não 'Estrela Geométrica'."
      },
      {
        "id": "C",
        "text": "Star",
        "isCorrect": true,
        "rationale": "'Star' é a tradução correta para 'Estrela Geométrica'."
      },
      {
        "id": "D",
        "text": "CUBEube",
        "isCorrect": false,
        "rationale": "'CUBEube' significa 'Cubo', não 'Estrela Geométrica'."
      }
    ]
  },
  {
    "id": "sql-geo-f-12",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Disc",
    "wordPt": "Disco",
    "phonetic": "dɪsk",
    "sentence": "A circular flat _________ spun rapidly on the turntable.",
    "sentencePt": "Um disco plano circular girava rapidamente no toca-discos.",
    "exampleEn": "A circular flat Disc spun rapidly on the turntable.",
    "examplePt": "Um disco plano circular girava rapidamente no toca-discos.",
    "gapWord": "Disc",
    "question": "Como se diz 'Disco' em inglês?",
    "hint": "Superfície circular plana delimitada por uma circunferência.",
    "rationale": "'Disc' (dɪsk): Superfície circular plana delimitada por uma circunferência.",
    "options": [
      {
        "id": "A",
        "text": "SPOTpot",
        "isCorrect": false,
        "rationale": "'SPOTpot' significa 'Ponto / Mancha', não 'Disco'."
      },
      {
        "id": "B",
        "text": "BOXox",
        "isCorrect": false,
        "rationale": "'BOXox' significa 'Caixa / Bloco', não 'Disco'."
      },
      {
        "id": "C",
        "text": "LINEine",
        "isCorrect": false,
        "rationale": "'LINEine' significa 'Linha', não 'Disco'."
      },
      {
        "id": "D",
        "text": "Disc",
        "isCorrect": true,
        "rationale": "'Disc' é a tradução correta para 'Disco'."
      }
    ]
  },
  {
    "id": "sql-geo-f-13",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Grid",
    "wordPt": "Grade / Gradeado",
    "phonetic": "ɡrɪd",
    "sentence": "Plot the coordinates on the Cartesian _________.",
    "sentencePt": "Plote as coordenadas na grade cartesiana.",
    "exampleEn": "Plot the coordinates on the Cartesian Grid.",
    "examplePt": "Plote as coordenadas na grade cartesiana.",
    "gapWord": "Grid",
    "question": "Como se diz 'Grade / Gradeado' em inglês?",
    "hint": "Conjunto de linhas paralelas horizontais e verticais cruzadas.",
    "rationale": "'Grid' (ɡrɪd): Conjunto de linhas paralelas horizontais e verticais cruzadas.",
    "options": [
      {
        "id": "A",
        "text": "Grid",
        "isCorrect": true,
        "rationale": "'Grid' é a tradução correta para 'Grade / Gradeado'."
      },
      {
        "id": "B",
        "text": "BACKack",
        "isCorrect": false,
        "rationale": "'BACKack' significa 'Trás / Face Posterior', não 'Grade / Gradeado'."
      },
      {
        "id": "C",
        "text": "SHAPEhape",
        "isCorrect": false,
        "rationale": "'SHAPEhape' significa 'Forma Geométrica', não 'Grade / Gradeado'."
      },
      {
        "id": "D",
        "text": "MESHesh",
        "isCorrect": false,
        "rationale": "'MESHesh' significa 'Malha / Trama', não 'Grade / Gradeado'."
      }
    ]
  },
  {
    "id": "sql-geo-f-14",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Loop",
    "wordPt": "Laço / Elo",
    "phonetic": "luːp",
    "sentence": "The roller coaster made a complete vertical _________.",
    "sentencePt": "A montanha-russa deu um laço vertical completo.",
    "exampleEn": "The roller coaster made a complete vertical Loop.",
    "examplePt": "A montanha-russa deu um laço vertical completo.",
    "gapWord": "Loop",
    "question": "Como se diz 'Laço / Elo' em inglês?",
    "hint": "Curva fechada que se dobra e retorna ao ponto.",
    "rationale": "'Loop' (luːp): Curva fechada que se dobra e retorna ao ponto.",
    "options": [
      {
        "id": "A",
        "text": "MESHesh",
        "isCorrect": false,
        "rationale": "'MESHesh' significa 'Malha / Trama', não 'Laço / Elo'."
      },
      {
        "id": "B",
        "text": "Loop",
        "isCorrect": true,
        "rationale": "'Loop' é a tradução correta para 'Laço / Elo'."
      },
      {
        "id": "C",
        "text": "EDGEdge",
        "isCorrect": false,
        "rationale": "'EDGEdge' significa 'Aresta / Borda', não 'Laço / Elo'."
      },
      {
        "id": "D",
        "text": "TOPop",
        "isCorrect": false,
        "rationale": "'TOPop' significa 'Topo / Superior', não 'Laço / Elo'."
      }
    ]
  },
  {
    "id": "sql-geo-f-15",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Path",
    "wordPt": "Trajetória / Caminho",
    "phonetic": "pæθ",
    "sentence": "The light beam follows a direct linear _________.",
    "sentencePt": "O feixe de luz segue uma trajetória linear direta.",
    "exampleEn": "The light beam follows a direct linear Path.",
    "examplePt": "O feixe de luz segue uma trajetória linear direta.",
    "gapWord": "Path",
    "question": "Como se diz 'Trajetória / Caminho' em inglês?",
    "hint": "Linha contínua descrita por um corpo em movimento.",
    "rationale": "'Path' (pæθ): Linha contínua descrita por um corpo em movimento.",
    "options": [
      {
        "id": "A",
        "text": "CROSSross",
        "isCorrect": false,
        "rationale": "'CROSSross' significa 'Cruz', não 'Trajetória / Caminho'."
      },
      {
        "id": "B",
        "text": "SQUAREquare",
        "isCorrect": false,
        "rationale": "'SQUAREquare' significa 'Quadrado', não 'Trajetória / Caminho'."
      },
      {
        "id": "C",
        "text": "Path",
        "isCorrect": true,
        "rationale": "'Path' é a tradução correta para 'Trajetória / Caminho'."
      },
      {
        "id": "D",
        "text": "LEFTeft",
        "isCorrect": false,
        "rationale": "'LEFTeft' significa 'Esquerda', não 'Trajetória / Caminho'."
      }
    ]
  },
  {
    "id": "sql-geo-f-16",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Size",
    "wordPt": "Tamanho / Dimensão",
    "phonetic": "saɪz",
    "sentence": "Compare the relative _________ of both triangles.",
    "sentencePt": "Compare o tamanho relativo de ambos os triângulos.",
    "exampleEn": "Compare the relative Size of both triangles.",
    "examplePt": "Compare o tamanho relativo de ambos os triângulos.",
    "gapWord": "Size",
    "question": "Como se diz 'Tamanho / Dimensão' em inglês?",
    "hint": "Grandeza física ou escala métrica de um objeto.",
    "rationale": "'Size' (saɪz): Grandeza física ou escala métrica de um objeto.",
    "options": [
      {
        "id": "A",
        "text": "LOOPoop",
        "isCorrect": false,
        "rationale": "'LOOPoop' significa 'Laço / Elo', não 'Tamanho / Dimensão'."
      },
      {
        "id": "B",
        "text": "PIPEipe",
        "isCorrect": false,
        "rationale": "'PIPEipe' significa 'Tubo / Cilindro Oco', não 'Tamanho / Dimensão'."
      },
      {
        "id": "C",
        "text": "EDGEdge",
        "isCorrect": false,
        "rationale": "'EDGEdge' significa 'Aresta / Borda', não 'Tamanho / Dimensão'."
      },
      {
        "id": "D",
        "text": "Size",
        "isCorrect": true,
        "rationale": "'Size' é a tradução correta para 'Tamanho / Dimensão'."
      }
    ]
  },
  {
    "id": "sql-geo-f-17",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Row",
    "wordPt": "Linha / Fileira",
    "phonetic": "roʊ",
    "sentence": "Align the colored tiles in a straight horizontal _________.",
    "sentencePt": "Alinhe os azulejos coloridos em uma fileira horizontal reta.",
    "exampleEn": "Align the colored tiles in a straight horizontal Row.",
    "examplePt": "Alinhe os azulejos coloridos em uma fileira horizontal reta.",
    "gapWord": "Row",
    "question": "Como se diz 'Linha / Fileira' em inglês?",
    "hint": "Disposição de elementos alinhados horizontalmente.",
    "rationale": "'Row' (roʊ): Disposição de elementos alinhados horizontalmente.",
    "options": [
      {
        "id": "A",
        "text": "Row",
        "isCorrect": true,
        "rationale": "'Row' é a tradução correta para 'Linha / Fileira'."
      },
      {
        "id": "B",
        "text": "PIPEipe",
        "isCorrect": false,
        "rationale": "'PIPEipe' significa 'Tubo / Cilindro Oco', não 'Linha / Fileira'."
      },
      {
        "id": "C",
        "text": "BOXox",
        "isCorrect": false,
        "rationale": "'BOXox' significa 'Caixa / Bloco', não 'Linha / Fileira'."
      },
      {
        "id": "D",
        "text": "BALLall",
        "isCorrect": false,
        "rationale": "'BALLall' significa 'Esfera / Bola', não 'Linha / Fileira'."
      }
    ]
  },
  {
    "id": "sql-geo-f-18",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Node",
    "wordPt": "Nó / Ponto de Interseção",
    "phonetic": "noʊd",
    "sentence": "Each junction where lines meet is called a _________.",
    "sentencePt": "Cada junção onde as linhas se encontram é chamada de nó.",
    "exampleEn": "Each junction where lines meet is called a Node.",
    "examplePt": "Cada junção onde as linhas se encontram é chamada de nó.",
    "gapWord": "Node",
    "question": "Como se diz 'Nó / Ponto de Interseção' em inglês?",
    "hint": "Ponto de bifurcação, ligação ou cruzamento em grafos.",
    "rationale": "'Node' (noʊd): Ponto de bifurcação, ligação ou cruzamento em grafos.",
    "options": [
      {
        "id": "A",
        "text": "BOXox",
        "isCorrect": false,
        "rationale": "'BOXox' significa 'Caixa / Bloco', não 'Nó / Ponto de Interseção'."
      },
      {
        "id": "B",
        "text": "Node",
        "isCorrect": true,
        "rationale": "'Node' é a tradução correta para 'Nó / Ponto de Interseção'."
      },
      {
        "id": "C",
        "text": "FRAMErame",
        "isCorrect": false,
        "rationale": "'FRAMErame' significa 'Moldura / Estrutura', não 'Nó / Ponto de Interseção'."
      },
      {
        "id": "D",
        "text": "ANGLEngle",
        "isCorrect": false,
        "rationale": "'ANGLEngle' significa 'Ângulo', não 'Nó / Ponto de Interseção'."
      }
    ]
  },
  {
    "id": "sql-geo-f-19",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Arc",
    "wordPt": "Arco",
    "phonetic": "ɑːrk",
    "sentence": "An _________ is a curved portion of a circle's perimeter.",
    "sentencePt": "Um arco é uma porção curva do perímetro de um círculo.",
    "exampleEn": "An Arc is a curved portion of a circle's perimeter.",
    "examplePt": "Um arco é uma porção curva do perímetro de um círculo.",
    "gapWord": "Arc",
    "question": "Como se diz 'Arco' em inglês?",
    "hint": "Segmento curvo contínuo de uma circunferência.",
    "rationale": "'Arc' (ɑːrk): Segmento curvo contínuo de uma circunferência.",
    "options": [
      {
        "id": "A",
        "text": "ROWow",
        "isCorrect": false,
        "rationale": "'ROWow' significa 'Linha / Fileira', não 'Arco'."
      },
      {
        "id": "B",
        "text": "PEAKeak",
        "isCorrect": false,
        "rationale": "'PEAKeak' significa 'Pico / Cume', não 'Arco'."
      },
      {
        "id": "C",
        "text": "Arc",
        "isCorrect": true,
        "rationale": "'Arc' é a tradução correta para 'Arco'."
      },
      {
        "id": "D",
        "text": "MESHesh",
        "isCorrect": false,
        "rationale": "'MESHesh' significa 'Malha / Trama', não 'Arco'."
      }
    ]
  },
  {
    "id": "sql-geo-f-20",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Mark",
    "wordPt": "Marcação",
    "phonetic": "mɑːrk",
    "sentence": "Make a pencil _________ at the ten-centimeter line.",
    "sentencePt": "Faça uma marcação a lápis na linha de dez centímetros.",
    "exampleEn": "Make a pencil Mark at the ten-centimeter line.",
    "examplePt": "Faça uma marcação a lápis na linha de dez centímetros.",
    "gapWord": "Mark",
    "question": "Como se diz 'Marcação' em inglês?",
    "hint": "Sinal gráfico pontual ou traço indicativo.",
    "rationale": "'Mark' (mɑːrk): Sinal gráfico pontual ou traço indicativo.",
    "options": [
      {
        "id": "A",
        "text": "HOLEole",
        "isCorrect": false,
        "rationale": "'HOLEole' significa 'Furo / Orifício', não 'Marcação'."
      },
      {
        "id": "B",
        "text": "FRAMErame",
        "isCorrect": false,
        "rationale": "'FRAMErame' significa 'Moldura / Estrutura', não 'Marcação'."
      },
      {
        "id": "C",
        "text": "FORMorm",
        "isCorrect": false,
        "rationale": "'FORMorm' significa 'Forma / Formato', não 'Marcação'."
      },
      {
        "id": "D",
        "text": "Mark",
        "isCorrect": true,
        "rationale": "'Mark' é a tradução correta para 'Marcação'."
      }
    ]
  },
  {
    "id": "sql-geo-f-21",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Band",
    "wordPt": "Faixa / Fita",
    "phonetic": "bænd",
    "sentence": "Wrap the elastic rubber _________ around the cylinders.",
    "sentencePt": "Passe a faixa elástica de borracha ao redor dos cilindros.",
    "exampleEn": "Wrap the elastic rubber Band around the cylinders.",
    "examplePt": "Passe a faixa elástica de borracha ao redor dos cilindros.",
    "gapWord": "Band",
    "question": "Como se diz 'Faixa / Fita' em inglês?",
    "hint": "Tira estreita e alongada contínua.",
    "rationale": "'Band' (bænd): Tira estreita e alongada contínua.",
    "options": [
      {
        "id": "A",
        "text": "Band",
        "isCorrect": true,
        "rationale": "'Band' é a tradução correta para 'Faixa / Fita'."
      },
      {
        "id": "B",
        "text": "ANGLEngle",
        "isCorrect": false,
        "rationale": "'ANGLEngle' significa 'Ângulo', não 'Faixa / Fita'."
      },
      {
        "id": "C",
        "text": "TOPop",
        "isCorrect": false,
        "rationale": "'TOPop' significa 'Topo / Superior', não 'Faixa / Fita'."
      },
      {
        "id": "D",
        "text": "SQUAREquare",
        "isCorrect": false,
        "rationale": "'SQUAREquare' significa 'Quadrado', não 'Faixa / Fita'."
      }
    ]
  },
  {
    "id": "sql-geo-f-22",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Mesh",
    "wordPt": "Malha / Trama",
    "phonetic": "mɛʃ",
    "sentence": "A fine wire _________ covered the geometric filter.",
    "sentencePt": "Uma malha de arame fino cobriu o filtro geométrico.",
    "exampleEn": "A fine wire Mesh covered the geometric filter.",
    "examplePt": "Uma malha de arame fino cobriu o filtro geométrico.",
    "gapWord": "Mesh",
    "question": "Como se diz 'Malha / Trama' em inglês?",
    "hint": "Rede de fios ou polígonos entrelaçados.",
    "rationale": "'Mesh' (mɛʃ): Rede de fios ou polígonos entrelaçados.",
    "options": [
      {
        "id": "A",
        "text": "HOLEole",
        "isCorrect": false,
        "rationale": "'HOLEole' significa 'Furo / Orifício', não 'Malha / Trama'."
      },
      {
        "id": "B",
        "text": "Mesh",
        "isCorrect": true,
        "rationale": "'Mesh' é a tradução correta para 'Malha / Trama'."
      },
      {
        "id": "C",
        "text": "PLANElane",
        "isCorrect": false,
        "rationale": "'PLANElane' significa 'Plano Geométrico', não 'Malha / Trama'."
      },
      {
        "id": "D",
        "text": "STRIPtrip",
        "isCorrect": false,
        "rationale": "'STRIPtrip' significa 'Tira / Faixa', não 'Malha / Trama'."
      }
    ]
  },
  {
    "id": "sql-geo-f-23",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Hole",
    "wordPt": "Furo / Orifício",
    "phonetic": "hoʊl",
    "sentence": "The cylinder has a circular _________ drilled through.",
    "sentencePt": "O cilindro possui um furo circular perfurado.",
    "exampleEn": "The cylinder has a circular Hole drilled through.",
    "examplePt": "O cilindro possui um furo circular perfurado.",
    "gapWord": "Hole",
    "question": "Como se diz 'Furo / Orifício' em inglês?",
    "hint": "Abertura vazada ou cavidade interna em uma superfície.",
    "rationale": "'Hole' (hoʊl): Abertura vazada ou cavidade interna em uma superfície.",
    "options": [
      {
        "id": "A",
        "text": "SIZEize",
        "isCorrect": false,
        "rationale": "'SIZEize' significa 'Tamanho / Dimensão', não 'Furo / Orifício'."
      },
      {
        "id": "B",
        "text": "SIDEide",
        "isCorrect": false,
        "rationale": "'SIDEide' significa 'Lado', não 'Furo / Orifício'."
      },
      {
        "id": "C",
        "text": "Hole",
        "isCorrect": true,
        "rationale": "'Hole' é a tradução correta para 'Furo / Orifício'."
      },
      {
        "id": "D",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela Geométrica', não 'Furo / Orifício'."
      }
    ]
  },
  {
    "id": "sql-geo-f-24",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Base",
    "wordPt": "Base",
    "phonetic": "beɪs",
    "sentence": "Calculate the area of the triangular _________.",
    "sentencePt": "Calcule a área da base triangular.",
    "exampleEn": "Calculate the area of the triangular Base.",
    "examplePt": "Calcule a área da base triangular.",
    "gapWord": "Base",
    "question": "Como se diz 'Base' em inglês?",
    "hint": "Face ou lado inferior sobre o qual uma figura se apoia.",
    "rationale": "'Base' (beɪs): Face ou lado inferior sobre o qual uma figura se apoia.",
    "options": [
      {
        "id": "A",
        "text": "LINEine",
        "isCorrect": false,
        "rationale": "'LINEine' significa 'Linha', não 'Base'."
      },
      {
        "id": "B",
        "text": "FLATlat",
        "isCorrect": false,
        "rationale": "'FLATlat' significa 'Plano / Raso', não 'Base'."
      },
      {
        "id": "C",
        "text": "FRONTront",
        "isCorrect": false,
        "rationale": "'FRONTront' significa 'Frente / Face Frontal', não 'Base'."
      },
      {
        "id": "D",
        "text": "Base",
        "isCorrect": true,
        "rationale": "'Base' é a tradução correta para 'Base'."
      }
    ]
  },
  {
    "id": "sql-geo-f-25",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Peak",
    "wordPt": "Pico / Cume",
    "phonetic": "piːk",
    "sentence": "The pyramid tapers upward to a sharp geometric _________.",
    "sentencePt": "A pirâmide afunila para cima até um pico geométrico afiado.",
    "exampleEn": "The pyramid tapers upward to a sharp geometric Peak.",
    "examplePt": "A pirâmide afunila para cima até um pico geométrico afiado.",
    "gapWord": "Peak",
    "question": "Como se diz 'Pico / Cume' em inglês?",
    "hint": "Ponto mais alto de elevação de uma figura.",
    "rationale": "'Peak' (piːk): Ponto mais alto de elevação de uma figura.",
    "options": [
      {
        "id": "A",
        "text": "Peak",
        "isCorrect": true,
        "rationale": "'Peak' é a tradução correta para 'Pico / Cume'."
      },
      {
        "id": "B",
        "text": "APEXpex",
        "isCorrect": false,
        "rationale": "'APEXpex' significa 'Ápice', não 'Pico / Cume'."
      },
      {
        "id": "C",
        "text": "CURVEurve",
        "isCorrect": false,
        "rationale": "'CURVEurve' significa 'Curva', não 'Pico / Cume'."
      },
      {
        "id": "D",
        "text": "POINToint",
        "isCorrect": false,
        "rationale": "'POINToint' significa 'Ponto Geométrico', não 'Pico / Cume'."
      }
    ]
  },
  {
    "id": "sql-geo-f-26",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Apex",
    "wordPt": "Ápice",
    "phonetic": "ˈeɪ.pɛks",
    "sentence": "The cone's _________ is its singular topmost point.",
    "sentencePt": "O ápice do cone é seu ponto singular mais alto.",
    "exampleEn": "The cone's Apex is its singular topmost point.",
    "examplePt": "O ápice do cone é seu ponto singular mais alto.",
    "gapWord": "Apex",
    "question": "Como se diz 'Ápice' em inglês?",
    "hint": "Vértice oposto à base em cones e pirâmides.",
    "rationale": "'Apex' (ˈeɪ.pɛks): Vértice oposto à base em cones e pirâmides.",
    "options": [
      {
        "id": "A",
        "text": "PATHath",
        "isCorrect": false,
        "rationale": "'PATHath' significa 'Trajetória / Caminho', não 'Ápice'."
      },
      {
        "id": "B",
        "text": "Apex",
        "isCorrect": true,
        "rationale": "'Apex' é a tradução correta para 'Ápice'."
      },
      {
        "id": "C",
        "text": "LINEine",
        "isCorrect": false,
        "rationale": "'LINEine' significa 'Linha', não 'Ápice'."
      },
      {
        "id": "D",
        "text": "ARCrc",
        "isCorrect": false,
        "rationale": "'ARCrc' significa 'Arco', não 'Ápice'."
      }
    ]
  },
  {
    "id": "sql-geo-f-27",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Center",
    "wordPt": "Centro",
    "phonetic": "ˈsɛn.tər",
    "sentence": "All points on a circle are equidistant from the _________.",
    "sentencePt": "Todos os pontos de um círculo são equidistantes do centro.",
    "exampleEn": "All points on a circle are equidistant from the Center.",
    "examplePt": "Todos os pontos de um círculo são equidistantes do centro.",
    "gapWord": "Center",
    "question": "Como se diz 'Centro' em inglês?",
    "hint": "Ponto médio equidistante de todas as bordas.",
    "rationale": "'Center' (ˈsɛn.tər): Ponto médio equidistante de todas as bordas.",
    "options": [
      {
        "id": "A",
        "text": "HOLEole",
        "isCorrect": false,
        "rationale": "'HOLEole' significa 'Furo / Orifício', não 'Centro'."
      },
      {
        "id": "B",
        "text": "MARKark",
        "isCorrect": false,
        "rationale": "'MARKark' significa 'Marcação', não 'Centro'."
      },
      {
        "id": "C",
        "text": "Center",
        "isCorrect": true,
        "rationale": "'Center' é a tradução correta para 'Centro'."
      },
      {
        "id": "D",
        "text": "BASEase",
        "isCorrect": false,
        "rationale": "'BASEase' significa 'Base', não 'Centro'."
      }
    ]
  },
  {
    "id": "sql-geo-f-28",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Angle",
    "wordPt": "Ângulo",
    "phonetic": "ˈæŋ.ɡəl",
    "sentence": "A square contains four right _________ of 90 degrees.",
    "sentencePt": "Um quadrado contém quatro ângulos retos de 90 graus.",
    "exampleEn": "A square contains four right Angle of 90 degrees.",
    "examplePt": "Um quadrado contém quatro ângulos retos de 90 graus.",
    "gapWord": "Angle",
    "question": "Como se diz 'Ângulo' em inglês?",
    "hint": "Abertura angular entre duas semi-retas com mesma origem.",
    "rationale": "'Angle' (ˈæŋ.ɡəl): Abertura angular entre duas semi-retas com mesma origem.",
    "options": [
      {
        "id": "A",
        "text": "BASEase",
        "isCorrect": false,
        "rationale": "'BASEase' significa 'Base', não 'Ângulo'."
      },
      {
        "id": "B",
        "text": "BOTTOMottom",
        "isCorrect": false,
        "rationale": "'BOTTOMottom' significa 'Fundo / Base Inferior', não 'Ângulo'."
      },
      {
        "id": "C",
        "text": "MESHesh",
        "isCorrect": false,
        "rationale": "'MESHesh' significa 'Malha / Trama', não 'Ângulo'."
      },
      {
        "id": "D",
        "text": "Angle",
        "isCorrect": true,
        "rationale": "'Angle' é a tradução correta para 'Ângulo'."
      }
    ]
  },
  {
    "id": "sql-geo-f-29",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Corner",
    "wordPt": "Canto / Esquina",
    "phonetic": "ˈkɔːr.nər",
    "sentence": "Place the rectangular desk against the room _________.",
    "sentencePt": "Coloque a mesa retangular contra o canto da sala.",
    "exampleEn": "Place the rectangular desk against the room Corner.",
    "examplePt": "Coloque a mesa retangular contra o canto da sala.",
    "gapWord": "Corner",
    "question": "Como se diz 'Canto / Esquina' em inglês?",
    "hint": "Ponto angular de encontro de duas paredes ou bordas.",
    "rationale": "'Corner' (ˈkɔːr.nər): Ponto angular de encontro de duas paredes ou bordas.",
    "options": [
      {
        "id": "A",
        "text": "Corner",
        "isCorrect": true,
        "rationale": "'Corner' é a tradução correta para 'Canto / Esquina'."
      },
      {
        "id": "B",
        "text": "PIPEipe",
        "isCorrect": false,
        "rationale": "'PIPEipe' significa 'Tubo / Cilindro Oco', não 'Canto / Esquina'."
      },
      {
        "id": "C",
        "text": "STRIPtrip",
        "isCorrect": false,
        "rationale": "'STRIPtrip' significa 'Tira / Faixa', não 'Canto / Esquina'."
      },
      {
        "id": "D",
        "text": "DISCisc",
        "isCorrect": false,
        "rationale": "'DISCisc' significa 'Disco', não 'Canto / Esquina'."
      }
    ]
  },
  {
    "id": "sql-geo-f-30",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Border",
    "wordPt": "Borda / Limite",
    "phonetic": "ˈbɔːr.dər",
    "sentence": "Draw a neat decorative _________ around the poster.",
    "sentencePt": "Desenhe uma borda decorativa caprichada ao redor do pôster.",
    "exampleEn": "Draw a neat decorative Border around the poster.",
    "examplePt": "Desenhe uma borda decorativa caprichada ao redor do pôster.",
    "gapWord": "Border",
    "question": "Como se diz 'Borda / Limite' em inglês?",
    "hint": "Linha perimétrica que delimita um contorno.",
    "rationale": "'Border' (ˈbɔːr.dər): Linha perimétrica que delimita um contorno.",
    "options": [
      {
        "id": "A",
        "text": "SHAPEhape",
        "isCorrect": false,
        "rationale": "'SHAPEhape' significa 'Forma Geométrica', não 'Borda / Limite'."
      },
      {
        "id": "B",
        "text": "Border",
        "isCorrect": true,
        "rationale": "'Border' é a tradução correta para 'Borda / Limite'."
      },
      {
        "id": "C",
        "text": "GRIDrid",
        "isCorrect": false,
        "rationale": "'GRIDrid' significa 'Grade / Gradeado', não 'Borda / Limite'."
      },
      {
        "id": "D",
        "text": "CURVEurve",
        "isCorrect": false,
        "rationale": "'CURVEurve' significa 'Curva', não 'Borda / Limite'."
      }
    ]
  },
  {
    "id": "sql-geo-f-31",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Frame",
    "wordPt": "Moldura / Estrutura",
    "phonetic": "freɪm",
    "sentence": "The wooden _________ supports the canvas painting.",
    "sentencePt": "A moldura de madeira sustenta a pintura em tela.",
    "exampleEn": "The wooden Frame supports the canvas painting.",
    "examplePt": "A moldura de madeira sustenta a pintura em tela.",
    "gapWord": "Frame",
    "question": "Como se diz 'Moldura / Estrutura' em inglês?",
    "hint": "Estrutura rígida perimétrica de contenção.",
    "rationale": "'Frame' (freɪm): Estrutura rígida perimétrica de contenção.",
    "options": [
      {
        "id": "A",
        "text": "HOLEole",
        "isCorrect": false,
        "rationale": "'HOLEole' significa 'Furo / Orifício', não 'Moldura / Estrutura'."
      },
      {
        "id": "B",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela Geométrica', não 'Moldura / Estrutura'."
      },
      {
        "id": "C",
        "text": "Frame",
        "isCorrect": true,
        "rationale": "'Frame' é a tradução correta para 'Moldura / Estrutura'."
      },
      {
        "id": "D",
        "text": "STRIPtrip",
        "isCorrect": false,
        "rationale": "'STRIPtrip' significa 'Tira / Faixa', não 'Moldura / Estrutura'."
      }
    ]
  },
  {
    "id": "sql-geo-f-32",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Curve",
    "wordPt": "Curva",
    "phonetic": "kɜːrv",
    "sentence": "A parabolic _________ bends smoothly without sharp turns.",
    "sentencePt": "Uma curva parabólica inclina-se suavemente sem curvas bruscas.",
    "exampleEn": "A parabolic Curve bends smoothly without sharp turns.",
    "examplePt": "Uma curva parabólica inclina-se suavemente sem curvas bruscas.",
    "gapWord": "Curve",
    "question": "Como se diz 'Curva' em inglês?",
    "hint": "Linha contínua cujos pontos mudam gradualmente de direção.",
    "rationale": "'Curve' (kɜːrv): Linha contínua cujos pontos mudam gradualmente de direção.",
    "options": [
      {
        "id": "A",
        "text": "NODEode",
        "isCorrect": false,
        "rationale": "'NODEode' significa 'Nó / Ponto de Interseção', não 'Curva'."
      },
      {
        "id": "B",
        "text": "STRIPtrip",
        "isCorrect": false,
        "rationale": "'STRIPtrip' significa 'Tira / Faixa', não 'Curva'."
      },
      {
        "id": "C",
        "text": "SIDEide",
        "isCorrect": false,
        "rationale": "'SIDEide' significa 'Lado', não 'Curva'."
      },
      {
        "id": "D",
        "text": "Curve",
        "isCorrect": true,
        "rationale": "'Curve' é a tradução correta para 'Curva'."
      }
    ]
  },
  {
    "id": "sql-geo-f-33",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Circle",
    "wordPt": "Círculo",
    "phonetic": "ˈsɜːr.kəl",
    "sentence": "A round geometric _________ has 360 degrees.",
    "sentencePt": "Um círculo geométrico redondo possui 360 graus.",
    "exampleEn": "A round geometric Circle has 360 degrees.",
    "examplePt": "Um círculo geométrico redondo possui 360 graus.",
    "gapWord": "Circle",
    "question": "Como se diz 'Círculo' em inglês?",
    "hint": "Figura plana delimitada por pontos equidistantes do centro.",
    "rationale": "'Circle' (ˈsɜːr.kəl): Figura plana delimitada por pontos equidistantes do centro.",
    "options": [
      {
        "id": "A",
        "text": "Circle",
        "isCorrect": true,
        "rationale": "'Circle' é a tradução correta para 'Círculo'."
      },
      {
        "id": "B",
        "text": "SQUAREquare",
        "isCorrect": false,
        "rationale": "'SQUAREquare' significa 'Quadrado', não 'Círculo'."
      },
      {
        "id": "C",
        "text": "PLANElane",
        "isCorrect": false,
        "rationale": "'PLANElane' significa 'Plano Geométrico', não 'Círculo'."
      },
      {
        "id": "D",
        "text": "ANGLEngle",
        "isCorrect": false,
        "rationale": "'ANGLEngle' significa 'Ângulo', não 'Círculo'."
      }
    ]
  },
  {
    "id": "sql-geo-f-34",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Square",
    "wordPt": "Quadrado",
    "phonetic": "skwɛər",
    "sentence": "A regular _________ has four equal sides and right angles.",
    "sentencePt": "Um quadrado regular tem quatro lados iguais e ângulos retos.",
    "exampleEn": "A regular Square has four equal sides and right angles.",
    "examplePt": "Um quadrado regular tem quatro lados iguais e ângulos retos.",
    "gapWord": "Square",
    "question": "Como se diz 'Quadrado' em inglês?",
    "hint": "Quadrilátero regular equilátero e equiângulo.",
    "rationale": "'Square' (skwɛər): Quadrilátero regular equilátero e equiângulo.",
    "options": [
      {
        "id": "A",
        "text": "BACKack",
        "isCorrect": false,
        "rationale": "'BACKack' significa 'Trás / Face Posterior', não 'Quadrado'."
      },
      {
        "id": "B",
        "text": "Square",
        "isCorrect": true,
        "rationale": "'Square' é a tradução correta para 'Quadrado'."
      },
      {
        "id": "C",
        "text": "SIZEize",
        "isCorrect": false,
        "rationale": "'SIZEize' significa 'Tamanho / Dimensão', não 'Quadrado'."
      },
      {
        "id": "D",
        "text": "FRAMErame",
        "isCorrect": false,
        "rationale": "'FRAMErame' significa 'Moldura / Estrutura', não 'Quadrado'."
      }
    ]
  },
  {
    "id": "sql-geo-f-35",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Oval",
    "wordPt": "Oval",
    "phonetic": "ˈoʊ.vəl",
    "sentence": "An egg resembles an elongated _________ geometry.",
    "sentencePt": "Um ovo assemelha-se a uma geometria oval alongada.",
    "exampleEn": "An egg resembles an elongated Oval geometry.",
    "examplePt": "Um ovo assemelha-se a uma geometria oval alongada.",
    "gapWord": "Oval",
    "question": "Como se diz 'Oval' em inglês?",
    "hint": "Figura plana curvilínea fechada com formato de ovo.",
    "rationale": "'Oval' (ˈoʊ.vəl): Figura plana curvilínea fechada com formato de ovo.",
    "options": [
      {
        "id": "A",
        "text": "SPOTpot",
        "isCorrect": false,
        "rationale": "'SPOTpot' significa 'Ponto / Mancha', não 'Oval'."
      },
      {
        "id": "B",
        "text": "DOTot",
        "isCorrect": false,
        "rationale": "'DOTot' significa 'Ponto / Pontinho', não 'Oval'."
      },
      {
        "id": "C",
        "text": "Oval",
        "isCorrect": true,
        "rationale": "'Oval' é a tradução correta para 'Oval'."
      },
      {
        "id": "D",
        "text": "APEXpex",
        "isCorrect": false,
        "rationale": "'APEXpex' significa 'Ápice', não 'Oval'."
      }
    ]
  },
  {
    "id": "sql-geo-f-36",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Block",
    "wordPt": "Bloco",
    "phonetic": "blɑːk",
    "sentence": "Children stacked each wooden building _________ carefully.",
    "sentencePt": "As crianças empilharam cada bloco de montar de madeira com cuidado.",
    "exampleEn": "Children stacked each wooden building Block carefully.",
    "examplePt": "As crianças empilharam cada bloco de montar de madeira com cuidado.",
    "gapWord": "Block",
    "question": "Como se diz 'Bloco' em inglês?",
    "hint": "Sólido tridimensional paralelepipédico.",
    "rationale": "'Block' (blɑːk): Sólido tridimensional paralelepipédico.",
    "options": [
      {
        "id": "A",
        "text": "OVALval",
        "isCorrect": false,
        "rationale": "'OVALval' significa 'Oval', não 'Bloco'."
      },
      {
        "id": "B",
        "text": "HOLEole",
        "isCorrect": false,
        "rationale": "'HOLEole' significa 'Furo / Orifício', não 'Bloco'."
      },
      {
        "id": "C",
        "text": "CENTERenter",
        "isCorrect": false,
        "rationale": "'CENTERenter' significa 'Centro', não 'Bloco'."
      },
      {
        "id": "D",
        "text": "Block",
        "isCorrect": true,
        "rationale": "'Block' é a tradução correta para 'Bloco'."
      }
    ]
  },
  {
    "id": "sql-geo-f-37",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Strip",
    "wordPt": "Tira / Faixa",
    "phonetic": "strɪp",
    "sentence": "Cut a narrow paper _________ two centimeters wide.",
    "sentencePt": "Corte uma tira estreita de papel com dois centímetros de largura.",
    "exampleEn": "Cut a narrow paper Strip two centimeters wide.",
    "examplePt": "Corte uma tira estreita de papel com dois centímetros de largura.",
    "gapWord": "Strip",
    "question": "Como se diz 'Tira / Faixa' em inglês?",
    "hint": "Pedaço alongado, plano e estreito de material.",
    "rationale": "'Strip' (strɪp): Pedaço alongado, plano e estreito de material.",
    "options": [
      {
        "id": "A",
        "text": "Strip",
        "isCorrect": true,
        "rationale": "'Strip' é a tradução correta para 'Tira / Faixa'."
      },
      {
        "id": "B",
        "text": "SIDEide",
        "isCorrect": false,
        "rationale": "'SIDEide' significa 'Lado', não 'Tira / Faixa'."
      },
      {
        "id": "C",
        "text": "OVALval",
        "isCorrect": false,
        "rationale": "'OVALval' significa 'Oval', não 'Tira / Faixa'."
      },
      {
        "id": "D",
        "text": "FLATlat",
        "isCorrect": false,
        "rationale": "'FLATlat' significa 'Plano / Raso', não 'Tira / Faixa'."
      }
    ]
  },
  {
    "id": "sql-geo-f-38",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Plane",
    "wordPt": "Plano Geométrico",
    "phonetic": "pleɪn",
    "sentence": "Two intersecting lines define a geometric _________.",
    "sentencePt": "Duas retas concorrentes definem um plano geométrico.",
    "exampleEn": "Two intersecting lines define a geometric Plane.",
    "examplePt": "Duas retas concorrentes definem um plano geométrico.",
    "gapWord": "Plane",
    "question": "Como se diz 'Plano Geométrico' em inglês?",
    "hint": "Superfície geométrica bidimensional infinita.",
    "rationale": "'Plane' (pleɪn): Superfície geométrica bidimensional infinita.",
    "options": [
      {
        "id": "A",
        "text": "SQUAREquare",
        "isCorrect": false,
        "rationale": "'SQUAREquare' significa 'Quadrado', não 'Plano Geométrico'."
      },
      {
        "id": "B",
        "text": "Plane",
        "isCorrect": true,
        "rationale": "'Plane' é a tradução correta para 'Plano Geométrico'."
      },
      {
        "id": "C",
        "text": "SPOTpot",
        "isCorrect": false,
        "rationale": "'SPOTpot' significa 'Ponto / Mancha', não 'Plano Geométrico'."
      },
      {
        "id": "D",
        "text": "CENTERenter",
        "isCorrect": false,
        "rationale": "'CENTERenter' significa 'Centro', não 'Plano Geométrico'."
      }
    ]
  },
  {
    "id": "sql-geo-f-39",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Flat",
    "wordPt": "Plano / Raso",
    "phonetic": "flæt",
    "sentence": "Place the ruler on a completely _________ table.",
    "sentencePt": "Coloque a régua sobre uma mesa completamente plana.",
    "exampleEn": "Place the ruler on a completely Flat table.",
    "examplePt": "Coloque a régua sobre uma mesa completamente plana.",
    "gapWord": "Flat",
    "question": "Como se diz 'Plano / Raso' em inglês?",
    "hint": "Superfície sem curvatura ou elevações.",
    "rationale": "'Flat' (flæt): Superfície sem curvatura ou elevações.",
    "options": [
      {
        "id": "A",
        "text": "ANGLEngle",
        "isCorrect": false,
        "rationale": "'ANGLEngle' significa 'Ângulo', não 'Plano / Raso'."
      },
      {
        "id": "B",
        "text": "ARCrc",
        "isCorrect": false,
        "rationale": "'ARCrc' significa 'Arco', não 'Plano / Raso'."
      },
      {
        "id": "C",
        "text": "Flat",
        "isCorrect": true,
        "rationale": "'Flat' é a tradução correta para 'Plano / Raso'."
      },
      {
        "id": "D",
        "text": "SQUAREquare",
        "isCorrect": false,
        "rationale": "'SQUAREquare' significa 'Quadrado', não 'Plano / Raso'."
      }
    ]
  },
  {
    "id": "sql-geo-f-40",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Cube",
    "wordPt": "Cubo",
    "phonetic": "kjuːb",
    "sentence": "A solid _________ possesses six identical square faces.",
    "sentencePt": "Um cubo sólido possui seis faces quadradas idênticas.",
    "exampleEn": "A solid Cube possesses six identical square faces.",
    "examplePt": "Um cubo sólido possui seis faces quadradas idênticas.",
    "gapWord": "Cube",
    "question": "Como se diz 'Cubo' em inglês?",
    "hint": "Poliedro regular hexaédrico com todas as faces quadradas.",
    "rationale": "'Cube' (kjuːb): Poliedro regular hexaédrico com todas as faces quadradas.",
    "options": [
      {
        "id": "A",
        "text": "SPOTpot",
        "isCorrect": false,
        "rationale": "'SPOTpot' significa 'Ponto / Mancha', não 'Cubo'."
      },
      {
        "id": "B",
        "text": "NODEode",
        "isCorrect": false,
        "rationale": "'NODEode' significa 'Nó / Ponto de Interseção', não 'Cubo'."
      },
      {
        "id": "C",
        "text": "SQUAREquare",
        "isCorrect": false,
        "rationale": "'SQUAREquare' significa 'Quadrado', não 'Cubo'."
      },
      {
        "id": "D",
        "text": "Cube",
        "isCorrect": true,
        "rationale": "'Cube' é a tradução correta para 'Cubo'."
      }
    ]
  },
  {
    "id": "sql-geo-f-41",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Ball",
    "wordPt": "Esfera / Bola",
    "phonetic": "bɔːl",
    "sentence": "A perfectly round _________ rolls evenly in all directions.",
    "sentencePt": "Uma bola perfeitamente redonda rola uniformemente em todas as direções.",
    "exampleEn": "A perfectly round Ball rolls evenly in all directions.",
    "examplePt": "Uma bola perfeitamente redonda rola uniformemente em todas as direções.",
    "gapWord": "Ball",
    "question": "Como se diz 'Esfera / Bola' em inglês?",
    "hint": "Corpo tridimensional perfeitamente esférico.",
    "rationale": "'Ball' (bɔːl): Corpo tridimensional perfeitamente esférico.",
    "options": [
      {
        "id": "A",
        "text": "Ball",
        "isCorrect": true,
        "rationale": "'Ball' é a tradução correta para 'Esfera / Bola'."
      },
      {
        "id": "B",
        "text": "MESHesh",
        "isCorrect": false,
        "rationale": "'MESHesh' significa 'Malha / Trama', não 'Esfera / Bola'."
      },
      {
        "id": "C",
        "text": "PEAKeak",
        "isCorrect": false,
        "rationale": "'PEAKeak' significa 'Pico / Cume', não 'Esfera / Bola'."
      },
      {
        "id": "D",
        "text": "CORNERorner",
        "isCorrect": false,
        "rationale": "'CORNERorner' significa 'Canto / Esquina', não 'Esfera / Bola'."
      }
    ]
  },
  {
    "id": "sql-geo-f-42",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Pipe",
    "wordPt": "Tubo / Cilindro Oco",
    "phonetic": "paɪp",
    "sentence": "Water flows through the long cylindrical _________.",
    "sentencePt": "A água flui através do longo tubo cilíndrico.",
    "exampleEn": "Water flows through the long cylindrical Pipe.",
    "examplePt": "A água flui através do longo tubo cilíndrico.",
    "gapWord": "Pipe",
    "question": "Como se diz 'Tubo / Cilindro Oco' em inglês?",
    "hint": "Estrutura tubular oca circular alongada.",
    "rationale": "'Pipe' (paɪp): Estrutura tubular oca circular alongada.",
    "options": [
      {
        "id": "A",
        "text": "BACKack",
        "isCorrect": false,
        "rationale": "'BACKack' significa 'Trás / Face Posterior', não 'Tubo / Cilindro Oco'."
      },
      {
        "id": "B",
        "text": "Pipe",
        "isCorrect": true,
        "rationale": "'Pipe' é a tradução correta para 'Tubo / Cilindro Oco'."
      },
      {
        "id": "C",
        "text": "HOLEole",
        "isCorrect": false,
        "rationale": "'HOLEole' significa 'Furo / Orifício', não 'Tubo / Cilindro Oco'."
      },
      {
        "id": "D",
        "text": "BASEase",
        "isCorrect": false,
        "rationale": "'BASEase' significa 'Base', não 'Tubo / Cilindro Oco'."
      }
    ]
  },
  {
    "id": "sql-geo-f-43",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Spot",
    "wordPt": "Ponto / Mancha",
    "phonetic": "spɑːt",
    "sentence": "The laser aimed a red light _________ on the wall.",
    "sentencePt": "O laser apontou um ponto de luz vermelha na parede.",
    "exampleEn": "The laser aimed a red light Spot on the wall.",
    "examplePt": "O laser apontou um ponto de luz vermelha na parede.",
    "gapWord": "Spot",
    "question": "Como se diz 'Ponto / Mancha' em inglês?",
    "hint": "Pequena área circular focalizada.",
    "rationale": "'Spot' (spɑːt): Pequena área circular focalizada.",
    "options": [
      {
        "id": "A",
        "text": "BACKack",
        "isCorrect": false,
        "rationale": "'BACKack' significa 'Trás / Face Posterior', não 'Ponto / Mancha'."
      },
      {
        "id": "B",
        "text": "SIZEize",
        "isCorrect": false,
        "rationale": "'SIZEize' significa 'Tamanho / Dimensão', não 'Ponto / Mancha'."
      },
      {
        "id": "C",
        "text": "Spot",
        "isCorrect": true,
        "rationale": "'Spot' é a tradução correta para 'Ponto / Mancha'."
      },
      {
        "id": "D",
        "text": "FRAMErame",
        "isCorrect": false,
        "rationale": "'FRAMErame' significa 'Moldura / Estrutura', não 'Ponto / Mancha'."
      }
    ]
  },
  {
    "id": "sql-geo-f-44",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Top",
    "wordPt": "Topo / Superior",
    "phonetic": "tɑːp",
    "sentence": "Place the pyramid capstone at the very _________.",
    "sentencePt": "Coloque o topo da pirâmide bem no ponto mais alto.",
    "exampleEn": "Place the pyramid capstone at the very Top.",
    "examplePt": "Coloque o topo da pirâmide bem no ponto mais alto.",
    "gapWord": "Top",
    "question": "Como se diz 'Topo / Superior' em inglês?",
    "hint": "Parte ou extremidade mais elevada de uma forma.",
    "rationale": "'Top' (tɑːp): Parte ou extremidade mais elevada de uma forma.",
    "options": [
      {
        "id": "A",
        "text": "APEXpex",
        "isCorrect": false,
        "rationale": "'APEXpex' significa 'Ápice', não 'Topo / Superior'."
      },
      {
        "id": "B",
        "text": "HOLEole",
        "isCorrect": false,
        "rationale": "'HOLEole' significa 'Furo / Orifício', não 'Topo / Superior'."
      },
      {
        "id": "C",
        "text": "SPACEpace",
        "isCorrect": false,
        "rationale": "'SPACEpace' significa 'Espaço Tridimensional', não 'Topo / Superior'."
      },
      {
        "id": "D",
        "text": "Top",
        "isCorrect": true,
        "rationale": "'Top' é a tradução correta para 'Topo / Superior'."
      }
    ]
  },
  {
    "id": "sql-geo-f-45",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Bottom",
    "wordPt": "Fundo / Base Inferior",
    "phonetic": "ˈbɑː.təm",
    "sentence": "The stable base forms the solid _________ of the pillar.",
    "sentencePt": "A base estável forma o fundo sólido do pilar.",
    "exampleEn": "The stable base forms the solid Bottom of the pillar.",
    "examplePt": "A base estável forma o fundo sólido do pilar.",
    "gapWord": "Bottom",
    "question": "Como se diz 'Fundo / Base Inferior' em inglês?",
    "hint": "Superfície ou extremidade mais baixa de um sólido.",
    "rationale": "'Bottom' (ˈbɑː.təm): Superfície ou extremidade mais baixa de um sólido.",
    "options": [
      {
        "id": "A",
        "text": "Bottom",
        "isCorrect": true,
        "rationale": "'Bottom' é a tradução correta para 'Fundo / Base Inferior'."
      },
      {
        "id": "B",
        "text": "MARKark",
        "isCorrect": false,
        "rationale": "'MARKark' significa 'Marcação', não 'Fundo / Base Inferior'."
      },
      {
        "id": "C",
        "text": "BASEase",
        "isCorrect": false,
        "rationale": "'BASEase' significa 'Base', não 'Fundo / Base Inferior'."
      },
      {
        "id": "D",
        "text": "EDGEdge",
        "isCorrect": false,
        "rationale": "'EDGEdge' significa 'Aresta / Borda', não 'Fundo / Base Inferior'."
      }
    ]
  },
  {
    "id": "sql-geo-f-46",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Front",
    "wordPt": "Frente / Face Frontal",
    "phonetic": "frʌnt",
    "sentence": "The main entrance is located on the building _________.",
    "sentencePt": "A entrada principal está localizada na frente do edifício.",
    "exampleEn": "The main entrance is located on the building Front.",
    "examplePt": "A entrada principal está localizada na frente do edifício.",
    "gapWord": "Front",
    "question": "Como se diz 'Frente / Face Frontal' em inglês?",
    "hint": "Face anterior principal voltada para o observador.",
    "rationale": "'Front' (frʌnt): Face anterior principal voltada para o observador.",
    "options": [
      {
        "id": "A",
        "text": "BORDERorder",
        "isCorrect": false,
        "rationale": "'BORDERorder' significa 'Borda / Limite', não 'Frente / Face Frontal'."
      },
      {
        "id": "B",
        "text": "Front",
        "isCorrect": true,
        "rationale": "'Front' é a tradução correta para 'Frente / Face Frontal'."
      },
      {
        "id": "C",
        "text": "BASEase",
        "isCorrect": false,
        "rationale": "'BASEase' significa 'Base', não 'Frente / Face Frontal'."
      },
      {
        "id": "D",
        "text": "FLATlat",
        "isCorrect": false,
        "rationale": "'FLATlat' significa 'Plano / Raso', não 'Frente / Face Frontal'."
      }
    ]
  },
  {
    "id": "sql-geo-f-47",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Back",
    "wordPt": "Trás / Face Posterior",
    "phonetic": "bæk",
    "sentence": "The coordinates are printed on the _________ of the card.",
    "sentencePt": "As coordenadas estão impressas na face de trás do cartão.",
    "exampleEn": "The coordinates are printed on the Back of the card.",
    "examplePt": "As coordenadas estão impressas na face de trás do cartão.",
    "gapWord": "Back",
    "question": "Como se diz 'Trás / Face Posterior' em inglês?",
    "hint": "Face posterior oposta à face frontal.",
    "rationale": "'Back' (bæk): Face posterior oposta à face frontal.",
    "options": [
      {
        "id": "A",
        "text": "ARCrc",
        "isCorrect": false,
        "rationale": "'ARCrc' significa 'Arco', não 'Trás / Face Posterior'."
      },
      {
        "id": "B",
        "text": "BALLall",
        "isCorrect": false,
        "rationale": "'BALLall' significa 'Esfera / Bola', não 'Trás / Face Posterior'."
      },
      {
        "id": "C",
        "text": "Back",
        "isCorrect": true,
        "rationale": "'Back' é a tradução correta para 'Trás / Face Posterior'."
      },
      {
        "id": "D",
        "text": "PIPEipe",
        "isCorrect": false,
        "rationale": "'PIPEipe' significa 'Tubo / Cilindro Oco', não 'Trás / Face Posterior'."
      }
    ]
  },
  {
    "id": "sql-geo-f-48",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Left",
    "wordPt": "Esquerda",
    "phonetic": "lɛft",
    "sentence": "Rotate the triangle ninety degrees to the _________.",
    "sentencePt": "Gire o triângulo noventa graus para a esquerda.",
    "exampleEn": "Rotate the triangle ninety degrees to the Left.",
    "examplePt": "Gire o triângulo noventa graus para a esquerda.",
    "gapWord": "Left",
    "question": "Como se diz 'Esquerda' em inglês?",
    "hint": "Orientação espacial contralateral ao lado direito.",
    "rationale": "'Left' (lɛft): Orientação espacial contralateral ao lado direito.",
    "options": [
      {
        "id": "A",
        "text": "FRAMErame",
        "isCorrect": false,
        "rationale": "'FRAMErame' significa 'Moldura / Estrutura', não 'Esquerda'."
      },
      {
        "id": "B",
        "text": "SPOTpot",
        "isCorrect": false,
        "rationale": "'SPOTpot' significa 'Ponto / Mancha', não 'Esquerda'."
      },
      {
        "id": "C",
        "text": "DISCisc",
        "isCorrect": false,
        "rationale": "'DISCisc' significa 'Disco', não 'Esquerda'."
      },
      {
        "id": "D",
        "text": "Left",
        "isCorrect": true,
        "rationale": "'Left' é a tradução correta para 'Esquerda'."
      }
    ]
  },
  {
    "id": "sql-geo-f-49",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Right",
    "wordPt": "Direita",
    "phonetic": "raɪt",
    "sentence": "A perpendicular line forms a _________ angle of 90°.",
    "sentencePt": "Uma linha perpendicular forma um ângulo reto de 90°.",
    "exampleEn": "A perpendicular line forms a Right angle of 90°.",
    "examplePt": "Uma linha perpendicular forma um ângulo reto de 90°.",
    "gapWord": "Right",
    "question": "Como se diz 'Direita' em inglês?",
    "hint": "Orientação espacial destra ou tipo de ângulo reto.",
    "rationale": "'Right' (raɪt): Orientação espacial destra ou tipo de ângulo reto.",
    "options": [
      {
        "id": "A",
        "text": "Right",
        "isCorrect": true,
        "rationale": "'Right' é a tradução correta para 'Direita'."
      },
      {
        "id": "B",
        "text": "MARKark",
        "isCorrect": false,
        "rationale": "'MARKark' significa 'Marcação', não 'Direita'."
      },
      {
        "id": "C",
        "text": "HOLEole",
        "isCorrect": false,
        "rationale": "'HOLEole' significa 'Furo / Orifício', não 'Direita'."
      },
      {
        "id": "D",
        "text": "BALLall",
        "isCorrect": false,
        "rationale": "'BALLall' significa 'Esfera / Bola', não 'Direita'."
      }
    ]
  },
  {
    "id": "sql-geo-f-50",
    "topic": "formas",
    "difficulty": "facil",
    "wordEn": "Space",
    "wordPt": "Espaço Tridimensional",
    "phonetic": "speɪs",
    "sentence": "Solid geometry studies 3D objects in physical _________.",
    "sentencePt": "A geometria sólida estuda objetos 3D no espaço físico.",
    "exampleEn": "Solid geometry studies 3D objects in physical Space.",
    "examplePt": "A geometria sólida estuda objetos 3D no espaço físico.",
    "gapWord": "Space",
    "question": "Como se diz 'Espaço Tridimensional' em inglês?",
    "hint": "Extensão tridimensional contínua em que corpos coexistem.",
    "rationale": "'Space' (speɪs): Extensão tridimensional contínua em que corpos coexistem.",
    "options": [
      {
        "id": "A",
        "text": "STARtar",
        "isCorrect": false,
        "rationale": "'STARtar' significa 'Estrela Geométrica', não 'Espaço Tridimensional'."
      },
      {
        "id": "B",
        "text": "Space",
        "isCorrect": true,
        "rationale": "'Space' é a tradução correta para 'Espaço Tridimensional'."
      },
      {
        "id": "C",
        "text": "BORDERorder",
        "isCorrect": false,
        "rationale": "'BORDERorder' significa 'Borda / Limite', não 'Espaço Tridimensional'."
      },
      {
        "id": "D",
        "text": "BALLall",
        "isCorrect": false,
        "rationale": "'BALLall' significa 'Esfera / Bola', não 'Espaço Tridimensional'."
      }
    ]
  },
  {
    "id": "sql-geo-m-01",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Triangle",
    "wordPt": "Triângulo",
    "phonetic": "ˈtraɪ.æŋ.ɡəl",
    "sentence": "A three-sided polygon is called a _________.",
    "sentencePt": "Um polígono de três lados é chamado de triângulo.",
    "exampleEn": "A three-sided polygon is called a Triangle.",
    "examplePt": "Um polígono de três lados é chamado de triângulo.",
    "gapWord": "Triangle",
    "question": "Como se diz 'Triângulo' em inglês?",
    "hint": "Polígono de três lados cuja soma dos ângulos internos é 180°.",
    "rationale": "'Triangle' (ˈtraɪ.æŋ.ɡəl): Polígono de três lados cuja soma dos ângulos internos é 180°.",
    "options": [
      {
        "id": "A",
        "text": "Triangle",
        "isCorrect": true,
        "rationale": "'Triangle' é a tradução correta para 'Triângulo'."
      },
      {
        "id": "B",
        "text": "TANGENTangent",
        "isCorrect": false,
        "rationale": "'TANGENTangent' significa 'Tangente', não 'Triângulo'."
      },
      {
        "id": "C",
        "text": "QUADRANTuadrant",
        "isCorrect": false,
        "rationale": "'QUADRANTuadrant' significa 'Quadrante', não 'Triângulo'."
      },
      {
        "id": "D",
        "text": "MATRIXatrix",
        "isCorrect": false,
        "rationale": "'MATRIXatrix' significa 'Matriz', não 'Triângulo'."
      }
    ]
  },
  {
    "id": "sql-geo-m-02",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Rectangle",
    "wordPt": "Retângulo",
    "phonetic": "ˈrɛkˌtæŋ.ɡəl",
    "sentence": "A _________ has four right angles and unequal adjacent sides.",
    "sentencePt": "Um retângulo possui quatro ângulos retos e lados adjacentes desiguais.",
    "exampleEn": "A Rectangle has four right angles and unequal adjacent sides.",
    "examplePt": "Um retângulo possui quatro ângulos retos e lados adjacentes desiguais.",
    "gapWord": "Rectangle",
    "question": "Como se diz 'Retângulo' em inglês?",
    "hint": "Paralelogramo com quatro ângulos retos.",
    "rationale": "'Rectangle' (ˈrɛkˌtæŋ.ɡəl): Paralelogramo com quatro ângulos retos.",
    "options": [
      {
        "id": "A",
        "text": "VOLUMEolume",
        "isCorrect": false,
        "rationale": "'VOLUMEolume' significa 'Volume', não 'Retângulo'."
      },
      {
        "id": "B",
        "text": "Rectangle",
        "isCorrect": true,
        "rationale": "'Rectangle' é a tradução correta para 'Retângulo'."
      },
      {
        "id": "C",
        "text": "TRAPEZOIDrapezoid",
        "isCorrect": false,
        "rationale": "'TRAPEZOIDrapezoid' significa 'Trapézio', não 'Retângulo'."
      },
      {
        "id": "D",
        "text": "SECANTecant",
        "isCorrect": false,
        "rationale": "'SECANTecant' significa 'Secante', não 'Retângulo'."
      }
    ]
  },
  {
    "id": "sql-geo-m-03",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Polygon",
    "wordPt": "Polígono",
    "phonetic": "ˈpɑː.lɪ.ɡɑːn",
    "sentence": "A closed 2D shape with straight sides is a _________.",
    "sentencePt": "Uma forma plana fechada com lados retos é um polígono.",
    "exampleEn": "A closed 2D shape with straight sides is a Polygon.",
    "examplePt": "Uma forma plana fechada com lados retos é um polígono.",
    "gapWord": "Polygon",
    "question": "Como se diz 'Polígono' em inglês?",
    "hint": "Figura geométrica plana fechada formada por segmentos de reta.",
    "rationale": "'Polygon' (ˈpɑː.lɪ.ɡɑːn): Figura geométrica plana fechada formada por segmentos de reta.",
    "options": [
      {
        "id": "A",
        "text": "VERTEXertex",
        "isCorrect": false,
        "rationale": "'VERTEXertex' significa 'Vértice', não 'Polígono'."
      },
      {
        "id": "B",
        "text": "PERPENDICULARerpendicular",
        "isCorrect": false,
        "rationale": "'PERPENDICULARerpendicular' significa 'Perpendicular', não 'Polígono'."
      },
      {
        "id": "C",
        "text": "Polygon",
        "isCorrect": true,
        "rationale": "'Polygon' é a tradução correta para 'Polígono'."
      },
      {
        "id": "D",
        "text": "DEPTHepth",
        "isCorrect": false,
        "rationale": "'DEPTHepth' significa 'Profundidade', não 'Polígono'."
      }
    ]
  },
  {
    "id": "sql-geo-m-04",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Ellipse",
    "wordPt": "Elipse",
    "phonetic": "ɪˈlɪps",
    "sentence": "Planets orbit the Sun along an elliptical _________.",
    "sentencePt": "Planetas orbitam o Sol ao longo de uma elipse.",
    "exampleEn": "Planets orbit the Sun along an elliptical Ellipse.",
    "examplePt": "Planetas orbitam o Sol ao longo de uma elipse.",
    "gapWord": "Ellipse",
    "question": "Como se diz 'Elipse' em inglês?",
    "hint": "Curva plana oval simétrica com dois focos.",
    "rationale": "'Ellipse' (ɪˈlɪps): Curva plana oval simétrica com dois focos.",
    "options": [
      {
        "id": "A",
        "text": "CIRCUMFERENCEircumference",
        "isCorrect": false,
        "rationale": "'CIRCUMFERENCEircumference' significa 'Circunferência', não 'Elipse'."
      },
      {
        "id": "B",
        "text": "HEIGHTeight",
        "isCorrect": false,
        "rationale": "'HEIGHTeight' significa 'Altura', não 'Elipse'."
      },
      {
        "id": "C",
        "text": "PERIMETERerimeter",
        "isCorrect": false,
        "rationale": "'PERIMETERerimeter' significa 'Perímetro', não 'Elipse'."
      },
      {
        "id": "D",
        "text": "Ellipse",
        "isCorrect": true,
        "rationale": "'Ellipse' é a tradução correta para 'Elipse'."
      }
    ]
  },
  {
    "id": "sql-geo-m-05",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Cylinder",
    "wordPt": "Cilindro",
    "phonetic": "ˈsɪl.ɪn.dər",
    "sentence": "A tin can has the geometric shape of a _________.",
    "sentencePt": "Uma lata de metal tem o formato geométrico de um cilindro.",
    "exampleEn": "A tin can has the geometric shape of a Cylinder.",
    "examplePt": "Uma lata de metal tem o formato geométrico de um cilindro.",
    "gapWord": "Cylinder",
    "question": "Como se diz 'Cilindro' em inglês?",
    "hint": "Sólido geométrico com duas bases circulares paralelas.",
    "rationale": "'Cylinder' (ˈsɪl.ɪn.dər): Sólido geométrico com duas bases circulares paralelas.",
    "options": [
      {
        "id": "A",
        "text": "Cylinder",
        "isCorrect": true,
        "rationale": "'Cylinder' é a tradução correta para 'Cilindro'."
      },
      {
        "id": "B",
        "text": "TORUSorus",
        "isCorrect": false,
        "rationale": "'TORUSorus' significa 'Toro / Superfície Toroidal', não 'Cilindro'."
      },
      {
        "id": "C",
        "text": "DIAGONALiagonal",
        "isCorrect": false,
        "rationale": "'DIAGONALiagonal' significa 'Diagonal', não 'Cilindro'."
      },
      {
        "id": "D",
        "text": "OUTLINEutline",
        "isCorrect": false,
        "rationale": "'OUTLINEutline' significa 'Delineamento / Esboço Perimétrico', não 'Cilindro'."
      }
    ]
  },
  {
    "id": "sql-geo-m-06",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Pyramid",
    "wordPt": "Pirâmide",
    "phonetic": "ˈpɪr.ə.mɪd",
    "sentence": "The ancient monument is a monumental stone _________.",
    "sentencePt": "O monumento antigo é uma pirâmide monumental de pedra.",
    "exampleEn": "The ancient monument is a monumental stone Pyramid.",
    "examplePt": "O monumento antigo é uma pirâmide monumental de pedra.",
    "gapWord": "Pyramid",
    "question": "Como se diz 'Pirâmide' em inglês?",
    "hint": "Poliedro com base poligonal e faces triangulares que convergem.",
    "rationale": "'Pyramid' (ˈpɪr.ə.mɪd): Poliedro com base poligonal e faces triangulares que convergem.",
    "options": [
      {
        "id": "A",
        "text": "HELIXelix",
        "isCorrect": false,
        "rationale": "'HELIXelix' significa 'Hélice Tridimensional', não 'Pirâmide'."
      },
      {
        "id": "B",
        "text": "Pyramid",
        "isCorrect": true,
        "rationale": "'Pyramid' é a tradução correta para 'Pirâmide'."
      },
      {
        "id": "C",
        "text": "PATTERNattern",
        "isCorrect": false,
        "rationale": "'PATTERNattern' significa 'Padrão Geométrico', não 'Pirâmide'."
      },
      {
        "id": "D",
        "text": "SYMMETRYymmetry",
        "isCorrect": false,
        "rationale": "'SYMMETRYymmetry' significa 'Simetria', não 'Pirâmide'."
      }
    ]
  },
  {
    "id": "sql-geo-m-07",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Sphere",
    "wordPt": "Esfera",
    "phonetic": "sfɪr",
    "sentence": "A basketball is a hollow, air-filled _________.",
    "sentencePt": "Uma bola de basquete é uma esfera oca cheia de ar.",
    "exampleEn": "A basketball is a hollow, air-filled Sphere.",
    "examplePt": "Uma bola de basquete é uma esfera oca cheia de ar.",
    "gapWord": "Sphere",
    "question": "Como se diz 'Esfera' em inglês?",
    "hint": "Sólido perfeitamente redondo equidistante do centro.",
    "rationale": "'Sphere' (sfɪr): Sólido perfeitamente redondo equidistante do centro.",
    "options": [
      {
        "id": "A",
        "text": "VERTEXertex",
        "isCorrect": false,
        "rationale": "'VERTEXertex' significa 'Vértice', não 'Esfera'."
      },
      {
        "id": "B",
        "text": "OCTAGONctagon",
        "isCorrect": false,
        "rationale": "'OCTAGONctagon' significa 'Octógono', não 'Esfera'."
      },
      {
        "id": "C",
        "text": "Sphere",
        "isCorrect": true,
        "rationale": "'Sphere' é a tradução correta para 'Esfera'."
      },
      {
        "id": "D",
        "text": "VECTORector",
        "isCorrect": false,
        "rationale": "'VECTORector' significa 'Vetor', não 'Esfera'."
      }
    ]
  },
  {
    "id": "sql-geo-m-08",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Rhombus",
    "wordPt": "Losango",
    "phonetic": "ˈrɑːm.bəs",
    "sentence": "A diamond-shaped polygon is geometrically a _________.",
    "sentencePt": "Um polígono em formato de diamante é geometricamente um losango.",
    "exampleEn": "A diamond-shaped polygon is geometrically a Rhombus.",
    "examplePt": "Um polígono em formato de diamante é geometricamente um losango.",
    "gapWord": "Rhombus",
    "question": "Como se diz 'Losango' em inglês?",
    "hint": "Paralelogramo com todos os quatro lados de mesmo comprimento.",
    "rationale": "'Rhombus' (ˈrɑːm.bəs): Paralelogramo com todos os quatro lados de mesmo comprimento.",
    "options": [
      {
        "id": "A",
        "text": "VECTORector",
        "isCorrect": false,
        "rationale": "'VECTORector' significa 'Vetor', não 'Losango'."
      },
      {
        "id": "B",
        "text": "POLYGONolygon",
        "isCorrect": false,
        "rationale": "'POLYGONolygon' significa 'Polígono', não 'Losango'."
      },
      {
        "id": "C",
        "text": "DEGREEegree",
        "isCorrect": false,
        "rationale": "'DEGREEegree' significa 'Grau Geométrico', não 'Losango'."
      },
      {
        "id": "D",
        "text": "Rhombus",
        "isCorrect": true,
        "rationale": "'Rhombus' é a tradução correta para 'Losango'."
      }
    ]
  },
  {
    "id": "sql-geo-m-09",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Trapezoid",
    "wordPt": "Trapézio",
    "phonetic": "ˈtræp.ə.zɔɪd",
    "sentence": "A quadrilateral with only one pair of parallel sides is a _________.",
    "sentencePt": "Um quadrilátero com apenas um par de lados paralelos é um trapézio.",
    "exampleEn": "A quadrilateral with only one pair of parallel sides is a Trapezoid.",
    "examplePt": "Um quadrilátero com apenas um par de lados paralelos é um trapézio.",
    "gapWord": "Trapezoid",
    "question": "Como se diz 'Trapézio' em inglês?",
    "hint": "Quadrilátero com duas bases paralelas de comprimentos distintos.",
    "rationale": "'Trapezoid' (ˈtræp.ə.zɔɪd): Quadrilátero com duas bases paralelas de comprimentos distintos.",
    "options": [
      {
        "id": "A",
        "text": "Trapezoid",
        "isCorrect": true,
        "rationale": "'Trapezoid' é a tradução correta para 'Trapézio'."
      },
      {
        "id": "B",
        "text": "DIAMETERiameter",
        "isCorrect": false,
        "rationale": "'DIAMETERiameter' significa 'Diâmetro', não 'Trapézio'."
      },
      {
        "id": "C",
        "text": "TRIANGLEriangle",
        "isCorrect": false,
        "rationale": "'TRIANGLEriangle' significa 'Triângulo', não 'Trapézio'."
      },
      {
        "id": "D",
        "text": "RECTANGLEectangle",
        "isCorrect": false,
        "rationale": "'RECTANGLEectangle' significa 'Retângulo', não 'Trapézio'."
      }
    ]
  },
  {
    "id": "sql-geo-m-10",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Hexagon",
    "wordPt": "Hexágono",
    "phonetic": "ˈhɛk.sə.ɡɑːn",
    "sentence": "Honeycomb cells naturally form a regular _________.",
    "sentencePt": "Células de favos de mel formam naturalmente um hexágono regular.",
    "exampleEn": "Honeycomb cells naturally form a regular Hexagon.",
    "examplePt": "Células de favos de mel formam naturalmente um hexágono regular.",
    "gapWord": "Hexagon",
    "question": "Como se diz 'Hexágono' em inglês?",
    "hint": "Polígono de seis lados e seis ângulos.",
    "rationale": "'Hexagon' (ˈhɛk.sə.ɡɑːn): Polígono de seis lados e seis ângulos.",
    "options": [
      {
        "id": "A",
        "text": "VOLUMEolume",
        "isCorrect": false,
        "rationale": "'VOLUMEolume' significa 'Volume', não 'Hexágono'."
      },
      {
        "id": "B",
        "text": "Hexagon",
        "isCorrect": true,
        "rationale": "'Hexagon' é a tradução correta para 'Hexágono'."
      },
      {
        "id": "C",
        "text": "DIAGONALiagonal",
        "isCorrect": false,
        "rationale": "'DIAGONALiagonal' significa 'Diagonal', não 'Hexágono'."
      },
      {
        "id": "D",
        "text": "PERPENDICULARerpendicular",
        "isCorrect": false,
        "rationale": "'PERPENDICULARerpendicular' significa 'Perpendicular', não 'Hexágono'."
      }
    ]
  },
  {
    "id": "sql-geo-m-11",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Octagon",
    "wordPt": "Octógono",
    "phonetic": "ˈɑːk.tə.ɡɑːn",
    "sentence": "Standard stop signs are shaped like a red _________.",
    "sentencePt": "Placas padrão de 'Pare' têm o formato de um octógono vermelho.",
    "exampleEn": "Standard stop signs are shaped like a red Octagon.",
    "examplePt": "Placas padrão de 'Pare' têm o formato de um octógono vermelho.",
    "gapWord": "Octagon",
    "question": "Como se diz 'Octógono' em inglês?",
    "hint": "Polígono de oito lados e oito vértices.",
    "rationale": "'Octagon' (ˈɑːk.tə.ɡɑːn): Polígono de oito lados e oito vértices.",
    "options": [
      {
        "id": "A",
        "text": "MATRIXatrix",
        "isCorrect": false,
        "rationale": "'MATRIXatrix' significa 'Matriz', não 'Octógono'."
      },
      {
        "id": "B",
        "text": "DIMENSIONimension",
        "isCorrect": false,
        "rationale": "'DIMENSIONimension' significa 'Dimensão', não 'Octógono'."
      },
      {
        "id": "C",
        "text": "Octagon",
        "isCorrect": true,
        "rationale": "'Octagon' é a tradução correta para 'Octógono'."
      },
      {
        "id": "D",
        "text": "HEIGHTeight",
        "isCorrect": false,
        "rationale": "'HEIGHTeight' significa 'Altura', não 'Octógono'."
      }
    ]
  },
  {
    "id": "sql-geo-m-12",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Pentagon",
    "wordPt": "Pentágono",
    "phonetic": "ˈpɛn.tə.ɡɑːn",
    "sentence": "A five-pointed star is based on an internal _________.",
    "sentencePt": "Uma estrela de cinco pontas baseia-se em um pentágono interno.",
    "exampleEn": "A five-pointed star is based on an internal Pentagon.",
    "examplePt": "Uma estrela de cinco pontas baseia-se em um pentágono interno.",
    "gapWord": "Pentagon",
    "question": "Como se diz 'Pentágono' em inglês?",
    "hint": "Polígono composto por cinco lados e cinco ângulos.",
    "rationale": "'Pentagon' (ˈpɛn.tə.ɡɑːn): Polígono composto por cinco lados e cinco ângulos.",
    "options": [
      {
        "id": "A",
        "text": "VERTEXertex",
        "isCorrect": false,
        "rationale": "'VERTEXertex' significa 'Vértice', não 'Pentágono'."
      },
      {
        "id": "B",
        "text": "LENGTHength",
        "isCorrect": false,
        "rationale": "'LENGTHength' significa 'Comprimento', não 'Pentágono'."
      },
      {
        "id": "C",
        "text": "RADIUSadius",
        "isCorrect": false,
        "rationale": "'RADIUSadius' significa 'Raio Geométrico', não 'Pentágono'."
      },
      {
        "id": "D",
        "text": "Pentagon",
        "isCorrect": true,
        "rationale": "'Pentagon' é a tradução correta para 'Pentágono'."
      }
    ]
  },
  {
    "id": "sql-geo-m-13",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Diameter",
    "wordPt": "Diâmetro",
    "phonetic": "daɪˈæm.ə.tər",
    "sentence": "The line passing through the center is the circle's _________.",
    "sentencePt": "A linha que passa pelo centro é o diâmetro do círculo.",
    "exampleEn": "The line passing through the center is the circle's Diameter.",
    "examplePt": "A linha que passa pelo centro é o diâmetro do círculo.",
    "gapWord": "Diameter",
    "question": "Como se diz 'Diâmetro' em inglês?",
    "hint": "Maior corda de uma circunferência passando pelo centro.",
    "rationale": "'Diameter' (daɪˈæm.ə.tər): Maior corda de uma circunferência passando pelo centro.",
    "options": [
      {
        "id": "A",
        "text": "Diameter",
        "isCorrect": true,
        "rationale": "'Diameter' é a tradução correta para 'Diâmetro'."
      },
      {
        "id": "B",
        "text": "PERIMETERerimeter",
        "isCorrect": false,
        "rationale": "'PERIMETERerimeter' significa 'Perímetro', não 'Diâmetro'."
      },
      {
        "id": "C",
        "text": "CONEone",
        "isCorrect": false,
        "rationale": "'CONEone' significa 'Cone', não 'Diâmetro'."
      },
      {
        "id": "D",
        "text": "SECTIONection",
        "isCorrect": false,
        "rationale": "'SECTIONection' significa 'Seção / Corte Transversal', não 'Diâmetro'."
      }
    ]
  },
  {
    "id": "sql-geo-m-14",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Radius",
    "wordPt": "Raio Geométrico",
    "phonetic": "ˈreɪ.di.əs",
    "sentence": "The _________ is half the length of the circle's diameter.",
    "sentencePt": "O raio é a metade do comprimento do diâmetro do círculo.",
    "exampleEn": "The Radius is half the length of the circle's diameter.",
    "examplePt": "O raio é a metade do comprimento do diâmetro do círculo.",
    "gapWord": "Radius",
    "question": "Como se diz 'Raio Geométrico' em inglês?",
    "hint": "Segmento do centro até qualquer ponto da circunferência.",
    "rationale": "'Radius' (ˈreɪ.di.əs): Segmento do centro até qualquer ponto da circunferência.",
    "options": [
      {
        "id": "A",
        "text": "SECTIONection",
        "isCorrect": false,
        "rationale": "'SECTIONection' significa 'Seção / Corte Transversal', não 'Raio Geométrico'."
      },
      {
        "id": "B",
        "text": "Radius",
        "isCorrect": true,
        "rationale": "'Radius' é a tradução correta para 'Raio Geométrico'."
      },
      {
        "id": "C",
        "text": "SYMMETRYymmetry",
        "isCorrect": false,
        "rationale": "'SYMMETRYymmetry' significa 'Simetria', não 'Raio Geométrico'."
      },
      {
        "id": "D",
        "text": "HELIXelix",
        "isCorrect": false,
        "rationale": "'HELIXelix' significa 'Hélice Tridimensional', não 'Raio Geométrico'."
      }
    ]
  },
  {
    "id": "sql-geo-m-15",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Circumference",
    "wordPt": "Circunferência",
    "phonetic": "sərˈkʌm.frəns",
    "sentence": "Calculate the outer _________ using the formula 2πr.",
    "sentencePt": "Calcule a circunferência externa usando a fórmula 2πr.",
    "exampleEn": "Calculate the outer Circumference using the formula 2πr.",
    "examplePt": "Calcule a circunferência externa usando a fórmula 2πr.",
    "gapWord": "Circumference",
    "question": "Como se diz 'Circunferência' em inglês?",
    "hint": "Perímetro ou contorno linear curvo de um círculo.",
    "rationale": "'Circumference' (sərˈkʌm.frəns): Perímetro ou contorno linear curvo de um círculo.",
    "options": [
      {
        "id": "A",
        "text": "BREADTHreadth",
        "isCorrect": false,
        "rationale": "'BREADTHreadth' significa 'Extensão / Largura Ampla', não 'Circunferência'."
      },
      {
        "id": "B",
        "text": "SYMMETRYymmetry",
        "isCorrect": false,
        "rationale": "'SYMMETRYymmetry' significa 'Simetria', não 'Circunferência'."
      },
      {
        "id": "C",
        "text": "Circumference",
        "isCorrect": true,
        "rationale": "'Circumference' é a tradução correta para 'Circunferência'."
      },
      {
        "id": "D",
        "text": "SPIRALpiral",
        "isCorrect": false,
        "rationale": "'SPIRALpiral' significa 'Espiral', não 'Circunferência'."
      }
    ]
  },
  {
    "id": "sql-geo-m-16",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Perimeter",
    "wordPt": "Perímetro",
    "phonetic": "pəˈrɪm.ə.tər",
    "sentence": "Add all side lengths to determine the polygon's _________.",
    "sentencePt": "Some todos os lados para determinar o perímetro do polígono.",
    "exampleEn": "Add all side lengths to determine the polygon's Perimeter.",
    "examplePt": "Some todos os lados para determinar o perímetro do polígono.",
    "gapWord": "Perimeter",
    "question": "Como se diz 'Perímetro' em inglês?",
    "hint": "Comprimento linear total da fronteira de uma figura plana.",
    "rationale": "'Perimeter' (pəˈrɪm.ə.tər): Comprimento linear total da fronteira de uma figura plana.",
    "options": [
      {
        "id": "A",
        "text": "DIMENSIONimension",
        "isCorrect": false,
        "rationale": "'DIMENSIONimension' significa 'Dimensão', não 'Perímetro'."
      },
      {
        "id": "B",
        "text": "QUADRANTuadrant",
        "isCorrect": false,
        "rationale": "'QUADRANTuadrant' significa 'Quadrante', não 'Perímetro'."
      },
      {
        "id": "C",
        "text": "WIDTHidth",
        "isCorrect": false,
        "rationale": "'WIDTHidth' significa 'Largura', não 'Perímetro'."
      },
      {
        "id": "D",
        "text": "Perimeter",
        "isCorrect": true,
        "rationale": "'Perimeter' é a tradução correta para 'Perímetro'."
      }
    ]
  },
  {
    "id": "sql-geo-m-17",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Area",
    "wordPt": "Área",
    "phonetic": "ˈɛr.i.ə",
    "sentence": "Multiply base by height to compute the rectangle's _________.",
    "sentencePt": "Multiplique base por altura para computar a área do retângulo.",
    "exampleEn": "Multiply base by height to compute the rectangle's Area.",
    "examplePt": "Multiplique base por altura para computar a área do retângulo.",
    "gapWord": "Area",
    "question": "Como se diz 'Área' em inglês?",
    "hint": "Medida da extensão de uma superfície bidimensional.",
    "rationale": "'Area' (ˈɛr.i.ə): Medida da extensão de uma superfície bidimensional.",
    "options": [
      {
        "id": "A",
        "text": "Area",
        "isCorrect": true,
        "rationale": "'Area' é a tradução correta para 'Área'."
      },
      {
        "id": "B",
        "text": "ELLIPSEllipse",
        "isCorrect": false,
        "rationale": "'ELLIPSEllipse' significa 'Elipse', não 'Área'."
      },
      {
        "id": "C",
        "text": "VERTEXertex",
        "isCorrect": false,
        "rationale": "'VERTEXertex' significa 'Vértice', não 'Área'."
      },
      {
        "id": "D",
        "text": "DEPTHepth",
        "isCorrect": false,
        "rationale": "'DEPTHepth' significa 'Profundidade', não 'Área'."
      }
    ]
  },
  {
    "id": "sql-geo-m-18",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Volume",
    "wordPt": "Volume",
    "phonetic": "ˈvɑːl.juːm",
    "sentence": "Cubic units measure the three-dimensional _________.",
    "sentencePt": "Unidades cúbicas medem o volume tridimensional.",
    "exampleEn": "Cubic units measure the three-dimensional Volume.",
    "examplePt": "Unidades cúbicas medem o volume tridimensional.",
    "gapWord": "Volume",
    "question": "Como se diz 'Volume' em inglês?",
    "hint": "Quantidade de espaço tridimensional ocupado por um corpo.",
    "rationale": "'Volume' (ˈvɑːl.juːm): Quantidade de espaço tridimensional ocupado por um corpo.",
    "options": [
      {
        "id": "A",
        "text": "POLYGONolygon",
        "isCorrect": false,
        "rationale": "'POLYGONolygon' significa 'Polígono', não 'Volume'."
      },
      {
        "id": "B",
        "text": "Volume",
        "isCorrect": true,
        "rationale": "'Volume' é a tradução correta para 'Volume'."
      },
      {
        "id": "C",
        "text": "CONEone",
        "isCorrect": false,
        "rationale": "'CONEone' significa 'Cone', não 'Volume'."
      },
      {
        "id": "D",
        "text": "PARALLELarallel",
        "isCorrect": false,
        "rationale": "'PARALLELarallel' significa 'Paralelo', não 'Volume'."
      }
    ]
  },
  {
    "id": "sql-geo-m-19",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Vertex",
    "wordPt": "Vértice",
    "phonetic": "ˈvɜːr.tɛks",
    "sentence": "The point where two sides meet is called a _________.",
    "sentencePt": "O ponto onde dois lados se encontram é chamado de vértice.",
    "exampleEn": "The point where two sides meet is called a Vertex.",
    "examplePt": "O ponto onde dois lados se encontram é chamado de vértice.",
    "gapWord": "Vertex",
    "question": "Como se diz 'Vértice' em inglês?",
    "hint": "Ponto de interseção de duas ou mais arestas.",
    "rationale": "'Vertex' (ˈvɜːr.tɛks): Ponto de interseção de duas ou mais arestas.",
    "options": [
      {
        "id": "A",
        "text": "VERTICESertices",
        "isCorrect": false,
        "rationale": "'VERTICESertices' significa 'Vértices', não 'Vértice'."
      },
      {
        "id": "B",
        "text": "SYMMETRYymmetry",
        "isCorrect": false,
        "rationale": "'SYMMETRYymmetry' significa 'Simetria', não 'Vértice'."
      },
      {
        "id": "C",
        "text": "Vertex",
        "isCorrect": true,
        "rationale": "'Vertex' é a tradução correta para 'Vértice'."
      },
      {
        "id": "D",
        "text": "AREArea",
        "isCorrect": false,
        "rationale": "'AREArea' significa 'Área', não 'Vértice'."
      }
    ]
  },
  {
    "id": "sql-geo-m-20",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Vertices",
    "wordPt": "Vértices",
    "phonetic": "ˈvɜːr.tə.siːz",
    "sentence": "A triangle has three corners, known as _________.",
    "sentencePt": "Um triângulo tem três cantos, conhecidos como vértices.",
    "exampleEn": "A triangle has three corners, known as Vertices.",
    "examplePt": "Um triângulo tem três cantos, conhecidos como vértices.",
    "gapWord": "Vertices",
    "question": "Como se diz 'Vértices' em inglês?",
    "hint": "Plural de vértice: os múltiplos pontos nodais de uma figura.",
    "rationale": "'Vertices' (ˈvɜːr.tə.siːz): Plural de vértice: os múltiplos pontos nodais de uma figura.",
    "options": [
      {
        "id": "A",
        "text": "CONEone",
        "isCorrect": false,
        "rationale": "'CONEone' significa 'Cone', não 'Vértices'."
      },
      {
        "id": "B",
        "text": "PYRAMIDyramid",
        "isCorrect": false,
        "rationale": "'PYRAMIDyramid' significa 'Pirâmide', não 'Vértices'."
      },
      {
        "id": "C",
        "text": "SPHEREphere",
        "isCorrect": false,
        "rationale": "'SPHEREphere' significa 'Esfera', não 'Vértices'."
      },
      {
        "id": "D",
        "text": "Vertices",
        "isCorrect": true,
        "rationale": "'Vertices' é a tradução correta para 'Vértices'."
      }
    ]
  },
  {
    "id": "sql-geo-m-21",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Diagonal",
    "wordPt": "Diagonal",
    "phonetic": "daɪˈæɡ.ə.nəl",
    "sentence": "A _________ connects opposite vertices across the rectangle.",
    "sentencePt": "Uma diagonal conecta vértices opostos através do retângulo.",
    "exampleEn": "A Diagonal connects opposite vertices across the rectangle.",
    "examplePt": "Uma diagonal conecta vértices opostos através do retângulo.",
    "gapWord": "Diagonal",
    "question": "Como se diz 'Diagonal' em inglês?",
    "hint": "Segmento de reta unindo vértices não consecutivos.",
    "rationale": "'Diagonal' (daɪˈæɡ.ə.nəl): Segmento de reta unindo vértices não consecutivos.",
    "options": [
      {
        "id": "A",
        "text": "Diagonal",
        "isCorrect": true,
        "rationale": "'Diagonal' é a tradução correta para 'Diagonal'."
      },
      {
        "id": "B",
        "text": "OUTLINEutline",
        "isCorrect": false,
        "rationale": "'OUTLINEutline' significa 'Delineamento / Esboço Perimétrico', não 'Diagonal'."
      },
      {
        "id": "C",
        "text": "TRIANGLEriangle",
        "isCorrect": false,
        "rationale": "'TRIANGLEriangle' significa 'Triângulo', não 'Diagonal'."
      },
      {
        "id": "D",
        "text": "TORUSorus",
        "isCorrect": false,
        "rationale": "'TORUSorus' significa 'Toro / Superfície Toroidal', não 'Diagonal'."
      }
    ]
  },
  {
    "id": "sql-geo-m-22",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Parallel",
    "wordPt": "Paralelo",
    "phonetic": "ˈpær.ə.lɛl",
    "sentence": "Railway tracks represent _________ lines that never meet.",
    "sentencePt": "Trilhos de trem representam linhas paralelas que nunca se encontram.",
    "exampleEn": "Railway tracks represent Parallel lines that never meet.",
    "examplePt": "Trilhos de trem representam linhas paralelas que nunca se encontram.",
    "gapWord": "Parallel",
    "question": "Como se diz 'Paralelo' em inglês?",
    "hint": "Linhas no mesmo plano que mantêm distância constante.",
    "rationale": "'Parallel' (ˈpær.ə.lɛl): Linhas no mesmo plano que mantêm distância constante.",
    "options": [
      {
        "id": "A",
        "text": "DEPTHepth",
        "isCorrect": false,
        "rationale": "'DEPTHepth' significa 'Profundidade', não 'Paralelo'."
      },
      {
        "id": "B",
        "text": "Parallel",
        "isCorrect": true,
        "rationale": "'Parallel' é a tradução correta para 'Paralelo'."
      },
      {
        "id": "C",
        "text": "CHORDhord",
        "isCorrect": false,
        "rationale": "'CHORDhord' significa 'Corda Geométrica', não 'Paralelo'."
      },
      {
        "id": "D",
        "text": "RHOMBUShombus",
        "isCorrect": false,
        "rationale": "'RHOMBUShombus' significa 'Losango', não 'Paralelo'."
      }
    ]
  },
  {
    "id": "sql-geo-m-23",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Perpendicular",
    "wordPt": "Perpendicular",
    "phonetic": "ˌpɜːr.pənˈdɪk.jə.lər",
    "sentence": "The two intersecting roads meet at a _________ right angle.",
    "sentencePt": "As duas estradas que se cruzam encontram-se em ângulo reto perpendicular.",
    "exampleEn": "The two intersecting roads meet at a Perpendicular right angle.",
    "examplePt": "As duas estradas que se cruzam encontram-se em ângulo reto perpendicular.",
    "gapWord": "Perpendicular",
    "question": "Como se diz 'Perpendicular' em inglês?",
    "hint": "Reta ou plano que forma ângulo de 90° com outro.",
    "rationale": "'Perpendicular' (ˌpɜːr.pənˈdɪk.jə.lər): Reta ou plano que forma ângulo de 90° com outro.",
    "options": [
      {
        "id": "A",
        "text": "PYRAMIDyramid",
        "isCorrect": false,
        "rationale": "'PYRAMIDyramid' significa 'Pirâmide', não 'Perpendicular'."
      },
      {
        "id": "B",
        "text": "TORUSorus",
        "isCorrect": false,
        "rationale": "'TORUSorus' significa 'Toro / Superfície Toroidal', não 'Perpendicular'."
      },
      {
        "id": "C",
        "text": "Perpendicular",
        "isCorrect": true,
        "rationale": "'Perpendicular' é a tradução correta para 'Perpendicular'."
      },
      {
        "id": "D",
        "text": "VECTORector",
        "isCorrect": false,
        "rationale": "'VECTORector' significa 'Vetor', não 'Perpendicular'."
      }
    ]
  },
  {
    "id": "sql-geo-m-24",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Tangent",
    "wordPt": "Tangente",
    "phonetic": "ˈtæn.dʒənt",
    "sentence": "A _________ line touches a curve at exactly one point.",
    "sentencePt": "Uma reta tangente toca uma curva em exatamente um ponto.",
    "exampleEn": "A Tangent line touches a curve at exactly one point.",
    "examplePt": "Uma reta tangente toca uma curva em exatamente um ponto.",
    "gapWord": "Tangent",
    "question": "Como se diz 'Tangente' em inglês?",
    "hint": "Linha que toca uma curva sem cruzá-la naquele ponto.",
    "rationale": "'Tangent' (ˈtæn.dʒənt): Linha que toca uma curva sem cruzá-la naquele ponto.",
    "options": [
      {
        "id": "A",
        "text": "PERIMETERerimeter",
        "isCorrect": false,
        "rationale": "'PERIMETERerimeter' significa 'Perímetro', não 'Tangente'."
      },
      {
        "id": "B",
        "text": "CIRCUMFERENCEircumference",
        "isCorrect": false,
        "rationale": "'CIRCUMFERENCEircumference' significa 'Circunferência', não 'Tangente'."
      },
      {
        "id": "C",
        "text": "SECANTecant",
        "isCorrect": false,
        "rationale": "'SECANTecant' significa 'Secante', não 'Tangente'."
      },
      {
        "id": "D",
        "text": "Tangent",
        "isCorrect": true,
        "rationale": "'Tangent' é a tradução correta para 'Tangente'."
      }
    ]
  },
  {
    "id": "sql-geo-m-25",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Secant",
    "wordPt": "Secante",
    "phonetic": "ˈsiː.kənt",
    "sentence": "A _________ line intersects a curve at two distinct points.",
    "sentencePt": "Uma linha secante intercepta uma curva em dois pontos distintos.",
    "exampleEn": "A Secant line intersects a curve at two distinct points.",
    "examplePt": "Uma linha secante intercepta uma curva em dois pontos distintos.",
    "gapWord": "Secant",
    "question": "Como se diz 'Secante' em inglês?",
    "hint": "Reta que corta uma curva ou circunferência em múltiplos pontos.",
    "rationale": "'Secant' (ˈsiː.kənt): Reta que corta uma curva ou circunferência em múltiplos pontos.",
    "options": [
      {
        "id": "A",
        "text": "Secant",
        "isCorrect": true,
        "rationale": "'Secant' é a tradução correta para 'Secante'."
      },
      {
        "id": "B",
        "text": "ASYMMETRYsymmetry",
        "isCorrect": false,
        "rationale": "'ASYMMETRYsymmetry' significa 'Assimetria', não 'Secante'."
      },
      {
        "id": "C",
        "text": "CHORDhord",
        "isCorrect": false,
        "rationale": "'CHORDhord' significa 'Corda Geométrica', não 'Secante'."
      },
      {
        "id": "D",
        "text": "RECTANGLEectangle",
        "isCorrect": false,
        "rationale": "'RECTANGLEectangle' significa 'Retângulo', não 'Secante'."
      }
    ]
  },
  {
    "id": "sql-geo-m-26",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Symmetry",
    "wordPt": "Simetria",
    "phonetic": "ˈsɪm.ə.tri",
    "sentence": "A butterfly's wings exhibit bilateral _________.",
    "sentencePt": "As asas de uma borboleta exibem simetria bilateral.",
    "exampleEn": "A butterfly's wings exhibit bilateral Symmetry.",
    "examplePt": "As asas de uma borboleta exibem simetria bilateral.",
    "gapWord": "Symmetry",
    "question": "Como se diz 'Simetria' em inglês?",
    "hint": "Correspondência exata de forma e posição em lados opostos.",
    "rationale": "'Symmetry' (ˈsɪm.ə.tri): Correspondência exata de forma e posição em lados opostos.",
    "options": [
      {
        "id": "A",
        "text": "HEXAGONexagon",
        "isCorrect": false,
        "rationale": "'HEXAGONexagon' significa 'Hexágono', não 'Simetria'."
      },
      {
        "id": "B",
        "text": "Symmetry",
        "isCorrect": true,
        "rationale": "'Symmetry' é a tradução correta para 'Simetria'."
      },
      {
        "id": "C",
        "text": "PRISMrism",
        "isCorrect": false,
        "rationale": "'PRISMrism' significa 'Prisma', não 'Simetria'."
      },
      {
        "id": "D",
        "text": "DEGREEegree",
        "isCorrect": false,
        "rationale": "'DEGREEegree' significa 'Grau Geométrico', não 'Simetria'."
      }
    ]
  },
  {
    "id": "sql-geo-m-27",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Asymmetry",
    "wordPt": "Assimetria",
    "phonetic": "eɪˈsɪm.ə.tri",
    "sentence": "An irregular polygon displays noticeable visual _________.",
    "sentencePt": "Um polígono irregular exibe perceptível assimetria visual.",
    "exampleEn": "An irregular polygon displays noticeable visual Asymmetry.",
    "examplePt": "Um polígono irregular exibe perceptível assimetria visual.",
    "gapWord": "Asymmetry",
    "question": "Como se diz 'Assimetria' em inglês?",
    "hint": "Falta ou ausência de simetria entre partes de um todo.",
    "rationale": "'Asymmetry' (eɪˈsɪm.ə.tri): Falta ou ausência de simetria entre partes de um todo.",
    "options": [
      {
        "id": "A",
        "text": "SEGMENTegment",
        "isCorrect": false,
        "rationale": "'SEGMENTegment' significa 'Segmento de Reta', não 'Assimetria'."
      },
      {
        "id": "B",
        "text": "WIDTHidth",
        "isCorrect": false,
        "rationale": "'WIDTHidth' significa 'Largura', não 'Assimetria'."
      },
      {
        "id": "C",
        "text": "Asymmetry",
        "isCorrect": true,
        "rationale": "'Asymmetry' é a tradução correta para 'Assimetria'."
      },
      {
        "id": "D",
        "text": "HEXAGONexagon",
        "isCorrect": false,
        "rationale": "'HEXAGONexagon' significa 'Hexágono', não 'Assimetria'."
      }
    ]
  },
  {
    "id": "sql-geo-m-28",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Dimension",
    "wordPt": "Dimensão",
    "phonetic": "daɪˈmɛn.ʃən",
    "sentence": "Length, width, and height represent spatial _________.",
    "sentencePt": "Comprimento, largura e altura representam dimensão espacial.",
    "exampleEn": "Length, width, and height represent spatial Dimension.",
    "examplePt": "Comprimento, largura e altura representam dimensão espacial.",
    "gapWord": "Dimension",
    "question": "Como se diz 'Dimensão' em inglês?",
    "hint": "Medida de extensão em uma direção particular.",
    "rationale": "'Dimension' (daɪˈmɛn.ʃən): Medida de extensão em uma direção particular.",
    "options": [
      {
        "id": "A",
        "text": "RADIANadian",
        "isCorrect": false,
        "rationale": "'RADIANadian' significa 'Radiano', não 'Dimensão'."
      },
      {
        "id": "B",
        "text": "VECTORector",
        "isCorrect": false,
        "rationale": "'VECTORector' significa 'Vetor', não 'Dimensão'."
      },
      {
        "id": "C",
        "text": "SEGMENTegment",
        "isCorrect": false,
        "rationale": "'SEGMENTegment' significa 'Segmento de Reta', não 'Dimensão'."
      },
      {
        "id": "D",
        "text": "Dimension",
        "isCorrect": true,
        "rationale": "'Dimension' é a tradução correta para 'Dimensão'."
      }
    ]
  },
  {
    "id": "sql-geo-m-29",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Height",
    "wordPt": "Altura",
    "phonetic": "haɪt",
    "sentence": "Measure vertical _________ from the base to the top.",
    "sentencePt": "Meça a altura vertical da base até o topo.",
    "exampleEn": "Measure vertical Height from the base to the top.",
    "examplePt": "Meça a altura vertical da base até o topo.",
    "gapWord": "Height",
    "question": "Como se diz 'Altura' em inglês?",
    "hint": "Dimensão vertical perpendicular à base.",
    "rationale": "'Height' (haɪt): Dimensão vertical perpendicular à base.",
    "options": [
      {
        "id": "A",
        "text": "Height",
        "isCorrect": true,
        "rationale": "'Height' é a tradução correta para 'Altura'."
      },
      {
        "id": "B",
        "text": "CYLINDERylinder",
        "isCorrect": false,
        "rationale": "'CYLINDERylinder' significa 'Cilindro', não 'Altura'."
      },
      {
        "id": "C",
        "text": "VERTEXertex",
        "isCorrect": false,
        "rationale": "'VERTEXertex' significa 'Vértice', não 'Altura'."
      },
      {
        "id": "D",
        "text": "PENTAGONentagon",
        "isCorrect": false,
        "rationale": "'PENTAGONentagon' significa 'Pentágono', não 'Altura'."
      }
    ]
  },
  {
    "id": "sql-geo-m-30",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Width",
    "wordPt": "Largura",
    "phonetic": "wɪdθ",
    "sentence": "The doorway has a total _________ of eighty centimeters.",
    "sentencePt": "A porta tem uma largura total de oitenta centímetros.",
    "exampleEn": "The doorway has a total Width of eighty centimeters.",
    "examplePt": "A porta tem uma largura total de oitenta centímetros.",
    "gapWord": "Width",
    "question": "Como se diz 'Largura' em inglês?",
    "hint": "Dimensão horizontal transversal de uma figura.",
    "rationale": "'Width' (wɪdθ): Dimensão horizontal transversal de uma figura.",
    "options": [
      {
        "id": "A",
        "text": "RECTANGLEectangle",
        "isCorrect": false,
        "rationale": "'RECTANGLEectangle' significa 'Retângulo', não 'Largura'."
      },
      {
        "id": "B",
        "text": "Width",
        "isCorrect": true,
        "rationale": "'Width' é a tradução correta para 'Largura'."
      },
      {
        "id": "C",
        "text": "ASYMMETRYsymmetry",
        "isCorrect": false,
        "rationale": "'ASYMMETRYsymmetry' significa 'Assimetria', não 'Largura'."
      },
      {
        "id": "D",
        "text": "HEIGHTeight",
        "isCorrect": false,
        "rationale": "'HEIGHTeight' significa 'Altura', não 'Largura'."
      }
    ]
  },
  {
    "id": "sql-geo-m-31",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Length",
    "wordPt": "Comprimento",
    "phonetic": "lɛŋkθ",
    "sentence": "Measure the total _________ of the wooden board.",
    "sentencePt": "Meça o comprimento total da tábua de madeira.",
    "exampleEn": "Measure the total Length of the wooden board.",
    "examplePt": "Meça o comprimento total da tábua de madeira.",
    "gapWord": "Length",
    "question": "Como se diz 'Comprimento' em inglês?",
    "hint": "Maior dimensão horizontal linear de um objeto.",
    "rationale": "'Length' (lɛŋkθ): Maior dimensão horizontal linear de um objeto.",
    "options": [
      {
        "id": "A",
        "text": "TRIANGLEriangle",
        "isCorrect": false,
        "rationale": "'TRIANGLEriangle' significa 'Triângulo', não 'Comprimento'."
      },
      {
        "id": "B",
        "text": "RECTANGLEectangle",
        "isCorrect": false,
        "rationale": "'RECTANGLEectangle' significa 'Retângulo', não 'Comprimento'."
      },
      {
        "id": "C",
        "text": "Length",
        "isCorrect": true,
        "rationale": "'Length' é a tradução correta para 'Comprimento'."
      },
      {
        "id": "D",
        "text": "VERTICESertices",
        "isCorrect": false,
        "rationale": "'VERTICESertices' significa 'Vértices', não 'Comprimento'."
      }
    ]
  },
  {
    "id": "sql-geo-m-32",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Depth",
    "wordPt": "Profundidade",
    "phonetic": "dɛpθ",
    "sentence": "The swimming pool reaches a maximum _________ of three meters.",
    "sentencePt": "A piscina atinge uma profundidade máxima de três metros.",
    "exampleEn": "The swimming pool reaches a maximum Depth of three meters.",
    "examplePt": "A piscina atinge uma profundidade máxima de três metros.",
    "gapWord": "Depth",
    "question": "Como se diz 'Profundidade' em inglês?",
    "hint": "Dimensão vertical ou horizontal para o fundo.",
    "rationale": "'Depth' (dɛpθ): Dimensão vertical ou horizontal para o fundo.",
    "options": [
      {
        "id": "A",
        "text": "PERPENDICULARerpendicular",
        "isCorrect": false,
        "rationale": "'PERPENDICULARerpendicular' significa 'Perpendicular', não 'Profundidade'."
      },
      {
        "id": "B",
        "text": "VERTICESertices",
        "isCorrect": false,
        "rationale": "'VERTICESertices' significa 'Vértices', não 'Profundidade'."
      },
      {
        "id": "C",
        "text": "AREArea",
        "isCorrect": false,
        "rationale": "'AREArea' significa 'Área', não 'Profundidade'."
      },
      {
        "id": "D",
        "text": "Depth",
        "isCorrect": true,
        "rationale": "'Depth' é a tradução correta para 'Profundidade'."
      }
    ]
  },
  {
    "id": "sql-geo-m-33",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Breadth",
    "wordPt": "Extensão / Largura Ampla",
    "phonetic": "brɛdθ",
    "sentence": "Surveyors recorded the full _________ of the river valley.",
    "sentencePt": "Topógrafos registraram a extensão completa do vale do rio.",
    "exampleEn": "Surveyors recorded the full Breadth of the river valley.",
    "examplePt": "Topógrafos registraram a extensão completa do vale do rio.",
    "gapWord": "Breadth",
    "question": "Como se diz 'Extensão / Largura Ampla' em inglês?",
    "hint": "Largura total de lado a lado.",
    "rationale": "'Breadth' (brɛdθ): Largura total de lado a lado.",
    "options": [
      {
        "id": "A",
        "text": "Breadth",
        "isCorrect": true,
        "rationale": "'Breadth' é a tradução correta para 'Extensão / Largura Ampla'."
      },
      {
        "id": "B",
        "text": "ASYMMETRYsymmetry",
        "isCorrect": false,
        "rationale": "'ASYMMETRYsymmetry' significa 'Assimetria', não 'Extensão / Largura Ampla'."
      },
      {
        "id": "C",
        "text": "OCTAGONctagon",
        "isCorrect": false,
        "rationale": "'OCTAGONctagon' significa 'Octógono', não 'Extensão / Largura Ampla'."
      },
      {
        "id": "D",
        "text": "SPHEREphere",
        "isCorrect": false,
        "rationale": "'SPHEREphere' significa 'Esfera', não 'Extensão / Largura Ampla'."
      }
    ]
  },
  {
    "id": "sql-geo-m-34",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Contour",
    "wordPt": "Contorno / Linha de Nível",
    "phonetic": "ˈkɑːn.tʊr",
    "sentence": "Topographic maps use _________ lines to indicate elevation.",
    "sentencePt": "Mapas topográficos usam curvas de contorno para indicar elevação.",
    "exampleEn": "Topographic maps use Contour lines to indicate elevation.",
    "examplePt": "Mapas topográficos usam curvas de contorno para indicar elevação.",
    "gapWord": "Contour",
    "question": "Como se diz 'Contorno / Linha de Nível' em inglês?",
    "hint": "Linha que delimita ou define a borda externa.",
    "rationale": "'Contour' (ˈkɑːn.tʊr): Linha que delimita ou define a borda externa.",
    "options": [
      {
        "id": "A",
        "text": "PERPENDICULARerpendicular",
        "isCorrect": false,
        "rationale": "'PERPENDICULARerpendicular' significa 'Perpendicular', não 'Contorno / Linha de Nível'."
      },
      {
        "id": "B",
        "text": "Contour",
        "isCorrect": true,
        "rationale": "'Contour' é a tradução correta para 'Contorno / Linha de Nível'."
      },
      {
        "id": "C",
        "text": "BREADTHreadth",
        "isCorrect": false,
        "rationale": "'BREADTHreadth' significa 'Extensão / Largura Ampla', não 'Contorno / Linha de Nível'."
      },
      {
        "id": "D",
        "text": "VERTEXertex",
        "isCorrect": false,
        "rationale": "'VERTEXertex' significa 'Vértice', não 'Contorno / Linha de Nível'."
      }
    ]
  },
  {
    "id": "sql-geo-m-35",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Outline",
    "wordPt": "Delineamento / Esboço Perimétrico",
    "phonetic": "ˈaʊtˌlaɪn",
    "sentence": "Trace the distinct _________ of your hand on paper.",
    "sentencePt": "Trace o contorno nítido da sua mão no papel.",
    "exampleEn": "Trace the distinct Outline of your hand on paper.",
    "examplePt": "Trace o contorno nítido da sua mão no papel.",
    "gapWord": "Outline",
    "question": "Como se diz 'Delineamento / Esboço Perimétrico' em inglês?",
    "hint": "Linha externa que define a silhueta de uma forma.",
    "rationale": "'Outline' (ˈaʊtˌlaɪn): Linha externa que define a silhueta de uma forma.",
    "options": [
      {
        "id": "A",
        "text": "VOLUMEolume",
        "isCorrect": false,
        "rationale": "'VOLUMEolume' significa 'Volume', não 'Delineamento / Esboço Perimétrico'."
      },
      {
        "id": "B",
        "text": "CIRCUMFERENCEircumference",
        "isCorrect": false,
        "rationale": "'CIRCUMFERENCEircumference' significa 'Circunferência', não 'Delineamento / Esboço Perimétrico'."
      },
      {
        "id": "C",
        "text": "Outline",
        "isCorrect": true,
        "rationale": "'Outline' é a tradução correta para 'Delineamento / Esboço Perimétrico'."
      },
      {
        "id": "D",
        "text": "VERTEXertex",
        "isCorrect": false,
        "rationale": "'VERTEXertex' significa 'Vértice', não 'Delineamento / Esboço Perimétrico'."
      }
    ]
  },
  {
    "id": "sql-geo-m-36",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Pattern",
    "wordPt": "Padrão Geométrico",
    "phonetic": "ˈpæt.ərn",
    "sentence": "Tessellating tiles form a recurring geometric _________.",
    "sentencePt": "Azulejos articulados formam um padrão geométrico recorrente.",
    "exampleEn": "Tessellating tiles form a recurring geometric Pattern.",
    "examplePt": "Azulejos articulados formam um padrão geométrico recorrente.",
    "gapWord": "Pattern",
    "question": "Como se diz 'Padrão Geométrico' em inglês?",
    "hint": "Arranjo ou repetição ordenada de figuras e elementos.",
    "rationale": "'Pattern' (ˈpæt.ərn): Arranjo ou repetição ordenada de figuras e elementos.",
    "options": [
      {
        "id": "A",
        "text": "DEPTHepth",
        "isCorrect": false,
        "rationale": "'DEPTHepth' significa 'Profundidade', não 'Padrão Geométrico'."
      },
      {
        "id": "B",
        "text": "TRAPEZOIDrapezoid",
        "isCorrect": false,
        "rationale": "'TRAPEZOIDrapezoid' significa 'Trapézio', não 'Padrão Geométrico'."
      },
      {
        "id": "C",
        "text": "AREArea",
        "isCorrect": false,
        "rationale": "'AREArea' significa 'Área', não 'Padrão Geométrico'."
      },
      {
        "id": "D",
        "text": "Pattern",
        "isCorrect": true,
        "rationale": "'Pattern' é a tradução correta para 'Padrão Geométrico'."
      }
    ]
  },
  {
    "id": "sql-geo-m-37",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Section",
    "wordPt": "Seção / Corte Transversal",
    "phonetic": "ˈsɛk.ʃən",
    "sentence": "A conical _________ results from slicing through a cone.",
    "sentencePt": "Uma seção cônica resulta do corte através de um cone.",
    "exampleEn": "A conical Section results from slicing through a cone.",
    "examplePt": "Uma seção cônica resulta do corte através de um cone.",
    "gapWord": "Section",
    "question": "Como se diz 'Seção / Corte Transversal' em inglês?",
    "hint": "Superfície gerada pelo corte transversal de um sólido.",
    "rationale": "'Section' (ˈsɛk.ʃən): Superfície gerada pelo corte transversal de um sólido.",
    "options": [
      {
        "id": "A",
        "text": "Section",
        "isCorrect": true,
        "rationale": "'Section' é a tradução correta para 'Seção / Corte Transversal'."
      },
      {
        "id": "B",
        "text": "HEIGHTeight",
        "isCorrect": false,
        "rationale": "'HEIGHTeight' significa 'Altura', não 'Seção / Corte Transversal'."
      },
      {
        "id": "C",
        "text": "PARALLELarallel",
        "isCorrect": false,
        "rationale": "'PARALLELarallel' significa 'Paralelo', não 'Seção / Corte Transversal'."
      },
      {
        "id": "D",
        "text": "DEPTHepth",
        "isCorrect": false,
        "rationale": "'DEPTHepth' significa 'Profundidade', não 'Seção / Corte Transversal'."
      }
    ]
  },
  {
    "id": "sql-geo-m-38",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Segment",
    "wordPt": "Segmento de Reta",
    "phonetic": "ˈsɛɡ.mənt",
    "sentence": "A line _________ has two clearly defined endpoints.",
    "sentencePt": "Um segmento de reta possui dois pontos finais claramente definidos.",
    "exampleEn": "A line Segment has two clearly defined endpoints.",
    "examplePt": "Um segmento de reta possui dois pontos finais claramente definidos.",
    "gapWord": "Segment",
    "question": "Como se diz 'Segmento de Reta' em inglês?",
    "hint": "Parte de uma reta limitada por dois pontos extremos.",
    "rationale": "'Segment' (ˈsɛɡ.mənt): Parte de uma reta limitada por dois pontos extremos.",
    "options": [
      {
        "id": "A",
        "text": "DIMENSIONimension",
        "isCorrect": false,
        "rationale": "'DIMENSIONimension' significa 'Dimensão', não 'Segmento de Reta'."
      },
      {
        "id": "B",
        "text": "Segment",
        "isCorrect": true,
        "rationale": "'Segment' é a tradução correta para 'Segmento de Reta'."
      },
      {
        "id": "C",
        "text": "PERPENDICULARerpendicular",
        "isCorrect": false,
        "rationale": "'PERPENDICULARerpendicular' significa 'Perpendicular', não 'Segmento de Reta'."
      },
      {
        "id": "D",
        "text": "ELLIPSEllipse",
        "isCorrect": false,
        "rationale": "'ELLIPSEllipse' significa 'Elipse', não 'Segmento de Reta'."
      }
    ]
  },
  {
    "id": "sql-geo-m-39",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Vector",
    "wordPt": "Vetor",
    "phonetic": "ˈvɛk.tər",
    "sentence": "Velocity is modeled mathematically as a directed _________.",
    "sentencePt": "Velocidade é modelada matematicamente como um vetor com direção.",
    "exampleEn": "Velocity is modeled mathematically as a directed Vector.",
    "examplePt": "Velocidade é modelada matematicamente como um vetor com direção.",
    "gapWord": "Vector",
    "question": "Como se diz 'Vetor' em inglês?",
    "hint": "Entidade geométrica com magnitude, direção e sentido.",
    "rationale": "'Vector' (ˈvɛk.tər): Entidade geométrica com magnitude, direção e sentido.",
    "options": [
      {
        "id": "A",
        "text": "RADIANadian",
        "isCorrect": false,
        "rationale": "'RADIANadian' significa 'Radiano', não 'Vetor'."
      },
      {
        "id": "B",
        "text": "SPIRALpiral",
        "isCorrect": false,
        "rationale": "'SPIRALpiral' significa 'Espiral', não 'Vetor'."
      },
      {
        "id": "C",
        "text": "Vector",
        "isCorrect": true,
        "rationale": "'Vector' é a tradução correta para 'Vetor'."
      },
      {
        "id": "D",
        "text": "PRISMrism",
        "isCorrect": false,
        "rationale": "'PRISMrism' significa 'Prisma', não 'Vetor'."
      }
    ]
  },
  {
    "id": "sql-geo-m-40",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Matrix",
    "wordPt": "Matriz",
    "phonetic": "ˈmeɪ.trɪks",
    "sentence": "Linear transformations are computed using a mathematical _________.",
    "sentencePt": "Transformações lineares são calculadas usando uma matriz matemática.",
    "exampleEn": "Linear transformations are computed using a mathematical Matrix.",
    "examplePt": "Transformações lineares são calculadas usando uma matriz matemática.",
    "gapWord": "Matrix",
    "question": "Como se diz 'Matriz' em inglês?",
    "hint": "Tabela retangular ordenada de números dispostos em linhas e colunas.",
    "rationale": "'Matrix' (ˈmeɪ.trɪks): Tabela retangular ordenada de números dispostos em linhas e colunas.",
    "options": [
      {
        "id": "A",
        "text": "PARALLELarallel",
        "isCorrect": false,
        "rationale": "'PARALLELarallel' significa 'Paralelo', não 'Matriz'."
      },
      {
        "id": "B",
        "text": "VECTORector",
        "isCorrect": false,
        "rationale": "'VECTORector' significa 'Vetor', não 'Matriz'."
      },
      {
        "id": "C",
        "text": "BREADTHreadth",
        "isCorrect": false,
        "rationale": "'BREADTHreadth' significa 'Extensão / Largura Ampla', não 'Matriz'."
      },
      {
        "id": "D",
        "text": "Matrix",
        "isCorrect": true,
        "rationale": "'Matrix' é a tradução correta para 'Matriz'."
      }
    ]
  },
  {
    "id": "sql-geo-m-41",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Prism",
    "wordPt": "Prisma",
    "phonetic": "ˈprɪz.əm",
    "sentence": "A triangular _________ refracts white light into a rainbow.",
    "sentencePt": "Um prisma triangular refrata a luz branca em um arco-íris.",
    "exampleEn": "A triangular Prism refracts white light into a rainbow.",
    "examplePt": "Um prisma triangular refrata a luz branca em um arco-íris.",
    "gapWord": "Prism",
    "question": "Como se diz 'Prisma' em inglês?",
    "hint": "Poliedro com duas bases poligonais paralelas congruentes.",
    "rationale": "'Prism' (ˈprɪz.əm): Poliedro com duas bases poligonais paralelas congruentes.",
    "options": [
      {
        "id": "A",
        "text": "Prism",
        "isCorrect": true,
        "rationale": "'Prism' é a tradução correta para 'Prisma'."
      },
      {
        "id": "B",
        "text": "VOLUMEolume",
        "isCorrect": false,
        "rationale": "'VOLUMEolume' significa 'Volume', não 'Prisma'."
      },
      {
        "id": "C",
        "text": "RHOMBUShombus",
        "isCorrect": false,
        "rationale": "'RHOMBUShombus' significa 'Losango', não 'Prisma'."
      },
      {
        "id": "D",
        "text": "VERTICESertices",
        "isCorrect": false,
        "rationale": "'VERTICESertices' significa 'Vértices', não 'Prisma'."
      }
    ]
  },
  {
    "id": "sql-geo-m-42",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Torus",
    "wordPt": "Toro / Superfície Toroidal",
    "phonetic": "ˈtɔːr.əs",
    "sentence": "A donut has the geometric topology of a three-dimensional _________.",
    "sentencePt": "Uma rosquinha tem a topologia geométrica de um toro tridimensional.",
    "exampleEn": "A donut has the geometric topology of a three-dimensional Torus.",
    "examplePt": "Uma rosquinha tem a topologia geométrica de um toro tridimensional.",
    "gapWord": "Torus",
    "question": "Como se diz 'Toro / Superfície Toroidal' em inglês?",
    "hint": "Superfície de revolução gerada pela rotação de um círculo.",
    "rationale": "'Torus' (ˈtɔːr.əs): Superfície de revolução gerada pela rotação de um círculo.",
    "options": [
      {
        "id": "A",
        "text": "HEIGHTeight",
        "isCorrect": false,
        "rationale": "'HEIGHTeight' significa 'Altura', não 'Toro / Superfície Toroidal'."
      },
      {
        "id": "B",
        "text": "Torus",
        "isCorrect": true,
        "rationale": "'Torus' é a tradução correta para 'Toro / Superfície Toroidal'."
      },
      {
        "id": "C",
        "text": "OUTLINEutline",
        "isCorrect": false,
        "rationale": "'OUTLINEutline' significa 'Delineamento / Esboço Perimétrico', não 'Toro / Superfície Toroidal'."
      },
      {
        "id": "D",
        "text": "PRISMrism",
        "isCorrect": false,
        "rationale": "'PRISMrism' significa 'Prisma', não 'Toro / Superfície Toroidal'."
      }
    ]
  },
  {
    "id": "sql-geo-m-43",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Cone",
    "wordPt": "Cone",
    "phonetic": "koʊn",
    "sentence": "An ice cream treat is served in a crisp wafer _________.",
    "sentencePt": "Um sorvete é servido em um cone crocante de wafer.",
    "exampleEn": "An ice cream treat is served in a crisp wafer Cone.",
    "examplePt": "Um sorvete é servido em um cone crocante de wafer.",
    "gapWord": "Cone",
    "question": "Como se diz 'Cone' em inglês?",
    "hint": "Sólido com base circular que afunila até um ápice.",
    "rationale": "'Cone' (koʊn): Sólido com base circular que afunila até um ápice.",
    "options": [
      {
        "id": "A",
        "text": "BREADTHreadth",
        "isCorrect": false,
        "rationale": "'BREADTHreadth' significa 'Extensão / Largura Ampla', não 'Cone'."
      },
      {
        "id": "B",
        "text": "PERIMETERerimeter",
        "isCorrect": false,
        "rationale": "'PERIMETERerimeter' significa 'Perímetro', não 'Cone'."
      },
      {
        "id": "C",
        "text": "Cone",
        "isCorrect": true,
        "rationale": "'Cone' é a tradução correta para 'Cone'."
      },
      {
        "id": "D",
        "text": "HEIGHTeight",
        "isCorrect": false,
        "rationale": "'HEIGHTeight' significa 'Altura', não 'Cone'."
      }
    ]
  },
  {
    "id": "sql-geo-m-44",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Spiral",
    "wordPt": "Espiral",
    "phonetic": "ˈspaɪ.rəl",
    "sentence": "A nautilus shell grows in a logarithmic _________.",
    "sentencePt": "A concha do náutilo cresce em uma espiral logarítmica.",
    "exampleEn": "A nautilus shell grows in a logarithmic Spiral.",
    "examplePt": "A concha do náutilo cresce em uma espiral logarítmica.",
    "gapWord": "Spiral",
    "question": "Como se diz 'Espiral' em inglês?",
    "hint": "Curva plana que gira em torno de um ponto central afastando-se.",
    "rationale": "'Spiral' (ˈspaɪ.rəl): Curva plana que gira em torno de um ponto central afastando-se.",
    "options": [
      {
        "id": "A",
        "text": "HELIXelix",
        "isCorrect": false,
        "rationale": "'HELIXelix' significa 'Hélice Tridimensional', não 'Espiral'."
      },
      {
        "id": "B",
        "text": "TRIANGLEriangle",
        "isCorrect": false,
        "rationale": "'TRIANGLEriangle' significa 'Triângulo', não 'Espiral'."
      },
      {
        "id": "C",
        "text": "PATTERNattern",
        "isCorrect": false,
        "rationale": "'PATTERNattern' significa 'Padrão Geométrico', não 'Espiral'."
      },
      {
        "id": "D",
        "text": "Spiral",
        "isCorrect": true,
        "rationale": "'Spiral' é a tradução correta para 'Espiral'."
      }
    ]
  },
  {
    "id": "sql-geo-m-45",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Helix",
    "wordPt": "Hélice Tridimensional",
    "phonetic": "ˈhiː.lɪks",
    "sentence": "DNA molecules wind in a famous double _________ structure.",
    "sentencePt": "Moléculas de DNA enrolam-se em uma famosa estrutura de dupla hélice.",
    "exampleEn": "DNA molecules wind in a famous double Helix structure.",
    "examplePt": "Moléculas de DNA enrolam-se em uma famosa estrutura de dupla hélice.",
    "gapWord": "Helix",
    "question": "Como se diz 'Hélice Tridimensional' em inglês?",
    "hint": "Curva tridimensional enrolada uniformemente sobre um cilindro.",
    "rationale": "'Helix' (ˈhiː.lɪks): Curva tridimensional enrolada uniformemente sobre um cilindro.",
    "options": [
      {
        "id": "A",
        "text": "Helix",
        "isCorrect": true,
        "rationale": "'Helix' é a tradução correta para 'Hélice Tridimensional'."
      },
      {
        "id": "B",
        "text": "HEXAGONexagon",
        "isCorrect": false,
        "rationale": "'HEXAGONexagon' significa 'Hexágono', não 'Hélice Tridimensional'."
      },
      {
        "id": "C",
        "text": "SECTIONection",
        "isCorrect": false,
        "rationale": "'SECTIONection' significa 'Seção / Corte Transversal', não 'Hélice Tridimensional'."
      },
      {
        "id": "D",
        "text": "DEGREEegree",
        "isCorrect": false,
        "rationale": "'DEGREEegree' significa 'Grau Geométrico', não 'Hélice Tridimensional'."
      }
    ]
  },
  {
    "id": "sql-geo-m-46",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Quadrant",
    "wordPt": "Quadrante",
    "phonetic": "ˈkwɑː.drənt",
    "sentence": "The Cartesian coordinate plane is divided into four _________ areas.",
    "sentencePt": "O plano de coordenadas cartesianas é dividido em quatro áreas quadrantes.",
    "exampleEn": "The Cartesian coordinate plane is divided into four Quadrant areas.",
    "examplePt": "O plano de coordenadas cartesianas é dividido em quatro áreas quadrantes.",
    "gapWord": "Quadrant",
    "question": "Como se diz 'Quadrante' em inglês?",
    "hint": "Uma das quatro seções delimitadas pelos eixos cartesianos.",
    "rationale": "'Quadrant' (ˈkwɑː.drənt): Uma das quatro seções delimitadas pelos eixos cartesianos.",
    "options": [
      {
        "id": "A",
        "text": "PRISMrism",
        "isCorrect": false,
        "rationale": "'PRISMrism' significa 'Prisma', não 'Quadrante'."
      },
      {
        "id": "B",
        "text": "Quadrant",
        "isCorrect": true,
        "rationale": "'Quadrant' é a tradução correta para 'Quadrante'."
      },
      {
        "id": "C",
        "text": "LENGTHength",
        "isCorrect": false,
        "rationale": "'LENGTHength' significa 'Comprimento', não 'Quadrante'."
      },
      {
        "id": "D",
        "text": "CHORDhord",
        "isCorrect": false,
        "rationale": "'CHORDhord' significa 'Corda Geométrica', não 'Quadrante'."
      }
    ]
  },
  {
    "id": "sql-geo-m-47",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Bisector",
    "wordPt": "Bissetriz",
    "phonetic": "baɪˈsɛk.tər",
    "sentence": "The angle _________ splits an angle into two equal halves.",
    "sentencePt": "A bissetriz do ângulo divide um ângulo em duas metades iguais.",
    "exampleEn": "The angle Bisector splits an angle into two equal halves.",
    "examplePt": "A bissetriz do ângulo divide um ângulo em duas metades iguais.",
    "gapWord": "Bisector",
    "question": "Como se diz 'Bissetriz' em inglês?",
    "hint": "Reta que divide um ângulo ou segmento em duas partes congruentes.",
    "rationale": "'Bisector' (baɪˈsɛk.tər): Reta que divide um ângulo ou segmento em duas partes congruentes.",
    "options": [
      {
        "id": "A",
        "text": "VERTEXertex",
        "isCorrect": false,
        "rationale": "'VERTEXertex' significa 'Vértice', não 'Bissetriz'."
      },
      {
        "id": "B",
        "text": "RADIUSadius",
        "isCorrect": false,
        "rationale": "'RADIUSadius' significa 'Raio Geométrico', não 'Bissetriz'."
      },
      {
        "id": "C",
        "text": "Bisector",
        "isCorrect": true,
        "rationale": "'Bisector' é a tradução correta para 'Bissetriz'."
      },
      {
        "id": "D",
        "text": "TORUSorus",
        "isCorrect": false,
        "rationale": "'TORUSorus' significa 'Toro / Superfície Toroidal', não 'Bissetriz'."
      }
    ]
  },
  {
    "id": "sql-geo-m-48",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Chord",
    "wordPt": "Corda Geométrica",
    "phonetic": "kɔːrd",
    "sentence": "A line connecting two points on a circle is a _________.",
    "sentencePt": "Uma linha conectando dois pontos em um círculo é uma corda.",
    "exampleEn": "A line connecting two points on a circle is a Chord.",
    "examplePt": "Uma linha conectando dois pontos em um círculo é uma corda.",
    "gapWord": "Chord",
    "question": "Como se diz 'Corda Geométrica' em inglês?",
    "hint": "Segmento de reta cujas extremidades estão sobre uma curva.",
    "rationale": "'Chord' (kɔːrd): Segmento de reta cujas extremidades estão sobre uma curva.",
    "options": [
      {
        "id": "A",
        "text": "PYRAMIDyramid",
        "isCorrect": false,
        "rationale": "'PYRAMIDyramid' significa 'Pirâmide', não 'Corda Geométrica'."
      },
      {
        "id": "B",
        "text": "VECTORector",
        "isCorrect": false,
        "rationale": "'VECTORector' significa 'Vetor', não 'Corda Geométrica'."
      },
      {
        "id": "C",
        "text": "WIDTHidth",
        "isCorrect": false,
        "rationale": "'WIDTHidth' significa 'Largura', não 'Corda Geométrica'."
      },
      {
        "id": "D",
        "text": "Chord",
        "isCorrect": true,
        "rationale": "'Chord' é a tradução correta para 'Corda Geométrica'."
      }
    ]
  },
  {
    "id": "sql-geo-m-49",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Radian",
    "wordPt": "Radiano",
    "phonetic": "ˈreɪ.di.ən",
    "sentence": "A full circle equals two pi in circular _________ measurement.",
    "sentencePt": "Um círculo completo equivale a dois pi na medição circular em radianos.",
    "exampleEn": "A full circle equals two pi in circular Radian measurement.",
    "examplePt": "Um círculo completo equivale a dois pi na medição circular em radianos.",
    "gapWord": "Radian",
    "question": "Como se diz 'Radiano' em inglês?",
    "hint": "Unidade padrão de medição de ângulo no Sistema Internacional.",
    "rationale": "'Radian' (ˈreɪ.di.ən): Unidade padrão de medição de ângulo no Sistema Internacional.",
    "options": [
      {
        "id": "A",
        "text": "Radian",
        "isCorrect": true,
        "rationale": "'Radian' é a tradução correta para 'Radiano'."
      },
      {
        "id": "B",
        "text": "HELIXelix",
        "isCorrect": false,
        "rationale": "'HELIXelix' significa 'Hélice Tridimensional', não 'Radiano'."
      },
      {
        "id": "C",
        "text": "POLYGONolygon",
        "isCorrect": false,
        "rationale": "'POLYGONolygon' significa 'Polígono', não 'Radiano'."
      },
      {
        "id": "D",
        "text": "SPIRALpiral",
        "isCorrect": false,
        "rationale": "'SPIRALpiral' significa 'Espiral', não 'Radiano'."
      }
    ]
  },
  {
    "id": "sql-geo-m-50",
    "topic": "formas",
    "difficulty": "medio",
    "wordEn": "Degree",
    "wordPt": "Grau Geométrico",
    "phonetic": "dɪˈɡriː",
    "sentence": "A right angle measures exactly ninety _________.",
    "sentencePt": "Um ângulo reto mede exatamente noventa graus.",
    "exampleEn": "A right angle measures exactly ninety Degree.",
    "examplePt": "Um ângulo reto mede exatamente noventa graus.",
    "gapWord": "Degree",
    "question": "Como se diz 'Grau Geométrico' em inglês?",
    "hint": "Unidade de medida angular correspondente a 1/360 de uma rotação.",
    "rationale": "'Degree' (dɪˈɡriː): Unidade de medida angular correspondente a 1/360 de uma rotação.",
    "options": [
      {
        "id": "A",
        "text": "RADIUSadius",
        "isCorrect": false,
        "rationale": "'RADIUSadius' significa 'Raio Geométrico', não 'Grau Geométrico'."
      },
      {
        "id": "B",
        "text": "Degree",
        "isCorrect": true,
        "rationale": "'Degree' é a tradução correta para 'Grau Geométrico'."
      },
      {
        "id": "C",
        "text": "HELIXelix",
        "isCorrect": false,
        "rationale": "'HELIXelix' significa 'Hélice Tridimensional', não 'Grau Geométrico'."
      },
      {
        "id": "D",
        "text": "CONTOURontour",
        "isCorrect": false,
        "rationale": "'CONTOURontour' significa 'Contorno / Linha de Nível', não 'Grau Geométrico'."
      }
    ]
  },
  {
    "id": "sql-geo-d-01",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Dodecahedron",
    "wordPt": "Dodecaedro",
    "phonetic": "ˌdoʊ.dɛk.əˈhiː.drən",
    "sentence": "A regular _________ has twelve pentagonal faces.",
    "sentencePt": "Um dodecaedro regular possui doze faces pentagonais.",
    "exampleEn": "A regular Dodecahedron has twelve pentagonal faces.",
    "examplePt": "Um dodecaedro regular possui doze faces pentagonais.",
    "gapWord": "Dodecahedron",
    "question": "Como se diz 'Dodecaedro' em inglês?",
    "hint": "Poliedro regular platônico com 12 faces pentagonais.",
    "rationale": "'Dodecahedron' (ˌdoʊ.dɛk.əˈhiː.drən): Poliedro regular platônico com 12 faces pentagonais.",
    "options": [
      {
        "id": "A",
        "text": "Dodecahedron",
        "isCorrect": true,
        "rationale": "'Dodecahedron' é a tradução correta para 'Dodecaedro'."
      },
      {
        "id": "B",
        "text": "ASTROIDstroid",
        "isCorrect": false,
        "rationale": "'ASTROIDstroid' significa 'Astroide', não 'Dodecaedro'."
      },
      {
        "id": "C",
        "text": "POLYTOPEolytope",
        "isCorrect": false,
        "rationale": "'POLYTOPEolytope' significa 'Politopo', não 'Dodecaedro'."
      },
      {
        "id": "D",
        "text": "SPHEROIDpheroid",
        "isCorrect": false,
        "rationale": "'SPHEROIDpheroid' significa 'Esferoide', não 'Dodecaedro'."
      }
    ]
  },
  {
    "id": "sql-geo-d-02",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Icosahedron",
    "wordPt": "Icosaedro",
    "phonetic": "aɪˌkɑː.səˈhiː.drən",
    "sentence": "A standard 20-sided die is a regular geometric _________.",
    "sentencePt": "Um dado padrão de 20 faces é um icosaedro geométrico regular.",
    "exampleEn": "A standard 20-sided die is a regular geometric Icosahedron.",
    "examplePt": "Um dado padrão de 20 faces é um icosaedro geométrico regular.",
    "gapWord": "Icosahedron",
    "question": "Como se diz 'Icosaedro' em inglês?",
    "hint": "Poliedro regular platônico com 20 faces triangulares equiláteras.",
    "rationale": "'Icosahedron' (aɪˌkɑː.səˈhiː.drən): Poliedro regular platônico com 20 faces triangulares equiláteras.",
    "options": [
      {
        "id": "A",
        "text": "ASYMPTOTEsymptote",
        "isCorrect": false,
        "rationale": "'ASYMPTOTEsymptote' significa 'Assíntota', não 'Icosaedro'."
      },
      {
        "id": "B",
        "text": "Icosahedron",
        "isCorrect": true,
        "rationale": "'Icosahedron' é a tradução correta para 'Icosaedro'."
      },
      {
        "id": "C",
        "text": "CATENARYatenary",
        "isCorrect": false,
        "rationale": "'CATENARYatenary' significa 'Catenária', não 'Icosaedro'."
      },
      {
        "id": "D",
        "text": "CURVATURESurvatures",
        "isCorrect": false,
        "rationale": "'CURVATURESurvatures' significa 'Curvaturas', não 'Icosaedro'."
      }
    ]
  },
  {
    "id": "sql-geo-d-03",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Tetrahedron",
    "wordPt": "Tetraedro",
    "phonetic": "ˌtɛt.rəˈhiː.drən",
    "sentence": "A triangular pyramid with four equal faces is a _________.",
    "sentencePt": "Uma pirâmide triangular com quatro faces iguais é um tetraedro.",
    "exampleEn": "A triangular pyramid with four equal faces is a Tetrahedron.",
    "examplePt": "Uma pirâmide triangular com quatro faces iguais é um tetraedro.",
    "gapWord": "Tetrahedron",
    "question": "Como se diz 'Tetraedro' em inglês?",
    "hint": "Poliedro platônico de quatro faces triangulares.",
    "rationale": "'Tetrahedron' (ˌtɛt.rəˈhiː.drən): Poliedro platônico de quatro faces triangulares.",
    "options": [
      {
        "id": "A",
        "text": "COPLANARITYoplanarity",
        "isCorrect": false,
        "rationale": "'COPLANARITYoplanarity' significa 'Coplanaridade', não 'Tetraedro'."
      },
      {
        "id": "B",
        "text": "HENDECAGONendecagon",
        "isCorrect": false,
        "rationale": "'HENDECAGONendecagon' significa 'Undecágono / Hendecágono', não 'Tetraedro'."
      },
      {
        "id": "C",
        "text": "Tetrahedron",
        "isCorrect": true,
        "rationale": "'Tetrahedron' é a tradução correta para 'Tetraedro'."
      },
      {
        "id": "D",
        "text": "CONICOIDonicoid",
        "isCorrect": false,
        "rationale": "'CONICOIDonicoid' significa 'Cônico / Quádrico Cônico', não 'Tetraedro'."
      }
    ]
  },
  {
    "id": "sql-geo-d-04",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Octahedron",
    "wordPt": "Octaedro",
    "phonetic": "ˌɑːk.təˈhiː.drən",
    "sentence": "An _________ possesses eight triangular equilateral faces.",
    "sentencePt": "Um octaedro possui oito faces triangulares equiláteras.",
    "exampleEn": "An Octahedron possesses eight triangular equilateral faces.",
    "examplePt": "Um octaedro possui oito faces triangulares equiláteras.",
    "gapWord": "Octahedron",
    "question": "Como se diz 'Octaedro' em inglês?",
    "hint": "Poliedro regular composto por 8 faces triangulares congruentes.",
    "rationale": "'Octahedron' (ˌɑːk.təˈhiː.drən): Poliedro regular composto por 8 faces triangulares congruentes.",
    "options": [
      {
        "id": "A",
        "text": "COPLANARITYoplanarity",
        "isCorrect": false,
        "rationale": "'COPLANARITYoplanarity' significa 'Coplanaridade', não 'Octaedro'."
      },
      {
        "id": "B",
        "text": "PARABOLOIDaraboloid",
        "isCorrect": false,
        "rationale": "'PARABOLOIDaraboloid' significa 'Paraboloide', não 'Octaedro'."
      },
      {
        "id": "C",
        "text": "FRACTALractal",
        "isCorrect": false,
        "rationale": "'FRACTALractal' significa 'Fractal', não 'Octaedro'."
      },
      {
        "id": "D",
        "text": "Octahedron",
        "isCorrect": true,
        "rationale": "'Octahedron' é a tradução correta para 'Octaedro'."
      }
    ]
  },
  {
    "id": "sql-geo-d-05",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Polyhedron",
    "wordPt": "Poliedro",
    "phonetic": "ˌpɑː.liˈhiː.drən",
    "sentence": "A three-dimensional solid with flat polygonal faces is a _________.",
    "sentencePt": "Um sólido tridimensional com faces poligonais planas é um poliedro.",
    "exampleEn": "A three-dimensional solid with flat polygonal faces is a Polyhedron.",
    "examplePt": "Um sólido tridimensional com faces poligonais planas é um poliedro.",
    "gapWord": "Polyhedron",
    "question": "Como se diz 'Poliedro' em inglês?",
    "hint": "Sólido tridimensional delimitado por faces poligonais planas.",
    "rationale": "'Polyhedron' (ˌpɑː.liˈhiː.drən): Sólido tridimensional delimitado por faces poligonais planas.",
    "options": [
      {
        "id": "A",
        "text": "Polyhedron",
        "isCorrect": true,
        "rationale": "'Polyhedron' é a tradução correta para 'Poliedro'."
      },
      {
        "id": "B",
        "text": "ORTHOGONALITYrthogonality",
        "isCorrect": false,
        "rationale": "'ORTHOGONALITYrthogonality' significa 'Ortogonalidade', não 'Poliedro'."
      },
      {
        "id": "C",
        "text": "DODECAHEDRONodecahedron",
        "isCorrect": false,
        "rationale": "'DODECAHEDRONodecahedron' significa 'Dodecaedro', não 'Poliedro'."
      },
      {
        "id": "D",
        "text": "SCALENEcalene",
        "isCorrect": false,
        "rationale": "'SCALENEcalene' significa 'Escaleno', não 'Poliedro'."
      }
    ]
  },
  {
    "id": "sql-geo-d-06",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Parallelogram",
    "wordPt": "Paralelogramo",
    "phonetic": "ˌpær.əˌlɛl.əˈɡræm",
    "sentence": "Opposite sides and angles are equal in every geometric _________.",
    "sentencePt": "Lados e ângulos opostos são iguais em todo paralelogramo geométrico.",
    "exampleEn": "Opposite sides and angles are equal in every geometric Parallelogram.",
    "examplePt": "Lados e ângulos opostos são iguais em todo paralelogramo geométrico.",
    "gapWord": "Parallelogram",
    "question": "Como se diz 'Paralelogramo' em inglês?",
    "hint": "Quadrilátero cujos lados opostos são paralelos.",
    "rationale": "'Parallelogram' (ˌpær.əˌlɛl.əˈɡræm): Quadrilátero cujos lados opostos são paralelos.",
    "options": [
      {
        "id": "A",
        "text": "SCALENEcalene",
        "isCorrect": false,
        "rationale": "'SCALENEcalene' significa 'Escaleno', não 'Paralelogramo'."
      },
      {
        "id": "B",
        "text": "Parallelogram",
        "isCorrect": true,
        "rationale": "'Parallelogram' é a tradução correta para 'Paralelogramo'."
      },
      {
        "id": "C",
        "text": "TRIGONOMETRICrigonometric",
        "isCorrect": false,
        "rationale": "'TRIGONOMETRICrigonometric' significa 'Trigonométrico', não 'Paralelogramo'."
      },
      {
        "id": "D",
        "text": "DODECAHEDRONodecahedron",
        "isCorrect": false,
        "rationale": "'DODECAHEDRONodecahedron' significa 'Dodecaedro', não 'Paralelogramo'."
      }
    ]
  },
  {
    "id": "sql-geo-d-07",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Hyperbola",
    "wordPt": "Hipérbole",
    "phonetic": "haɪˈpɜːr.bə.lə",
    "sentence": "A conic section with two open symmetrical branches is a _________.",
    "sentencePt": "Uma seção cônica com dois ramos abertos simétricos é uma hipérbole.",
    "exampleEn": "A conic section with two open symmetrical branches is a Hyperbola.",
    "examplePt": "Uma seção cônica com dois ramos abertos simétricos é uma hipérbole.",
    "gapWord": "Hyperbola",
    "question": "Como se diz 'Hipérbole' em inglês?",
    "hint": "Curva aberta gerada pela interseção de um cone com plano quase vertical.",
    "rationale": "'Hyperbola' (haɪˈpɜːr.bə.lə): Curva aberta gerada pela interseção de um cone com plano quase vertical.",
    "options": [
      {
        "id": "A",
        "text": "ASYMPTOTEsymptote",
        "isCorrect": false,
        "rationale": "'ASYMPTOTEsymptote' significa 'Assíntota', não 'Hipérbole'."
      },
      {
        "id": "B",
        "text": "HYPOTENUSEypotenuse",
        "isCorrect": false,
        "rationale": "'HYPOTENUSEypotenuse' significa 'Hipotenusa', não 'Hipérbole'."
      },
      {
        "id": "C",
        "text": "Hyperbola",
        "isCorrect": true,
        "rationale": "'Hyperbola' é a tradução correta para 'Hipérbole'."
      },
      {
        "id": "D",
        "text": "PARABOLOIDaraboloid",
        "isCorrect": false,
        "rationale": "'PARABOLOIDaraboloid' significa 'Paraboloide', não 'Hipérbole'."
      }
    ]
  },
  {
    "id": "sql-geo-d-08",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Parabola",
    "wordPt": "Parábola",
    "phonetic": "pəˈræb.ə.lə",
    "sentence": "The trajectory of a thrown projectile traces a symmetrical _________.",
    "sentencePt": "A trajetória de um projétil lançado descreve uma parábola simétrica.",
    "exampleEn": "The trajectory of a thrown projectile traces a symmetrical Parabola.",
    "examplePt": "A trajetória de um projétil lançado descreve uma parábola simétrica.",
    "gapWord": "Parabola",
    "question": "Como se diz 'Parábola' em inglês?",
    "hint": "Seção cônica equidistante de um foco e de uma diretriz.",
    "rationale": "'Parabola' (pəˈræb.ə.lə): Seção cônica equidistante de um foco e de uma diretriz.",
    "options": [
      {
        "id": "A",
        "text": "OCTAHEDRONctahedron",
        "isCorrect": false,
        "rationale": "'OCTAHEDRONctahedron' significa 'Octaedro', não 'Parábola'."
      },
      {
        "id": "B",
        "text": "CONCENTRICITYoncentricity",
        "isCorrect": false,
        "rationale": "'CONCENTRICITYoncentricity' significa 'Concentricidade', não 'Parábola'."
      },
      {
        "id": "C",
        "text": "STEREOTOMYtereotomy",
        "isCorrect": false,
        "rationale": "'STEREOTOMYtereotomy' significa 'Estereotomia', não 'Parábola'."
      },
      {
        "id": "D",
        "text": "Parabola",
        "isCorrect": true,
        "rationale": "'Parabola' é a tradução correta para 'Parábola'."
      }
    ]
  },
  {
    "id": "sql-geo-d-09",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Ellipsoid",
    "wordPt": "Elipsoide",
    "phonetic": "ɪˈlɪp.sɔɪd",
    "sentence": "Earth's actual shape closely resembles an oblate _________.",
    "sentencePt": "A forma real da Terra assemelha-se a um elipsoide oblato.",
    "exampleEn": "Earth's actual shape closely resembles an oblate Ellipsoid.",
    "examplePt": "A forma real da Terra assemelha-se a um elipsoide oblato.",
    "gapWord": "Ellipsoid",
    "question": "Como se diz 'Elipsoide' em inglês?",
    "hint": "Superfície quádrica tridimensional análoga à elipse bidimensional.",
    "rationale": "'Ellipsoid' (ɪˈlɪp.sɔɪd): Superfície quádrica tridimensional análoga à elipse bidimensional.",
    "options": [
      {
        "id": "A",
        "text": "Ellipsoid",
        "isCorrect": true,
        "rationale": "'Ellipsoid' é a tradução correta para 'Elipsoide'."
      },
      {
        "id": "B",
        "text": "PARABOLOIDaraboloid",
        "isCorrect": false,
        "rationale": "'PARABOLOIDaraboloid' significa 'Paraboloide', não 'Elipsoide'."
      },
      {
        "id": "C",
        "text": "POLYTOPEolytope",
        "isCorrect": false,
        "rationale": "'POLYTOPEolytope' significa 'Politopo', não 'Elipsoide'."
      },
      {
        "id": "D",
        "text": "TOPOLOGYopology",
        "isCorrect": false,
        "rationale": "'TOPOLOGYopology' significa 'Topologia', não 'Elipsoide'."
      }
    ]
  },
  {
    "id": "sql-geo-d-10",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Hyperboloid",
    "wordPt": "Hiperboloide",
    "phonetic": "haɪˈpɜːr.bə.lɔɪd",
    "sentence": "Cooling towers often use the structural strength of a _________.",
    "sentencePt": "Torres de resfriamento usam a força estrutural de um hiperboloide.",
    "exampleEn": "Cooling towers often use the structural strength of a Hyperboloid.",
    "examplePt": "Torres de resfriamento usam a força estrutural de um hiperboloide.",
    "gapWord": "Hyperboloid",
    "question": "Como se diz 'Hiperboloide' em inglês?",
    "hint": "Superfície gerada pela rotação ou translação de uma hipérbole.",
    "rationale": "'Hyperboloid' (haɪˈpɜːr.bə.lɔɪd): Superfície gerada pela rotação ou translação de uma hipérbole.",
    "options": [
      {
        "id": "A",
        "text": "CURVATURESurvatures",
        "isCorrect": false,
        "rationale": "'CURVATURESurvatures' significa 'Curvaturas', não 'Hiperboloide'."
      },
      {
        "id": "B",
        "text": "Hyperboloid",
        "isCorrect": true,
        "rationale": "'Hyperboloid' é a tradução correta para 'Hiperboloide'."
      },
      {
        "id": "C",
        "text": "DECAGONecagon",
        "isCorrect": false,
        "rationale": "'DECAGONecagon' significa 'Decágono', não 'Hiperboloide'."
      },
      {
        "id": "D",
        "text": "DODECAHEDRONodecahedron",
        "isCorrect": false,
        "rationale": "'DODECAHEDRONodecahedron' significa 'Dodecaedro', não 'Hiperboloide'."
      }
    ]
  },
  {
    "id": "sql-geo-d-11",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Paraboloid",
    "wordPt": "Paraboloide",
    "phonetic": "pəˈræb.ə.lɔɪd",
    "sentence": "Satellite dishes use a reflective circular _________ to focus signals.",
    "sentencePt": "Antenas parabólicas usam um paraboloide refletivo para focalizar sinais.",
    "exampleEn": "Satellite dishes use a reflective circular Paraboloid to focus signals.",
    "examplePt": "Antenas parabólicas usam um paraboloide refletivo para focalizar sinais.",
    "gapWord": "Paraboloid",
    "question": "Como se diz 'Paraboloide' em inglês?",
    "hint": "Superfície quádrica gerada pela rotação de uma parábola.",
    "rationale": "'Paraboloid' (pəˈræb.ə.lɔɪd): Superfície quádrica gerada pela rotação de uma parábola.",
    "options": [
      {
        "id": "A",
        "text": "GEODESICeodesic",
        "isCorrect": false,
        "rationale": "'GEODESICeodesic' significa 'Geodésica', não 'Paraboloide'."
      },
      {
        "id": "B",
        "text": "DODECAGONodecagon",
        "isCorrect": false,
        "rationale": "'DODECAGONodecagon' significa 'Dodecágono', não 'Paraboloide'."
      },
      {
        "id": "C",
        "text": "Paraboloid",
        "isCorrect": true,
        "rationale": "'Paraboloid' é a tradução correta para 'Paraboloide'."
      },
      {
        "id": "D",
        "text": "NONAGONonagon",
        "isCorrect": false,
        "rationale": "'NONAGONonagon' significa 'Eneágono / Nonágono', não 'Paraboloide'."
      }
    ]
  },
  {
    "id": "sql-geo-d-12",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Spheroid",
    "wordPt": "Esferoide",
    "phonetic": "ˈsfɪr.ɔɪd",
    "sentence": "Centrifugal force flattens the rotating planet into an oblate _________.",
    "sentencePt": "A força centrífuga achata o planeta giratório em um esferoide oblato.",
    "exampleEn": "Centrifugal force flattens the rotating planet into an oblate Spheroid.",
    "examplePt": "A força centrífuga achata o planeta giratório em um esferoide oblato.",
    "gapWord": "Spheroid",
    "question": "Como se diz 'Esferoide' em inglês?",
    "hint": "Elipsoide de revolução obtido pela rotação de uma elipse.",
    "rationale": "'Spheroid' (ˈsfɪr.ɔɪd): Elipsoide de revolução obtido pela rotação de uma elipse.",
    "options": [
      {
        "id": "A",
        "text": "HYPERBOLOIDyperboloid",
        "isCorrect": false,
        "rationale": "'HYPERBOLOIDyperboloid' significa 'Hiperboloide', não 'Esferoide'."
      },
      {
        "id": "B",
        "text": "PLANIMETRYlanimetry",
        "isCorrect": false,
        "rationale": "'PLANIMETRYlanimetry' significa 'Planimetria', não 'Esferoide'."
      },
      {
        "id": "C",
        "text": "GEODESICeodesic",
        "isCorrect": false,
        "rationale": "'GEODESICeodesic' significa 'Geodésica', não 'Esferoide'."
      },
      {
        "id": "D",
        "text": "Spheroid",
        "isCorrect": true,
        "rationale": "'Spheroid' é a tradução correta para 'Esferoide'."
      }
    ]
  },
  {
    "id": "sql-geo-d-13",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Geodesic",
    "wordPt": "Geodésica",
    "phonetic": "ˌdʒiː.əˈdɛs.ɪk",
    "sentence": "Airplanes fly along a _________ curve to minimize travel distance.",
    "sentencePt": "Aviões voam ao longo de uma curva geodésica para minimizar distância.",
    "exampleEn": "Airplanes fly along a Geodesic curve to minimize travel distance.",
    "examplePt": "Aviões voam ao longo de uma curva geodésica para minimizar distância.",
    "gapWord": "Geodesic",
    "question": "Como se diz 'Geodésica' em inglês?",
    "hint": "Curva que representa o caminho mais curto entre dois pontos em superfície curva.",
    "rationale": "'Geodesic' (ˌdʒiː.əˈdɛs.ɪk): Curva que representa o caminho mais curto entre dois pontos em superfície curva.",
    "options": [
      {
        "id": "A",
        "text": "Geodesic",
        "isCorrect": true,
        "rationale": "'Geodesic' é a tradução correta para 'Geodésica'."
      },
      {
        "id": "B",
        "text": "SCALENEcalene",
        "isCorrect": false,
        "rationale": "'SCALENEcalene' significa 'Escaleno', não 'Geodésica'."
      },
      {
        "id": "C",
        "text": "ISOMETRYsometry",
        "isCorrect": false,
        "rationale": "'ISOMETRYsometry' significa 'Isometria', não 'Geodésica'."
      },
      {
        "id": "D",
        "text": "PARABOLOIDaraboloid",
        "isCorrect": false,
        "rationale": "'PARABOLOIDaraboloid' significa 'Paraboloide', não 'Geodésica'."
      }
    ]
  },
  {
    "id": "sql-geo-d-14",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Tessellation",
    "wordPt": "Tesselação / Mosaico Regular",
    "phonetic": "ˌtɛs.əˈleɪ.ʃən",
    "sentence": "M.C. Escher created famous artworks based on intricate _________.",
    "sentencePt": "M.C. Escher criou famosas obras baseadas em tesselação complexa.",
    "exampleEn": "M.C. Escher created famous artworks based on intricate Tessellation.",
    "examplePt": "M.C. Escher criou famosas obras baseadas em tesselação complexa.",
    "gapWord": "Tessellation",
    "question": "Como se diz 'Tesselação / Mosaico Regular' em inglês?",
    "hint": "Recobrimento plano perfeito de figuras sem lacunas ou sobreposições.",
    "rationale": "'Tessellation' (ˌtɛs.əˈleɪ.ʃən): Recobrimento plano perfeito de figuras sem lacunas ou sobreposições.",
    "options": [
      {
        "id": "A",
        "text": "LEMNISCATEemniscate",
        "isCorrect": false,
        "rationale": "'LEMNISCATEemniscate' significa 'Lemniscata', não 'Tesselação / Mosaico Regular'."
      },
      {
        "id": "B",
        "text": "Tessellation",
        "isCorrect": true,
        "rationale": "'Tessellation' é a tradução correta para 'Tesselação / Mosaico Regular'."
      },
      {
        "id": "C",
        "text": "PARABOLAarabola",
        "isCorrect": false,
        "rationale": "'PARABOLAarabola' significa 'Parábola', não 'Tesselação / Mosaico Regular'."
      },
      {
        "id": "D",
        "text": "QUADRICuadric",
        "isCorrect": false,
        "rationale": "'QUADRICuadric' significa 'Quádrica', não 'Tesselação / Mosaico Regular'."
      }
    ]
  },
  {
    "id": "sql-geo-d-15",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Fractal",
    "wordPt": "Fractal",
    "phonetic": "ˈfræk.təl",
    "sentence": "Snowflakes and coastlines demonstrate self-similar _________ patterns.",
    "sentencePt": "Flocos de neve e litorais demonstram padrões fractais autossimilares.",
    "exampleEn": "Snowflakes and coastlines demonstrate self-similar Fractal patterns.",
    "examplePt": "Flocos de neve e litorais demonstram padrões fractais autossimilares.",
    "gapWord": "Fractal",
    "question": "Como se diz 'Fractal' em inglês?",
    "hint": "Objeto geométrico com estrutura complexa repetida em todas as escalas.",
    "rationale": "'Fractal' (ˈfræk.təl): Objeto geométrico com estrutura complexa repetida em todas as escalas.",
    "options": [
      {
        "id": "A",
        "text": "HYPOTENUSEypotenuse",
        "isCorrect": false,
        "rationale": "'HYPOTENUSEypotenuse' significa 'Hipotenusa', não 'Fractal'."
      },
      {
        "id": "B",
        "text": "NONAGONonagon",
        "isCorrect": false,
        "rationale": "'NONAGONonagon' significa 'Eneágono / Nonágono', não 'Fractal'."
      },
      {
        "id": "C",
        "text": "Fractal",
        "isCorrect": true,
        "rationale": "'Fractal' é a tradução correta para 'Fractal'."
      },
      {
        "id": "D",
        "text": "POLYTOPEolytope",
        "isCorrect": false,
        "rationale": "'POLYTOPEolytope' significa 'Politopo', não 'Fractal'."
      }
    ]
  },
  {
    "id": "sql-geo-d-16",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Cardioid",
    "wordPt": "Cardioide",
    "phonetic": "ˈkɑːr.di.ɔɪd",
    "sentence": "Rolling one circle around another creates a heart-shaped _________.",
    "sentencePt": "Rolar um círculo ao redor de outro cria uma cardioide em forma de coração.",
    "exampleEn": "Rolling one circle around another creates a heart-shaped Cardioid.",
    "examplePt": "Rolar um círculo ao redor de outro cria uma cardioide em forma de coração.",
    "gapWord": "Cardioid",
    "question": "Como se diz 'Cardioide' em inglês?",
    "hint": "Curva epicicloide com formato aproximado de coração.",
    "rationale": "'Cardioid' (ˈkɑːr.di.ɔɪd): Curva epicicloide com formato aproximado de coração.",
    "options": [
      {
        "id": "A",
        "text": "POLYTOPEolytope",
        "isCorrect": false,
        "rationale": "'POLYTOPEolytope' significa 'Politopo', não 'Cardioide'."
      },
      {
        "id": "B",
        "text": "DODECAHEDRONodecahedron",
        "isCorrect": false,
        "rationale": "'DODECAHEDRONodecahedron' significa 'Dodecaedro', não 'Cardioide'."
      },
      {
        "id": "C",
        "text": "STEREOMETRYtereometry",
        "isCorrect": false,
        "rationale": "'STEREOMETRYtereometry' significa 'Estereometria', não 'Cardioide'."
      },
      {
        "id": "D",
        "text": "Cardioid",
        "isCorrect": true,
        "rationale": "'Cardioid' é a tradução correta para 'Cardioide'."
      }
    ]
  },
  {
    "id": "sql-geo-d-17",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Cycloid",
    "wordPt": "Cicloide",
    "phonetic": "ˈsaɪ.klɔɪd",
    "sentence": "A point on a rolling wheel traces a graceful mathematical _________.",
    "sentencePt": "Um ponto numa roda rolando traça uma elegante cicloide matemática.",
    "exampleEn": "A point on a rolling wheel traces a graceful mathematical Cycloid.",
    "examplePt": "Um ponto numa roda rolando traça uma elegante cicloide matemática.",
    "gapWord": "Cycloid",
    "question": "Como se diz 'Cicloide' em inglês?",
    "hint": "Trajetória descrita por um ponto na borda de uma circunferência que rola.",
    "rationale": "'Cycloid' (ˈsaɪ.klɔɪd): Trajetória descrita por um ponto na borda de uma circunferência que rola.",
    "options": [
      {
        "id": "A",
        "text": "Cycloid",
        "isCorrect": true,
        "rationale": "'Cycloid' é a tradução correta para 'Cicloide'."
      },
      {
        "id": "B",
        "text": "COPLANARITYoplanarity",
        "isCorrect": false,
        "rationale": "'COPLANARITYoplanarity' significa 'Coplanaridade', não 'Cicloide'."
      },
      {
        "id": "C",
        "text": "COAXIALITYoaxiality",
        "isCorrect": false,
        "rationale": "'COAXIALITYoaxiality' significa 'Coaxialidade', não 'Cicloide'."
      },
      {
        "id": "D",
        "text": "ELLIPSOIDllipsoid",
        "isCorrect": false,
        "rationale": "'ELLIPSOIDllipsoid' significa 'Elipsoide', não 'Cicloide'."
      }
    ]
  },
  {
    "id": "sql-geo-d-18",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Astroid",
    "wordPt": "Astroide",
    "phonetic": "ˈæs.trɔɪd",
    "sentence": "A hypocycloid with four sharp cusps is termed an _________.",
    "sentencePt": "Uma hipocicloide com quatro cúspides agudas é denominada astroide.",
    "exampleEn": "A hypocycloid with four sharp cusps is termed an Astroid.",
    "examplePt": "Uma hipocicloide com quatro cúspides agudas é denominada astroide.",
    "gapWord": "Astroid",
    "question": "Como se diz 'Astroide' em inglês?",
    "hint": "Hipocicloide de quatro cúspides que lembra uma estrela de quatro pontas.",
    "rationale": "'Astroid' (ˈæs.trɔɪd): Hipocicloide de quatro cúspides que lembra uma estrela de quatro pontas.",
    "options": [
      {
        "id": "A",
        "text": "STEREOTOMYtereotomy",
        "isCorrect": false,
        "rationale": "'STEREOTOMYtereotomy' significa 'Estereotomia', não 'Astroide'."
      },
      {
        "id": "B",
        "text": "Astroid",
        "isCorrect": true,
        "rationale": "'Astroid' é a tradução correta para 'Astroide'."
      },
      {
        "id": "C",
        "text": "HOMEOMORPHISMomeomorphism",
        "isCorrect": false,
        "rationale": "'HOMEOMORPHISMomeomorphism' significa 'Homeomorfismo', não 'Astroide'."
      },
      {
        "id": "D",
        "text": "TRIGONOMETRICrigonometric",
        "isCorrect": false,
        "rationale": "'TRIGONOMETRICrigonometric' significa 'Trigonométrico', não 'Astroide'."
      }
    ]
  },
  {
    "id": "sql-geo-d-19",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Lemniscate",
    "wordPt": "Lemniscata",
    "phonetic": "lɛmˈnɪs.kɪt",
    "sentence": "The infinity mathematical symbol is shaped like Bernoulli's _________.",
    "sentencePt": "O símbolo matemático de infinito tem a forma da lemniscata de Bernoulli.",
    "exampleEn": "The infinity mathematical symbol is shaped like Bernoulli's Lemniscate.",
    "examplePt": "O símbolo matemático de infinito tem a forma da lemniscata de Bernoulli.",
    "gapWord": "Lemniscate",
    "question": "Como se diz 'Lemniscata' em inglês?",
    "hint": "Curva plana em formato de oito deitado simbolizando o infinito.",
    "rationale": "'Lemniscate' (lɛmˈnɪs.kɪt): Curva plana em formato de oito deitado simbolizando o infinito.",
    "options": [
      {
        "id": "A",
        "text": "EQUILATERALquilateral",
        "isCorrect": false,
        "rationale": "'EQUILATERALquilateral' significa 'Equilátero', não 'Lemniscata'."
      },
      {
        "id": "B",
        "text": "TETRAHEDRONetrahedron",
        "isCorrect": false,
        "rationale": "'TETRAHEDRONetrahedron' significa 'Tetraedro', não 'Lemniscata'."
      },
      {
        "id": "C",
        "text": "Lemniscate",
        "isCorrect": true,
        "rationale": "'Lemniscate' é a tradução correta para 'Lemniscata'."
      },
      {
        "id": "D",
        "text": "RHOMBICOSIDODECAHEDRONhombicosidodecahedron",
        "isCorrect": false,
        "rationale": "'RHOMBICOSIDODECAHEDRONhombicosidodecahedron' significa 'Rombicosidodecaedro', não 'Lemniscata'."
      }
    ]
  },
  {
    "id": "sql-geo-d-20",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Curvatures",
    "wordPt": "Curvaturas",
    "phonetic": "ˈkɜːr.və.tʃərz",
    "sentence": "Differential geometry measures intrinsic surface _________ precisely.",
    "sentencePt": "A geometria diferencial mede curvaturas superficiais intrínsecas precisamente.",
    "exampleEn": "Differential geometry measures intrinsic surface Curvatures precisely.",
    "examplePt": "A geometria diferencial mede curvaturas superficiais intrínsecas precisamente.",
    "gapWord": "Curvatures",
    "question": "Como se diz 'Curvaturas' em inglês?",
    "hint": "Graus ou medidas do desvio de uma curva em relação à linha reta.",
    "rationale": "'Curvatures' (ˈkɜːr.və.tʃərz): Graus ou medidas do desvio de uma curva em relação à linha reta.",
    "options": [
      {
        "id": "A",
        "text": "TRIANGULATIONriangulation",
        "isCorrect": false,
        "rationale": "'TRIANGULATIONriangulation' significa 'Triangulação', não 'Curvaturas'."
      },
      {
        "id": "B",
        "text": "STEREOTOMYtereotomy",
        "isCorrect": false,
        "rationale": "'STEREOTOMYtereotomy' significa 'Estereotomia', não 'Curvaturas'."
      },
      {
        "id": "C",
        "text": "CATENARYatenary",
        "isCorrect": false,
        "rationale": "'CATENARYatenary' significa 'Catenária', não 'Curvaturas'."
      },
      {
        "id": "D",
        "text": "Curvatures",
        "isCorrect": true,
        "rationale": "'Curvatures' é a tradução correta para 'Curvaturas'."
      }
    ]
  },
  {
    "id": "sql-geo-d-21",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Concentricity",
    "wordPt": "Concentricidade",
    "phonetic": "ˌkɑːn.sɛnˈtrɪs.ə.ti",
    "sentence": "Pistons require strict mechanical _________ with the cylinder walls.",
    "sentencePt": "Pistões requerem estrita concentricidade mecânica com as paredes do cilindro.",
    "exampleEn": "Pistons require strict mechanical Concentricity with the cylinder walls.",
    "examplePt": "Pistões requerem estrita concentricidade mecânica com as paredes do cilindro.",
    "gapWord": "Concentricity",
    "question": "Como se diz 'Concentricidade' em inglês?",
    "hint": "Condição em que duas ou mais figuras compartilham o mesmo centro geométrico.",
    "rationale": "'Concentricity' (ˌkɑːn.sɛnˈtrɪs.ə.ti): Condição em que duas ou mais figuras compartilham o mesmo centro geométrico.",
    "options": [
      {
        "id": "A",
        "text": "Concentricity",
        "isCorrect": true,
        "rationale": "'Concentricity' é a tradução correta para 'Concentricidade'."
      },
      {
        "id": "B",
        "text": "ISOMETRYsometry",
        "isCorrect": false,
        "rationale": "'ISOMETRYsometry' significa 'Isometria', não 'Concentricidade'."
      },
      {
        "id": "C",
        "text": "TOPOLOGYopology",
        "isCorrect": false,
        "rationale": "'TOPOLOGYopology' significa 'Topologia', não 'Concentricidade'."
      },
      {
        "id": "D",
        "text": "ISOSCELESsosceles",
        "isCorrect": false,
        "rationale": "'ISOSCELESsosceles' significa 'Isósceles', não 'Concentricidade'."
      }
    ]
  },
  {
    "id": "sql-geo-d-22",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Coaxiality",
    "wordPt": "Coaxialidade",
    "phonetic": "koʊˌæk.siˈæl.ə.ti",
    "sentence": "The rotor shaft demands precise geometric _________ during rotation.",
    "sentencePt": "O eixo do rotor exige precisa coaxialidade geométrica durante a rotação.",
    "exampleEn": "The rotor shaft demands precise geometric Coaxiality during rotation.",
    "examplePt": "O eixo do rotor exige precisa coaxialidade geométrica durante a rotação.",
    "gapWord": "Coaxiality",
    "question": "Como se diz 'Coaxialidade' em inglês?",
    "hint": "Condição de compartilhar o mesmo eixo geométrico central.",
    "rationale": "'Coaxiality' (koʊˌæk.siˈæl.ə.ti): Condição de compartilhar o mesmo eixo geométrico central.",
    "options": [
      {
        "id": "A",
        "text": "EQUILATERALquilateral",
        "isCorrect": false,
        "rationale": "'EQUILATERALquilateral' significa 'Equilátero', não 'Coaxialidade'."
      },
      {
        "id": "B",
        "text": "Coaxiality",
        "isCorrect": true,
        "rationale": "'Coaxiality' é a tradução correta para 'Coaxialidade'."
      },
      {
        "id": "C",
        "text": "SUBTENDINGubtending",
        "isCorrect": false,
        "rationale": "'SUBTENDINGubtending' significa 'Subtendendo', não 'Coaxialidade'."
      },
      {
        "id": "D",
        "text": "CATENARYatenary",
        "isCorrect": false,
        "rationale": "'CATENARYatenary' significa 'Catenária', não 'Coaxialidade'."
      }
    ]
  },
  {
    "id": "sql-geo-d-23",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Stereometry",
    "wordPt": "Estereometria",
    "phonetic": "ˌstɛr.iˈɑː.mə.tri",
    "sentence": "Architects mastered classical _________ to calculate spatial volumes.",
    "sentencePt": "Arquitetos dominaram a estereometria clássica para calcular volumes espaciais.",
    "exampleEn": "Architects mastered classical Stereometry to calculate spatial volumes.",
    "examplePt": "Arquitetos dominaram a estereometria clássica para calcular volumes espaciais.",
    "gapWord": "Stereometry",
    "question": "Como se diz 'Estereometria' em inglês?",
    "hint": "Ramo da geometria que trata da medição de corpos e sólidos tridimensionais.",
    "rationale": "'Stereometry' (ˌstɛr.iˈɑː.mə.tri): Ramo da geometria que trata da medição de corpos e sólidos tridimensionais.",
    "options": [
      {
        "id": "A",
        "text": "PARABOLAarabola",
        "isCorrect": false,
        "rationale": "'PARABOLAarabola' significa 'Parábola', não 'Estereometria'."
      },
      {
        "id": "B",
        "text": "ISOMETRYsometry",
        "isCorrect": false,
        "rationale": "'ISOMETRYsometry' significa 'Isometria', não 'Estereometria'."
      },
      {
        "id": "C",
        "text": "Stereometry",
        "isCorrect": true,
        "rationale": "'Stereometry' é a tradução correta para 'Estereometria'."
      },
      {
        "id": "D",
        "text": "TRIGONOMETRICrigonometric",
        "isCorrect": false,
        "rationale": "'TRIGONOMETRICrigonometric' significa 'Trigonométrico', não 'Estereometria'."
      }
    ]
  },
  {
    "id": "sql-geo-d-24",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Trigonometric",
    "wordPt": "Trigonométrico",
    "phonetic": "ˌtrɪɡ.ə.nəˈmɛt.rɪk",
    "sentence": "Sine and cosine are fundamental _________ functions in calculus.",
    "sentencePt": "Seno e cosseno são funções trigonométricas fundamentais no cálculo.",
    "exampleEn": "Sine and cosine are fundamental Trigonometric functions in calculus.",
    "examplePt": "Seno e cosseno são funções trigonométricas fundamentais no cálculo.",
    "gapWord": "Trigonometric",
    "question": "Como se diz 'Trigonométrico' em inglês?",
    "hint": "Relativo às relações entre lados e ângulos de triângulos.",
    "rationale": "'Trigonometric' (ˌtrɪɡ.ə.nəˈmɛt.rɪk): Relativo às relações entre lados e ângulos de triângulos.",
    "options": [
      {
        "id": "A",
        "text": "POLYTOPEolytope",
        "isCorrect": false,
        "rationale": "'POLYTOPEolytope' significa 'Politopo', não 'Trigonométrico'."
      },
      {
        "id": "B",
        "text": "PARALLELOGRAMarallelogram",
        "isCorrect": false,
        "rationale": "'PARALLELOGRAMarallelogram' significa 'Paralelogramo', não 'Trigonométrico'."
      },
      {
        "id": "C",
        "text": "ISOPERIMETRICsoperimetric",
        "isCorrect": false,
        "rationale": "'ISOPERIMETRICsoperimetric' significa 'Isoperimétrico', não 'Trigonométrico'."
      },
      {
        "id": "D",
        "text": "Trigonometric",
        "isCorrect": true,
        "rationale": "'Trigonometric' é a tradução correta para 'Trigonométrico'."
      }
    ]
  },
  {
    "id": "sql-geo-d-25",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Isometry",
    "wordPt": "Isometria",
    "phonetic": "aɪˈsɑː.mə.tri",
    "sentence": "Rotations and reflections preserve distance and represent an _________.",
    "sentencePt": "Rotações e reflexões preservam distâncias e representam uma isometria.",
    "exampleEn": "Rotations and reflections preserve distance and represent an Isometry.",
    "examplePt": "Rotações e reflexões preservam distâncias e representam uma isometria.",
    "gapWord": "Isometry",
    "question": "Como se diz 'Isometria' em inglês?",
    "hint": "Transformação geométrica que preserva distâncias euclidianas intactas.",
    "rationale": "'Isometry' (aɪˈsɑː.mə.tri): Transformação geométrica que preserva distâncias euclidianas intactas.",
    "options": [
      {
        "id": "A",
        "text": "Isometry",
        "isCorrect": true,
        "rationale": "'Isometry' é a tradução correta para 'Isometria'."
      },
      {
        "id": "B",
        "text": "COAXIALITYoaxiality",
        "isCorrect": false,
        "rationale": "'COAXIALITYoaxiality' significa 'Coaxialidade', não 'Isometria'."
      },
      {
        "id": "C",
        "text": "DODECAHEDRONodecahedron",
        "isCorrect": false,
        "rationale": "'DODECAHEDRONodecahedron' significa 'Dodecaedro', não 'Isometria'."
      },
      {
        "id": "D",
        "text": "PARALLELOGRAMarallelogram",
        "isCorrect": false,
        "rationale": "'PARALLELOGRAMarallelogram' significa 'Paralelogramo', não 'Isometria'."
      }
    ]
  },
  {
    "id": "sql-geo-d-26",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Homeomorphism",
    "wordPt": "Homeomorfismo",
    "phonetic": "ˌhoʊ.mi.oʊˈmɔːr.fɪ.zəm",
    "sentence": "A coffee mug and a donut share a topological _________.",
    "sentencePt": "Uma caneca de café e uma rosquinha compartilham um homeomorfismo topológico.",
    "exampleEn": "A coffee mug and a donut share a topological Homeomorphism.",
    "examplePt": "Uma caneca de café e uma rosquinha compartilham um homeomorfismo topológico.",
    "gapWord": "Homeomorphism",
    "question": "Como se diz 'Homeomorfismo' em inglês?",
    "hint": "Isomorfismo entre espaços topológicos preservando propriedades contínuas.",
    "rationale": "'Homeomorphism' (ˌhoʊ.mi.oʊˈmɔːr.fɪ.zəm): Isomorfismo entre espaços topológicos preservando propriedades contínuas.",
    "options": [
      {
        "id": "A",
        "text": "TETRAHEDRONetrahedron",
        "isCorrect": false,
        "rationale": "'TETRAHEDRONetrahedron' significa 'Tetraedro', não 'Homeomorfismo'."
      },
      {
        "id": "B",
        "text": "Homeomorphism",
        "isCorrect": true,
        "rationale": "'Homeomorphism' é a tradução correta para 'Homeomorfismo'."
      },
      {
        "id": "C",
        "text": "ASYMPTOTEsymptote",
        "isCorrect": false,
        "rationale": "'ASYMPTOTEsymptote' significa 'Assíntota', não 'Homeomorfismo'."
      },
      {
        "id": "D",
        "text": "FRACTALractal",
        "isCorrect": false,
        "rationale": "'FRACTALractal' significa 'Fractal', não 'Homeomorfismo'."
      }
    ]
  },
  {
    "id": "sql-geo-d-27",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Topology",
    "wordPt": "Topologia",
    "phonetic": "təˈpɑː.lə.dʒi",
    "sentence": "The mathematical field of _________ studies properties preserved under stretching.",
    "sentencePt": "O campo matemático da topologia estuda propriedades preservadas sob deformação contínua.",
    "exampleEn": "The mathematical field of Topology studies properties preserved under stretching.",
    "examplePt": "O campo matemático da topologia estuda propriedades preservadas sob deformação contínua.",
    "gapWord": "Topology",
    "question": "Como se diz 'Topologia' em inglês?",
    "hint": "Ramo que estuda deformações contínuas de espaços sem rasgar ou colar.",
    "rationale": "'Topology' (təˈpɑː.lə.dʒi): Ramo que estuda deformações contínuas de espaços sem rasgar ou colar.",
    "options": [
      {
        "id": "A",
        "text": "ISOSCELESsosceles",
        "isCorrect": false,
        "rationale": "'ISOSCELESsosceles' significa 'Isósceles', não 'Topologia'."
      },
      {
        "id": "B",
        "text": "HYPERBOLAyperbola",
        "isCorrect": false,
        "rationale": "'HYPERBOLAyperbola' significa 'Hipérbole', não 'Topologia'."
      },
      {
        "id": "C",
        "text": "Topology",
        "isCorrect": true,
        "rationale": "'Topology' é a tradução correta para 'Topologia'."
      },
      {
        "id": "D",
        "text": "DODECAHEDRONodecahedron",
        "isCorrect": false,
        "rationale": "'DODECAHEDRONodecahedron' significa 'Dodecaedro', não 'Topologia'."
      }
    ]
  },
  {
    "id": "sql-geo-d-28",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Nonagon",
    "wordPt": "Eneágono / Nonágono",
    "phonetic": "ˈnɑː.nə.ɡɑːn",
    "sentence": "A regular _________ is a polygon containing nine sides.",
    "sentencePt": "Um eneágono regular é um polígono contendo nove lados.",
    "exampleEn": "A regular Nonagon is a polygon containing nine sides.",
    "examplePt": "Um eneágono regular é um polígono contendo nove lados.",
    "gapWord": "Nonagon",
    "question": "Como se diz 'Eneágono / Nonágono' em inglês?",
    "hint": "Polígono de nove lados e nove ângulos internos.",
    "rationale": "'Nonagon' (ˈnɑː.nə.ɡɑːn): Polígono de nove lados e nove ângulos internos.",
    "options": [
      {
        "id": "A",
        "text": "HYPOTENUSEypotenuse",
        "isCorrect": false,
        "rationale": "'HYPOTENUSEypotenuse' significa 'Hipotenusa', não 'Eneágono / Nonágono'."
      },
      {
        "id": "B",
        "text": "TETRAHEDRONetrahedron",
        "isCorrect": false,
        "rationale": "'TETRAHEDRONetrahedron' significa 'Tetraedro', não 'Eneágono / Nonágono'."
      },
      {
        "id": "C",
        "text": "COAXIALITYoaxiality",
        "isCorrect": false,
        "rationale": "'COAXIALITYoaxiality' significa 'Coaxialidade', não 'Eneágono / Nonágono'."
      },
      {
        "id": "D",
        "text": "Nonagon",
        "isCorrect": true,
        "rationale": "'Nonagon' é a tradução correta para 'Eneágono / Nonágono'."
      }
    ]
  },
  {
    "id": "sql-geo-d-29",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Decagon",
    "wordPt": "Decágono",
    "phonetic": "ˈdɛk.ə.ɡɑːn",
    "sentence": "Connecting ten equidistant points on a circle forms a _________.",
    "sentencePt": "Conectar dez pontos equidistantes em um círculo forma um decágono.",
    "exampleEn": "Connecting ten equidistant points on a circle forms a Decagon.",
    "examplePt": "Conectar dez pontos equidistantes em um círculo forma um decágono.",
    "gapWord": "Decagon",
    "question": "Como se diz 'Decágono' em inglês?",
    "hint": "Polígono geométrico plano composto por dez lados.",
    "rationale": "'Decagon' (ˈdɛk.ə.ɡɑːn): Polígono geométrico plano composto por dez lados.",
    "options": [
      {
        "id": "A",
        "text": "Decagon",
        "isCorrect": true,
        "rationale": "'Decagon' é a tradução correta para 'Decágono'."
      },
      {
        "id": "B",
        "text": "QUADRICuadric",
        "isCorrect": false,
        "rationale": "'QUADRICuadric' significa 'Quádrica', não 'Decágono'."
      },
      {
        "id": "C",
        "text": "GEODESICeodesic",
        "isCorrect": false,
        "rationale": "'GEODESICeodesic' significa 'Geodésica', não 'Decágono'."
      },
      {
        "id": "D",
        "text": "PARALLELOGRAMarallelogram",
        "isCorrect": false,
        "rationale": "'PARALLELOGRAMarallelogram' significa 'Paralelogramo', não 'Decágono'."
      }
    ]
  },
  {
    "id": "sql-geo-d-30",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Hendecagon",
    "wordPt": "Undecágono / Hendecágono",
    "phonetic": "hɛnˈdɛk.ə.ɡɑːn",
    "sentence": "A polygon with eleven straight sides is termed a _________.",
    "sentencePt": "Um polígono com onze lados retos é denominado hendecágono.",
    "exampleEn": "A polygon with eleven straight sides is termed a Hendecagon.",
    "examplePt": "Um polígono com onze lados retos é denominado hendecágono.",
    "gapWord": "Hendecagon",
    "question": "Como se diz 'Undecágono / Hendecágono' em inglês?",
    "hint": "Polígono plano composto por onze lados e onze vértices.",
    "rationale": "'Hendecagon' (hɛnˈdɛk.ə.ɡɑːn): Polígono plano composto por onze lados e onze vértices.",
    "options": [
      {
        "id": "A",
        "text": "POLYTOPEolytope",
        "isCorrect": false,
        "rationale": "'POLYTOPEolytope' significa 'Politopo', não 'Undecágono / Hendecágono'."
      },
      {
        "id": "B",
        "text": "Hendecagon",
        "isCorrect": true,
        "rationale": "'Hendecagon' é a tradução correta para 'Undecágono / Hendecágono'."
      },
      {
        "id": "C",
        "text": "CONICOIDonicoid",
        "isCorrect": false,
        "rationale": "'CONICOIDonicoid' significa 'Cônico / Quádrico Cônico', não 'Undecágono / Hendecágono'."
      },
      {
        "id": "D",
        "text": "ASTROIDstroid",
        "isCorrect": false,
        "rationale": "'ASTROIDstroid' significa 'Astroide', não 'Undecágono / Hendecágono'."
      }
    ]
  },
  {
    "id": "sql-geo-d-31",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Dodecagon",
    "wordPt": "Dodecágono",
    "phonetic": "doʊˈdɛk.ə.ɡɑːn",
    "sentence": "A clock face can be inscribed within a twelve-sided _________.",
    "sentencePt": "Um mostrador de relógio pode ser inscrito em um dodecágono de doze lados.",
    "exampleEn": "A clock face can be inscribed within a twelve-sided Dodecagon.",
    "examplePt": "Um mostrador de relógio pode ser inscrito em um dodecágono de doze lados.",
    "gapWord": "Dodecagon",
    "question": "Como se diz 'Dodecágono' em inglês?",
    "hint": "Polígono geométrico composto por doze lados e doze ângulos.",
    "rationale": "'Dodecagon' (doʊˈdɛk.ə.ɡɑːn): Polígono geométrico composto por doze lados e doze ângulos.",
    "options": [
      {
        "id": "A",
        "text": "POLYHEDRONolyhedron",
        "isCorrect": false,
        "rationale": "'POLYHEDRONolyhedron' significa 'Poliedro', não 'Dodecágono'."
      },
      {
        "id": "B",
        "text": "TOPOLOGYopology",
        "isCorrect": false,
        "rationale": "'TOPOLOGYopology' significa 'Topologia', não 'Dodecágono'."
      },
      {
        "id": "C",
        "text": "Dodecagon",
        "isCorrect": true,
        "rationale": "'Dodecagon' é a tradução correta para 'Dodecágono'."
      },
      {
        "id": "D",
        "text": "TRIGONOMETRICrigonometric",
        "isCorrect": false,
        "rationale": "'TRIGONOMETRICrigonometric' significa 'Trigonométrico', não 'Dodecágono'."
      }
    ]
  },
  {
    "id": "sql-geo-d-32",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Orthogonality",
    "wordPt": "Ortogonalidade",
    "phonetic": "ˌɔːr.θɑː.ɡəˈnæl.ə.ti",
    "sentence": "Vectors at 90 degrees demonstrate pure mathematical _________.",
    "sentencePt": "Vetores a 90 graus demonstram pura ortogonalidade matemática.",
    "exampleEn": "Vectors at 90 degrees demonstrate pure mathematical Orthogonality.",
    "examplePt": "Vetores a 90 graus demonstram pura ortogonalidade matemática.",
    "gapWord": "Orthogonality",
    "question": "Como se diz 'Ortogonalidade' em inglês?",
    "hint": "Propriedade geométrica de duas entidades perpendiculares entre si.",
    "rationale": "'Orthogonality' (ˌɔːr.θɑː.ɡəˈnæl.ə.ti): Propriedade geométrica de duas entidades perpendiculares entre si.",
    "options": [
      {
        "id": "A",
        "text": "ASTROIDstroid",
        "isCorrect": false,
        "rationale": "'ASTROIDstroid' significa 'Astroide', não 'Ortogonalidade'."
      },
      {
        "id": "B",
        "text": "ICOSAHEDRONcosahedron",
        "isCorrect": false,
        "rationale": "'ICOSAHEDRONcosahedron' significa 'Icosaedro', não 'Ortogonalidade'."
      },
      {
        "id": "C",
        "text": "SUPERELLIPSEuperellipse",
        "isCorrect": false,
        "rationale": "'SUPERELLIPSEuperellipse' significa 'Superelipse', não 'Ortogonalidade'."
      },
      {
        "id": "D",
        "text": "Orthogonality",
        "isCorrect": true,
        "rationale": "'Orthogonality' é a tradução correta para 'Ortogonalidade'."
      }
    ]
  },
  {
    "id": "sql-geo-d-33",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Collinearity",
    "wordPt": "Colinearidade",
    "phonetic": "koʊˌlɪn.iˈær.ə.ti",
    "sentence": "Three points lying along the same line satisfy _________.",
    "sentencePt": "Três pontos situados sobre a mesma linha reta satisfazem a colinearidade.",
    "exampleEn": "Three points lying along the same line satisfy Collinearity.",
    "examplePt": "Três pontos situados sobre a mesma linha reta satisfazem a colinearidade.",
    "gapWord": "Collinearity",
    "question": "Como se diz 'Colinearidade' em inglês?",
    "hint": "Propriedade de pontos situados sobre uma mesma reta comum.",
    "rationale": "'Collinearity' (koʊˌlɪn.iˈær.ə.ti): Propriedade de pontos situados sobre uma mesma reta comum.",
    "options": [
      {
        "id": "A",
        "text": "Collinearity",
        "isCorrect": true,
        "rationale": "'Collinearity' é a tradução correta para 'Colinearidade'."
      },
      {
        "id": "B",
        "text": "HYPOTENUSEypotenuse",
        "isCorrect": false,
        "rationale": "'HYPOTENUSEypotenuse' significa 'Hipotenusa', não 'Colinearidade'."
      },
      {
        "id": "C",
        "text": "CARDIOIDardioid",
        "isCorrect": false,
        "rationale": "'CARDIOIDardioid' significa 'Cardioide', não 'Colinearidade'."
      },
      {
        "id": "D",
        "text": "ASTROIDstroid",
        "isCorrect": false,
        "rationale": "'ASTROIDstroid' significa 'Astroide', não 'Colinearidade'."
      }
    ]
  },
  {
    "id": "sql-geo-d-34",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Coplanarity",
    "wordPt": "Coplanaridade",
    "phonetic": "koʊ.pleɪˈnær.ə.ti",
    "sentence": "Lines that exist in the same flat plane exhibit _________.",
    "sentencePt": "Linhas que existem no mesmo plano raso exibem coplanaridade.",
    "exampleEn": "Lines that exist in the same flat plane exhibit Coplanarity.",
    "examplePt": "Linhas que existem no mesmo plano raso exibem coplanaridade.",
    "gapWord": "Coplanarity",
    "question": "Como se diz 'Coplanaridade' em inglês?",
    "hint": "Condição de figuras ou pontos pertencerem a um mesmo plano geométrico.",
    "rationale": "'Coplanarity' (koʊ.pleɪˈnær.ə.ti): Condição de figuras ou pontos pertencerem a um mesmo plano geométrico.",
    "options": [
      {
        "id": "A",
        "text": "ASYMPTOTEsymptote",
        "isCorrect": false,
        "rationale": "'ASYMPTOTEsymptote' significa 'Assíntota', não 'Coplanaridade'."
      },
      {
        "id": "B",
        "text": "Coplanarity",
        "isCorrect": true,
        "rationale": "'Coplanarity' é a tradução correta para 'Coplanaridade'."
      },
      {
        "id": "C",
        "text": "ASTROIDstroid",
        "isCorrect": false,
        "rationale": "'ASTROIDstroid' significa 'Astroide', não 'Coplanaridade'."
      },
      {
        "id": "D",
        "text": "COLLINEARITYollinearity",
        "isCorrect": false,
        "rationale": "'COLLINEARITYollinearity' significa 'Colinearidade', não 'Coplanaridade'."
      }
    ]
  },
  {
    "id": "sql-geo-d-35",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Asymptote",
    "wordPt": "Assíntota",
    "phonetic": "ˈæs.ɪm.toʊt",
    "sentence": "The hyperbola approaches but never touches its linear _________.",
    "sentencePt": "A hipérbole aproxima-se mas nunca toca sua assíntota linear.",
    "exampleEn": "The hyperbola approaches but never touches its linear Asymptote.",
    "examplePt": "A hipérbole aproxima-se mas nunca toca sua assíntota linear.",
    "gapWord": "Asymptote",
    "question": "Como se diz 'Assíntota' em inglês?",
    "hint": "Reta que uma curva tangencia no infinito sem interceptá-la.",
    "rationale": "'Asymptote' (ˈæs.ɪm.toʊt): Reta que uma curva tangencia no infinito sem interceptá-la.",
    "options": [
      {
        "id": "A",
        "text": "ICOSAHEDRONcosahedron",
        "isCorrect": false,
        "rationale": "'ICOSAHEDRONcosahedron' significa 'Icosaedro', não 'Assíntota'."
      },
      {
        "id": "B",
        "text": "ISOSCELESsosceles",
        "isCorrect": false,
        "rationale": "'ISOSCELESsosceles' significa 'Isósceles', não 'Assíntota'."
      },
      {
        "id": "C",
        "text": "Asymptote",
        "isCorrect": true,
        "rationale": "'Asymptote' é a tradução correta para 'Assíntota'."
      },
      {
        "id": "D",
        "text": "TRIANGULATIONriangulation",
        "isCorrect": false,
        "rationale": "'TRIANGULATIONriangulation' significa 'Triangulação', não 'Assíntota'."
      }
    ]
  },
  {
    "id": "sql-geo-d-36",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Catenary",
    "wordPt": "Catenária",
    "phonetic": "kəˈtɛn.ər.i",
    "sentence": "A hanging chain suspended by both ends naturally forms a _________.",
    "sentencePt": "Uma corrente suspensa por ambas as extremidades forma naturalmente uma catenária.",
    "exampleEn": "A hanging chain suspended by both ends naturally forms a Catenary.",
    "examplePt": "Uma corrente suspensa por ambas as extremidades forma naturalmente uma catenária.",
    "gapWord": "Catenary",
    "question": "Como se diz 'Catenária' em inglês?",
    "hint": "Curva ideal descrita por uma corrente homogênea sob gravidade.",
    "rationale": "'Catenary' (kəˈtɛn.ər.i): Curva ideal descrita por uma corrente homogênea sob gravidade.",
    "options": [
      {
        "id": "A",
        "text": "HOMEOMORPHISMomeomorphism",
        "isCorrect": false,
        "rationale": "'HOMEOMORPHISMomeomorphism' significa 'Homeomorfismo', não 'Catenária'."
      },
      {
        "id": "B",
        "text": "HYPERBOLAyperbola",
        "isCorrect": false,
        "rationale": "'HYPERBOLAyperbola' significa 'Hipérbole', não 'Catenária'."
      },
      {
        "id": "C",
        "text": "OCTAHEDRONctahedron",
        "isCorrect": false,
        "rationale": "'OCTAHEDRONctahedron' significa 'Octaedro', não 'Catenária'."
      },
      {
        "id": "D",
        "text": "Catenary",
        "isCorrect": true,
        "rationale": "'Catenary' é a tradução correta para 'Catenária'."
      }
    ]
  },
  {
    "id": "sql-geo-d-37",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Rhombicosidodecahedron",
    "wordPt": "Rombicosidodecaedro",
    "phonetic": "ˌrɑːm.bɪ.koʊˌsaɪ.doʊˌdɛk.əˈhiː.drən",
    "sentence": "An Archimedean solid with 62 distinct faces is the _________.",
    "sentencePt": "Um sólido arquimediano com 62 faces distintas é o rombicosidodecaedro.",
    "exampleEn": "An Archimedean solid with 62 distinct faces is the Rhombicosidodecahedron.",
    "examplePt": "Um sólido arquimediano com 62 faces distintas é o rombicosidodecaedro.",
    "gapWord": "Rhombicosidodecahedron",
    "question": "Como se diz 'Rombicosidodecaedro' em inglês?",
    "hint": "Sólido arquimediano com 20 faces triangulares, 30 quadradas e 12 pentagonais.",
    "rationale": "'Rhombicosidodecahedron' (ˌrɑːm.bɪ.koʊˌsaɪ.doʊˌdɛk.əˈhiː.drən): Sólido arquimediano com 20 faces triangulares, 30 quadradas e 12 pentagonais.",
    "options": [
      {
        "id": "A",
        "text": "Rhombicosidodecahedron",
        "isCorrect": true,
        "rationale": "'Rhombicosidodecahedron' é a tradução correta para 'Rombicosidodecaedro'."
      },
      {
        "id": "B",
        "text": "TRIANGULATIONriangulation",
        "isCorrect": false,
        "rationale": "'TRIANGULATIONriangulation' significa 'Triangulação', não 'Rombicosidodecaedro'."
      },
      {
        "id": "C",
        "text": "HYPERBOLOIDyperboloid",
        "isCorrect": false,
        "rationale": "'HYPERBOLOIDyperboloid' significa 'Hiperboloide', não 'Rombicosidodecaedro'."
      },
      {
        "id": "D",
        "text": "ISOPERIMETRICsoperimetric",
        "isCorrect": false,
        "rationale": "'ISOPERIMETRICsoperimetric' significa 'Isoperimétrico', não 'Rombicosidodecaedro'."
      }
    ]
  },
  {
    "id": "sql-geo-d-38",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Subtending",
    "wordPt": "Subtendendo",
    "phonetic": "səbˈtɛn.dɪŋ",
    "sentence": "The central arc is _________ a 45-degree angle at the origin.",
    "sentencePt": "O arco central está subtendendo um ângulo de 45 graus na origem.",
    "exampleEn": "The central arc is Subtending a 45-degree angle at the origin.",
    "examplePt": "O arco central está subtendendo um ângulo de 45 graus na origem.",
    "gapWord": "Subtending",
    "question": "Como se diz 'Subtendendo' em inglês?",
    "hint": "Ação de estender-se sob ou opor-se a um ângulo em geometria.",
    "rationale": "'Subtending' (səbˈtɛn.dɪŋ): Ação de estender-se sob ou opor-se a um ângulo em geometria.",
    "options": [
      {
        "id": "A",
        "text": "HYPOTENUSEypotenuse",
        "isCorrect": false,
        "rationale": "'HYPOTENUSEypotenuse' significa 'Hipotenusa', não 'Subtendendo'."
      },
      {
        "id": "B",
        "text": "Subtending",
        "isCorrect": true,
        "rationale": "'Subtending' é a tradução correta para 'Subtendendo'."
      },
      {
        "id": "C",
        "text": "TRIANGULATIONriangulation",
        "isCorrect": false,
        "rationale": "'TRIANGULATIONriangulation' significa 'Triangulação', não 'Subtendendo'."
      },
      {
        "id": "D",
        "text": "STEREOMETRYtereometry",
        "isCorrect": false,
        "rationale": "'STEREOMETRYtereometry' significa 'Estereometria', não 'Subtendendo'."
      }
    ]
  },
  {
    "id": "sql-geo-d-39",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Polytope",
    "wordPt": "Politopo",
    "phonetic": "ˈpɑː.li.toʊp",
    "sentence": "A generalization of polygons and polyhedra to higher dimensions is a _________.",
    "sentencePt": "Uma generalização de polígonos e poliedros para dimensões superiores é um politopo.",
    "exampleEn": "A generalization of polygons and polyhedra to higher dimensions is a Polytope.",
    "examplePt": "Uma generalização de polígonos e poliedros para dimensões superiores é um politopo.",
    "gapWord": "Polytope",
    "question": "Como se diz 'Politopo' em inglês?",
    "hint": "Figura geométrica com lados planos em qualquer número de dimensões.",
    "rationale": "'Polytope' (ˈpɑː.li.toʊp): Figura geométrica com lados planos em qualquer número de dimensões.",
    "options": [
      {
        "id": "A",
        "text": "COLLINEARITYollinearity",
        "isCorrect": false,
        "rationale": "'COLLINEARITYollinearity' significa 'Colinearidade', não 'Politopo'."
      },
      {
        "id": "B",
        "text": "OCTAHEDRONctahedron",
        "isCorrect": false,
        "rationale": "'OCTAHEDRONctahedron' significa 'Octaedro', não 'Politopo'."
      },
      {
        "id": "C",
        "text": "Polytope",
        "isCorrect": true,
        "rationale": "'Polytope' é a tradução correta para 'Politopo'."
      },
      {
        "id": "D",
        "text": "ISOSCELESsosceles",
        "isCorrect": false,
        "rationale": "'ISOSCELESsosceles' significa 'Isósceles', não 'Politopo'."
      }
    ]
  },
  {
    "id": "sql-geo-d-40",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Hypotenuse",
    "wordPt": "Hipotenusa",
    "phonetic": "haɪˈpɑː.tə.nuːs",
    "sentence": "In a right triangle, the longest side is called the _________.",
    "sentencePt": "Em um triângulo retângulo, o maior lado é chamado de hipotenusa.",
    "exampleEn": "In a right triangle, the longest side is called the Hypotenuse.",
    "examplePt": "Em um triângulo retângulo, o maior lado é chamado de hipotenusa.",
    "gapWord": "Hypotenuse",
    "question": "Como se diz 'Hipotenusa' em inglês?",
    "hint": "Lado oposto ao ângulo reto em um triângulo retângulo.",
    "rationale": "'Hypotenuse' (haɪˈpɑː.tə.nuːs): Lado oposto ao ângulo reto em um triângulo retângulo.",
    "options": [
      {
        "id": "A",
        "text": "DODECAHEDRONodecahedron",
        "isCorrect": false,
        "rationale": "'DODECAHEDRONodecahedron' significa 'Dodecaedro', não 'Hipotenusa'."
      },
      {
        "id": "B",
        "text": "ISOPERIMETRICsoperimetric",
        "isCorrect": false,
        "rationale": "'ISOPERIMETRICsoperimetric' significa 'Isoperimétrico', não 'Hipotenusa'."
      },
      {
        "id": "C",
        "text": "DODECAGONodecagon",
        "isCorrect": false,
        "rationale": "'DODECAGONodecagon' significa 'Dodecágono', não 'Hipotenusa'."
      },
      {
        "id": "D",
        "text": "Hypotenuse",
        "isCorrect": true,
        "rationale": "'Hypotenuse' é a tradução correta para 'Hipotenusa'."
      }
    ]
  },
  {
    "id": "sql-geo-d-41",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Triangulation",
    "wordPt": "Triangulação",
    "phonetic": "traɪˌæŋ.ɡjəˈleɪ.ʃən",
    "sentence": "Surveyors calculate unknown distances across the terrain using _________.",
    "sentencePt": "Topógrafos calculam distâncias desconhecidas no terreno usando triangulação.",
    "exampleEn": "Surveyors calculate unknown distances across the terrain using Triangulation.",
    "examplePt": "Topógrafos calculam distâncias desconhecidas no terreno usando triangulação.",
    "gapWord": "Triangulation",
    "question": "Como se diz 'Triangulação' em inglês?",
    "hint": "Técnica trigonométrica de determinação de posições por meio de triângulos.",
    "rationale": "'Triangulation' (traɪˌæŋ.ɡjəˈleɪ.ʃən): Técnica trigonométrica de determinação de posições por meio de triângulos.",
    "options": [
      {
        "id": "A",
        "text": "Triangulation",
        "isCorrect": true,
        "rationale": "'Triangulation' é a tradução correta para 'Triangulação'."
      },
      {
        "id": "B",
        "text": "DECAGONecagon",
        "isCorrect": false,
        "rationale": "'DECAGONecagon' significa 'Decágono', não 'Triangulação'."
      },
      {
        "id": "C",
        "text": "OCTAHEDRONctahedron",
        "isCorrect": false,
        "rationale": "'OCTAHEDRONctahedron' significa 'Octaedro', não 'Triangulação'."
      },
      {
        "id": "D",
        "text": "CURVATURESurvatures",
        "isCorrect": false,
        "rationale": "'CURVATURESurvatures' significa 'Curvaturas', não 'Triangulação'."
      }
    ]
  },
  {
    "id": "sql-geo-d-42",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Isoperimetric",
    "wordPt": "Isoperimétrico",
    "phonetic": "ˌaɪ.soʊˌpɛr.əˈmɛt.rɪk",
    "sentence": "Among all shapes with equal boundary, circles solve the _________ problem.",
    "sentencePt": "Entre todas as formas de mesmo perímetro, círculos resolvem o problema isoperimétrico.",
    "exampleEn": "Among all shapes with equal boundary, circles solve the Isoperimetric problem.",
    "examplePt": "Entre todas as formas de mesmo perímetro, círculos resolvem o problema isoperimétrico.",
    "gapWord": "Isoperimetric",
    "question": "Como se diz 'Isoperimétrico' em inglês?",
    "hint": "Relativo a figuras com o mesmo perímetro e área máxima.",
    "rationale": "'Isoperimetric' (ˌaɪ.soʊˌpɛr.əˈmɛt.rɪk): Relativo a figuras com o mesmo perímetro e área máxima.",
    "options": [
      {
        "id": "A",
        "text": "TETRAHEDRONetrahedron",
        "isCorrect": false,
        "rationale": "'TETRAHEDRONetrahedron' significa 'Tetraedro', não 'Isoperimétrico'."
      },
      {
        "id": "B",
        "text": "Isoperimetric",
        "isCorrect": true,
        "rationale": "'Isoperimetric' é a tradução correta para 'Isoperimétrico'."
      },
      {
        "id": "C",
        "text": "PLANIMETRYlanimetry",
        "isCorrect": false,
        "rationale": "'PLANIMETRYlanimetry' significa 'Planimetria', não 'Isoperimétrico'."
      },
      {
        "id": "D",
        "text": "STEREOMETRYtereometry",
        "isCorrect": false,
        "rationale": "'STEREOMETRYtereometry' significa 'Estereometria', não 'Isoperimétrico'."
      }
    ]
  },
  {
    "id": "sql-geo-d-43",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Planimetry",
    "wordPt": "Planimetria",
    "phonetic": "pləˈnɪm.ə.tri",
    "sentence": "Two-dimensional land surveying relies on the rules of _________.",
    "sentencePt": "Topografia de terrenos bidimensionais baseia-se nas regras da planimetria.",
    "exampleEn": "Two-dimensional land surveying relies on the rules of Planimetry.",
    "examplePt": "Topografia de terrenos bidimensionais baseia-se nas regras da planimetria.",
    "gapWord": "Planimetry",
    "question": "Como se diz 'Planimetria' em inglês?",
    "hint": "Medição geométrica de superfícies e figuras planas.",
    "rationale": "'Planimetry' (pləˈnɪm.ə.tri): Medição geométrica de superfícies e figuras planas.",
    "options": [
      {
        "id": "A",
        "text": "HYPERBOLOIDyperboloid",
        "isCorrect": false,
        "rationale": "'HYPERBOLOIDyperboloid' significa 'Hiperboloide', não 'Planimetria'."
      },
      {
        "id": "B",
        "text": "PARABOLAarabola",
        "isCorrect": false,
        "rationale": "'PARABOLAarabola' significa 'Parábola', não 'Planimetria'."
      },
      {
        "id": "C",
        "text": "Planimetry",
        "isCorrect": true,
        "rationale": "'Planimetry' é a tradução correta para 'Planimetria'."
      },
      {
        "id": "D",
        "text": "SUBTENDINGubtending",
        "isCorrect": false,
        "rationale": "'SUBTENDINGubtending' significa 'Subtendendo', não 'Planimetria'."
      }
    ]
  },
  {
    "id": "sql-geo-d-44",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Stereotomy",
    "wordPt": "Estereotomia",
    "phonetic": "ˌstɛr.iˈɑː.tə.mi",
    "sentence": "Masons cut interlocking stone blocks using geometrical _________.",
    "sentencePt": "Pedreiros cortam blocos de pedra intertravados usando estereotomia geométrica.",
    "exampleEn": "Masons cut interlocking stone blocks using geometrical Stereotomy.",
    "examplePt": "Pedreiros cortam blocos de pedra intertravados usando estereotomia geométrica.",
    "gapWord": "Stereotomy",
    "question": "Como se diz 'Estereotomia' em inglês?",
    "hint": "Arte e ciência de cortar sólidos para estruturas e abóbadas.",
    "rationale": "'Stereotomy' (ˌstɛr.iˈɑː.tə.mi): Arte e ciência de cortar sólidos para estruturas e abóbadas.",
    "options": [
      {
        "id": "A",
        "text": "HOMEOMORPHISMomeomorphism",
        "isCorrect": false,
        "rationale": "'HOMEOMORPHISMomeomorphism' significa 'Homeomorfismo', não 'Estereotomia'."
      },
      {
        "id": "B",
        "text": "CURVATURESurvatures",
        "isCorrect": false,
        "rationale": "'CURVATURESurvatures' significa 'Curvaturas', não 'Estereotomia'."
      },
      {
        "id": "C",
        "text": "PARABOLOIDaraboloid",
        "isCorrect": false,
        "rationale": "'PARABOLOIDaraboloid' significa 'Paraboloide', não 'Estereotomia'."
      },
      {
        "id": "D",
        "text": "Stereotomy",
        "isCorrect": true,
        "rationale": "'Stereotomy' é a tradução correta para 'Estereotomia'."
      }
    ]
  },
  {
    "id": "sql-geo-d-45",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Conicoid",
    "wordPt": "Cônico / Quádrico Cônico",
    "phonetic": "ˈkɑː.nɪ.kɔɪd",
    "sentence": "An ellipsoid or hyperboloid is a general type of 3D _________.",
    "sentencePt": "Um elipsoide ou hiperboloide é um tipo geral de cônico tridimensional.",
    "exampleEn": "An ellipsoid or hyperboloid is a general type of 3D Conicoid.",
    "examplePt": "Um elipsoide ou hiperboloide é um tipo geral de cônico tridimensional.",
    "gapWord": "Conicoid",
    "question": "Como se diz 'Cônico / Quádrico Cônico' em inglês?",
    "hint": "Superfície tridimensional representada por equação algébrica de segundo grau.",
    "rationale": "'Conicoid' (ˈkɑː.nɪ.kɔɪd): Superfície tridimensional representada por equação algébrica de segundo grau.",
    "options": [
      {
        "id": "A",
        "text": "Conicoid",
        "isCorrect": true,
        "rationale": "'Conicoid' é a tradução correta para 'Cônico / Quádrico Cônico'."
      },
      {
        "id": "B",
        "text": "TESSELLATIONessellation",
        "isCorrect": false,
        "rationale": "'TESSELLATIONessellation' significa 'Tesselação / Mosaico Regular', não 'Cônico / Quádrico Cônico'."
      },
      {
        "id": "C",
        "text": "HYPERBOLOIDyperboloid",
        "isCorrect": false,
        "rationale": "'HYPERBOLOIDyperboloid' significa 'Hiperboloide', não 'Cônico / Quádrico Cônico'."
      },
      {
        "id": "D",
        "text": "COAXIALITYoaxiality",
        "isCorrect": false,
        "rationale": "'COAXIALITYoaxiality' significa 'Coaxialidade', não 'Cônico / Quádrico Cônico'."
      }
    ]
  },
  {
    "id": "sql-geo-d-46",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Quadric",
    "wordPt": "Quádrica",
    "phonetic": "ˈkwɑː.drɪk",
    "sentence": "Cones and paraboloids belong to the mathematical family of _________ surfaces.",
    "sentencePt": "Cones e paraboloides pertencem à família matemática de superfícies quádricas.",
    "exampleEn": "Cones and paraboloids belong to the mathematical family of Quadric surfaces.",
    "examplePt": "Cones e paraboloides pertencem à família matemática de superfícies quádricas.",
    "gapWord": "Quadric",
    "question": "Como se diz 'Quádrica' em inglês?",
    "hint": "Superfície definida por equação polinomial de segundo grau em 3 variáveis.",
    "rationale": "'Quadric' (ˈkwɑː.drɪk): Superfície definida por equação polinomial de segundo grau em 3 variáveis.",
    "options": [
      {
        "id": "A",
        "text": "SUBTENDINGubtending",
        "isCorrect": false,
        "rationale": "'SUBTENDINGubtending' significa 'Subtendendo', não 'Quádrica'."
      },
      {
        "id": "B",
        "text": "Quadric",
        "isCorrect": true,
        "rationale": "'Quadric' é a tradução correta para 'Quádrica'."
      },
      {
        "id": "C",
        "text": "ISOMETRYsometry",
        "isCorrect": false,
        "rationale": "'ISOMETRYsometry' significa 'Isometria', não 'Quádrica'."
      },
      {
        "id": "D",
        "text": "LEMNISCATEemniscate",
        "isCorrect": false,
        "rationale": "'LEMNISCATEemniscate' significa 'Lemniscata', não 'Quádrica'."
      }
    ]
  },
  {
    "id": "sql-geo-d-47",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Superellipse",
    "wordPt": "Superelipse",
    "phonetic": "ˌsuː.pər.ɪˈlɪps",
    "sentence": "The city square in Stockholm was modeled as a graceful _________.",
    "sentencePt": "A praça da cidade em Estocolmo foi modelada como uma elegante superelipse.",
    "exampleEn": "The city square in Stockholm was modeled as a graceful Superellipse.",
    "examplePt": "A praça da cidade em Estocolmo foi modelada como uma elegante superelipse.",
    "gapWord": "Superellipse",
    "question": "Como se diz 'Superelipse' em inglês?",
    "hint": "Curva geométrica que combina propriedades de retângulo e elipse.",
    "rationale": "'Superellipse' (ˌsuː.pər.ɪˈlɪps): Curva geométrica que combina propriedades de retângulo e elipse.",
    "options": [
      {
        "id": "A",
        "text": "EQUILATERALquilateral",
        "isCorrect": false,
        "rationale": "'EQUILATERALquilateral' significa 'Equilátero', não 'Superelipse'."
      },
      {
        "id": "B",
        "text": "PARABOLAarabola",
        "isCorrect": false,
        "rationale": "'PARABOLAarabola' significa 'Parábola', não 'Superelipse'."
      },
      {
        "id": "C",
        "text": "Superellipse",
        "isCorrect": true,
        "rationale": "'Superellipse' é a tradução correta para 'Superelipse'."
      },
      {
        "id": "D",
        "text": "ISOPERIMETRICsoperimetric",
        "isCorrect": false,
        "rationale": "'ISOPERIMETRICsoperimetric' significa 'Isoperimétrico', não 'Superelipse'."
      }
    ]
  },
  {
    "id": "sql-geo-d-48",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Scalene",
    "wordPt": "Escaleno",
    "phonetic": "skeɪˈliːn",
    "sentence": "A triangle with three sides of completely different lengths is _________.",
    "sentencePt": "Um triângulo com três lados de comprimentos completamente diferentes é escaleno.",
    "exampleEn": "A triangle with three sides of completely different lengths is Scalene.",
    "examplePt": "Um triângulo com três lados de comprimentos completamente diferentes é escaleno.",
    "gapWord": "Scalene",
    "question": "Como se diz 'Escaleno' em inglês?",
    "hint": "Triângulo cujos três lados têm comprimentos desiguais.",
    "rationale": "'Scalene' (skeɪˈliːn): Triângulo cujos três lados têm comprimentos desiguais.",
    "options": [
      {
        "id": "A",
        "text": "RHOMBICOSIDODECAHEDRONhombicosidodecahedron",
        "isCorrect": false,
        "rationale": "'RHOMBICOSIDODECAHEDRONhombicosidodecahedron' significa 'Rombicosidodecaedro', não 'Escaleno'."
      },
      {
        "id": "B",
        "text": "PLANIMETRYlanimetry",
        "isCorrect": false,
        "rationale": "'PLANIMETRYlanimetry' significa 'Planimetria', não 'Escaleno'."
      },
      {
        "id": "C",
        "text": "PARABOLOIDaraboloid",
        "isCorrect": false,
        "rationale": "'PARABOLOIDaraboloid' significa 'Paraboloide', não 'Escaleno'."
      },
      {
        "id": "D",
        "text": "Scalene",
        "isCorrect": true,
        "rationale": "'Scalene' é a tradução correta para 'Escaleno'."
      }
    ]
  },
  {
    "id": "sql-geo-d-49",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Isosceles",
    "wordPt": "Isósceles",
    "phonetic": "aɪˈsɑː.sə.liːz",
    "sentence": "A triangle having two sides of equal length is termed _________.",
    "sentencePt": "Um triângulo com dois lados de mesmo comprimento é denominado isósceles.",
    "exampleEn": "A triangle having two sides of equal length is termed Isosceles.",
    "examplePt": "Um triângulo com dois lados de mesmo comprimento é denominado isósceles.",
    "gapWord": "Isosceles",
    "question": "Como se diz 'Isósceles' em inglês?",
    "hint": "Triângulo que possui dois lados congruentes e ângulos correspondentes iguais.",
    "rationale": "'Isosceles' (aɪˈsɑː.sə.liːz): Triângulo que possui dois lados congruentes e ângulos correspondentes iguais.",
    "options": [
      {
        "id": "A",
        "text": "Isosceles",
        "isCorrect": true,
        "rationale": "'Isosceles' é a tradução correta para 'Isósceles'."
      },
      {
        "id": "B",
        "text": "QUADRICuadric",
        "isCorrect": false,
        "rationale": "'QUADRICuadric' significa 'Quádrica', não 'Isósceles'."
      },
      {
        "id": "C",
        "text": "DECAGONecagon",
        "isCorrect": false,
        "rationale": "'DECAGONecagon' significa 'Decágono', não 'Isósceles'."
      },
      {
        "id": "D",
        "text": "SUPERELLIPSEuperellipse",
        "isCorrect": false,
        "rationale": "'SUPERELLIPSEuperellipse' significa 'Superelipse', não 'Isósceles'."
      }
    ]
  },
  {
    "id": "sql-geo-d-50",
    "topic": "formas",
    "difficulty": "dificil",
    "wordEn": "Equilateral",
    "wordPt": "Equilátero",
    "phonetic": "ˌiː.kwəˈlæt.ər.əl",
    "sentence": "All three internal angles measure 60° in an _________ triangle.",
    "sentencePt": "Todos os três ângulos internos medem 60° em um triângulo equilátero.",
    "exampleEn": "All three internal angles measure 60° in an Equilateral triangle.",
    "examplePt": "Todos os três ângulos internos medem 60° em um triângulo equilátero.",
    "gapWord": "Equilateral",
    "question": "Como se diz 'Equilátero' em inglês?",
    "hint": "Triângulo com todos os três lados e três ângulos congruentes.",
    "rationale": "'Equilateral' (ˌiː.kwəˈlæt.ər.əl): Triângulo com todos os três lados e três ângulos congruentes.",
    "options": [
      {
        "id": "A",
        "text": "TOPOLOGYopology",
        "isCorrect": false,
        "rationale": "'TOPOLOGYopology' significa 'Topologia', não 'Equilátero'."
      },
      {
        "id": "B",
        "text": "Equilateral",
        "isCorrect": true,
        "rationale": "'Equilateral' é a tradução correta para 'Equilátero'."
      },
      {
        "id": "C",
        "text": "ISOMETRYsometry",
        "isCorrect": false,
        "rationale": "'ISOMETRYsometry' significa 'Isometria', não 'Equilátero'."
      },
      {
        "id": "D",
        "text": "NONAGONonagon",
        "isCorrect": false,
        "rationale": "'NONAGONonagon' significa 'Eneágono / Nonágono', não 'Equilátero'."
      }
    ]
  },
  {
    "id": "sql-sch-f-01",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Pen",
    "wordPt": "Caneta",
    "phonetic": "pɛn",
    "sentence": "Write your full name with a blue ballpoint _________.",
    "sentencePt": "Escreva seu nome completo com uma caneta esferográfica azul.",
    "exampleEn": "Write your full name with a blue ballpoint Pen.",
    "examplePt": "Escreva seu nome completo com uma caneta esferográfica azul.",
    "gapWord": "Pen",
    "question": "Como se diz 'Caneta' em inglês?",
    "hint": "Instrumento de escrita que utiliza tinta fluida.",
    "rationale": "'Pen' (pɛn): Instrumento de escrita que utiliza tinta fluida.",
    "options": [
      {
        "id": "A",
        "text": "Pen",
        "isCorrect": true,
        "rationale": "'Pen' é a tradução correta para 'Caneta'."
      },
      {
        "id": "B",
        "text": "TEXText",
        "isCorrect": false,
        "rationale": "'TEXText' significa 'Texto', não 'Caneta'."
      },
      {
        "id": "C",
        "text": "LOCKock",
        "isCorrect": false,
        "rationale": "'LOCKock' significa 'Cadeado / Fechadura', não 'Caneta'."
      },
      {
        "id": "D",
        "text": "PAGEage",
        "isCorrect": false,
        "rationale": "'PAGEage' significa 'Página', não 'Caneta'."
      }
    ]
  },
  {
    "id": "sql-sch-f-02",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Pencil",
    "wordPt": "Lápis",
    "phonetic": "ˈpɛn.səl",
    "sentence": "Use a sharp graphite _________ to draw geometric shapes.",
    "sentencePt": "Use um lápis de grafite apontado para desenhar formas geométricas.",
    "exampleEn": "Use a sharp graphite Pencil to draw geometric shapes.",
    "examplePt": "Use um lápis de grafite apontado para desenhar formas geométricas.",
    "gapWord": "Pencil",
    "question": "Como se diz 'Lápis' em inglês?",
    "hint": "Instrumento de escrita e desenho com mina de grafite.",
    "rationale": "'Pencil' (ˈpɛn.səl): Instrumento de escrita e desenho com mina de grafite.",
    "options": [
      {
        "id": "A",
        "text": "RULERuler",
        "isCorrect": false,
        "rationale": "'RULERuler' significa 'Régua', não 'Lápis'."
      },
      {
        "id": "B",
        "text": "Pencil",
        "isCorrect": true,
        "rationale": "'Pencil' é a tradução correta para 'Lápis'."
      },
      {
        "id": "C",
        "text": "KEYey",
        "isCorrect": false,
        "rationale": "'KEYey' significa 'Chave do Armário', não 'Lápis'."
      },
      {
        "id": "D",
        "text": "BAGag",
        "isCorrect": false,
        "rationale": "'BAGag' significa 'Bolsa / Mochila Pequena', não 'Lápis'."
      }
    ]
  },
  {
    "id": "sql-sch-f-03",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Book",
    "wordPt": "Livro",
    "phonetic": "bʊk",
    "sentence": "Open your history _________ to chapter five.",
    "sentencePt": "Abra seu livro de história no capítulo cinco.",
    "exampleEn": "Open your history Book to chapter five.",
    "examplePt": "Abra seu livro de história no capítulo cinco.",
    "gapWord": "Book",
    "question": "Como se diz 'Livro' em inglês?",
    "hint": "Conjunto encadernado de páginas impressas com texto.",
    "rationale": "'Book' (bʊk): Conjunto encadernado de páginas impressas com texto.",
    "options": [
      {
        "id": "A",
        "text": "KEYey",
        "isCorrect": false,
        "rationale": "'KEYey' significa 'Chave do Armário', não 'Livro'."
      },
      {
        "id": "B",
        "text": "GRADErade",
        "isCorrect": false,
        "rationale": "'GRADErade' significa 'Grau / Série / Nota Escolar', não 'Livro'."
      },
      {
        "id": "C",
        "text": "Book",
        "isCorrect": true,
        "rationale": "'Book' é a tradução correta para 'Livro'."
      },
      {
        "id": "D",
        "text": "PLUGlug",
        "isCorrect": false,
        "rationale": "'PLUGlug' significa 'Plugue / Tomada', não 'Livro'."
      }
    ]
  },
  {
    "id": "sql-sch-f-04",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Page",
    "wordPt": "Página",
    "phonetic": "peɪdʒ",
    "sentence": "Turn to the next _________ to find the exercise answers.",
    "sentencePt": "Vire para a próxima página para encontrar as respostas dos exercícios.",
    "exampleEn": "Turn to the next Page to find the exercise answers.",
    "examplePt": "Vire para a próxima página para encontrar as respostas dos exercícios.",
    "gapWord": "Page",
    "question": "Como se diz 'Página' em inglês?",
    "hint": "Folha individual ou lado de folha em um livro.",
    "rationale": "'Page' (peɪdʒ): Folha individual ou lado de folha em um livro.",
    "options": [
      {
        "id": "A",
        "text": "WIREire",
        "isCorrect": false,
        "rationale": "'WIREire' significa 'Fio / Cabo Elétrico', não 'Página'."
      },
      {
        "id": "B",
        "text": "TAPEape",
        "isCorrect": false,
        "rationale": "'TAPEape' significa 'Fita Adesiva', não 'Página'."
      },
      {
        "id": "C",
        "text": "DESKesk",
        "isCorrect": false,
        "rationale": "'DESKesk' significa 'Carteira Escolar / Escrivaninha', não 'Página'."
      },
      {
        "id": "D",
        "text": "Page",
        "isCorrect": true,
        "rationale": "'Page' é a tradução correta para 'Página'."
      }
    ]
  },
  {
    "id": "sql-sch-f-05",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Desk",
    "wordPt": "Carteira Escolar / Escrivaninha",
    "phonetic": "dɛsk",
    "sentence": "Sit quietly at your student _________ during the test.",
    "sentencePt": "Sente-se tranquilamente na sua carteira escolar durante o teste.",
    "exampleEn": "Sit quietly at your student Desk during the test.",
    "examplePt": "Sente-se tranquilamente na sua carteira escolar durante o teste.",
    "gapWord": "Desk",
    "question": "Como se diz 'Carteira Escolar / Escrivaninha' em inglês?",
    "hint": "Móvel de trabalho escolar ou de escritório para estudo.",
    "rationale": "'Desk' (dɛsk): Móvel de trabalho escolar ou de escritório para estudo.",
    "options": [
      {
        "id": "A",
        "text": "Desk",
        "isCorrect": true,
        "rationale": "'Desk' é a tradução correta para 'Carteira Escolar / Escrivaninha'."
      },
      {
        "id": "B",
        "text": "BOXox",
        "isCorrect": false,
        "rationale": "'BOXox' significa 'Caixa de Material', não 'Carteira Escolar / Escrivaninha'."
      },
      {
        "id": "C",
        "text": "PLUGlug",
        "isCorrect": false,
        "rationale": "'PLUGlug' significa 'Plugue / Tomada', não 'Carteira Escolar / Escrivaninha'."
      },
      {
        "id": "D",
        "text": "LAMPamp",
        "isCorrect": false,
        "rationale": "'LAMPamp' significa 'Luminária de Estudo', não 'Carteira Escolar / Escrivaninha'."
      }
    ]
  },
  {
    "id": "sql-sch-f-06",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Chair",
    "wordPt": "Cadeira",
    "phonetic": "tʃɛər",
    "sentence": "Pull up an ergonomic _________ and sit comfortably.",
    "sentencePt": "Puxe uma cadeira ergonômica e sente-se confortavelmente.",
    "exampleEn": "Pull up an ergonomic Chair and sit comfortably.",
    "examplePt": "Puxe uma cadeira ergonômica e sente-se confortavelmente.",
    "gapWord": "Chair",
    "question": "Como se diz 'Cadeira' em inglês?",
    "hint": "Móvel com encosto e assento destinado a uma pessoa.",
    "rationale": "'Chair' (tʃɛər): Móvel com encosto e assento destinado a uma pessoa.",
    "options": [
      {
        "id": "A",
        "text": "BOXox",
        "isCorrect": false,
        "rationale": "'BOXox' significa 'Caixa de Material', não 'Cadeira'."
      },
      {
        "id": "B",
        "text": "Chair",
        "isCorrect": true,
        "rationale": "'Chair' é a tradução correta para 'Cadeira'."
      },
      {
        "id": "C",
        "text": "MAPap",
        "isCorrect": false,
        "rationale": "'MAPap' significa 'Mapa', não 'Cadeira'."
      },
      {
        "id": "D",
        "text": "GRADErade",
        "isCorrect": false,
        "rationale": "'GRADErade' significa 'Grau / Série / Nota Escolar', não 'Cadeira'."
      }
    ]
  },
  {
    "id": "sql-sch-f-07",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Bag",
    "wordPt": "Bolsa / Mochila Pequena",
    "phonetic": "bæɡ",
    "sentence": "Pack all your notebooks neatly into the school _________.",
    "sentencePt": "Guarde todos os seus cadernos organizadamente na bolsa escolar.",
    "exampleEn": "Pack all your notebooks neatly into the school Bag.",
    "examplePt": "Guarde todos os seus cadernos organizadamente na bolsa escolar.",
    "gapWord": "Bag",
    "question": "Como se diz 'Bolsa / Mochila Pequena' em inglês?",
    "hint": "Recipiente flexível de tecido para transportar materiais.",
    "rationale": "'Bag' (bæɡ): Recipiente flexível de tecido para transportar materiais.",
    "options": [
      {
        "id": "A",
        "text": "CASEase",
        "isCorrect": false,
        "rationale": "'CASEase' significa 'Estojo Escolar', não 'Bolsa / Mochila Pequena'."
      },
      {
        "id": "B",
        "text": "INKnk",
        "isCorrect": false,
        "rationale": "'INKnk' significa 'Tinta de Caneta', não 'Bolsa / Mochila Pequena'."
      },
      {
        "id": "C",
        "text": "Bag",
        "isCorrect": true,
        "rationale": "'Bag' é a tradução correta para 'Bolsa / Mochila Pequena'."
      },
      {
        "id": "D",
        "text": "MAPap",
        "isCorrect": false,
        "rationale": "'MAPap' significa 'Mapa', não 'Bolsa / Mochila Pequena'."
      }
    ]
  },
  {
    "id": "sql-sch-f-08",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Paper",
    "wordPt": "Papel",
    "phonetic": "ˈpeɪ.pər",
    "sentence": "Write your final essay on lined sheet _________.",
    "sentencePt": "Escreva sua redação final em uma folha pautada de papel.",
    "exampleEn": "Write your final essay on lined sheet Paper.",
    "examplePt": "Escreva sua redação final em uma folha pautada de papel.",
    "gapWord": "Paper",
    "question": "Como se diz 'Papel' em inglês?",
    "hint": "Material laminar fino feito de fibras vegetais.",
    "rationale": "'Paper' (ˈpeɪ.pər): Material laminar fino feito de fibras vegetais.",
    "options": [
      {
        "id": "A",
        "text": "BRUSHrush",
        "isCorrect": false,
        "rationale": "'BRUSHrush' significa 'Pincel de Arte', não 'Papel'."
      },
      {
        "id": "B",
        "text": "DESKesk",
        "isCorrect": false,
        "rationale": "'DESKesk' significa 'Carteira Escolar / Escrivaninha', não 'Papel'."
      },
      {
        "id": "C",
        "text": "CHALKhalk",
        "isCorrect": false,
        "rationale": "'CHALKhalk' significa 'Giz Escolar', não 'Papel'."
      },
      {
        "id": "D",
        "text": "Paper",
        "isCorrect": true,
        "rationale": "'Paper' é a tradução correta para 'Papel'."
      }
    ]
  },
  {
    "id": "sql-sch-f-09",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Map",
    "wordPt": "Mapa",
    "phonetic": "mæp",
    "sentence": "The geography teacher hung a world _________ on the wall.",
    "sentencePt": "O professor de geografia pendurou um mapa múndi na parede.",
    "exampleEn": "The geography teacher hung a world Map on the wall.",
    "examplePt": "O professor de geografia pendurou um mapa múndi na parede.",
    "gapWord": "Map",
    "question": "Como se diz 'Mapa' em inglês?",
    "hint": "Representação gráfica e cartográfica de uma região ou do planeta.",
    "rationale": "'Map' (mæp): Representação gráfica e cartográfica de uma região ou do planeta.",
    "options": [
      {
        "id": "A",
        "text": "Map",
        "isCorrect": true,
        "rationale": "'Map' é a tradução correta para 'Mapa'."
      },
      {
        "id": "B",
        "text": "BAGag",
        "isCorrect": false,
        "rationale": "'BAGag' significa 'Bolsa / Mochila Pequena', não 'Mapa'."
      },
      {
        "id": "C",
        "text": "BINin",
        "isCorrect": false,
        "rationale": "'BINin' significa 'Lixeira de Sala', não 'Mapa'."
      },
      {
        "id": "D",
        "text": "BADGEadge",
        "isCorrect": false,
        "rationale": "'BADGEadge' significa 'Crachá de Identificação', não 'Mapa'."
      }
    ]
  },
  {
    "id": "sql-sch-f-10",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Glue",
    "wordPt": "Cola Escolar",
    "phonetic": "ɡluː",
    "sentence": "Use non-toxic white _________ to paste pictures into the album.",
    "sentencePt": "Use cola branca não tóxica para colar fotos no álbum.",
    "exampleEn": "Use non-toxic white Glue to paste pictures into the album.",
    "examplePt": "Use cola branca não tóxica para colar fotos no álbum.",
    "gapWord": "Glue",
    "question": "Como se diz 'Cola Escolar' em inglês?",
    "hint": "Substância adesiva líquida ou em bastão para fixar materiais.",
    "rationale": "'Glue' (ɡluː): Substância adesiva líquida ou em bastão para fixar materiais.",
    "options": [
      {
        "id": "A",
        "text": "PAINTaint",
        "isCorrect": false,
        "rationale": "'PAINTaint' significa 'Tinta Escolar', não 'Cola Escolar'."
      },
      {
        "id": "B",
        "text": "Glue",
        "isCorrect": true,
        "rationale": "'Glue' é a tradução correta para 'Cola Escolar'."
      },
      {
        "id": "C",
        "text": "PADad",
        "isCorrect": false,
        "rationale": "'PADad' significa 'Bloco de Notas / Bloco de Rascunho', não 'Cola Escolar'."
      },
      {
        "id": "D",
        "text": "TAPEape",
        "isCorrect": false,
        "rationale": "'TAPEape' significa 'Fita Adesiva', não 'Cola Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-f-11",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Ruler",
    "wordPt": "Régua",
    "phonetic": "ˈruː.lər",
    "sentence": "Measure the margin precisely with a clear plastic _________.",
    "sentencePt": "Meça a margem precisamente com uma régua de plástico transparente.",
    "exampleEn": "Measure the margin precisely with a clear plastic Ruler.",
    "examplePt": "Meça a margem precisamente com uma régua de plástico transparente.",
    "gapWord": "Ruler",
    "question": "Como se diz 'Régua' em inglês?",
    "hint": "Instrumento rígido graduado para medir e traçar retas.",
    "rationale": "'Ruler' (ˈruː.lər): Instrumento rígido graduado para medir e traçar retas.",
    "options": [
      {
        "id": "A",
        "text": "BRUSHrush",
        "isCorrect": false,
        "rationale": "'BRUSHrush' significa 'Pincel de Arte', não 'Régua'."
      },
      {
        "id": "B",
        "text": "CASEase",
        "isCorrect": false,
        "rationale": "'CASEase' significa 'Estojo Escolar', não 'Régua'."
      },
      {
        "id": "C",
        "text": "Ruler",
        "isCorrect": true,
        "rationale": "'Ruler' é a tradução correta para 'Régua'."
      },
      {
        "id": "D",
        "text": "SEATeat",
        "isCorrect": false,
        "rationale": "'SEATeat' significa 'Assento / Carteira', não 'Régua'."
      }
    ]
  },
  {
    "id": "sql-sch-f-12",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Ink",
    "wordPt": "Tinta de Caneta",
    "phonetic": "ɪŋk",
    "sentence": "Refill the fountain pen with dark blue _________.",
    "sentencePt": "Recarregue a caneta-tinteiro com tinta azul escura.",
    "exampleEn": "Refill the fountain pen with dark blue Ink.",
    "examplePt": "Recarregue a caneta-tinteiro com tinta azul escura.",
    "gapWord": "Ink",
    "question": "Como se diz 'Tinta de Caneta' em inglês?",
    "hint": "Fluido pigmentado utilizado para escrita e impressão.",
    "rationale": "'Ink' (ɪŋk): Fluido pigmentado utilizado para escrita e impressão.",
    "options": [
      {
        "id": "A",
        "text": "NOTEote",
        "isCorrect": false,
        "rationale": "'NOTEote' significa 'Nota / Bilhete', não 'Tinta de Caneta'."
      },
      {
        "id": "B",
        "text": "DOORoor",
        "isCorrect": false,
        "rationale": "'DOORoor' significa 'Porta', não 'Tinta de Caneta'."
      },
      {
        "id": "C",
        "text": "BENCHench",
        "isCorrect": false,
        "rationale": "'BENCHench' significa 'Banco Escolar', não 'Tinta de Caneta'."
      },
      {
        "id": "D",
        "text": "Ink",
        "isCorrect": true,
        "rationale": "'Ink' é a tradução correta para 'Tinta de Caneta'."
      }
    ]
  },
  {
    "id": "sql-sch-f-13",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Clock",
    "wordPt": "Relógio de Parede",
    "phonetic": "klɑːk",
    "sentence": "The classroom _________ showed five minutes until recess.",
    "sentencePt": "O relógio da sala de aula marcava cinco minutos para o recreio.",
    "exampleEn": "The classroom Clock showed five minutes until recess.",
    "examplePt": "O relógio da sala de aula marcava cinco minutos para o recreio.",
    "gapWord": "Clock",
    "question": "Como se diz 'Relógio de Parede' em inglês?",
    "hint": "Aparelho marcador e medidor das horas.",
    "rationale": "'Clock' (klɑːk): Aparelho marcador e medidor das horas.",
    "options": [
      {
        "id": "A",
        "text": "Clock",
        "isCorrect": true,
        "rationale": "'Clock' é a tradução correta para 'Relógio de Parede'."
      },
      {
        "id": "B",
        "text": "COAToat",
        "isCorrect": false,
        "rationale": "'COAToat' significa 'Casaco / Agasalho', não 'Relógio de Parede'."
      },
      {
        "id": "C",
        "text": "PAGEage",
        "isCorrect": false,
        "rationale": "'PAGEage' significa 'Página', não 'Relógio de Parede'."
      },
      {
        "id": "D",
        "text": "BENCHench",
        "isCorrect": false,
        "rationale": "'BENCHench' significa 'Banco Escolar', não 'Relógio de Parede'."
      }
    ]
  },
  {
    "id": "sql-sch-f-14",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Bell",
    "wordPt": "Sino / Sinal Escolar",
    "phonetic": "bɛl",
    "sentence": "The morning school _________ rang to signal the start of class.",
    "sentencePt": "O sinal escolar da manhã tocou para indicar o início da aula.",
    "exampleEn": "The morning school Bell rang to signal the start of class.",
    "examplePt": "O sinal escolar da manhã tocou para indicar o início da aula.",
    "gapWord": "Bell",
    "question": "Como se diz 'Sino / Sinal Escolar' em inglês?",
    "hint": "Dispositivo acústico sonoro de chamada ou alarme.",
    "rationale": "'Bell' (bɛl): Dispositivo acústico sonoro de chamada ou alarme.",
    "options": [
      {
        "id": "A",
        "text": "BOARDoard",
        "isCorrect": false,
        "rationale": "'BOARDoard' significa 'Quadro / Lousa', não 'Sino / Sinal Escolar'."
      },
      {
        "id": "B",
        "text": "Bell",
        "isCorrect": true,
        "rationale": "'Bell' é a tradução correta para 'Sino / Sinal Escolar'."
      },
      {
        "id": "C",
        "text": "SHELFhelf",
        "isCorrect": false,
        "rationale": "'SHELFhelf' significa 'Prateleira', não 'Sino / Sinal Escolar'."
      },
      {
        "id": "D",
        "text": "CHALKhalk",
        "isCorrect": false,
        "rationale": "'CHALKhalk' significa 'Giz Escolar', não 'Sino / Sinal Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-f-15",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Board",
    "wordPt": "Quadro / Lousa",
    "phonetic": "bɔːrd",
    "sentence": "The teacher wrote the math formula clearly on the _________.",
    "sentencePt": "O professor escreveu a fórmula matemática claramente no quadro.",
    "exampleEn": "The teacher wrote the math formula clearly on the Board.",
    "examplePt": "O professor escreveu a fórmula matemática claramente no quadro.",
    "gapWord": "Board",
    "question": "Como se diz 'Quadro / Lousa' em inglês?",
    "hint": "Superfície ampla para escrita e giz ou marcador em sala.",
    "rationale": "'Board' (bɔːrd): Superfície ampla para escrita e giz ou marcador em sala.",
    "options": [
      {
        "id": "A",
        "text": "WIREire",
        "isCorrect": false,
        "rationale": "'WIREire' significa 'Fio / Cabo Elétrico', não 'Quadro / Lousa'."
      },
      {
        "id": "B",
        "text": "HATat",
        "isCorrect": false,
        "rationale": "'HATat' significa 'Chapéu / Boné', não 'Quadro / Lousa'."
      },
      {
        "id": "C",
        "text": "Board",
        "isCorrect": true,
        "rationale": "'Board' é a tradução correta para 'Quadro / Lousa'."
      },
      {
        "id": "D",
        "text": "PACKack",
        "isCorrect": false,
        "rationale": "'PACKack' significa 'Pacote de Material', não 'Quadro / Lousa'."
      }
    ]
  },
  {
    "id": "sql-sch-f-16",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Chalk",
    "wordPt": "Giz Escolar",
    "phonetic": "tʃɔːk",
    "sentence": "The instructor picked up a piece of white _________.",
    "sentencePt": "O instrutor pegou um pedaço de giz branco.",
    "exampleEn": "The instructor picked up a piece of white Chalk.",
    "examplePt": "O instrutor pegou um pedaço de giz branco.",
    "gapWord": "Chalk",
    "question": "Como se diz 'Giz Escolar' em inglês?",
    "hint": "Bastão mineral de gesso ou carbonato para escrever na lousa.",
    "rationale": "'Chalk' (tʃɔːk): Bastão mineral de gesso ou carbonato para escrever na lousa.",
    "options": [
      {
        "id": "A",
        "text": "PACKack",
        "isCorrect": false,
        "rationale": "'PACKack' significa 'Pacote de Material', não 'Giz Escolar'."
      },
      {
        "id": "B",
        "text": "INKnk",
        "isCorrect": false,
        "rationale": "'INKnk' significa 'Tinta de Caneta', não 'Giz Escolar'."
      },
      {
        "id": "C",
        "text": "HALLall",
        "isCorrect": false,
        "rationale": "'HALLall' significa 'Corredor / Hall', não 'Giz Escolar'."
      },
      {
        "id": "D",
        "text": "Chalk",
        "isCorrect": true,
        "rationale": "'Chalk' é a tradução correta para 'Giz Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-f-17",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Bench",
    "wordPt": "Banco Escolar",
    "phonetic": "bɛntʃ",
    "sentence": "Students sat on the wooden courtyard _________ during break.",
    "sentencePt": "Estudantes sentaram no banco de madeira do pátio no intervalo.",
    "exampleEn": "Students sat on the wooden courtyard Bench during break.",
    "examplePt": "Estudantes sentaram no banco de madeira do pátio no intervalo.",
    "gapWord": "Bench",
    "question": "Como se diz 'Banco Escolar' em inglês?",
    "hint": "Assento comprido de madeira ou metal para várias pessoas.",
    "rationale": "'Bench' (bɛntʃ): Assento comprido de madeira ou metal para várias pessoas.",
    "options": [
      {
        "id": "A",
        "text": "Bench",
        "isCorrect": true,
        "rationale": "'Bench' é a tradução correta para 'Banco Escolar'."
      },
      {
        "id": "B",
        "text": "GLUElue",
        "isCorrect": false,
        "rationale": "'GLUElue' significa 'Cola Escolar', não 'Banco Escolar'."
      },
      {
        "id": "C",
        "text": "PACKack",
        "isCorrect": false,
        "rationale": "'PACKack' significa 'Pacote de Material', não 'Banco Escolar'."
      },
      {
        "id": "D",
        "text": "TRASHrash",
        "isCorrect": false,
        "rationale": "'TRASHrash' significa 'Lixo / Resíduos', não 'Banco Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-f-18",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Flag",
    "wordPt": "Bandeira",
    "phonetic": "flæɡ",
    "sentence": "The national _________ waved proudly on the school flagpole.",
    "sentencePt": "A bandeira nacional tremulou com orgulho no mastro da escola.",
    "exampleEn": "The national Flag waved proudly on the school flagpole.",
    "examplePt": "A bandeira nacional tremulou com orgulho no mastro da escola.",
    "gapWord": "Flag",
    "question": "Como se diz 'Bandeira' em inglês?",
    "hint": "Pano retangular com cores e insígnias oficiais.",
    "rationale": "'Flag' (flæɡ): Pano retangular com cores e insígnias oficiais.",
    "options": [
      {
        "id": "A",
        "text": "DESKesk",
        "isCorrect": false,
        "rationale": "'DESKesk' significa 'Carteira Escolar / Escrivaninha', não 'Bandeira'."
      },
      {
        "id": "B",
        "text": "Flag",
        "isCorrect": true,
        "rationale": "'Flag' é a tradução correta para 'Bandeira'."
      },
      {
        "id": "C",
        "text": "GRADErade",
        "isCorrect": false,
        "rationale": "'GRADErade' significa 'Grau / Série / Nota Escolar', não 'Bandeira'."
      },
      {
        "id": "D",
        "text": "SHELFhelf",
        "isCorrect": false,
        "rationale": "'SHELFhelf' significa 'Prateleira', não 'Bandeira'."
      }
    ]
  },
  {
    "id": "sql-sch-f-19",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Form",
    "wordPt": "Formulário / Ficha",
    "phonetic": "fɔːrm",
    "sentence": "Fill out the registration _________ with your guardian's signature.",
    "sentencePt": "Preencha o formulário de matrícula com a assinatura do responsável.",
    "exampleEn": "Fill out the registration Form with your guardian's signature.",
    "examplePt": "Preencha o formulário de matrícula com a assinatura do responsável.",
    "gapWord": "Form",
    "question": "Como se diz 'Formulário / Ficha' em inglês?",
    "hint": "Documento impresso ou digital com campos a preencher.",
    "rationale": "'Form' (fɔːrm): Documento impresso ou digital com campos a preencher.",
    "options": [
      {
        "id": "A",
        "text": "PACKack",
        "isCorrect": false,
        "rationale": "'PACKack' significa 'Pacote de Material', não 'Formulário / Ficha'."
      },
      {
        "id": "B",
        "text": "ROOMoom",
        "isCorrect": false,
        "rationale": "'ROOMoom' significa 'Sala / Sala de Aula', não 'Formulário / Ficha'."
      },
      {
        "id": "C",
        "text": "Form",
        "isCorrect": true,
        "rationale": "'Form' é a tradução correta para 'Formulário / Ficha'."
      },
      {
        "id": "D",
        "text": "BADGEadge",
        "isCorrect": false,
        "rationale": "'BADGEadge' significa 'Crachá de Identificação', não 'Formulário / Ficha'."
      }
    ]
  },
  {
    "id": "sql-sch-f-20",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Card",
    "wordPt": "Cartão / Ficha de Identificação",
    "phonetic": "kɑːrd",
    "sentence": "Swipe your student ID _________ at the library turnstile.",
    "sentencePt": "Passe seu cartão de estudante na catraca da biblioteca.",
    "exampleEn": "Swipe your student ID Card at the library turnstile.",
    "examplePt": "Passe seu cartão de estudante na catraca da biblioteca.",
    "gapWord": "Card",
    "question": "Como se diz 'Cartão / Ficha de Identificação' em inglês?",
    "hint": "Retângulo rígido plástico ou cartolina de identificação.",
    "rationale": "'Card' (kɑːrd): Retângulo rígido plástico ou cartolina de identificação.",
    "options": [
      {
        "id": "A",
        "text": "PENen",
        "isCorrect": false,
        "rationale": "'PENen' significa 'Caneta', não 'Cartão / Ficha de Identificação'."
      },
      {
        "id": "B",
        "text": "CLOCKlock",
        "isCorrect": false,
        "rationale": "'CLOCKlock' significa 'Relógio de Parede', não 'Cartão / Ficha de Identificação'."
      },
      {
        "id": "C",
        "text": "FILEile",
        "isCorrect": false,
        "rationale": "'FILEile' significa 'Arquivo / Pasta de Documentos', não 'Cartão / Ficha de Identificação'."
      },
      {
        "id": "D",
        "text": "Card",
        "isCorrect": true,
        "rationale": "'Card' é a tradução correta para 'Cartão / Ficha de Identificação'."
      }
    ]
  },
  {
    "id": "sql-sch-f-21",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Note",
    "wordPt": "Nota / Bilhete",
    "phonetic": "noʊt",
    "sentence": "She wrote a quick reminder _________ in the margin.",
    "sentencePt": "Ela escreveu uma nota rápida de lembrete na margem.",
    "exampleEn": "She wrote a quick reminder Note in the margin.",
    "examplePt": "Ela escreveu uma nota rápida de lembrete na margem.",
    "gapWord": "Note",
    "question": "Como se diz 'Nota / Bilhete' em inglês?",
    "hint": "Breve anotação, recado ou registro escrito.",
    "rationale": "'Note' (noʊt): Breve anotação, recado ou registro escrito.",
    "options": [
      {
        "id": "A",
        "text": "Note",
        "isCorrect": true,
        "rationale": "'Note' é a tradução correta para 'Nota / Bilhete'."
      },
      {
        "id": "B",
        "text": "MARKark",
        "isCorrect": false,
        "rationale": "'MARKark' significa 'Nota / Marcação de Pontuação', não 'Nota / Bilhete'."
      },
      {
        "id": "C",
        "text": "BOOKook",
        "isCorrect": false,
        "rationale": "'BOOKook' significa 'Livro', não 'Nota / Bilhete'."
      },
      {
        "id": "D",
        "text": "PAGEage",
        "isCorrect": false,
        "rationale": "'PAGEage' significa 'Página', não 'Nota / Bilhete'."
      }
    ]
  },
  {
    "id": "sql-sch-f-22",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Text",
    "wordPt": "Texto",
    "phonetic": "tɛkst",
    "sentence": "Read the instructional _________ before answering questions.",
    "sentencePt": "Leia o texto instrucional antes de responder às perguntas.",
    "exampleEn": "Read the instructional Text before answering questions.",
    "examplePt": "Leia o texto instrucional antes de responder às perguntas.",
    "gapWord": "Text",
    "question": "Como se diz 'Texto' em inglês?",
    "hint": "Conjunto coeso de palavras e frases com significado.",
    "rationale": "'Text' (tɛkst): Conjunto coeso de palavras e frases com significado.",
    "options": [
      {
        "id": "A",
        "text": "BOARDoard",
        "isCorrect": false,
        "rationale": "'BOARDoard' significa 'Quadro / Lousa', não 'Texto'."
      },
      {
        "id": "B",
        "text": "Text",
        "isCorrect": true,
        "rationale": "'Text' é a tradução correta para 'Texto'."
      },
      {
        "id": "C",
        "text": "TESTest",
        "isCorrect": false,
        "rationale": "'TESTest' significa 'Teste / Prova', não 'Texto'."
      },
      {
        "id": "D",
        "text": "GLUElue",
        "isCorrect": false,
        "rationale": "'GLUElue' significa 'Cola Escolar', não 'Texto'."
      }
    ]
  },
  {
    "id": "sql-sch-f-23",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Test",
    "wordPt": "Teste / Prova",
    "phonetic": "tɛst",
    "sentence": "Study hard tonight because tomorrow is the biology _________.",
    "sentencePt": "Estude bastante esta noite pois amanhã é a prova de biologia.",
    "exampleEn": "Study hard tonight because tomorrow is the biology Test.",
    "examplePt": "Estude bastante esta noite pois amanhã é a prova de biologia.",
    "gapWord": "Test",
    "question": "Como se diz 'Teste / Prova' em inglês?",
    "hint": "Avaliação pedagógica formal de conhecimento.",
    "rationale": "'Test' (tɛst): Avaliação pedagógica formal de conhecimento.",
    "options": [
      {
        "id": "A",
        "text": "SEATeat",
        "isCorrect": false,
        "rationale": "'SEATeat' significa 'Assento / Carteira', não 'Teste / Prova'."
      },
      {
        "id": "B",
        "text": "PADad",
        "isCorrect": false,
        "rationale": "'PADad' significa 'Bloco de Notas / Bloco de Rascunho', não 'Teste / Prova'."
      },
      {
        "id": "C",
        "text": "Test",
        "isCorrect": true,
        "rationale": "'Test' é a tradução correta para 'Teste / Prova'."
      },
      {
        "id": "D",
        "text": "HATat",
        "isCorrect": false,
        "rationale": "'HATat' significa 'Chapéu / Boné', não 'Teste / Prova'."
      }
    ]
  },
  {
    "id": "sql-sch-f-24",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Quiz",
    "wordPt": "Quiz / Teste Rápido",
    "phonetic": "kwɪz",
    "sentence": "We started class with a quick five-question vocabulary _________.",
    "sentencePt": "Começamos a aula com um quiz rápido de vocabulário de cinco questões.",
    "exampleEn": "We started class with a quick five-question vocabulary Quiz.",
    "examplePt": "Começamos a aula com um quiz rápido de vocabulário de cinco questões.",
    "gapWord": "Quiz",
    "question": "Como se diz 'Quiz / Teste Rápido' em inglês?",
    "hint": "Avaliação curta ou jogo de perguntas e respostas.",
    "rationale": "'Quiz' (kwɪz): Avaliação curta ou jogo de perguntas e respostas.",
    "options": [
      {
        "id": "A",
        "text": "WIREire",
        "isCorrect": false,
        "rationale": "'WIREire' significa 'Fio / Cabo Elétrico', não 'Quiz / Teste Rápido'."
      },
      {
        "id": "B",
        "text": "BINin",
        "isCorrect": false,
        "rationale": "'BINin' significa 'Lixeira de Sala', não 'Quiz / Teste Rápido'."
      },
      {
        "id": "C",
        "text": "TAPEape",
        "isCorrect": false,
        "rationale": "'TAPEape' significa 'Fita Adesiva', não 'Quiz / Teste Rápido'."
      },
      {
        "id": "D",
        "text": "Quiz",
        "isCorrect": true,
        "rationale": "'Quiz' é a tradução correta para 'Quiz / Teste Rápido'."
      }
    ]
  },
  {
    "id": "sql-sch-f-25",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Mark",
    "wordPt": "Nota / Marcação de Pontuação",
    "phonetic": "mɑːrk",
    "sentence": "The student received a top _________ of 100 on the exam.",
    "sentencePt": "O estudante recebeu uma nota máxima de 100 no exame.",
    "exampleEn": "The student received a top Mark of 100 on the exam.",
    "examplePt": "O estudante recebeu uma nota máxima de 100 no exame.",
    "gapWord": "Mark",
    "question": "Como se diz 'Nota / Marcação de Pontuação' em inglês?",
    "hint": "Classificação avaliativa, pontuação ou correção.",
    "rationale": "'Mark' (mɑːrk): Classificação avaliativa, pontuação ou correção.",
    "options": [
      {
        "id": "A",
        "text": "Mark",
        "isCorrect": true,
        "rationale": "'Mark' é a tradução correta para 'Nota / Marcação de Pontuação'."
      },
      {
        "id": "B",
        "text": "SHELFhelf",
        "isCorrect": false,
        "rationale": "'SHELFhelf' significa 'Prateleira', não 'Nota / Marcação de Pontuação'."
      },
      {
        "id": "C",
        "text": "DOORoor",
        "isCorrect": false,
        "rationale": "'DOORoor' significa 'Porta', não 'Nota / Marcação de Pontuação'."
      },
      {
        "id": "D",
        "text": "GRADErade",
        "isCorrect": false,
        "rationale": "'GRADErade' significa 'Grau / Série / Nota Escolar', não 'Nota / Marcação de Pontuação'."
      }
    ]
  },
  {
    "id": "sql-sch-f-26",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Grade",
    "wordPt": "Grau / Série / Nota Escolar",
    "phonetic": "ɡreɪd",
    "sentence": "She is studying in the eighth _________ this academic year.",
    "sentencePt": "Ela está estudando no oitavo ano/série neste ano letivo.",
    "exampleEn": "She is studying in the eighth Grade this academic year.",
    "examplePt": "Ela está estudando no oitavo ano/série neste ano letivo.",
    "gapWord": "Grade",
    "question": "Como se diz 'Grau / Série / Nota Escolar' em inglês?",
    "hint": "Nível de escolaridade ou classificação de desempenho.",
    "rationale": "'Grade' (ɡreɪd): Nível de escolaridade ou classificação de desempenho.",
    "options": [
      {
        "id": "A",
        "text": "PAGEage",
        "isCorrect": false,
        "rationale": "'PAGEage' significa 'Página', não 'Grau / Série / Nota Escolar'."
      },
      {
        "id": "B",
        "text": "Grade",
        "isCorrect": true,
        "rationale": "'Grade' é a tradução correta para 'Grau / Série / Nota Escolar'."
      },
      {
        "id": "C",
        "text": "MARKark",
        "isCorrect": false,
        "rationale": "'MARKark' significa 'Nota / Marcação de Pontuação', não 'Grau / Série / Nota Escolar'."
      },
      {
        "id": "D",
        "text": "LAMPamp",
        "isCorrect": false,
        "rationale": "'LAMPamp' significa 'Luminária de Estudo', não 'Grau / Série / Nota Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-f-27",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Room",
    "wordPt": "Sala / Sala de Aula",
    "phonetic": "ruːm",
    "sentence": "Report immediately to homeroom _________ 102.",
    "sentencePt": "Apresente-se imediatamente na sala de aula 102.",
    "exampleEn": "Report immediately to homeroom Room 102.",
    "examplePt": "Apresente-se imediatamente na sala de aula 102.",
    "gapWord": "Room",
    "question": "Como se diz 'Sala / Sala de Aula' em inglês?",
    "hint": "Divisão ou compartimento delimitado por paredes.",
    "rationale": "'Room' (ruːm): Divisão ou compartimento delimitado por paredes.",
    "options": [
      {
        "id": "A",
        "text": "FILEile",
        "isCorrect": false,
        "rationale": "'FILEile' significa 'Arquivo / Pasta de Documentos', não 'Sala / Sala de Aula'."
      },
      {
        "id": "B",
        "text": "BOXox",
        "isCorrect": false,
        "rationale": "'BOXox' significa 'Caixa de Material', não 'Sala / Sala de Aula'."
      },
      {
        "id": "C",
        "text": "Room",
        "isCorrect": true,
        "rationale": "'Room' é a tradução correta para 'Sala / Sala de Aula'."
      },
      {
        "id": "D",
        "text": "RULERuler",
        "isCorrect": false,
        "rationale": "'RULERuler' significa 'Régua', não 'Sala / Sala de Aula'."
      }
    ]
  },
  {
    "id": "sql-sch-f-28",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Hall",
    "wordPt": "Corredor / Hall",
    "phonetic": "hɔːl",
    "sentence": "Walk quietly down the school _________ during lectures.",
    "sentencePt": "Caminhe silenciosamente pelo corredor da escola durante as aulas.",
    "exampleEn": "Walk quietly down the school Hall during lectures.",
    "examplePt": "Caminhe silenciosamente pelo corredor da escola durante as aulas.",
    "gapWord": "Hall",
    "question": "Como se diz 'Corredor / Hall' em inglês?",
    "hint": "Passagem ampla de circulação interna entre salas.",
    "rationale": "'Hall' (hɔːl): Passagem ampla de circulação interna entre salas.",
    "options": [
      {
        "id": "A",
        "text": "BADGEadge",
        "isCorrect": false,
        "rationale": "'BADGEadge' significa 'Crachá de Identificação', não 'Corredor / Hall'."
      },
      {
        "id": "B",
        "text": "CASEase",
        "isCorrect": false,
        "rationale": "'CASEase' significa 'Estojo Escolar', não 'Corredor / Hall'."
      },
      {
        "id": "C",
        "text": "CHAIRhair",
        "isCorrect": false,
        "rationale": "'CHAIRhair' significa 'Cadeira', não 'Corredor / Hall'."
      },
      {
        "id": "D",
        "text": "Hall",
        "isCorrect": true,
        "rationale": "'Hall' é a tradução correta para 'Corredor / Hall'."
      }
    ]
  },
  {
    "id": "sql-sch-f-29",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Door",
    "wordPt": "Porta",
    "phonetic": "dɔːr",
    "sentence": "Please close the classroom _________ to keep noise out.",
    "sentencePt": "Por favor feche a porta da sala de aula para conter o ruído.",
    "exampleEn": "Please close the classroom Door to keep noise out.",
    "examplePt": "Por favor feche a porta da sala de aula para conter o ruído.",
    "gapWord": "Door",
    "question": "Como se diz 'Porta' em inglês?",
    "hint": "Vão ou painel móvel de entrada e saída de um cômodo.",
    "rationale": "'Door' (dɔːr): Vão ou painel móvel de entrada e saída de um cômodo.",
    "options": [
      {
        "id": "A",
        "text": "Door",
        "isCorrect": true,
        "rationale": "'Door' é a tradução correta para 'Porta'."
      },
      {
        "id": "B",
        "text": "PENen",
        "isCorrect": false,
        "rationale": "'PENen' significa 'Caneta', não 'Porta'."
      },
      {
        "id": "C",
        "text": "FORMorm",
        "isCorrect": false,
        "rationale": "'FORMorm' significa 'Formulário / Ficha', não 'Porta'."
      },
      {
        "id": "D",
        "text": "BELLell",
        "isCorrect": false,
        "rationale": "'BELLell' significa 'Sino / Sinal Escolar', não 'Porta'."
      }
    ]
  },
  {
    "id": "sql-sch-f-30",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Seat",
    "wordPt": "Assento / Carteira",
    "phonetic": "siːt",
    "sentence": "Take your assigned _________ before the bell rings.",
    "sentencePt": "Ocupe seu assento designado antes que o sinal toque.",
    "exampleEn": "Take your assigned Seat before the bell rings.",
    "examplePt": "Ocupe seu assento designado antes que o sinal toque.",
    "gapWord": "Seat",
    "question": "Como se diz 'Assento / Carteira' em inglês?",
    "hint": "Lugar destinado para uma pessoa sentar-se.",
    "rationale": "'Seat' (siːt): Lugar destinado para uma pessoa sentar-se.",
    "options": [
      {
        "id": "A",
        "text": "GLUElue",
        "isCorrect": false,
        "rationale": "'GLUElue' significa 'Cola Escolar', não 'Assento / Carteira'."
      },
      {
        "id": "B",
        "text": "Seat",
        "isCorrect": true,
        "rationale": "'Seat' é a tradução correta para 'Assento / Carteira'."
      },
      {
        "id": "C",
        "text": "BOXox",
        "isCorrect": false,
        "rationale": "'BOXox' significa 'Caixa de Material', não 'Assento / Carteira'."
      },
      {
        "id": "D",
        "text": "FILEile",
        "isCorrect": false,
        "rationale": "'FILEile' significa 'Arquivo / Pasta de Documentos', não 'Assento / Carteira'."
      }
    ]
  },
  {
    "id": "sql-sch-f-31",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Pad",
    "wordPt": "Bloco de Notas / Bloco de Rascunho",
    "phonetic": "pæd",
    "sentence": "Tear a clean sheet from the memo _________.",
    "sentencePt": "Destaque uma folha limpa do bloco de notas.",
    "exampleEn": "Tear a clean sheet from the memo Pad.",
    "examplePt": "Destaque uma folha limpa do bloco de notas.",
    "gapWord": "Pad",
    "question": "Como se diz 'Bloco de Notas / Bloco de Rascunho' em inglês?",
    "hint": "Conjunto de folhas de papel coladas ou presas juntas.",
    "rationale": "'Pad' (pæd): Conjunto de folhas de papel coladas ou presas juntas.",
    "options": [
      {
        "id": "A",
        "text": "CLIPlip",
        "isCorrect": false,
        "rationale": "'CLIPlip' significa 'Clipe de Papel', não 'Bloco de Notas / Bloco de Rascunho'."
      },
      {
        "id": "B",
        "text": "FILEile",
        "isCorrect": false,
        "rationale": "'FILEile' significa 'Arquivo / Pasta de Documentos', não 'Bloco de Notas / Bloco de Rascunho'."
      },
      {
        "id": "C",
        "text": "Pad",
        "isCorrect": true,
        "rationale": "'Pad' é a tradução correta para 'Bloco de Notas / Bloco de Rascunho'."
      },
      {
        "id": "D",
        "text": "PLUGlug",
        "isCorrect": false,
        "rationale": "'PLUGlug' significa 'Plugue / Tomada', não 'Bloco de Notas / Bloco de Rascunho'."
      }
    ]
  },
  {
    "id": "sql-sch-f-32",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Tape",
    "wordPt": "Fita Adesiva",
    "phonetic": "teɪp",
    "sentence": "Fasten the science poster with clear adhesive _________.",
    "sentencePt": "Fixe o pôster de ciências com fita adesiva transparente.",
    "exampleEn": "Fasten the science poster with clear adhesive Tape.",
    "examplePt": "Fixe o pôster de ciências com fita adesiva transparente.",
    "gapWord": "Tape",
    "question": "Como se diz 'Fita Adesiva' em inglês?",
    "hint": "Tira colante em rolo para fixação e reparos.",
    "rationale": "'Tape' (teɪp): Tira colante em rolo para fixação e reparos.",
    "options": [
      {
        "id": "A",
        "text": "PENCILencil",
        "isCorrect": false,
        "rationale": "'PENCILencil' significa 'Lápis', não 'Fita Adesiva'."
      },
      {
        "id": "B",
        "text": "BOOKook",
        "isCorrect": false,
        "rationale": "'BOOKook' significa 'Livro', não 'Fita Adesiva'."
      },
      {
        "id": "C",
        "text": "LOCKock",
        "isCorrect": false,
        "rationale": "'LOCKock' significa 'Cadeado / Fechadura', não 'Fita Adesiva'."
      },
      {
        "id": "D",
        "text": "Tape",
        "isCorrect": true,
        "rationale": "'Tape' é a tradução correta para 'Fita Adesiva'."
      }
    ]
  },
  {
    "id": "sql-sch-f-33",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Clip",
    "wordPt": "Clipe de Papel",
    "phonetic": "klɪp",
    "sentence": "Hold these test papers together with a metal _________.",
    "sentencePt": "Prenda estas folhas de prova juntas com um clipe de metal.",
    "exampleEn": "Hold these test papers together with a metal Clip.",
    "examplePt": "Prenda estas folhas de prova juntas com um clipe de metal.",
    "gapWord": "Clip",
    "question": "Como se diz 'Clipe de Papel' em inglês?",
    "hint": "Pequeno fecho metálico ou plástico para juntar folhas.",
    "rationale": "'Clip' (klɪp): Pequeno fecho metálico ou plástico para juntar folhas.",
    "options": [
      {
        "id": "A",
        "text": "Clip",
        "isCorrect": true,
        "rationale": "'Clip' é a tradução correta para 'Clipe de Papel'."
      },
      {
        "id": "B",
        "text": "NOTEote",
        "isCorrect": false,
        "rationale": "'NOTEote' significa 'Nota / Bilhete', não 'Clipe de Papel'."
      },
      {
        "id": "C",
        "text": "ROOMoom",
        "isCorrect": false,
        "rationale": "'ROOMoom' significa 'Sala / Sala de Aula', não 'Clipe de Papel'."
      },
      {
        "id": "D",
        "text": "BOOKook",
        "isCorrect": false,
        "rationale": "'BOOKook' significa 'Livro', não 'Clipe de Papel'."
      }
    ]
  },
  {
    "id": "sql-sch-f-34",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "File",
    "wordPt": "Arquivo / Pasta de Documentos",
    "phonetic": "faɪl",
    "sentence": "Store your graded assignments in a plastic document _________.",
    "sentencePt": "Guarde suas tarefas corrigidas em uma pasta de arquivo plástica.",
    "exampleEn": "Store your graded assignments in a plastic document File.",
    "examplePt": "Guarde suas tarefas corrigidas em uma pasta de arquivo plástica.",
    "gapWord": "File",
    "question": "Como se diz 'Arquivo / Pasta de Documentos' em inglês?",
    "hint": "Conjunto organizado de documentos ou pasta física.",
    "rationale": "'File' (faɪl): Conjunto organizado de documentos ou pasta física.",
    "options": [
      {
        "id": "A",
        "text": "BRUSHrush",
        "isCorrect": false,
        "rationale": "'BRUSHrush' significa 'Pincel de Arte', não 'Arquivo / Pasta de Documentos'."
      },
      {
        "id": "B",
        "text": "File",
        "isCorrect": true,
        "rationale": "'File' é a tradução correta para 'Arquivo / Pasta de Documentos'."
      },
      {
        "id": "C",
        "text": "PACKack",
        "isCorrect": false,
        "rationale": "'PACKack' significa 'Pacote de Material', não 'Arquivo / Pasta de Documentos'."
      },
      {
        "id": "D",
        "text": "CLIPlip",
        "isCorrect": false,
        "rationale": "'CLIPlip' significa 'Clipe de Papel', não 'Arquivo / Pasta de Documentos'."
      }
    ]
  },
  {
    "id": "sql-sch-f-35",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Case",
    "wordPt": "Estojo Escolar",
    "phonetic": "keɪs",
    "sentence": "Keep pencils and erasers organized in your zipper _________.",
    "sentencePt": "Mantenha lápis e borrachas organizados em seu estojo com zíper.",
    "exampleEn": "Keep pencils and erasers organized in your zipper Case.",
    "examplePt": "Mantenha lápis e borrachas organizados em seu estojo com zíper.",
    "gapWord": "Case",
    "question": "Como se diz 'Estojo Escolar' em inglês?",
    "hint": "Estojo ou invólucro para proteger materiais de uso pessoal.",
    "rationale": "'Case' (keɪs): Estojo ou invólucro para proteger materiais de uso pessoal.",
    "options": [
      {
        "id": "A",
        "text": "BINin",
        "isCorrect": false,
        "rationale": "'BINin' significa 'Lixeira de Sala', não 'Estojo Escolar'."
      },
      {
        "id": "B",
        "text": "TESTest",
        "isCorrect": false,
        "rationale": "'TESTest' significa 'Teste / Prova', não 'Estojo Escolar'."
      },
      {
        "id": "C",
        "text": "Case",
        "isCorrect": true,
        "rationale": "'Case' é a tradução correta para 'Estojo Escolar'."
      },
      {
        "id": "D",
        "text": "COAToat",
        "isCorrect": false,
        "rationale": "'COAToat' significa 'Casaco / Agasalho', não 'Estojo Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-f-36",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Pack",
    "wordPt": "Pacote de Material",
    "phonetic": "pæk",
    "sentence": "Open the new ten-count _________ of colored pencils.",
    "sentencePt": "Abra o novo pacote de dez lápis de cor.",
    "exampleEn": "Open the new ten-count Pack of colored pencils.",
    "examplePt": "Abra o novo pacote de dez lápis de cor.",
    "gapWord": "Pack",
    "question": "Como se diz 'Pacote de Material' em inglês?",
    "hint": "Conjunto embalado de itens ou materiais semelhantes.",
    "rationale": "'Pack' (pæk): Conjunto embalado de itens ou materiais semelhantes.",
    "options": [
      {
        "id": "A",
        "text": "LAMPamp",
        "isCorrect": false,
        "rationale": "'LAMPamp' significa 'Luminária de Estudo', não 'Pacote de Material'."
      },
      {
        "id": "B",
        "text": "PLUGlug",
        "isCorrect": false,
        "rationale": "'PLUGlug' significa 'Plugue / Tomada', não 'Pacote de Material'."
      },
      {
        "id": "C",
        "text": "PENCILencil",
        "isCorrect": false,
        "rationale": "'PENCILencil' significa 'Lápis', não 'Pacote de Material'."
      },
      {
        "id": "D",
        "text": "Pack",
        "isCorrect": true,
        "rationale": "'Pack' é a tradução correta para 'Pacote de Material'."
      }
    ]
  },
  {
    "id": "sql-sch-f-37",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Box",
    "wordPt": "Caixa de Material",
    "phonetic": "bɑːks",
    "sentence": "Store spare chalk and art supplies in this sturdy _________.",
    "sentencePt": "Guarde giz sobressalente e materiais de arte nesta caixa resistente.",
    "exampleEn": "Store spare chalk and art supplies in this sturdy Box.",
    "examplePt": "Guarde giz sobressalente e materiais de arte nesta caixa resistente.",
    "gapWord": "Box",
    "question": "Como se diz 'Caixa de Material' em inglês?",
    "hint": "Recipiente rígido cúbico ou paralelepipédico de armazenamento.",
    "rationale": "'Box' (bɑːks): Recipiente rígido cúbico ou paralelepipédico de armazenamento.",
    "options": [
      {
        "id": "A",
        "text": "Box",
        "isCorrect": true,
        "rationale": "'Box' é a tradução correta para 'Caixa de Material'."
      },
      {
        "id": "B",
        "text": "HALLall",
        "isCorrect": false,
        "rationale": "'HALLall' significa 'Corredor / Hall', não 'Caixa de Material'."
      },
      {
        "id": "C",
        "text": "PAGEage",
        "isCorrect": false,
        "rationale": "'PAGEage' significa 'Página', não 'Caixa de Material'."
      },
      {
        "id": "D",
        "text": "SEATeat",
        "isCorrect": false,
        "rationale": "'SEATeat' significa 'Assento / Carteira', não 'Caixa de Material'."
      }
    ]
  },
  {
    "id": "sql-sch-f-38",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Badge",
    "wordPt": "Crachá de Identificação",
    "phonetic": "bædʒ",
    "sentence": "Wear your visitor name _________ on your school uniform.",
    "sentencePt": "Use seu crachá com nome no uniforme escolar.",
    "exampleEn": "Wear your visitor name Badge on your school uniform.",
    "examplePt": "Use seu crachá com nome no uniforme escolar.",
    "gapWord": "Badge",
    "question": "Como se diz 'Crachá de Identificação' em inglês?",
    "hint": "Distintivo ou cartão de identificação pessoal no peito.",
    "rationale": "'Badge' (bædʒ): Distintivo ou cartão de identificação pessoal no peito.",
    "options": [
      {
        "id": "A",
        "text": "GRADErade",
        "isCorrect": false,
        "rationale": "'GRADErade' significa 'Grau / Série / Nota Escolar', não 'Crachá de Identificação'."
      },
      {
        "id": "B",
        "text": "Badge",
        "isCorrect": true,
        "rationale": "'Badge' é a tradução correta para 'Crachá de Identificação'."
      },
      {
        "id": "C",
        "text": "RULERuler",
        "isCorrect": false,
        "rationale": "'RULERuler' significa 'Régua', não 'Crachá de Identificação'."
      },
      {
        "id": "D",
        "text": "TRASHrash",
        "isCorrect": false,
        "rationale": "'TRASHrash' significa 'Lixo / Resíduos', não 'Crachá de Identificação'."
      }
    ]
  },
  {
    "id": "sql-sch-f-39",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Paint",
    "wordPt": "Tinta Escolar",
    "phonetic": "peɪnt",
    "sentence": "Dip your brush into the washable water-based _________.",
    "sentencePt": "Mergulhe seu pincel na tinta escolar lavável à base de água.",
    "exampleEn": "Dip your brush into the washable water-based Paint.",
    "examplePt": "Mergulhe seu pincel na tinta escolar lavável à base de água.",
    "gapWord": "Paint",
    "question": "Como se diz 'Tinta Escolar' em inglês?",
    "hint": "Pigmento líquido ou pastoso para pintura e artes.",
    "rationale": "'Paint' (peɪnt): Pigmento líquido ou pastoso para pintura e artes.",
    "options": [
      {
        "id": "A",
        "text": "TESTest",
        "isCorrect": false,
        "rationale": "'TESTest' significa 'Teste / Prova', não 'Tinta Escolar'."
      },
      {
        "id": "B",
        "text": "QUIZuiz",
        "isCorrect": false,
        "rationale": "'QUIZuiz' significa 'Quiz / Teste Rápido', não 'Tinta Escolar'."
      },
      {
        "id": "C",
        "text": "Paint",
        "isCorrect": true,
        "rationale": "'Paint' é a tradução correta para 'Tinta Escolar'."
      },
      {
        "id": "D",
        "text": "TRASHrash",
        "isCorrect": false,
        "rationale": "'TRASHrash' significa 'Lixo / Resíduos', não 'Tinta Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-f-40",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Lamp",
    "wordPt": "Luminária de Estudo",
    "phonetic": "læmp",
    "sentence": "Turn on the flexible desk _________ for reading at night.",
    "sentencePt": "Ligue a luminária de mesa flexível para ler à noite.",
    "exampleEn": "Turn on the flexible desk Lamp for reading at night.",
    "examplePt": "Ligue a luminária de mesa flexível para ler à noite.",
    "gapWord": "Lamp",
    "question": "Como se diz 'Luminária de Estudo' em inglês?",
    "hint": "Aparelho emissor de luz artificial para leitura e trabalho.",
    "rationale": "'Lamp' (læmp): Aparelho emissor de luz artificial para leitura e trabalho.",
    "options": [
      {
        "id": "A",
        "text": "COAToat",
        "isCorrect": false,
        "rationale": "'COAToat' significa 'Casaco / Agasalho', não 'Luminária de Estudo'."
      },
      {
        "id": "B",
        "text": "TESTest",
        "isCorrect": false,
        "rationale": "'TESTest' significa 'Teste / Prova', não 'Luminária de Estudo'."
      },
      {
        "id": "C",
        "text": "TRASHrash",
        "isCorrect": false,
        "rationale": "'TRASHrash' significa 'Lixo / Resíduos', não 'Luminária de Estudo'."
      },
      {
        "id": "D",
        "text": "Lamp",
        "isCorrect": true,
        "rationale": "'Lamp' é a tradução correta para 'Luminária de Estudo'."
      }
    ]
  },
  {
    "id": "sql-sch-f-41",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Plug",
    "wordPt": "Plugue / Tomada",
    "phonetic": "plʌɡ",
    "sentence": "Insert the projector power cord into the wall _________.",
    "sentencePt": "Insira o cabo de energia do projetor na tomada de parede.",
    "exampleEn": "Insert the projector power cord into the wall Plug.",
    "examplePt": "Insira o cabo de energia do projetor na tomada de parede.",
    "gapWord": "Plug",
    "question": "Como se diz 'Plugue / Tomada' em inglês?",
    "hint": "Conector elétrico que estabelece contato com a rede.",
    "rationale": "'Plug' (plʌɡ): Conector elétrico que estabelece contato com a rede.",
    "options": [
      {
        "id": "A",
        "text": "Plug",
        "isCorrect": true,
        "rationale": "'Plug' é a tradução correta para 'Plugue / Tomada'."
      },
      {
        "id": "B",
        "text": "SHELFhelf",
        "isCorrect": false,
        "rationale": "'SHELFhelf' significa 'Prateleira', não 'Plugue / Tomada'."
      },
      {
        "id": "C",
        "text": "RULERuler",
        "isCorrect": false,
        "rationale": "'RULERuler' significa 'Régua', não 'Plugue / Tomada'."
      },
      {
        "id": "D",
        "text": "LOCKock",
        "isCorrect": false,
        "rationale": "'LOCKock' significa 'Cadeado / Fechadura', não 'Plugue / Tomada'."
      }
    ]
  },
  {
    "id": "sql-sch-f-42",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Wire",
    "wordPt": "Fio / Cabo Elétrico",
    "phonetic": "ˈwaɪ.ər",
    "sentence": "Be careful not to trip over the audio extension _________.",
    "sentencePt": "Cuidado para não tropeçar no fio de extensão de áudio.",
    "exampleEn": "Be careful not to trip over the audio extension Wire.",
    "examplePt": "Cuidado para não tropeçar no fio de extensão de áudio.",
    "gapWord": "Wire",
    "question": "Como se diz 'Fio / Cabo Elétrico' em inglês?",
    "hint": "Condutor flexível de metal revestido por isolante.",
    "rationale": "'Wire' (ˈwaɪ.ər): Condutor flexível de metal revestido por isolante.",
    "options": [
      {
        "id": "A",
        "text": "PADad",
        "isCorrect": false,
        "rationale": "'PADad' significa 'Bloco de Notas / Bloco de Rascunho', não 'Fio / Cabo Elétrico'."
      },
      {
        "id": "B",
        "text": "Wire",
        "isCorrect": true,
        "rationale": "'Wire' é a tradução correta para 'Fio / Cabo Elétrico'."
      },
      {
        "id": "C",
        "text": "DESKesk",
        "isCorrect": false,
        "rationale": "'DESKesk' significa 'Carteira Escolar / Escrivaninha', não 'Fio / Cabo Elétrico'."
      },
      {
        "id": "D",
        "text": "BELLell",
        "isCorrect": false,
        "rationale": "'BELLell' significa 'Sino / Sinal Escolar', não 'Fio / Cabo Elétrico'."
      }
    ]
  },
  {
    "id": "sql-sch-f-43",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Key",
    "wordPt": "Chave do Armário",
    "phonetic": "kiː",
    "sentence": "Unlock the laboratory cabinet with the master brass _________.",
    "sentencePt": "Destranque o armário do laboratório com a chave mestra de latão.",
    "exampleEn": "Unlock the laboratory cabinet with the master brass Key.",
    "examplePt": "Destranque o armário do laboratório com a chave mestra de latão.",
    "gapWord": "Key",
    "question": "Como se diz 'Chave do Armário' em inglês?",
    "hint": "Instrumento metálico dentado que aciona fechaduras.",
    "rationale": "'Key' (kiː): Instrumento metálico dentado que aciona fechaduras.",
    "options": [
      {
        "id": "A",
        "text": "GRADErade",
        "isCorrect": false,
        "rationale": "'GRADErade' significa 'Grau / Série / Nota Escolar', não 'Chave do Armário'."
      },
      {
        "id": "B",
        "text": "PACKack",
        "isCorrect": false,
        "rationale": "'PACKack' significa 'Pacote de Material', não 'Chave do Armário'."
      },
      {
        "id": "C",
        "text": "Key",
        "isCorrect": true,
        "rationale": "'Key' é a tradução correta para 'Chave do Armário'."
      },
      {
        "id": "D",
        "text": "WIREire",
        "isCorrect": false,
        "rationale": "'WIREire' significa 'Fio / Cabo Elétrico', não 'Chave do Armário'."
      }
    ]
  },
  {
    "id": "sql-sch-f-44",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Lock",
    "wordPt": "Cadeado / Fechadura",
    "phonetic": "lɑːk",
    "sentence": "Secure your gym locker with a three-digit combination _________.",
    "sentencePt": "Tranque o armário da academia com um cadeado de três dígitos.",
    "exampleEn": "Secure your gym locker with a three-digit combination Lock.",
    "examplePt": "Tranque o armário da academia com um cadeado de três dígitos.",
    "gapWord": "Lock",
    "question": "Como se diz 'Cadeado / Fechadura' em inglês?",
    "hint": "Mecanismo de segurança para trancar portas e armários.",
    "rationale": "'Lock' (lɑːk): Mecanismo de segurança para trancar portas e armários.",
    "options": [
      {
        "id": "A",
        "text": "FLAGlag",
        "isCorrect": false,
        "rationale": "'FLAGlag' significa 'Bandeira', não 'Cadeado / Fechadura'."
      },
      {
        "id": "B",
        "text": "PLUGlug",
        "isCorrect": false,
        "rationale": "'PLUGlug' significa 'Plugue / Tomada', não 'Cadeado / Fechadura'."
      },
      {
        "id": "C",
        "text": "SEATeat",
        "isCorrect": false,
        "rationale": "'SEATeat' significa 'Assento / Carteira', não 'Cadeado / Fechadura'."
      },
      {
        "id": "D",
        "text": "Lock",
        "isCorrect": true,
        "rationale": "'Lock' é a tradução correta para 'Cadeado / Fechadura'."
      }
    ]
  },
  {
    "id": "sql-sch-f-45",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Shelf",
    "wordPt": "Prateleira",
    "phonetic": "ʃɛlf",
    "sentence": "Place the heavy dictionaries on the bottom wooden _________.",
    "sentencePt": "Coloque os dicionários pesados na prateleira de madeira inferior.",
    "exampleEn": "Place the heavy dictionaries on the bottom wooden Shelf.",
    "examplePt": "Coloque os dicionários pesados na prateleira de madeira inferior.",
    "gapWord": "Shelf",
    "question": "Como se diz 'Prateleira' em inglês?",
    "hint": "Tábua horizontal afixada para sustentar livros e objetos.",
    "rationale": "'Shelf' (ʃɛlf): Tábua horizontal afixada para sustentar livros e objetos.",
    "options": [
      {
        "id": "A",
        "text": "Shelf",
        "isCorrect": true,
        "rationale": "'Shelf' é a tradução correta para 'Prateleira'."
      },
      {
        "id": "B",
        "text": "DOORoor",
        "isCorrect": false,
        "rationale": "'DOORoor' significa 'Porta', não 'Prateleira'."
      },
      {
        "id": "C",
        "text": "BADGEadge",
        "isCorrect": false,
        "rationale": "'BADGEadge' significa 'Crachá de Identificação', não 'Prateleira'."
      },
      {
        "id": "D",
        "text": "FLAGlag",
        "isCorrect": false,
        "rationale": "'FLAGlag' significa 'Bandeira', não 'Prateleira'."
      }
    ]
  },
  {
    "id": "sql-sch-f-46",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Bin",
    "wordPt": "Lixeira de Sala",
    "phonetic": "bɪn",
    "sentence": "Toss the crumpled paper into the recycling _________.",
    "sentencePt": "Jogue o papel amassado na lixeira de reciclagem.",
    "exampleEn": "Toss the crumpled paper into the recycling Bin.",
    "examplePt": "Jogue o papel amassado na lixeira de reciclagem.",
    "gapWord": "Bin",
    "question": "Como se diz 'Lixeira de Sala' em inglês?",
    "hint": "Recipiente coletor de resíduos ou lixo.",
    "rationale": "'Bin' (bɪn): Recipiente coletor de resíduos ou lixo.",
    "options": [
      {
        "id": "A",
        "text": "BRUSHrush",
        "isCorrect": false,
        "rationale": "'BRUSHrush' significa 'Pincel de Arte', não 'Lixeira de Sala'."
      },
      {
        "id": "B",
        "text": "Bin",
        "isCorrect": true,
        "rationale": "'Bin' é a tradução correta para 'Lixeira de Sala'."
      },
      {
        "id": "C",
        "text": "PACKack",
        "isCorrect": false,
        "rationale": "'PACKack' significa 'Pacote de Material', não 'Lixeira de Sala'."
      },
      {
        "id": "D",
        "text": "ROOMoom",
        "isCorrect": false,
        "rationale": "'ROOMoom' significa 'Sala / Sala de Aula', não 'Lixeira de Sala'."
      }
    ]
  },
  {
    "id": "sql-sch-f-47",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Trash",
    "wordPt": "Lixo / Resíduos",
    "phonetic": "træʃ",
    "sentence": "Dispose of pencil shavings and school _________ properly.",
    "sentencePt": "Descarte aparas de lápis e lixo escolar adequadamente.",
    "exampleEn": "Dispose of pencil shavings and school Trash properly.",
    "examplePt": "Descarte aparas de lápis e lixo escolar adequadamente.",
    "gapWord": "Trash",
    "question": "Como se diz 'Lixo / Resíduos' em inglês?",
    "hint": "Resíduos ou sobras descartadas sem utilidade.",
    "rationale": "'Trash' (træʃ): Resíduos ou sobras descartadas sem utilidade.",
    "options": [
      {
        "id": "A",
        "text": "BOOKook",
        "isCorrect": false,
        "rationale": "'BOOKook' significa 'Livro', não 'Lixo / Resíduos'."
      },
      {
        "id": "B",
        "text": "PENen",
        "isCorrect": false,
        "rationale": "'PENen' significa 'Caneta', não 'Lixo / Resíduos'."
      },
      {
        "id": "C",
        "text": "Trash",
        "isCorrect": true,
        "rationale": "'Trash' é a tradução correta para 'Lixo / Resíduos'."
      },
      {
        "id": "D",
        "text": "BADGEadge",
        "isCorrect": false,
        "rationale": "'BADGEadge' significa 'Crachá de Identificação', não 'Lixo / Resíduos'."
      }
    ]
  },
  {
    "id": "sql-sch-f-48",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Coat",
    "wordPt": "Casaco / Agasalho",
    "phonetic": "koʊt",
    "sentence": "Hang your warm winter _________ on the cloakroom hook.",
    "sentencePt": "Pendure seu casaco quente de inverno no gancho do vestiário.",
    "exampleEn": "Hang your warm winter Coat on the cloakroom hook.",
    "examplePt": "Pendure seu casaco quente de inverno no gancho do vestiário.",
    "gapWord": "Coat",
    "question": "Como se diz 'Casaco / Agasalho' em inglês?",
    "hint": "Peça de vestuário exterior usada sobre as roupas.",
    "rationale": "'Coat' (koʊt): Peça de vestuário exterior usada sobre as roupas.",
    "options": [
      {
        "id": "A",
        "text": "HATat",
        "isCorrect": false,
        "rationale": "'HATat' significa 'Chapéu / Boné', não 'Casaco / Agasalho'."
      },
      {
        "id": "B",
        "text": "QUIZuiz",
        "isCorrect": false,
        "rationale": "'QUIZuiz' significa 'Quiz / Teste Rápido', não 'Casaco / Agasalho'."
      },
      {
        "id": "C",
        "text": "PAPERaper",
        "isCorrect": false,
        "rationale": "'PAPERaper' significa 'Papel', não 'Casaco / Agasalho'."
      },
      {
        "id": "D",
        "text": "Coat",
        "isCorrect": true,
        "rationale": "'Coat' é a tradução correta para 'Casaco / Agasalho'."
      }
    ]
  },
  {
    "id": "sql-sch-f-49",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Hat",
    "wordPt": "Chapéu / Boné",
    "phonetic": "hæt",
    "sentence": "Remove your baseball _________ before entering the auditorium.",
    "sentencePt": "Retire seu boné antes de entrar no auditório.",
    "exampleEn": "Remove your baseball Hat before entering the auditorium.",
    "examplePt": "Retire seu boné antes de entrar no auditório.",
    "gapWord": "Hat",
    "question": "Como se diz 'Chapéu / Boné' em inglês?",
    "hint": "Acessório de cabeça para proteção contra sol ou frio.",
    "rationale": "'Hat' (hæt): Acessório de cabeça para proteção contra sol ou frio.",
    "options": [
      {
        "id": "A",
        "text": "Hat",
        "isCorrect": true,
        "rationale": "'Hat' é a tradução correta para 'Chapéu / Boné'."
      },
      {
        "id": "B",
        "text": "GRADErade",
        "isCorrect": false,
        "rationale": "'GRADErade' significa 'Grau / Série / Nota Escolar', não 'Chapéu / Boné'."
      },
      {
        "id": "C",
        "text": "BOOKook",
        "isCorrect": false,
        "rationale": "'BOOKook' significa 'Livro', não 'Chapéu / Boné'."
      },
      {
        "id": "D",
        "text": "GLUElue",
        "isCorrect": false,
        "rationale": "'GLUElue' significa 'Cola Escolar', não 'Chapéu / Boné'."
      }
    ]
  },
  {
    "id": "sql-sch-f-50",
    "topic": "objetos",
    "difficulty": "facil",
    "wordEn": "Brush",
    "wordPt": "Pincel de Arte",
    "phonetic": "brʌʃ",
    "sentence": "Clean the fine watercolor _________ thoroughly after painting.",
    "sentencePt": "Limpe o pincel fino de aquarela completamente após pintar.",
    "exampleEn": "Clean the fine watercolor Brush thoroughly after painting.",
    "examplePt": "Limpe o pincel fino de aquarela completamente após pintar.",
    "gapWord": "Brush",
    "question": "Como se diz 'Pincel de Arte' em inglês?",
    "hint": "Instrumento com cerdas montadas em cabo para pintura.",
    "rationale": "'Brush' (brʌʃ): Instrumento com cerdas montadas em cabo para pintura.",
    "options": [
      {
        "id": "A",
        "text": "ROOMoom",
        "isCorrect": false,
        "rationale": "'ROOMoom' significa 'Sala / Sala de Aula', não 'Pincel de Arte'."
      },
      {
        "id": "B",
        "text": "Brush",
        "isCorrect": true,
        "rationale": "'Brush' é a tradução correta para 'Pincel de Arte'."
      },
      {
        "id": "C",
        "text": "QUIZuiz",
        "isCorrect": false,
        "rationale": "'QUIZuiz' significa 'Quiz / Teste Rápido', não 'Pincel de Arte'."
      },
      {
        "id": "D",
        "text": "GRADErade",
        "isCorrect": false,
        "rationale": "'GRADErade' significa 'Grau / Série / Nota Escolar', não 'Pincel de Arte'."
      }
    ]
  },
  {
    "id": "sql-sch-m-01",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Notebook",
    "wordPt": "Caderno",
    "phonetic": "ˈnoʊtˌbʊk",
    "sentence": "Write your daily chemistry notes inside the spiral _________.",
    "sentencePt": "Escreva suas anotações diárias de química dentro do caderno espiral.",
    "exampleEn": "Write your daily chemistry notes inside the spiral Notebook.",
    "examplePt": "Escreva suas anotações diárias de química dentro do caderno espiral.",
    "gapWord": "Notebook",
    "question": "Como se diz 'Caderno' em inglês?",
    "hint": "Livro em branco pautado para anotações de estudantes.",
    "rationale": "'Notebook' (ˈnoʊtˌbʊk): Livro em branco pautado para anotações de estudantes.",
    "options": [
      {
        "id": "A",
        "text": "Notebook",
        "isCorrect": true,
        "rationale": "'Notebook' é a tradução correta para 'Caderno'."
      },
      {
        "id": "B",
        "text": "BLACKBOARDlackboard",
        "isCorrect": false,
        "rationale": "'BLACKBOARDlackboard' significa 'Quadro Negro', não 'Caderno'."
      },
      {
        "id": "C",
        "text": "PENCASEencase",
        "isCorrect": false,
        "rationale": "'PENCASEencase' significa 'Estojo de Canetas', não 'Caderno'."
      },
      {
        "id": "D",
        "text": "CLIPBOARDlipboard",
        "isCorrect": false,
        "rationale": "'CLIPBOARDlipboard' significa 'Prancheta', não 'Caderno'."
      }
    ]
  },
  {
    "id": "sql-sch-m-02",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Eraser",
    "wordPt": "Borracha Escolar",
    "phonetic": "ɪˈreɪ.sər",
    "sentence": "Erase the pencil mistake cleanly using a soft rubber _________.",
    "sentencePt": "Apague o erro a lápis de forma limpa usando uma borracha macia.",
    "exampleEn": "Erase the pencil mistake cleanly using a soft rubber Eraser.",
    "examplePt": "Apague o erro a lápis de forma limpa usando uma borracha macia.",
    "gapWord": "Eraser",
    "question": "Como se diz 'Borracha Escolar' em inglês?",
    "hint": "Objeto de borracha ou vinil usado para apagar marcas de grafite.",
    "rationale": "'Eraser' (ɪˈreɪ.sər): Objeto de borracha ou vinil usado para apagar marcas de grafite.",
    "options": [
      {
        "id": "A",
        "text": "WORKSHEETorksheet",
        "isCorrect": false,
        "rationale": "'WORKSHEETorksheet' significa 'Folha de Exercícios / Lista', não 'Borracha Escolar'."
      },
      {
        "id": "B",
        "text": "Eraser",
        "isCorrect": true,
        "rationale": "'Eraser' é a tradução correta para 'Borracha Escolar'."
      },
      {
        "id": "C",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Borracha Escolar'."
      },
      {
        "id": "D",
        "text": "FOUNTAINountain",
        "isCorrect": false,
        "rationale": "'FOUNTAINountain' significa 'Bebedouro Escolar', não 'Borracha Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-03",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Scissors",
    "wordPt": "Tesoura Escolar",
    "phonetic": "ˈsɪz.ərz",
    "sentence": "Cut out the paper diagrams with safety rounded _________.",
    "sentencePt": "Recorte os diagramas de papel com tesoura escolar sem ponta.",
    "exampleEn": "Cut out the paper diagrams with safety rounded Scissors.",
    "examplePt": "Recorte os diagramas de papel com tesoura escolar sem ponta.",
    "gapWord": "Scissors",
    "question": "Como se diz 'Tesoura Escolar' em inglês?",
    "hint": "Instrumento cortante articulado com duas lâminas opostas.",
    "rationale": "'Scissors' (ˈsɪz.ərz): Instrumento cortante articulado com duas lâminas opostas.",
    "options": [
      {
        "id": "A",
        "text": "FOUNTAINountain",
        "isCorrect": false,
        "rationale": "'FOUNTAINountain' significa 'Bebedouro Escolar', não 'Tesoura Escolar'."
      },
      {
        "id": "B",
        "text": "SCREENcreen",
        "isCorrect": false,
        "rationale": "'SCREENcreen' significa 'Tela de Projeção', não 'Tesoura Escolar'."
      },
      {
        "id": "C",
        "text": "Scissors",
        "isCorrect": true,
        "rationale": "'Scissors' é a tradução correta para 'Tesoura Escolar'."
      },
      {
        "id": "D",
        "text": "MARKERarker",
        "isCorrect": false,
        "rationale": "'MARKERarker' significa 'Marcador / Pincel Atômico', não 'Tesoura Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-04",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Backpack",
    "wordPt": "Mochila Escolar",
    "phonetic": "ˈbækˌpæk",
    "sentence": "A sturdy ergonomic _________ distributes book weight evenly.",
    "sentencePt": "Uma mochila resistente e ergonômica distribui o peso dos livros.",
    "exampleEn": "A sturdy ergonomic Backpack distributes book weight evenly.",
    "examplePt": "Uma mochila resistente e ergonômica distribui o peso dos livros.",
    "gapWord": "Backpack",
    "question": "Como se diz 'Mochila Escolar' em inglês?",
    "hint": "Bolsa resistente com alças para carregar nas costas.",
    "rationale": "'Backpack' (ˈbækˌpæk): Bolsa resistente com alças para carregar nas costas.",
    "options": [
      {
        "id": "A",
        "text": "ASSIGNMENTssignment",
        "isCorrect": false,
        "rationale": "'ASSIGNMENTssignment' significa 'Tarefa / Trabalho Escolar', não 'Mochila Escolar'."
      },
      {
        "id": "B",
        "text": "MONITORonitor",
        "isCorrect": false,
        "rationale": "'MONITORonitor' significa 'Monitor / Tela', não 'Mochila Escolar'."
      },
      {
        "id": "C",
        "text": "LABORATORYaboratory",
        "isCorrect": false,
        "rationale": "'LABORATORYaboratory' significa 'Laboratório de Ciências', não 'Mochila Escolar'."
      },
      {
        "id": "D",
        "text": "Backpack",
        "isCorrect": true,
        "rationale": "'Backpack' é a tradução correta para 'Mochila Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-05",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Marker",
    "wordPt": "Marcador / Pincel Atômico",
    "phonetic": "ˈmɑːr.kər",
    "sentence": "The teacher wrote bullet points with a blue dry-erase _________.",
    "sentencePt": "O professor escreveu tópicos com um marcador azul para quadro.",
    "exampleEn": "The teacher wrote bullet points with a blue dry-erase Marker.",
    "examplePt": "O professor escreveu tópicos com um marcador azul para quadro.",
    "gapWord": "Marker",
    "question": "Como se diz 'Marcador / Pincel Atômico' em inglês?",
    "hint": "Caneta de ponta de feltro com tinta intensa e visível.",
    "rationale": "'Marker' (ˈmɑːr.kər): Caneta de ponta de feltro com tinta intensa e visível.",
    "options": [
      {
        "id": "A",
        "text": "Marker",
        "isCorrect": true,
        "rationale": "'Marker' é a tradução correta para 'Marcador / Pincel Atômico'."
      },
      {
        "id": "B",
        "text": "CALENDARalendar",
        "isCorrect": false,
        "rationale": "'CALENDARalendar' significa 'Calendário Escolar', não 'Marcador / Pincel Atômico'."
      },
      {
        "id": "C",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Marcador / Pincel Atômico'."
      },
      {
        "id": "D",
        "text": "BLACKBOARDlackboard",
        "isCorrect": false,
        "rationale": "'BLACKBOARDlackboard' significa 'Quadro Negro', não 'Marcador / Pincel Atômico'."
      }
    ]
  },
  {
    "id": "sql-sch-m-06",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Highlighter",
    "wordPt": "Marca-texto",
    "phonetic": "ˈhaɪˌlaɪ.tər",
    "sentence": "Emphasize key vocabulary terms with a bright neon _________.",
    "sentencePt": "Destaque os termos-chave de vocabulário com um marca-texto neon.",
    "exampleEn": "Emphasize key vocabulary terms with a bright neon Highlighter.",
    "examplePt": "Destaque os termos-chave de vocabulário com um marca-texto neon.",
    "gapWord": "Highlighter",
    "question": "Como se diz 'Marca-texto' em inglês?",
    "hint": "Caneta com tinta fluorescente transparente para ressaltar textos.",
    "rationale": "'Highlighter' (ˈhaɪˌlaɪ.tər): Caneta com tinta fluorescente transparente para ressaltar textos.",
    "options": [
      {
        "id": "A",
        "text": "FOUNTAINountain",
        "isCorrect": false,
        "rationale": "'FOUNTAINountain' significa 'Bebedouro Escolar', não 'Marca-texto'."
      },
      {
        "id": "B",
        "text": "Highlighter",
        "isCorrect": true,
        "rationale": "'Highlighter' é a tradução correta para 'Marca-texto'."
      },
      {
        "id": "C",
        "text": "HOMEWORKomework",
        "isCorrect": false,
        "rationale": "'HOMEWORKomework' significa 'Dever de Casa', não 'Marca-texto'."
      },
      {
        "id": "D",
        "text": "BACKPACKackpack",
        "isCorrect": false,
        "rationale": "'BACKPACKackpack' significa 'Mochila Escolar', não 'Marca-texto'."
      }
    ]
  },
  {
    "id": "sql-sch-m-07",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Stapler",
    "wordPt": "Grampeador",
    "phonetic": "ˈsteɪ.plər",
    "sentence": "Bind the research report pages together using a heavy-duty _________.",
    "sentencePt": "Prenda as páginas do relatório de pesquisa juntas usando um grampeador.",
    "exampleEn": "Bind the research report pages together using a heavy-duty Stapler.",
    "examplePt": "Prenda as páginas do relatório de pesquisa juntas usando um grampeador.",
    "gapWord": "Stapler",
    "question": "Como se diz 'Grampeador' em inglês?",
    "hint": "Aparelho mecânico que insere grampos metálicos em papéis.",
    "rationale": "'Stapler' (ˈsteɪ.plər): Aparelho mecânico que insere grampos metálicos em papéis.",
    "options": [
      {
        "id": "A",
        "text": "LOCKERSockers",
        "isCorrect": false,
        "rationale": "'LOCKERSockers' significa 'Armários Individuais', não 'Grampeador'."
      },
      {
        "id": "B",
        "text": "HOMEWORKomework",
        "isCorrect": false,
        "rationale": "'HOMEWORKomework' significa 'Dever de Casa', não 'Grampeador'."
      },
      {
        "id": "C",
        "text": "Stapler",
        "isCorrect": true,
        "rationale": "'Stapler' é a tradução correta para 'Grampeador'."
      },
      {
        "id": "D",
        "text": "TIMETABLEimetable",
        "isCorrect": false,
        "rationale": "'TIMETABLEimetable' significa 'Grade Horária Escolar', não 'Grampeador'."
      }
    ]
  },
  {
    "id": "sql-sch-m-08",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Sharpener",
    "wordPt": "Apontador de Lápis",
    "phonetic": "ˈʃɑːrp.nər",
    "sentence": "Sharpen dull colored pencils using a rotary desktop _________.",
    "sentencePt": "Aponte lápis de cor sem ponta usando um apontador de mesa rotativo.",
    "exampleEn": "Sharpen dull colored pencils using a rotary desktop Sharpener.",
    "examplePt": "Aponte lápis de cor sem ponta usando um apontador de mesa rotativo.",
    "gapWord": "Sharpener",
    "question": "Como se diz 'Apontador de Lápis' em inglês?",
    "hint": "Aparelho com lâmina para afiar pontas de lápis.",
    "rationale": "'Sharpener' (ˈʃɑːrp.nər): Aparelho com lâmina para afiar pontas de lápis.",
    "options": [
      {
        "id": "A",
        "text": "BLACKBOARDlackboard",
        "isCorrect": false,
        "rationale": "'BLACKBOARDlackboard' significa 'Quadro Negro', não 'Apontador de Lápis'."
      },
      {
        "id": "B",
        "text": "PENCASEencase",
        "isCorrect": false,
        "rationale": "'PENCASEencase' significa 'Estojo de Canetas', não 'Apontador de Lápis'."
      },
      {
        "id": "C",
        "text": "HANDOUTandout",
        "isCorrect": false,
        "rationale": "'HANDOUTandout' significa 'Apostila / Folheto de Aula', não 'Apontador de Lápis'."
      },
      {
        "id": "D",
        "text": "Sharpener",
        "isCorrect": true,
        "rationale": "'Sharpener' é a tradução correta para 'Apontador de Lápis'."
      }
    ]
  },
  {
    "id": "sql-sch-m-09",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Folder",
    "wordPt": "Pasta com Aba",
    "phonetic": "ˈfoʊl.dər",
    "sentence": "Organize all math handouts into a two-pocket plastic _________.",
    "sentencePt": "Organize todas as apostilas de matemática em uma pasta plástica.",
    "exampleEn": "Organize all math handouts into a two-pocket plastic Folder.",
    "examplePt": "Organize todas as apostilas de matemática em uma pasta plástica.",
    "gapWord": "Folder",
    "question": "Como se diz 'Pasta com Aba' em inglês?",
    "hint": "Capa dobrável de papelão ou plástico para papéis soltos.",
    "rationale": "'Folder' (ˈfoʊl.dər): Capa dobrável de papelão ou plástico para papéis soltos.",
    "options": [
      {
        "id": "A",
        "text": "Folder",
        "isCorrect": true,
        "rationale": "'Folder' é a tradução correta para 'Pasta com Aba'."
      },
      {
        "id": "B",
        "text": "CURTAINurtain",
        "isCorrect": false,
        "rationale": "'CURTAINurtain' significa 'Cortina da Sala', não 'Pasta com Aba'."
      },
      {
        "id": "C",
        "text": "PROTRACTORrotractor",
        "isCorrect": false,
        "rationale": "'PROTRACTORrotractor' significa 'Transferidor', não 'Pasta com Aba'."
      },
      {
        "id": "D",
        "text": "LOCKERSockers",
        "isCorrect": false,
        "rationale": "'LOCKERSockers' significa 'Armários Individuais', não 'Pasta com Aba'."
      }
    ]
  },
  {
    "id": "sql-sch-m-10",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Binder",
    "wordPt": "Fichário",
    "phonetic": "ˈbaɪn.dər",
    "sentence": "Store hole-punched worksheets inside a three-ring _________.",
    "sentencePt": "Armazene folhas perfuradas dentro de um fichário de três argolas.",
    "exampleEn": "Store hole-punched worksheets inside a three-ring Binder.",
    "examplePt": "Armazene folhas perfuradas dentro de um fichário de três argolas.",
    "gapWord": "Binder",
    "question": "Como se diz 'Fichário' em inglês?",
    "hint": "Pasta rígida com ferragem de argolas para arquivar folhas.",
    "rationale": "'Binder' (ˈbaɪn.dər): Pasta rígida com ferragem de argolas para arquivar folhas.",
    "options": [
      {
        "id": "A",
        "text": "FOLDERolder",
        "isCorrect": false,
        "rationale": "'FOLDERolder' significa 'Pasta com Aba', não 'Fichário'."
      },
      {
        "id": "B",
        "text": "Binder",
        "isCorrect": true,
        "rationale": "'Binder' é a tradução correta para 'Fichário'."
      },
      {
        "id": "C",
        "text": "LABORATORYaboratory",
        "isCorrect": false,
        "rationale": "'LABORATORYaboratory' significa 'Laboratório de Ciências', não 'Fichário'."
      },
      {
        "id": "D",
        "text": "SCREENcreen",
        "isCorrect": false,
        "rationale": "'SCREENcreen' significa 'Tela de Projeção', não 'Fichário'."
      }
    ]
  },
  {
    "id": "sql-sch-m-11",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Calculator",
    "wordPt": "Calculadora",
    "phonetic": "ˈkæl.kjəˌleɪ.tər",
    "sentence": "Students in trigonometry utilize an approved scientific _________.",
    "sentencePt": "Estudantes em trigonometria utilizam uma calculadora científica aprovada.",
    "exampleEn": "Students in trigonometry utilize an approved scientific Calculator.",
    "examplePt": "Estudantes em trigonometria utilizam uma calculadora científica aprovada.",
    "gapWord": "Calculator",
    "question": "Como se diz 'Calculadora' em inglês?",
    "hint": "Dispositivo eletrônico para realizar operações matemáticas.",
    "rationale": "'Calculator' (ˈkæl.kjəˌleɪ.tər): Dispositivo eletrônico para realizar operações matemáticas.",
    "options": [
      {
        "id": "A",
        "text": "COMPASSompass",
        "isCorrect": false,
        "rationale": "'COMPASSompass' significa 'Compasso Escolar', não 'Calculadora'."
      },
      {
        "id": "B",
        "text": "SCREENcreen",
        "isCorrect": false,
        "rationale": "'SCREENcreen' significa 'Tela de Projeção', não 'Calculadora'."
      },
      {
        "id": "C",
        "text": "Calculator",
        "isCorrect": true,
        "rationale": "'Calculator' é a tradução correta para 'Calculadora'."
      },
      {
        "id": "D",
        "text": "MONITORonitor",
        "isCorrect": false,
        "rationale": "'MONITORonitor' significa 'Monitor / Tela', não 'Calculadora'."
      }
    ]
  },
  {
    "id": "sql-sch-m-12",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Computer",
    "wordPt": "Computador",
    "phonetic": "kəmˈpjuː.tər",
    "sentence": "The media lab is equipped with modern desktop _________.",
    "sentencePt": "O laboratório de informática está equipado com computador de mesa moderno.",
    "exampleEn": "The media lab is equipped with modern desktop Computer.",
    "examplePt": "O laboratório de informática está equipado com computador de mesa moderno.",
    "gapWord": "Computer",
    "question": "Como se diz 'Computador' em inglês?",
    "hint": "Máquina eletrônica digital programável de processamento de dados.",
    "rationale": "'Computer' (kəmˈpjuː.tər): Máquina eletrônica digital programável de processamento de dados.",
    "options": [
      {
        "id": "A",
        "text": "DOCUMENTocument",
        "isCorrect": false,
        "rationale": "'DOCUMENTocument' significa 'Documento Oficial', não 'Computador'."
      },
      {
        "id": "B",
        "text": "LIBRARYibrary",
        "isCorrect": false,
        "rationale": "'LIBRARYibrary' significa 'Biblioteca', não 'Computador'."
      },
      {
        "id": "C",
        "text": "FOUNTAINountain",
        "isCorrect": false,
        "rationale": "'FOUNTAINountain' significa 'Bebedouro Escolar', não 'Computador'."
      },
      {
        "id": "D",
        "text": "Computer",
        "isCorrect": true,
        "rationale": "'Computer' é a tradução correta para 'Computador'."
      }
    ]
  },
  {
    "id": "sql-sch-m-13",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Keyboard",
    "wordPt": "Teclado",
    "phonetic": "ˈkiːˌbɔːrd",
    "sentence": "Type your research paper using the tactile computer _________.",
    "sentencePt": "Digite seu trabalho de pesquisa usando o teclado tátil do computador.",
    "exampleEn": "Type your research paper using the tactile computer Keyboard.",
    "examplePt": "Digite seu trabalho de pesquisa usando o teclado tátil do computador.",
    "gapWord": "Keyboard",
    "question": "Como se diz 'Teclado' em inglês?",
    "hint": "Conjunto de teclas para entrada de dados em computadores.",
    "rationale": "'Keyboard' (ˈkiːˌbɔːrd): Conjunto de teclas para entrada de dados em computadores.",
    "options": [
      {
        "id": "A",
        "text": "Keyboard",
        "isCorrect": true,
        "rationale": "'Keyboard' é a tradução correta para 'Teclado'."
      },
      {
        "id": "B",
        "text": "DOCUMENTocument",
        "isCorrect": false,
        "rationale": "'DOCUMENTocument' significa 'Documento Oficial', não 'Teclado'."
      },
      {
        "id": "C",
        "text": "CABINETabinet",
        "isCorrect": false,
        "rationale": "'CABINETabinet' significa 'Armário de Arquivo', não 'Teclado'."
      },
      {
        "id": "D",
        "text": "ENVELOPEnvelope",
        "isCorrect": false,
        "rationale": "'ENVELOPEnvelope' significa 'Envelope', não 'Teclado'."
      }
    ]
  },
  {
    "id": "sql-sch-m-14",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Monitor",
    "wordPt": "Monitor / Tela",
    "phonetic": "ˈmɑː.nə.tər",
    "sentence": "Look up at the high-definition display _________ on the wall.",
    "sentencePt": "Olhe para a tela do monitor de alta definição na parede.",
    "exampleEn": "Look up at the high-definition display Monitor on the wall.",
    "examplePt": "Olhe para a tela do monitor de alta definição na parede.",
    "gapWord": "Monitor",
    "question": "Como se diz 'Monitor / Tela' em inglês?",
    "hint": "Dispositivo de saída visual que exibe imagens e texto.",
    "rationale": "'Monitor' (ˈmɑː.nə.tər): Dispositivo de saída visual que exibe imagens e texto.",
    "options": [
      {
        "id": "A",
        "text": "SHARPENERharpener",
        "isCorrect": false,
        "rationale": "'SHARPENERharpener' significa 'Apontador de Lápis', não 'Monitor / Tela'."
      },
      {
        "id": "B",
        "text": "Monitor",
        "isCorrect": true,
        "rationale": "'Monitor' é a tradução correta para 'Monitor / Tela'."
      },
      {
        "id": "C",
        "text": "ERASERraser",
        "isCorrect": false,
        "rationale": "'ERASERraser' significa 'Borracha Escolar', não 'Monitor / Tela'."
      },
      {
        "id": "D",
        "text": "CALCULATORalculator",
        "isCorrect": false,
        "rationale": "'CALCULATORalculator' significa 'Calculadora', não 'Monitor / Tela'."
      }
    ]
  },
  {
    "id": "sql-sch-m-15",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Screen",
    "wordPt": "Tela de Projeção",
    "phonetic": "skriːn",
    "sentence": "The lecture slides appeared brightly on the pull-down _________.",
    "sentencePt": "Os slides da palestra apareceram brilhantes na tela retrátil.",
    "exampleEn": "The lecture slides appeared brightly on the pull-down Screen.",
    "examplePt": "Os slides da palestra apareceram brilhantes na tela retrátil.",
    "gapWord": "Screen",
    "question": "Como se diz 'Tela de Projeção' em inglês?",
    "hint": "Superfície branca ampla sobre a qual imagens são projetadas.",
    "rationale": "'Screen' (skriːn): Superfície branca ampla sobre a qual imagens são projetadas.",
    "options": [
      {
        "id": "A",
        "text": "CABINETabinet",
        "isCorrect": false,
        "rationale": "'CABINETabinet' significa 'Armário de Arquivo', não 'Tela de Projeção'."
      },
      {
        "id": "B",
        "text": "COMPUTERomputer",
        "isCorrect": false,
        "rationale": "'COMPUTERomputer' significa 'Computador', não 'Tela de Projeção'."
      },
      {
        "id": "C",
        "text": "Screen",
        "isCorrect": true,
        "rationale": "'Screen' é a tradução correta para 'Tela de Projeção'."
      },
      {
        "id": "D",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Tela de Projeção'."
      }
    ]
  },
  {
    "id": "sql-sch-m-16",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Projector",
    "wordPt": "Projetor Multimídia",
    "phonetic": "prəˈdʒɛk.tər",
    "sentence": "Connect your laptop to the digital overhead _________.",
    "sentencePt": "Conecte seu notebook ao projetor multimídia digital.",
    "exampleEn": "Connect your laptop to the digital overhead Projector.",
    "examplePt": "Conecte seu notebook ao projetor multimídia digital.",
    "gapWord": "Projector",
    "question": "Como se diz 'Projetor Multimídia' em inglês?",
    "hint": "Aparelho óptico-eletrônico que projeta imagens ampliadas.",
    "rationale": "'Projector' (prəˈdʒɛk.tər): Aparelho óptico-eletrônico que projeta imagens ampliadas.",
    "options": [
      {
        "id": "A",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Projetor Multimídia'."
      },
      {
        "id": "B",
        "text": "CALCULATORalculator",
        "isCorrect": false,
        "rationale": "'CALCULATORalculator' significa 'Calculadora', não 'Projetor Multimídia'."
      },
      {
        "id": "C",
        "text": "FOUNTAINountain",
        "isCorrect": false,
        "rationale": "'FOUNTAINountain' significa 'Bebedouro Escolar', não 'Projetor Multimídia'."
      },
      {
        "id": "D",
        "text": "Projector",
        "isCorrect": true,
        "rationale": "'Projector' é a tradução correta para 'Projetor Multimídia'."
      }
    ]
  },
  {
    "id": "sql-sch-m-17",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Whiteboard",
    "wordPt": "Quadro Branco",
    "phonetic": "ˈwaɪtˌbɔːrd",
    "sentence": "Wipe the dry-erase _________ completely clean with an eraser.",
    "sentencePt": "Limpe o quadro branco completamente usando um apagador.",
    "exampleEn": "Wipe the dry-erase Whiteboard completely clean with an eraser.",
    "examplePt": "Limpe o quadro branco completamente usando um apagador.",
    "gapWord": "Whiteboard",
    "question": "Como se diz 'Quadro Branco' em inglês?",
    "hint": "Painel liso brilhante para escrita com marcadores específicos.",
    "rationale": "'Whiteboard' (ˈwaɪtˌbɔːrd): Painel liso brilhante para escrita com marcadores específicos.",
    "options": [
      {
        "id": "A",
        "text": "Whiteboard",
        "isCorrect": true,
        "rationale": "'Whiteboard' é a tradução correta para 'Quadro Branco'."
      },
      {
        "id": "B",
        "text": "LIBRARYibrary",
        "isCorrect": false,
        "rationale": "'LIBRARYibrary' significa 'Biblioteca', não 'Quadro Branco'."
      },
      {
        "id": "C",
        "text": "COMPASSompass",
        "isCorrect": false,
        "rationale": "'COMPASSompass' significa 'Compasso Escolar', não 'Quadro Branco'."
      },
      {
        "id": "D",
        "text": "WORKSHEETorksheet",
        "isCorrect": false,
        "rationale": "'WORKSHEETorksheet' significa 'Folha de Exercícios / Lista', não 'Quadro Branco'."
      }
    ]
  },
  {
    "id": "sql-sch-m-18",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Blackboard",
    "wordPt": "Quadro Negro",
    "phonetic": "ˈblækˌbɔːrd",
    "sentence": "Traditional classrooms once used a slate stone _________.",
    "sentencePt": "Salas de aula tradicionais usavam antigamente um quadro negro de ardósia.",
    "exampleEn": "Traditional classrooms once used a slate stone Blackboard.",
    "examplePt": "Salas de aula tradicionais usavam antigamente um quadro negro de ardósia.",
    "gapWord": "Blackboard",
    "question": "Como se diz 'Quadro Negro' em inglês?",
    "hint": "Quadro escuro tradicional para escrita com giz escolar.",
    "rationale": "'Blackboard' (ˈblækˌbɔːrd): Quadro escuro tradicional para escrita com giz escolar.",
    "options": [
      {
        "id": "A",
        "text": "CANTEENanteen",
        "isCorrect": false,
        "rationale": "'CANTEENanteen' significa 'Cantina Escolar', não 'Quadro Negro'."
      },
      {
        "id": "B",
        "text": "Blackboard",
        "isCorrect": true,
        "rationale": "'Blackboard' é a tradução correta para 'Quadro Negro'."
      },
      {
        "id": "C",
        "text": "BACKPACKackpack",
        "isCorrect": false,
        "rationale": "'BACKPACKackpack' significa 'Mochila Escolar', não 'Quadro Negro'."
      },
      {
        "id": "D",
        "text": "CALENDARalendar",
        "isCorrect": false,
        "rationale": "'CALENDARalendar' significa 'Calendário Escolar', não 'Quadro Negro'."
      }
    ]
  },
  {
    "id": "sql-sch-m-19",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Textbook",
    "wordPt": "Livro Didático",
    "phonetic": "ˈtɛkstˌbʊk",
    "sentence": "The school issued a comprehensive physics _________ to each student.",
    "sentencePt": "A escola forneceu um livro didático abrangente de física a cada aluno.",
    "exampleEn": "The school issued a comprehensive physics Textbook to each student.",
    "examplePt": "A escola forneceu um livro didático abrangente de física a cada aluno.",
    "gapWord": "Textbook",
    "question": "Como se diz 'Livro Didático' em inglês?",
    "hint": "Manual padronizado para o ensino de uma disciplina.",
    "rationale": "'Textbook' (ˈtɛkstˌbʊk): Manual padronizado para o ensino de uma disciplina.",
    "options": [
      {
        "id": "A",
        "text": "WHITEBOARDhiteboard",
        "isCorrect": false,
        "rationale": "'WHITEBOARDhiteboard' significa 'Quadro Branco', não 'Livro Didático'."
      },
      {
        "id": "B",
        "text": "CAFETERIAafeteria",
        "isCorrect": false,
        "rationale": "'CAFETERIAafeteria' significa 'Refeitório Escolar', não 'Livro Didático'."
      },
      {
        "id": "C",
        "text": "Textbook",
        "isCorrect": true,
        "rationale": "'Textbook' é a tradução correta para 'Livro Didático'."
      },
      {
        "id": "D",
        "text": "LIBRARYibrary",
        "isCorrect": false,
        "rationale": "'LIBRARYibrary' significa 'Biblioteca', não 'Livro Didático'."
      }
    ]
  },
  {
    "id": "sql-sch-m-20",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Dictionary",
    "wordPt": "Dicionário",
    "phonetic": "ˈdɪk.ʃəˌnɛr.i",
    "sentence": "Consult the bilingual _________ for precise phonetic spelling.",
    "sentencePt": "Consulte o dicionário bilíngue para pronúncia fonética precisa.",
    "exampleEn": "Consult the bilingual Dictionary for precise phonetic spelling.",
    "examplePt": "Consulte o dicionário bilíngue para pronúncia fonética precisa.",
    "gapWord": "Dictionary",
    "question": "Como se diz 'Dicionário' em inglês?",
    "hint": "Obra de referência com definições ordenadas alfabeticamente.",
    "rationale": "'Dictionary' (ˈdɪk.ʃəˌnɛr.i): Obra de referência com definições ordenadas alfabeticamente.",
    "options": [
      {
        "id": "A",
        "text": "CABINETabinet",
        "isCorrect": false,
        "rationale": "'CABINETabinet' significa 'Armário de Arquivo', não 'Dicionário'."
      },
      {
        "id": "B",
        "text": "CURTAINurtain",
        "isCorrect": false,
        "rationale": "'CURTAINurtain' significa 'Cortina da Sala', não 'Dicionário'."
      },
      {
        "id": "C",
        "text": "FOLDERolder",
        "isCorrect": false,
        "rationale": "'FOLDERolder' significa 'Pasta com Aba', não 'Dicionário'."
      },
      {
        "id": "D",
        "text": "Dictionary",
        "isCorrect": true,
        "rationale": "'Dictionary' é a tradução correta para 'Dicionário'."
      }
    ]
  },
  {
    "id": "sql-sch-m-21",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Pencase",
    "wordPt": "Estojo de Canetas",
    "phonetic": "ˈpɛn.keɪs",
    "sentence": "Zip your pens and compass securely inside your leather _________.",
    "sentencePt": "Feche suas canetas e compasso com segurança dentro do seu estojo.",
    "exampleEn": "Zip your pens and compass securely inside your leather Pencase.",
    "examplePt": "Feche suas canetas e compasso com segurança dentro do seu estojo.",
    "gapWord": "Pencase",
    "question": "Como se diz 'Estojo de Canetas' em inglês?",
    "hint": "Estojo portátil compacto para acondicionar materiais de escrita.",
    "rationale": "'Pencase' (ˈpɛn.keɪs): Estojo portátil compacto para acondicionar materiais de escrita.",
    "options": [
      {
        "id": "A",
        "text": "Pencase",
        "isCorrect": true,
        "rationale": "'Pencase' é a tradução correta para 'Estojo de Canetas'."
      },
      {
        "id": "B",
        "text": "TIMETABLEimetable",
        "isCorrect": false,
        "rationale": "'TIMETABLEimetable' significa 'Grade Horária Escolar', não 'Estojo de Canetas'."
      },
      {
        "id": "C",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Estojo de Canetas'."
      },
      {
        "id": "D",
        "text": "STAPLERtapler",
        "isCorrect": false,
        "rationale": "'STAPLERtapler' significa 'Grampeador', não 'Estojo de Canetas'."
      }
    ]
  },
  {
    "id": "sql-sch-m-22",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Envelope",
    "wordPt": "Envelope",
    "phonetic": "ˈɛn.vəˌloʊp",
    "sentence": "Seal the official report card inside a stamped mailing _________.",
    "sentencePt": "Lacre o boletim escolar oficial dentro de um envelope selado.",
    "exampleEn": "Seal the official report card inside a stamped mailing Envelope.",
    "examplePt": "Lacre o boletim escolar oficial dentro de um envelope selado.",
    "gapWord": "Envelope",
    "question": "Como se diz 'Envelope' em inglês?",
    "hint": "Invólucro dobrado de papel para correspondência e cartas.",
    "rationale": "'Envelope' (ˈɛn.vəˌloʊp): Invólucro dobrado de papel para correspondência e cartas.",
    "options": [
      {
        "id": "A",
        "text": "BOOKSHELFookshelf",
        "isCorrect": false,
        "rationale": "'BOOKSHELFookshelf' significa 'Estante de Livros', não 'Envelope'."
      },
      {
        "id": "B",
        "text": "Envelope",
        "isCorrect": true,
        "rationale": "'Envelope' é a tradução correta para 'Envelope'."
      },
      {
        "id": "C",
        "text": "TEXTBOOKextbook",
        "isCorrect": false,
        "rationale": "'TEXTBOOKextbook' significa 'Livro Didático', não 'Envelope'."
      },
      {
        "id": "D",
        "text": "UNIFORMniform",
        "isCorrect": false,
        "rationale": "'UNIFORMniform' significa 'Uniforme Escolar', não 'Envelope'."
      }
    ]
  },
  {
    "id": "sql-sch-m-23",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Clipboard",
    "wordPt": "Prancheta",
    "phonetic": "ˈklɪpˌbɔːrd",
    "sentence": "The coach tracked lap times on an aluminum _________.",
    "sentencePt": "O treinador anotou os tempos das voltas em uma prancheta de alumínio.",
    "exampleEn": "The coach tracked lap times on an aluminum Clipboard.",
    "examplePt": "O treinador anotou os tempos das voltas em uma prancheta de alumínio.",
    "gapWord": "Clipboard",
    "question": "Como se diz 'Prancheta' em inglês?",
    "hint": "Tábua rígida portátil com mola metálica para prender folhas.",
    "rationale": "'Clipboard' (ˈklɪpˌbɔːrd): Tábua rígida portátil com mola metálica para prender folhas.",
    "options": [
      {
        "id": "A",
        "text": "PROTRACTORrotractor",
        "isCorrect": false,
        "rationale": "'PROTRACTORrotractor' significa 'Transferidor', não 'Prancheta'."
      },
      {
        "id": "B",
        "text": "CERTIFICATEertificate",
        "isCorrect": false,
        "rationale": "'CERTIFICATEertificate' significa 'Certificado Escolar', não 'Prancheta'."
      },
      {
        "id": "C",
        "text": "Clipboard",
        "isCorrect": true,
        "rationale": "'Clipboard' é a tradução correta para 'Prancheta'."
      },
      {
        "id": "D",
        "text": "ERASERraser",
        "isCorrect": false,
        "rationale": "'ERASERraser' significa 'Borracha Escolar', não 'Prancheta'."
      }
    ]
  },
  {
    "id": "sql-sch-m-24",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Schedule",
    "wordPt": "Horário / Cronograma",
    "phonetic": "ˈskɛdʒ.uːl",
    "sentence": "Check your daily class _________ to see which room is next.",
    "sentencePt": "Verifique seu horário diário de aulas para ver qual sala é a próxima.",
    "exampleEn": "Check your daily class Schedule to see which room is next.",
    "examplePt": "Verifique seu horário diário de aulas para ver qual sala é a próxima.",
    "gapWord": "Schedule",
    "question": "Como se diz 'Horário / Cronograma' em inglês?",
    "hint": "Tabela com horários e disciplinas ordenadas semanalmente.",
    "rationale": "'Schedule' (ˈskɛdʒ.uːl): Tabela com horários e disciplinas ordenadas semanalmente.",
    "options": [
      {
        "id": "A",
        "text": "HIGHLIGHTERighlighter",
        "isCorrect": false,
        "rationale": "'HIGHLIGHTERighlighter' significa 'Marca-texto', não 'Horário / Cronograma'."
      },
      {
        "id": "B",
        "text": "ERASERraser",
        "isCorrect": false,
        "rationale": "'ERASERraser' significa 'Borracha Escolar', não 'Horário / Cronograma'."
      },
      {
        "id": "C",
        "text": "ASSIGNMENTssignment",
        "isCorrect": false,
        "rationale": "'ASSIGNMENTssignment' significa 'Tarefa / Trabalho Escolar', não 'Horário / Cronograma'."
      },
      {
        "id": "D",
        "text": "Schedule",
        "isCorrect": true,
        "rationale": "'Schedule' é a tradução correta para 'Horário / Cronograma'."
      }
    ]
  },
  {
    "id": "sql-sch-m-25",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Timetable",
    "wordPt": "Grade Horária Escolar",
    "phonetic": "ˈtaɪmˌteɪ.bəl",
    "sentence": "The weekly academic _________ shows lectures from Monday to Friday.",
    "sentencePt": "A grade horária semanal mostra aulas de segunda a sexta-feira.",
    "exampleEn": "The weekly academic Timetable shows lectures from Monday to Friday.",
    "examplePt": "A grade horária semanal mostra aulas de segunda a sexta-feira.",
    "gapWord": "Timetable",
    "question": "Como se diz 'Grade Horária Escolar' em inglês?",
    "hint": "Quadro sistemático com a distribuição horária das atividades.",
    "rationale": "'Timetable' (ˈtaɪmˌteɪ.bəl): Quadro sistemático com a distribuição horária das atividades.",
    "options": [
      {
        "id": "A",
        "text": "Timetable",
        "isCorrect": true,
        "rationale": "'Timetable' é a tradução correta para 'Grade Horária Escolar'."
      },
      {
        "id": "B",
        "text": "MONITORonitor",
        "isCorrect": false,
        "rationale": "'MONITORonitor' significa 'Monitor / Tela', não 'Grade Horária Escolar'."
      },
      {
        "id": "C",
        "text": "CALCULATORalculator",
        "isCorrect": false,
        "rationale": "'CALCULATORalculator' significa 'Calculadora', não 'Grade Horária Escolar'."
      },
      {
        "id": "D",
        "text": "CERTIFICATEertificate",
        "isCorrect": false,
        "rationale": "'CERTIFICATEertificate' significa 'Certificado Escolar', não 'Grade Horária Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-26",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Calendar",
    "wordPt": "Calendário Escolar",
    "phonetic": "ˈkæl.ən.dər",
    "sentence": "Mark exam dates on the academic wall _________.",
    "sentencePt": "Marque as datas de provas no calendário escolar de parede.",
    "exampleEn": "Mark exam dates on the academic wall Calendar.",
    "examplePt": "Marque as datas de provas no calendário escolar de parede.",
    "gapWord": "Calendar",
    "question": "Como se diz 'Calendário Escolar' em inglês?",
    "hint": "Sistema ordenado de divisão do ano em meses, semanas e dias.",
    "rationale": "'Calendar' (ˈkæl.ən.dər): Sistema ordenado de divisão do ano em meses, semanas e dias.",
    "options": [
      {
        "id": "A",
        "text": "CAFETERIAafeteria",
        "isCorrect": false,
        "rationale": "'CAFETERIAafeteria' significa 'Refeitório Escolar', não 'Calendário Escolar'."
      },
      {
        "id": "B",
        "text": "Calendar",
        "isCorrect": true,
        "rationale": "'Calendar' é a tradução correta para 'Calendário Escolar'."
      },
      {
        "id": "C",
        "text": "CANTEENanteen",
        "isCorrect": false,
        "rationale": "'CANTEENanteen' significa 'Cantina Escolar', não 'Calendário Escolar'."
      },
      {
        "id": "D",
        "text": "DIPLOMAiploma",
        "isCorrect": false,
        "rationale": "'DIPLOMAiploma' significa 'Diploma', não 'Calendário Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-27",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Uniform",
    "wordPt": "Uniforme Escolar",
    "phonetic": "ˈjuː.nəˌfɔːrm",
    "sentence": "Students must wear the navy blue school _________ daily.",
    "sentencePt": "Estudantes devem usar o uniforme escolar azul marinho diariamente.",
    "exampleEn": "Students must wear the navy blue school Uniform daily.",
    "examplePt": "Estudantes devem usar o uniforme escolar azul marinho diariamente.",
    "gapWord": "Uniform",
    "question": "Como se diz 'Uniforme Escolar' em inglês?",
    "hint": "Conjunto padronizado de vestuário obrigatório para alunos.",
    "rationale": "'Uniform' (ˈjuː.nəˌfɔːrm): Conjunto padronizado de vestuário obrigatório para alunos.",
    "options": [
      {
        "id": "A",
        "text": "MARKERarker",
        "isCorrect": false,
        "rationale": "'MARKERarker' significa 'Marcador / Pincel Atômico', não 'Uniforme Escolar'."
      },
      {
        "id": "B",
        "text": "TIMETABLEimetable",
        "isCorrect": false,
        "rationale": "'TIMETABLEimetable' significa 'Grade Horária Escolar', não 'Uniforme Escolar'."
      },
      {
        "id": "C",
        "text": "Uniform",
        "isCorrect": true,
        "rationale": "'Uniform' é a tradução correta para 'Uniforme Escolar'."
      },
      {
        "id": "D",
        "text": "COMPASSompass",
        "isCorrect": false,
        "rationale": "'COMPASSompass' significa 'Compasso Escolar', não 'Uniforme Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-28",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Lockers",
    "wordPt": "Armários Individuais",
    "phonetic": "ˈlɑː.kərz",
    "sentence": "Keep textbooks between classes inside the student corridor _________.",
    "sentencePt": "Guarde livros didáticos entre as aulas dentro dos armários do corredor.",
    "exampleEn": "Keep textbooks between classes inside the student corridor Lockers.",
    "examplePt": "Guarde livros didáticos entre as aulas dentro dos armários do corredor.",
    "gapWord": "Lockers",
    "question": "Como se diz 'Armários Individuais' em inglês?",
    "hint": "Compartimentos metálicos trancáveis para pertences de estudantes.",
    "rationale": "'Lockers' (ˈlɑː.kərz): Compartimentos metálicos trancáveis para pertences de estudantes.",
    "options": [
      {
        "id": "A",
        "text": "CERTIFICATEertificate",
        "isCorrect": false,
        "rationale": "'CERTIFICATEertificate' significa 'Certificado Escolar', não 'Armários Individuais'."
      },
      {
        "id": "B",
        "text": "PROTRACTORrotractor",
        "isCorrect": false,
        "rationale": "'PROTRACTORrotractor' significa 'Transferidor', não 'Armários Individuais'."
      },
      {
        "id": "C",
        "text": "HOMEWORKomework",
        "isCorrect": false,
        "rationale": "'HOMEWORKomework' significa 'Dever de Casa', não 'Armários Individuais'."
      },
      {
        "id": "D",
        "text": "Lockers",
        "isCorrect": true,
        "rationale": "'Lockers' é a tradução correta para 'Armários Individuais'."
      }
    ]
  },
  {
    "id": "sql-sch-m-29",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Canteen",
    "wordPt": "Cantina Escolar",
    "phonetic": "kænˈtiːn",
    "sentence": "Grab a healthy warm lunch at the campus _________.",
    "sentencePt": "Pegue um almoço quente e saudável na cantina do campus.",
    "exampleEn": "Grab a healthy warm lunch at the campus Canteen.",
    "examplePt": "Pegue um almoço quente e saudável na cantina do campus.",
    "gapWord": "Canteen",
    "question": "Como se diz 'Cantina Escolar' em inglês?",
    "hint": "Local onde são servidas e vendidas refeições rápidas em escolas.",
    "rationale": "'Canteen' (kænˈtiːn): Local onde são servidas e vendidas refeições rápidas em escolas.",
    "options": [
      {
        "id": "A",
        "text": "Canteen",
        "isCorrect": true,
        "rationale": "'Canteen' é a tradução correta para 'Cantina Escolar'."
      },
      {
        "id": "B",
        "text": "FOUNTAINountain",
        "isCorrect": false,
        "rationale": "'FOUNTAINountain' significa 'Bebedouro Escolar', não 'Cantina Escolar'."
      },
      {
        "id": "C",
        "text": "CUPBOARDupboard",
        "isCorrect": false,
        "rationale": "'CUPBOARDupboard' significa 'Armário com Prateleiras', não 'Cantina Escolar'."
      },
      {
        "id": "D",
        "text": "UNIFORMniform",
        "isCorrect": false,
        "rationale": "'UNIFORMniform' significa 'Uniforme Escolar', não 'Cantina Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-30",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Cafeteria",
    "wordPt": "Refeitório Escolar",
    "phonetic": "ˌkæf.əˈtɪr.i.ə",
    "sentence": "Students gather at lunchtime in the spacious school _________.",
    "sentencePt": "Alunos se reúnem na hora do almoço no espaçoso refeitório escolar.",
    "exampleEn": "Students gather at lunchtime in the spacious school Cafeteria.",
    "examplePt": "Alunos se reúnem na hora do almoço no espaçoso refeitório escolar.",
    "gapWord": "Cafeteria",
    "question": "Como se diz 'Refeitório Escolar' em inglês?",
    "hint": "Grande salão com mesas para refeições coletivas.",
    "rationale": "'Cafeteria' (ˌkæf.əˈtɪr.i.ə): Grande salão com mesas para refeições coletivas.",
    "options": [
      {
        "id": "A",
        "text": "BOOKSHELFookshelf",
        "isCorrect": false,
        "rationale": "'BOOKSHELFookshelf' significa 'Estante de Livros', não 'Refeitório Escolar'."
      },
      {
        "id": "B",
        "text": "Cafeteria",
        "isCorrect": true,
        "rationale": "'Cafeteria' é a tradução correta para 'Refeitório Escolar'."
      },
      {
        "id": "C",
        "text": "MONITORonitor",
        "isCorrect": false,
        "rationale": "'MONITORonitor' significa 'Monitor / Tela', não 'Refeitório Escolar'."
      },
      {
        "id": "D",
        "text": "STAPLERtapler",
        "isCorrect": false,
        "rationale": "'STAPLERtapler' significa 'Grampeador', não 'Refeitório Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-31",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Library",
    "wordPt": "Biblioteca",
    "phonetic": "ˈlaɪˌbrɛr.i",
    "sentence": "Study quietly in the reference section of the school _________.",
    "sentencePt": "Estude em silêncio na seção de referência da biblioteca escolar.",
    "exampleEn": "Study quietly in the reference section of the school Library.",
    "examplePt": "Estude em silêncio na seção de referência da biblioteca escolar.",
    "gapWord": "Library",
    "question": "Como se diz 'Biblioteca' em inglês?",
    "hint": "Espaço de guarda, consulta e empréstimo de acervos bibliográficos.",
    "rationale": "'Library' (ˈlaɪˌbrɛr.i): Espaço de guarda, consulta e empréstimo de acervos bibliográficos.",
    "options": [
      {
        "id": "A",
        "text": "LOCKERSockers",
        "isCorrect": false,
        "rationale": "'LOCKERSockers' significa 'Armários Individuais', não 'Biblioteca'."
      },
      {
        "id": "B",
        "text": "CABINETabinet",
        "isCorrect": false,
        "rationale": "'CABINETabinet' significa 'Armário de Arquivo', não 'Biblioteca'."
      },
      {
        "id": "C",
        "text": "Library",
        "isCorrect": true,
        "rationale": "'Library' é a tradução correta para 'Biblioteca'."
      },
      {
        "id": "D",
        "text": "SCHEDULEchedule",
        "isCorrect": false,
        "rationale": "'SCHEDULEchedule' significa 'Horário / Cronograma', não 'Biblioteca'."
      }
    ]
  },
  {
    "id": "sql-sch-m-32",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Classroom",
    "wordPt": "Sala de Aula",
    "phonetic": "ˈklæsˌruːm",
    "sentence": "The modern _________ features smart boards and flexible seating.",
    "sentencePt": "A sala de aula moderna conta com lousas digitais e mesas flexíveis.",
    "exampleEn": "The modern Classroom features smart boards and flexible seating.",
    "examplePt": "A sala de aula moderna conta com lousas digitais e mesas flexíveis.",
    "gapWord": "Classroom",
    "question": "Como se diz 'Sala de Aula' em inglês?",
    "hint": "Espaço pedagógico dedicado às aulas e interação docente-aluno.",
    "rationale": "'Classroom' (ˈklæsˌruːm): Espaço pedagógico dedicado às aulas e interação docente-aluno.",
    "options": [
      {
        "id": "A",
        "text": "PROTRACTORrotractor",
        "isCorrect": false,
        "rationale": "'PROTRACTORrotractor' significa 'Transferidor', não 'Sala de Aula'."
      },
      {
        "id": "B",
        "text": "BOOKSHELFookshelf",
        "isCorrect": false,
        "rationale": "'BOOKSHELFookshelf' significa 'Estante de Livros', não 'Sala de Aula'."
      },
      {
        "id": "C",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Sala de Aula'."
      },
      {
        "id": "D",
        "text": "Classroom",
        "isCorrect": true,
        "rationale": "'Classroom' é a tradução correta para 'Sala de Aula'."
      }
    ]
  },
  {
    "id": "sql-sch-m-33",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Laboratory",
    "wordPt": "Laboratório de Ciências",
    "phonetic": "ˈlæb.rəˌtɔːr.i",
    "sentence": "Safety goggles are strictly required in the chemistry _________.",
    "sentencePt": "Óculos de proteção são rigorosamente obrigatórios no laboratório de química.",
    "exampleEn": "Safety goggles are strictly required in the chemistry Laboratory.",
    "examplePt": "Óculos de proteção são rigorosamente obrigatórios no laboratório de química.",
    "gapWord": "Laboratory",
    "question": "Como se diz 'Laboratório de Ciências' em inglês?",
    "hint": "Sala equipada para testes, observações e experimentos práticos.",
    "rationale": "'Laboratory' (ˈlæb.rəˌtɔːr.i): Sala equipada para testes, observações e experimentos práticos.",
    "options": [
      {
        "id": "A",
        "text": "Laboratory",
        "isCorrect": true,
        "rationale": "'Laboratory' é a tradução correta para 'Laboratório de Ciências'."
      },
      {
        "id": "B",
        "text": "ASSIGNMENTssignment",
        "isCorrect": false,
        "rationale": "'ASSIGNMENTssignment' significa 'Tarefa / Trabalho Escolar', não 'Laboratório de Ciências'."
      },
      {
        "id": "C",
        "text": "TIMETABLEimetable",
        "isCorrect": false,
        "rationale": "'TIMETABLEimetable' significa 'Grade Horária Escolar', não 'Laboratório de Ciências'."
      },
      {
        "id": "D",
        "text": "SCHEDULEchedule",
        "isCorrect": false,
        "rationale": "'SCHEDULEchedule' significa 'Horário / Cronograma', não 'Laboratório de Ciências'."
      }
    ]
  },
  {
    "id": "sql-sch-m-34",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Microscope",
    "wordPt": "Microscópio",
    "phonetic": "ˈmaɪ.krəˌskoʊp",
    "sentence": "Observe plant stomata under the optical compound _________.",
    "sentencePt": "Observe estômatos vegetais sob o microscópio óptico composto.",
    "exampleEn": "Observe plant stomata under the optical compound Microscope.",
    "examplePt": "Observe estômatos vegetais sob o microscópio óptico composto.",
    "gapWord": "Microscope",
    "question": "Como se diz 'Microscópio' em inglês?",
    "hint": "Instrumento óptico para ampliar imagens de objetos microscópicos.",
    "rationale": "'Microscope' (ˈmaɪ.krəˌskoʊp): Instrumento óptico para ampliar imagens de objetos microscópicos.",
    "options": [
      {
        "id": "A",
        "text": "WHITEBOARDhiteboard",
        "isCorrect": false,
        "rationale": "'WHITEBOARDhiteboard' significa 'Quadro Branco', não 'Microscópio'."
      },
      {
        "id": "B",
        "text": "Microscope",
        "isCorrect": true,
        "rationale": "'Microscope' é a tradução correta para 'Microscópio'."
      },
      {
        "id": "C",
        "text": "TEXTBOOKextbook",
        "isCorrect": false,
        "rationale": "'TEXTBOOKextbook' significa 'Livro Didático', não 'Microscópio'."
      },
      {
        "id": "D",
        "text": "HANDOUTandout",
        "isCorrect": false,
        "rationale": "'HANDOUTandout' significa 'Apostila / Folheto de Aula', não 'Microscópio'."
      }
    ]
  },
  {
    "id": "sql-sch-m-35",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Compass",
    "wordPt": "Compasso Escolar",
    "phonetic": "ˈkʌm.pəs",
    "sentence": "Draw a perfect circle using a metal drafting _________.",
    "sentencePt": "Desenhe um círculo perfeito usando um compasso metálico de desenho.",
    "exampleEn": "Draw a perfect circle using a metal drafting Compass.",
    "examplePt": "Desenhe um círculo perfeito usando um compasso metálico de desenho.",
    "gapWord": "Compass",
    "question": "Como se diz 'Compasso Escolar' em inglês?",
    "hint": "Instrumento articulado para traçar arcos e medir distâncias.",
    "rationale": "'Compass' (ˈkʌm.pəs): Instrumento articulado para traçar arcos e medir distâncias.",
    "options": [
      {
        "id": "A",
        "text": "CLIPBOARDlipboard",
        "isCorrect": false,
        "rationale": "'CLIPBOARDlipboard' significa 'Prancheta', não 'Compasso Escolar'."
      },
      {
        "id": "B",
        "text": "SCHEDULEchedule",
        "isCorrect": false,
        "rationale": "'SCHEDULEchedule' significa 'Horário / Cronograma', não 'Compasso Escolar'."
      },
      {
        "id": "C",
        "text": "Compass",
        "isCorrect": true,
        "rationale": "'Compass' é a tradução correta para 'Compasso Escolar'."
      },
      {
        "id": "D",
        "text": "NOTEBOOKotebook",
        "isCorrect": false,
        "rationale": "'NOTEBOOKotebook' significa 'Caderno', não 'Compasso Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-36",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Protractor",
    "wordPt": "Transferidor",
    "phonetic": "proʊˈtræk.tər",
    "sentence": "Measure the acute angle with a semi-circular clear _________.",
    "sentencePt": "Meça o ângulo agudo com um transferidor transparente semicircular.",
    "exampleEn": "Measure the acute angle with a semi-circular clear Protractor.",
    "examplePt": "Meça o ângulo agudo com um transferidor transparente semicircular.",
    "gapWord": "Protractor",
    "question": "Como se diz 'Transferidor' em inglês?",
    "hint": "Instrumento graduado em graus para medir e marcar ângulos.",
    "rationale": "'Protractor' (proʊˈtræk.tər): Instrumento graduado em graus para medir e marcar ângulos.",
    "options": [
      {
        "id": "A",
        "text": "COMPASSompass",
        "isCorrect": false,
        "rationale": "'COMPASSompass' significa 'Compasso Escolar', não 'Transferidor'."
      },
      {
        "id": "B",
        "text": "ERASERraser",
        "isCorrect": false,
        "rationale": "'ERASERraser' significa 'Borracha Escolar', não 'Transferidor'."
      },
      {
        "id": "C",
        "text": "HOMEWORKomework",
        "isCorrect": false,
        "rationale": "'HOMEWORKomework' significa 'Dever de Casa', não 'Transferidor'."
      },
      {
        "id": "D",
        "text": "Protractor",
        "isCorrect": true,
        "rationale": "'Protractor' é a tradução correta para 'Transferidor'."
      }
    ]
  },
  {
    "id": "sql-sch-m-37",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Diploma",
    "wordPt": "Diploma",
    "phonetic": "dɪˈploʊ.mə",
    "sentence": "Graduates received an official embossed _________ upon completion.",
    "sentencePt": "Formandos receberam um diploma oficial com selo ao concluir.",
    "exampleEn": "Graduates received an official embossed Diploma upon completion.",
    "examplePt": "Formandos receberam um diploma oficial com selo ao concluir.",
    "gapWord": "Diploma",
    "question": "Como se diz 'Diploma' em inglês?",
    "hint": "Certificado formal que atesta a conclusão de curso superior ou médio.",
    "rationale": "'Diploma' (dɪˈploʊ.mə): Certificado formal que atesta a conclusão de curso superior ou médio.",
    "options": [
      {
        "id": "A",
        "text": "Diploma",
        "isCorrect": true,
        "rationale": "'Diploma' é a tradução correta para 'Diploma'."
      },
      {
        "id": "B",
        "text": "PROJECTORrojector",
        "isCorrect": false,
        "rationale": "'PROJECTORrojector' significa 'Projetor Multimídia', não 'Diploma'."
      },
      {
        "id": "C",
        "text": "COMPUTERomputer",
        "isCorrect": false,
        "rationale": "'COMPUTERomputer' significa 'Computador', não 'Diploma'."
      },
      {
        "id": "D",
        "text": "BACKPACKackpack",
        "isCorrect": false,
        "rationale": "'BACKPACKackpack' significa 'Mochila Escolar', não 'Diploma'."
      }
    ]
  },
  {
    "id": "sql-sch-m-38",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Certificate",
    "wordPt": "Certificado Escolar",
    "phonetic": "sərˈtɪf.ə.kət",
    "sentence": "She was awarded an academic achievement _________ of honor.",
    "sentencePt": "Ela recebeu um certificado escolar de mérito acadêmico de honra.",
    "exampleEn": "She was awarded an academic achievement Certificate of honor.",
    "examplePt": "Ela recebeu um certificado escolar de mérito acadêmico de honra.",
    "gapWord": "Certificate",
    "question": "Como se diz 'Certificado Escolar' em inglês?",
    "hint": "Documento formal comprobatório de participação ou conclusão.",
    "rationale": "'Certificate' (sərˈtɪf.ə.kət): Documento formal comprobatório de participação ou conclusão.",
    "options": [
      {
        "id": "A",
        "text": "DOCUMENTocument",
        "isCorrect": false,
        "rationale": "'DOCUMENTocument' significa 'Documento Oficial', não 'Certificado Escolar'."
      },
      {
        "id": "B",
        "text": "Certificate",
        "isCorrect": true,
        "rationale": "'Certificate' é a tradução correta para 'Certificado Escolar'."
      },
      {
        "id": "C",
        "text": "DICTIONARYictionary",
        "isCorrect": false,
        "rationale": "'DICTIONARYictionary' significa 'Dicionário', não 'Certificado Escolar'."
      },
      {
        "id": "D",
        "text": "BOOKSHELFookshelf",
        "isCorrect": false,
        "rationale": "'BOOKSHELFookshelf' significa 'Estante de Livros', não 'Certificado Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-39",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Assignment",
    "wordPt": "Tarefa / Trabalho Escolar",
    "phonetic": "əˈsaɪn.mənt",
    "sentence": "Submit your history essay _________ before midnight Friday.",
    "sentencePt": "Envie seu trabalho escolar de história antes da meia-noite de sexta.",
    "exampleEn": "Submit your history essay Assignment before midnight Friday.",
    "examplePt": "Envie seu trabalho escolar de história antes da meia-noite de sexta.",
    "gapWord": "Assignment",
    "question": "Como se diz 'Tarefa / Trabalho Escolar' em inglês?",
    "hint": "Exercício ou projeto designado aos alunos para avaliação.",
    "rationale": "'Assignment' (əˈsaɪn.mənt): Exercício ou projeto designado aos alunos para avaliação.",
    "options": [
      {
        "id": "A",
        "text": "COMPASSompass",
        "isCorrect": false,
        "rationale": "'COMPASSompass' significa 'Compasso Escolar', não 'Tarefa / Trabalho Escolar'."
      },
      {
        "id": "B",
        "text": "MARKERarker",
        "isCorrect": false,
        "rationale": "'MARKERarker' significa 'Marcador / Pincel Atômico', não 'Tarefa / Trabalho Escolar'."
      },
      {
        "id": "C",
        "text": "Assignment",
        "isCorrect": true,
        "rationale": "'Assignment' é a tradução correta para 'Tarefa / Trabalho Escolar'."
      },
      {
        "id": "D",
        "text": "DIPLOMAiploma",
        "isCorrect": false,
        "rationale": "'DIPLOMAiploma' significa 'Diploma', não 'Tarefa / Trabalho Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-40",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Homework",
    "wordPt": "Dever de Casa",
    "phonetic": "ˈhoʊmˌwɜːrk",
    "sentence": "Complete exercises one through ten for tomorrow's math _________.",
    "sentencePt": "Complete os exercícios de um a dez para o dever de casa de matemática de amanhã.",
    "exampleEn": "Complete exercises one through ten for tomorrow's math Homework.",
    "examplePt": "Complete os exercícios de um a dez para o dever de casa de matemática de amanhã.",
    "gapWord": "Homework",
    "question": "Como se diz 'Dever de Casa' em inglês?",
    "hint": "Atividades pedagógicas realizadas em casa fora do horário de aula.",
    "rationale": "'Homework' (ˈhoʊmˌwɜːrk): Atividades pedagógicas realizadas em casa fora do horário de aula.",
    "options": [
      {
        "id": "A",
        "text": "CURTAINurtain",
        "isCorrect": false,
        "rationale": "'CURTAINurtain' significa 'Cortina da Sala', não 'Dever de Casa'."
      },
      {
        "id": "B",
        "text": "SHARPENERharpener",
        "isCorrect": false,
        "rationale": "'SHARPENERharpener' significa 'Apontador de Lápis', não 'Dever de Casa'."
      },
      {
        "id": "C",
        "text": "DIPLOMAiploma",
        "isCorrect": false,
        "rationale": "'DIPLOMAiploma' significa 'Diploma', não 'Dever de Casa'."
      },
      {
        "id": "D",
        "text": "Homework",
        "isCorrect": true,
        "rationale": "'Homework' é a tradução correta para 'Dever de Casa'."
      }
    ]
  },
  {
    "id": "sql-sch-m-41",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Worksheet",
    "wordPt": "Folha de Exercícios / Lista",
    "phonetic": "ˈwɜːrkˌʃiːt",
    "sentence": "The teacher handed out a printable grammar review _________.",
    "sentencePt": "O professor distribuiu uma folha de exercícios de revisão gramatical.",
    "exampleEn": "The teacher handed out a printable grammar review Worksheet.",
    "examplePt": "O professor distribuiu uma folha de exercícios de revisão gramatical.",
    "gapWord": "Worksheet",
    "question": "Como se diz 'Folha de Exercícios / Lista' em inglês?",
    "hint": "Folha impressa com exercícios práticos para fixação de conteúdo.",
    "rationale": "'Worksheet' (ˈwɜːrkˌʃiːt): Folha impressa com exercícios práticos para fixação de conteúdo.",
    "options": [
      {
        "id": "A",
        "text": "Worksheet",
        "isCorrect": true,
        "rationale": "'Worksheet' é a tradução correta para 'Folha de Exercícios / Lista'."
      },
      {
        "id": "B",
        "text": "DICTIONARYictionary",
        "isCorrect": false,
        "rationale": "'DICTIONARYictionary' significa 'Dicionário', não 'Folha de Exercícios / Lista'."
      },
      {
        "id": "C",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Folha de Exercícios / Lista'."
      },
      {
        "id": "D",
        "text": "CABINETabinet",
        "isCorrect": false,
        "rationale": "'CABINETabinet' significa 'Armário de Arquivo', não 'Folha de Exercícios / Lista'."
      }
    ]
  },
  {
    "id": "sql-sch-m-42",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Handout",
    "wordPt": "Apostila / Folheto de Aula",
    "phonetic": "ˈhændˌaʊt",
    "sentence": "Refer to page two of the printed lecture _________.",
    "sentencePt": "Consulte a página dois da apostila impressa da aula.",
    "exampleEn": "Refer to page two of the printed lecture Handout.",
    "examplePt": "Consulte a página dois da apostila impressa da aula.",
    "gapWord": "Handout",
    "question": "Como se diz 'Apostila / Folheto de Aula' em inglês?",
    "hint": "Material impresso distribuído aos alunos com resumos e dados.",
    "rationale": "'Handout' (ˈhændˌaʊt): Material impresso distribuído aos alunos com resumos e dados.",
    "options": [
      {
        "id": "A",
        "text": "MARKERarker",
        "isCorrect": false,
        "rationale": "'MARKERarker' significa 'Marcador / Pincel Atômico', não 'Apostila / Folheto de Aula'."
      },
      {
        "id": "B",
        "text": "Handout",
        "isCorrect": true,
        "rationale": "'Handout' é a tradução correta para 'Apostila / Folheto de Aula'."
      },
      {
        "id": "C",
        "text": "SCREENcreen",
        "isCorrect": false,
        "rationale": "'SCREENcreen' significa 'Tela de Projeção', não 'Apostila / Folheto de Aula'."
      },
      {
        "id": "D",
        "text": "UNIFORMniform",
        "isCorrect": false,
        "rationale": "'UNIFORMniform' significa 'Uniforme Escolar', não 'Apostila / Folheto de Aula'."
      }
    ]
  },
  {
    "id": "sql-sch-m-43",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Document",
    "wordPt": "Documento Oficial",
    "phonetic": "ˈdɑː.kjə.mənt",
    "sentence": "Present your birth certificate and official school _________.",
    "sentencePt": "Apresente sua certidão de nascimento e documento escolar oficial.",
    "exampleEn": "Present your birth certificate and official school Document.",
    "examplePt": "Apresente sua certidão de nascimento e documento escolar oficial.",
    "gapWord": "Document",
    "question": "Como se diz 'Documento Oficial' em inglês?",
    "hint": "Registro escrito que atesta formalmente fatos ou direitos.",
    "rationale": "'Document' (ˈdɑː.kjə.mənt): Registro escrito que atesta formalmente fatos ou direitos.",
    "options": [
      {
        "id": "A",
        "text": "LOCKERSockers",
        "isCorrect": false,
        "rationale": "'LOCKERSockers' significa 'Armários Individuais', não 'Documento Oficial'."
      },
      {
        "id": "B",
        "text": "DICTIONARYictionary",
        "isCorrect": false,
        "rationale": "'DICTIONARYictionary' significa 'Dicionário', não 'Documento Oficial'."
      },
      {
        "id": "C",
        "text": "Document",
        "isCorrect": true,
        "rationale": "'Document' é a tradução correta para 'Documento Oficial'."
      },
      {
        "id": "D",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Documento Oficial'."
      }
    ]
  },
  {
    "id": "sql-sch-m-44",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Cabinet",
    "wordPt": "Armário de Arquivo",
    "phonetic": "ˈkæb.ə.nət",
    "sentence": "Teacher files are stored securely inside the metal filing _________.",
    "sentencePt": "Arquivos do professor são guardados com segurança no armário de metal.",
    "exampleEn": "Teacher files are stored securely inside the metal filing Cabinet.",
    "examplePt": "Arquivos do professor são guardados com segurança no armário de metal.",
    "gapWord": "Cabinet",
    "question": "Como se diz 'Armário de Arquivo' em inglês?",
    "hint": "Móvel fechado com portas e gavetas para arquivo.",
    "rationale": "'Cabinet' (ˈkæb.ə.nət): Móvel fechado com portas e gavetas para arquivo.",
    "options": [
      {
        "id": "A",
        "text": "MICROSCOPEicroscope",
        "isCorrect": false,
        "rationale": "'MICROSCOPEicroscope' significa 'Microscópio', não 'Armário de Arquivo'."
      },
      {
        "id": "B",
        "text": "FOUNTAINountain",
        "isCorrect": false,
        "rationale": "'FOUNTAINountain' significa 'Bebedouro Escolar', não 'Armário de Arquivo'."
      },
      {
        "id": "C",
        "text": "HOMEWORKomework",
        "isCorrect": false,
        "rationale": "'HOMEWORKomework' significa 'Dever de Casa', não 'Armário de Arquivo'."
      },
      {
        "id": "D",
        "text": "Cabinet",
        "isCorrect": true,
        "rationale": "'Cabinet' é a tradução correta para 'Armário de Arquivo'."
      }
    ]
  },
  {
    "id": "sql-sch-m-45",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Cupboard",
    "wordPt": "Armário com Prateleiras",
    "phonetic": "ˈkʌb.ərd",
    "sentence": "Art supplies are stocked inside the supply room _________.",
    "sentencePt": "Materiais de artes são estocados dentro do armário da despensa.",
    "exampleEn": "Art supplies are stocked inside the supply room Cupboard.",
    "examplePt": "Materiais de artes são estocados dentro do armário da despensa.",
    "gapWord": "Cupboard",
    "question": "Como se diz 'Armário com Prateleiras' em inglês?",
    "hint": "Armário com portas para guardar materiais e recipientes.",
    "rationale": "'Cupboard' (ˈkʌb.ərd): Armário com portas para guardar materiais e recipientes.",
    "options": [
      {
        "id": "A",
        "text": "Cupboard",
        "isCorrect": true,
        "rationale": "'Cupboard' é a tradução correta para 'Armário com Prateleiras'."
      },
      {
        "id": "B",
        "text": "PENCASEencase",
        "isCorrect": false,
        "rationale": "'PENCASEencase' significa 'Estojo de Canetas', não 'Armário com Prateleiras'."
      },
      {
        "id": "C",
        "text": "CLASSROOMlassroom",
        "isCorrect": false,
        "rationale": "'CLASSROOMlassroom' significa 'Sala de Aula', não 'Armário com Prateleiras'."
      },
      {
        "id": "D",
        "text": "CABINETabinet",
        "isCorrect": false,
        "rationale": "'CABINETabinet' significa 'Armário de Arquivo', não 'Armário com Prateleiras'."
      }
    ]
  },
  {
    "id": "sql-sch-m-46",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Bookshelf",
    "wordPt": "Estante de Livros",
    "phonetic": "ˈbʊkˌʃɛlf",
    "sentence": "Encyclopedias line the mahogany _________ in the corner.",
    "sentencePt": "Enciclopédias preenchem a estante de livros de mogno no canto.",
    "exampleEn": "Encyclopedias line the mahogany Bookshelf in the corner.",
    "examplePt": "Enciclopédias preenchem a estante de livros de mogno no canto.",
    "gapWord": "Bookshelf",
    "question": "Como se diz 'Estante de Livros' em inglês?",
    "hint": "Móvel com prateleiras sobrepostas destinado a guardar livros.",
    "rationale": "'Bookshelf' (ˈbʊkˌʃɛlf): Móvel com prateleiras sobrepostas destinado a guardar livros.",
    "options": [
      {
        "id": "A",
        "text": "BINDERinder",
        "isCorrect": false,
        "rationale": "'BINDERinder' significa 'Fichário', não 'Estante de Livros'."
      },
      {
        "id": "B",
        "text": "Bookshelf",
        "isCorrect": true,
        "rationale": "'Bookshelf' é a tradução correta para 'Estante de Livros'."
      },
      {
        "id": "C",
        "text": "CALENDARalendar",
        "isCorrect": false,
        "rationale": "'CALENDARalendar' significa 'Calendário Escolar', não 'Estante de Livros'."
      },
      {
        "id": "D",
        "text": "MARKERarker",
        "isCorrect": false,
        "rationale": "'MARKERarker' significa 'Marcador / Pincel Atômico', não 'Estante de Livros'."
      }
    ]
  },
  {
    "id": "sql-sch-m-47",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Curtain",
    "wordPt": "Cortina da Sala",
    "phonetic": "ˈkɜːr.tən",
    "sentence": "Draw the thick window _________ to darken the room for projection.",
    "sentencePt": "Feche a cortina grossa da janela para escurecer a sala para projeção.",
    "exampleEn": "Draw the thick window Curtain to darken the room for projection.",
    "examplePt": "Feche a cortina grossa da janela para escurecer a sala para projeção.",
    "gapWord": "Curtain",
    "question": "Como se diz 'Cortina da Sala' em inglês?",
    "hint": "Peça de tecido pendurada para vedar luz e dar privacidade.",
    "rationale": "'Curtain' (ˈkɜːr.tən): Peça de tecido pendurada para vedar luz e dar privacidade.",
    "options": [
      {
        "id": "A",
        "text": "CAFETERIAafeteria",
        "isCorrect": false,
        "rationale": "'CAFETERIAafeteria' significa 'Refeitório Escolar', não 'Cortina da Sala'."
      },
      {
        "id": "B",
        "text": "BLACKBOARDlackboard",
        "isCorrect": false,
        "rationale": "'BLACKBOARDlackboard' significa 'Quadro Negro', não 'Cortina da Sala'."
      },
      {
        "id": "C",
        "text": "Curtain",
        "isCorrect": true,
        "rationale": "'Curtain' é a tradução correta para 'Cortina da Sala'."
      },
      {
        "id": "D",
        "text": "BACKPACKackpack",
        "isCorrect": false,
        "rationale": "'BACKPACKackpack' significa 'Mochila Escolar', não 'Cortina da Sala'."
      }
    ]
  },
  {
    "id": "sql-sch-m-48",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Fountain",
    "wordPt": "Bebedouro Escolar",
    "phonetic": "ˈfaʊn.tən",
    "sentence": "Fill your water bottle at the chilled drinking _________.",
    "sentencePt": "Encha sua garrafa de água no bebedouro de água gelada.",
    "exampleEn": "Fill your water bottle at the chilled drinking Fountain.",
    "examplePt": "Encha sua garrafa de água no bebedouro de água gelada.",
    "gapWord": "Fountain",
    "question": "Como se diz 'Bebedouro Escolar' em inglês?",
    "hint": "Aparelho público refrigerado que fornece água potável em jato.",
    "rationale": "'Fountain' (ˈfaʊn.tən): Aparelho público refrigerado que fornece água potável em jato.",
    "options": [
      {
        "id": "A",
        "text": "CANTEENanteen",
        "isCorrect": false,
        "rationale": "'CANTEENanteen' significa 'Cantina Escolar', não 'Bebedouro Escolar'."
      },
      {
        "id": "B",
        "text": "ENVELOPEnvelope",
        "isCorrect": false,
        "rationale": "'ENVELOPEnvelope' significa 'Envelope', não 'Bebedouro Escolar'."
      },
      {
        "id": "C",
        "text": "STAPLERtapler",
        "isCorrect": false,
        "rationale": "'STAPLERtapler' significa 'Grampeador', não 'Bebedouro Escolar'."
      },
      {
        "id": "D",
        "text": "Fountain",
        "isCorrect": true,
        "rationale": "'Fountain' é a tradução correta para 'Bebedouro Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-m-49",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Terminal",
    "wordPt": "Terminal de Computador",
    "phonetic": "ˈtɜːr.mə.nəl",
    "sentence": "Log in to the student library search _________.",
    "sentencePt": "Faça login no terminal de busca da biblioteca de estudantes.",
    "exampleEn": "Log in to the student library search Terminal.",
    "examplePt": "Faça login no terminal de busca da biblioteca de estudantes.",
    "gapWord": "Terminal",
    "question": "Como se diz 'Terminal de Computador' em inglês?",
    "hint": "Posto de trabalho com tela e teclado conectado a uma rede central.",
    "rationale": "'Terminal' (ˈtɜːr.mə.nəl): Posto de trabalho com tela e teclado conectado a uma rede central.",
    "options": [
      {
        "id": "A",
        "text": "Terminal",
        "isCorrect": true,
        "rationale": "'Terminal' é a tradução correta para 'Terminal de Computador'."
      },
      {
        "id": "B",
        "text": "COMPASSompass",
        "isCorrect": false,
        "rationale": "'COMPASSompass' significa 'Compasso Escolar', não 'Terminal de Computador'."
      },
      {
        "id": "C",
        "text": "WHITEBOARDhiteboard",
        "isCorrect": false,
        "rationale": "'WHITEBOARDhiteboard' significa 'Quadro Branco', não 'Terminal de Computador'."
      },
      {
        "id": "D",
        "text": "ERASERraser",
        "isCorrect": false,
        "rationale": "'ERASERraser' significa 'Borracha Escolar', não 'Terminal de Computador'."
      }
    ]
  },
  {
    "id": "sql-sch-m-50",
    "topic": "objetos",
    "difficulty": "medio",
    "wordEn": "Router",
    "wordPt": "Roteador Wi-Fi",
    "phonetic": "ˈraʊ.tər",
    "sentence": "The school upgraded its wireless internet _________ in every hall.",
    "sentencePt": "A escola atualizou seu roteador de internet sem fio em cada corredor.",
    "exampleEn": "The school upgraded its wireless internet Router in every hall.",
    "examplePt": "A escola atualizou seu roteador de internet sem fio em cada corredor.",
    "gapWord": "Router",
    "question": "Como se diz 'Roteador Wi-Fi' em inglês?",
    "hint": "Dispositivo de rede que encaminha pacotes de dados e sinal Wi-Fi.",
    "rationale": "'Router' (ˈraʊ.tər): Dispositivo de rede que encaminha pacotes de dados e sinal Wi-Fi.",
    "options": [
      {
        "id": "A",
        "text": "ASSIGNMENTssignment",
        "isCorrect": false,
        "rationale": "'ASSIGNMENTssignment' significa 'Tarefa / Trabalho Escolar', não 'Roteador Wi-Fi'."
      },
      {
        "id": "B",
        "text": "Router",
        "isCorrect": true,
        "rationale": "'Router' é a tradução correta para 'Roteador Wi-Fi'."
      },
      {
        "id": "C",
        "text": "CALENDARalendar",
        "isCorrect": false,
        "rationale": "'CALENDARalendar' significa 'Calendário Escolar', não 'Roteador Wi-Fi'."
      },
      {
        "id": "D",
        "text": "TERMINALerminal",
        "isCorrect": false,
        "rationale": "'TERMINALerminal' significa 'Terminal de Computador', não 'Roteador Wi-Fi'."
      }
    ]
  },
  {
    "id": "sql-sch-d-01",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Stationery",
    "wordPt": "Papelaria / Materiais de Escritório",
    "phonetic": "ˈsteɪ.ʃəˌnɛr.i",
    "sentence": "The campus store sells high-grade writing _________.",
    "sentencePt": "A loja do campus vende materiais de papelaria de escrita de alto padrão.",
    "exampleEn": "The campus store sells high-grade writing Stationery.",
    "examplePt": "A loja do campus vende materiais de papelaria de escrita de alto padrão.",
    "gapWord": "Stationery",
    "question": "Como se diz 'Papelaria / Materiais de Escritório' em inglês?",
    "hint": "Artigos para escrita, envelopes, cadernos e escritório.",
    "rationale": "'Stationery' (ˈsteɪ.ʃəˌnɛr.i): Artigos para escrita, envelopes, cadernos e escritório.",
    "options": [
      {
        "id": "A",
        "text": "Stationery",
        "isCorrect": true,
        "rationale": "'Stationery' é a tradução correta para 'Papelaria / Materiais de Escritório'."
      },
      {
        "id": "B",
        "text": "AUDITORIUMuditorium",
        "isCorrect": false,
        "rationale": "'AUDITORIUMuditorium' significa 'Auditório Principal', não 'Papelaria / Materiais de Escritório'."
      },
      {
        "id": "C",
        "text": "TYPESCRIPTypescript",
        "isCorrect": false,
        "rationale": "'TYPESCRIPTypescript' significa 'Datiloscrito / Texto Datilografado', não 'Papelaria / Materiais de Escritório'."
      },
      {
        "id": "D",
        "text": "PERIODICALeriodical",
        "isCorrect": false,
        "rationale": "'PERIODICALeriodical' significa 'Periódico Científico / Revista Acadêmica', não 'Papelaria / Materiais de Escritório'."
      }
    ]
  },
  {
    "id": "sql-sch-d-02",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Paraphernalia",
    "wordPt": "Aparatos / Equipamentos Variados",
    "phonetic": "ˌpær.ə.fərˈneɪ.li.ə",
    "sentence": "Chemistry lab requires specialized safety _________.",
    "sentencePt": "O laboratório de química requer aparatos de segurança especializados.",
    "exampleEn": "Chemistry lab requires specialized safety Paraphernalia.",
    "examplePt": "O laboratório de química requer aparatos de segurança especializados.",
    "gapWord": "Paraphernalia",
    "question": "Como se diz 'Aparatos / Equipamentos Variados' em inglês?",
    "hint": "Conjunto de equipamentos, acessórios ou apetrechos para uma atividade.",
    "rationale": "'Paraphernalia' (ˌpær.ə.fərˈneɪ.li.ə): Conjunto de equipamentos, acessórios ou apetrechos para uma atividade.",
    "options": [
      {
        "id": "A",
        "text": "REQUISITESequisites",
        "isCorrect": false,
        "rationale": "'REQUISITESequisites' significa 'Requisitos / Materiais Obrigatórios', não 'Aparatos / Equipamentos Variados'."
      },
      {
        "id": "B",
        "text": "Paraphernalia",
        "isCorrect": true,
        "rationale": "'Paraphernalia' é a tradução correta para 'Aparatos / Equipamentos Variados'."
      },
      {
        "id": "C",
        "text": "TRANSPARENCYransparency",
        "isCorrect": false,
        "rationale": "'TRANSPARENCYransparency' significa 'Transparência de Retroprojetor', não 'Aparatos / Equipamentos Variados'."
      },
      {
        "id": "D",
        "text": "APPLIANCESppliances",
        "isCorrect": false,
        "rationale": "'APPLIANCESppliances' significa 'Eletrodomésticos / Aparelhos de Apoio', não 'Aparatos / Equipamentos Variados'."
      }
    ]
  },
  {
    "id": "sql-sch-d-03",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Encyclopedia",
    "wordPt": "Enciclopédia",
    "phonetic": "ɪnˌsaɪ.kləˈpiː.di.ə",
    "sentence": "Students consulted the twenty-volume reference _________.",
    "sentencePt": "Alunos consultaram a enciclopédia de referência em vinte volumes.",
    "exampleEn": "Students consulted the twenty-volume reference Encyclopedia.",
    "examplePt": "Alunos consultaram a enciclopédia de referência em vinte volumes.",
    "gapWord": "Encyclopedia",
    "question": "Como se diz 'Enciclopédia' em inglês?",
    "hint": "Obra monumental que reúne o conjunto dos conhecimentos humanos.",
    "rationale": "'Encyclopedia' (ɪnˌsaɪ.kləˈpiː.di.ə): Obra monumental que reúne o conjunto dos conhecimentos humanos.",
    "options": [
      {
        "id": "A",
        "text": "ARCHIVESrchives",
        "isCorrect": false,
        "rationale": "'ARCHIVESrchives' significa 'Arquivos Históricos', não 'Enciclopédia'."
      },
      {
        "id": "B",
        "text": "AUDIOVISUALudiovisual",
        "isCorrect": false,
        "rationale": "'AUDIOVISUALudiovisual' significa 'Audiovisual', não 'Enciclopédia'."
      },
      {
        "id": "C",
        "text": "Encyclopedia",
        "isCorrect": true,
        "rationale": "'Encyclopedia' é a tradução correta para 'Enciclopédia'."
      },
      {
        "id": "D",
        "text": "HARDWAREardware",
        "isCorrect": false,
        "rationale": "'HARDWAREardware' significa 'Hardware / Componentes Físicos', não 'Enciclopédia'."
      }
    ]
  },
  {
    "id": "sql-sch-d-04",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Curriculum",
    "wordPt": "Currículo Escolar / Grade Curricular",
    "phonetic": "kəˈrɪk.jə.ləm",
    "sentence": "The ministry revised the national science _________.",
    "sentencePt": "O ministério revisou o currículo nacional de ciências.",
    "exampleEn": "The ministry revised the national science Curriculum.",
    "examplePt": "O ministério revisou o currículo nacional de ciências.",
    "gapWord": "Curriculum",
    "question": "Como se diz 'Currículo Escolar / Grade Curricular' em inglês?",
    "hint": "Conjunto estruturado de disciplinas e conteúdos pedagógicos.",
    "rationale": "'Curriculum' (kəˈrɪk.jə.ləm): Conjunto estruturado de disciplinas e conteúdos pedagógicos.",
    "options": [
      {
        "id": "A",
        "text": "REGISTRYegistry",
        "isCorrect": false,
        "rationale": "'REGISTRYegistry' significa 'Registro Escolar / Secretaria Acadêmica', não 'Currículo Escolar / Grade Curricular'."
      },
      {
        "id": "B",
        "text": "ACCESSORIESccessories",
        "isCorrect": false,
        "rationale": "'ACCESSORIESccessories' significa 'Acessórios', não 'Currículo Escolar / Grade Curricular'."
      },
      {
        "id": "C",
        "text": "INSTRUMENTATIONnstrumentation",
        "isCorrect": false,
        "rationale": "'INSTRUMENTATIONnstrumentation' significa 'Instrumentação Científica', não 'Currículo Escolar / Grade Curricular'."
      },
      {
        "id": "D",
        "text": "Curriculum",
        "isCorrect": true,
        "rationale": "'Curriculum' é a tradução correta para 'Currículo Escolar / Grade Curricular'."
      }
    ]
  },
  {
    "id": "sql-sch-d-05",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Syllabus",
    "wordPt": "Ementa de Disciplina",
    "phonetic": "ˈsɪl.ə.bəs",
    "sentence": "The professor handed out the semester course _________.",
    "sentencePt": "O professor distribuiu a ementa do curso para o semestre.",
    "exampleEn": "The professor handed out the semester course Syllabus.",
    "examplePt": "O professor distribuiu a ementa do curso para o semestre.",
    "gapWord": "Syllabus",
    "question": "Como se diz 'Ementa de Disciplina' em inglês?",
    "hint": "Plano sumário detalhando tópicos, leituras e cronograma de uma matéria.",
    "rationale": "'Syllabus' (ˈsɪl.ə.bəs): Plano sumário detalhando tópicos, leituras e cronograma de uma matéria.",
    "options": [
      {
        "id": "A",
        "text": "Syllabus",
        "isCorrect": true,
        "rationale": "'Syllabus' é a tradução correta para 'Ementa de Disciplina'."
      },
      {
        "id": "B",
        "text": "REQUISITESequisites",
        "isCorrect": false,
        "rationale": "'REQUISITESequisites' significa 'Requisitos / Materiais Obrigatórios', não 'Ementa de Disciplina'."
      },
      {
        "id": "C",
        "text": "DISSERTATIONissertation",
        "isCorrect": false,
        "rationale": "'DISSERTATIONissertation' significa 'Dissertação Acadêmica', não 'Ementa de Disciplina'."
      },
      {
        "id": "D",
        "text": "PARAPHERNALIAaraphernalia",
        "isCorrect": false,
        "rationale": "'PARAPHERNALIAaraphernalia' significa 'Aparatos / Equipamentos Variados', não 'Ementa de Disciplina'."
      }
    ]
  },
  {
    "id": "sql-sch-d-06",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Apparatus",
    "wordPt": "Aparelhagem Científica",
    "phonetic": "ˌæp.əˈræt.əs",
    "sentence": "Distillation requires specialized glassware and heating _________.",
    "sentencePt": "Destilação requer vidraria especializada e aparelhagem de aquecimento.",
    "exampleEn": "Distillation requires specialized glassware and heating Apparatus.",
    "examplePt": "Destilação requer vidraria especializada e aparelhagem de aquecimento.",
    "gapWord": "Apparatus",
    "question": "Como se diz 'Aparelhagem Científica' em inglês?",
    "hint": "Conjunto complexo de instrumentos mecânicos ou científicos.",
    "rationale": "'Apparatus' (ˌæp.əˈræt.əs): Conjunto complexo de instrumentos mecânicos ou científicos.",
    "options": [
      {
        "id": "A",
        "text": "INVENTORYnventory",
        "isCorrect": false,
        "rationale": "'INVENTORYnventory' significa 'Inventário de Patrimônio', não 'Aparelhagem Científica'."
      },
      {
        "id": "B",
        "text": "Apparatus",
        "isCorrect": true,
        "rationale": "'Apparatus' é a tradução correta para 'Aparelhagem Científica'."
      },
      {
        "id": "C",
        "text": "EQUIPMENTquipment",
        "isCorrect": false,
        "rationale": "'EQUIPMENTquipment' significa 'Equipamento Institucional', não 'Aparelhagem Científica'."
      },
      {
        "id": "D",
        "text": "INFRASTRUCTUREnfrastructure",
        "isCorrect": false,
        "rationale": "'INFRASTRUCTUREnfrastructure' significa 'Infraestrutura Institucional', não 'Aparelhagem Científica'."
      }
    ]
  },
  {
    "id": "sql-sch-d-07",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Equipment",
    "wordPt": "Equipamento Institucional",
    "phonetic": "ɪˈkwɪp.mənt",
    "sentence": "The engineering lab upgraded its robotics _________.",
    "sentencePt": "O laboratório de engenharia atualizou seu equipamento de robótica.",
    "exampleEn": "The engineering lab upgraded its robotics Equipment.",
    "examplePt": "O laboratório de engenharia atualizou seu equipamento de robótica.",
    "gapWord": "Equipment",
    "question": "Como se diz 'Equipamento Institucional' em inglês?",
    "hint": "Conjunto de ferramentas e máquinas para fins específicos.",
    "rationale": "'Equipment' (ɪˈkwɪp.mənt): Conjunto de ferramentas e máquinas para fins específicos.",
    "options": [
      {
        "id": "A",
        "text": "CERTIFICATIONSertifications",
        "isCorrect": false,
        "rationale": "'CERTIFICATIONSertifications' significa 'Certificações Profissionais', não 'Equipamento Institucional'."
      },
      {
        "id": "B",
        "text": "LABORATORIESaboratories",
        "isCorrect": false,
        "rationale": "'LABORATORIESaboratories' significa 'Laboratórios Especializados', não 'Equipamento Institucional'."
      },
      {
        "id": "C",
        "text": "Equipment",
        "isCorrect": true,
        "rationale": "'Equipment' é a tradução correta para 'Equipamento Institucional'."
      },
      {
        "id": "D",
        "text": "FURNISHINGSurnishings",
        "isCorrect": false,
        "rationale": "'FURNISHINGSurnishings' significa 'Mobiliário Institucional', não 'Equipamento Institucional'."
      }
    ]
  },
  {
    "id": "sql-sch-d-08",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Microfiche",
    "wordPt": "Microficha",
    "phonetic": "ˈmaɪ.kroʊˌfiːʃ",
    "sentence": "Historical university archives are preserved on film _________.",
    "sentencePt": "Arquivos históricos da universidade estão preservados em microficha.",
    "exampleEn": "Historical university archives are preserved on film Microfiche.",
    "examplePt": "Arquivos históricos da universidade estão preservados em microficha.",
    "gapWord": "Microfiche",
    "question": "Como se diz 'Microficha' em inglês?",
    "hint": "Ficha fotográfica em película contendo microfilmagens de documentos.",
    "rationale": "'Microfiche' (ˈmaɪ.kroʊˌfiːʃ): Ficha fotográfica em película contendo microfilmagens de documentos.",
    "options": [
      {
        "id": "A",
        "text": "LABORATORIESaboratories",
        "isCorrect": false,
        "rationale": "'LABORATORIESaboratories' significa 'Laboratórios Especializados', não 'Microficha'."
      },
      {
        "id": "B",
        "text": "CURRICULUMurriculum",
        "isCorrect": false,
        "rationale": "'CURRICULUMurriculum' significa 'Currículo Escolar / Grade Curricular', não 'Microficha'."
      },
      {
        "id": "C",
        "text": "STATIONERYtationery",
        "isCorrect": false,
        "rationale": "'STATIONERYtationery' significa 'Papelaria / Materiais de Escritório', não 'Microficha'."
      },
      {
        "id": "D",
        "text": "Microfiche",
        "isCorrect": true,
        "rationale": "'Microfiche' é a tradução correta para 'Microficha'."
      }
    ]
  },
  {
    "id": "sql-sch-d-09",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Photocopier",
    "wordPt": "Fotocopiadora / Máquina de Xerox",
    "phonetic": "ˈfoʊ.toʊˌkɑː.pi.ər",
    "sentence": "The administrative office leased a high-speed digital _________.",
    "sentencePt": "A secretaria alugou uma fotocopiadora digital de alta velocidade.",
    "exampleEn": "The administrative office leased a high-speed digital Photocopier.",
    "examplePt": "A secretaria alugou uma fotocopiadora digital de alta velocidade.",
    "gapWord": "Photocopier",
    "question": "Como se diz 'Fotocopiadora / Máquina de Xerox' em inglês?",
    "hint": "Máquina que reproduz documentos impressos por processo eletrostático.",
    "rationale": "'Photocopier' (ˈfoʊ.toʊˌkɑː.pi.ər): Máquina que reproduz documentos impressos por processo eletrostático.",
    "options": [
      {
        "id": "A",
        "text": "Photocopier",
        "isCorrect": true,
        "rationale": "'Photocopier' é a tradução correta para 'Fotocopiadora / Máquina de Xerox'."
      },
      {
        "id": "B",
        "text": "CERTIFICATIONSertifications",
        "isCorrect": false,
        "rationale": "'CERTIFICATIONSertifications' significa 'Certificações Profissionais', não 'Fotocopiadora / Máquina de Xerox'."
      },
      {
        "id": "C",
        "text": "SYLLABUSyllabus",
        "isCorrect": false,
        "rationale": "'SYLLABUSyllabus' significa 'Ementa de Disciplina', não 'Fotocopiadora / Máquina de Xerox'."
      },
      {
        "id": "D",
        "text": "VENTILATIONentilation",
        "isCorrect": false,
        "rationale": "'VENTILATIONentilation' significa 'Ventilação de Ambientes', não 'Fotocopiadora / Máquina de Xerox'."
      }
    ]
  },
  {
    "id": "sql-sch-d-10",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Transparency",
    "wordPt": "Transparência de Retroprojetor",
    "phonetic": "trænˈspær.ən.si",
    "sentence": "Lecturers historically projected handwritten text on a plastic _________.",
    "sentencePt": "Docentes antigamente projetavam textos manuscritos em transparência plástica.",
    "exampleEn": "Lecturers historically projected handwritten text on a plastic Transparency.",
    "examplePt": "Docentes antigamente projetavam textos manuscritos em transparência plástica.",
    "gapWord": "Transparency",
    "question": "Como se diz 'Transparência de Retroprojetor' em inglês?",
    "hint": "Folha plástica transparente projetada por retroprojetor.",
    "rationale": "'Transparency' (trænˈspær.ən.si): Folha plástica transparente projetada por retroprojetor.",
    "options": [
      {
        "id": "A",
        "text": "SANITATIONanitation",
        "isCorrect": false,
        "rationale": "'SANITATIONanitation' significa 'Saneamento e Higiene Escolar', não 'Transparência de Retroprojetor'."
      },
      {
        "id": "B",
        "text": "Transparency",
        "isCorrect": true,
        "rationale": "'Transparency' é a tradução correta para 'Transparência de Retroprojetor'."
      },
      {
        "id": "C",
        "text": "FURNISHINGSurnishings",
        "isCorrect": false,
        "rationale": "'FURNISHINGSurnishings' significa 'Mobiliário Institucional', não 'Transparência de Retroprojetor'."
      },
      {
        "id": "D",
        "text": "SYLLABUSyllabus",
        "isCorrect": false,
        "rationale": "'SYLLABUSyllabus' significa 'Ementa de Disciplina', não 'Transparência de Retroprojetor'."
      }
    ]
  },
  {
    "id": "sql-sch-d-11",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Audiovisual",
    "wordPt": "Audiovisual",
    "phonetic": "ˌɔː.di.oʊˈvɪʒ.u.əl",
    "sentence": "The amphitheater is fully outfitted with modern _________ tech.",
    "sentencePt": "O anfiteatro está totalmente equipado com tecnologia audiovisual moderna.",
    "exampleEn": "The amphitheater is fully outfitted with modern Audiovisual tech.",
    "examplePt": "O anfiteatro está totalmente equipado com tecnologia audiovisual moderna.",
    "gapWord": "Audiovisual",
    "question": "Como se diz 'Audiovisual' em inglês?",
    "hint": "Tecnologia e recursos combinando som e imagem em sincronia.",
    "rationale": "'Audiovisual' (ˌɔː.di.oʊˈvɪʒ.u.əl): Tecnologia e recursos combinando som e imagem em sincronia.",
    "options": [
      {
        "id": "A",
        "text": "PERIODICALeriodical",
        "isCorrect": false,
        "rationale": "'PERIODICALeriodical' significa 'Periódico Científico / Revista Acadêmica', não 'Audiovisual'."
      },
      {
        "id": "B",
        "text": "COMMODITIESommodities",
        "isCorrect": false,
        "rationale": "'COMMODITIESommodities' significa 'Suprimentos / Mercadorias Básicas', não 'Audiovisual'."
      },
      {
        "id": "C",
        "text": "Audiovisual",
        "isCorrect": true,
        "rationale": "'Audiovisual' é a tradução correta para 'Audiovisual'."
      },
      {
        "id": "D",
        "text": "APPLIANCESppliances",
        "isCorrect": false,
        "rationale": "'APPLIANCESppliances' significa 'Eletrodomésticos / Aparelhos de Apoio', não 'Audiovisual'."
      }
    ]
  },
  {
    "id": "sql-sch-d-12",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Memorabilia",
    "wordPt": "Memorabilia / Lembranças Históricas",
    "phonetic": "ˌmɛm.ər.əˈbɪl.i.ə",
    "sentence": "The campus museum showcases centenary graduation _________.",
    "sentencePt": "O museu do campus exibe memorabilia centenária de formaturas.",
    "exampleEn": "The campus museum showcases centenary graduation Memorabilia.",
    "examplePt": "O museu do campus exibe memorabilia centenária de formaturas.",
    "gapWord": "Memorabilia",
    "question": "Como se diz 'Memorabilia / Lembranças Históricas' em inglês?",
    "hint": "Objetos guardados pelo valor histórico ou sentimental associado.",
    "rationale": "'Memorabilia' (ˌmɛm.ər.əˈbɪl.i.ə): Objetos guardados pelo valor histórico ou sentimental associado.",
    "options": [
      {
        "id": "A",
        "text": "PUBLICATIONublication",
        "isCorrect": false,
        "rationale": "'PUBLICATIONublication' significa 'Publicação Acadêmica', não 'Memorabilia / Lembranças Históricas'."
      },
      {
        "id": "B",
        "text": "INFRASTRUCTUREnfrastructure",
        "isCorrect": false,
        "rationale": "'INFRASTRUCTUREnfrastructure' significa 'Infraestrutura Institucional', não 'Memorabilia / Lembranças Históricas'."
      },
      {
        "id": "C",
        "text": "APPARATUSpparatus",
        "isCorrect": false,
        "rationale": "'APPARATUSpparatus' significa 'Aparelhagem Científica', não 'Memorabilia / Lembranças Históricas'."
      },
      {
        "id": "D",
        "text": "Memorabilia",
        "isCorrect": true,
        "rationale": "'Memorabilia' é a tradução correta para 'Memorabilia / Lembranças Históricas'."
      }
    ]
  },
  {
    "id": "sql-sch-d-13",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Manuscript",
    "wordPt": "Manuscrito",
    "phonetic": "ˈmæn.jəˌskrɪpt",
    "sentence": "Special collections house an original medieval Latin _________.",
    "sentencePt": "Coleções especiais abrigam um manuscrito medieval original em latim.",
    "exampleEn": "Special collections house an original medieval Latin Manuscript.",
    "examplePt": "Coleções especiais abrigam um manuscrito medieval original em latim.",
    "gapWord": "Manuscript",
    "question": "Como se diz 'Manuscrito' em inglês?",
    "hint": "Texto escrito à mão, especialmente documentos históricos e literários.",
    "rationale": "'Manuscript' (ˈmæn.jəˌskrɪpt): Texto escrito à mão, especialmente documentos históricos e literários.",
    "options": [
      {
        "id": "A",
        "text": "Manuscript",
        "isCorrect": true,
        "rationale": "'Manuscript' é a tradução correta para 'Manuscrito'."
      },
      {
        "id": "B",
        "text": "APPARATUSpparatus",
        "isCorrect": false,
        "rationale": "'APPARATUSpparatus' significa 'Aparelhagem Científica', não 'Manuscrito'."
      },
      {
        "id": "C",
        "text": "HARDWAREardware",
        "isCorrect": false,
        "rationale": "'HARDWAREardware' significa 'Hardware / Componentes Físicos', não 'Manuscrito'."
      },
      {
        "id": "D",
        "text": "TESTIMONYestimony",
        "isCorrect": false,
        "rationale": "'TESTIMONYestimony' significa 'Depoimento / Testemunho Formal', não 'Manuscrito'."
      }
    ]
  },
  {
    "id": "sql-sch-d-14",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Typescript",
    "wordPt": "Datiloscrito / Texto Datilografado",
    "phonetic": "ˈtaɪpˌskrɪpt",
    "sentence": "The author submitted an annotated final _________.",
    "sentencePt": "O autor submeteu um datiloscrito final com anotações.",
    "exampleEn": "The author submitted an annotated final Typescript.",
    "examplePt": "O autor submeteu um datiloscrito final com anotações.",
    "gapWord": "Typescript",
    "question": "Como se diz 'Datiloscrito / Texto Datilografado' em inglês?",
    "hint": "Texto produzido em máquina de escrever ou computador antes da impressão.",
    "rationale": "'Typescript' (ˈtaɪpˌskrɪpt): Texto produzido em máquina de escrever ou computador antes da impressão.",
    "options": [
      {
        "id": "A",
        "text": "MICROFICHEicrofiche",
        "isCorrect": false,
        "rationale": "'MICROFICHEicrofiche' significa 'Microficha', não 'Datiloscrito / Texto Datilografado'."
      },
      {
        "id": "B",
        "text": "Typescript",
        "isCorrect": true,
        "rationale": "'Typescript' é a tradução correta para 'Datiloscrito / Texto Datilografado'."
      },
      {
        "id": "C",
        "text": "CHANCELLERYhancellery",
        "isCorrect": false,
        "rationale": "'CHANCELLERYhancellery' significa 'Chancelaria / Reitoria', não 'Datiloscrito / Texto Datilografado'."
      },
      {
        "id": "D",
        "text": "VENTILATIONentilation",
        "isCorrect": false,
        "rationale": "'VENTILATIONentilation' significa 'Ventilação de Ambientes', não 'Datiloscrito / Texto Datilografado'."
      }
    ]
  },
  {
    "id": "sql-sch-d-15",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Periodical",
    "wordPt": "Periódico Científico / Revista Acadêmica",
    "phonetic": "ˌpɪr.iˈɑː.dɪ.kəl",
    "sentence": "The faculty library subscribes to an international medical _________.",
    "sentencePt": "A biblioteca da faculdade assina um periódico médico internacional.",
    "exampleEn": "The faculty library subscribes to an international medical Periodical.",
    "examplePt": "A biblioteca da faculdade assina um periódico médico internacional.",
    "gapWord": "Periodical",
    "question": "Como se diz 'Periódico Científico / Revista Acadêmica' em inglês?",
    "hint": "Publicação seriada lançada em intervalos regulares de pesquisa.",
    "rationale": "'Periodical' (ˌpɪr.iˈɑː.dɪ.kəl): Publicação seriada lançada em intervalos regulares de pesquisa.",
    "options": [
      {
        "id": "A",
        "text": "FIXTURESixtures",
        "isCorrect": false,
        "rationale": "'FIXTURESixtures' significa 'Instalações Fixas / Acessórios Embutidos', não 'Periódico Científico / Revista Acadêmica'."
      },
      {
        "id": "B",
        "text": "REGISTRYegistry",
        "isCorrect": false,
        "rationale": "'REGISTRYegistry' significa 'Registro Escolar / Secretaria Acadêmica', não 'Periódico Científico / Revista Acadêmica'."
      },
      {
        "id": "C",
        "text": "Periodical",
        "isCorrect": true,
        "rationale": "'Periodical' é a tradução correta para 'Periódico Científico / Revista Acadêmica'."
      },
      {
        "id": "D",
        "text": "MICROFICHEicrofiche",
        "isCorrect": false,
        "rationale": "'MICROFICHEicrofiche' significa 'Microficha', não 'Periódico Científico / Revista Acadêmica'."
      }
    ]
  },
  {
    "id": "sql-sch-d-16",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Compendium",
    "wordPt": "Compêndio / Sumário Sistemático",
    "phonetic": "kəmˈpɛn.di.əm",
    "sentence": "The scholar published a comprehensive _________ of historical law.",
    "sentencePt": "O acadêmico publicou um compêndio abrangente de direito histórico.",
    "exampleEn": "The scholar published a comprehensive Compendium of historical law.",
    "examplePt": "O acadêmico publicou um compêndio abrangente de direito histórico.",
    "gapWord": "Compendium",
    "question": "Como se diz 'Compêndio / Sumário Sistemático' em inglês?",
    "hint": "Tratado sucinto que reúne sistematicamente os princípios de uma matéria.",
    "rationale": "'Compendium' (kəmˈpɛn.di.əm): Tratado sucinto que reúne sistematicamente os princípios de uma matéria.",
    "options": [
      {
        "id": "A",
        "text": "PARAPHERNALIAaraphernalia",
        "isCorrect": false,
        "rationale": "'PARAPHERNALIAaraphernalia' significa 'Aparatos / Equipamentos Variados', não 'Compêndio / Sumário Sistemático'."
      },
      {
        "id": "B",
        "text": "ACCREDITATIONccreditation",
        "isCorrect": false,
        "rationale": "'ACCREDITATIONccreditation' significa 'Acreditação / Reconhecimento Oficial', não 'Compêndio / Sumário Sistemático'."
      },
      {
        "id": "C",
        "text": "APPLIANCESppliances",
        "isCorrect": false,
        "rationale": "'APPLIANCESppliances' significa 'Eletrodomésticos / Aparelhos de Apoio', não 'Compêndio / Sumário Sistemático'."
      },
      {
        "id": "D",
        "text": "Compendium",
        "isCorrect": true,
        "rationale": "'Compendium' é a tradução correta para 'Compêndio / Sumário Sistemático'."
      }
    ]
  },
  {
    "id": "sql-sch-d-17",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Dissertation",
    "wordPt": "Dissertação Acadêmica",
    "phonetic": "ˌdɪs.ərˈteɪ.ʃən",
    "sentence": "The master's candidate successfully defended his research _________.",
    "sentencePt": "O mestrando defendeu com sucesso sua dissertação de pesquisa.",
    "exampleEn": "The master's candidate successfully defended his research Dissertation.",
    "examplePt": "O mestrando defendeu com sucesso sua dissertação de pesquisa.",
    "gapWord": "Dissertation",
    "question": "Como se diz 'Dissertação Acadêmica' em inglês?",
    "hint": "Trabalho acadêmico rigoroso apresentado para obtenção de grau.",
    "rationale": "'Dissertation' (ˌdɪs.ərˈteɪ.ʃən): Trabalho acadêmico rigoroso apresentado para obtenção de grau.",
    "options": [
      {
        "id": "A",
        "text": "Dissertation",
        "isCorrect": true,
        "rationale": "'Dissertation' é a tradução correta para 'Dissertação Acadêmica'."
      },
      {
        "id": "B",
        "text": "TRANSPARENCYransparency",
        "isCorrect": false,
        "rationale": "'TRANSPARENCYransparency' significa 'Transparência de Retroprojetor', não 'Dissertação Acadêmica'."
      },
      {
        "id": "C",
        "text": "AUDITORIUMuditorium",
        "isCorrect": false,
        "rationale": "'AUDITORIUMuditorium' significa 'Auditório Principal', não 'Dissertação Acadêmica'."
      },
      {
        "id": "D",
        "text": "MICROFICHEicrofiche",
        "isCorrect": false,
        "rationale": "'MICROFICHEicrofiche' significa 'Microficha', não 'Dissertação Acadêmica'."
      }
    ]
  },
  {
    "id": "sql-sch-d-18",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Monograph",
    "wordPt": "Monografia",
    "phonetic": "ˈmɑː.nəˌɡræf",
    "sentence": "The institute released an exhaustive _________ on coastal ecology.",
    "sentencePt": "O instituto publicou uma monografia exaustiva sobre ecologia costeira.",
    "exampleEn": "The institute released an exhaustive Monograph on coastal ecology.",
    "examplePt": "O instituto publicou uma monografia exaustiva sobre ecologia costeira.",
    "gapWord": "Monograph",
    "question": "Como se diz 'Monografia' em inglês?",
    "hint": "Estudo detalhado e aprofundado sobre um único tema específico.",
    "rationale": "'Monograph' (ˈmɑː.nəˌɡræf): Estudo detalhado e aprofundado sobre um único tema específico.",
    "options": [
      {
        "id": "A",
        "text": "CERTIFICATIONSertifications",
        "isCorrect": false,
        "rationale": "'CERTIFICATIONSertifications' significa 'Certificações Profissionais', não 'Monografia'."
      },
      {
        "id": "B",
        "text": "Monograph",
        "isCorrect": true,
        "rationale": "'Monograph' é a tradução correta para 'Monografia'."
      },
      {
        "id": "C",
        "text": "CURRICULUMurriculum",
        "isCorrect": false,
        "rationale": "'CURRICULUMurriculum' significa 'Currículo Escolar / Grade Curricular', não 'Monografia'."
      },
      {
        "id": "D",
        "text": "LITERATUREiterature",
        "isCorrect": false,
        "rationale": "'LITERATUREiterature' significa 'Literatura Acadêmica / Bibliografia', não 'Monografia'."
      }
    ]
  },
  {
    "id": "sql-sch-d-19",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Prospectus",
    "wordPt": "Prospecto Institucional / Catálogo",
    "phonetic": "prəˈspɛk.təs",
    "sentence": "Prospective students downloaded the university's degree _________.",
    "sentencePt": "Candidatos baixaram o prospecto institucional dos cursos da universidade.",
    "exampleEn": "Prospective students downloaded the university's degree Prospectus.",
    "examplePt": "Candidatos baixaram o prospecto institucional dos cursos da universidade.",
    "gapWord": "Prospectus",
    "question": "Como se diz 'Prospecto Institucional / Catálogo' em inglês?",
    "hint": "Folheto descritivo formal detalhando os cursos e instalações.",
    "rationale": "'Prospectus' (prəˈspɛk.təs): Folheto descritivo formal detalhando os cursos e instalações.",
    "options": [
      {
        "id": "A",
        "text": "ARCHITECTURErchitecture",
        "isCorrect": false,
        "rationale": "'ARCHITECTURErchitecture' significa 'Arquitetura Predial', não 'Prospecto Institucional / Catálogo'."
      },
      {
        "id": "B",
        "text": "IMPLEMENTmplement",
        "isCorrect": false,
        "rationale": "'IMPLEMENTmplement' significa 'Implemento / Ferramenta Técnica', não 'Prospecto Institucional / Catálogo'."
      },
      {
        "id": "C",
        "text": "Prospectus",
        "isCorrect": true,
        "rationale": "'Prospectus' é a tradução correta para 'Prospecto Institucional / Catálogo'."
      },
      {
        "id": "D",
        "text": "DISSERTATIONissertation",
        "isCorrect": false,
        "rationale": "'DISSERTATIONissertation' significa 'Dissertação Acadêmica', não 'Prospecto Institucional / Catálogo'."
      }
    ]
  },
  {
    "id": "sql-sch-d-20",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Publication",
    "wordPt": "Publicação Acadêmica",
    "phonetic": "ˌpʌb.lɪˈkeɪ.ʃən",
    "sentence": "Peer-reviewed _________ is the hallmark of credible research.",
    "sentencePt": "A publicação com revisão por pares é o selo de pesquisa confiável.",
    "exampleEn": "Peer-reviewed Publication is the hallmark of credible research.",
    "examplePt": "A publicação com revisão por pares é o selo de pesquisa confiável.",
    "gapWord": "Publication",
    "question": "Como se diz 'Publicação Acadêmica' em inglês?",
    "hint": "Obra impressa ou digital disponibilizada para a comunidade pública.",
    "rationale": "'Publication' (ˌpʌb.lɪˈkeɪ.ʃən): Obra impressa ou digital disponibilizada para a comunidade pública.",
    "options": [
      {
        "id": "A",
        "text": "PROSPECTUSrospectus",
        "isCorrect": false,
        "rationale": "'PROSPECTUSrospectus' significa 'Prospecto Institucional / Catálogo', não 'Publicação Acadêmica'."
      },
      {
        "id": "B",
        "text": "PARAPHERNALIAaraphernalia",
        "isCorrect": false,
        "rationale": "'PARAPHERNALIAaraphernalia' significa 'Aparatos / Equipamentos Variados', não 'Publicação Acadêmica'."
      },
      {
        "id": "C",
        "text": "PERIPHERALSeripherals",
        "isCorrect": false,
        "rationale": "'PERIPHERALSeripherals' significa 'Periféricos de Informática', não 'Publicação Acadêmica'."
      },
      {
        "id": "D",
        "text": "Publication",
        "isCorrect": true,
        "rationale": "'Publication' é a tradução correta para 'Publicação Acadêmica'."
      }
    ]
  },
  {
    "id": "sql-sch-d-21",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Requisites",
    "wordPt": "Requisitos / Materiais Obrigatórios",
    "phonetic": "ˈrɛk.wə.zɪts",
    "sentence": "Laboratory courses list required personal protection _________.",
    "sentencePt": "Cursos de laboratório listam os requisitos obrigatórios de proteção pessoal.",
    "exampleEn": "Laboratory courses list required personal protection Requisites.",
    "examplePt": "Cursos de laboratório listam os requisitos obrigatórios de proteção pessoal.",
    "gapWord": "Requisites",
    "question": "Como se diz 'Requisitos / Materiais Obrigatórios' em inglês?",
    "hint": "Condições, instrumentos ou itens indispensáveis para um propósito.",
    "rationale": "'Requisites' (ˈrɛk.wə.zɪts): Condições, instrumentos ou itens indispensáveis para um propósito.",
    "options": [
      {
        "id": "A",
        "text": "Requisites",
        "isCorrect": true,
        "rationale": "'Requisites' é a tradução correta para 'Requisitos / Materiais Obrigatórios'."
      },
      {
        "id": "B",
        "text": "MONOGRAPHonograph",
        "isCorrect": false,
        "rationale": "'MONOGRAPHonograph' significa 'Monografia', não 'Requisitos / Materiais Obrigatórios'."
      },
      {
        "id": "C",
        "text": "CONSUMABLESonsumables",
        "isCorrect": false,
        "rationale": "'CONSUMABLESonsumables' significa 'Itens Consumíveis / Descartáveis', não 'Requisitos / Materiais Obrigatórios'."
      },
      {
        "id": "D",
        "text": "TESTIMONYestimony",
        "isCorrect": false,
        "rationale": "'TESTIMONYestimony' significa 'Depoimento / Testemunho Formal', não 'Requisitos / Materiais Obrigatórios'."
      }
    ]
  },
  {
    "id": "sql-sch-d-22",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Implement",
    "wordPt": "Implemento / Ferramenta Técnica",
    "phonetic": "ˈɪm.plə.mənt",
    "sentence": "Drafting requires a precision geometric _________.",
    "sentencePt": "Desenho técnico exige um implemento geométrico de precisão.",
    "exampleEn": "Drafting requires a precision geometric Implement.",
    "examplePt": "Desenho técnico exige um implemento geométrico de precisão.",
    "gapWord": "Implement",
    "question": "Como se diz 'Implemento / Ferramenta Técnica' em inglês?",
    "hint": "Instrumento ou utensílio empregado na realização de um trabalho.",
    "rationale": "'Implement' (ˈɪm.plə.mənt): Instrumento ou utensílio empregado na realização de um trabalho.",
    "options": [
      {
        "id": "A",
        "text": "MONOGRAPHonograph",
        "isCorrect": false,
        "rationale": "'MONOGRAPHonograph' significa 'Monografia', não 'Implemento / Ferramenta Técnica'."
      },
      {
        "id": "B",
        "text": "Implement",
        "isCorrect": true,
        "rationale": "'Implement' é a tradução correta para 'Implemento / Ferramenta Técnica'."
      },
      {
        "id": "C",
        "text": "MEMORABILIAemorabilia",
        "isCorrect": false,
        "rationale": "'MEMORABILIAemorabilia' significa 'Memorabilia / Lembranças Históricas', não 'Implemento / Ferramenta Técnica'."
      },
      {
        "id": "D",
        "text": "PEDAGOGYedagogy",
        "isCorrect": false,
        "rationale": "'PEDAGOGYedagogy' significa 'Pedagogia', não 'Implemento / Ferramenta Técnica'."
      }
    ]
  },
  {
    "id": "sql-sch-d-23",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Instrumentation",
    "wordPt": "Instrumentação Científica",
    "phonetic": "ˌɪn.strə.mɛnˈteɪ.ʃən",
    "sentence": "Advanced spectrometry demands delicate optical _________.",
    "sentencePt": "Espectrometria avançada exige delicada instrumentação óptica.",
    "exampleEn": "Advanced spectrometry demands delicate optical Instrumentation.",
    "examplePt": "Espectrometria avançada exige delicada instrumentação óptica.",
    "gapWord": "Instrumentation",
    "question": "Como se diz 'Instrumentação Científica' em inglês?",
    "hint": "Conjunto de instrumentos de controle, teste e medição técnica.",
    "rationale": "'Instrumentation' (ˌɪn.strə.mɛnˈteɪ.ʃən): Conjunto de instrumentos de controle, teste e medição técnica.",
    "options": [
      {
        "id": "A",
        "text": "SANITATIONanitation",
        "isCorrect": false,
        "rationale": "'SANITATIONanitation' significa 'Saneamento e Higiene Escolar', não 'Instrumentação Científica'."
      },
      {
        "id": "B",
        "text": "TYPESCRIPTypescript",
        "isCorrect": false,
        "rationale": "'TYPESCRIPTypescript' significa 'Datiloscrito / Texto Datilografado', não 'Instrumentação Científica'."
      },
      {
        "id": "C",
        "text": "Instrumentation",
        "isCorrect": true,
        "rationale": "'Instrumentation' é a tradução correta para 'Instrumentação Científica'."
      },
      {
        "id": "D",
        "text": "REQUISITESequisites",
        "isCorrect": false,
        "rationale": "'REQUISITESequisites' significa 'Requisitos / Materiais Obrigatórios', não 'Instrumentação Científica'."
      }
    ]
  },
  {
    "id": "sql-sch-d-24",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Pedagogy",
    "wordPt": "Pedagogia",
    "phonetic": "ˈpɛd.əˌɡoʊ.dʒi",
    "sentence": "Innovative teachers adapt their classroom _________ to modern learners.",
    "sentencePt": "Professores inovadores adaptam sua pedagogia de sala aos alunos modernos.",
    "exampleEn": "Innovative teachers adapt their classroom Pedagogy to modern learners.",
    "examplePt": "Professores inovadores adaptam sua pedagogia de sala aos alunos modernos.",
    "gapWord": "Pedagogy",
    "question": "Como se diz 'Pedagogia' em inglês?",
    "hint": "Ciência e método teórico e prático da educação e do ensino.",
    "rationale": "'Pedagogy' (ˈpɛd.əˌɡoʊ.dʒi): Ciência e método teórico e prático da educação e do ensino.",
    "options": [
      {
        "id": "A",
        "text": "PHOTOCOPIERhotocopier",
        "isCorrect": false,
        "rationale": "'PHOTOCOPIERhotocopier' significa 'Fotocopiadora / Máquina de Xerox', não 'Pedagogia'."
      },
      {
        "id": "B",
        "text": "PERIODICALeriodical",
        "isCorrect": false,
        "rationale": "'PERIODICALeriodical' significa 'Periódico Científico / Revista Acadêmica', não 'Pedagogia'."
      },
      {
        "id": "C",
        "text": "ENCYCLOPEDIAncyclopedia",
        "isCorrect": false,
        "rationale": "'ENCYCLOPEDIAncyclopedia' significa 'Enciclopédia', não 'Pedagogia'."
      },
      {
        "id": "D",
        "text": "Pedagogy",
        "isCorrect": true,
        "rationale": "'Pedagogy' é a tradução correta para 'Pedagogia'."
      }
    ]
  },
  {
    "id": "sql-sch-d-25",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Infrastructure",
    "wordPt": "Infraestrutura Institucional",
    "phonetic": "ˈɪn.frəˌstrʌk.tʃər",
    "sentence": "Renovations expanded the campus broadband and IT _________.",
    "sentencePt": "Reformas expandiram a infraestrutura de banda larga e TI do campus.",
    "exampleEn": "Renovations expanded the campus broadband and IT Infrastructure.",
    "examplePt": "Reformas expandiram a infraestrutura de banda larga e TI do campus.",
    "gapWord": "Infrastructure",
    "question": "Como se diz 'Infraestrutura Institucional' em inglês?",
    "hint": "Conjunto básico de instalações, redes e serviços de uma instituição.",
    "rationale": "'Infrastructure' (ˈɪn.frəˌstrʌk.tʃər): Conjunto básico de instalações, redes e serviços de uma instituição.",
    "options": [
      {
        "id": "A",
        "text": "Infrastructure",
        "isCorrect": true,
        "rationale": "'Infrastructure' é a tradução correta para 'Infraestrutura Institucional'."
      },
      {
        "id": "B",
        "text": "CREDENTIALSredentials",
        "isCorrect": false,
        "rationale": "'CREDENTIALSredentials' significa 'Credenciais Acadêmicas', não 'Infraestrutura Institucional'."
      },
      {
        "id": "C",
        "text": "PEDAGOGYedagogy",
        "isCorrect": false,
        "rationale": "'PEDAGOGYedagogy' significa 'Pedagogia', não 'Infraestrutura Institucional'."
      },
      {
        "id": "D",
        "text": "SYLLABUSyllabus",
        "isCorrect": false,
        "rationale": "'SYLLABUSyllabus' significa 'Ementa de Disciplina', não 'Infraestrutura Institucional'."
      }
    ]
  },
  {
    "id": "sql-sch-d-26",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Architecture",
    "wordPt": "Arquitetura Predial",
    "phonetic": "ˈɑːr.kəˌtɛk.tʃər",
    "sentence": "The historic campus is renowned for Gothic revival _________.",
    "sentencePt": "O campus histórico é renomado por sua arquitetura neogótica.",
    "exampleEn": "The historic campus is renowned for Gothic revival Architecture.",
    "examplePt": "O campus histórico é renomado por sua arquitetura neogótica.",
    "gapWord": "Architecture",
    "question": "Como se diz 'Arquitetura Predial' em inglês?",
    "hint": "Arte e técnica de projetar e construir edifícios funcionais.",
    "rationale": "'Architecture' (ˈɑːr.kəˌtɛk.tʃər): Arte e técnica de projetar e construir edifícios funcionais.",
    "options": [
      {
        "id": "A",
        "text": "TYPESCRIPTypescript",
        "isCorrect": false,
        "rationale": "'TYPESCRIPTypescript' significa 'Datiloscrito / Texto Datilografado', não 'Arquitetura Predial'."
      },
      {
        "id": "B",
        "text": "Architecture",
        "isCorrect": true,
        "rationale": "'Architecture' é a tradução correta para 'Arquitetura Predial'."
      },
      {
        "id": "C",
        "text": "CURRICULUMurriculum",
        "isCorrect": false,
        "rationale": "'CURRICULUMurriculum' significa 'Currículo Escolar / Grade Curricular', não 'Arquitetura Predial'."
      },
      {
        "id": "D",
        "text": "INVENTORYnventory",
        "isCorrect": false,
        "rationale": "'INVENTORYnventory' significa 'Inventário de Patrimônio', não 'Arquitetura Predial'."
      }
    ]
  },
  {
    "id": "sql-sch-d-27",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Sanitation",
    "wordPt": "Saneamento e Higiene Escolar",
    "phonetic": "ˌsæn.əˈteɪ.ʃən",
    "sentence": "Strict standards of campus _________ prevent disease outbreaks.",
    "sentencePt": "Padrões estritos de saneamento no campus previnem surtos de doenças.",
    "exampleEn": "Strict standards of campus Sanitation prevent disease outbreaks.",
    "examplePt": "Padrões estritos de saneamento no campus previnem surtos de doenças.",
    "gapWord": "Sanitation",
    "question": "Como se diz 'Saneamento e Higiene Escolar' em inglês?",
    "hint": "Medidas higiênicas públicas de esgoto, água tratada e limpeza.",
    "rationale": "'Sanitation' (ˌsæn.əˈteɪ.ʃən): Medidas higiênicas públicas de esgoto, água tratada e limpeza.",
    "options": [
      {
        "id": "A",
        "text": "TESTIMONYestimony",
        "isCorrect": false,
        "rationale": "'TESTIMONYestimony' significa 'Depoimento / Testemunho Formal', não 'Saneamento e Higiene Escolar'."
      },
      {
        "id": "B",
        "text": "MEMORABILIAemorabilia",
        "isCorrect": false,
        "rationale": "'MEMORABILIAemorabilia' significa 'Memorabilia / Lembranças Históricas', não 'Saneamento e Higiene Escolar'."
      },
      {
        "id": "C",
        "text": "Sanitation",
        "isCorrect": true,
        "rationale": "'Sanitation' é a tradução correta para 'Saneamento e Higiene Escolar'."
      },
      {
        "id": "D",
        "text": "GYMNASIUMymnasium",
        "isCorrect": false,
        "rationale": "'GYMNASIUMymnasium' significa 'Ginásio Poliesportivo', não 'Saneamento e Higiene Escolar'."
      }
    ]
  },
  {
    "id": "sql-sch-d-28",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Ventilation",
    "wordPt": "Ventilação de Ambientes",
    "phonetic": "ˌvɛn.təˈleɪ.ʃən",
    "sentence": "Chemical fume hoods provide necessary active _________ in the lab.",
    "sentencePt": "Capelas químicas fornecem a ventilação ativa necessária no laboratório.",
    "exampleEn": "Chemical fume hoods provide necessary active Ventilation in the lab.",
    "examplePt": "Capelas químicas fornecem a ventilação ativa necessária no laboratório.",
    "gapWord": "Ventilation",
    "question": "Como se diz 'Ventilação de Ambientes' em inglês?",
    "hint": "Sistema de circulação e renovação de ar em recintos fechados.",
    "rationale": "'Ventilation' (ˌvɛn.təˈleɪ.ʃən): Sistema de circulação e renovação de ar em recintos fechados.",
    "options": [
      {
        "id": "A",
        "text": "CURRICULUMurriculum",
        "isCorrect": false,
        "rationale": "'CURRICULUMurriculum' significa 'Currículo Escolar / Grade Curricular', não 'Ventilação de Ambientes'."
      },
      {
        "id": "B",
        "text": "INVENTORYnventory",
        "isCorrect": false,
        "rationale": "'INVENTORYnventory' significa 'Inventário de Patrimônio', não 'Ventilação de Ambientes'."
      },
      {
        "id": "C",
        "text": "APPLIANCESppliances",
        "isCorrect": false,
        "rationale": "'APPLIANCESppliances' significa 'Eletrodomésticos / Aparelhos de Apoio', não 'Ventilação de Ambientes'."
      },
      {
        "id": "D",
        "text": "Ventilation",
        "isCorrect": true,
        "rationale": "'Ventilation' é a tradução correta para 'Ventilação de Ambientes'."
      }
    ]
  },
  {
    "id": "sql-sch-d-29",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Laboratories",
    "wordPt": "Laboratórios Especializados",
    "phonetic": "ˈlæb.rəˌtɔːr.iz",
    "sentence": "The new research pavilion houses three biosecurity _________.",
    "sentencePt": "O novo pavilhão de pesquisa abriga três laboratórios de biossegurança.",
    "exampleEn": "The new research pavilion houses three biosecurity Laboratories.",
    "examplePt": "O novo pavilhão de pesquisa abriga três laboratórios de biossegurança.",
    "gapWord": "Laboratories",
    "question": "Como se diz 'Laboratórios Especializados' em inglês?",
    "hint": "Plural de laboratório: múltiplos centros de pesquisa prática.",
    "rationale": "'Laboratories' (ˈlæb.rəˌtɔːr.iz): Plural de laboratório: múltiplos centros de pesquisa prática.",
    "options": [
      {
        "id": "A",
        "text": "Laboratories",
        "isCorrect": true,
        "rationale": "'Laboratories' é a tradução correta para 'Laboratórios Especializados'."
      },
      {
        "id": "B",
        "text": "MANUSCRIPTanuscript",
        "isCorrect": false,
        "rationale": "'MANUSCRIPTanuscript' significa 'Manuscrito', não 'Laboratórios Especializados'."
      },
      {
        "id": "C",
        "text": "TESTIMONYestimony",
        "isCorrect": false,
        "rationale": "'TESTIMONYestimony' significa 'Depoimento / Testemunho Formal', não 'Laboratórios Especializados'."
      },
      {
        "id": "D",
        "text": "REGISTRYegistry",
        "isCorrect": false,
        "rationale": "'REGISTRYegistry' significa 'Registro Escolar / Secretaria Acadêmica', não 'Laboratórios Especializados'."
      }
    ]
  },
  {
    "id": "sql-sch-d-30",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Auditorium",
    "wordPt": "Auditório Principal",
    "phonetic": "ˌɔː.dəˈtɔːr.i.əm",
    "sentence": "The guest lecture was hosted in the grand university _________.",
    "sentencePt": "A palestra do convidado foi realizada no grande auditório universitário.",
    "exampleEn": "The guest lecture was hosted in the grand university Auditorium.",
    "examplePt": "A palestra do convidado foi realizada no grande auditório universitário.",
    "gapWord": "Auditorium",
    "question": "Como se diz 'Auditório Principal' em inglês?",
    "hint": "Grande salão com assentos escalonados para audiências e palestras.",
    "rationale": "'Auditorium' (ˌɔː.dəˈtɔːr.i.əm): Grande salão com assentos escalonados para audiências e palestras.",
    "options": [
      {
        "id": "A",
        "text": "CREDENTIALSredentials",
        "isCorrect": false,
        "rationale": "'CREDENTIALSredentials' significa 'Credenciais Acadêmicas', não 'Auditório Principal'."
      },
      {
        "id": "B",
        "text": "Auditorium",
        "isCorrect": true,
        "rationale": "'Auditorium' é a tradução correta para 'Auditório Principal'."
      },
      {
        "id": "C",
        "text": "SANITATIONanitation",
        "isCorrect": false,
        "rationale": "'SANITATIONanitation' significa 'Saneamento e Higiene Escolar', não 'Auditório Principal'."
      },
      {
        "id": "D",
        "text": "COMPENDIUMompendium",
        "isCorrect": false,
        "rationale": "'COMPENDIUMompendium' significa 'Compêndio / Sumário Sistemático', não 'Auditório Principal'."
      }
    ]
  },
  {
    "id": "sql-sch-d-31",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Gymnasium",
    "wordPt": "Ginásio Poliesportivo",
    "phonetic": "dʒɪmˈneɪ.zi.əm",
    "sentence": "Physical education classes are held indoors inside the _________.",
    "sentencePt": "Aulas de educação física são realizadas em ambiente fechado no ginásio.",
    "exampleEn": "Physical education classes are held indoors inside the Gymnasium.",
    "examplePt": "Aulas de educação física são realizadas em ambiente fechado no ginásio.",
    "gapWord": "Gymnasium",
    "question": "Como se diz 'Ginásio Poliesportivo' em inglês?",
    "hint": "Instalação esportiva ampla e coberta para treinamentos atléticos.",
    "rationale": "'Gymnasium' (dʒɪmˈneɪ.zi.əm): Instalação esportiva ampla e coberta para treinamentos atléticos.",
    "options": [
      {
        "id": "A",
        "text": "ARCHITECTURErchitecture",
        "isCorrect": false,
        "rationale": "'ARCHITECTURErchitecture' significa 'Arquitetura Predial', não 'Ginásio Poliesportivo'."
      },
      {
        "id": "B",
        "text": "ACCREDITATIONccreditation",
        "isCorrect": false,
        "rationale": "'ACCREDITATIONccreditation' significa 'Acreditação / Reconhecimento Oficial', não 'Ginásio Poliesportivo'."
      },
      {
        "id": "C",
        "text": "Gymnasium",
        "isCorrect": true,
        "rationale": "'Gymnasium' é a tradução correta para 'Ginásio Poliesportivo'."
      },
      {
        "id": "D",
        "text": "PHOTOCOPIERhotocopier",
        "isCorrect": false,
        "rationale": "'PHOTOCOPIERhotocopier' significa 'Fotocopiadora / Máquina de Xerox', não 'Ginásio Poliesportivo'."
      }
    ]
  },
  {
    "id": "sql-sch-d-32",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Repository",
    "wordPt": "Repositório Acadêmico",
    "phonetic": "rɪˈpɑː.zəˌtɔːr.i",
    "sentence": "The digital thesis _________ grants open access worldwide.",
    "sentencePt": "O repositório digital de teses concede acesso aberto em todo o mundo.",
    "exampleEn": "The digital thesis Repository grants open access worldwide.",
    "examplePt": "O repositório digital de teses concede acesso aberto em todo o mundo.",
    "gapWord": "Repository",
    "question": "Como se diz 'Repositório Acadêmico' em inglês?",
    "hint": "Local físico ou digital onde coleções de dados são preservadas.",
    "rationale": "'Repository' (rɪˈpɑː.zəˌtɔːr.i): Local físico ou digital onde coleções de dados são preservadas.",
    "options": [
      {
        "id": "A",
        "text": "PROSPECTUSrospectus",
        "isCorrect": false,
        "rationale": "'PROSPECTUSrospectus' significa 'Prospecto Institucional / Catálogo', não 'Repositório Acadêmico'."
      },
      {
        "id": "B",
        "text": "PEDAGOGYedagogy",
        "isCorrect": false,
        "rationale": "'PEDAGOGYedagogy' significa 'Pedagogia', não 'Repositório Acadêmico'."
      },
      {
        "id": "C",
        "text": "MICROFICHEicrofiche",
        "isCorrect": false,
        "rationale": "'MICROFICHEicrofiche' significa 'Microficha', não 'Repositório Acadêmico'."
      },
      {
        "id": "D",
        "text": "Repository",
        "isCorrect": true,
        "rationale": "'Repository' é a tradução correta para 'Repositório Acadêmico'."
      }
    ]
  },
  {
    "id": "sql-sch-d-33",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Archives",
    "wordPt": "Arquivos Históricos",
    "phonetic": "ˈɑːr.kaɪvz",
    "sentence": "Scholars examined century-old administrative _________.",
    "sentencePt": "Pesquisadores examinaram arquivos administrativos centenários.",
    "exampleEn": "Scholars examined century-old administrative Archives.",
    "examplePt": "Pesquisadores examinaram arquivos administrativos centenários.",
    "gapWord": "Archives",
    "question": "Como se diz 'Arquivos Históricos' em inglês?",
    "hint": "Conjunto de documentos históricos mantidos para consulta permanente.",
    "rationale": "'Archives' (ˈɑːr.kaɪvz): Conjunto de documentos históricos mantidos para consulta permanente.",
    "options": [
      {
        "id": "A",
        "text": "Archives",
        "isCorrect": true,
        "rationale": "'Archives' é a tradução correta para 'Arquivos Históricos'."
      },
      {
        "id": "B",
        "text": "FURNISHINGSurnishings",
        "isCorrect": false,
        "rationale": "'FURNISHINGSurnishings' significa 'Mobiliário Institucional', não 'Arquivos Históricos'."
      },
      {
        "id": "C",
        "text": "GYMNASIUMymnasium",
        "isCorrect": false,
        "rationale": "'GYMNASIUMymnasium' significa 'Ginásio Poliesportivo', não 'Arquivos Históricos'."
      },
      {
        "id": "D",
        "text": "CHANCELLERYhancellery",
        "isCorrect": false,
        "rationale": "'CHANCELLERYhancellery' significa 'Chancelaria / Reitoria', não 'Arquivos Históricos'."
      }
    ]
  },
  {
    "id": "sql-sch-d-34",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Chancellery",
    "wordPt": "Chancelaria / Reitoria",
    "phonetic": "ˈtʃæn.səl.ər.i",
    "sentence": "Diplomas are validated by the rector at the university _________.",
    "sentencePt": "Diplomas são validados pelo reitor na chancelaria da universidade.",
    "exampleEn": "Diplomas are validated by the rector at the university Chancellery.",
    "examplePt": "Diplomas são validados pelo reitor na chancelaria da universidade.",
    "gapWord": "Chancellery",
    "question": "Como se diz 'Chancelaria / Reitoria' em inglês?",
    "hint": "Sede administrativa da direção ou reitoria de uma universidade.",
    "rationale": "'Chancellery' (ˈtʃæn.səl.ər.i): Sede administrativa da direção ou reitoria de uma universidade.",
    "options": [
      {
        "id": "A",
        "text": "FIXTURESixtures",
        "isCorrect": false,
        "rationale": "'FIXTURESixtures' significa 'Instalações Fixas / Acessórios Embutidos', não 'Chancelaria / Reitoria'."
      },
      {
        "id": "B",
        "text": "Chancellery",
        "isCorrect": true,
        "rationale": "'Chancellery' é a tradução correta para 'Chancelaria / Reitoria'."
      },
      {
        "id": "C",
        "text": "SYLLABUSyllabus",
        "isCorrect": false,
        "rationale": "'SYLLABUSyllabus' significa 'Ementa de Disciplina', não 'Chancelaria / Reitoria'."
      },
      {
        "id": "D",
        "text": "GYMNASIUMymnasium",
        "isCorrect": false,
        "rationale": "'GYMNASIUMymnasium' significa 'Ginásio Poliesportivo', não 'Chancelaria / Reitoria'."
      }
    ]
  },
  {
    "id": "sql-sch-d-35",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Registry",
    "wordPt": "Registro Escolar / Secretaria Acadêmica",
    "phonetic": "ˈrɛdʒ.ə.stri",
    "sentence": "Submit your transcripts directly to the admissions _________.",
    "sentencePt": "Envie seus históricos diretamente à secretaria de registro acadêmico.",
    "exampleEn": "Submit your transcripts directly to the admissions Registry.",
    "examplePt": "Envie seus históricos diretamente à secretaria de registro acadêmico.",
    "gapWord": "Registry",
    "question": "Como se diz 'Registro Escolar / Secretaria Acadêmica' em inglês?",
    "hint": "Setor oficial responsável por registros e matrículas de alunos.",
    "rationale": "'Registry' (ˈrɛdʒ.ə.stri): Setor oficial responsável por registros e matrículas de alunos.",
    "options": [
      {
        "id": "A",
        "text": "COMPENDIUMompendium",
        "isCorrect": false,
        "rationale": "'COMPENDIUMompendium' significa 'Compêndio / Sumário Sistemático', não 'Registro Escolar / Secretaria Acadêmica'."
      },
      {
        "id": "B",
        "text": "REPOSITORYepository",
        "isCorrect": false,
        "rationale": "'REPOSITORYepository' significa 'Repositório Acadêmico', não 'Registro Escolar / Secretaria Acadêmica'."
      },
      {
        "id": "C",
        "text": "Registry",
        "isCorrect": true,
        "rationale": "'Registry' é a tradução correta para 'Registro Escolar / Secretaria Acadêmica'."
      },
      {
        "id": "D",
        "text": "PUBLICATIONublication",
        "isCorrect": false,
        "rationale": "'PUBLICATIONublication' significa 'Publicação Acadêmica', não 'Registro Escolar / Secretaria Acadêmica'."
      }
    ]
  },
  {
    "id": "sql-sch-d-36",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Inventory",
    "wordPt": "Inventário de Patrimônio",
    "phonetic": "ˈɪn.vənˌtɔːr.i",
    "sentence": "Technicians performed an annual campus asset _________.",
    "sentencePt": "Técnicos realizaram um inventário anual de patrimônio do campus.",
    "exampleEn": "Technicians performed an annual campus asset Inventory.",
    "examplePt": "Técnicos realizaram um inventário anual de patrimônio do campus.",
    "gapWord": "Inventory",
    "question": "Como se diz 'Inventário de Patrimônio' em inglês?",
    "hint": "Lista detalhada e conferência de bens e materiais de uma entidade.",
    "rationale": "'Inventory' (ˈɪn.vənˌtɔːr.i): Lista detalhada e conferência de bens e materiais de uma entidade.",
    "options": [
      {
        "id": "A",
        "text": "PHOTOCOPIERhotocopier",
        "isCorrect": false,
        "rationale": "'PHOTOCOPIERhotocopier' significa 'Fotocopiadora / Máquina de Xerox', não 'Inventário de Patrimônio'."
      },
      {
        "id": "B",
        "text": "CURRICULUMurriculum",
        "isCorrect": false,
        "rationale": "'CURRICULUMurriculum' significa 'Currículo Escolar / Grade Curricular', não 'Inventário de Patrimônio'."
      },
      {
        "id": "C",
        "text": "REQUISITESequisites",
        "isCorrect": false,
        "rationale": "'REQUISITESequisites' significa 'Requisitos / Materiais Obrigatórios', não 'Inventário de Patrimônio'."
      },
      {
        "id": "D",
        "text": "Inventory",
        "isCorrect": true,
        "rationale": "'Inventory' é a tradução correta para 'Inventário de Patrimônio'."
      }
    ]
  },
  {
    "id": "sql-sch-d-37",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Commodities",
    "wordPt": "Suprimentos / Mercadorias Básicas",
    "phonetic": "kəˈmɑː.də.tiz",
    "sentence": "Paper and bulk toner are essential office _________.",
    "sentencePt": "Papel e toner em massa são suprimentos de escritório essenciais.",
    "exampleEn": "Paper and bulk toner are essential office Commodities.",
    "examplePt": "Papel e toner em massa são suprimentos de escritório essenciais.",
    "gapWord": "Commodities",
    "question": "Como se diz 'Suprimentos / Mercadorias Básicas' em inglês?",
    "hint": "Itens e bens materiais padronizados de consumo contínuo.",
    "rationale": "'Commodities' (kəˈmɑː.də.tiz): Itens e bens materiais padronizados de consumo contínuo.",
    "options": [
      {
        "id": "A",
        "text": "Commodities",
        "isCorrect": true,
        "rationale": "'Commodities' é a tradução correta para 'Suprimentos / Mercadorias Básicas'."
      },
      {
        "id": "B",
        "text": "PEDAGOGYedagogy",
        "isCorrect": false,
        "rationale": "'PEDAGOGYedagogy' significa 'Pedagogia', não 'Suprimentos / Mercadorias Básicas'."
      },
      {
        "id": "C",
        "text": "MONOGRAPHonograph",
        "isCorrect": false,
        "rationale": "'MONOGRAPHonograph' significa 'Monografia', não 'Suprimentos / Mercadorias Básicas'."
      },
      {
        "id": "D",
        "text": "APPLIANCESppliances",
        "isCorrect": false,
        "rationale": "'APPLIANCESppliances' significa 'Eletrodomésticos / Aparelhos de Apoio', não 'Suprimentos / Mercadorias Básicas'."
      }
    ]
  },
  {
    "id": "sql-sch-d-38",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Furnishings",
    "wordPt": "Mobiliário Institucional",
    "phonetic": "ˈfɜːr.nɪ.ʃɪŋz",
    "sentence": "The newly renovated lecture hall features modern ergonomic _________.",
    "sentencePt": "A sala de aula reformada apresenta mobiliário ergonômico moderno.",
    "exampleEn": "The newly renovated lecture hall features modern ergonomic Furnishings.",
    "examplePt": "A sala de aula reformada apresenta mobiliário ergonômico moderno.",
    "gapWord": "Furnishings",
    "question": "Como se diz 'Mobiliário Institucional' em inglês?",
    "hint": "Conjunto de móveis, cortinas e equipamentos que guarnecem um espaço.",
    "rationale": "'Furnishings' (ˈfɜːr.nɪ.ʃɪŋz): Conjunto de móveis, cortinas e equipamentos que guarnecem um espaço.",
    "options": [
      {
        "id": "A",
        "text": "VENTILATIONentilation",
        "isCorrect": false,
        "rationale": "'VENTILATIONentilation' significa 'Ventilação de Ambientes', não 'Mobiliário Institucional'."
      },
      {
        "id": "B",
        "text": "Furnishings",
        "isCorrect": true,
        "rationale": "'Furnishings' é a tradução correta para 'Mobiliário Institucional'."
      },
      {
        "id": "C",
        "text": "INSTRUMENTATIONnstrumentation",
        "isCorrect": false,
        "rationale": "'INSTRUMENTATIONnstrumentation' significa 'Instrumentação Científica', não 'Mobiliário Institucional'."
      },
      {
        "id": "D",
        "text": "INVENTORYnventory",
        "isCorrect": false,
        "rationale": "'INVENTORYnventory' significa 'Inventário de Patrimônio', não 'Mobiliário Institucional'."
      }
    ]
  },
  {
    "id": "sql-sch-d-39",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Appliances",
    "wordPt": "Eletrodomésticos / Aparelhos de Apoio",
    "phonetic": "əˈplaɪ.ən.səz",
    "sentence": "The faculty lounge is equipped with kitchen _________.",
    "sentencePt": "A sala dos professores está equipada com aparelhos eletrodomésticos.",
    "exampleEn": "The faculty lounge is equipped with kitchen Appliances.",
    "examplePt": "A sala dos professores está equipada com aparelhos eletrodomésticos.",
    "gapWord": "Appliances",
    "question": "Como se diz 'Eletrodomésticos / Aparelhos de Apoio' em inglês?",
    "hint": "Aparelhos ou dispositivos elétricos para uso utilitário.",
    "rationale": "'Appliances' (əˈplaɪ.ən.səz): Aparelhos ou dispositivos elétricos para uso utilitário.",
    "options": [
      {
        "id": "A",
        "text": "FIXTURESixtures",
        "isCorrect": false,
        "rationale": "'FIXTURESixtures' significa 'Instalações Fixas / Acessórios Embutidos', não 'Eletrodomésticos / Aparelhos de Apoio'."
      },
      {
        "id": "B",
        "text": "REGISTRYegistry",
        "isCorrect": false,
        "rationale": "'REGISTRYegistry' significa 'Registro Escolar / Secretaria Acadêmica', não 'Eletrodomésticos / Aparelhos de Apoio'."
      },
      {
        "id": "C",
        "text": "Appliances",
        "isCorrect": true,
        "rationale": "'Appliances' é a tradução correta para 'Eletrodomésticos / Aparelhos de Apoio'."
      },
      {
        "id": "D",
        "text": "INSTRUMENTATIONnstrumentation",
        "isCorrect": false,
        "rationale": "'INSTRUMENTATIONnstrumentation' significa 'Instrumentação Científica', não 'Eletrodomésticos / Aparelhos de Apoio'."
      }
    ]
  },
  {
    "id": "sql-sch-d-40",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Peripherals",
    "wordPt": "Periféricos de Informática",
    "phonetic": "pəˈrɪf.ər.əlz",
    "sentence": "Scanners and external webcams are essential digital _________.",
    "sentencePt": "Scanners e webcams externas são periféricos digitais essenciais.",
    "exampleEn": "Scanners and external webcams are essential digital Peripherals.",
    "examplePt": "Scanners e webcams externas são periféricos digitais essenciais.",
    "gapWord": "Peripherals",
    "question": "Como se diz 'Periféricos de Informática' em inglês?",
    "hint": "Dispositivos de hardware auxiliares conectados a um computador.",
    "rationale": "'Peripherals' (pəˈrɪf.ər.əlz): Dispositivos de hardware auxiliares conectados a um computador.",
    "options": [
      {
        "id": "A",
        "text": "IMPLEMENTmplement",
        "isCorrect": false,
        "rationale": "'IMPLEMENTmplement' significa 'Implemento / Ferramenta Técnica', não 'Periféricos de Informática'."
      },
      {
        "id": "B",
        "text": "PARAPHERNALIAaraphernalia",
        "isCorrect": false,
        "rationale": "'PARAPHERNALIAaraphernalia' significa 'Aparatos / Equipamentos Variados', não 'Periféricos de Informática'."
      },
      {
        "id": "C",
        "text": "VENTILATIONentilation",
        "isCorrect": false,
        "rationale": "'VENTILATIONentilation' significa 'Ventilação de Ambientes', não 'Periféricos de Informática'."
      },
      {
        "id": "D",
        "text": "Peripherals",
        "isCorrect": true,
        "rationale": "'Peripherals' é a tradução correta para 'Periféricos de Informática'."
      }
    ]
  },
  {
    "id": "sql-sch-d-41",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Hardware",
    "wordPt": "Hardware / Componentes Físicos",
    "phonetic": "ˈhɑːrdˌwɛər",
    "sentence": "The server room requires upgraded network _________.",
    "sentencePt": "A sala de servidores requer hardware de rede atualizado.",
    "exampleEn": "The server room requires upgraded network Hardware.",
    "examplePt": "A sala de servidores requer hardware de rede atualizado.",
    "gapWord": "Hardware",
    "question": "Como se diz 'Hardware / Componentes Físicos' em inglês?",
    "hint": "Parte física e eletrônica tangível dos sistemas de computação.",
    "rationale": "'Hardware' (ˈhɑːrdˌwɛər): Parte física e eletrônica tangível dos sistemas de computação.",
    "options": [
      {
        "id": "A",
        "text": "Hardware",
        "isCorrect": true,
        "rationale": "'Hardware' é a tradução correta para 'Hardware / Componentes Físicos'."
      },
      {
        "id": "B",
        "text": "LABORATORIESaboratories",
        "isCorrect": false,
        "rationale": "'LABORATORIESaboratories' significa 'Laboratórios Especializados', não 'Hardware / Componentes Físicos'."
      },
      {
        "id": "C",
        "text": "CURRICULUMurriculum",
        "isCorrect": false,
        "rationale": "'CURRICULUMurriculum' significa 'Currículo Escolar / Grade Curricular', não 'Hardware / Componentes Físicos'."
      },
      {
        "id": "D",
        "text": "MEMORABILIAemorabilia",
        "isCorrect": false,
        "rationale": "'MEMORABILIAemorabilia' significa 'Memorabilia / Lembranças Históricas', não 'Hardware / Componentes Físicos'."
      }
    ]
  },
  {
    "id": "sql-sch-d-42",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Consumables",
    "wordPt": "Itens Consumíveis / Descartáveis",
    "phonetic": "kənˈsuː.mə.bəlz",
    "sentence": "Printer cartridges and chalk sticks are classified as office _________.",
    "sentencePt": "Cartuchos de impressora e giz são classificados como consumíveis de escritório.",
    "exampleEn": "Printer cartridges and chalk sticks are classified as office Consumables.",
    "examplePt": "Cartuchos de impressora e giz são classificados como consumíveis de escritório.",
    "gapWord": "Consumables",
    "question": "Como se diz 'Itens Consumíveis / Descartáveis' em inglês?",
    "hint": "Materiais que se esgotam ou desgastam rapidamente com o uso.",
    "rationale": "'Consumables' (kənˈsuː.mə.bəlz): Materiais que se esgotam ou desgastam rapidamente com o uso.",
    "options": [
      {
        "id": "A",
        "text": "INSTRUMENTATIONnstrumentation",
        "isCorrect": false,
        "rationale": "'INSTRUMENTATIONnstrumentation' significa 'Instrumentação Científica', não 'Itens Consumíveis / Descartáveis'."
      },
      {
        "id": "B",
        "text": "Consumables",
        "isCorrect": true,
        "rationale": "'Consumables' é a tradução correta para 'Itens Consumíveis / Descartáveis'."
      },
      {
        "id": "C",
        "text": "HARDWAREardware",
        "isCorrect": false,
        "rationale": "'HARDWAREardware' significa 'Hardware / Componentes Físicos', não 'Itens Consumíveis / Descartáveis'."
      },
      {
        "id": "D",
        "text": "SYLLABUSyllabus",
        "isCorrect": false,
        "rationale": "'SYLLABUSyllabus' significa 'Ementa de Disciplina', não 'Itens Consumíveis / Descartáveis'."
      }
    ]
  },
  {
    "id": "sql-sch-d-43",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Literature",
    "wordPt": "Literatura Acadêmica / Bibliografia",
    "phonetic": "ˈlɪt.ər.ə.tʃər",
    "sentence": "Reviewing published scientific _________ is the first research step.",
    "sentencePt": "Revisar a literatura científica publicada é o primeiro passo da pesquisa.",
    "exampleEn": "Reviewing published scientific Literature is the first research step.",
    "examplePt": "Revisar a literatura científica publicada é o primeiro passo da pesquisa.",
    "gapWord": "Literature",
    "question": "Como se diz 'Literatura Acadêmica / Bibliografia' em inglês?",
    "hint": "Conjunto de obras e artigos científicos publicados sobre um tema.",
    "rationale": "'Literature' (ˈlɪt.ər.ə.tʃər): Conjunto de obras e artigos científicos publicados sobre um tema.",
    "options": [
      {
        "id": "A",
        "text": "EQUIPMENTquipment",
        "isCorrect": false,
        "rationale": "'EQUIPMENTquipment' significa 'Equipamento Institucional', não 'Literatura Acadêmica / Bibliografia'."
      },
      {
        "id": "B",
        "text": "PEDAGOGYedagogy",
        "isCorrect": false,
        "rationale": "'PEDAGOGYedagogy' significa 'Pedagogia', não 'Literatura Acadêmica / Bibliografia'."
      },
      {
        "id": "C",
        "text": "Literature",
        "isCorrect": true,
        "rationale": "'Literature' é a tradução correta para 'Literatura Acadêmica / Bibliografia'."
      },
      {
        "id": "D",
        "text": "SANITATIONanitation",
        "isCorrect": false,
        "rationale": "'SANITATIONanitation' significa 'Saneamento e Higiene Escolar', não 'Literatura Acadêmica / Bibliografia'."
      }
    ]
  },
  {
    "id": "sql-sch-d-44",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Testimony",
    "wordPt": "Depoimento / Testemunho Formal",
    "phonetic": "ˈtɛs.təˌmoʊ.ni",
    "sentence": "The ethics committee reviewed sworn expert _________.",
    "sentencePt": "O comitê de ética analisou o testemunho formal juramentado do perito.",
    "exampleEn": "The ethics committee reviewed sworn expert Testimony.",
    "examplePt": "O comitê de ética analisou o testemunho formal juramentado do perito.",
    "gapWord": "Testimony",
    "question": "Como se diz 'Depoimento / Testemunho Formal' em inglês?",
    "hint": "Declaração oral ou escrita atestando a veracidade de algo.",
    "rationale": "'Testimony' (ˈtɛs.təˌmoʊ.ni): Declaração oral ou escrita atestando a veracidade de algo.",
    "options": [
      {
        "id": "A",
        "text": "SYLLABUSyllabus",
        "isCorrect": false,
        "rationale": "'SYLLABUSyllabus' significa 'Ementa de Disciplina', não 'Depoimento / Testemunho Formal'."
      },
      {
        "id": "B",
        "text": "EQUIPMENTquipment",
        "isCorrect": false,
        "rationale": "'EQUIPMENTquipment' significa 'Equipamento Institucional', não 'Depoimento / Testemunho Formal'."
      },
      {
        "id": "C",
        "text": "PUBLICATIONublication",
        "isCorrect": false,
        "rationale": "'PUBLICATIONublication' significa 'Publicação Acadêmica', não 'Depoimento / Testemunho Formal'."
      },
      {
        "id": "D",
        "text": "Testimony",
        "isCorrect": true,
        "rationale": "'Testimony' é a tradução correta para 'Depoimento / Testemunho Formal'."
      }
    ]
  },
  {
    "id": "sql-sch-d-45",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Credentials",
    "wordPt": "Credenciais Acadêmicas",
    "phonetic": "krəˈdɛn.ʃəlz",
    "sentence": "Professors must present verified postgraduate academic _________.",
    "sentencePt": "Professores devem apresentar credenciais acadêmicas de pós-graduação.",
    "exampleEn": "Professors must present verified postgraduate academic Credentials.",
    "examplePt": "Professores devem apresentar credenciais acadêmicas de pós-graduação.",
    "gapWord": "Credentials",
    "question": "Como se diz 'Credenciais Acadêmicas' em inglês?",
    "hint": "Documentos comprobatórios de títulos, qualificações ou autoridade.",
    "rationale": "'Credentials' (krəˈdɛn.ʃəlz): Documentos comprobatórios de títulos, qualificações ou autoridade.",
    "options": [
      {
        "id": "A",
        "text": "Credentials",
        "isCorrect": true,
        "rationale": "'Credentials' é a tradução correta para 'Credenciais Acadêmicas'."
      },
      {
        "id": "B",
        "text": "PEDAGOGYedagogy",
        "isCorrect": false,
        "rationale": "'PEDAGOGYedagogy' significa 'Pedagogia', não 'Credenciais Acadêmicas'."
      },
      {
        "id": "C",
        "text": "REGISTRYegistry",
        "isCorrect": false,
        "rationale": "'REGISTRYegistry' significa 'Registro Escolar / Secretaria Acadêmica', não 'Credenciais Acadêmicas'."
      },
      {
        "id": "D",
        "text": "REQUISITESequisites",
        "isCorrect": false,
        "rationale": "'REQUISITESequisites' significa 'Requisitos / Materiais Obrigatórios', não 'Credenciais Acadêmicas'."
      }
    ]
  },
  {
    "id": "sql-sch-d-46",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Transcripts",
    "wordPt": "Históricos Escolares",
    "phonetic": "ˈtræn.skrɪpts",
    "sentence": "Universities evaluate official secondary school grade _________.",
    "sentencePt": "Universidades avaliam os históricos escolares oficiais do ensino médio.",
    "exampleEn": "Universities evaluate official secondary school grade Transcripts.",
    "examplePt": "Universidades avaliam os históricos escolares oficiais do ensino médio.",
    "gapWord": "Transcripts",
    "question": "Como se diz 'Históricos Escolares' em inglês?",
    "hint": "Registros acadêmicos oficiais com as notas e disciplinas cursadas.",
    "rationale": "'Transcripts' (ˈtræn.skrɪpts): Registros acadêmicos oficiais com as notas e disciplinas cursadas.",
    "options": [
      {
        "id": "A",
        "text": "PERIODICALeriodical",
        "isCorrect": false,
        "rationale": "'PERIODICALeriodical' significa 'Periódico Científico / Revista Acadêmica', não 'Históricos Escolares'."
      },
      {
        "id": "B",
        "text": "Transcripts",
        "isCorrect": true,
        "rationale": "'Transcripts' é a tradução correta para 'Históricos Escolares'."
      },
      {
        "id": "C",
        "text": "LABORATORIESaboratories",
        "isCorrect": false,
        "rationale": "'LABORATORIESaboratories' significa 'Laboratórios Especializados', não 'Históricos Escolares'."
      },
      {
        "id": "D",
        "text": "FIXTURESixtures",
        "isCorrect": false,
        "rationale": "'FIXTURESixtures' significa 'Instalações Fixas / Acessórios Embutidos', não 'Históricos Escolares'."
      }
    ]
  },
  {
    "id": "sql-sch-d-47",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Certifications",
    "wordPt": "Certificações Profissionais",
    "phonetic": "ˌsɜːr.tə.fəˈkeɪ.ʃənz",
    "sentence": "Technical instructors maintain specialized industry _________.",
    "sentencePt": "Instrutores técnicos mantêm certificações especializadas do setor.",
    "exampleEn": "Technical instructors maintain specialized industry Certifications.",
    "examplePt": "Instrutores técnicos mantêm certificações especializadas do setor.",
    "gapWord": "Certifications",
    "question": "Como se diz 'Certificações Profissionais' em inglês?",
    "hint": "Comprovações formais emitidas por órgãos qualificadores.",
    "rationale": "'Certifications' (ˌsɜːr.tə.fəˈkeɪ.ʃənz): Comprovações formais emitidas por órgãos qualificadores.",
    "options": [
      {
        "id": "A",
        "text": "CURRICULUMurriculum",
        "isCorrect": false,
        "rationale": "'CURRICULUMurriculum' significa 'Currículo Escolar / Grade Curricular', não 'Certificações Profissionais'."
      },
      {
        "id": "B",
        "text": "MICROFICHEicrofiche",
        "isCorrect": false,
        "rationale": "'MICROFICHEicrofiche' significa 'Microficha', não 'Certificações Profissionais'."
      },
      {
        "id": "C",
        "text": "Certifications",
        "isCorrect": true,
        "rationale": "'Certifications' é a tradução correta para 'Certificações Profissionais'."
      },
      {
        "id": "D",
        "text": "COMPENDIUMompendium",
        "isCorrect": false,
        "rationale": "'COMPENDIUMompendium' significa 'Compêndio / Sumário Sistemático', não 'Certificações Profissionais'."
      }
    ]
  },
  {
    "id": "sql-sch-d-48",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Accreditation",
    "wordPt": "Acreditação / Reconhecimento Oficial",
    "phonetic": "əˌkrɛd.əˈteɪ.ʃən",
    "sentence": "The engineering department received full international _________.",
    "sentencePt": "O departamento de engenharia recebeu plena acreditação internacional.",
    "exampleEn": "The engineering department received full international Accreditation.",
    "examplePt": "O departamento de engenharia recebeu plena acreditação internacional.",
    "gapWord": "Accreditation",
    "question": "Como se diz 'Acreditação / Reconhecimento Oficial' em inglês?",
    "hint": "Processo formal de reconhecimento da excelência institucional por órgão credenciado.",
    "rationale": "'Accreditation' (əˌkrɛd.əˈteɪ.ʃən): Processo formal de reconhecimento da excelência institucional por órgão credenciado.",
    "options": [
      {
        "id": "A",
        "text": "CREDENTIALSredentials",
        "isCorrect": false,
        "rationale": "'CREDENTIALSredentials' significa 'Credenciais Acadêmicas', não 'Acreditação / Reconhecimento Oficial'."
      },
      {
        "id": "B",
        "text": "TESTIMONYestimony",
        "isCorrect": false,
        "rationale": "'TESTIMONYestimony' significa 'Depoimento / Testemunho Formal', não 'Acreditação / Reconhecimento Oficial'."
      },
      {
        "id": "C",
        "text": "DISSERTATIONissertation",
        "isCorrect": false,
        "rationale": "'DISSERTATIONissertation' significa 'Dissertação Acadêmica', não 'Acreditação / Reconhecimento Oficial'."
      },
      {
        "id": "D",
        "text": "Accreditation",
        "isCorrect": true,
        "rationale": "'Accreditation' é a tradução correta para 'Acreditação / Reconhecimento Oficial'."
      }
    ]
  },
  {
    "id": "sql-sch-d-49",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Accessories",
    "wordPt": "Acessórios",
    "phonetic": "ækˈsɛs.ər.iz",
    "sentence": "Headsets and laptop bags are useful student tech _________.",
    "sentencePt": "Fones com microfone e capas de notebook são acessórios úteis de alunos.",
    "exampleEn": "Headsets and laptop bags are useful student tech Accessories.",
    "examplePt": "Fones com microfone e capas de notebook são acessórios úteis de alunos.",
    "gapWord": "Accessories",
    "question": "Como se diz 'Acessórios' em inglês?",
    "hint": "Objetos adicionais complementares que auxiliam a função principal.",
    "rationale": "'Accessories' (ækˈsɛs.ər.iz): Objetos adicionais complementares que auxiliam a função principal.",
    "options": [
      {
        "id": "A",
        "text": "Accessories",
        "isCorrect": true,
        "rationale": "'Accessories' é a tradução correta para 'Acessórios'."
      },
      {
        "id": "B",
        "text": "PUBLICATIONublication",
        "isCorrect": false,
        "rationale": "'PUBLICATIONublication' significa 'Publicação Acadêmica', não 'Acessórios'."
      },
      {
        "id": "C",
        "text": "DISSERTATIONissertation",
        "isCorrect": false,
        "rationale": "'DISSERTATIONissertation' significa 'Dissertação Acadêmica', não 'Acessórios'."
      },
      {
        "id": "D",
        "text": "LITERATUREiterature",
        "isCorrect": false,
        "rationale": "'LITERATUREiterature' significa 'Literatura Acadêmica / Bibliografia', não 'Acessórios'."
      }
    ]
  },
  {
    "id": "sql-sch-d-50",
    "topic": "objetos",
    "difficulty": "dificil",
    "wordEn": "Fixtures",
    "wordPt": "Instalações Fixas / Acessórios Embutidos",
    "phonetic": "ˈfɪks.tʃərz",
    "sentence": "Ceiling projectors and lighting are permanent classroom _________.",
    "sentencePt": "Projetores de teto e luminárias são instalações fixas de sala de aula.",
    "exampleEn": "Ceiling projectors and lighting are permanent classroom Fixtures.",
    "examplePt": "Projetores de teto e luminárias são instalações fixas de sala de aula.",
    "gapWord": "Fixtures",
    "question": "Como se diz 'Instalações Fixas / Acessórios Embutidos' em inglês?",
    "hint": "Equipamentos ou móveis fixados de modo permanente na edificação.",
    "rationale": "'Fixtures' (ˈfɪks.tʃərz): Equipamentos ou móveis fixados de modo permanente na edificação.",
    "options": [
      {
        "id": "A",
        "text": "PROSPECTUSrospectus",
        "isCorrect": false,
        "rationale": "'PROSPECTUSrospectus' significa 'Prospecto Institucional / Catálogo', não 'Instalações Fixas / Acessórios Embutidos'."
      },
      {
        "id": "B",
        "text": "Fixtures",
        "isCorrect": true,
        "rationale": "'Fixtures' é a tradução correta para 'Instalações Fixas / Acessórios Embutidos'."
      },
      {
        "id": "C",
        "text": "TYPESCRIPTypescript",
        "isCorrect": false,
        "rationale": "'TYPESCRIPTypescript' significa 'Datiloscrito / Texto Datilografado', não 'Instalações Fixas / Acessórios Embutidos'."
      },
      {
        "id": "D",
        "text": "VENTILATIONentilation",
        "isCorrect": false,
        "rationale": "'VENTILATIONentilation' significa 'Ventilação de Ambientes', não 'Instalações Fixas / Acessórios Embutidos'."
      }
    ]
  },
  {
    "id": "sql-gf-f-01",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Map",
    "wordPt": "Mapa Geográfico",
    "phonetic": "mæp",
    "sentence": "Unfold the road _________ to plan our scenic route.",
    "sentencePt": "Desdobre o mapa rodoviário para planejar nossa rota cênica.",
    "exampleEn": "Unfold the road Map to plan our scenic route.",
    "examplePt": "Desdobre o mapa rodoviário para planejar nossa rota cênica.",
    "gapWord": "Map",
    "question": "Como se diz 'Mapa Geográfico' em inglês?",
    "hint": "Representação gráfica do espaço geográfico e relevo.",
    "rationale": "'Map' (mæp): Representação gráfica do espaço geográfico e relevo.",
    "options": [
      {
        "id": "A",
        "text": "Map",
        "isCorrect": true,
        "rationale": "'Map' é a tradução correta para 'Mapa Geográfico'."
      },
      {
        "id": "B",
        "text": "MEALeal",
        "isCorrect": false,
        "rationale": "'MEALeal' significa 'Refeição', não 'Mapa Geográfico'."
      },
      {
        "id": "C",
        "text": "SWEETweet",
        "isCorrect": false,
        "rationale": "'SWEETweet' significa 'Doce', não 'Mapa Geográfico'."
      },
      {
        "id": "D",
        "text": "RICEice",
        "isCorrect": false,
        "rationale": "'RICEice' significa 'Arroz', não 'Mapa Geográfico'."
      }
    ]
  },
  {
    "id": "sql-gf-f-02",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Land",
    "wordPt": "Terra Continental",
    "phonetic": "lænd",
    "sentence": "Farming thrives on fertile agricultural _________.",
    "sentencePt": "A agricultura prospera em terras férteis agrícolas.",
    "exampleEn": "Farming thrives on fertile agricultural Land.",
    "examplePt": "A agricultura prospera em terras férteis agrícolas.",
    "gapWord": "Land",
    "question": "Como se diz 'Terra Continental' em inglês?",
    "hint": "Superfície terrestre firme cultivável ou habitável.",
    "rationale": "'Land' (lænd): Superfície terrestre firme cultivável ou habitável.",
    "options": [
      {
        "id": "A",
        "text": "JUICEuice",
        "isCorrect": false,
        "rationale": "'JUICEuice' significa 'Suco Natural', não 'Terra Continental'."
      },
      {
        "id": "B",
        "text": "Land",
        "isCorrect": true,
        "rationale": "'Land' é a tradução correta para 'Terra Continental'."
      },
      {
        "id": "C",
        "text": "FRUITruit",
        "isCorrect": false,
        "rationale": "'FRUITruit' significa 'Fruta', não 'Terra Continental'."
      },
      {
        "id": "D",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Terra Continental'."
      }
    ]
  },
  {
    "id": "sql-gf-f-03",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "City",
    "wordPt": "Cidade / Metrópole",
    "phonetic": "ˈsɪt.i",
    "sentence": "Millions of people live and work in the vibrant _________.",
    "sentencePt": "Milhões de pessoas vivem e trabalham na cidade vibrante.",
    "exampleEn": "Millions of people live and work in the vibrant City.",
    "examplePt": "Milhões de pessoas vivem e trabalham na cidade vibrante.",
    "gapWord": "City",
    "question": "Como se diz 'Cidade / Metrópole' em inglês?",
    "hint": "Aglomerado urbano denso com infraestrutura própria.",
    "rationale": "'City' (ˈsɪt.i): Aglomerado urbano denso com infraestrutura própria.",
    "options": [
      {
        "id": "A",
        "text": "FISHish",
        "isCorrect": false,
        "rationale": "'FISHish' significa 'Peixe Culinário', não 'Cidade / Metrópole'."
      },
      {
        "id": "B",
        "text": "BREADread",
        "isCorrect": false,
        "rationale": "'BREADread' significa 'Pão', não 'Cidade / Metrópole'."
      },
      {
        "id": "C",
        "text": "City",
        "isCorrect": true,
        "rationale": "'City' é a tradução correta para 'Cidade / Metrópole'."
      },
      {
        "id": "D",
        "text": "JUICEuice",
        "isCorrect": false,
        "rationale": "'JUICEuice' significa 'Suco Natural', não 'Cidade / Metrópole'."
      }
    ]
  },
  {
    "id": "sql-gf-f-04",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Town",
    "wordPt": "Cidade Pequena / Vila",
    "phonetic": "taʊn",
    "sentence": "We spent the weekend in a peaceful coastal _________.",
    "sentencePt": "Passamos o fim de semana em uma cidade pequena litorânea e tranquila.",
    "exampleEn": "We spent the weekend in a peaceful coastal Town.",
    "examplePt": "Passamos o fim de semana em uma cidade pequena litorânea e tranquila.",
    "gapWord": "Town",
    "question": "Como se diz 'Cidade Pequena / Vila' em inglês?",
    "hint": "Povoação urbana menor que uma grande cidade.",
    "rationale": "'Town' (taʊn): Povoação urbana menor que uma grande cidade.",
    "options": [
      {
        "id": "A",
        "text": "DRINKrink",
        "isCorrect": false,
        "rationale": "'DRINKrink' significa 'Beber / Bebida', não 'Cidade Pequena / Vila'."
      },
      {
        "id": "B",
        "text": "SPOONpoon",
        "isCorrect": false,
        "rationale": "'SPOONpoon' significa 'Colher', não 'Cidade Pequena / Vila'."
      },
      {
        "id": "C",
        "text": "MEATeat",
        "isCorrect": false,
        "rationale": "'MEATeat' significa 'Carne', não 'Cidade Pequena / Vila'."
      },
      {
        "id": "D",
        "text": "Town",
        "isCorrect": true,
        "rationale": "'Town' é a tradução correta para 'Cidade Pequena / Vila'."
      }
    ]
  },
  {
    "id": "sql-gf-f-05",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Park",
    "wordPt": "Parque Público",
    "phonetic": "pɑːrk",
    "sentence": "Families picnic under shade trees in the central _________.",
    "sentencePt": "Famílias fazem piquenique sob árvores no parque central.",
    "exampleEn": "Families picnic under shade trees in the central Park.",
    "examplePt": "Famílias fazem piquenique sob árvores no parque central.",
    "gapWord": "Park",
    "question": "Como se diz 'Parque Público' em inglês?",
    "hint": "Espaço verde público destinado a lazer e preservação.",
    "rationale": "'Park' (pɑːrk): Espaço verde público destinado a lazer e preservação.",
    "options": [
      {
        "id": "A",
        "text": "Park",
        "isCorrect": true,
        "rationale": "'Park' é a tradução correta para 'Parque Público'."
      },
      {
        "id": "B",
        "text": "BREADread",
        "isCorrect": false,
        "rationale": "'BREADread' significa 'Pão', não 'Parque Público'."
      },
      {
        "id": "C",
        "text": "SNACKnack",
        "isCorrect": false,
        "rationale": "'SNACKnack' significa 'Lanche Rápido', não 'Parque Público'."
      },
      {
        "id": "D",
        "text": "CAKEake",
        "isCorrect": false,
        "rationale": "'CAKEake' significa 'Bolo', não 'Parque Público'."
      }
    ]
  },
  {
    "id": "sql-gf-f-06",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Road",
    "wordPt": "Estrada / Rodovia",
    "phonetic": "roʊd",
    "sentence": "The paved _________ winds through rolling countryside.",
    "sentencePt": "A estrada pavimentada serpenteia pelo campo ondulado.",
    "exampleEn": "The paved Road winds through rolling countryside.",
    "examplePt": "A estrada pavimentada serpenteia pelo campo ondulado.",
    "gapWord": "Road",
    "question": "Como se diz 'Estrada / Rodovia' em inglês?",
    "hint": "Via de trânsito terrestre construída para veículos.",
    "rationale": "'Road' (roʊd): Via de trânsito terrestre construída para veículos.",
    "options": [
      {
        "id": "A",
        "text": "LAKEake",
        "isCorrect": false,
        "rationale": "'LAKEake' significa 'Lago', não 'Estrada / Rodovia'."
      },
      {
        "id": "B",
        "text": "Road",
        "isCorrect": true,
        "rationale": "'Road' é a tradução correta para 'Estrada / Rodovia'."
      },
      {
        "id": "C",
        "text": "BOWLowl",
        "isCorrect": false,
        "rationale": "'BOWLowl' significa 'Tigela / Cumbuca', não 'Estrada / Rodovia'."
      },
      {
        "id": "D",
        "text": "KNIFEnife",
        "isCorrect": false,
        "rationale": "'KNIFEnife' significa 'Faca', não 'Estrada / Rodovia'."
      }
    ]
  },
  {
    "id": "sql-gf-f-07",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Path",
    "wordPt": "Trilha / Caminho",
    "phonetic": "pæθ",
    "sentence": "Follow the narrow stone _________ to the waterfall.",
    "sentencePt": "Siga a trilha estreita de pedras até a cachoeira.",
    "exampleEn": "Follow the narrow stone Path to the waterfall.",
    "examplePt": "Siga a trilha estreita de pedras até a cachoeira.",
    "gapWord": "Path",
    "question": "Como se diz 'Trilha / Caminho' em inglês?",
    "hint": "Passagem estreita de pedestres na natureza ou campo.",
    "rationale": "'Path' (pæθ): Passagem estreita de pedestres na natureza ou campo.",
    "options": [
      {
        "id": "A",
        "text": "MILKilk",
        "isCorrect": false,
        "rationale": "'MILKilk' significa 'Leite', não 'Trilha / Caminho'."
      },
      {
        "id": "B",
        "text": "LAKEake",
        "isCorrect": false,
        "rationale": "'LAKEake' significa 'Lago', não 'Trilha / Caminho'."
      },
      {
        "id": "C",
        "text": "Path",
        "isCorrect": true,
        "rationale": "'Path' é a tradução correta para 'Trilha / Caminho'."
      },
      {
        "id": "D",
        "text": "JUICEuice",
        "isCorrect": false,
        "rationale": "'JUICEuice' significa 'Suco Natural', não 'Trilha / Caminho'."
      }
    ]
  },
  {
    "id": "sql-gf-f-08",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Hill",
    "wordPt": "Colina / Morro",
    "phonetic": "hɪl",
    "sentence": "Vineyards cover the gentle slopes of the green _________.",
    "sentencePt": "Vinhedos cobrem as encostas suaves da colina verde.",
    "exampleEn": "Vineyards cover the gentle slopes of the green Hill.",
    "examplePt": "Vinhedos cobrem as encostas suaves da colina verde.",
    "gapWord": "Hill",
    "question": "Como se diz 'Colina / Morro' em inglês?",
    "hint": "Elevação de relevo menor que uma montanha.",
    "rationale": "'Hill' (hɪl): Elevação de relevo menor que uma montanha.",
    "options": [
      {
        "id": "A",
        "text": "PATHath",
        "isCorrect": false,
        "rationale": "'PATHath' significa 'Trilha / Caminho', não 'Colina / Morro'."
      },
      {
        "id": "B",
        "text": "PEARear",
        "isCorrect": false,
        "rationale": "'PEARear' significa 'Pêra', não 'Colina / Morro'."
      },
      {
        "id": "C",
        "text": "SPOONpoon",
        "isCorrect": false,
        "rationale": "'SPOONpoon' significa 'Colher', não 'Colina / Morro'."
      },
      {
        "id": "D",
        "text": "Hill",
        "isCorrect": true,
        "rationale": "'Hill' é a tradução correta para 'Colina / Morro'."
      }
    ]
  },
  {
    "id": "sql-gf-f-09",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Sea",
    "wordPt": "Mar",
    "phonetic": "siː",
    "sentence": "Fishermen sailed their boats into the open _________.",
    "sentencePt": "Pescadores navegaram seus barcos no mar aberto.",
    "exampleEn": "Fishermen sailed their boats into the open Sea.",
    "examplePt": "Pescadores navegaram seus barcos no mar aberto.",
    "gapWord": "Sea",
    "question": "Como se diz 'Mar' em inglês?",
    "hint": "Vasto corpo de água salgada contíguo aos continentes.",
    "rationale": "'Sea' (siː): Vasto corpo de água salgada contíguo aos continentes.",
    "options": [
      {
        "id": "A",
        "text": "Sea",
        "isCorrect": true,
        "rationale": "'Sea' é a tradução correta para 'Mar'."
      },
      {
        "id": "B",
        "text": "LANDand",
        "isCorrect": false,
        "rationale": "'LANDand' significa 'Terra Continental', não 'Mar'."
      },
      {
        "id": "C",
        "text": "WATERater",
        "isCorrect": false,
        "rationale": "'WATERater' significa 'Água Potável', não 'Mar'."
      },
      {
        "id": "D",
        "text": "TOWNown",
        "isCorrect": false,
        "rationale": "'TOWNown' significa 'Cidade Pequena / Vila', não 'Mar'."
      }
    ]
  },
  {
    "id": "sql-gf-f-10",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Lake",
    "wordPt": "Lago",
    "phonetic": "leɪk",
    "sentence": "Cabins are clustered around the freshwater alpine _________.",
    "sentencePt": "Cabanas estão agrupadas ao redor do lago alpino de água doce.",
    "exampleEn": "Cabins are clustered around the freshwater alpine Lake.",
    "examplePt": "Cabanas estão agrupadas ao redor do lago alpino de água doce.",
    "gapWord": "Lake",
    "question": "Como se diz 'Lago' em inglês?",
    "hint": "Massa de água doce cercada inteiramente por terra.",
    "rationale": "'Lake' (leɪk): Massa de água doce cercada inteiramente por terra.",
    "options": [
      {
        "id": "A",
        "text": "FOODood",
        "isCorrect": false,
        "rationale": "'FOODood' significa 'Comida / Alimento', não 'Lago'."
      },
      {
        "id": "B",
        "text": "Lake",
        "isCorrect": true,
        "rationale": "'Lake' é a tradução correta para 'Lago'."
      },
      {
        "id": "C",
        "text": "SOUPoup",
        "isCorrect": false,
        "rationale": "'SOUPoup' significa 'Sopa', não 'Lago'."
      },
      {
        "id": "D",
        "text": "WATERater",
        "isCorrect": false,
        "rationale": "'WATERater' significa 'Água Potável', não 'Lago'."
      }
    ]
  },
  {
    "id": "sql-gf-f-11",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Food",
    "wordPt": "Comida / Alimento",
    "phonetic": "fuːd",
    "sentence": "Fresh organic _________ provides essential daily energy.",
    "sentencePt": "Comida orgânica fresca fornece energia diária essencial.",
    "exampleEn": "Fresh organic Food provides essential daily energy.",
    "examplePt": "Comida orgânica fresca fornece energia diária essencial.",
    "gapWord": "Food",
    "question": "Como se diz 'Comida / Alimento' em inglês?",
    "hint": "Qualquer substância consumida para nutrição corporal.",
    "rationale": "'Food' (fuːd): Qualquer substância consumida para nutrição corporal.",
    "options": [
      {
        "id": "A",
        "text": "SALTalt",
        "isCorrect": false,
        "rationale": "'SALTalt' significa 'Sal de Cozinha', não 'Comida / Alimento'."
      },
      {
        "id": "B",
        "text": "SWEETweet",
        "isCorrect": false,
        "rationale": "'SWEETweet' significa 'Doce', não 'Comida / Alimento'."
      },
      {
        "id": "C",
        "text": "Food",
        "isCorrect": true,
        "rationale": "'Food' é a tradução correta para 'Comida / Alimento'."
      },
      {
        "id": "D",
        "text": "BITEite",
        "isCorrect": false,
        "rationale": "'BITEite' significa 'Mordida / Bocado', não 'Comida / Alimento'."
      }
    ]
  },
  {
    "id": "sql-gf-f-12",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Rice",
    "wordPt": "Arroz",
    "phonetic": "raɪs",
    "sentence": "Steamed white _________ is a staple side dish globally.",
    "sentencePt": "Arroz branco cozido no vapor é um acompanhamento básico global.",
    "exampleEn": "Steamed white Rice is a staple side dish globally.",
    "examplePt": "Arroz branco cozido no vapor é um acompanhamento básico global.",
    "gapWord": "Rice",
    "question": "Como se diz 'Arroz' em inglês?",
    "hint": "Cereal em grãos amplamente consumido no mundo.",
    "rationale": "'Rice' (raɪs): Cereal em grãos amplamente consumido no mundo.",
    "options": [
      {
        "id": "A",
        "text": "COOKook",
        "isCorrect": false,
        "rationale": "'COOKook' significa 'Cozinhar', não 'Arroz'."
      },
      {
        "id": "B",
        "text": "DISHish",
        "isCorrect": false,
        "rationale": "'DISHish' significa 'Prato / Refeição Pronta', não 'Arroz'."
      },
      {
        "id": "C",
        "text": "PIEie",
        "isCorrect": false,
        "rationale": "'PIEie' significa 'Torta / Empadão', não 'Arroz'."
      },
      {
        "id": "D",
        "text": "Rice",
        "isCorrect": true,
        "rationale": "'Rice' é a tradução correta para 'Arroz'."
      }
    ]
  },
  {
    "id": "sql-gf-f-13",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Meat",
    "wordPt": "Carne",
    "phonetic": "miːt",
    "sentence": "The chef seasoned the tender roasted _________ with herbs.",
    "sentencePt": "O chef temperou a carne assada macia com ervas.",
    "exampleEn": "The chef seasoned the tender roasted Meat with herbs.",
    "examplePt": "O chef temperou a carne assada macia com ervas.",
    "gapWord": "Meat",
    "question": "Como se diz 'Carne' em inglês?",
    "hint": "Tecido muscular animal consumido na alimentação humana.",
    "rationale": "'Meat' (miːt): Tecido muscular animal consumido na alimentação humana.",
    "options": [
      {
        "id": "A",
        "text": "Meat",
        "isCorrect": true,
        "rationale": "'Meat' é a tradução correta para 'Carne'."
      },
      {
        "id": "B",
        "text": "EGGgg",
        "isCorrect": false,
        "rationale": "'EGGgg' significa 'Ovo', não 'Carne'."
      },
      {
        "id": "C",
        "text": "BITEite",
        "isCorrect": false,
        "rationale": "'BITEite' significa 'Mordida / Bocado', não 'Carne'."
      },
      {
        "id": "D",
        "text": "BANANAanana",
        "isCorrect": false,
        "rationale": "'BANANAanana' significa 'Banana', não 'Carne'."
      }
    ]
  },
  {
    "id": "sql-gf-f-14",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Fish",
    "wordPt": "Peixe Culinário",
    "phonetic": "fɪʃ",
    "sentence": "Grilled sea _________ is served with fresh lemon slices.",
    "sentencePt": "Peixe marinho grelhado é servido com fatias de limão fresco.",
    "exampleEn": "Grilled sea Fish is served with fresh lemon slices.",
    "examplePt": "Peixe marinho grelhado é servido com fatias de limão fresco.",
    "gapWord": "Fish",
    "question": "Como se diz 'Peixe Culinário' em inglês?",
    "hint": "Alimento de origem aquática rico em proteínas e ômega-3.",
    "rationale": "'Fish' (fɪʃ): Alimento de origem aquática rico em proteínas e ômega-3.",
    "options": [
      {
        "id": "A",
        "text": "TASTEaste",
        "isCorrect": false,
        "rationale": "'TASTEaste' significa 'Gosto / Sabor', não 'Peixe Culinário'."
      },
      {
        "id": "B",
        "text": "Fish",
        "isCorrect": true,
        "rationale": "'Fish' é a tradução correta para 'Peixe Culinário'."
      },
      {
        "id": "C",
        "text": "COOKook",
        "isCorrect": false,
        "rationale": "'COOKook' significa 'Cozinhar', não 'Peixe Culinário'."
      },
      {
        "id": "D",
        "text": "BREADread",
        "isCorrect": false,
        "rationale": "'BREADread' significa 'Pão', não 'Peixe Culinário'."
      }
    ]
  },
  {
    "id": "sql-gf-f-15",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Milk",
    "wordPt": "Leite",
    "phonetic": "mɪlk",
    "sentence": "Drink a tall cold glass of pasteurized dairy _________.",
    "sentencePt": "Beba um copo alto e gelado de leite pasteurizado.",
    "exampleEn": "Drink a tall cold glass of pasteurized dairy Milk.",
    "examplePt": "Beba um copo alto e gelado de leite pasteurizado.",
    "gapWord": "Milk",
    "question": "Como se diz 'Leite' em inglês?",
    "hint": "Líquido nutritivo esbranquiçado produzido por mamíferos.",
    "rationale": "'Milk' (mɪlk): Líquido nutritivo esbranquiçado produzido por mamíferos.",
    "options": [
      {
        "id": "A",
        "text": "CUPup",
        "isCorrect": false,
        "rationale": "'CUPup' significa 'Xícara', não 'Leite'."
      },
      {
        "id": "B",
        "text": "KNIFEnife",
        "isCorrect": false,
        "rationale": "'KNIFEnife' significa 'Faca', não 'Leite'."
      },
      {
        "id": "C",
        "text": "Milk",
        "isCorrect": true,
        "rationale": "'Milk' é a tradução correta para 'Leite'."
      },
      {
        "id": "D",
        "text": "PIEie",
        "isCorrect": false,
        "rationale": "'PIEie' significa 'Torta / Empadão', não 'Leite'."
      }
    ]
  },
  {
    "id": "sql-gf-f-16",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Egg",
    "wordPt": "Ovo",
    "phonetic": "ɛɡ",
    "sentence": "Whisk one fresh chicken _________ into the pancake batter.",
    "sentencePt": "Bata um ovo fresco de galinha na massa da panqueca.",
    "exampleEn": "Whisk one fresh chicken Egg into the pancake batter.",
    "examplePt": "Bata um ovo fresco de galinha na massa da panqueca.",
    "gapWord": "Egg",
    "question": "Como se diz 'Ovo' em inglês?",
    "hint": "Alimento oval nutritivo de aves composto por clara e gema.",
    "rationale": "'Egg' (ɛɡ): Alimento oval nutritivo de aves composto por clara e gema.",
    "options": [
      {
        "id": "A",
        "text": "TOWNown",
        "isCorrect": false,
        "rationale": "'TOWNown' significa 'Cidade Pequena / Vila', não 'Ovo'."
      },
      {
        "id": "B",
        "text": "FRUITruit",
        "isCorrect": false,
        "rationale": "'FRUITruit' significa 'Fruta', não 'Ovo'."
      },
      {
        "id": "C",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Ovo'."
      },
      {
        "id": "D",
        "text": "Egg",
        "isCorrect": true,
        "rationale": "'Egg' é a tradução correta para 'Ovo'."
      }
    ]
  },
  {
    "id": "sql-gf-f-17",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Bread",
    "wordPt": "Pão",
    "phonetic": "brɛd",
    "sentence": "The aroma of crusty sourdough _________ filled the room.",
    "sentencePt": "O aroma de pão de fermentação natural cascudo encheu o ambiente.",
    "exampleEn": "The aroma of crusty sourdough Bread filled the room.",
    "examplePt": "O aroma de pão de fermentação natural cascudo encheu o ambiente.",
    "gapWord": "Bread",
    "question": "Como se diz 'Pão' em inglês?",
    "hint": "Alimento assado básico à base de farinha, água e fermento.",
    "rationale": "'Bread' (brɛd): Alimento assado básico à base de farinha, água e fermento.",
    "options": [
      {
        "id": "A",
        "text": "Bread",
        "isCorrect": true,
        "rationale": "'Bread' é a tradução correta para 'Pão'."
      },
      {
        "id": "B",
        "text": "CITYity",
        "isCorrect": false,
        "rationale": "'CITYity' significa 'Cidade / Metrópole', não 'Pão'."
      },
      {
        "id": "C",
        "text": "ROADoad",
        "isCorrect": false,
        "rationale": "'ROADoad' significa 'Estrada / Rodovia', não 'Pão'."
      },
      {
        "id": "D",
        "text": "GRAPErape",
        "isCorrect": false,
        "rationale": "'GRAPErape' significa 'Uva', não 'Pão'."
      }
    ]
  },
  {
    "id": "sql-gf-f-18",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Soup",
    "wordPt": "Sopa",
    "phonetic": "suːp",
    "sentence": "A warm vegetable _________ is comforting on chilly evenings.",
    "sentencePt": "Uma sopa quente de legumes é reconfortante em noites frias.",
    "exampleEn": "A warm vegetable Soup is comforting on chilly evenings.",
    "examplePt": "Uma sopa quente de legumes é reconfortante em noites frias.",
    "gapWord": "Soup",
    "question": "Como se diz 'Sopa' em inglês?",
    "hint": "Prato líquido ou cremoso cozido com caldos e vegetais.",
    "rationale": "'Soup' (suːp): Prato líquido ou cremoso cozido com caldos e vegetais.",
    "options": [
      {
        "id": "A",
        "text": "SNACKnack",
        "isCorrect": false,
        "rationale": "'SNACKnack' significa 'Lanche Rápido', não 'Sopa'."
      },
      {
        "id": "B",
        "text": "Soup",
        "isCorrect": true,
        "rationale": "'Soup' é a tradução correta para 'Sopa'."
      },
      {
        "id": "C",
        "text": "TEAea",
        "isCorrect": false,
        "rationale": "'TEAea' significa 'Chá', não 'Sopa'."
      },
      {
        "id": "D",
        "text": "BANANAanana",
        "isCorrect": false,
        "rationale": "'BANANAanana' significa 'Banana', não 'Sopa'."
      }
    ]
  },
  {
    "id": "sql-gf-f-19",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Cake",
    "wordPt": "Bolo",
    "phonetic": "keɪk",
    "sentence": "Blow out the candles on the frosted chocolate birthday _________.",
    "sentencePt": "Assopre as velas no bolo de aniversário confeitado de chocolate.",
    "exampleEn": "Blow out the candles on the frosted chocolate birthday Cake.",
    "examplePt": "Assopre as velas no bolo de aniversário confeitado de chocolate.",
    "gapWord": "Cake",
    "question": "Como se diz 'Bolo' em inglês?",
    "hint": "Doce assado macio à base de farinha, açúcar e ovos.",
    "rationale": "'Cake' (keɪk): Doce assado macio à base de farinha, açúcar e ovos.",
    "options": [
      {
        "id": "A",
        "text": "FRUITruit",
        "isCorrect": false,
        "rationale": "'FRUITruit' significa 'Fruta', não 'Bolo'."
      },
      {
        "id": "B",
        "text": "CITYity",
        "isCorrect": false,
        "rationale": "'CITYity' significa 'Cidade / Metrópole', não 'Bolo'."
      },
      {
        "id": "C",
        "text": "Cake",
        "isCorrect": true,
        "rationale": "'Cake' é a tradução correta para 'Bolo'."
      },
      {
        "id": "D",
        "text": "EGGgg",
        "isCorrect": false,
        "rationale": "'EGGgg' significa 'Ovo', não 'Bolo'."
      }
    ]
  },
  {
    "id": "sql-gf-f-20",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Pie",
    "wordPt": "Torta / Empadão",
    "phonetic": "paɪ",
    "sentence": "Golden baked apple _________ is served with vanilla cream.",
    "sentencePt": "Torta dourada assada de maçã é servida com creme de baunilha.",
    "exampleEn": "Golden baked apple Pie is served with vanilla cream.",
    "examplePt": "Torta dourada assada de maçã é servida com creme de baunilha.",
    "gapWord": "Pie",
    "question": "Como se diz 'Torta / Empadão' em inglês?",
    "hint": "Prato assado de massa folhada com recheio doce ou salgado.",
    "rationale": "'Pie' (paɪ): Prato assado de massa folhada com recheio doce ou salgado.",
    "options": [
      {
        "id": "A",
        "text": "LANDand",
        "isCorrect": false,
        "rationale": "'LANDand' significa 'Terra Continental', não 'Torta / Empadão'."
      },
      {
        "id": "B",
        "text": "PLATElate",
        "isCorrect": false,
        "rationale": "'PLATElate' significa 'Prato Raso', não 'Torta / Empadão'."
      },
      {
        "id": "C",
        "text": "LEMONemon",
        "isCorrect": false,
        "rationale": "'LEMONemon' significa 'Limão', não 'Torta / Empadão'."
      },
      {
        "id": "D",
        "text": "Pie",
        "isCorrect": true,
        "rationale": "'Pie' é a tradução correta para 'Torta / Empadão'."
      }
    ]
  },
  {
    "id": "sql-gf-f-21",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Corn",
    "wordPt": "Milho",
    "phonetic": "kɔːrn",
    "sentence": "Sweet roasted yellow _________ is a popular street food.",
    "sentencePt": "Milho amarelo doce assado é uma comida de rua popular.",
    "exampleEn": "Sweet roasted yellow Corn is a popular street food.",
    "examplePt": "Milho amarelo doce assado é uma comida de rua popular.",
    "gapWord": "Corn",
    "question": "Como se diz 'Milho' em inglês?",
    "hint": "Cereal de espiga amarela originário das Américas.",
    "rationale": "'Corn' (kɔːrn): Cereal de espiga amarela originário das Américas.",
    "options": [
      {
        "id": "A",
        "text": "Corn",
        "isCorrect": true,
        "rationale": "'Corn' é a tradução correta para 'Milho'."
      },
      {
        "id": "B",
        "text": "CUPup",
        "isCorrect": false,
        "rationale": "'CUPup' significa 'Xícara', não 'Milho'."
      },
      {
        "id": "C",
        "text": "SOUPoup",
        "isCorrect": false,
        "rationale": "'SOUPoup' significa 'Sopa', não 'Milho'."
      },
      {
        "id": "D",
        "text": "COOKook",
        "isCorrect": false,
        "rationale": "'COOKook' significa 'Cozinhar', não 'Milho'."
      }
    ]
  },
  {
    "id": "sql-gf-f-22",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Salt",
    "wordPt": "Sal de Cozinha",
    "phonetic": "sɔːlt",
    "sentence": "Add a pinch of mineral sea _________ to enhance flavors.",
    "sentencePt": "Adicione uma pitada de sal marinho mineral para realçar sabores.",
    "exampleEn": "Add a pinch of mineral sea Salt to enhance flavors.",
    "examplePt": "Adicione uma pitada de sal marinho mineral para realçar sabores.",
    "gapWord": "Salt",
    "question": "Como se diz 'Sal de Cozinha' em inglês?",
    "hint": "Tempero mineral cloreto de sódio essencial para realçar o sabor.",
    "rationale": "'Salt' (sɔːlt): Tempero mineral cloreto de sódio essencial para realçar o sabor.",
    "options": [
      {
        "id": "A",
        "text": "PATHath",
        "isCorrect": false,
        "rationale": "'PATHath' significa 'Trilha / Caminho', não 'Sal de Cozinha'."
      },
      {
        "id": "B",
        "text": "Salt",
        "isCorrect": true,
        "rationale": "'Salt' é a tradução correta para 'Sal de Cozinha'."
      },
      {
        "id": "C",
        "text": "ROADoad",
        "isCorrect": false,
        "rationale": "'ROADoad' significa 'Estrada / Rodovia', não 'Sal de Cozinha'."
      },
      {
        "id": "D",
        "text": "FORKork",
        "isCorrect": false,
        "rationale": "'FORKork' significa 'Garfo', não 'Sal de Cozinha'."
      }
    ]
  },
  {
    "id": "sql-gf-f-23",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Tea",
    "wordPt": "Chá",
    "phonetic": "tiː",
    "sentence": "Steep a cup of fragrant green _________ in hot water.",
    "sentencePt": "Infusione uma xícara de chá verde perfumado em água quente.",
    "exampleEn": "Steep a cup of fragrant green Tea in hot water.",
    "examplePt": "Infusione uma xícara de chá verde perfumado em água quente.",
    "gapWord": "Tea",
    "question": "Como se diz 'Chá' em inglês?",
    "hint": "Bebida aromática preparada por infusão de folhas da Camellia sinensis.",
    "rationale": "'Tea' (tiː): Bebida aromática preparada por infusão de folhas da Camellia sinensis.",
    "options": [
      {
        "id": "A",
        "text": "DRINKrink",
        "isCorrect": false,
        "rationale": "'DRINKrink' significa 'Beber / Bebida', não 'Chá'."
      },
      {
        "id": "B",
        "text": "SOUPoup",
        "isCorrect": false,
        "rationale": "'SOUPoup' significa 'Sopa', não 'Chá'."
      },
      {
        "id": "C",
        "text": "Tea",
        "isCorrect": true,
        "rationale": "'Tea' é a tradução correta para 'Chá'."
      },
      {
        "id": "D",
        "text": "RICEice",
        "isCorrect": false,
        "rationale": "'RICEice' significa 'Arroz', não 'Chá'."
      }
    ]
  },
  {
    "id": "sql-gf-f-24",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Juice",
    "wordPt": "Suco Natural",
    "phonetic": "dʒuːs",
    "sentence": "Squeeze fresh orange _________ for breakfast every morning.",
    "sentencePt": "Esprema suco de laranja fresco no café da manhã todas as manhãs.",
    "exampleEn": "Squeeze fresh orange Juice for breakfast every morning.",
    "examplePt": "Esprema suco de laranja fresco no café da manhã todas as manhãs.",
    "gapWord": "Juice",
    "question": "Como se diz 'Suco Natural' em inglês?",
    "hint": "Bebida líquida extraída por prensagem de frutas frescas.",
    "rationale": "'Juice' (dʒuːs): Bebida líquida extraída por prensagem de frutas frescas.",
    "options": [
      {
        "id": "A",
        "text": "MEALeal",
        "isCorrect": false,
        "rationale": "'MEALeal' significa 'Refeição', não 'Suco Natural'."
      },
      {
        "id": "B",
        "text": "APPLEpple",
        "isCorrect": false,
        "rationale": "'APPLEpple' significa 'Maçã', não 'Suco Natural'."
      },
      {
        "id": "C",
        "text": "TOWNown",
        "isCorrect": false,
        "rationale": "'TOWNown' significa 'Cidade Pequena / Vila', não 'Suco Natural'."
      },
      {
        "id": "D",
        "text": "Juice",
        "isCorrect": true,
        "rationale": "'Juice' é a tradução correta para 'Suco Natural'."
      }
    ]
  },
  {
    "id": "sql-gf-f-25",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Water",
    "wordPt": "Água Potável",
    "phonetic": "ˈwɔː.tər",
    "sentence": "Drink plenty of clean filtered drinking _________ daily.",
    "sentencePt": "Beba bastante água potável limpa e filtrada diariamente.",
    "exampleEn": "Drink plenty of clean filtered drinking Water daily.",
    "examplePt": "Beba bastante água potável limpa e filtrada diariamente.",
    "gapWord": "Water",
    "question": "Como se diz 'Água Potável' em inglês?",
    "hint": "Líquido vital incolor e inodoro essencial para hidratação.",
    "rationale": "'Water' (ˈwɔː.tər): Líquido vital incolor e inodoro essencial para hidratação.",
    "options": [
      {
        "id": "A",
        "text": "Water",
        "isCorrect": true,
        "rationale": "'Water' é a tradução correta para 'Água Potável'."
      },
      {
        "id": "B",
        "text": "BITEite",
        "isCorrect": false,
        "rationale": "'BITEite' significa 'Mordida / Bocado', não 'Água Potável'."
      },
      {
        "id": "C",
        "text": "SOUPoup",
        "isCorrect": false,
        "rationale": "'SOUPoup' significa 'Sopa', não 'Água Potável'."
      },
      {
        "id": "D",
        "text": "PATHath",
        "isCorrect": false,
        "rationale": "'PATHath' significa 'Trilha / Caminho', não 'Água Potável'."
      }
    ]
  },
  {
    "id": "sql-gf-f-26",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Fruit",
    "wordPt": "Fruta",
    "phonetic": "fruːt",
    "sentence": "Fresh seasonal _________ makes a nutritious afternoon snack.",
    "sentencePt": "Fruta fresca da estação faz um lanche da tarde nutritivo.",
    "exampleEn": "Fresh seasonal Fruit makes a nutritious afternoon snack.",
    "examplePt": "Fruta fresca da estação faz um lanche da tarde nutritivo.",
    "gapWord": "Fruit",
    "question": "Como se diz 'Fruta' em inglês?",
    "hint": "Estrutura carnosa comestível que contém sementes de plantas.",
    "rationale": "'Fruit' (fruːt): Estrutura carnosa comestível que contém sementes de plantas.",
    "options": [
      {
        "id": "A",
        "text": "KNIFEnife",
        "isCorrect": false,
        "rationale": "'KNIFEnife' significa 'Faca', não 'Fruta'."
      },
      {
        "id": "B",
        "text": "Fruit",
        "isCorrect": true,
        "rationale": "'Fruit' é a tradução correta para 'Fruta'."
      },
      {
        "id": "C",
        "text": "PATHath",
        "isCorrect": false,
        "rationale": "'PATHath' significa 'Trilha / Caminho', não 'Fruta'."
      },
      {
        "id": "D",
        "text": "SPOONpoon",
        "isCorrect": false,
        "rationale": "'SPOONpoon' significa 'Colher', não 'Fruta'."
      }
    ]
  },
  {
    "id": "sql-gf-f-27",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Apple",
    "wordPt": "Maçã",
    "phonetic": "ˈæp.əl",
    "sentence": "A crisp red _________ is packed with vitamins and fiber.",
    "sentencePt": "Uma maçã vermelha crocante é rica em vitaminas e fibras.",
    "exampleEn": "A crisp red Apple is packed with vitamins and fiber.",
    "examplePt": "Uma maçã vermelha crocante é rica em vitaminas e fibras.",
    "gapWord": "Apple",
    "question": "Como se diz 'Maçã' em inglês?",
    "hint": "Fruto de polpa doce e casca vermelha ou verde.",
    "rationale": "'Apple' (ˈæp.əl): Fruto de polpa doce e casca vermelha ou verde.",
    "options": [
      {
        "id": "A",
        "text": "BITEite",
        "isCorrect": false,
        "rationale": "'BITEite' significa 'Mordida / Bocado', não 'Maçã'."
      },
      {
        "id": "B",
        "text": "BANANAanana",
        "isCorrect": false,
        "rationale": "'BANANAanana' significa 'Banana', não 'Maçã'."
      },
      {
        "id": "C",
        "text": "Apple",
        "isCorrect": true,
        "rationale": "'Apple' é a tradução correta para 'Maçã'."
      },
      {
        "id": "D",
        "text": "ROADoad",
        "isCorrect": false,
        "rationale": "'ROADoad' significa 'Estrada / Rodovia', não 'Maçã'."
      }
    ]
  },
  {
    "id": "sql-gf-f-28",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Banana",
    "wordPt": "Banana",
    "phonetic": "bəˈnæn.ə",
    "sentence": "Peel a ripe yellow _________ rich in dietary potassium.",
    "sentencePt": "Descasque uma banana amarela madura rica em potássio dietético.",
    "exampleEn": "Peel a ripe yellow Banana rich in dietary potassium.",
    "examplePt": "Descasque uma banana amarela madura rica em potássio dietético.",
    "gapWord": "Banana",
    "question": "Como se diz 'Banana' em inglês?",
    "hint": "Fruto tropical alongado de polpa macia e casca amarela.",
    "rationale": "'Banana' (bəˈnæn.ə): Fruto tropical alongado de polpa macia e casca amarela.",
    "options": [
      {
        "id": "A",
        "text": "SNACKnack",
        "isCorrect": false,
        "rationale": "'SNACKnack' significa 'Lanche Rápido', não 'Banana'."
      },
      {
        "id": "B",
        "text": "EGGgg",
        "isCorrect": false,
        "rationale": "'EGGgg' significa 'Ovo', não 'Banana'."
      },
      {
        "id": "C",
        "text": "CITYity",
        "isCorrect": false,
        "rationale": "'CITYity' significa 'Cidade / Metrópole', não 'Banana'."
      },
      {
        "id": "D",
        "text": "Banana",
        "isCorrect": true,
        "rationale": "'Banana' é a tradução correta para 'Banana'."
      }
    ]
  },
  {
    "id": "sql-gf-f-29",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Pear",
    "wordPt": "Pêra",
    "phonetic": "pɛər",
    "sentence": "A juicy sweet _________ softens as it matures.",
    "sentencePt": "Uma pêra suculenta e doce amolece à medida que amadurece.",
    "exampleEn": "A juicy sweet Pear softens as it matures.",
    "examplePt": "Uma pêra suculenta e doce amolece à medida que amadurece.",
    "gapWord": "Pear",
    "question": "Como se diz 'Pêra' em inglês?",
    "hint": "Fruto de polpa granulada e formato característico piriforme.",
    "rationale": "'Pear' (pɛər): Fruto de polpa granulada e formato característico piriforme.",
    "options": [
      {
        "id": "A",
        "text": "Pear",
        "isCorrect": true,
        "rationale": "'Pear' é a tradução correta para 'Pêra'."
      },
      {
        "id": "B",
        "text": "DRINKrink",
        "isCorrect": false,
        "rationale": "'DRINKrink' significa 'Beber / Bebida', não 'Pêra'."
      },
      {
        "id": "C",
        "text": "MILKilk",
        "isCorrect": false,
        "rationale": "'MILKilk' significa 'Leite', não 'Pêra'."
      },
      {
        "id": "D",
        "text": "FRUITruit",
        "isCorrect": false,
        "rationale": "'FRUITruit' significa 'Fruta', não 'Pêra'."
      }
    ]
  },
  {
    "id": "sql-gf-f-30",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Grape",
    "wordPt": "Uva",
    "phonetic": "ɡreɪp",
    "sentence": "Pop a seedless purple _________ into your mouth.",
    "sentencePt": "Coloque uma uva roxa sem sementes na boca.",
    "exampleEn": "Pop a seedless purple Grape into your mouth.",
    "examplePt": "Coloque uma uva roxa sem sementes na boca.",
    "gapWord": "Grape",
    "question": "Como se diz 'Uva' em inglês?",
    "hint": "Baga pequena redonda que cresce em cachos na videira.",
    "rationale": "'Grape' (ɡreɪp): Baga pequena redonda que cresce em cachos na videira.",
    "options": [
      {
        "id": "A",
        "text": "FOODood",
        "isCorrect": false,
        "rationale": "'FOODood' significa 'Comida / Alimento', não 'Uva'."
      },
      {
        "id": "B",
        "text": "Grape",
        "isCorrect": true,
        "rationale": "'Grape' é a tradução correta para 'Uva'."
      },
      {
        "id": "C",
        "text": "TOWNown",
        "isCorrect": false,
        "rationale": "'TOWNown' significa 'Cidade Pequena / Vila', não 'Uva'."
      },
      {
        "id": "D",
        "text": "LAKEake",
        "isCorrect": false,
        "rationale": "'LAKEake' significa 'Lago', não 'Uva'."
      }
    ]
  },
  {
    "id": "sql-gf-f-31",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Lemon",
    "wordPt": "Limão",
    "phonetic": "ˈlɛm.ən",
    "sentence": "Squeeze tangy sour _________ juice over the salad.",
    "sentencePt": "Esprema suco azedo de limão sobre a salada.",
    "exampleEn": "Squeeze tangy sour Lemon juice over the salad.",
    "examplePt": "Esprema suco azedo de limão sobre a salada.",
    "gapWord": "Lemon",
    "question": "Como se diz 'Limão' em inglês?",
    "hint": "Fruto cítrico amarelo com suco ácido rico em vitamina C.",
    "rationale": "'Lemon' (ˈlɛm.ən): Fruto cítrico amarelo com suco ácido rico em vitamina C.",
    "options": [
      {
        "id": "A",
        "text": "BAKEake",
        "isCorrect": false,
        "rationale": "'BAKEake' significa 'Assar no Forno', não 'Limão'."
      },
      {
        "id": "B",
        "text": "TASTEaste",
        "isCorrect": false,
        "rationale": "'TASTEaste' significa 'Gosto / Sabor', não 'Limão'."
      },
      {
        "id": "C",
        "text": "Lemon",
        "isCorrect": true,
        "rationale": "'Lemon' é a tradução correta para 'Limão'."
      },
      {
        "id": "D",
        "text": "MEATeat",
        "isCorrect": false,
        "rationale": "'MEATeat' significa 'Carne', não 'Limão'."
      }
    ]
  },
  {
    "id": "sql-gf-f-32",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Nut",
    "wordPt": "Noz / Castanha",
    "phonetic": "nʌt",
    "sentence": "Crunchy roasted _________ provide healthy omega fats.",
    "sentencePt": "Castanhas crocantes torradas fornecem gorduras ômega saudáveis.",
    "exampleEn": "Crunchy roasted Nut provide healthy omega fats.",
    "examplePt": "Castanhas crocantes torradas fornecem gorduras ômega saudáveis.",
    "gapWord": "Nut",
    "question": "Como se diz 'Noz / Castanha' em inglês?",
    "hint": "Fruto seco com casca lenhosa dura e semente comestível.",
    "rationale": "'Nut' (nʌt): Fruto seco com casca lenhosa dura e semente comestível.",
    "options": [
      {
        "id": "A",
        "text": "JUICEuice",
        "isCorrect": false,
        "rationale": "'JUICEuice' significa 'Suco Natural', não 'Noz / Castanha'."
      },
      {
        "id": "B",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Noz / Castanha'."
      },
      {
        "id": "C",
        "text": "BREADread",
        "isCorrect": false,
        "rationale": "'BREADread' significa 'Pão', não 'Noz / Castanha'."
      },
      {
        "id": "D",
        "text": "Nut",
        "isCorrect": true,
        "rationale": "'Nut' é a tradução correta para 'Noz / Castanha'."
      }
    ]
  },
  {
    "id": "sql-gf-f-33",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Bean",
    "wordPt": "Feijão",
    "phonetic": "biːn",
    "sentence": "Simmer black _________ in a seasoned broth for dinner.",
    "sentencePt": "Cozinhe feijão preto em caldo temperado para o jantar.",
    "exampleEn": "Simmer black Bean in a seasoned broth for dinner.",
    "examplePt": "Cozinhe feijão preto em caldo temperado para o jantar.",
    "gapWord": "Bean",
    "question": "Como se diz 'Feijão' em inglês?",
    "hint": "Leguminosa em grão rica em proteínas vegetais.",
    "rationale": "'Bean' (biːn): Leguminosa em grão rica em proteínas vegetais.",
    "options": [
      {
        "id": "A",
        "text": "Bean",
        "isCorrect": true,
        "rationale": "'Bean' é a tradução correta para 'Feijão'."
      },
      {
        "id": "B",
        "text": "EGGgg",
        "isCorrect": false,
        "rationale": "'EGGgg' significa 'Ovo', não 'Feijão'."
      },
      {
        "id": "C",
        "text": "GLASSlass",
        "isCorrect": false,
        "rationale": "'GLASSlass' significa 'Copo', não 'Feijão'."
      },
      {
        "id": "D",
        "text": "CITYity",
        "isCorrect": false,
        "rationale": "'CITYity' significa 'Cidade / Metrópole', não 'Feijão'."
      }
    ]
  },
  {
    "id": "sql-gf-f-34",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Dish",
    "wordPt": "Prato / Refeição Pronta",
    "phonetic": "dɪʃ",
    "sentence": "Feijoada is a signature traditional Brazilian culinary _________.",
    "sentencePt": "Feijoada é um prato culinário tradicional característico brasileiro.",
    "exampleEn": "Feijoada is a signature traditional Brazilian culinary Dish.",
    "examplePt": "Feijoada é um prato culinário tradicional característico brasileiro.",
    "gapWord": "Dish",
    "question": "Como se diz 'Prato / Refeição Pronta' em inglês?",
    "hint": "Preparação gastronômica servida como refeição.",
    "rationale": "'Dish' (dɪʃ): Preparação gastronômica servida como refeição.",
    "options": [
      {
        "id": "A",
        "text": "RICEice",
        "isCorrect": false,
        "rationale": "'RICEice' significa 'Arroz', não 'Prato / Refeição Pronta'."
      },
      {
        "id": "B",
        "text": "Dish",
        "isCorrect": true,
        "rationale": "'Dish' é a tradução correta para 'Prato / Refeição Pronta'."
      },
      {
        "id": "C",
        "text": "EGGgg",
        "isCorrect": false,
        "rationale": "'EGGgg' significa 'Ovo', não 'Prato / Refeição Pronta'."
      },
      {
        "id": "D",
        "text": "CUPup",
        "isCorrect": false,
        "rationale": "'CUPup' significa 'Xícara', não 'Prato / Refeição Pronta'."
      }
    ]
  },
  {
    "id": "sql-gf-f-35",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Bowl",
    "wordPt": "Tigela / Cumbuca",
    "phonetic": "boʊl",
    "sentence": "Pour hot soup into a ceramic ceramic _________.",
    "sentencePt": "Despeje a sopa quente em uma tigela de cerâmica.",
    "exampleEn": "Pour hot soup into a ceramic ceramic Bowl.",
    "examplePt": "Despeje a sopa quente em uma tigela de cerâmica.",
    "gapWord": "Bowl",
    "question": "Como se diz 'Tigela / Cumbuca' em inglês?",
    "hint": "Recipiente fundo arredondado para servir sopas e cereais.",
    "rationale": "'Bowl' (boʊl): Recipiente fundo arredondado para servir sopas e cereais.",
    "options": [
      {
        "id": "A",
        "text": "FOODood",
        "isCorrect": false,
        "rationale": "'FOODood' significa 'Comida / Alimento', não 'Tigela / Cumbuca'."
      },
      {
        "id": "B",
        "text": "SPOONpoon",
        "isCorrect": false,
        "rationale": "'SPOONpoon' significa 'Colher', não 'Tigela / Cumbuca'."
      },
      {
        "id": "C",
        "text": "Bowl",
        "isCorrect": true,
        "rationale": "'Bowl' é a tradução correta para 'Tigela / Cumbuca'."
      },
      {
        "id": "D",
        "text": "PEARear",
        "isCorrect": false,
        "rationale": "'PEARear' significa 'Pêra', não 'Tigela / Cumbuca'."
      }
    ]
  },
  {
    "id": "sql-gf-f-36",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Plate",
    "wordPt": "Prato Raso",
    "phonetic": "pleɪt",
    "sentence": "Arrange the grilled chicken neatly on the porcelain _________.",
    "sentencePt": "Organize o frango grelhado cuidadosamente no prato de porcelana.",
    "exampleEn": "Arrange the grilled chicken neatly on the porcelain Plate.",
    "examplePt": "Organize o frango grelhado cuidadosamente no prato de porcelana.",
    "gapWord": "Plate",
    "question": "Como se diz 'Prato Raso' em inglês?",
    "hint": "Utensílio raso circular onde a comida sólida é servida.",
    "rationale": "'Plate' (pleɪt): Utensílio raso circular onde a comida sólida é servida.",
    "options": [
      {
        "id": "A",
        "text": "COOKook",
        "isCorrect": false,
        "rationale": "'COOKook' significa 'Cozinhar', não 'Prato Raso'."
      },
      {
        "id": "B",
        "text": "FISHish",
        "isCorrect": false,
        "rationale": "'FISHish' significa 'Peixe Culinário', não 'Prato Raso'."
      },
      {
        "id": "C",
        "text": "SALTalt",
        "isCorrect": false,
        "rationale": "'SALTalt' significa 'Sal de Cozinha', não 'Prato Raso'."
      },
      {
        "id": "D",
        "text": "Plate",
        "isCorrect": true,
        "rationale": "'Plate' é a tradução correta para 'Prato Raso'."
      }
    ]
  },
  {
    "id": "sql-gf-f-37",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Fork",
    "wordPt": "Garfo",
    "phonetic": "fɔːrk",
    "sentence": "Use a stainless steel table _________ to twirl the pasta.",
    "sentencePt": "Use um garfo de mesa de aço inoxidável para enrolar a massa.",
    "exampleEn": "Use a stainless steel table Fork to twirl the pasta.",
    "examplePt": "Use um garfo de mesa de aço inoxidável para enrolar a massa.",
    "gapWord": "Fork",
    "question": "Como se diz 'Garfo' em inglês?",
    "hint": "Talher dentado para espetar e levar a comida à boca.",
    "rationale": "'Fork' (fɔːrk): Talher dentado para espetar e levar a comida à boca.",
    "options": [
      {
        "id": "A",
        "text": "Fork",
        "isCorrect": true,
        "rationale": "'Fork' é a tradução correta para 'Garfo'."
      },
      {
        "id": "B",
        "text": "CAKEake",
        "isCorrect": false,
        "rationale": "'CAKEake' significa 'Bolo', não 'Garfo'."
      },
      {
        "id": "C",
        "text": "BOWLowl",
        "isCorrect": false,
        "rationale": "'BOWLowl' significa 'Tigela / Cumbuca', não 'Garfo'."
      },
      {
        "id": "D",
        "text": "SWEETweet",
        "isCorrect": false,
        "rationale": "'SWEETweet' significa 'Doce', não 'Garfo'."
      }
    ]
  },
  {
    "id": "sql-gf-f-38",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Spoon",
    "wordPt": "Colher",
    "phonetic": "spuːn",
    "sentence": "Stir your hot coffee with a small dessert _________.",
    "sentencePt": "Mexa seu café quente com uma pequena colher de sobremesa.",
    "exampleEn": "Stir your hot coffee with a small dessert Spoon.",
    "examplePt": "Mexa seu café quente com uma pequena colher de sobremesa.",
    "gapWord": "Spoon",
    "question": "Como se diz 'Colher' em inglês?",
    "hint": "Talher de concha rasa para líquidos e alimentos pastosos.",
    "rationale": "'Spoon' (spuːn): Talher de concha rasa para líquidos e alimentos pastosos.",
    "options": [
      {
        "id": "A",
        "text": "DRINKrink",
        "isCorrect": false,
        "rationale": "'DRINKrink' significa 'Beber / Bebida', não 'Colher'."
      },
      {
        "id": "B",
        "text": "Spoon",
        "isCorrect": true,
        "rationale": "'Spoon' é a tradução correta para 'Colher'."
      },
      {
        "id": "C",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Colher'."
      },
      {
        "id": "D",
        "text": "PATHath",
        "isCorrect": false,
        "rationale": "'PATHath' significa 'Trilha / Caminho', não 'Colher'."
      }
    ]
  },
  {
    "id": "sql-gf-f-39",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Knife",
    "wordPt": "Faca",
    "phonetic": "naɪf",
    "sentence": "Slice the crusty bread with a sharp serrated _________.",
    "sentencePt": "Fatie o pão crocante com uma faca afiada de serra.",
    "exampleEn": "Slice the crusty bread with a sharp serrated Knife.",
    "examplePt": "Fatie o pão crocante com uma faca afiada de serra.",
    "gapWord": "Knife",
    "question": "Como se diz 'Faca' em inglês?",
    "hint": "Instrumento de corte com lâmina afiada para fatiar comida.",
    "rationale": "'Knife' (naɪf): Instrumento de corte com lâmina afiada para fatiar comida.",
    "options": [
      {
        "id": "A",
        "text": "BOWLowl",
        "isCorrect": false,
        "rationale": "'BOWLowl' significa 'Tigela / Cumbuca', não 'Faca'."
      },
      {
        "id": "B",
        "text": "EGGgg",
        "isCorrect": false,
        "rationale": "'EGGgg' significa 'Ovo', não 'Faca'."
      },
      {
        "id": "C",
        "text": "Knife",
        "isCorrect": true,
        "rationale": "'Knife' é a tradução correta para 'Faca'."
      },
      {
        "id": "D",
        "text": "FRUITruit",
        "isCorrect": false,
        "rationale": "'FRUITruit' significa 'Fruta', não 'Faca'."
      }
    ]
  },
  {
    "id": "sql-gf-f-40",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Cup",
    "wordPt": "Xícara",
    "phonetic": "kʌp",
    "sentence": "Pour piping hot espresso into a small ceramic _________.",
    "sentencePt": "Despeje café expresso bem quente em uma pequena xícara de cerâmica.",
    "exampleEn": "Pour piping hot espresso into a small ceramic Cup.",
    "examplePt": "Despeje café expresso bem quente em uma pequena xícara de cerâmica.",
    "gapWord": "Cup",
    "question": "Como se diz 'Xícara' em inglês?",
    "hint": "Pequeno recipiente com asa para servir bebidas quentes.",
    "rationale": "'Cup' (kʌp): Pequeno recipiente com asa para servir bebidas quentes.",
    "options": [
      {
        "id": "A",
        "text": "DISHish",
        "isCorrect": false,
        "rationale": "'DISHish' significa 'Prato / Refeição Pronta', não 'Xícara'."
      },
      {
        "id": "B",
        "text": "RICEice",
        "isCorrect": false,
        "rationale": "'RICEice' significa 'Arroz', não 'Xícara'."
      },
      {
        "id": "C",
        "text": "SPOONpoon",
        "isCorrect": false,
        "rationale": "'SPOONpoon' significa 'Colher', não 'Xícara'."
      },
      {
        "id": "D",
        "text": "Cup",
        "isCorrect": true,
        "rationale": "'Cup' é a tradução correta para 'Xícara'."
      }
    ]
  },
  {
    "id": "sql-gf-f-41",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Glass",
    "wordPt": "Copo",
    "phonetic": "ɡlæs",
    "sentence": "Fill a tall beverage _________ with ice and lemonade.",
    "sentencePt": "Encha um copo alto de bebida com gelo e limonada.",
    "exampleEn": "Fill a tall beverage Glass with ice and lemonade.",
    "examplePt": "Encha um copo alto de bebida com gelo e limonada.",
    "gapWord": "Glass",
    "question": "Como se diz 'Copo' em inglês?",
    "hint": "Recipiente cilíndrico de vidro para servir água e bebidas frias.",
    "rationale": "'Glass' (ɡlæs): Recipiente cilíndrico de vidro para servir água e bebidas frias.",
    "options": [
      {
        "id": "A",
        "text": "Glass",
        "isCorrect": true,
        "rationale": "'Glass' é a tradução correta para 'Copo'."
      },
      {
        "id": "B",
        "text": "PEARear",
        "isCorrect": false,
        "rationale": "'PEARear' significa 'Pêra', não 'Copo'."
      },
      {
        "id": "C",
        "text": "BEANean",
        "isCorrect": false,
        "rationale": "'BEANean' significa 'Feijão', não 'Copo'."
      },
      {
        "id": "D",
        "text": "SNACKnack",
        "isCorrect": false,
        "rationale": "'SNACKnack' significa 'Lanche Rápido', não 'Copo'."
      }
    ]
  },
  {
    "id": "sql-gf-f-42",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Cook",
    "wordPt": "Cozinhar",
    "phonetic": "kʊk",
    "sentence": "Learn how to _________ traditional recipes from scratch.",
    "sentencePt": "Aprenda como cozinhar receitas tradicionais do zero.",
    "exampleEn": "Learn how to Cook traditional recipes from scratch.",
    "examplePt": "Aprenda como cozinhar receitas tradicionais do zero.",
    "gapWord": "Cook",
    "question": "Como se diz 'Cozinhar' em inglês?",
    "hint": "Ato de preparar alimentos por meio do calor.",
    "rationale": "'Cook' (kʊk): Ato de preparar alimentos por meio do calor.",
    "options": [
      {
        "id": "A",
        "text": "FRUITruit",
        "isCorrect": false,
        "rationale": "'FRUITruit' significa 'Fruta', não 'Cozinhar'."
      },
      {
        "id": "B",
        "text": "Cook",
        "isCorrect": true,
        "rationale": "'Cook' é a tradução correta para 'Cozinhar'."
      },
      {
        "id": "C",
        "text": "SWEETweet",
        "isCorrect": false,
        "rationale": "'SWEETweet' significa 'Doce', não 'Cozinhar'."
      },
      {
        "id": "D",
        "text": "GRAPErape",
        "isCorrect": false,
        "rationale": "'GRAPErape' significa 'Uva', não 'Cozinhar'."
      }
    ]
  },
  {
    "id": "sql-gf-f-43",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Bake",
    "wordPt": "Assar no Forno",
    "phonetic": "beɪk",
    "sentence": "We will _________ fresh sourdough bread in the oven.",
    "sentencePt": "Nós vamos assar pão fresco de fermentação natural no forno.",
    "exampleEn": "We will Bake fresh sourdough bread in the oven.",
    "examplePt": "Nós vamos assar pão fresco de fermentação natural no forno.",
    "gapWord": "Bake",
    "question": "Como se diz 'Assar no Forno' em inglês?",
    "hint": "Cozinhar no calor seco e fechado do forno.",
    "rationale": "'Bake' (beɪk): Cozinhar no calor seco e fechado do forno.",
    "options": [
      {
        "id": "A",
        "text": "EATat",
        "isCorrect": false,
        "rationale": "'EATat' significa 'Comer', não 'Assar no Forno'."
      },
      {
        "id": "B",
        "text": "SALTalt",
        "isCorrect": false,
        "rationale": "'SALTalt' significa 'Sal de Cozinha', não 'Assar no Forno'."
      },
      {
        "id": "C",
        "text": "Bake",
        "isCorrect": true,
        "rationale": "'Bake' é a tradução correta para 'Assar no Forno'."
      },
      {
        "id": "D",
        "text": "SWEETweet",
        "isCorrect": false,
        "rationale": "'SWEETweet' significa 'Doce', não 'Assar no Forno'."
      }
    ]
  },
  {
    "id": "sql-gf-f-44",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Eat",
    "wordPt": "Comer",
    "phonetic": "iːt",
    "sentence": "Sit with your family and _________ a wholesome meal.",
    "sentencePt": "Sente-se com sua família e coma uma refeição nutritiva.",
    "exampleEn": "Sit with your family and Eat a wholesome meal.",
    "examplePt": "Sente-se com sua família e coma uma refeição nutritiva.",
    "gapWord": "Eat",
    "question": "Como se diz 'Comer' em inglês?",
    "hint": "Ato de mastigar e engolir alimentos para nutrição.",
    "rationale": "'Eat' (iːt): Ato de mastigar e engolir alimentos para nutrição.",
    "options": [
      {
        "id": "A",
        "text": "PATHath",
        "isCorrect": false,
        "rationale": "'PATHath' significa 'Trilha / Caminho', não 'Comer'."
      },
      {
        "id": "B",
        "text": "CAKEake",
        "isCorrect": false,
        "rationale": "'CAKEake' significa 'Bolo', não 'Comer'."
      },
      {
        "id": "C",
        "text": "HILLill",
        "isCorrect": false,
        "rationale": "'HILLill' significa 'Colina / Morro', não 'Comer'."
      },
      {
        "id": "D",
        "text": "Eat",
        "isCorrect": true,
        "rationale": "'Eat' é a tradução correta para 'Comer'."
      }
    ]
  },
  {
    "id": "sql-gf-f-45",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Drink",
    "wordPt": "Beber / Bebida",
    "phonetic": "drɪŋk",
    "sentence": "Remember to _________ plenty of fluids on hot days.",
    "sentencePt": "Lembre-se de beber bastante líquido em dias quentes.",
    "exampleEn": "Remember to Drink plenty of fluids on hot days.",
    "examplePt": "Lembre-se de beber bastante líquido em dias quentes.",
    "gapWord": "Drink",
    "question": "Como se diz 'Beber / Bebida' em inglês?",
    "hint": "Ingerir líquidos pela boca para matar a sede.",
    "rationale": "'Drink' (drɪŋk): Ingerir líquidos pela boca para matar a sede.",
    "options": [
      {
        "id": "A",
        "text": "Drink",
        "isCorrect": true,
        "rationale": "'Drink' é a tradução correta para 'Beber / Bebida'."
      },
      {
        "id": "B",
        "text": "SALTalt",
        "isCorrect": false,
        "rationale": "'SALTalt' significa 'Sal de Cozinha', não 'Beber / Bebida'."
      },
      {
        "id": "C",
        "text": "BAKEake",
        "isCorrect": false,
        "rationale": "'BAKEake' significa 'Assar no Forno', não 'Beber / Bebida'."
      },
      {
        "id": "D",
        "text": "MAPap",
        "isCorrect": false,
        "rationale": "'MAPap' significa 'Mapa Geográfico', não 'Beber / Bebida'."
      }
    ]
  },
  {
    "id": "sql-gf-f-46",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Meal",
    "wordPt": "Refeição",
    "phonetic": "miːl",
    "sentence": "Dinner is the main evening _________ shared together.",
    "sentencePt": "O jantar é a principal refeição da noite compartilhada juntos.",
    "exampleEn": "Dinner is the main evening Meal shared together.",
    "examplePt": "O jantar é a principal refeição da noite compartilhada juntos.",
    "gapWord": "Meal",
    "question": "Como se diz 'Refeição' em inglês?",
    "hint": "Momento específico do dia em que se consome alimento.",
    "rationale": "'Meal' (miːl): Momento específico do dia em que se consome alimento.",
    "options": [
      {
        "id": "A",
        "text": "MILKilk",
        "isCorrect": false,
        "rationale": "'MILKilk' significa 'Leite', não 'Refeição'."
      },
      {
        "id": "B",
        "text": "Meal",
        "isCorrect": true,
        "rationale": "'Meal' é a tradução correta para 'Refeição'."
      },
      {
        "id": "C",
        "text": "ROADoad",
        "isCorrect": false,
        "rationale": "'ROADoad' significa 'Estrada / Rodovia', não 'Refeição'."
      },
      {
        "id": "D",
        "text": "FISHish",
        "isCorrect": false,
        "rationale": "'FISHish' significa 'Peixe Culinário', não 'Refeição'."
      }
    ]
  },
  {
    "id": "sql-gf-f-47",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Snack",
    "wordPt": "Lanche Rápido",
    "phonetic": "snæk",
    "sentence": "Grab a quick midday _________ of dried fruits and nuts.",
    "sentencePt": "Pegue um lanche rápido do meio-dia de frutas secas e castanhas.",
    "exampleEn": "Grab a quick midday Snack of dried fruits and nuts.",
    "examplePt": "Pegue um lanche rápido do meio-dia de frutas secas e castanhas.",
    "gapWord": "Snack",
    "question": "Como se diz 'Lanche Rápido' em inglês?",
    "hint": "Pequena porção de alimento consumida entre refeições principais.",
    "rationale": "'Snack' (snæk): Pequena porção de alimento consumida entre refeições principais.",
    "options": [
      {
        "id": "A",
        "text": "MEATeat",
        "isCorrect": false,
        "rationale": "'MEATeat' significa 'Carne', não 'Lanche Rápido'."
      },
      {
        "id": "B",
        "text": "APPLEpple",
        "isCorrect": false,
        "rationale": "'APPLEpple' significa 'Maçã', não 'Lanche Rápido'."
      },
      {
        "id": "C",
        "text": "Snack",
        "isCorrect": true,
        "rationale": "'Snack' é a tradução correta para 'Lanche Rápido'."
      },
      {
        "id": "D",
        "text": "SEAea",
        "isCorrect": false,
        "rationale": "'SEAea' significa 'Mar', não 'Lanche Rápido'."
      }
    ]
  },
  {
    "id": "sql-gf-f-48",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Bite",
    "wordPt": "Mordida / Bocado",
    "phonetic": "baɪt",
    "sentence": "Take a small delicious _________ of the warm chocolate cake.",
    "sentencePt": "Dê uma pequena e deliciosa mordida no bolo de chocolate quente.",
    "exampleEn": "Take a small delicious Bite of the warm chocolate cake.",
    "examplePt": "Dê uma pequena e deliciosa mordida no bolo de chocolate quente.",
    "gapWord": "Bite",
    "question": "Como se diz 'Mordida / Bocado' em inglês?",
    "hint": "Pedaço de comida tirado com os dentes de uma só vez.",
    "rationale": "'Bite' (baɪt): Pedaço de comida tirado com os dentes de uma só vez.",
    "options": [
      {
        "id": "A",
        "text": "HILLill",
        "isCorrect": false,
        "rationale": "'HILLill' significa 'Colina / Morro', não 'Mordida / Bocado'."
      },
      {
        "id": "B",
        "text": "CUPup",
        "isCorrect": false,
        "rationale": "'CUPup' significa 'Xícara', não 'Mordida / Bocado'."
      },
      {
        "id": "C",
        "text": "JUICEuice",
        "isCorrect": false,
        "rationale": "'JUICEuice' significa 'Suco Natural', não 'Mordida / Bocado'."
      },
      {
        "id": "D",
        "text": "Bite",
        "isCorrect": true,
        "rationale": "'Bite' é a tradução correta para 'Mordida / Bocado'."
      }
    ]
  },
  {
    "id": "sql-gf-f-49",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Taste",
    "wordPt": "Gosto / Sabor",
    "phonetic": "teɪst",
    "sentence": "The sauce has a rich, savory garlic _________.",
    "sentencePt": "O molho tem um sabor rico e saboroso de alho.",
    "exampleEn": "The sauce has a rich, savory garlic Taste.",
    "examplePt": "O molho tem um sabor rico e saboroso de alho.",
    "gapWord": "Taste",
    "question": "Como se diz 'Gosto / Sabor' em inglês?",
    "hint": "Sensação gustativa percebida pelas papilas da língua.",
    "rationale": "'Taste' (teɪst): Sensação gustativa percebida pelas papilas da língua.",
    "options": [
      {
        "id": "A",
        "text": "Taste",
        "isCorrect": true,
        "rationale": "'Taste' é a tradução correta para 'Gosto / Sabor'."
      },
      {
        "id": "B",
        "text": "KNIFEnife",
        "isCorrect": false,
        "rationale": "'KNIFEnife' significa 'Faca', não 'Gosto / Sabor'."
      },
      {
        "id": "C",
        "text": "GLASSlass",
        "isCorrect": false,
        "rationale": "'GLASSlass' significa 'Copo', não 'Gosto / Sabor'."
      },
      {
        "id": "D",
        "text": "SALTalt",
        "isCorrect": false,
        "rationale": "'SALTalt' significa 'Sal de Cozinha', não 'Gosto / Sabor'."
      }
    ]
  },
  {
    "id": "sql-gf-f-50",
    "topic": "geografia_comida",
    "difficulty": "facil",
    "wordEn": "Sweet",
    "wordPt": "Doce",
    "phonetic": "swiːt",
    "sentence": "Ripe strawberries have a delightfully natural _________ flavor.",
    "sentencePt": "Morangos maduros têm um sabor doce deliciosamente natural.",
    "exampleEn": "Ripe strawberries have a delightfully natural Sweet flavor.",
    "examplePt": "Morangos maduros têm um sabor doce deliciosamente natural.",
    "gapWord": "Sweet",
    "question": "Como se diz 'Doce' em inglês?",
    "hint": "Sabor agradável característico do açúcar e frutas maduras.",
    "rationale": "'Sweet' (swiːt): Sabor agradável característico do açúcar e frutas maduras.",
    "options": [
      {
        "id": "A",
        "text": "HILLill",
        "isCorrect": false,
        "rationale": "'HILLill' significa 'Colina / Morro', não 'Doce'."
      },
      {
        "id": "B",
        "text": "Sweet",
        "isCorrect": true,
        "rationale": "'Sweet' é a tradução correta para 'Doce'."
      },
      {
        "id": "C",
        "text": "JUICEuice",
        "isCorrect": false,
        "rationale": "'JUICEuice' significa 'Suco Natural', não 'Doce'."
      },
      {
        "id": "D",
        "text": "FOODood",
        "isCorrect": false,
        "rationale": "'FOODood' significa 'Comida / Alimento', não 'Doce'."
      }
    ]
  },
  {
    "id": "sql-gf-m-01",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Country",
    "wordPt": "País",
    "phonetic": "ˈkʌn.tri",
    "sentence": "Brazil is the largest sovereign _________ in South America.",
    "sentencePt": "O Brasil é o maior país soberano da América do Sul.",
    "exampleEn": "Brazil is the largest sovereign Country in South America.",
    "examplePt": "O Brasil é o maior país soberano da América do Sul.",
    "gapWord": "Country",
    "question": "Como se diz 'País' em inglês?",
    "hint": "Nação soberana com território delimitado e governo próprio.",
    "rationale": "'Country' (ˈkʌn.tri): Nação soberana com território delimitado e governo próprio.",
    "options": [
      {
        "id": "A",
        "text": "Country",
        "isCorrect": true,
        "rationale": "'Country' é a tradução correta para 'País'."
      },
      {
        "id": "B",
        "text": "BEEFeef",
        "isCorrect": false,
        "rationale": "'BEEFeef' significa 'Carne Bovina', não 'País'."
      },
      {
        "id": "C",
        "text": "BUTTERutter",
        "isCorrect": false,
        "rationale": "'BUTTERutter' significa 'Manteiga', não 'País'."
      },
      {
        "id": "D",
        "text": "VOLCANOolcano",
        "isCorrect": false,
        "rationale": "'VOLCANOolcano' significa 'Vulcão Geológico', não 'País'."
      }
    ]
  },
  {
    "id": "sql-gf-m-02",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Nation",
    "wordPt": "Nação",
    "phonetic": "ˈneɪ.ʃən",
    "sentence": "Citizens across the entire _________ celebrated the national holiday.",
    "sentencePt": "Cidadãos de toda a nação celebraram o feriado nacional.",
    "exampleEn": "Citizens across the entire Nation celebrated the national holiday.",
    "examplePt": "Cidadãos de toda a nação celebraram o feriado nacional.",
    "gapWord": "Nation",
    "question": "Como se diz 'Nação' em inglês?",
    "hint": "Comunidade histórica e cultural de um povo soberano.",
    "rationale": "'Nation' (ˈneɪ.ʃən): Comunidade histórica e cultural de um povo soberano.",
    "options": [
      {
        "id": "A",
        "text": "RECIPEecipe",
        "isCorrect": false,
        "rationale": "'RECIPEecipe' significa 'Receita Culinária', não 'Nação'."
      },
      {
        "id": "B",
        "text": "Nation",
        "isCorrect": true,
        "rationale": "'Nation' é a tradução correta para 'Nação'."
      },
      {
        "id": "C",
        "text": "REGIONegion",
        "isCorrect": false,
        "rationale": "'REGIONegion' significa 'Região Geográfica', não 'Nação'."
      },
      {
        "id": "D",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto Árido', não 'Nação'."
      }
    ]
  },
  {
    "id": "sql-gf-m-03",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "State",
    "wordPt": "Estado Federado",
    "phonetic": "steɪt",
    "sentence": "California is a prosperous Pacific coastal _________.",
    "sentencePt": "A Califórnia é um próspero estado litorâneo do Pacífico.",
    "exampleEn": "California is a prosperous Pacific coastal State.",
    "examplePt": "A Califórnia é um próspero estado litorâneo do Pacífico.",
    "gapWord": "State",
    "question": "Como se diz 'Estado Federado' em inglês?",
    "hint": "Divisão territorial e política autônoma de uma federação.",
    "rationale": "'State' (steɪt): Divisão territorial e política autônoma de uma federação.",
    "options": [
      {
        "id": "A",
        "text": "SALADalad",
        "isCorrect": false,
        "rationale": "'SALADalad' significa 'Salada', não 'Estado Federado'."
      },
      {
        "id": "B",
        "text": "LONGITUDEongitude",
        "isCorrect": false,
        "rationale": "'LONGITUDEongitude' significa 'Longitude', não 'Estado Federado'."
      },
      {
        "id": "C",
        "text": "State",
        "isCorrect": true,
        "rationale": "'State' é a tradução correta para 'Estado Federado'."
      },
      {
        "id": "D",
        "text": "DINNERinner",
        "isCorrect": false,
        "rationale": "'DINNERinner' significa 'Jantar', não 'Estado Federado'."
      }
    ]
  },
  {
    "id": "sql-gf-m-04",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Capital",
    "wordPt": "Capital / Cidade Capital",
    "phonetic": "ˈkæp.ə.t̬əl",
    "sentence": "Brasília is the planned federal _________ of Brazil.",
    "sentencePt": "Brasília é a capital federal planejada do Brasil.",
    "exampleEn": "Brasília is the planned federal Capital of Brazil.",
    "examplePt": "Brasília é a capital federal planejada do Brasil.",
    "gapWord": "Capital",
    "question": "Como se diz 'Capital / Cidade Capital' em inglês?",
    "hint": "Cidade onde reside a sede do governo de um país ou estado.",
    "rationale": "'Capital' (ˈkæp.ə.t̬əl): Cidade onde reside a sede do governo de um país ou estado.",
    "options": [
      {
        "id": "A",
        "text": "BORDERorder",
        "isCorrect": false,
        "rationale": "'BORDERorder' significa 'Fronteira Internacional', não 'Capital / Cidade Capital'."
      },
      {
        "id": "B",
        "text": "CANYONanyon",
        "isCorrect": false,
        "rationale": "'CANYONanyon' significa 'Cânion / Desfiladeiro', não 'Capital / Cidade Capital'."
      },
      {
        "id": "C",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto Árido', não 'Capital / Cidade Capital'."
      },
      {
        "id": "D",
        "text": "Capital",
        "isCorrect": true,
        "rationale": "'Capital' é a tradução correta para 'Capital / Cidade Capital'."
      }
    ]
  },
  {
    "id": "sql-gf-m-05",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Border",
    "wordPt": "Fronteira Internacional",
    "phonetic": "ˈbɔːr.dər",
    "sentence": "Tourists presented passports at the national frontier _________.",
    "sentencePt": "Turistas apresentaram passaportes na fronteira nacional.",
    "exampleEn": "Tourists presented passports at the national frontier Border.",
    "examplePt": "Turistas apresentaram passaportes na fronteira nacional.",
    "gapWord": "Border",
    "question": "Como se diz 'Fronteira Internacional' em inglês?",
    "hint": "Linha divisória política que separa dois países ou territórios.",
    "rationale": "'Border' (ˈbɔːr.dər): Linha divisória política que separa dois países ou territórios.",
    "options": [
      {
        "id": "A",
        "text": "Border",
        "isCorrect": true,
        "rationale": "'Border' é a tradução correta para 'Fronteira Internacional'."
      },
      {
        "id": "B",
        "text": "DESSERTessert",
        "isCorrect": false,
        "rationale": "'DESSERTessert' significa 'Sobremesa', não 'Fronteira Internacional'."
      },
      {
        "id": "C",
        "text": "EQUATORquator",
        "isCorrect": false,
        "rationale": "'EQUATORquator' significa 'Equador Terrestre', não 'Fronteira Internacional'."
      },
      {
        "id": "D",
        "text": "BUTTERutter",
        "isCorrect": false,
        "rationale": "'BUTTERutter' significa 'Manteiga', não 'Fronteira Internacional'."
      }
    ]
  },
  {
    "id": "sql-gf-m-06",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Region",
    "wordPt": "Região Geográfica",
    "phonetic": "ˈriː.dʒən",
    "sentence": "The Amazonian _________ contains the world's densest rainforest.",
    "sentencePt": "A região amazônica contém a floresta tropical mais densa do mundo.",
    "exampleEn": "The Amazonian Region contains the world's densest rainforest.",
    "examplePt": "A região amazônica contém a floresta tropical mais densa do mundo.",
    "gapWord": "Region",
    "question": "Como se diz 'Região Geográfica' em inglês?",
    "hint": "Área geográfica com características ecológicas ou culturais afins.",
    "rationale": "'Region' (ˈriː.dʒən): Área geográfica com características ecológicas ou culturais afins.",
    "options": [
      {
        "id": "A",
        "text": "LUNCHunch",
        "isCorrect": false,
        "rationale": "'LUNCHunch' significa 'Almoço', não 'Região Geográfica'."
      },
      {
        "id": "B",
        "text": "Region",
        "isCorrect": true,
        "rationale": "'Region' é a tradução correta para 'Região Geográfica'."
      },
      {
        "id": "C",
        "text": "STATEtate",
        "isCorrect": false,
        "rationale": "'STATEtate' significa 'Estado Federado', não 'Região Geográfica'."
      },
      {
        "id": "D",
        "text": "CUISINEuisine",
        "isCorrect": false,
        "rationale": "'CUISINEuisine' significa 'Culinária / Gastronomia Típica', não 'Região Geográfica'."
      }
    ]
  },
  {
    "id": "sql-gf-m-07",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Island",
    "wordPt": "Ilha Geográfica",
    "phonetic": "ˈaɪ.lənd",
    "sentence": "Madagascar is a mega-diverse continental _________.",
    "sentencePt": "Madagascar é uma ilha continental megadiversa.",
    "exampleEn": "Madagascar is a mega-diverse continental Island.",
    "examplePt": "Madagascar é uma ilha continental megadiversa.",
    "gapWord": "Island",
    "question": "Como se diz 'Ilha Geográfica' em inglês?",
    "hint": "Território cercado de água por todos os lados.",
    "rationale": "'Island' (ˈaɪ.lənd): Território cercado de água por todos os lados.",
    "options": [
      {
        "id": "A",
        "text": "STATEtate",
        "isCorrect": false,
        "rationale": "'STATEtate' significa 'Estado Federado', não 'Ilha Geográfica'."
      },
      {
        "id": "B",
        "text": "PORKork",
        "isCorrect": false,
        "rationale": "'PORKork' significa 'Carne Suína', não 'Ilha Geográfica'."
      },
      {
        "id": "C",
        "text": "Island",
        "isCorrect": true,
        "rationale": "'Island' é a tradução correta para 'Ilha Geográfica'."
      },
      {
        "id": "D",
        "text": "DINNERinner",
        "isCorrect": false,
        "rationale": "'DINNERinner' significa 'Jantar', não 'Ilha Geográfica'."
      }
    ]
  },
  {
    "id": "sql-gf-m-08",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Mountain",
    "wordPt": "Montanha",
    "phonetic": "ˈmaʊn.tən",
    "sentence": "Mount Everest is the highest snowcapped _________ in the Himalayas.",
    "sentencePt": "O Monte Everest é a montanha coberta de neve mais alta no Himalaia.",
    "exampleEn": "Mount Everest is the highest snowcapped Mountain in the Himalayas.",
    "examplePt": "O Monte Everest é a montanha coberta de neve mais alta no Himalaia.",
    "gapWord": "Mountain",
    "question": "Como se diz 'Montanha' em inglês?",
    "hint": "Grande elevação natural do terreno com cume proeminente.",
    "rationale": "'Mountain' (ˈmaʊn.tən): Grande elevação natural do terreno com cume proeminente.",
    "options": [
      {
        "id": "A",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto Árido', não 'Montanha'."
      },
      {
        "id": "B",
        "text": "SAUCEauce",
        "isCorrect": false,
        "rationale": "'SAUCEauce' significa 'Molho', não 'Montanha'."
      },
      {
        "id": "C",
        "text": "VOLCANOolcano",
        "isCorrect": false,
        "rationale": "'VOLCANOolcano' significa 'Vulcão Geológico', não 'Montanha'."
      },
      {
        "id": "D",
        "text": "Mountain",
        "isCorrect": true,
        "rationale": "'Mountain' é a tradução correta para 'Montanha'."
      }
    ]
  },
  {
    "id": "sql-gf-m-09",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Valley",
    "wordPt": "Vale Geográfico",
    "phonetic": "ˈvæl.i",
    "sentence": "Napa is a famous Californian wine-producing agricultural _________.",
    "sentencePt": "Napa é um famoso vale agrícola produtor de vinhos na Califórnia.",
    "exampleEn": "Napa is a famous Californian wine-producing agricultural Valley.",
    "examplePt": "Napa é um famoso vale agrícola produtor de vinhos na Califórnia.",
    "gapWord": "Valley",
    "question": "Como se diz 'Vale Geográfico' em inglês?",
    "hint": "Região baixa e alongada entre montanhas ou colinas.",
    "rationale": "'Valley' (ˈvæl.i): Região baixa e alongada entre montanhas ou colinas.",
    "options": [
      {
        "id": "A",
        "text": "Valley",
        "isCorrect": true,
        "rationale": "'Valley' é a tradução correta para 'Vale Geográfico'."
      },
      {
        "id": "B",
        "text": "SAUCEauce",
        "isCorrect": false,
        "rationale": "'SAUCEauce' significa 'Molho', não 'Vale Geográfico'."
      },
      {
        "id": "C",
        "text": "MOUNTAINountain",
        "isCorrect": false,
        "rationale": "'MOUNTAINountain' significa 'Montanha', não 'Vale Geográfico'."
      },
      {
        "id": "D",
        "text": "BEVERAGEeverage",
        "isCorrect": false,
        "rationale": "'BEVERAGEeverage' significa 'Bebida', não 'Vale Geográfico'."
      }
    ]
  },
  {
    "id": "sql-gf-m-10",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Desert",
    "wordPt": "Deserto Árido",
    "phonetic": "ˈdɛz.ərt",
    "sentence": "The Sahara is the largest hot subtropical _________ on Earth.",
    "sentencePt": "O Saara é o maior deserto subtropical quente da Terra.",
    "exampleEn": "The Sahara is the largest hot subtropical Desert on Earth.",
    "examplePt": "O Saara é o maior deserto subtropical quente da Terra.",
    "gapWord": "Desert",
    "question": "Como se diz 'Deserto Árido' em inglês?",
    "hint": "Região com precipitação pluviométrica extremamente baixa.",
    "rationale": "'Desert' (ˈdɛz.ərt): Região com precipitação pluviométrica extremamente baixa.",
    "options": [
      {
        "id": "A",
        "text": "MOUNTAINountain",
        "isCorrect": false,
        "rationale": "'MOUNTAINountain' significa 'Montanha', não 'Deserto Árido'."
      },
      {
        "id": "B",
        "text": "Desert",
        "isCorrect": true,
        "rationale": "'Desert' é a tradução correta para 'Deserto Árido'."
      },
      {
        "id": "C",
        "text": "SPICEpice",
        "isCorrect": false,
        "rationale": "'SPICEpice' significa 'Especiaria / Tempero', não 'Deserto Árido'."
      },
      {
        "id": "D",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano Global', não 'Deserto Árido'."
      }
    ]
  },
  {
    "id": "sql-gf-m-11",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Forest",
    "wordPt": "Floresta Densa",
    "phonetic": "ˈfɔːr.ɪst",
    "sentence": "The boreal pine _________ stretches across high latitudes.",
    "sentencePt": "A floresta boreal de pinheiros estende-se por altas latitudes.",
    "exampleEn": "The boreal pine Forest stretches across high latitudes.",
    "examplePt": "A floresta boreal de pinheiros estende-se por altas latitudes.",
    "gapWord": "Forest",
    "question": "Como se diz 'Floresta Densa' em inglês?",
    "hint": "Grande extensão de terra coberta densamente por árvores.",
    "rationale": "'Forest' (ˈfɔːr.ɪst): Grande extensão de terra coberta densamente por árvores.",
    "options": [
      {
        "id": "A",
        "text": "CONTINENTontinent",
        "isCorrect": false,
        "rationale": "'CONTINENTontinent' significa 'Continente', não 'Floresta Densa'."
      },
      {
        "id": "B",
        "text": "PASTAasta",
        "isCorrect": false,
        "rationale": "'PASTAasta' significa 'Massa / Macarrão', não 'Floresta Densa'."
      },
      {
        "id": "C",
        "text": "Forest",
        "isCorrect": true,
        "rationale": "'Forest' é a tradução correta para 'Floresta Densa'."
      },
      {
        "id": "D",
        "text": "SAUCEauce",
        "isCorrect": false,
        "rationale": "'SAUCEauce' significa 'Molho', não 'Floresta Densa'."
      }
    ]
  },
  {
    "id": "sql-gf-m-12",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "River",
    "wordPt": "Rio Navegável",
    "phonetic": "ˈrɪv.ər",
    "sentence": "Cargo barges navigate up the deep Mississippi _________.",
    "sentencePt": "Barcaças de carga navegam pelo profundo rio Mississippi.",
    "exampleEn": "Cargo barges navigate up the deep Mississippi River.",
    "examplePt": "Barcaças de carga navegam pelo profundo rio Mississippi.",
    "gapWord": "River",
    "question": "Como se diz 'Rio Navegável' em inglês?",
    "hint": "Curso contínuo de água que desemboca em mar ou lago.",
    "rationale": "'River' (ˈrɪv.ər): Curso contínuo de água que desemboca em mar ou lago.",
    "options": [
      {
        "id": "A",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta Densa', não 'Rio Navegável'."
      },
      {
        "id": "B",
        "text": "BAKERYakery",
        "isCorrect": false,
        "rationale": "'BAKERYakery' significa 'Padaria', não 'Rio Navegável'."
      },
      {
        "id": "C",
        "text": "COASTALoastal",
        "isCorrect": false,
        "rationale": "'COASTALoastal' significa 'Costeiro / Litorâneo', não 'Rio Navegável'."
      },
      {
        "id": "D",
        "text": "River",
        "isCorrect": true,
        "rationale": "'River' é a tradução correta para 'Rio Navegável'."
      }
    ]
  },
  {
    "id": "sql-gf-m-13",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Ocean",
    "wordPt": "Oceano Global",
    "phonetic": "ˈoʊ.ʃən",
    "sentence": "The Atlantic _________ separates the Americas from Europe and Africa.",
    "sentencePt": "O oceano Atlântico separa as Américas da Europa e da África.",
    "exampleEn": "The Atlantic Ocean separates the Americas from Europe and Africa.",
    "examplePt": "O oceano Atlântico separa as Américas da Europa e da África.",
    "gapWord": "Ocean",
    "question": "Como se diz 'Oceano Global' em inglês?",
    "hint": "Vasta extensão de água salgada que cobre 71% do globo.",
    "rationale": "'Ocean' (ˈoʊ.ʃən): Vasta extensão de água salgada que cobre 71% do globo.",
    "options": [
      {
        "id": "A",
        "text": "Ocean",
        "isCorrect": true,
        "rationale": "'Ocean' é a tradução correta para 'Oceano Global'."
      },
      {
        "id": "B",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta Densa', não 'Oceano Global'."
      },
      {
        "id": "C",
        "text": "COASTALoastal",
        "isCorrect": false,
        "rationale": "'COASTALoastal' significa 'Costeiro / Litorâneo', não 'Oceano Global'."
      },
      {
        "id": "D",
        "text": "PASTAasta",
        "isCorrect": false,
        "rationale": "'PASTAasta' significa 'Massa / Macarrão', não 'Oceano Global'."
      }
    ]
  },
  {
    "id": "sql-gf-m-14",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Continent",
    "wordPt": "Continente",
    "phonetic": "ˈkɑːn.tə.nənt",
    "sentence": "Africa is the second-largest and most populated _________.",
    "sentencePt": "A África é o segundo maior continente e muito povoado.",
    "exampleEn": "Africa is the second-largest and most populated Continent.",
    "examplePt": "A África é o segundo maior continente e muito povoado.",
    "gapWord": "Continent",
    "question": "Como se diz 'Continente' em inglês?",
    "hint": "Cada uma das grandes extensões de terra emersas no planeta.",
    "rationale": "'Continent' (ˈkɑːn.tə.nənt): Cada uma das grandes extensões de terra emersas no planeta.",
    "options": [
      {
        "id": "A",
        "text": "BEEFeef",
        "isCorrect": false,
        "rationale": "'BEEFeef' significa 'Carne Bovina', não 'Continente'."
      },
      {
        "id": "B",
        "text": "Continent",
        "isCorrect": true,
        "rationale": "'Continent' é a tradução correta para 'Continente'."
      },
      {
        "id": "C",
        "text": "CHEESEheese",
        "isCorrect": false,
        "rationale": "'CHEESEheese' significa 'Queijo', não 'Continente'."
      },
      {
        "id": "D",
        "text": "SUGARugar",
        "isCorrect": false,
        "rationale": "'SUGARugar' significa 'Açúcar', não 'Continente'."
      }
    ]
  },
  {
    "id": "sql-gf-m-15",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Climate",
    "wordPt": "Clima Regional",
    "phonetic": "ˈklaɪ.mət",
    "sentence": "The Mediterranean _________ features hot dry summers and mild winters.",
    "sentencePt": "O clima mediterrâneo apresenta verões quentes e secos e invernos amenos.",
    "exampleEn": "The Mediterranean Climate features hot dry summers and mild winters.",
    "examplePt": "O clima mediterrâneo apresenta verões quentes e secos e invernos amenos.",
    "gapWord": "Climate",
    "question": "Como se diz 'Clima Regional' em inglês?",
    "hint": "Padrão de condições meteorológicas de longo prazo.",
    "rationale": "'Climate' (ˈklaɪ.mət): Padrão de condições meteorológicas de longo prazo.",
    "options": [
      {
        "id": "A",
        "text": "LONGITUDEongitude",
        "isCorrect": false,
        "rationale": "'LONGITUDEongitude' significa 'Longitude', não 'Clima Regional'."
      },
      {
        "id": "B",
        "text": "SUGARugar",
        "isCorrect": false,
        "rationale": "'SUGARugar' significa 'Açúcar', não 'Clima Regional'."
      },
      {
        "id": "C",
        "text": "Climate",
        "isCorrect": true,
        "rationale": "'Climate' é a tradução correta para 'Clima Regional'."
      },
      {
        "id": "D",
        "text": "DINNERinner",
        "isCorrect": false,
        "rationale": "'DINNERinner' significa 'Jantar', não 'Clima Regional'."
      }
    ]
  },
  {
    "id": "sql-gf-m-16",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Latitude",
    "wordPt": "Latitude",
    "phonetic": "ˈlæt.ə.tuːd",
    "sentence": "The equator is designated at zero degrees of geographic _________.",
    "sentencePt": "O equador é designado a zero graus de latitude geográfica.",
    "exampleEn": "The equator is designated at zero degrees of geographic Latitude.",
    "examplePt": "O equador é designado a zero graus de latitude geográfica.",
    "gapWord": "Latitude",
    "question": "Como se diz 'Latitude' em inglês?",
    "hint": "Distância angular de qualquer ponto em relação ao Equador.",
    "rationale": "'Latitude' (ˈlæt.ə.tuːd): Distância angular de qualquer ponto em relação ao Equador.",
    "options": [
      {
        "id": "A",
        "text": "PEPPERepper",
        "isCorrect": false,
        "rationale": "'PEPPERepper' significa 'Pimenta', não 'Latitude'."
      },
      {
        "id": "B",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano Global', não 'Latitude'."
      },
      {
        "id": "C",
        "text": "NATIONation",
        "isCorrect": false,
        "rationale": "'NATIONation' significa 'Nação', não 'Latitude'."
      },
      {
        "id": "D",
        "text": "Latitude",
        "isCorrect": true,
        "rationale": "'Latitude' é a tradução correta para 'Latitude'."
      }
    ]
  },
  {
    "id": "sql-gf-m-17",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Longitude",
    "wordPt": "Longitude",
    "phonetic": "ˈlɑːn.dʒə.tuːd",
    "sentence": "The Prime Meridian defines zero degrees of _________ in Greenwich.",
    "sentencePt": "O Meridiano de Greenwich define zero graus de longitude.",
    "exampleEn": "The Prime Meridian defines zero degrees of Longitude in Greenwich.",
    "examplePt": "O Meridiano de Greenwich define zero graus de longitude.",
    "gapWord": "Longitude",
    "question": "Como se diz 'Longitude' em inglês?",
    "hint": "Distância angular a leste ou oeste do meridiano de Greenwich.",
    "rationale": "'Longitude' (ˈlɑːn.dʒə.tuːd): Distância angular a leste ou oeste do meridiano de Greenwich.",
    "options": [
      {
        "id": "A",
        "text": "Longitude",
        "isCorrect": true,
        "rationale": "'Longitude' é a tradução correta para 'Longitude'."
      },
      {
        "id": "B",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto Árido', não 'Longitude'."
      },
      {
        "id": "C",
        "text": "SUGARugar",
        "isCorrect": false,
        "rationale": "'SUGARugar' significa 'Açúcar', não 'Longitude'."
      },
      {
        "id": "D",
        "text": "VILLAGEillage",
        "isCorrect": false,
        "rationale": "'VILLAGEillage' significa 'Vilarejo / Aldeia', não 'Longitude'."
      }
    ]
  },
  {
    "id": "sql-gf-m-18",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Equator",
    "wordPt": "Equador Terrestre",
    "phonetic": "ɪˈkweɪ.tər",
    "sentence": "Solar radiation falls most directly near the planetary _________.",
    "sentencePt": "A radiação solar incide mais diretamente perto do equador planetário.",
    "exampleEn": "Solar radiation falls most directly near the planetary Equator.",
    "examplePt": "A radiação solar incide mais diretamente perto do equador planetário.",
    "gapWord": "Equator",
    "question": "Como se diz 'Equador Terrestre' em inglês?",
    "hint": "Linha imaginária que divide a Terra em hemisférios Norte e Sul.",
    "rationale": "'Equator' (ɪˈkweɪ.tər): Linha imaginária que divide a Terra em hemisférios Norte e Sul.",
    "options": [
      {
        "id": "A",
        "text": "VEGETABLEegetable",
        "isCorrect": false,
        "rationale": "'VEGETABLEegetable' significa 'Legume / Verdura', não 'Equador Terrestre'."
      },
      {
        "id": "B",
        "text": "Equator",
        "isCorrect": true,
        "rationale": "'Equator' é a tradução correta para 'Equador Terrestre'."
      },
      {
        "id": "C",
        "text": "PROVINCErovince",
        "isCorrect": false,
        "rationale": "'PROVINCErovince' significa 'Província', não 'Equador Terrestre'."
      },
      {
        "id": "D",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano Global', não 'Equador Terrestre'."
      }
    ]
  },
  {
    "id": "sql-gf-m-19",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Hemisphere",
    "wordPt": "Hemisfério",
    "phonetic": "ˈhɛm.ə.sfɪr",
    "sentence": "Brazil is situated primarily in the Southern _________.",
    "sentencePt": "O Brasil está situado principalmente no hemisfério Sul.",
    "exampleEn": "Brazil is situated primarily in the Southern Hemisphere.",
    "examplePt": "O Brasil está situado principalmente no hemisfério Sul.",
    "gapWord": "Hemisphere",
    "question": "Como se diz 'Hemisfério' em inglês?",
    "hint": "Metade da esfera terrestre dividida pelo equador ou meridiano.",
    "rationale": "'Hemisphere' (ˈhɛm.ə.sfɪr): Metade da esfera terrestre dividida pelo equador ou meridiano.",
    "options": [
      {
        "id": "A",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta Densa', não 'Hemisfério'."
      },
      {
        "id": "B",
        "text": "BORDERorder",
        "isCorrect": false,
        "rationale": "'BORDERorder' significa 'Fronteira Internacional', não 'Hemisfério'."
      },
      {
        "id": "C",
        "text": "Hemisphere",
        "isCorrect": true,
        "rationale": "'Hemisphere' é a tradução correta para 'Hemisfério'."
      },
      {
        "id": "D",
        "text": "DINNERinner",
        "isCorrect": false,
        "rationale": "'DINNERinner' significa 'Jantar', não 'Hemisfério'."
      }
    ]
  },
  {
    "id": "sql-gf-m-20",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Province",
    "wordPt": "Província",
    "phonetic": "ˈprɑː.vɪns",
    "sentence": "Quebec is a predominantly French-speaking Canadian _________.",
    "sentencePt": "Quebec é uma província canadense predominantemente de língua francesa.",
    "exampleEn": "Quebec is a predominantly French-speaking Canadian Province.",
    "examplePt": "Quebec é uma província canadense predominantemente de língua francesa.",
    "gapWord": "Province",
    "question": "Como se diz 'Província' em inglês?",
    "hint": "Divisão administrativa de alguns países.",
    "rationale": "'Province' (ˈprɑː.vɪns): Divisão administrativa de alguns países.",
    "options": [
      {
        "id": "A",
        "text": "HARBORarbor",
        "isCorrect": false,
        "rationale": "'HARBORarbor' significa 'Porto Marítimo / Baía', não 'Província'."
      },
      {
        "id": "B",
        "text": "VOLCANOolcano",
        "isCorrect": false,
        "rationale": "'VOLCANOolcano' significa 'Vulcão Geológico', não 'Província'."
      },
      {
        "id": "C",
        "text": "LUNCHunch",
        "isCorrect": false,
        "rationale": "'LUNCHunch' significa 'Almoço', não 'Província'."
      },
      {
        "id": "D",
        "text": "Province",
        "isCorrect": true,
        "rationale": "'Province' é a tradução correta para 'Província'."
      }
    ]
  },
  {
    "id": "sql-gf-m-21",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Village",
    "wordPt": "Vilarejo / Aldeia",
    "phonetic": "ˈvɪl.ɪdʒ",
    "sentence": "Fishermen returned to the quiet coastal fishing _________ at sunset.",
    "sentencePt": "Pescadores voltaram ao tranquilo vilarejo costeiro de pesca ao pôr do sol.",
    "exampleEn": "Fishermen returned to the quiet coastal fishing Village at sunset.",
    "examplePt": "Pescadores voltaram ao tranquilo vilarejo costeiro de pesca ao pôr do sol.",
    "gapWord": "Village",
    "question": "Como se diz 'Vilarejo / Aldeia' em inglês?",
    "hint": "Pequena comunidade rural agrupada.",
    "rationale": "'Village' (ˈvɪl.ɪdʒ): Pequena comunidade rural agrupada.",
    "options": [
      {
        "id": "A",
        "text": "Village",
        "isCorrect": true,
        "rationale": "'Village' é a tradução correta para 'Vilarejo / Aldeia'."
      },
      {
        "id": "B",
        "text": "MOUNTAINountain",
        "isCorrect": false,
        "rationale": "'MOUNTAINountain' significa 'Montanha', não 'Vilarejo / Aldeia'."
      },
      {
        "id": "C",
        "text": "EQUATORquator",
        "isCorrect": false,
        "rationale": "'EQUATORquator' significa 'Equador Terrestre', não 'Vilarejo / Aldeia'."
      },
      {
        "id": "D",
        "text": "BREAKFASTreakfast",
        "isCorrect": false,
        "rationale": "'BREAKFASTreakfast' significa 'Café da Manhã', não 'Vilarejo / Aldeia'."
      }
    ]
  },
  {
    "id": "sql-gf-m-22",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Harbor",
    "wordPt": "Porto Marítimo / Baía",
    "phonetic": "ˈhɑːr.bər",
    "sentence": "Cargo container ships anchored safely inside the natural _________.",
    "sentencePt": "Navios de contêineres ancoraram com segurança no porto natural.",
    "exampleEn": "Cargo container ships anchored safely inside the natural Harbor.",
    "examplePt": "Navios de contêineres ancoraram com segurança no porto natural.",
    "gapWord": "Harbor",
    "question": "Como se diz 'Porto Marítimo / Baía' em inglês?",
    "hint": "Área abrigada de águas profundas para atracação de navios.",
    "rationale": "'Harbor' (ˈhɑːr.bər): Área abrigada de águas profundas para atracação de navios.",
    "options": [
      {
        "id": "A",
        "text": "STATEtate",
        "isCorrect": false,
        "rationale": "'STATEtate' significa 'Estado Federado', não 'Porto Marítimo / Baía'."
      },
      {
        "id": "B",
        "text": "Harbor",
        "isCorrect": true,
        "rationale": "'Harbor' é a tradução correta para 'Porto Marítimo / Baía'."
      },
      {
        "id": "C",
        "text": "CANYONanyon",
        "isCorrect": false,
        "rationale": "'CANYONanyon' significa 'Cânion / Desfiladeiro', não 'Porto Marítimo / Baía'."
      },
      {
        "id": "D",
        "text": "DINNERinner",
        "isCorrect": false,
        "rationale": "'DINNERinner' significa 'Jantar', não 'Porto Marítimo / Baía'."
      }
    ]
  },
  {
    "id": "sql-gf-m-23",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Coastal",
    "wordPt": "Costeiro / Litorâneo",
    "phonetic": "ˈkoʊ.stəl",
    "sentence": "Mangrove forests protect vulnerable _________ communities from storms.",
    "sentencePt": "Florestas de mangue protegem comunidades costeiras vulneráveis de tempestades.",
    "exampleEn": "Mangrove forests protect vulnerable Coastal communities from storms.",
    "examplePt": "Florestas de mangue protegem comunidades costeiras vulneráveis de tempestades.",
    "gapWord": "Coastal",
    "question": "Como se diz 'Costeiro / Litorâneo' em inglês?",
    "hint": "Relativo à faixa de terra litorânea junto ao mar.",
    "rationale": "'Coastal' (ˈkoʊ.stəl): Relativo à faixa de terra litorânea junto ao mar.",
    "options": [
      {
        "id": "A",
        "text": "BAKERYakery",
        "isCorrect": false,
        "rationale": "'BAKERYakery' significa 'Padaria', não 'Costeiro / Litorâneo'."
      },
      {
        "id": "B",
        "text": "GARLICarlic",
        "isCorrect": false,
        "rationale": "'GARLICarlic' significa 'Alho', não 'Costeiro / Litorâneo'."
      },
      {
        "id": "C",
        "text": "Coastal",
        "isCorrect": true,
        "rationale": "'Coastal' é a tradução correta para 'Costeiro / Litorâneo'."
      },
      {
        "id": "D",
        "text": "PROVINCErovince",
        "isCorrect": false,
        "rationale": "'PROVINCErovince' significa 'Província', não 'Costeiro / Litorâneo'."
      }
    ]
  },
  {
    "id": "sql-gf-m-24",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Canyon",
    "wordPt": "Cânion / Desfiladeiro",
    "phonetic": "ˈkæn.jən",
    "sentence": "The Colorado River carved the monumental Grand _________.",
    "sentencePt": "O rio Colorado esculpiu o monumental Grand Canyon.",
    "exampleEn": "The Colorado River carved the monumental Grand Canyon.",
    "examplePt": "O rio Colorado esculpiu o monumental Grand Canyon.",
    "gapWord": "Canyon",
    "question": "Como se diz 'Cânion / Desfiladeiro' em inglês?",
    "hint": "Vale profundo com paredes verticais abruptas escavadas por rio.",
    "rationale": "'Canyon' (ˈkæn.jən): Vale profundo com paredes verticais abruptas escavadas por rio.",
    "options": [
      {
        "id": "A",
        "text": "RIVERiver",
        "isCorrect": false,
        "rationale": "'RIVERiver' significa 'Rio Navegável', não 'Cânion / Desfiladeiro'."
      },
      {
        "id": "B",
        "text": "GARLICarlic",
        "isCorrect": false,
        "rationale": "'GARLICarlic' significa 'Alho', não 'Cânion / Desfiladeiro'."
      },
      {
        "id": "C",
        "text": "LUNCHunch",
        "isCorrect": false,
        "rationale": "'LUNCHunch' significa 'Almoço', não 'Cânion / Desfiladeiro'."
      },
      {
        "id": "D",
        "text": "Canyon",
        "isCorrect": true,
        "rationale": "'Canyon' é a tradução correta para 'Cânion / Desfiladeiro'."
      }
    ]
  },
  {
    "id": "sql-gf-m-25",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Volcano",
    "wordPt": "Vulcão Geológico",
    "phonetic": "vɑːlˈkeɪ.noʊ",
    "sentence": "Mount Fuji is an iconic dormant stratovolcano _________ in Japan.",
    "sentencePt": "O Monte Fuji é um estratovulcão adormecido icônico no Japão.",
    "exampleEn": "Mount Fuji is an iconic dormant stratovolcano Volcano in Japan.",
    "examplePt": "O Monte Fuji é um estratovulcão adormecido icônico no Japão.",
    "gapWord": "Volcano",
    "question": "Como se diz 'Vulcão Geológico' em inglês?",
    "hint": "Abertura geológica na crosta que expele lava e cinzas.",
    "rationale": "'Volcano' (vɑːlˈkeɪ.noʊ): Abertura geológica na crosta que expele lava e cinzas.",
    "options": [
      {
        "id": "A",
        "text": "Volcano",
        "isCorrect": true,
        "rationale": "'Volcano' é a tradução correta para 'Vulcão Geológico'."
      },
      {
        "id": "B",
        "text": "VILLAGEillage",
        "isCorrect": false,
        "rationale": "'VILLAGEillage' significa 'Vilarejo / Aldeia', não 'Vulcão Geológico'."
      },
      {
        "id": "C",
        "text": "SPICEpice",
        "isCorrect": false,
        "rationale": "'SPICEpice' significa 'Especiaria / Tempero', não 'Vulcão Geológico'."
      },
      {
        "id": "D",
        "text": "CUISINEuisine",
        "isCorrect": false,
        "rationale": "'CUISINEuisine' significa 'Culinária / Gastronomia Típica', não 'Vulcão Geológico'."
      }
    ]
  },
  {
    "id": "sql-gf-m-26",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Cuisine",
    "wordPt": "Culinária / Gastronomia Típica",
    "phonetic": "kwɪˈziːn",
    "sentence": "Traditional Italian _________ is celebrated for fresh pasta and olive oil.",
    "sentencePt": "A culinária tradicional italiana é celebrada por massas frescas e azeite.",
    "exampleEn": "Traditional Italian Cuisine is celebrated for fresh pasta and olive oil.",
    "examplePt": "A culinária tradicional italiana é celebrada por massas frescas e azeite.",
    "gapWord": "Cuisine",
    "question": "Como se diz 'Culinária / Gastronomia Típica' em inglês?",
    "hint": "Estilo e tradição gastronômica característicos de uma cultura.",
    "rationale": "'Cuisine' (kwɪˈziːn): Estilo e tradição gastronômica característicos de uma cultura.",
    "options": [
      {
        "id": "A",
        "text": "INGREDIENTngredient",
        "isCorrect": false,
        "rationale": "'INGREDIENTngredient' significa 'Ingrediente Culinário', não 'Culinária / Gastronomia Típica'."
      },
      {
        "id": "B",
        "text": "Cuisine",
        "isCorrect": true,
        "rationale": "'Cuisine' é a tradução correta para 'Culinária / Gastronomia Típica'."
      },
      {
        "id": "C",
        "text": "VALLEYalley",
        "isCorrect": false,
        "rationale": "'VALLEYalley' significa 'Vale Geográfico', não 'Culinária / Gastronomia Típica'."
      },
      {
        "id": "D",
        "text": "RESTAURANTestaurant",
        "isCorrect": false,
        "rationale": "'RESTAURANTestaurant' significa 'Restaurante', não 'Culinária / Gastronomia Típica'."
      }
    ]
  },
  {
    "id": "sql-gf-m-27",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Recipe",
    "wordPt": "Receita Culinária",
    "phonetic": "ˈrɛs.ə.pi",
    "sentence": "Follow each step of the grandmother's heirloom cake _________.",
    "sentencePt": "Siga cada passo da receita tradicional de bolo da avó.",
    "exampleEn": "Follow each step of the grandmother's heirloom cake Recipe.",
    "examplePt": "Siga cada passo da receita tradicional de bolo da avó.",
    "gapWord": "Recipe",
    "question": "Como se diz 'Receita Culinária' em inglês?",
    "hint": "Instruções com ingredientes e etapas para preparar um prato.",
    "rationale": "'Recipe' (ˈrɛs.ə.pi): Instruções com ingredientes e etapas para preparar um prato.",
    "options": [
      {
        "id": "A",
        "text": "BEEFeef",
        "isCorrect": false,
        "rationale": "'BEEFeef' significa 'Carne Bovina', não 'Receita Culinária'."
      },
      {
        "id": "B",
        "text": "NATIONation",
        "isCorrect": false,
        "rationale": "'NATIONation' significa 'Nação', não 'Receita Culinária'."
      },
      {
        "id": "C",
        "text": "Recipe",
        "isCorrect": true,
        "rationale": "'Recipe' é a tradução correta para 'Receita Culinária'."
      },
      {
        "id": "D",
        "text": "LUNCHunch",
        "isCorrect": false,
        "rationale": "'LUNCHunch' significa 'Almoço', não 'Receita Culinária'."
      }
    ]
  },
  {
    "id": "sql-gf-m-28",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Ingredient",
    "wordPt": "Ingrediente Culinário",
    "phonetic": "ɪnˈɡriː.di.ənt",
    "sentence": "Fresh basil is a key aromatic _________ in pesto sauce.",
    "sentencePt": "Manjericão fresco é um ingrediente aromático chave no molho pesto.",
    "exampleEn": "Fresh basil is a key aromatic Ingredient in pesto sauce.",
    "examplePt": "Manjericão fresco é um ingrediente aromático chave no molho pesto.",
    "gapWord": "Ingredient",
    "question": "Como se diz 'Ingrediente Culinário' em inglês?",
    "hint": "Cada um dos alimentos ou elementos que compõem uma receita.",
    "rationale": "'Ingredient' (ɪnˈɡriː.di.ənt): Cada um dos alimentos ou elementos que compõem uma receita.",
    "options": [
      {
        "id": "A",
        "text": "PASTAasta",
        "isCorrect": false,
        "rationale": "'PASTAasta' significa 'Massa / Macarrão', não 'Ingrediente Culinário'."
      },
      {
        "id": "B",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta Densa', não 'Ingrediente Culinário'."
      },
      {
        "id": "C",
        "text": "LATITUDEatitude",
        "isCorrect": false,
        "rationale": "'LATITUDEatitude' significa 'Latitude', não 'Ingrediente Culinário'."
      },
      {
        "id": "D",
        "text": "Ingredient",
        "isCorrect": true,
        "rationale": "'Ingredient' é a tradução correta para 'Ingrediente Culinário'."
      }
    ]
  },
  {
    "id": "sql-gf-m-29",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Breakfast",
    "wordPt": "Café da Manhã",
    "phonetic": "ˈbrɛk.fəst",
    "sentence": "A nutritious _________ includes fruit, eggs, and whole grain toast.",
    "sentencePt": "Um café da manhã nutritivo inclui frutas, ovos e torradas integrais.",
    "exampleEn": "A nutritious Breakfast includes fruit, eggs, and whole grain toast.",
    "examplePt": "Um café da manhã nutritivo inclui frutas, ovos e torradas integrais.",
    "gapWord": "Breakfast",
    "question": "Como se diz 'Café da Manhã' em inglês?",
    "hint": "Primeira refeição matinal após o jejum da noite.",
    "rationale": "'Breakfast' (ˈbrɛk.fəst): Primeira refeição matinal após o jejum da noite.",
    "options": [
      {
        "id": "A",
        "text": "Breakfast",
        "isCorrect": true,
        "rationale": "'Breakfast' é a tradução correta para 'Café da Manhã'."
      },
      {
        "id": "B",
        "text": "SALADalad",
        "isCorrect": false,
        "rationale": "'SALADalad' significa 'Salada', não 'Café da Manhã'."
      },
      {
        "id": "C",
        "text": "DESSERTessert",
        "isCorrect": false,
        "rationale": "'DESSERTessert' significa 'Sobremesa', não 'Café da Manhã'."
      },
      {
        "id": "D",
        "text": "CHICKENhicken",
        "isCorrect": false,
        "rationale": "'CHICKENhicken' significa 'Frango', não 'Café da Manhã'."
      }
    ]
  },
  {
    "id": "sql-gf-m-30",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Lunch",
    "wordPt": "Almoço",
    "phonetic": "lʌntʃ",
    "sentence": "Workers take a midday break to enjoy a balanced hot _________.",
    "sentencePt": "Trabalhadores fazem uma pausa ao meio-dia para desfrutar de um almoço quente equilibrado.",
    "exampleEn": "Workers take a midday break to enjoy a balanced hot Lunch.",
    "examplePt": "Trabalhadores fazem uma pausa ao meio-dia para desfrutar de um almoço quente equilibrado.",
    "gapWord": "Lunch",
    "question": "Como se diz 'Almoço' em inglês?",
    "hint": "Refeição principal consumida no meio do dia.",
    "rationale": "'Lunch' (lʌntʃ): Refeição principal consumida no meio do dia.",
    "options": [
      {
        "id": "A",
        "text": "VOLCANOolcano",
        "isCorrect": false,
        "rationale": "'VOLCANOolcano' significa 'Vulcão Geológico', não 'Almoço'."
      },
      {
        "id": "B",
        "text": "Lunch",
        "isCorrect": true,
        "rationale": "'Lunch' é a tradução correta para 'Almoço'."
      },
      {
        "id": "C",
        "text": "ONIONnion",
        "isCorrect": false,
        "rationale": "'ONIONnion' significa 'Cebola', não 'Almoço'."
      },
      {
        "id": "D",
        "text": "PASTAasta",
        "isCorrect": false,
        "rationale": "'PASTAasta' significa 'Massa / Macarrão', não 'Almoço'."
      }
    ]
  },
  {
    "id": "sql-gf-m-31",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Dinner",
    "wordPt": "Jantar",
    "phonetic": "ˈdɪn.ər",
    "sentence": "The whole family gathers around the table for festive Sunday _________.",
    "sentencePt": "Toda a família se reúne ao redor da mesa para o jantar festivo de domingo.",
    "exampleEn": "The whole family gathers around the table for festive Sunday Dinner.",
    "examplePt": "Toda a família se reúne ao redor da mesa para o jantar festivo de domingo.",
    "gapWord": "Dinner",
    "question": "Como se diz 'Jantar' em inglês?",
    "hint": "Refeição noturna principal do dia.",
    "rationale": "'Dinner' (ˈdɪn.ər): Refeição noturna principal do dia.",
    "options": [
      {
        "id": "A",
        "text": "OCEANcean",
        "isCorrect": false,
        "rationale": "'OCEANcean' significa 'Oceano Global', não 'Jantar'."
      },
      {
        "id": "B",
        "text": "CUISINEuisine",
        "isCorrect": false,
        "rationale": "'CUISINEuisine' significa 'Culinária / Gastronomia Típica', não 'Jantar'."
      },
      {
        "id": "C",
        "text": "Dinner",
        "isCorrect": true,
        "rationale": "'Dinner' é a tradução correta para 'Jantar'."
      },
      {
        "id": "D",
        "text": "PORKork",
        "isCorrect": false,
        "rationale": "'PORKork' significa 'Carne Suína', não 'Jantar'."
      }
    ]
  },
  {
    "id": "sql-gf-m-32",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Dessert",
    "wordPt": "Sobremesa",
    "phonetic": "dɪˈzɜːrt",
    "sentence": "Order a scoop of gelato or chocolate mousse for sweet _________.",
    "sentencePt": "Peça uma bola de gelato ou mousse de chocolate de sobremesa.",
    "exampleEn": "Order a scoop of gelato or chocolate mousse for sweet Dessert.",
    "examplePt": "Peça uma bola de gelato ou mousse de chocolate de sobremesa.",
    "gapWord": "Dessert",
    "question": "Como se diz 'Sobremesa' em inglês?",
    "hint": "Prato doce servido ao final de uma refeição.",
    "rationale": "'Dessert' (dɪˈzɜːrt): Prato doce servido ao final de uma refeição.",
    "options": [
      {
        "id": "A",
        "text": "ISLANDsland",
        "isCorrect": false,
        "rationale": "'ISLANDsland' significa 'Ilha Geográfica', não 'Sobremesa'."
      },
      {
        "id": "B",
        "text": "DESERTesert",
        "isCorrect": false,
        "rationale": "'DESERTesert' significa 'Deserto Árido', não 'Sobremesa'."
      },
      {
        "id": "C",
        "text": "CHEESEheese",
        "isCorrect": false,
        "rationale": "'CHEESEheese' significa 'Queijo', não 'Sobremesa'."
      },
      {
        "id": "D",
        "text": "Dessert",
        "isCorrect": true,
        "rationale": "'Dessert' é a tradução correta para 'Sobremesa'."
      }
    ]
  },
  {
    "id": "sql-gf-m-33",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Beverage",
    "wordPt": "Bebida",
    "phonetic": "ˈbɛv.ər.ɪdʒ",
    "sentence": "Coffee is the most consumed morning stimulant _________ worldwide.",
    "sentencePt": "O café é a bebida estimulante matinal mais consumida no mundo.",
    "exampleEn": "Coffee is the most consumed morning stimulant Beverage worldwide.",
    "examplePt": "O café é a bebida estimulante matinal mais consumida no mundo.",
    "gapWord": "Beverage",
    "question": "Como se diz 'Bebida' em inglês?",
    "hint": "Qualquer líquido consumível para beber e matar a sede.",
    "rationale": "'Beverage' (ˈbɛv.ər.ɪdʒ): Qualquer líquido consumível para beber e matar a sede.",
    "options": [
      {
        "id": "A",
        "text": "Beverage",
        "isCorrect": true,
        "rationale": "'Beverage' é a tradução correta para 'Bebida'."
      },
      {
        "id": "B",
        "text": "PORKork",
        "isCorrect": false,
        "rationale": "'PORKork' significa 'Carne Suína', não 'Bebida'."
      },
      {
        "id": "C",
        "text": "BREAKFASTreakfast",
        "isCorrect": false,
        "rationale": "'BREAKFASTreakfast' significa 'Café da Manhã', não 'Bebida'."
      },
      {
        "id": "D",
        "text": "CLIMATElimate",
        "isCorrect": false,
        "rationale": "'CLIMATElimate' significa 'Clima Regional', não 'Bebida'."
      }
    ]
  },
  {
    "id": "sql-gf-m-34",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Vegetable",
    "wordPt": "Legume / Verdura",
    "phonetic": "ˈvɛdʒ.tə.bəl",
    "sentence": "Broccoli is a nutrient-dense green cruciferous _________.",
    "sentencePt": "O brócolis é uma verdura crucífera verde densa em nutrientes.",
    "exampleEn": "Broccoli is a nutrient-dense green cruciferous Vegetable.",
    "examplePt": "O brócolis é uma verdura crucífera verde densa em nutrientes.",
    "gapWord": "Vegetable",
    "question": "Como se diz 'Legume / Verdura' em inglês?",
    "hint": "Planta cultivada para consumo comestível de raízes, folhas ou caules.",
    "rationale": "'Vegetable' (ˈvɛdʒ.tə.bəl): Planta cultivada para consumo comestível de raízes, folhas ou caules.",
    "options": [
      {
        "id": "A",
        "text": "EQUATORquator",
        "isCorrect": false,
        "rationale": "'EQUATORquator' significa 'Equador Terrestre', não 'Legume / Verdura'."
      },
      {
        "id": "B",
        "text": "Vegetable",
        "isCorrect": true,
        "rationale": "'Vegetable' é a tradução correta para 'Legume / Verdura'."
      },
      {
        "id": "C",
        "text": "REGIONegion",
        "isCorrect": false,
        "rationale": "'REGIONegion' significa 'Região Geográfica', não 'Legume / Verdura'."
      },
      {
        "id": "D",
        "text": "VALLEYalley",
        "isCorrect": false,
        "rationale": "'VALLEYalley' significa 'Vale Geográfico', não 'Legume / Verdura'."
      }
    ]
  },
  {
    "id": "sql-gf-m-35",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Chicken",
    "wordPt": "Frango",
    "phonetic": "ˈtʃɪk.ɪn",
    "sentence": "Roast herb-seasoned _________ with crispy skin is a classic dish.",
    "sentencePt": "Frango assado temperado com ervas e pele crocante é um prato clássico.",
    "exampleEn": "Roast herb-seasoned Chicken with crispy skin is a classic dish.",
    "examplePt": "Frango assado temperado com ervas e pele crocante é um prato clássico.",
    "gapWord": "Chicken",
    "question": "Como se diz 'Frango' em inglês?",
    "hint": "Carne de ave doméstica amplamente consumida no mundo.",
    "rationale": "'Chicken' (ˈtʃɪk.ɪn): Carne de ave doméstica amplamente consumida no mundo.",
    "options": [
      {
        "id": "A",
        "text": "BAKERYakery",
        "isCorrect": false,
        "rationale": "'BAKERYakery' significa 'Padaria', não 'Frango'."
      },
      {
        "id": "B",
        "text": "SEAFOODeafood",
        "isCorrect": false,
        "rationale": "'SEAFOODeafood' significa 'Frutos do Mar', não 'Frango'."
      },
      {
        "id": "C",
        "text": "Chicken",
        "isCorrect": true,
        "rationale": "'Chicken' é a tradução correta para 'Frango'."
      },
      {
        "id": "D",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta Densa', não 'Frango'."
      }
    ]
  },
  {
    "id": "sql-gf-m-36",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Beef",
    "wordPt": "Carne Bovina",
    "phonetic": "biːf",
    "sentence": "A tender grilled sirloin _________ steak is cooked to medium rare.",
    "sentencePt": "Um bife macio de carne bovina grelhada é preparado ao ponto.",
    "exampleEn": "A tender grilled sirloin Beef steak is cooked to medium rare.",
    "examplePt": "Um bife macio de carne bovina grelhada é preparado ao ponto.",
    "gapWord": "Beef",
    "question": "Como se diz 'Carne Bovina' em inglês?",
    "hint": "Carne de gado bovino consumida em cortes e churrascos.",
    "rationale": "'Beef' (biːf): Carne de gado bovino consumida em cortes e churrascos.",
    "options": [
      {
        "id": "A",
        "text": "CHEESEheese",
        "isCorrect": false,
        "rationale": "'CHEESEheese' significa 'Queijo', não 'Carne Bovina'."
      },
      {
        "id": "B",
        "text": "VEGETABLEegetable",
        "isCorrect": false,
        "rationale": "'VEGETABLEegetable' significa 'Legume / Verdura', não 'Carne Bovina'."
      },
      {
        "id": "C",
        "text": "LATITUDEatitude",
        "isCorrect": false,
        "rationale": "'LATITUDEatitude' significa 'Latitude', não 'Carne Bovina'."
      },
      {
        "id": "D",
        "text": "Beef",
        "isCorrect": true,
        "rationale": "'Beef' é a tradução correta para 'Carne Bovina'."
      }
    ]
  },
  {
    "id": "sql-gf-m-37",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Pork",
    "wordPt": "Carne Suína",
    "phonetic": "pɔːrk",
    "sentence": "Slow-roasted pulled _________ is seasoned with barbecue spices.",
    "sentencePt": "Carne suína desfiada assada lentamente é temperada com especiarias.",
    "exampleEn": "Slow-roasted pulled Pork is seasoned with barbecue spices.",
    "examplePt": "Carne suína desfiada assada lentamente é temperada com especiarias.",
    "gapWord": "Pork",
    "question": "Como se diz 'Carne Suína' em inglês?",
    "hint": "Carne de porco utilizada na culinária internacional.",
    "rationale": "'Pork' (pɔːrk): Carne de porco utilizada na culinária internacional.",
    "options": [
      {
        "id": "A",
        "text": "Pork",
        "isCorrect": true,
        "rationale": "'Pork' é a tradução correta para 'Carne Suína'."
      },
      {
        "id": "B",
        "text": "GARLICarlic",
        "isCorrect": false,
        "rationale": "'GARLICarlic' significa 'Alho', não 'Carne Suína'."
      },
      {
        "id": "C",
        "text": "CHICKENhicken",
        "isCorrect": false,
        "rationale": "'CHICKENhicken' significa 'Frango', não 'Carne Suína'."
      },
      {
        "id": "D",
        "text": "CUISINEuisine",
        "isCorrect": false,
        "rationale": "'CUISINEuisine' significa 'Culinária / Gastronomia Típica', não 'Carne Suína'."
      }
    ]
  },
  {
    "id": "sql-gf-m-38",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Seafood",
    "wordPt": "Frutos do Mar",
    "phonetic": "ˈsiːˌfuːd",
    "sentence": "The coastal bistro specializes in fresh shrimp and octopus _________.",
    "sentencePt": "O bistrô litorâneo especializa-se em camarão e polvo frescos.",
    "exampleEn": "The coastal bistro specializes in fresh shrimp and octopus Seafood.",
    "examplePt": "O bistrô litorâneo especializa-se em camarão e polvo frescos.",
    "gapWord": "Seafood",
    "question": "Como se diz 'Frutos do Mar' em inglês?",
    "hint": "Organismos marinhos comestíveis, incluindo peixes, moluscos e crustáceos.",
    "rationale": "'Seafood' (ˈsiːˌfuːd): Organismos marinhos comestíveis, incluindo peixes, moluscos e crustáceos.",
    "options": [
      {
        "id": "A",
        "text": "SUGARugar",
        "isCorrect": false,
        "rationale": "'SUGARugar' significa 'Açúcar', não 'Frutos do Mar'."
      },
      {
        "id": "B",
        "text": "Seafood",
        "isCorrect": true,
        "rationale": "'Seafood' é a tradução correta para 'Frutos do Mar'."
      },
      {
        "id": "C",
        "text": "BEVERAGEeverage",
        "isCorrect": false,
        "rationale": "'BEVERAGEeverage' significa 'Bebida', não 'Frutos do Mar'."
      },
      {
        "id": "D",
        "text": "HARBORarbor",
        "isCorrect": false,
        "rationale": "'HARBORarbor' significa 'Porto Marítimo / Baía', não 'Frutos do Mar'."
      }
    ]
  },
  {
    "id": "sql-gf-m-39",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Cheese",
    "wordPt": "Queijo",
    "phonetic": "tʃiːz",
    "sentence": "Aged artisanal cheddar is a flavorful fermented dairy _________.",
    "sentencePt": "Cheddar artesanal envelhecido é um queijo laticínio fermentado saboroso.",
    "exampleEn": "Aged artisanal cheddar is a flavorful fermented dairy Cheese.",
    "examplePt": "Cheddar artesanal envelhecido é um queijo laticínio fermentado saboroso.",
    "gapWord": "Cheese",
    "question": "Como se diz 'Queijo' em inglês?",
    "hint": "Alimento sólido derivado da coagulação do leite.",
    "rationale": "'Cheese' (tʃiːz): Alimento sólido derivado da coagulação do leite.",
    "options": [
      {
        "id": "A",
        "text": "SPICEpice",
        "isCorrect": false,
        "rationale": "'SPICEpice' significa 'Especiaria / Tempero', não 'Queijo'."
      },
      {
        "id": "B",
        "text": "PORKork",
        "isCorrect": false,
        "rationale": "'PORKork' significa 'Carne Suína', não 'Queijo'."
      },
      {
        "id": "C",
        "text": "Cheese",
        "isCorrect": true,
        "rationale": "'Cheese' é a tradução correta para 'Queijo'."
      },
      {
        "id": "D",
        "text": "LONGITUDEongitude",
        "isCorrect": false,
        "rationale": "'LONGITUDEongitude' significa 'Longitude', não 'Queijo'."
      }
    ]
  },
  {
    "id": "sql-gf-m-40",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Butter",
    "wordPt": "Manteiga",
    "phonetic": "ˈbʌt.ər",
    "sentence": "Spread creamy churned salted _________ over warm sourdough.",
    "sentencePt": "Espalhe manteiga salgada cremosa sobre o pão de fermentação natural quente.",
    "exampleEn": "Spread creamy churned salted Butter over warm sourdough.",
    "examplePt": "Espalhe manteiga salgada cremosa sobre o pão de fermentação natural quente.",
    "gapWord": "Butter",
    "question": "Como se diz 'Manteiga' em inglês?",
    "hint": "Gordura laticínia emulsionada obtida do batimento da nata.",
    "rationale": "'Butter' (ˈbʌt.ər): Gordura laticínia emulsionada obtida do batimento da nata.",
    "options": [
      {
        "id": "A",
        "text": "CAPITALapital",
        "isCorrect": false,
        "rationale": "'CAPITALapital' significa 'Capital / Cidade Capital', não 'Manteiga'."
      },
      {
        "id": "B",
        "text": "CUISINEuisine",
        "isCorrect": false,
        "rationale": "'CUISINEuisine' significa 'Culinária / Gastronomia Típica', não 'Manteiga'."
      },
      {
        "id": "C",
        "text": "BORDERorder",
        "isCorrect": false,
        "rationale": "'BORDERorder' significa 'Fronteira Internacional', não 'Manteiga'."
      },
      {
        "id": "D",
        "text": "Butter",
        "isCorrect": true,
        "rationale": "'Butter' é a tradução correta para 'Manteiga'."
      }
    ]
  },
  {
    "id": "sql-gf-m-41",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Sugar",
    "wordPt": "Açúcar",
    "phonetic": "ˈʃʊɡ.ər",
    "sentence": "Cane _________ sweetens beverages and balances culinary acidity.",
    "sentencePt": "Açúcar de cana adoça bebidas e equilibra a acidez culinária.",
    "exampleEn": "Cane Sugar sweetens beverages and balances culinary acidity.",
    "examplePt": "Açúcar de cana adoça bebidas e equilibra a acidez culinária.",
    "gapWord": "Sugar",
    "question": "Como se diz 'Açúcar' em inglês?",
    "hint": "Carboidrato cristalino solúvel de sabor doce.",
    "rationale": "'Sugar' (ˈʃʊɡ.ər): Carboidrato cristalino solúvel de sabor doce.",
    "options": [
      {
        "id": "A",
        "text": "Sugar",
        "isCorrect": true,
        "rationale": "'Sugar' é a tradução correta para 'Açúcar'."
      },
      {
        "id": "B",
        "text": "LONGITUDEongitude",
        "isCorrect": false,
        "rationale": "'LONGITUDEongitude' significa 'Longitude', não 'Açúcar'."
      },
      {
        "id": "C",
        "text": "VOLCANOolcano",
        "isCorrect": false,
        "rationale": "'VOLCANOolcano' significa 'Vulcão Geológico', não 'Açúcar'."
      },
      {
        "id": "D",
        "text": "RESTAURANTestaurant",
        "isCorrect": false,
        "rationale": "'RESTAURANTestaurant' significa 'Restaurante', não 'Açúcar'."
      }
    ]
  },
  {
    "id": "sql-gf-m-42",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Spice",
    "wordPt": "Especiaria / Tempero",
    "phonetic": "spaɪs",
    "sentence": "Cinnamon and cardamom are aromatic baking _________.",
    "sentencePt": "Canela e cardamomo são especiarias aromáticas de confeitaria.",
    "exampleEn": "Cinnamon and cardamom are aromatic baking Spice.",
    "examplePt": "Canela e cardamomo são especiarias aromáticas de confeitaria.",
    "gapWord": "Spice",
    "question": "Como se diz 'Especiaria / Tempero' em inglês?",
    "hint": "Substância vegetal aromática ou picante usada para temperar.",
    "rationale": "'Spice' (spaɪs): Substância vegetal aromática ou picante usada para temperar.",
    "options": [
      {
        "id": "A",
        "text": "COASTALoastal",
        "isCorrect": false,
        "rationale": "'COASTALoastal' significa 'Costeiro / Litorâneo', não 'Especiaria / Tempero'."
      },
      {
        "id": "B",
        "text": "Spice",
        "isCorrect": true,
        "rationale": "'Spice' é a tradução correta para 'Especiaria / Tempero'."
      },
      {
        "id": "C",
        "text": "BREAKFASTreakfast",
        "isCorrect": false,
        "rationale": "'BREAKFASTreakfast' significa 'Café da Manhã', não 'Especiaria / Tempero'."
      },
      {
        "id": "D",
        "text": "LATITUDEatitude",
        "isCorrect": false,
        "rationale": "'LATITUDEatitude' significa 'Latitude', não 'Especiaria / Tempero'."
      }
    ]
  },
  {
    "id": "sql-gf-m-43",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Pepper",
    "wordPt": "Pimenta",
    "phonetic": "ˈpɛp.ər",
    "sentence": "Freshly cracked black _________ adds piquant warmth to steaks.",
    "sentencePt": "Pimenta preta moída na hora adiciona calor picante aos bifes.",
    "exampleEn": "Freshly cracked black Pepper adds piquant warmth to steaks.",
    "examplePt": "Pimenta preta moída na hora adiciona calor picante aos bifes.",
    "gapWord": "Pepper",
    "question": "Como se diz 'Pimenta' em inglês?",
    "hint": "Condimento picante derivado dos frutos secos da pimenteira.",
    "rationale": "'Pepper' (ˈpɛp.ər): Condimento picante derivado dos frutos secos da pimenteira.",
    "options": [
      {
        "id": "A",
        "text": "BUTTERutter",
        "isCorrect": false,
        "rationale": "'BUTTERutter' significa 'Manteiga', não 'Pimenta'."
      },
      {
        "id": "B",
        "text": "LONGITUDEongitude",
        "isCorrect": false,
        "rationale": "'LONGITUDEongitude' significa 'Longitude', não 'Pimenta'."
      },
      {
        "id": "C",
        "text": "Pepper",
        "isCorrect": true,
        "rationale": "'Pepper' é a tradução correta para 'Pimenta'."
      },
      {
        "id": "D",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta Densa', não 'Pimenta'."
      }
    ]
  },
  {
    "id": "sql-gf-m-44",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Garlic",
    "wordPt": "Alho",
    "phonetic": "ˈɡɑːr.lɪk",
    "sentence": "Minced sautéed _________ forms the aromatic base of many sauces.",
    "sentencePt": "Alho picado refogado forma a base aromática de muitos molhos.",
    "exampleEn": "Minced sautéed Garlic forms the aromatic base of many sauces.",
    "examplePt": "Alho picado refogado forma a base aromática de muitos molhos.",
    "gapWord": "Garlic",
    "question": "Como se diz 'Alho' em inglês?",
    "hint": "Bolbo pungente muito utilizado como condimento essencial.",
    "rationale": "'Garlic' (ˈɡɑːr.lɪk): Bolbo pungente muito utilizado como condimento essencial.",
    "options": [
      {
        "id": "A",
        "text": "REGIONegion",
        "isCorrect": false,
        "rationale": "'REGIONegion' significa 'Região Geográfica', não 'Alho'."
      },
      {
        "id": "B",
        "text": "PEPPERepper",
        "isCorrect": false,
        "rationale": "'PEPPERepper' significa 'Pimenta', não 'Alho'."
      },
      {
        "id": "C",
        "text": "RIVERiver",
        "isCorrect": false,
        "rationale": "'RIVERiver' significa 'Rio Navegável', não 'Alho'."
      },
      {
        "id": "D",
        "text": "Garlic",
        "isCorrect": true,
        "rationale": "'Garlic' é a tradução correta para 'Alho'."
      }
    ]
  },
  {
    "id": "sql-gf-m-45",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Onion",
    "wordPt": "Cebola",
    "phonetic": "ˈʌn.jən",
    "sentence": "Caramelize sliced yellow _________ in olive oil for richness.",
    "sentencePt": "Caramelize cebola amarela fatiada no azeite para enriquecer o prato.",
    "exampleEn": "Caramelize sliced yellow Onion in olive oil for richness.",
    "examplePt": "Caramelize cebola amarela fatiada no azeite para enriquecer o prato.",
    "gapWord": "Onion",
    "question": "Como se diz 'Cebola' em inglês?",
    "hint": "Bolbo comestível em camadas de sabor marcante em refogados.",
    "rationale": "'Onion' (ˈʌn.jən): Bolbo comestível em camadas de sabor marcante em refogados.",
    "options": [
      {
        "id": "A",
        "text": "Onion",
        "isCorrect": true,
        "rationale": "'Onion' é a tradução correta para 'Cebola'."
      },
      {
        "id": "B",
        "text": "DESSERTessert",
        "isCorrect": false,
        "rationale": "'DESSERTessert' significa 'Sobremesa', não 'Cebola'."
      },
      {
        "id": "C",
        "text": "BREAKFASTreakfast",
        "isCorrect": false,
        "rationale": "'BREAKFASTreakfast' significa 'Café da Manhã', não 'Cebola'."
      },
      {
        "id": "D",
        "text": "CANYONanyon",
        "isCorrect": false,
        "rationale": "'CANYONanyon' significa 'Cânion / Desfiladeiro', não 'Cebola'."
      }
    ]
  },
  {
    "id": "sql-gf-m-46",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Salad",
    "wordPt": "Salada",
    "phonetic": "ˈsæl.əd",
    "sentence": "Toss a crisp garden _________ of romaine lettuce and tomatoes.",
    "sentencePt": "Misture uma salada fresca de alface romana e tomates.",
    "exampleEn": "Toss a crisp garden Salad of romaine lettuce and tomatoes.",
    "examplePt": "Misture uma salada fresca de alface romana e tomates.",
    "gapWord": "Salad",
    "question": "Como se diz 'Salada' em inglês?",
    "hint": "Mistura de vegetais crus ou cozidos servida temperada.",
    "rationale": "'Salad' (ˈsæl.əd): Mistura de vegetais crus ou cozidos servida temperada.",
    "options": [
      {
        "id": "A",
        "text": "ISLANDsland",
        "isCorrect": false,
        "rationale": "'ISLANDsland' significa 'Ilha Geográfica', não 'Salada'."
      },
      {
        "id": "B",
        "text": "Salad",
        "isCorrect": true,
        "rationale": "'Salad' é a tradução correta para 'Salada'."
      },
      {
        "id": "C",
        "text": "ONIONnion",
        "isCorrect": false,
        "rationale": "'ONIONnion' significa 'Cebola', não 'Salada'."
      },
      {
        "id": "D",
        "text": "RESTAURANTestaurant",
        "isCorrect": false,
        "rationale": "'RESTAURANTestaurant' significa 'Restaurante', não 'Salada'."
      }
    ]
  },
  {
    "id": "sql-gf-m-47",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Pasta",
    "wordPt": "Massa / Macarrão",
    "phonetic": "ˈpɑː.stə",
    "sentence": "Boil handmade fettuccine _________ in salted water until al dente.",
    "sentencePt": "Cozinhe a massa fresca de fettuccine em água salgada até ficar al dente.",
    "exampleEn": "Boil handmade fettuccine Pasta in salted water until al dente.",
    "examplePt": "Cozinhe a massa fresca de fettuccine em água salgada até ficar al dente.",
    "gapWord": "Pasta",
    "question": "Como se diz 'Massa / Macarrão' em inglês?",
    "hint": "Alimento à base de farinha de trigo e água moldado em formatos variados.",
    "rationale": "'Pasta' (ˈpɑː.stə): Alimento à base de farinha de trigo e água moldado em formatos variados.",
    "options": [
      {
        "id": "A",
        "text": "VALLEYalley",
        "isCorrect": false,
        "rationale": "'VALLEYalley' significa 'Vale Geográfico', não 'Massa / Macarrão'."
      },
      {
        "id": "B",
        "text": "INGREDIENTngredient",
        "isCorrect": false,
        "rationale": "'INGREDIENTngredient' significa 'Ingrediente Culinário', não 'Massa / Macarrão'."
      },
      {
        "id": "C",
        "text": "Pasta",
        "isCorrect": true,
        "rationale": "'Pasta' é a tradução correta para 'Massa / Macarrão'."
      },
      {
        "id": "D",
        "text": "DINNERinner",
        "isCorrect": false,
        "rationale": "'DINNERinner' significa 'Jantar', não 'Massa / Macarrão'."
      }
    ]
  },
  {
    "id": "sql-gf-m-48",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Sauce",
    "wordPt": "Molho",
    "phonetic": "sɔːs",
    "sentence": "Simmer tomato marinara _________ with basil and oregano.",
    "sentencePt": "Cozinhe molho marinara de tomate com manjericão e orégano.",
    "exampleEn": "Simmer tomato marinara Sauce with basil and oregano.",
    "examplePt": "Cozinhe molho marinara de tomate com manjericão e orégano.",
    "gapWord": "Sauce",
    "question": "Como se diz 'Molho' em inglês?",
    "hint": "Preparação líquida ou cremosa servida sobre pratos culinários.",
    "rationale": "'Sauce' (sɔːs): Preparação líquida ou cremosa servida sobre pratos culinários.",
    "options": [
      {
        "id": "A",
        "text": "SALADalad",
        "isCorrect": false,
        "rationale": "'SALADalad' significa 'Salada', não 'Molho'."
      },
      {
        "id": "B",
        "text": "GARLICarlic",
        "isCorrect": false,
        "rationale": "'GARLICarlic' significa 'Alho', não 'Molho'."
      },
      {
        "id": "C",
        "text": "VILLAGEillage",
        "isCorrect": false,
        "rationale": "'VILLAGEillage' significa 'Vilarejo / Aldeia', não 'Molho'."
      },
      {
        "id": "D",
        "text": "Sauce",
        "isCorrect": true,
        "rationale": "'Sauce' é a tradução correta para 'Molho'."
      }
    ]
  },
  {
    "id": "sql-gf-m-49",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Bakery",
    "wordPt": "Padaria",
    "phonetic": "ˈbeɪ.kər.i",
    "sentence": "The neighborhood _________ smells of fresh croissants at dawn.",
    "sentencePt": "A padaria do bairro cheira a croissants frescos ao amanhecer.",
    "exampleEn": "The neighborhood Bakery smells of fresh croissants at dawn.",
    "examplePt": "A padaria do bairro cheira a croissants frescos ao amanhecer.",
    "gapWord": "Bakery",
    "question": "Como se diz 'Padaria' em inglês?",
    "hint": "Estabelecimento onde se preparam e vendem pães e doces assados.",
    "rationale": "'Bakery' (ˈbeɪ.kər.i): Estabelecimento onde se preparam e vendem pães e doces assados.",
    "options": [
      {
        "id": "A",
        "text": "Bakery",
        "isCorrect": true,
        "rationale": "'Bakery' é a tradução correta para 'Padaria'."
      },
      {
        "id": "B",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta Densa', não 'Padaria'."
      },
      {
        "id": "C",
        "text": "HARBORarbor",
        "isCorrect": false,
        "rationale": "'HARBORarbor' significa 'Porto Marítimo / Baía', não 'Padaria'."
      },
      {
        "id": "D",
        "text": "RESTAURANTestaurant",
        "isCorrect": false,
        "rationale": "'RESTAURANTestaurant' significa 'Restaurante', não 'Padaria'."
      }
    ]
  },
  {
    "id": "sql-gf-m-50",
    "topic": "geografia_comida",
    "difficulty": "medio",
    "wordEn": "Restaurant",
    "wordPt": "Restaurante",
    "phonetic": "ˈrɛs.trɑːnt",
    "sentence": "Dine at a fine dining _________ overlooking the city skyline.",
    "sentencePt": "Jante em um restaurante de alta gastronomia com vista para a cidade.",
    "exampleEn": "Dine at a fine dining Restaurant overlooking the city skyline.",
    "examplePt": "Jante em um restaurante de alta gastronomia com vista para a cidade.",
    "gapWord": "Restaurant",
    "question": "Como se diz 'Restaurante' em inglês?",
    "hint": "Estabelecimento comercial que prepara e serve refeições ao público.",
    "rationale": "'Restaurant' (ˈrɛs.trɑːnt): Estabelecimento comercial que prepara e serve refeições ao público.",
    "options": [
      {
        "id": "A",
        "text": "HEMISPHEREemisphere",
        "isCorrect": false,
        "rationale": "'HEMISPHEREemisphere' significa 'Hemisfério', não 'Restaurante'."
      },
      {
        "id": "B",
        "text": "Restaurant",
        "isCorrect": true,
        "rationale": "'Restaurant' é a tradução correta para 'Restaurante'."
      },
      {
        "id": "C",
        "text": "SUGARugar",
        "isCorrect": false,
        "rationale": "'SUGARugar' significa 'Açúcar', não 'Restaurante'."
      },
      {
        "id": "D",
        "text": "FORESTorest",
        "isCorrect": false,
        "rationale": "'FORESTorest' significa 'Floresta Densa', não 'Restaurante'."
      }
    ]
  },
  {
    "id": "sql-gf-d-01",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Archipelago",
    "wordPt": "Arquipélago",
    "phonetic": "ˌɑːr.kəˈpɛl.ə.ɡoʊ",
    "sentence": "The volcanic Galápagos _________ hosts extraordinary endemic species.",
    "sentencePt": "O arquipélago vulcânico de Galápagos abriga espécies endêmicas extraordinárias.",
    "exampleEn": "The volcanic Galápagos Archipelago hosts extraordinary endemic species.",
    "examplePt": "O arquipélago vulcânico de Galápagos abriga espécies endêmicas extraordinárias.",
    "gapWord": "Archipelago",
    "question": "Como se diz 'Arquipélago' em inglês?",
    "hint": "Grupo ou conjunto agrupado de ilhas próximas no oceano.",
    "rationale": "'Archipelago' (ˌɑːr.kəˈpɛl.ə.ɡoʊ): Grupo ou conjunto agrupado de ilhas próximas no oceano.",
    "options": [
      {
        "id": "A",
        "text": "Archipelago",
        "isCorrect": true,
        "rationale": "'Archipelago' é a tradução correta para 'Arquipélago'."
      },
      {
        "id": "B",
        "text": "GASTRONOMYastronomy",
        "isCorrect": false,
        "rationale": "'GASTRONOMYastronomy' significa 'Gastronomia', não 'Arquipélago'."
      },
      {
        "id": "C",
        "text": "ESTUARYstuary",
        "isCorrect": false,
        "rationale": "'ESTUARYstuary' significa 'Estuário Fluvial', não 'Arquipélago'."
      },
      {
        "id": "D",
        "text": "PRESERVATIVEreservative",
        "isCorrect": false,
        "rationale": "'PRESERVATIVEreservative' significa 'Conservante Alimentar', não 'Arquipélago'."
      }
    ]
  },
  {
    "id": "sql-gf-d-02",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Topography",
    "wordPt": "Topografia",
    "phonetic": "təˈpɑː.ɡrə.fi",
    "sentence": "Mountainous terrain creates rugged local _________.",
    "sentencePt": "Terreno montanhoso cria uma topografia local acidentada.",
    "exampleEn": "Mountainous terrain creates rugged local Topography.",
    "examplePt": "Terreno montanhoso cria uma topografia local acidentada.",
    "gapWord": "Topography",
    "question": "Como se diz 'Topografia' em inglês?",
    "hint": "Configuração detalhada do relevo e da superfície de uma região.",
    "rationale": "'Topography' (təˈpɑː.ɡrə.fi): Configuração detalhada do relevo e da superfície de uma região.",
    "options": [
      {
        "id": "A",
        "text": "BREWERYrewery",
        "isCorrect": false,
        "rationale": "'BREWERYrewery' significa 'Cervejaria Artesanal', não 'Topografia'."
      },
      {
        "id": "B",
        "text": "Topography",
        "isCorrect": true,
        "rationale": "'Topography' é a tradução correta para 'Topografia'."
      },
      {
        "id": "C",
        "text": "APPETIZERppetizer",
        "isCorrect": false,
        "rationale": "'APPETIZERppetizer' significa 'Aperitivo / Entrada', não 'Topografia'."
      },
      {
        "id": "D",
        "text": "SEASONINGeasoning",
        "isCorrect": false,
        "rationale": "'SEASONINGeasoning' significa 'Tempero / Condimentação', não 'Topografia'."
      }
    ]
  },
  {
    "id": "sql-gf-d-03",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Cartography",
    "wordPt": "Cartografia",
    "phonetic": "kɑːrˈtɑː.ɡrə.fi",
    "sentence": "Satellite imaging revolutionized modern digital _________.",
    "sentencePt": "Imagens de satélite revolucionaram a cartografia digital moderna.",
    "exampleEn": "Satellite imaging revolutionized modern digital Cartography.",
    "examplePt": "Imagens de satélite revolucionaram a cartografia digital moderna.",
    "gapWord": "Cartography",
    "question": "Como se diz 'Cartografia' em inglês?",
    "hint": "Ciência e arte de compilar, desenhar e estudar mapas.",
    "rationale": "'Cartography' (kɑːrˈtɑː.ɡrə.fi): Ciência e arte de compilar, desenhar e estudar mapas.",
    "options": [
      {
        "id": "A",
        "text": "TOPOGRAPHYopography",
        "isCorrect": false,
        "rationale": "'TOPOGRAPHYopography' significa 'Topografia', não 'Cartografia'."
      },
      {
        "id": "B",
        "text": "PROVISIONSrovisions",
        "isCorrect": false,
        "rationale": "'PROVISIONSrovisions' significa 'Provisões / Mantimentos de Viagem', não 'Cartografia'."
      },
      {
        "id": "C",
        "text": "Cartography",
        "isCorrect": true,
        "rationale": "'Cartography' é a tradução correta para 'Cartografia'."
      },
      {
        "id": "D",
        "text": "CALORICaloric",
        "isCorrect": false,
        "rationale": "'CALORICaloric' significa 'Calórico / Valor Energético', não 'Cartografia'."
      }
    ]
  },
  {
    "id": "sql-gf-d-04",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Demographics",
    "wordPt": "Dados Demográficos / Demografia",
    "phonetic": "ˌdɛm.əˈɡræf.ɪks",
    "sentence": "Census reports analyze shifting regional urban _________.",
    "sentencePt": "Relatórios de censo analisam dados demográficos urbanos em mudança.",
    "exampleEn": "Census reports analyze shifting regional urban Demographics.",
    "examplePt": "Relatórios de censo analisam dados demográficos urbanos em mudança.",
    "gapWord": "Demographics",
    "question": "Como se diz 'Dados Demográficos / Demografia' em inglês?",
    "hint": "Estudo estatístico da população humana, distribuição e taxas.",
    "rationale": "'Demographics' (ˌdɛm.əˈɡræf.ɪks): Estudo estatístico da população humana, distribuição e taxas.",
    "options": [
      {
        "id": "A",
        "text": "DISTILLERYistillery",
        "isCorrect": false,
        "rationale": "'DISTILLERYistillery' significa 'Destilaria', não 'Dados Demográficos / Demografia'."
      },
      {
        "id": "B",
        "text": "VITICULTUREiticulture",
        "isCorrect": false,
        "rationale": "'VITICULTUREiticulture' significa 'Viticultura', não 'Dados Demográficos / Demografia'."
      },
      {
        "id": "C",
        "text": "HEMISPHERICemispheric",
        "isCorrect": false,
        "rationale": "'HEMISPHERICemispheric' significa 'Hemisférico', não 'Dados Demográficos / Demografia'."
      },
      {
        "id": "D",
        "text": "Demographics",
        "isCorrect": true,
        "rationale": "'Demographics' é a tradução correta para 'Dados Demográficos / Demografia'."
      }
    ]
  },
  {
    "id": "sql-gf-d-05",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Metropolis",
    "wordPt": "Metrópole",
    "phonetic": "məˈtrɑː.pə.lɪs",
    "sentence": "Tokyo is a sprawling global economic _________.",
    "sentencePt": "Tóquio é uma metrópole econômica global em expansão.",
    "exampleEn": "Tokyo is a sprawling global economic Metropolis.",
    "examplePt": "Tóquio é uma metrópole econômica global em expansão.",
    "gapWord": "Metropolis",
    "question": "Como se diz 'Metrópole' em inglês?",
    "hint": "Grande cidade de destaque que polariza uma vasta região.",
    "rationale": "'Metropolis' (məˈtrɑː.pə.lɪs): Grande cidade de destaque que polariza uma vasta região.",
    "options": [
      {
        "id": "A",
        "text": "Metropolis",
        "isCorrect": true,
        "rationale": "'Metropolis' é a tradução correta para 'Metrópole'."
      },
      {
        "id": "B",
        "text": "DISTILLERYistillery",
        "isCorrect": false,
        "rationale": "'DISTILLERYistillery' significa 'Destilaria', não 'Metrópole'."
      },
      {
        "id": "C",
        "text": "CONDIMENTondiment",
        "isCorrect": false,
        "rationale": "'CONDIMENTondiment' significa 'Condimento / Molho de Acompanhamento', não 'Metrópole'."
      },
      {
        "id": "D",
        "text": "MICROCLIMATEicroclimate",
        "isCorrect": false,
        "rationale": "'MICROCLIMATEicroclimate' significa 'Microclima', não 'Metrópole'."
      }
    ]
  },
  {
    "id": "sql-gf-d-06",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Territory",
    "wordPt": "Território Soberano",
    "phonetic": "ˈtɛr.əˌtɔːr.i",
    "sentence": "Nations protect the geographic integrity of their sovereign _________.",
    "sentencePt": "Nações protegem a integridade geográfica de seu território soberano.",
    "exampleEn": "Nations protect the geographic integrity of their sovereign Territory.",
    "examplePt": "Nações protegem a integridade geográfica de seu território soberano.",
    "gapWord": "Territory",
    "question": "Como se diz 'Território Soberano' em inglês?",
    "hint": "Área geográfica sob jurisdição legal de um Estado.",
    "rationale": "'Territory' (ˈtɛr.əˌtɔːr.i): Área geográfica sob jurisdição legal de um Estado.",
    "options": [
      {
        "id": "A",
        "text": "TRIBUTARYributary",
        "isCorrect": false,
        "rationale": "'TRIBUTARYributary' significa 'Afluente Fluvial', não 'Território Soberano'."
      },
      {
        "id": "B",
        "text": "Territory",
        "isCorrect": true,
        "rationale": "'Territory' é a tradução correta para 'Território Soberano'."
      },
      {
        "id": "C",
        "text": "CONFECTIONERYonfectionery",
        "isCorrect": false,
        "rationale": "'CONFECTIONERYonfectionery' significa 'Confeitaria / Doceria Fina', não 'Território Soberano'."
      },
      {
        "id": "D",
        "text": "BIODIVERSITYiodiversity",
        "isCorrect": false,
        "rationale": "'BIODIVERSITYiodiversity' significa 'Biodiversidade Geográfica', não 'Território Soberano'."
      }
    ]
  },
  {
    "id": "sql-gf-d-07",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Sovereignty",
    "wordPt": "Soberania Nacional",
    "phonetic": "ˈsɑːv.rən.ti",
    "sentence": "Treaties respect each nation's independent state _________.",
    "sentencePt": "Tratados respeitam a soberania estatal independente de cada nação.",
    "exampleEn": "Treaties respect each nation's independent state Sovereignty.",
    "examplePt": "Tratados respeitam a soberania estatal independente de cada nação.",
    "gapWord": "Sovereignty",
    "question": "Como se diz 'Soberania Nacional' em inglês?",
    "hint": "Poder supremo e independente de autodeterminação de um país.",
    "rationale": "'Sovereignty' (ˈsɑːv.rən.ti): Poder supremo e independente de autodeterminação de um país.",
    "options": [
      {
        "id": "A",
        "text": "AGRICULTUREgriculture",
        "isCorrect": false,
        "rationale": "'AGRICULTUREgriculture' significa 'Agricultura', não 'Soberania Nacional'."
      },
      {
        "id": "B",
        "text": "HEMISPHERICemispheric",
        "isCorrect": false,
        "rationale": "'HEMISPHERICemispheric' significa 'Hemisférico', não 'Soberania Nacional'."
      },
      {
        "id": "C",
        "text": "Sovereignty",
        "isCorrect": true,
        "rationale": "'Sovereignty' é a tradução correta para 'Soberania Nacional'."
      },
      {
        "id": "D",
        "text": "ENTREEntree",
        "isCorrect": false,
        "rationale": "'ENTREEntree' significa 'Prato Principal', não 'Soberania Nacional'."
      }
    ]
  },
  {
    "id": "sql-gf-d-08",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Geopolitics",
    "wordPt": "Geopolítica",
    "phonetic": "ˌdʒiː.oʊˈpɑː.lə.tɪks",
    "sentence": "International trade routes are shaped by maritime _________.",
    "sentencePt": "Rotas de comércio internacional são moldadas pela geopolítica marítima.",
    "exampleEn": "International trade routes are shaped by maritime Geopolitics.",
    "examplePt": "Rotas de comércio internacional são moldadas pela geopolítica marítima.",
    "gapWord": "Geopolitics",
    "question": "Como se diz 'Geopolítica' em inglês?",
    "hint": "Estudo das influências da geografia nas relações de poder entre nações.",
    "rationale": "'Geopolitics' (ˌdʒiː.oʊˈpɑː.lə.tɪks): Estudo das influências da geografia nas relações de poder entre nações.",
    "options": [
      {
        "id": "A",
        "text": "MICROCLIMATEicroclimate",
        "isCorrect": false,
        "rationale": "'MICROCLIMATEicroclimate' significa 'Microclima', não 'Geopolítica'."
      },
      {
        "id": "B",
        "text": "RESTAURATEURestaurateur",
        "isCorrect": false,
        "rationale": "'RESTAURATEURestaurateur' significa 'Restaurateur / Dono de Restaurante', não 'Geopolítica'."
      },
      {
        "id": "C",
        "text": "CARTOGRAPHYartography",
        "isCorrect": false,
        "rationale": "'CARTOGRAPHYartography' significa 'Cartografia', não 'Geopolítica'."
      },
      {
        "id": "D",
        "text": "Geopolitics",
        "isCorrect": true,
        "rationale": "'Geopolitics' é a tradução correta para 'Geopolítica'."
      }
    ]
  },
  {
    "id": "sql-gf-d-09",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Hemispheric",
    "wordPt": "Hemisférico",
    "phonetic": "ˌhɛm.əˈsfɪr.ɪk",
    "sentence": "Trade agreements fostered broad _________ cooperation across the Americas.",
    "sentencePt": "Acordos comerciais fomentaram ampla cooperação hemisférica nas Américas.",
    "exampleEn": "Trade agreements fostered broad Hemispheric cooperation across the Americas.",
    "examplePt": "Acordos comerciais fomentaram ampla cooperação hemisférica nas Américas.",
    "gapWord": "Hemispheric",
    "question": "Como se diz 'Hemisférico' em inglês?",
    "hint": "Relativo a todo um hemisfério da Terra.",
    "rationale": "'Hemispheric' (ˌhɛm.əˈsfɪr.ɪk): Relativo a todo um hemisfério da Terra.",
    "options": [
      {
        "id": "A",
        "text": "Hemispheric",
        "isCorrect": true,
        "rationale": "'Hemispheric' é a tradução correta para 'Hemisférico'."
      },
      {
        "id": "B",
        "text": "AGRICULTUREgriculture",
        "isCorrect": false,
        "rationale": "'AGRICULTUREgriculture' significa 'Agricultura', não 'Hemisférico'."
      },
      {
        "id": "C",
        "text": "JURISDICTIONurisdiction",
        "isCorrect": false,
        "rationale": "'JURISDICTIONurisdiction' significa 'Jurisdição Territorial', não 'Hemisférico'."
      },
      {
        "id": "D",
        "text": "VITICULTUREiticulture",
        "isCorrect": false,
        "rationale": "'VITICULTUREiticulture' significa 'Viticultura', não 'Hemisférico'."
      }
    ]
  },
  {
    "id": "sql-gf-d-10",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Subcontinent",
    "wordPt": "Subcontinente",
    "phonetic": "ˌsʌbˈkɑːn.tə.nənt",
    "sentence": "India occupies a distinct geographical Asian _________.",
    "sentencePt": "A Índia ocupa um subcontinente asiático geograficamente distinto.",
    "exampleEn": "India occupies a distinct geographical Asian Subcontinent.",
    "examplePt": "A Índia ocupa um subcontinente asiático geograficamente distinto.",
    "gapWord": "Subcontinent",
    "question": "Como se diz 'Subcontinente' em inglês?",
    "hint": "Grande massa continental diferenciada que faz parte de um continente.",
    "rationale": "'Subcontinent' (ˌsʌbˈkɑːn.tə.nənt): Grande massa continental diferenciada que faz parte de um continente.",
    "options": [
      {
        "id": "A",
        "text": "CULINARYulinary",
        "isCorrect": false,
        "rationale": "'CULINARYulinary' significa 'Culinário / Arte Culinária', não 'Subcontinente'."
      },
      {
        "id": "B",
        "text": "Subcontinent",
        "isCorrect": true,
        "rationale": "'Subcontinent' é a tradução correta para 'Subcontinente'."
      },
      {
        "id": "C",
        "text": "SOVEREIGNTYovereignty",
        "isCorrect": false,
        "rationale": "'SOVEREIGNTYovereignty' significa 'Soberania Nacional', não 'Subcontinente'."
      },
      {
        "id": "D",
        "text": "HOSPITALITYospitality",
        "isCorrect": false,
        "rationale": "'HOSPITALITYospitality' significa 'Hospitalidade / Hotelaria & Gastronomia', não 'Subcontinente'."
      }
    ]
  },
  {
    "id": "sql-gf-d-11",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Peninsula",
    "wordPt": "Península",
    "phonetic": "pəˈnɪn.sə.lə",
    "sentence": "Florida is a subtropical Atlantic _________ surrounded by water on three sides.",
    "sentencePt": "A Flórida é uma península atlântica subtropical cercada por água em três lados.",
    "exampleEn": "Florida is a subtropical Atlantic Peninsula surrounded by water on three sides.",
    "examplePt": "A Flórida é uma península atlântica subtropical cercada por água em três lados.",
    "gapWord": "Peninsula",
    "question": "Como se diz 'Península' em inglês?",
    "hint": "Extensão de terra cercada de água por quase todos os lados.",
    "rationale": "'Peninsula' (pəˈnɪn.sə.lə): Extensão de terra cercada de água por quase todos os lados.",
    "options": [
      {
        "id": "A",
        "text": "ELEVATIONlevation",
        "isCorrect": false,
        "rationale": "'ELEVATIONlevation' significa 'Elevação / Altitude', não 'Península'."
      },
      {
        "id": "B",
        "text": "SUBSISTENCEubsistence",
        "isCorrect": false,
        "rationale": "'SUBSISTENCEubsistence' significa 'Subsistência / Autoconsumo', não 'Península'."
      },
      {
        "id": "C",
        "text": "Peninsula",
        "isCorrect": true,
        "rationale": "'Peninsula' é a tradução correta para 'Península'."
      },
      {
        "id": "D",
        "text": "NUTRIMENTSutriments",
        "isCorrect": false,
        "rationale": "'NUTRIMENTSutriments' significa 'Nutrientes Vitais', não 'Península'."
      }
    ]
  },
  {
    "id": "sql-gf-d-12",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Biodiversity",
    "wordPt": "Biodiversidade Geográfica",
    "phonetic": "ˌbaɪ.oʊ.daɪˈvɜːr.sə.ti",
    "sentence": "Tropical cloud forests are global hotspots of floral _________.",
    "sentencePt": "Florestas tropicais de altitude são centros mundiais de biodiversidade vegetal.",
    "exampleEn": "Tropical cloud forests are global hotspots of floral Biodiversity.",
    "examplePt": "Florestas tropicais de altitude são centros mundiais de biodiversidade vegetal.",
    "gapWord": "Biodiversity",
    "question": "Como se diz 'Biodiversidade Geográfica' em inglês?",
    "hint": "Variedade de formas vivas que povoam determinado bioma.",
    "rationale": "'Biodiversity' (ˌbaɪ.oʊ.daɪˈvɜːr.sə.ti): Variedade de formas vivas que povoam determinado bioma.",
    "options": [
      {
        "id": "A",
        "text": "MUNICIPALITYunicipality",
        "isCorrect": false,
        "rationale": "'MUNICIPALITYunicipality' significa 'Município', não 'Biodiversidade Geográfica'."
      },
      {
        "id": "B",
        "text": "SEASONINGeasoning",
        "isCorrect": false,
        "rationale": "'SEASONINGeasoning' significa 'Tempero / Condimentação', não 'Biodiversidade Geográfica'."
      },
      {
        "id": "C",
        "text": "DELICACYelicacy",
        "isCorrect": false,
        "rationale": "'DELICACYelicacy' significa 'Iguaria Gastronômica', não 'Biodiversidade Geográfica'."
      },
      {
        "id": "D",
        "text": "Biodiversity",
        "isCorrect": true,
        "rationale": "'Biodiversity' é a tradução correta para 'Biodiversidade Geográfica'."
      }
    ]
  },
  {
    "id": "sql-gf-d-13",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Microclimate",
    "wordPt": "Microclima",
    "phonetic": "ˈmaɪ.kroʊˌklaɪ.mət",
    "sentence": "The sheltered valley creates an ideal wine grape _________.",
    "sentencePt": "O vale abrigado cria um microclima ideal para uvas viníferas.",
    "exampleEn": "The sheltered valley creates an ideal wine grape Microclimate.",
    "examplePt": "O vale abrigado cria um microclima ideal para uvas viníferas.",
    "gapWord": "Microclimate",
    "question": "Como se diz 'Microclima' em inglês?",
    "hint": "Condições climáticas particulares restritas a uma pequena área.",
    "rationale": "'Microclimate' (ˈmaɪ.kroʊˌklaɪ.mət): Condições climáticas particulares restritas a uma pequena área.",
    "options": [
      {
        "id": "A",
        "text": "Microclimate",
        "isCorrect": true,
        "rationale": "'Microclimate' é a tradução correta para 'Microclima'."
      },
      {
        "id": "B",
        "text": "MUNICIPALITYunicipality",
        "isCorrect": false,
        "rationale": "'MUNICIPALITYunicipality' significa 'Município', não 'Microclima'."
      },
      {
        "id": "C",
        "text": "EPICUREANpicurean",
        "isCorrect": false,
        "rationale": "'EPICUREANpicurean' significa 'Epicurista / Apreciador Gourmet', não 'Microclima'."
      },
      {
        "id": "D",
        "text": "FERMENTATIONermentation",
        "isCorrect": false,
        "rationale": "'FERMENTATIONermentation' significa 'Fermentação Culinária', não 'Microclima'."
      }
    ]
  },
  {
    "id": "sql-gf-d-14",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Urbanization",
    "wordPt": "Urbanização",
    "phonetic": "ˌɜːr.bən.əˈzeɪ.ʃən",
    "sentence": "Rapid rural-to-city migration accelerated global _________.",
    "sentencePt": "Rápida migração rural para as cidades acelerou a urbanização global.",
    "exampleEn": "Rapid rural-to-city migration accelerated global Urbanization.",
    "examplePt": "Rápida migração rural para as cidades acelerou a urbanização global.",
    "gapWord": "Urbanization",
    "question": "Como se diz 'Urbanização' em inglês?",
    "hint": "Crescimento da proporção da população que vive em áreas urbanas.",
    "rationale": "'Urbanization' (ˌɜːr.bən.əˈzeɪ.ʃən): Crescimento da proporção da população que vive em áreas urbanas.",
    "options": [
      {
        "id": "A",
        "text": "CALORICaloric",
        "isCorrect": false,
        "rationale": "'CALORICaloric' significa 'Calórico / Valor Energético', não 'Urbanização'."
      },
      {
        "id": "B",
        "text": "Urbanization",
        "isCorrect": true,
        "rationale": "'Urbanization' é a tradução correta para 'Urbanização'."
      },
      {
        "id": "C",
        "text": "ESTUARYstuary",
        "isCorrect": false,
        "rationale": "'ESTUARYstuary' significa 'Estuário Fluvial', não 'Urbanização'."
      },
      {
        "id": "D",
        "text": "MUNICIPALITYunicipality",
        "isCorrect": false,
        "rationale": "'MUNICIPALITYunicipality' significa 'Município', não 'Urbanização'."
      }
    ]
  },
  {
    "id": "sql-gf-d-15",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Settlement",
    "wordPt": "Povoamento / Assentamento Humano",
    "phonetic": "ˈsɛt.əl.mənt",
    "sentence": "Archaeologists uncovered an ancient prehistoric river _________.",
    "sentencePt": "Arqueólogos descobriram um antigo assentamento humano pré-histórico no rio.",
    "exampleEn": "Archaeologists uncovered an ancient prehistoric river Settlement.",
    "examplePt": "Arqueólogos descobriram um antigo assentamento humano pré-histórico no rio.",
    "gapWord": "Settlement",
    "question": "Como se diz 'Povoamento / Assentamento Humano' em inglês?",
    "hint": "Comunidade ou aldeia fundada por colonizadores ou povos.",
    "rationale": "'Settlement' (ˈsɛt.əl.mənt): Comunidade ou aldeia fundada por colonizadores ou povos.",
    "options": [
      {
        "id": "A",
        "text": "DISTILLERYistillery",
        "isCorrect": false,
        "rationale": "'DISTILLERYistillery' significa 'Destilaria', não 'Povoamento / Assentamento Humano'."
      },
      {
        "id": "B",
        "text": "ENTREEntree",
        "isCorrect": false,
        "rationale": "'ENTREEntree' significa 'Prato Principal', não 'Povoamento / Assentamento Humano'."
      },
      {
        "id": "C",
        "text": "Settlement",
        "isCorrect": true,
        "rationale": "'Settlement' é a tradução correta para 'Povoamento / Assentamento Humano'."
      },
      {
        "id": "D",
        "text": "HOSPITALITYospitality",
        "isCorrect": false,
        "rationale": "'HOSPITALITYospitality' significa 'Hospitalidade / Hotelaria & Gastronomia', não 'Povoamento / Assentamento Humano'."
      }
    ]
  },
  {
    "id": "sql-gf-d-16",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Jurisdiction",
    "wordPt": "Jurisdição Territorial",
    "phonetic": "ˌdʒʊr.ɪsˈdɪk.ʃən",
    "sentence": "Maritime police operate within coastal waters _________.",
    "sentencePt": "A polícia marítima atua dentro da jurisdição territorial de águas costeiras.",
    "exampleEn": "Maritime police operate within coastal waters Jurisdiction.",
    "examplePt": "A polícia marítima atua dentro da jurisdição territorial de águas costeiras.",
    "gapWord": "Jurisdiction",
    "question": "Como se diz 'Jurisdição Territorial' em inglês?",
    "hint": "Poder e competência legal territorial de aplicar as leis.",
    "rationale": "'Jurisdiction' (ˌdʒʊr.ɪsˈdɪk.ʃən): Poder e competência legal territorial de aplicar as leis.",
    "options": [
      {
        "id": "A",
        "text": "DEMOGRAPHICSemographics",
        "isCorrect": false,
        "rationale": "'DEMOGRAPHICSemographics' significa 'Dados Demográficos / Demografia', não 'Jurisdição Territorial'."
      },
      {
        "id": "B",
        "text": "GASTRONOMYastronomy",
        "isCorrect": false,
        "rationale": "'GASTRONOMYastronomy' significa 'Gastronomia', não 'Jurisdição Territorial'."
      },
      {
        "id": "C",
        "text": "HEMISPHERICemispheric",
        "isCorrect": false,
        "rationale": "'HEMISPHERICemispheric' significa 'Hemisférico', não 'Jurisdição Territorial'."
      },
      {
        "id": "D",
        "text": "Jurisdiction",
        "isCorrect": true,
        "rationale": "'Jurisdiction' é a tradução correta para 'Jurisdição Territorial'."
      }
    ]
  },
  {
    "id": "sql-gf-d-17",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Municipality",
    "wordPt": "Município",
    "phonetic": "mjuːˌnɪs.əˈpæl.ə.ti",
    "sentence": "The local _________ approved public transit improvements.",
    "sentencePt": "O município local aprovou melhorias no transporte público.",
    "exampleEn": "The local Municipality approved public transit improvements.",
    "examplePt": "O município local aprovou melhorias no transporte público.",
    "gapWord": "Municipality",
    "question": "Como se diz 'Município' em inglês?",
    "hint": "Divisão territorial autônoma administrada por prefeitura.",
    "rationale": "'Municipality' (mjuːˌnɪs.əˈpæl.ə.ti): Divisão territorial autônoma administrada por prefeitura.",
    "options": [
      {
        "id": "A",
        "text": "Municipality",
        "isCorrect": true,
        "rationale": "'Municipality' é a tradução correta para 'Município'."
      },
      {
        "id": "B",
        "text": "HARVESTarvest",
        "isCorrect": false,
        "rationale": "'HARVESTarvest' significa 'Colheita Agrícola', não 'Município'."
      },
      {
        "id": "C",
        "text": "PENINSULAeninsula",
        "isCorrect": false,
        "rationale": "'PENINSULAeninsula' significa 'Península', não 'Município'."
      },
      {
        "id": "D",
        "text": "RESTAURATEURestaurateur",
        "isCorrect": false,
        "rationale": "'RESTAURATEURestaurateur' significa 'Restaurateur / Dono de Restaurante', não 'Município'."
      }
    ]
  },
  {
    "id": "sql-gf-d-18",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Estuary",
    "wordPt": "Estuário Fluvial",
    "phonetic": "ˈɛs.tʃuˌɛr.i",
    "sentence": "Where freshwater rivers meet ocean tides is an _________.",
    "sentencePt": "Onde os rios de água doce encontram as marés do oceano é um estuário.",
    "exampleEn": "Where freshwater rivers meet ocean tides is an Estuary.",
    "examplePt": "Onde os rios de água doce encontram as marés do oceano é um estuário.",
    "gapWord": "Estuary",
    "question": "Como se diz 'Estuário Fluvial' em inglês?",
    "hint": "Foz larga de rio aberta onde água doce se mistura à água do mar.",
    "rationale": "'Estuary' (ˈɛs.tʃuˌɛr.i): Foz larga de rio aberta onde água doce se mistura à água do mar.",
    "options": [
      {
        "id": "A",
        "text": "SUBCONTINENTubcontinent",
        "isCorrect": false,
        "rationale": "'SUBCONTINENTubcontinent' significa 'Subcontinente', não 'Estuário Fluvial'."
      },
      {
        "id": "B",
        "text": "Estuary",
        "isCorrect": true,
        "rationale": "'Estuary' é a tradução correta para 'Estuário Fluvial'."
      },
      {
        "id": "C",
        "text": "HORTICULTUREorticulture",
        "isCorrect": false,
        "rationale": "'HORTICULTUREorticulture' significa 'Horticultura', não 'Estuário Fluvial'."
      },
      {
        "id": "D",
        "text": "MICROCLIMATEicroclimate",
        "isCorrect": false,
        "rationale": "'MICROCLIMATEicroclimate' significa 'Microclima', não 'Estuário Fluvial'."
      }
    ]
  },
  {
    "id": "sql-gf-d-19",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Tributary",
    "wordPt": "Afluente Fluvial",
    "phonetic": "ˈtrɪb.jəˌtɛr.i",
    "sentence": "The Rio Negro is a major northern _________ of the Amazon River.",
    "sentencePt": "O Rio Negro é um grande afluente do norte do Rio Amazonas.",
    "exampleEn": "The Rio Negro is a major northern Tributary of the Amazon River.",
    "examplePt": "O Rio Negro é um grande afluente do norte do Rio Amazonas.",
    "gapWord": "Tributary",
    "question": "Como se diz 'Afluente Fluvial' em inglês?",
    "hint": "Rio menor que deságua em um rio principal maior.",
    "rationale": "'Tributary' (ˈtrɪb.jəˌtɛr.i): Rio menor que deságua em um rio principal maior.",
    "options": [
      {
        "id": "A",
        "text": "FERMENTATIONermentation",
        "isCorrect": false,
        "rationale": "'FERMENTATIONermentation' significa 'Fermentação Culinária', não 'Afluente Fluvial'."
      },
      {
        "id": "B",
        "text": "BIODIVERSITYiodiversity",
        "isCorrect": false,
        "rationale": "'BIODIVERSITYiodiversity' significa 'Biodiversidade Geográfica', não 'Afluente Fluvial'."
      },
      {
        "id": "C",
        "text": "Tributary",
        "isCorrect": true,
        "rationale": "'Tributary' é a tradução correta para 'Afluente Fluvial'."
      },
      {
        "id": "D",
        "text": "SEASONINGeasoning",
        "isCorrect": false,
        "rationale": "'SEASONINGeasoning' significa 'Tempero / Condimentação', não 'Afluente Fluvial'."
      }
    ]
  },
  {
    "id": "sql-gf-d-20",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Elevation",
    "wordPt": "Elevação / Altitude",
    "phonetic": "ˌɛl.əˈveɪ.ʃən",
    "sentence": "High atmospheric _________ reduces air density for hikers.",
    "sentencePt": "Alta elevação atmosférica reduz a densidade do ar para caminhantes.",
    "exampleEn": "High atmospheric Elevation reduces air density for hikers.",
    "examplePt": "Alta elevação atmosférica reduz a densidade do ar para caminhantes.",
    "gapWord": "Elevation",
    "question": "Como se diz 'Elevação / Altitude' em inglês?",
    "hint": "Altura de um ponto geográfico em relação ao nível do mar.",
    "rationale": "'Elevation' (ˌɛl.əˈveɪ.ʃən): Altura de um ponto geográfico em relação ao nível do mar.",
    "options": [
      {
        "id": "A",
        "text": "TOPOGRAPHYopography",
        "isCorrect": false,
        "rationale": "'TOPOGRAPHYopography' significa 'Topografia', não 'Elevação / Altitude'."
      },
      {
        "id": "B",
        "text": "SETTLEMENTettlement",
        "isCorrect": false,
        "rationale": "'SETTLEMENTettlement' significa 'Povoamento / Assentamento Humano', não 'Elevação / Altitude'."
      },
      {
        "id": "C",
        "text": "SUBCONTINENTubcontinent",
        "isCorrect": false,
        "rationale": "'SUBCONTINENTubcontinent' significa 'Subcontinente', não 'Elevação / Altitude'."
      },
      {
        "id": "D",
        "text": "Elevation",
        "isCorrect": true,
        "rationale": "'Elevation' é a tradução correta para 'Elevação / Altitude'."
      }
    ]
  },
  {
    "id": "sql-gf-d-21",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Gastronomy",
    "wordPt": "Gastronomia",
    "phonetic": "ɡæˈstrɑː.nə.mi",
    "sentence": "Paris is internationally celebrated as a capital of haute _________.",
    "sentencePt": "Paris é internacionalmente celebrada como uma capital da alta gastronomia.",
    "exampleEn": "Paris is internationally celebrated as a capital of haute Gastronomy.",
    "examplePt": "Paris é internacionalmente celebrada como uma capital da alta gastronomia.",
    "gapWord": "Gastronomy",
    "question": "Como se diz 'Gastronomia' em inglês?",
    "hint": "Arte e conhecimento de preparar, apreciar e servir boa comida.",
    "rationale": "'Gastronomy' (ɡæˈstrɑː.nə.mi): Arte e conhecimento de preparar, apreciar e servir boa comida.",
    "options": [
      {
        "id": "A",
        "text": "Gastronomy",
        "isCorrect": true,
        "rationale": "'Gastronomy' é a tradução correta para 'Gastronomia'."
      },
      {
        "id": "B",
        "text": "URBANIZATIONrbanization",
        "isCorrect": false,
        "rationale": "'URBANIZATIONrbanization' significa 'Urbanização', não 'Gastronomia'."
      },
      {
        "id": "C",
        "text": "APPETIZERppetizer",
        "isCorrect": false,
        "rationale": "'APPETIZERppetizer' significa 'Aperitivo / Entrada', não 'Gastronomia'."
      },
      {
        "id": "D",
        "text": "ESTUARYstuary",
        "isCorrect": false,
        "rationale": "'ESTUARYstuary' significa 'Estuário Fluvial', não 'Gastronomia'."
      }
    ]
  },
  {
    "id": "sql-gf-d-22",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Delicacy",
    "wordPt": "Iguaria Gastronômica",
    "phonetic": "ˈdɛl.ə.kə.si",
    "sentence": "Truffles are a rare and prized seasonal culinary _________.",
    "sentencePt": "Trufas são uma iguaria culinária sazonal rara e estimada.",
    "exampleEn": "Truffles are a rare and prized seasonal culinary Delicacy.",
    "examplePt": "Trufas são uma iguaria culinária sazonal rara e estimada.",
    "gapWord": "Delicacy",
    "question": "Como se diz 'Iguaria Gastronômica' em inglês?",
    "hint": "Prato ou alimento refinado, raro e de sabor requintado.",
    "rationale": "'Delicacy' (ˈdɛl.ə.kə.si): Prato ou alimento refinado, raro e de sabor requintado.",
    "options": [
      {
        "id": "A",
        "text": "CONDIMENTondiment",
        "isCorrect": false,
        "rationale": "'CONDIMENTondiment' significa 'Condimento / Molho de Acompanhamento', não 'Iguaria Gastronômica'."
      },
      {
        "id": "B",
        "text": "Delicacy",
        "isCorrect": true,
        "rationale": "'Delicacy' é a tradução correta para 'Iguaria Gastronômica'."
      },
      {
        "id": "C",
        "text": "DISTILLERYistillery",
        "isCorrect": false,
        "rationale": "'DISTILLERYistillery' significa 'Destilaria', não 'Iguaria Gastronômica'."
      },
      {
        "id": "D",
        "text": "CALORICaloric",
        "isCorrect": false,
        "rationale": "'CALORICaloric' significa 'Calórico / Valor Energético', não 'Iguaria Gastronômica'."
      }
    ]
  },
  {
    "id": "sql-gf-d-23",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Nourishment",
    "wordPt": "Nutrimento / Nutrição",
    "phonetic": "ˈnɜːr.ɪʃ.mənt",
    "sentence": "Balanced whole foods provide vital biological _________.",
    "sentencePt": "Alimentos integrais equilibrados fornecem nutrimento biológico vital.",
    "exampleEn": "Balanced whole foods provide vital biological Nourishment.",
    "examplePt": "Alimentos integrais equilibrados fornecem nutrimento biológico vital.",
    "gapWord": "Nourishment",
    "question": "Como se diz 'Nutrimento / Nutrição' em inglês?",
    "hint": "Substâncias nutritivas necessárias para manter a vida e o vigor.",
    "rationale": "'Nourishment' (ˈnɜːr.ɪʃ.mənt): Substâncias nutritivas necessárias para manter a vida e o vigor.",
    "options": [
      {
        "id": "A",
        "text": "CULINARYulinary",
        "isCorrect": false,
        "rationale": "'CULINARYulinary' significa 'Culinário / Arte Culinária', não 'Nutrimento / Nutrição'."
      },
      {
        "id": "B",
        "text": "TERRITORYerritory",
        "isCorrect": false,
        "rationale": "'TERRITORYerritory' significa 'Território Soberano', não 'Nutrimento / Nutrição'."
      },
      {
        "id": "C",
        "text": "Nourishment",
        "isCorrect": true,
        "rationale": "'Nourishment' é a tradução correta para 'Nutrimento / Nutrição'."
      },
      {
        "id": "D",
        "text": "ARCHIPELAGOrchipelago",
        "isCorrect": false,
        "rationale": "'ARCHIPELAGOrchipelago' significa 'Arquipélago', não 'Nutrimento / Nutrição'."
      }
    ]
  },
  {
    "id": "sql-gf-d-24",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Culinary",
    "wordPt": "Culinário / Arte Culinária",
    "phonetic": "ˈkʌl.əˌnɛr.i",
    "sentence": "She attended a prestigious institute to hone her _________ skills.",
    "sentencePt": "Ela frequentou um instituto prestigiado para aprimorar suas habilidades culinárias.",
    "exampleEn": "She attended a prestigious institute to hone her Culinary skills.",
    "examplePt": "Ela frequentou um instituto prestigiado para aprimorar suas habilidades culinárias.",
    "gapWord": "Culinary",
    "question": "Como se diz 'Culinário / Arte Culinária' em inglês?",
    "hint": "Relativo à cozinha, arte e técnicas de preparo de alimentos.",
    "rationale": "'Culinary' (ˈkʌl.əˌnɛr.i): Relativo à cozinha, arte e técnicas de preparo de alimentos.",
    "options": [
      {
        "id": "A",
        "text": "SUBSISTENCEubsistence",
        "isCorrect": false,
        "rationale": "'SUBSISTENCEubsistence' significa 'Subsistência / Autoconsumo', não 'Culinário / Arte Culinária'."
      },
      {
        "id": "B",
        "text": "TOPOGRAPHYopography",
        "isCorrect": false,
        "rationale": "'TOPOGRAPHYopography' significa 'Topografia', não 'Culinário / Arte Culinária'."
      },
      {
        "id": "C",
        "text": "EPICUREANpicurean",
        "isCorrect": false,
        "rationale": "'EPICUREANpicurean' significa 'Epicurista / Apreciador Gourmet', não 'Culinário / Arte Culinária'."
      },
      {
        "id": "D",
        "text": "Culinary",
        "isCorrect": true,
        "rationale": "'Culinary' é a tradução correta para 'Culinário / Arte Culinária'."
      }
    ]
  },
  {
    "id": "sql-gf-d-25",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Confectionery",
    "wordPt": "Confeitaria / Doceria Fina",
    "phonetic": "kənˈfɛk.ʃəˌnɛr.i",
    "sentence": "Handmade Belgian pralines are finest works of master _________.",
    "sentencePt": "Pralinês belgas artesanais são as mais finas obras de confeitaria mestre.",
    "exampleEn": "Handmade Belgian pralines are finest works of master Confectionery.",
    "examplePt": "Pralinês belgas artesanais são as mais finas obras de confeitaria mestre.",
    "gapWord": "Confectionery",
    "question": "Como se diz 'Confeitaria / Doceria Fina' em inglês?",
    "hint": "Arte e comércio de fabricação de doces, bombons e chocolates refinados.",
    "rationale": "'Confectionery' (kənˈfɛk.ʃəˌnɛr.i): Arte e comércio de fabricação de doces, bombons e chocolates refinados.",
    "options": [
      {
        "id": "A",
        "text": "Confectionery",
        "isCorrect": true,
        "rationale": "'Confectionery' é a tradução correta para 'Confeitaria / Doceria Fina'."
      },
      {
        "id": "B",
        "text": "CULINARYulinary",
        "isCorrect": false,
        "rationale": "'CULINARYulinary' significa 'Culinário / Arte Culinária', não 'Confeitaria / Doceria Fina'."
      },
      {
        "id": "C",
        "text": "ELEVATIONlevation",
        "isCorrect": false,
        "rationale": "'ELEVATIONlevation' significa 'Elevação / Altitude', não 'Confeitaria / Doceria Fina'."
      },
      {
        "id": "D",
        "text": "PRESERVATIVEreservative",
        "isCorrect": false,
        "rationale": "'PRESERVATIVEreservative' significa 'Conservante Alimentar', não 'Confeitaria / Doceria Fina'."
      }
    ]
  },
  {
    "id": "sql-gf-d-26",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Fermentation",
    "wordPt": "Fermentação Culinária",
    "phonetic": "ˌfɜːr.mɛnˈteɪ.ʃən",
    "sentence": "Lactic acid _________ transforms fresh cabbage into tangy sauerkraut.",
    "sentencePt": "A fermentação lática transforma repolho fresco em chucrute aromático.",
    "exampleEn": "Lactic acid Fermentation transforms fresh cabbage into tangy sauerkraut.",
    "examplePt": "A fermentação lática transforma repolho fresco em chucrute aromático.",
    "gapWord": "Fermentation",
    "question": "Como se diz 'Fermentação Culinária' em inglês?",
    "hint": "Processo bioquímico anaeróbio de conversão de açúcares por leveduras/bactérias.",
    "rationale": "'Fermentation' (ˌfɜːr.mɛnˈteɪ.ʃən): Processo bioquímico anaeróbio de conversão de açúcares por leveduras/bactérias.",
    "options": [
      {
        "id": "A",
        "text": "CARTOGRAPHYartography",
        "isCorrect": false,
        "rationale": "'CARTOGRAPHYartography' significa 'Cartografia', não 'Fermentação Culinária'."
      },
      {
        "id": "B",
        "text": "Fermentation",
        "isCorrect": true,
        "rationale": "'Fermentation' é a tradução correta para 'Fermentação Culinária'."
      },
      {
        "id": "C",
        "text": "SUBCONTINENTubcontinent",
        "isCorrect": false,
        "rationale": "'SUBCONTINENTubcontinent' significa 'Subcontinente', não 'Fermentação Culinária'."
      },
      {
        "id": "D",
        "text": "HEMISPHERICemispheric",
        "isCorrect": false,
        "rationale": "'HEMISPHERICemispheric' significa 'Hemisférico', não 'Fermentação Culinária'."
      }
    ]
  },
  {
    "id": "sql-gf-d-27",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Pasteurization",
    "wordPt": "Pasteurização",
    "phonetic": "ˌpæs.tʃər.əˈzeɪ.ʃən",
    "sentence": "Thermal _________ eliminates harmful pathogens in raw dairy.",
    "sentencePt": "A pasteurização térmica elimina patógenos nocivos em laticínios crus.",
    "exampleEn": "Thermal Pasteurization eliminates harmful pathogens in raw dairy.",
    "examplePt": "A pasteurização térmica elimina patógenos nocivos em laticínios crus.",
    "gapWord": "Pasteurization",
    "question": "Como se diz 'Pasteurização' em inglês?",
    "hint": "Tratamento térmico que destrói microrganismos nocivos em alimentos.",
    "rationale": "'Pasteurization' (ˌpæs.tʃər.əˈzeɪ.ʃən): Tratamento térmico que destrói microrganismos nocivos em alimentos.",
    "options": [
      {
        "id": "A",
        "text": "SAVOURYavoury",
        "isCorrect": false,
        "rationale": "'SAVOURYavoury' significa 'Salgado / Umami', não 'Pasteurização'."
      },
      {
        "id": "B",
        "text": "SUBSISTENCEubsistence",
        "isCorrect": false,
        "rationale": "'SUBSISTENCEubsistence' significa 'Subsistência / Autoconsumo', não 'Pasteurização'."
      },
      {
        "id": "C",
        "text": "Pasteurization",
        "isCorrect": true,
        "rationale": "'Pasteurization' é a tradução correta para 'Pasteurização'."
      },
      {
        "id": "D",
        "text": "FERMENTATIONermentation",
        "isCorrect": false,
        "rationale": "'FERMENTATIONermentation' significa 'Fermentação Culinária', não 'Pasteurização'."
      }
    ]
  },
  {
    "id": "sql-gf-d-28",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Preservative",
    "wordPt": "Conservante Alimentar",
    "phonetic": "prɪˈzɜːr.və.tɪv",
    "sentence": "Natural lemon citric acid serves as an organic food _________.",
    "sentencePt": "O ácido cítrico do limão natural serve como conservante alimentar orgânico.",
    "exampleEn": "Natural lemon citric acid serves as an organic food Preservative.",
    "examplePt": "O ácido cítrico do limão natural serve como conservante alimentar orgânico.",
    "gapWord": "Preservative",
    "question": "Como se diz 'Conservante Alimentar' em inglês?",
    "hint": "Substância adicionada a alimentos para evitar deterioração.",
    "rationale": "'Preservative' (prɪˈzɜːr.və.tɪv): Substância adicionada a alimentos para evitar deterioração.",
    "options": [
      {
        "id": "A",
        "text": "ELEVATIONlevation",
        "isCorrect": false,
        "rationale": "'ELEVATIONlevation' significa 'Elevação / Altitude', não 'Conservante Alimentar'."
      },
      {
        "id": "B",
        "text": "FERMENTATIONermentation",
        "isCorrect": false,
        "rationale": "'FERMENTATIONermentation' significa 'Fermentação Culinária', não 'Conservante Alimentar'."
      },
      {
        "id": "C",
        "text": "HARVESTarvest",
        "isCorrect": false,
        "rationale": "'HARVESTarvest' significa 'Colheita Agrícola', não 'Conservante Alimentar'."
      },
      {
        "id": "D",
        "text": "Preservative",
        "isCorrect": true,
        "rationale": "'Preservative' é a tradução correta para 'Conservante Alimentar'."
      }
    ]
  },
  {
    "id": "sql-gf-d-29",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Condiment",
    "wordPt": "Condimento / Molho de Acompanhamento",
    "phonetic": "ˈkɑːn.də.mənt",
    "sentence": "Dijon mustard is a pungent traditional French _________.",
    "sentencePt": "A mostarda Dijon é um condimento francês tradicional pungente.",
    "exampleEn": "Dijon mustard is a pungent traditional French Condiment.",
    "examplePt": "A mostarda Dijon é um condimento francês tradicional pungente.",
    "gapWord": "Condiment",
    "question": "Como se diz 'Condimento / Molho de Acompanhamento' em inglês?",
    "hint": "Substância ou molho que se junta à comida para realçar o sabor.",
    "rationale": "'Condiment' (ˈkɑːn.də.mənt): Substância ou molho que se junta à comida para realçar o sabor.",
    "options": [
      {
        "id": "A",
        "text": "Condiment",
        "isCorrect": true,
        "rationale": "'Condiment' é a tradução correta para 'Condimento / Molho de Acompanhamento'."
      },
      {
        "id": "B",
        "text": "SOVEREIGNTYovereignty",
        "isCorrect": false,
        "rationale": "'SOVEREIGNTYovereignty' significa 'Soberania Nacional', não 'Condimento / Molho de Acompanhamento'."
      },
      {
        "id": "C",
        "text": "HEMISPHERICemispheric",
        "isCorrect": false,
        "rationale": "'HEMISPHERICemispheric' significa 'Hemisférico', não 'Condimento / Molho de Acompanhamento'."
      },
      {
        "id": "D",
        "text": "URBANIZATIONrbanization",
        "isCorrect": false,
        "rationale": "'URBANIZATIONrbanization' significa 'Urbanização', não 'Condimento / Molho de Acompanhamento'."
      }
    ]
  },
  {
    "id": "sql-gf-d-30",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Appetizer",
    "wordPt": "Aperitivo / Entrada",
    "phonetic": "ˈæp.əˌtaɪ.zər",
    "sentence": "Bruschetta was served as an Italian pre-dinner _________.",
    "sentencePt": "Bruschetta foi servida como um aperitivo italiano antes do jantar.",
    "exampleEn": "Bruschetta was served as an Italian pre-dinner Appetizer.",
    "examplePt": "Bruschetta foi servida como um aperitivo italiano antes do jantar.",
    "gapWord": "Appetizer",
    "question": "Como se diz 'Aperitivo / Entrada' em inglês?",
    "hint": "Pequena porção servida antes da refeição principal para abrir o apetite.",
    "rationale": "'Appetizer' (ˈæp.əˌtaɪ.zər): Pequena porção servida antes da refeição principal para abrir o apetite.",
    "options": [
      {
        "id": "A",
        "text": "DEMOGRAPHICSemographics",
        "isCorrect": false,
        "rationale": "'DEMOGRAPHICSemographics' significa 'Dados Demográficos / Demografia', não 'Aperitivo / Entrada'."
      },
      {
        "id": "B",
        "text": "Appetizer",
        "isCorrect": true,
        "rationale": "'Appetizer' é a tradução correta para 'Aperitivo / Entrada'."
      },
      {
        "id": "C",
        "text": "VITICULTUREiticulture",
        "isCorrect": false,
        "rationale": "'VITICULTUREiticulture' significa 'Viticultura', não 'Aperitivo / Entrada'."
      },
      {
        "id": "D",
        "text": "SOVEREIGNTYovereignty",
        "isCorrect": false,
        "rationale": "'SOVEREIGNTYovereignty' significa 'Soberania Nacional', não 'Aperitivo / Entrada'."
      }
    ]
  },
  {
    "id": "sql-gf-d-31",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Entree",
    "wordPt": "Prato Principal",
    "phonetic": "ˈɑːn.treɪ",
    "sentence": "The roasted duck breast was the centerpiece dinner _________.",
    "sentencePt": "O peito de pato assado foi o prato principal da refeição.",
    "exampleEn": "The roasted duck breast was the centerpiece dinner Entree.",
    "examplePt": "O peito de pato assado foi o prato principal da refeição.",
    "gapWord": "Entree",
    "question": "Como se diz 'Prato Principal' em inglês?",
    "hint": "Prato mais substancial e central de uma refeição formal.",
    "rationale": "'Entree' (ˈɑːn.treɪ): Prato mais substancial e central de uma refeição formal.",
    "options": [
      {
        "id": "A",
        "text": "CARBOHYDRATEarbohydrate",
        "isCorrect": false,
        "rationale": "'CARBOHYDRATEarbohydrate' significa 'Carboidrato', não 'Prato Principal'."
      },
      {
        "id": "B",
        "text": "ESTUARYstuary",
        "isCorrect": false,
        "rationale": "'ESTUARYstuary' significa 'Estuário Fluvial', não 'Prato Principal'."
      },
      {
        "id": "C",
        "text": "Entree",
        "isCorrect": true,
        "rationale": "'Entree' é a tradução correta para 'Prato Principal'."
      },
      {
        "id": "D",
        "text": "SOVEREIGNTYovereignty",
        "isCorrect": false,
        "rationale": "'SOVEREIGNTYovereignty' significa 'Soberania Nacional', não 'Prato Principal'."
      }
    ]
  },
  {
    "id": "sql-gf-d-32",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Refreshment",
    "wordPt": "Refresco / Lanche Leve",
    "phonetic": "rɪˈfrɛʃ.mənt",
    "sentence": "Chilled beverages and fruit canapés offered welcome _________.",
    "sentencePt": "Bebidas geladas e canapés de frutas ofereceram um bem-vindo refresco.",
    "exampleEn": "Chilled beverages and fruit canapés offered welcome Refreshment.",
    "examplePt": "Bebidas geladas e canapés de frutas ofereceram um bem-vindo refresco.",
    "gapWord": "Refreshment",
    "question": "Como se diz 'Refresco / Lanche Leve' em inglês?",
    "hint": "Alimento ou bebida leve que restabelece as forças e reidrata.",
    "rationale": "'Refreshment' (rɪˈfrɛʃ.mənt): Alimento ou bebida leve que restabelece as forças e reidrata.",
    "options": [
      {
        "id": "A",
        "text": "SETTLEMENTettlement",
        "isCorrect": false,
        "rationale": "'SETTLEMENTettlement' significa 'Povoamento / Assentamento Humano', não 'Refresco / Lanche Leve'."
      },
      {
        "id": "B",
        "text": "RESTAURATEURestaurateur",
        "isCorrect": false,
        "rationale": "'RESTAURATEURestaurateur' significa 'Restaurateur / Dono de Restaurante', não 'Refresco / Lanche Leve'."
      },
      {
        "id": "C",
        "text": "MUNICIPALITYunicipality",
        "isCorrect": false,
        "rationale": "'MUNICIPALITYunicipality' significa 'Município', não 'Refresco / Lanche Leve'."
      },
      {
        "id": "D",
        "text": "Refreshment",
        "isCorrect": true,
        "rationale": "'Refreshment' é a tradução correta para 'Refresco / Lanche Leve'."
      }
    ]
  },
  {
    "id": "sql-gf-d-33",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Sustenance",
    "wordPt": "Sustento Alimentar / Subsistência",
    "phonetic": "ˈsʌs.tə.nəns",
    "sentence": "Grain stores provided vital winter _________ for remote settlements.",
    "sentencePt": "Armazéns de grãos forneceram sustento alimentar vital no inverno para povoados remotos.",
    "exampleEn": "Grain stores provided vital winter Sustenance for remote settlements.",
    "examplePt": "Armazéns de grãos forneceram sustento alimentar vital no inverno para povoados remotos.",
    "gapWord": "Sustenance",
    "question": "Como se diz 'Sustento Alimentar / Subsistência' em inglês?",
    "hint": "Alimento que sustenta a vida diária e a energia física.",
    "rationale": "'Sustenance' (ˈsʌs.tə.nəns): Alimento que sustenta a vida diária e a energia física.",
    "options": [
      {
        "id": "A",
        "text": "Sustenance",
        "isCorrect": true,
        "rationale": "'Sustenance' é a tradução correta para 'Sustento Alimentar / Subsistência'."
      },
      {
        "id": "B",
        "text": "AGRICULTUREgriculture",
        "isCorrect": false,
        "rationale": "'AGRICULTUREgriculture' significa 'Agricultura', não 'Sustento Alimentar / Subsistência'."
      },
      {
        "id": "C",
        "text": "VITICULTUREiticulture",
        "isCorrect": false,
        "rationale": "'VITICULTUREiticulture' significa 'Viticultura', não 'Sustento Alimentar / Subsistência'."
      },
      {
        "id": "D",
        "text": "PRESERVATIVEreservative",
        "isCorrect": false,
        "rationale": "'PRESERVATIVEreservative' significa 'Conservante Alimentar', não 'Sustento Alimentar / Subsistência'."
      }
    ]
  },
  {
    "id": "sql-gf-d-34",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Viticulture",
    "wordPt": "Viticultura",
    "phonetic": "ˈvɪt.ɪˌkʌl.tʃər",
    "sentence": "Bordeaux is renowned worldwide for excellence in grape _________.",
    "sentencePt": "Bordeaux é renomado mundialmente por excelência na viticultura de uvas.",
    "exampleEn": "Bordeaux is renowned worldwide for excellence in grape Viticulture.",
    "examplePt": "Bordeaux é renomado mundialmente por excelência na viticultura de uvas.",
    "gapWord": "Viticulture",
    "question": "Como se diz 'Viticultura' em inglês?",
    "hint": "Cultivo e ciência agronômica da videira para produção de vinhos.",
    "rationale": "'Viticulture' (ˈvɪt.ɪˌkʌl.tʃər): Cultivo e ciência agronômica da videira para produção de vinhos.",
    "options": [
      {
        "id": "A",
        "text": "AGRICULTUREgriculture",
        "isCorrect": false,
        "rationale": "'AGRICULTUREgriculture' significa 'Agricultura', não 'Viticultura'."
      },
      {
        "id": "B",
        "text": "Viticulture",
        "isCorrect": true,
        "rationale": "'Viticulture' é a tradução correta para 'Viticultura'."
      },
      {
        "id": "C",
        "text": "SUBSISTENCEubsistence",
        "isCorrect": false,
        "rationale": "'SUBSISTENCEubsistence' significa 'Subsistência / Autoconsumo', não 'Viticultura'."
      },
      {
        "id": "D",
        "text": "APPETIZERppetizer",
        "isCorrect": false,
        "rationale": "'APPETIZERppetizer' significa 'Aperitivo / Entrada', não 'Viticultura'."
      }
    ]
  },
  {
    "id": "sql-gf-d-35",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Agriculture",
    "wordPt": "Agricultura",
    "phonetic": "ˈæɡ.rɪˌkʌl.tʃər",
    "sentence": "Sustainable organic _________ restores soil microbial health.",
    "sentencePt": "A agricultura orgânica sustentável restaura a saúde microbiana do solo.",
    "exampleEn": "Sustainable organic Agriculture restores soil microbial health.",
    "examplePt": "A agricultura orgânica sustentável restaura a saúde microbiana do solo.",
    "gapWord": "Agriculture",
    "question": "Como se diz 'Agricultura' em inglês?",
    "hint": "Cultivo da terra para produção de alimentos vegetais.",
    "rationale": "'Agriculture' (ˈæɡ.rɪˌkʌl.tʃər): Cultivo da terra para produção de alimentos vegetais.",
    "options": [
      {
        "id": "A",
        "text": "RESTAURATEURestaurateur",
        "isCorrect": false,
        "rationale": "'RESTAURATEURestaurateur' significa 'Restaurateur / Dono de Restaurante', não 'Agricultura'."
      },
      {
        "id": "B",
        "text": "FERMENTATIONermentation",
        "isCorrect": false,
        "rationale": "'FERMENTATIONermentation' significa 'Fermentação Culinária', não 'Agricultura'."
      },
      {
        "id": "C",
        "text": "Agriculture",
        "isCorrect": true,
        "rationale": "'Agriculture' é a tradução correta para 'Agricultura'."
      },
      {
        "id": "D",
        "text": "CARBOHYDRATEarbohydrate",
        "isCorrect": false,
        "rationale": "'CARBOHYDRATEarbohydrate' significa 'Carboidrato', não 'Agricultura'."
      }
    ]
  },
  {
    "id": "sql-gf-d-36",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Horticulture",
    "wordPt": "Horticultura",
    "phonetic": "ˈhɔːr.tɪˌkʌl.tʃər",
    "sentence": "Greenhouse cultivation of heirloom tomatoes belongs to _________.",
    "sentencePt": "O cultivo em estufa de tomates tradicionais pertence à horticultura.",
    "exampleEn": "Greenhouse cultivation of heirloom tomatoes belongs to Horticulture.",
    "examplePt": "O cultivo em estufa de tomates tradicionais pertence à horticultura.",
    "gapWord": "Horticulture",
    "question": "Como se diz 'Horticultura' em inglês?",
    "hint": "Ciência e cultivo intensivo de hortaliças, flores e frutos.",
    "rationale": "'Horticulture' (ˈhɔːr.tɪˌkʌl.tʃər): Ciência e cultivo intensivo de hortaliças, flores e frutos.",
    "options": [
      {
        "id": "A",
        "text": "METROPOLISetropolis",
        "isCorrect": false,
        "rationale": "'METROPOLISetropolis' significa 'Metrópole', não 'Horticultura'."
      },
      {
        "id": "B",
        "text": "HARVESTarvest",
        "isCorrect": false,
        "rationale": "'HARVESTarvest' significa 'Colheita Agrícola', não 'Horticultura'."
      },
      {
        "id": "C",
        "text": "ELEVATIONlevation",
        "isCorrect": false,
        "rationale": "'ELEVATIONlevation' significa 'Elevação / Altitude', não 'Horticultura'."
      },
      {
        "id": "D",
        "text": "Horticulture",
        "isCorrect": true,
        "rationale": "'Horticulture' é a tradução correta para 'Horticultura'."
      }
    ]
  },
  {
    "id": "sql-gf-d-37",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Nutriments",
    "wordPt": "Nutrientes Vitais",
    "phonetic": "ˈnjuː.trɪ.mənts",
    "sentence": "Vitamins and trace minerals are essential biological _________.",
    "sentencePt": "Vitaminas e minerais traço são nutrientes vitais biológicos essenciais.",
    "exampleEn": "Vitamins and trace minerals are essential biological Nutriments.",
    "examplePt": "Vitaminas e minerais traço são nutrientes vitais biológicos essenciais.",
    "gapWord": "Nutriments",
    "question": "Como se diz 'Nutrientes Vitais' em inglês?",
    "hint": "Substâncias que nutrem e promovem o desenvolvimento celular.",
    "rationale": "'Nutriments' (ˈnjuː.trɪ.mənts): Substâncias que nutrem e promovem o desenvolvimento celular.",
    "options": [
      {
        "id": "A",
        "text": "Nutriments",
        "isCorrect": true,
        "rationale": "'Nutriments' é a tradução correta para 'Nutrientes Vitais'."
      },
      {
        "id": "B",
        "text": "RESTAURATEURestaurateur",
        "isCorrect": false,
        "rationale": "'RESTAURATEURestaurateur' significa 'Restaurateur / Dono de Restaurante', não 'Nutrientes Vitais'."
      },
      {
        "id": "C",
        "text": "SUBSISTENCEubsistence",
        "isCorrect": false,
        "rationale": "'SUBSISTENCEubsistence' significa 'Subsistência / Autoconsumo', não 'Nutrientes Vitais'."
      },
      {
        "id": "D",
        "text": "PROVISIONSrovisions",
        "isCorrect": false,
        "rationale": "'PROVISIONSrovisions' significa 'Provisões / Mantimentos de Viagem', não 'Nutrientes Vitais'."
      }
    ]
  },
  {
    "id": "sql-gf-d-38",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Provisions",
    "wordPt": "Provisões / Mantimentos de Viagem",
    "phonetic": "prəˈvɪʒ.ənz",
    "sentence": "The Arctic expedition packed extensive dried food _________.",
    "sentencePt": "A expedição ao Ártico embalou extensas provisões de comida seca.",
    "exampleEn": "The Arctic expedition packed extensive dried food Provisions.",
    "examplePt": "A expedição ao Ártico embalou extensas provisões de comida seca.",
    "gapWord": "Provisions",
    "question": "Como se diz 'Provisões / Mantimentos de Viagem' em inglês?",
    "hint": "Conjunto de mantimentos estocados para alimentação futura.",
    "rationale": "'Provisions' (prəˈvɪʒ.ənz): Conjunto de mantimentos estocados para alimentação futura.",
    "options": [
      {
        "id": "A",
        "text": "DISTILLERYistillery",
        "isCorrect": false,
        "rationale": "'DISTILLERYistillery' significa 'Destilaria', não 'Provisões / Mantimentos de Viagem'."
      },
      {
        "id": "B",
        "text": "Provisions",
        "isCorrect": true,
        "rationale": "'Provisions' é a tradução correta para 'Provisões / Mantimentos de Viagem'."
      },
      {
        "id": "C",
        "text": "BREWERYrewery",
        "isCorrect": false,
        "rationale": "'BREWERYrewery' significa 'Cervejaria Artesanal', não 'Provisões / Mantimentos de Viagem'."
      },
      {
        "id": "D",
        "text": "PASTEURIZATIONasteurization",
        "isCorrect": false,
        "rationale": "'PASTEURIZATIONasteurization' significa 'Pasteurização', não 'Provisões / Mantimentos de Viagem'."
      }
    ]
  },
  {
    "id": "sql-gf-d-39",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Epicurean",
    "wordPt": "Epicurista / Apreciador Gourmet",
    "phonetic": "ˌɛp.ə.kjʊˈriː.ən",
    "sentence": "The food critic shared his refined _________ delight in the tasting menu.",
    "sentencePt": "O crítico gastronômico compartilhou seu refinado deleite epicurista no menu degustação.",
    "exampleEn": "The food critic shared his refined Epicurean delight in the tasting menu.",
    "examplePt": "O crítico gastronômico compartilhou seu refinado deleite epicurista no menu degustação.",
    "gapWord": "Epicurean",
    "question": "Como se diz 'Epicurista / Apreciador Gourmet' em inglês?",
    "hint": "Relativo ao prazer refinado do paladar e apreço por boa comida.",
    "rationale": "'Epicurean' (ˌɛp.ə.kjʊˈriː.ən): Relativo ao prazer refinado do paladar e apreço por boa comida.",
    "options": [
      {
        "id": "A",
        "text": "SAVOURYavoury",
        "isCorrect": false,
        "rationale": "'SAVOURYavoury' significa 'Salgado / Umami', não 'Epicurista / Apreciador Gourmet'."
      },
      {
        "id": "B",
        "text": "PRESERVATIVEreservative",
        "isCorrect": false,
        "rationale": "'PRESERVATIVEreservative' significa 'Conservante Alimentar', não 'Epicurista / Apreciador Gourmet'."
      },
      {
        "id": "C",
        "text": "Epicurean",
        "isCorrect": true,
        "rationale": "'Epicurean' é a tradução correta para 'Epicurista / Apreciador Gourmet'."
      },
      {
        "id": "D",
        "text": "SEASONINGeasoning",
        "isCorrect": false,
        "rationale": "'SEASONINGeasoning' significa 'Tempero / Condimentação', não 'Epicurista / Apreciador Gourmet'."
      }
    ]
  },
  {
    "id": "sql-gf-d-40",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Savoury",
    "wordPt": "Salgado / Umami",
    "phonetic": "ˈseɪ.vər.i",
    "sentence": "Caramelized mushrooms gave the sauce a deep _________ richness.",
    "sentencePt": "Cogumelos caramelizados deram ao molho uma profunda riqueza de sabor salgado umami.",
    "exampleEn": "Caramelized mushrooms gave the sauce a deep Savoury richness.",
    "examplePt": "Cogumelos caramelizados deram ao molho uma profunda riqueza de sabor salgado umami.",
    "gapWord": "Savoury",
    "question": "Como se diz 'Salgado / Umami' em inglês?",
    "hint": "Sabor apetitoso e encorpado característico de caldos e queijos.",
    "rationale": "'Savoury' (ˈseɪ.vər.i): Sabor apetitoso e encorpado característico de caldos e queijos.",
    "options": [
      {
        "id": "A",
        "text": "BREWERYrewery",
        "isCorrect": false,
        "rationale": "'BREWERYrewery' significa 'Cervejaria Artesanal', não 'Salgado / Umami'."
      },
      {
        "id": "B",
        "text": "REFRESHMENTefreshment",
        "isCorrect": false,
        "rationale": "'REFRESHMENTefreshment' significa 'Refresco / Lanche Leve', não 'Salgado / Umami'."
      },
      {
        "id": "C",
        "text": "CONFECTIONERYonfectionery",
        "isCorrect": false,
        "rationale": "'CONFECTIONERYonfectionery' significa 'Confeitaria / Doceria Fina', não 'Salgado / Umami'."
      },
      {
        "id": "D",
        "text": "Savoury",
        "isCorrect": true,
        "rationale": "'Savoury' é a tradução correta para 'Salgado / Umami'."
      }
    ]
  },
  {
    "id": "sql-gf-d-41",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Seasoning",
    "wordPt": "Tempero / Condimentação",
    "phonetic": "ˈsiː.zən.ɪŋ",
    "sentence": "A pinch of sea salt and smoked paprika is the perfect _________.",
    "sentencePt": "Uma pitada de sal marinho e páprica defumada é o tempero perfeito.",
    "exampleEn": "A pinch of sea salt and smoked paprika is the perfect Seasoning.",
    "examplePt": "Uma pitada de sal marinho e páprica defumada é o tempero perfeito.",
    "gapWord": "Seasoning",
    "question": "Como se diz 'Tempero / Condimentação' em inglês?",
    "hint": "Adição de ervas, sal e especiarias para dar gosto ao prato.",
    "rationale": "'Seasoning' (ˈsiː.zən.ɪŋ): Adição de ervas, sal e especiarias para dar gosto ao prato.",
    "options": [
      {
        "id": "A",
        "text": "Seasoning",
        "isCorrect": true,
        "rationale": "'Seasoning' é a tradução correta para 'Tempero / Condimentação'."
      },
      {
        "id": "B",
        "text": "GEOPOLITICSeopolitics",
        "isCorrect": false,
        "rationale": "'GEOPOLITICSeopolitics' significa 'Geopolítica', não 'Tempero / Condimentação'."
      },
      {
        "id": "C",
        "text": "SUBSISTENCEubsistence",
        "isCorrect": false,
        "rationale": "'SUBSISTENCEubsistence' significa 'Subsistência / Autoconsumo', não 'Tempero / Condimentação'."
      },
      {
        "id": "D",
        "text": "URBANIZATIONrbanization",
        "isCorrect": false,
        "rationale": "'URBANIZATIONrbanization' significa 'Urbanização', não 'Tempero / Condimentação'."
      }
    ]
  },
  {
    "id": "sql-gf-d-42",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Carbohydrate",
    "wordPt": "Carboidrato",
    "phonetic": "ˌkɑːr.boʊˈhaɪ.dreɪt",
    "sentence": "Oats provide sustained energy as a complex _________.",
    "sentencePt": "A aveia fornece energia sustentada como um carboidrato complexo.",
    "exampleEn": "Oats provide sustained energy as a complex Carbohydrate.",
    "examplePt": "A aveia fornece energia sustentada como um carboidrato complexo.",
    "gapWord": "Carbohydrate",
    "question": "Como se diz 'Carboidrato' em inglês?",
    "hint": "Macronutriente composto de carbono, hidrogênio e oxigênio (açúcares/amidos).",
    "rationale": "'Carbohydrate' (ˌkɑːr.boʊˈhaɪ.dreɪt): Macronutriente composto de carbono, hidrogênio e oxigênio (açúcares/amidos).",
    "options": [
      {
        "id": "A",
        "text": "VITICULTUREiticulture",
        "isCorrect": false,
        "rationale": "'VITICULTUREiticulture' significa 'Viticultura', não 'Carboidrato'."
      },
      {
        "id": "B",
        "text": "Carbohydrate",
        "isCorrect": true,
        "rationale": "'Carbohydrate' é a tradução correta para 'Carboidrato'."
      },
      {
        "id": "C",
        "text": "PASTEURIZATIONasteurization",
        "isCorrect": false,
        "rationale": "'PASTEURIZATIONasteurization' significa 'Pasteurização', não 'Carboidrato'."
      },
      {
        "id": "D",
        "text": "METROPOLISetropolis",
        "isCorrect": false,
        "rationale": "'METROPOLISetropolis' significa 'Metrópole', não 'Carboidrato'."
      }
    ]
  },
  {
    "id": "sql-gf-d-43",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Caloric",
    "wordPt": "Calórico / Valor Energético",
    "phonetic": "kəˈlɔːr.ɪk",
    "sentence": "Athletes monitor their daily _________ intake carefully.",
    "sentencePt": "Atletas monitoram seu valor calórico diário cuidadosamente.",
    "exampleEn": "Athletes monitor their daily Caloric intake carefully.",
    "examplePt": "Atletas monitoram seu valor calórico diário cuidadosamente.",
    "gapWord": "Caloric",
    "question": "Como se diz 'Calórico / Valor Energético' em inglês?",
    "hint": "Relativo às calorias ou energia fornecida pelos alimentos.",
    "rationale": "'Caloric' (kəˈlɔːr.ɪk): Relativo às calorias ou energia fornecida pelos alimentos.",
    "options": [
      {
        "id": "A",
        "text": "PRESERVATIVEreservative",
        "isCorrect": false,
        "rationale": "'PRESERVATIVEreservative' significa 'Conservante Alimentar', não 'Calórico / Valor Energético'."
      },
      {
        "id": "B",
        "text": "SOVEREIGNTYovereignty",
        "isCorrect": false,
        "rationale": "'SOVEREIGNTYovereignty' significa 'Soberania Nacional', não 'Calórico / Valor Energético'."
      },
      {
        "id": "C",
        "text": "Caloric",
        "isCorrect": true,
        "rationale": "'Caloric' é a tradução correta para 'Calórico / Valor Energético'."
      },
      {
        "id": "D",
        "text": "CARBOHYDRATEarbohydrate",
        "isCorrect": false,
        "rationale": "'CARBOHYDRATEarbohydrate' significa 'Carboidrato', não 'Calórico / Valor Energético'."
      }
    ]
  },
  {
    "id": "sql-gf-d-44",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Subsistence",
    "wordPt": "Subsistência / Autoconsumo",
    "phonetic": "səbˈsɪs.təns",
    "sentence": "Families farmed small plots for basic family _________.",
    "sentencePt": "Famílias cultivavam pequenas parcelas para a subsistência básica familiar.",
    "exampleEn": "Families farmed small plots for basic family Subsistence.",
    "examplePt": "Famílias cultivavam pequenas parcelas para a subsistência básica familiar.",
    "gapWord": "Subsistence",
    "question": "Como se diz 'Subsistência / Autoconsumo' em inglês?",
    "hint": "Produção ou alimentação voltada apenas para as necessidades imediatas.",
    "rationale": "'Subsistence' (səbˈsɪs.təns): Produção ou alimentação voltada apenas para as necessidades imediatas.",
    "options": [
      {
        "id": "A",
        "text": "VITICULTUREiticulture",
        "isCorrect": false,
        "rationale": "'VITICULTUREiticulture' significa 'Viticultura', não 'Subsistência / Autoconsumo'."
      },
      {
        "id": "B",
        "text": "APPETIZERppetizer",
        "isCorrect": false,
        "rationale": "'APPETIZERppetizer' significa 'Aperitivo / Entrada', não 'Subsistência / Autoconsumo'."
      },
      {
        "id": "C",
        "text": "CONFECTIONERYonfectionery",
        "isCorrect": false,
        "rationale": "'CONFECTIONERYonfectionery' significa 'Confeitaria / Doceria Fina', não 'Subsistência / Autoconsumo'."
      },
      {
        "id": "D",
        "text": "Subsistence",
        "isCorrect": true,
        "rationale": "'Subsistence' é a tradução correta para 'Subsistência / Autoconsumo'."
      }
    ]
  },
  {
    "id": "sql-gf-d-45",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Harvest",
    "wordPt": "Colheita Agrícola",
    "phonetic": "ˈhɑːr.vəst",
    "sentence": "Farmers celebrated a bountiful autumn grain _________.",
    "sentencePt": "Agricultores celebraram uma abundante colheita de grãos no outono.",
    "exampleEn": "Farmers celebrated a bountiful autumn grain Harvest.",
    "examplePt": "Agricultores celebraram uma abundante colheita de grãos no outono.",
    "gapWord": "Harvest",
    "question": "Como se diz 'Colheita Agrícola' em inglês?",
    "hint": "Ato de recolher e ceifar os frutos e produtos agrícolas maduros.",
    "rationale": "'Harvest' (ˈhɑːr.vəst): Ato de recolher e ceifar os frutos e produtos agrícolas maduros.",
    "options": [
      {
        "id": "A",
        "text": "Harvest",
        "isCorrect": true,
        "rationale": "'Harvest' é a tradução correta para 'Colheita Agrícola'."
      },
      {
        "id": "B",
        "text": "ELEVATIONlevation",
        "isCorrect": false,
        "rationale": "'ELEVATIONlevation' significa 'Elevação / Altitude', não 'Colheita Agrícola'."
      },
      {
        "id": "C",
        "text": "TRIBUTARYributary",
        "isCorrect": false,
        "rationale": "'TRIBUTARYributary' significa 'Afluente Fluvial', não 'Colheita Agrícola'."
      },
      {
        "id": "D",
        "text": "SOVEREIGNTYovereignty",
        "isCorrect": false,
        "rationale": "'SOVEREIGNTYovereignty' significa 'Soberania Nacional', não 'Colheita Agrícola'."
      }
    ]
  },
  {
    "id": "sql-gf-d-46",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Distillery",
    "wordPt": "Destilaria",
    "phonetic": "dɪˈstɪl.ər.i",
    "sentence": "The historic Scottish _________ crafts aged malt whiskey.",
    "sentencePt": "A destilaria escocesa histórica produz uísque de malte envelhecido.",
    "exampleEn": "The historic Scottish Distillery crafts aged malt whiskey.",
    "examplePt": "A destilaria escocesa histórica produz uísque de malte envelhecido.",
    "gapWord": "Distillery",
    "question": "Como se diz 'Destilaria' em inglês?",
    "hint": "Instalação industrial onde se destilam bebidas alcoólicas espirituosas.",
    "rationale": "'Distillery' (dɪˈstɪl.ər.i): Instalação industrial onde se destilam bebidas alcoólicas espirituosas.",
    "options": [
      {
        "id": "A",
        "text": "URBANIZATIONrbanization",
        "isCorrect": false,
        "rationale": "'URBANIZATIONrbanization' significa 'Urbanização', não 'Destilaria'."
      },
      {
        "id": "B",
        "text": "Distillery",
        "isCorrect": true,
        "rationale": "'Distillery' é a tradução correta para 'Destilaria'."
      },
      {
        "id": "C",
        "text": "MUNICIPALITYunicipality",
        "isCorrect": false,
        "rationale": "'MUNICIPALITYunicipality' significa 'Município', não 'Destilaria'."
      },
      {
        "id": "D",
        "text": "APPETIZERppetizer",
        "isCorrect": false,
        "rationale": "'APPETIZERppetizer' significa 'Aperitivo / Entrada', não 'Destilaria'."
      }
    ]
  },
  {
    "id": "sql-gf-d-47",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Brewery",
    "wordPt": "Cervejaria Artesanal",
    "phonetic": "ˈbruː.ər.i",
    "sentence": "The craft _________ ferments IPAs using aromatic hops.",
    "sentencePt": "A cervejaria artesanal fermenta IPAs usando lúpulo aromático.",
    "exampleEn": "The craft Brewery ferments IPAs using aromatic hops.",
    "examplePt": "A cervejaria artesanal fermenta IPAs usando lúpulo aromático.",
    "gapWord": "Brewery",
    "question": "Como se diz 'Cervejaria Artesanal' em inglês?",
    "hint": "Fábrica onde se elabora cerveja a partir de cereais e lúpulo.",
    "rationale": "'Brewery' (ˈbruː.ər.i): Fábrica onde se elabora cerveja a partir de cereais e lúpulo.",
    "options": [
      {
        "id": "A",
        "text": "TERRITORYerritory",
        "isCorrect": false,
        "rationale": "'TERRITORYerritory' significa 'Território Soberano', não 'Cervejaria Artesanal'."
      },
      {
        "id": "B",
        "text": "METROPOLISetropolis",
        "isCorrect": false,
        "rationale": "'METROPOLISetropolis' significa 'Metrópole', não 'Cervejaria Artesanal'."
      },
      {
        "id": "C",
        "text": "Brewery",
        "isCorrect": true,
        "rationale": "'Brewery' é a tradução correta para 'Cervejaria Artesanal'."
      },
      {
        "id": "D",
        "text": "PROVISIONSrovisions",
        "isCorrect": false,
        "rationale": "'PROVISIONSrovisions' significa 'Provisões / Mantimentos de Viagem', não 'Cervejaria Artesanal'."
      }
    ]
  },
  {
    "id": "sql-gf-d-48",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Restaurateur",
    "wordPt": "Restaurateur / Dono de Restaurante",
    "phonetic": "ˌrɛs.tər.əˈtɜːr",
    "sentence": "The visionary _________ opened three Michelin-starred bistros.",
    "sentencePt": "O restaurateur visionário abriu três bistrôs com estrelas Michelin.",
    "exampleEn": "The visionary Restaurateur opened three Michelin-starred bistros.",
    "examplePt": "O restaurateur visionário abriu três bistrôs com estrelas Michelin.",
    "gapWord": "Restaurateur",
    "question": "Como se diz 'Restaurateur / Dono de Restaurante' em inglês?",
    "hint": "Pessoa que administra e é proprietária de restaurantes profissionais.",
    "rationale": "'Restaurateur' (ˌrɛs.tər.əˈtɜːr): Pessoa que administra e é proprietária de restaurantes profissionais.",
    "options": [
      {
        "id": "A",
        "text": "CONDIMENTondiment",
        "isCorrect": false,
        "rationale": "'CONDIMENTondiment' significa 'Condimento / Molho de Acompanhamento', não 'Restaurateur / Dono de Restaurante'."
      },
      {
        "id": "B",
        "text": "GASTRONOMYastronomy",
        "isCorrect": false,
        "rationale": "'GASTRONOMYastronomy' significa 'Gastronomia', não 'Restaurateur / Dono de Restaurante'."
      },
      {
        "id": "C",
        "text": "BIODIVERSITYiodiversity",
        "isCorrect": false,
        "rationale": "'BIODIVERSITYiodiversity' significa 'Biodiversidade Geográfica', não 'Restaurateur / Dono de Restaurante'."
      },
      {
        "id": "D",
        "text": "Restaurateur",
        "isCorrect": true,
        "rationale": "'Restaurateur' é a tradução correta para 'Restaurateur / Dono de Restaurante'."
      }
    ]
  },
  {
    "id": "sql-gf-d-49",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Sommelier",
    "wordPt": "Sommelier / Especialista em Vinhos",
    "phonetic": "ˌsɑːm.əlˈjeɪ",
    "sentence": "The certified _________ paired a crisp Chablis with the oysters.",
    "sentencePt": "O sommelier certificado harmonizou um Chablis fresco com as ostras.",
    "exampleEn": "The certified Sommelier paired a crisp Chablis with the oysters.",
    "examplePt": "O sommelier certificado harmonizou um Chablis fresco com as ostras.",
    "gapWord": "Sommelier",
    "question": "Como se diz 'Sommelier / Especialista em Vinhos' em inglês?",
    "hint": "Profissional especializado em vinhos e bebidas em restaurantes de alta gastronomia.",
    "rationale": "'Sommelier' (ˌsɑːm.əlˈjeɪ): Profissional especializado em vinhos e bebidas em restaurantes de alta gastronomia.",
    "options": [
      {
        "id": "A",
        "text": "Sommelier",
        "isCorrect": true,
        "rationale": "'Sommelier' é a tradução correta para 'Sommelier / Especialista em Vinhos'."
      },
      {
        "id": "B",
        "text": "AGRICULTUREgriculture",
        "isCorrect": false,
        "rationale": "'AGRICULTUREgriculture' significa 'Agricultura', não 'Sommelier / Especialista em Vinhos'."
      },
      {
        "id": "C",
        "text": "MICROCLIMATEicroclimate",
        "isCorrect": false,
        "rationale": "'MICROCLIMATEicroclimate' significa 'Microclima', não 'Sommelier / Especialista em Vinhos'."
      },
      {
        "id": "D",
        "text": "CONFECTIONERYonfectionery",
        "isCorrect": false,
        "rationale": "'CONFECTIONERYonfectionery' significa 'Confeitaria / Doceria Fina', não 'Sommelier / Especialista em Vinhos'."
      }
    ]
  },
  {
    "id": "sql-gf-d-50",
    "topic": "geografia_comida",
    "difficulty": "dificil",
    "wordEn": "Hospitality",
    "wordPt": "Hospitalidade / Hotelaria & Gastronomia",
    "phonetic": "ˌhɑː.spəˈtæl.ə.ti",
    "sentence": "World-class restaurants pride themselves on warm gracious _________.",
    "sentencePt": "Restaurantes de classe mundial orgulham-se de calorosa e graciosa hospitalidade.",
    "exampleEn": "World-class restaurants pride themselves on warm gracious Hospitality.",
    "examplePt": "Restaurantes de classe mundial orgulham-se de calorosa e graciosa hospitalidade.",
    "gapWord": "Hospitality",
    "question": "Como se diz 'Hospitalidade / Hotelaria & Gastronomia' em inglês?",
    "hint": "Arte de acolher bem clientes com serviço atencioso e generoso.",
    "rationale": "'Hospitality' (ˌhɑː.spəˈtæl.ə.ti): Arte de acolher bem clientes com serviço atencioso e generoso.",
    "options": [
      {
        "id": "A",
        "text": "SETTLEMENTettlement",
        "isCorrect": false,
        "rationale": "'SETTLEMENTettlement' significa 'Povoamento / Assentamento Humano', não 'Hospitalidade / Hotelaria & Gastronomia'."
      },
      {
        "id": "B",
        "text": "Hospitality",
        "isCorrect": true,
        "rationale": "'Hospitality' é a tradução correta para 'Hospitalidade / Hotelaria & Gastronomia'."
      },
      {
        "id": "C",
        "text": "HARVESTarvest",
        "isCorrect": false,
        "rationale": "'HARVESTarvest' significa 'Colheita Agrícola', não 'Hospitalidade / Hotelaria & Gastronomia'."
      },
      {
        "id": "D",
        "text": "NUTRIMENTSutriments",
        "isCorrect": false,
        "rationale": "'NUTRIMENTSutriments' significa 'Nutrientes Vitais', não 'Hospitalidade / Hotelaria & Gastronomia'."
      }
    ]
  }
];

export const TOPICS = [
  { id: 'todos', label: 'Todos os 4 Temas (600 Palavras)', desc: 'Banco de dados SQL compartilhado completo' },
  { id: 'ciencias', label: 'Ciência e Natureza', desc: '150 palavras (Fácil, Médio, Difícil)' },
  { id: 'formas', label: 'Objetos Geométricos', desc: '150 palavras (Fácil, Médio, Difícil)' },
  { id: 'objetos', label: 'Objetos Escola & Cotidiano', desc: '150 palavras (Fácil, Médio, Difícil)' },
  { id: 'geografia_comida', label: 'Geografia e Comida', desc: '150 palavras (Fácil, Médio, Difícil)' },
];

export const DIFFICULTIES = [
  { id: 'todas', label: 'Todas' },
  { id: 'facil', label: 'Fácil (50)' },
  { id: 'medio', label: 'Médio (50)' },
  { id: 'dificil', label: 'Difícil (50)' },
];

export const GAME_MODES_INFO = [
  {
    id: 'quiz',
    title: 'Quiz de Vocabulário',
    desc: 'Perguntas com 4 opções, dicas e explicações detalhadas.',
    badge: 'Múltipla Escolha',
    color: 'from-blue-600 to-indigo-600',
    iconName: 'ListOrdered',
    category: 'vocab',
  },
  {
    id: 'memory',
    title: 'Jogo da Memória',
    desc: 'Vire as cartas e encontre os pares de inglês e português.',
    badge: 'Concentração',
    color: 'from-emerald-600 to-teal-600',
    iconName: 'Grid',
    category: 'vocab',
  },
  {
    id: 'columns',
    title: 'Match Columns',
    desc: 'Ligue a palavra em inglês à sua tradução correspondente.',
    badge: 'Agilidade',
    color: 'from-purple-600 to-pink-600',
    iconName: 'Columns',
    category: 'vocab',
  },
  {
    id: 'flashcards',
    title: 'Flashcards SRS',
    desc: 'Sistema de repetição espaçada com auto-avaliação.',
    badge: 'Memorização',
    color: 'from-amber-600 to-orange-600',
    iconName: 'Layers',
    category: 'vocab',
  },
  {
    id: 'chain',
    title: 'Memory Chain',
    desc: 'Memorize a sequência exata de palavras e repita.',
    badge: 'Sequência & Áudio',
    color: 'from-violet-600 to-indigo-700',
    iconName: 'Zap',
    category: 'vocab',
  },
  {
    id: 'scramble',
    title: 'Word Scramble',
    desc: 'Desembaralhe as letras para montar a palavra correta.',
    badge: 'Anagramas',
    color: 'from-rose-600 to-red-600',
    iconName: 'Type',
    category: 'vocab',
  },
  {
    id: 'saver',
    title: 'Word Saver',
    desc: 'Adivinhe as letras e salve a palavra antes de perder vidas.',
    badge: 'Forca Educativa',
    color: 'from-sky-600 to-cyan-600',
    iconName: 'LifeBuoy',
    category: 'vocab',
  },
  {
    id: 'gaps',
    title: 'Fill in the Gaps',
    desc: 'Complete frases autênticas com a palavra que falta.',
    badge: 'Contexto & Frases',
    color: 'from-teal-600 to-cyan-700',
    iconName: 'Edit3',
    category: 'reading',
  },
  {
    id: 'odd_one_out',
    title: 'Odd One Out',
    desc: 'Encontre a palavra intrusa no grupo e justifique a lógica.',
    badge: 'Raciocínio & Campos Semânticos',
    color: 'from-fuchsia-600 to-pink-600',
    iconName: 'Target',
    category: 'logic',
  },
  {
    id: 'geoquest',
    title: 'GeoQuest: Países & Continentes',
    desc: 'Interprete 3 pistas progressivas em inglês e adivinhe o local.',
    badge: 'Dedução Geográfica',
    color: 'from-emerald-600 to-teal-700',
    iconName: 'Compass',
    category: 'geo',
  },
  {
    id: 'map_pinpoint',
    title: 'Map Pinpoint',
    desc: 'Onde fica no mapa? Clique no local exato descrito em inglês.',
    badge: 'Mapa Interativo',
    color: 'from-blue-600 to-sky-600',
    iconName: 'MapPin',
    category: 'geo',
  },
  {
    id: 'flag_match',
    title: 'Flag & Language Match',
    desc: 'Associe rapidamente bandeira, país, capital e idioma em inglês.',
    badge: 'Skimming & Agilidade',
    color: 'from-amber-500 to-red-500',
    iconName: 'Flag',
    category: 'geo',
  },
  {
    id: 'science_lab',
    title: 'Science Lab: Ordene o Processo',
    desc: 'Reorganize as etapas cronológicas de fenômenos científicos.',
    badge: 'Lógica & Ciências',
    color: 'from-cyan-600 to-blue-700',
    iconName: 'FlaskConical',
    category: 'science',
  },
  {
    id: 'myth_busters',
    title: 'True or False: Myth Busters',
    desc: 'Decisão rápida contra o relógio: fato científico ou mito popular?',
    badge: 'Leitura Crítica',
    color: 'from-violet-600 to-purple-700',
    iconName: 'HelpCircle',
    category: 'science',
  },
  {
    id: 'food_chain',
    title: 'Food Chain Builder',
    desc: 'Classifique produtores, herbívoros, carnívoros e decompositores.',
    badge: 'Ecologia & Biologia',
    color: 'from-lime-600 to-emerald-700',
    iconName: 'TreePine',
    category: 'science',
  },
  {
    id: 'speed_run',
    title: 'Speed Run: 60s Challenge',
    desc: 'Responda o máximo de palavras contra o cronômetro acelerado!',
    badge: 'Reflexo & Combo',
    color: 'from-orange-500 to-red-600',
    iconName: 'Flame',
    category: 'speed',
  },
  {
    id: 'story_quiz',
    title: 'Story Quiz: Cenários Reais',
    desc: 'Aventura interativa: tome decisões em inglês no dia a dia.',
    badge: 'Compreensão Prática',
    color: 'from-indigo-600 to-purple-600',
    iconName: 'Sparkles',
    category: 'reading',
  },
  {
    id: 'categories',
    title: 'Drag & Drop Categories',
    desc: 'Organize as palavras nos cestos temáticos correspondentes.',
    badge: 'Classificação Rápida',
    color: 'from-teal-600 to-emerald-600',
    iconName: 'Boxes',
    category: 'logic',
  },
  {
    id: 'sound_spelling',
    title: 'Sound & Spelling',
    desc: 'Ouça a pronúncia em inglês nativo e soletre com precisão.',
    badge: 'Listening & Grafia',
    color: 'from-blue-600 to-indigo-700',
    iconName: 'Volume2',
    category: 'audio',
  },
  {
    id: 'crossword',
    title: 'Crossword Quiz',
    desc: 'Palavras cruzadas simplificadas com dicas em inglês.',
    badge: 'Palavras Cruzadas',
    color: 'from-amber-600 to-yellow-600',
    iconName: 'Hash',
    category: 'vocab',
  },
  {
    id: 'survivor',
    title: 'Survivor Trivia',
    desc: 'Quiz eliminatório estilo milhão: 3 vidas, ajudas e prêmios!',
    badge: 'Batalha de Conhecimento',
    color: 'from-rose-600 to-pink-700',
    iconName: 'Award',
    category: 'speed',
  },
  {
    id: 'sign_master',
    title: 'Sign Master & AI Teacher',
    desc: 'Decifre placas reais do mundo exterior com dicas do Professor IA.',
    badge: 'Placas & Viagens',
    color: 'from-amber-500 to-orange-600',
    iconName: 'Signpost',
    category: 'reading',
  },
];
