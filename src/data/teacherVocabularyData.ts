import { VocabularyItem } from '../types';

export interface PDFSectionMeta {
  id: string;
  name: string;
  count: number;
  description: string;
}

export const PDF_SECTIONS: PDFSectionMeta[] = [
  { id: 'Todas', name: 'Todos os 400 Termos', count: 400, description: 'Visão geral com os 400 itens (50 de cada tema) do Guia Completo do PDF' },
  { id: '1. 50 Verbos', name: '1. 50 Verbos', count: 50, description: 'Os 50 verbos mais usados na língua inglesa com pronúncia e exemplos' },
  { id: '2. 50 Adjetivos', name: '2. 50 Adjetivos', count: 50, description: 'Os 50 adjetivos indispensáveis para descrições' },
  { id: '3. 50 Preposições', name: '3. 50 Preposições', count: 50, description: 'As 50 preposições de tempo, lugar e relações' },
  { id: '4. 50 Marcadores de Discurso', name: '4. 50 Marcadores Discurso', count: 50, description: '50 conectivos discursivos para soar fluente e natural em conversas' },
  { id: '5. 50 Phrasal Verbs', name: '5. 50 Phrasal Verbs', count: 50, description: 'Os 50 verbos frasais essenciais para conversação' },
  { id: '6. 50 Intensificadores', name: '6. 50 Intensificadores', count: 50, description: '50 palavras para calibrar a intensidade exata de frases' },
  { id: '7. 50 Prep. Dependentes', name: '7. 50 Prep. Dependentes', count: 50, description: '50 combinações fixas de preposição dependente essenciais' },
  { id: '8. 50 Reações Rápidas', name: '8. 50 Reações Rápidas', count: 50, description: '50 respostas rápidas, coloquiais e dinâmicas do dia a dia' }
];

export const ALL_PDF_VOCABULARY: VocabularyItem[] = [
  {
    "term": "be",
    "meaning": "ser / estar",
    "category": "1. 50 Verbos",
    "pr": "bi",
    "example": "Be yourself no matter what.",
    "examplePt": "Seja você mesmo, não importa o que aconteça."
  },
  {
    "term": "have",
    "meaning": "ter",
    "category": "1. 50 Verbos",
    "pr": "rév",
    "example": "I have a lot to learn today.",
    "examplePt": "Eu tenho muito a aprender hoje."
  },
  {
    "term": "do",
    "meaning": "fazer",
    "category": "1. 50 Verbos",
    "pr": "dú",
    "example": "Do your best in every practice.",
    "examplePt": "Faça o seu melhor em cada prática."
  },
  {
    "term": "say",
    "meaning": "dizer",
    "category": "1. 50 Verbos",
    "pr": "sêi",
    "example": "Say that word one more time.",
    "examplePt": "Diga essa palavra mais uma vez."
  },
  {
    "term": "get",
    "meaning": "conseguir / pegar",
    "category": "1. 50 Verbos",
    "pr": "guét",
    "example": "I get better with daily repetition.",
    "examplePt": "Eu fico melhor com a repetição diária."
  },
  {
    "term": "make",
    "meaning": "fazer / criar",
    "category": "1. 50 Verbos",
    "pr": "mêik",
    "example": "Make time to speak English.",
    "examplePt": "Crie tempo para falar inglês."
  },
  {
    "term": "go",
    "meaning": "ir",
    "category": "1. 50 Verbos",
    "pr": "gôu",
    "example": "Let's go to the next topic.",
    "examplePt": "Vamos para o próximo tópico."
  },
  {
    "term": "know",
    "meaning": "saber",
    "category": "1. 50 Verbos",
    "pr": "nôu",
    "example": "Now I know the correct meaning.",
    "examplePt": "Agora eu sei o significado correto."
  },
  {
    "term": "take",
    "meaning": "pegar / levar",
    "category": "1. 50 Verbos",
    "pr": "têik",
    "example": "Take a deep breath and speak.",
    "examplePt": "Respire fundo e fale."
  },
  {
    "term": "see",
    "meaning": "ver",
    "category": "1. 50 Verbos",
    "pr": "sí",
    "example": "I see how this rule works.",
    "examplePt": "Eu vejo como essa regra funciona."
  },
  {
    "term": "come",
    "meaning": "vir",
    "category": "1. 50 Verbos",
    "pr": "kâme",
    "example": "Come practice with the AI teacher.",
    "examplePt": "Venha praticar com o professor de IA."
  },
  {
    "term": "think",
    "meaning": "pensar",
    "category": "1. 50 Verbos",
    "pr": "thínk",
    "example": "Think before answering the quiz.",
    "examplePt": "Pense antes de responder ao quiz."
  },
  {
    "term": "look",
    "meaning": "olhar",
    "category": "1. 50 Verbos",
    "pr": "lúk",
    "example": "Look at the phonetic guide.",
    "examplePt": "Olhe para o guia fonético."
  },
  {
    "term": "want",
    "meaning": "querer",
    "category": "1. 50 Verbos",
    "pr": "uânt",
    "example": "I want to speak fluently.",
    "examplePt": "Eu quero falar fluentemente."
  },
  {
    "term": "give",
    "meaning": "dar",
    "category": "1. 50 Verbos",
    "pr": "guív",
    "example": "Give yourself credit for trying.",
    "examplePt": "Dê crédito a si mesmo por tentar."
  },
  {
    "term": "use",
    "meaning": "usar",
    "category": "1. 50 Verbos",
    "pr": "iúse",
    "example": "Use these terms in real sentences.",
    "examplePt": "Use esses termos em frases reais."
  },
  {
    "term": "find",
    "meaning": "encontrar",
    "category": "1. 50 Verbos",
    "pr": "fáind",
    "example": "You will find all answers here.",
    "examplePt": "Você encontrará todas as respostas aqui."
  },
  {
    "term": "tell",
    "meaning": "contar / dizer",
    "category": "1. 50 Verbos",
    "pr": "tél",
    "example": "Tell me how to say this.",
    "examplePt": "Diga-me como dizer isso."
  },
  {
    "term": "ask",
    "meaning": "perguntar",
    "category": "1. 50 Verbos",
    "pr": "ésk",
    "example": "Ask whenever you are unsure.",
    "examplePt": "Pergunte sempre que tiver dúvida."
  },
  {
    "term": "work",
    "meaning": "trabalhar",
    "category": "1. 50 Verbos",
    "pr": "uârke",
    "example": "Consistent efforts work wonders.",
    "examplePt": "Esforços consistentes fazem maravilhas."
  },
  {
    "term": "seem",
    "meaning": "parecer",
    "category": "1. 50 Verbos",
    "pr": "sítm",
    "example": "It seems difficult at first.",
    "examplePt": "Parece difícil no começo."
  },
  {
    "term": "feel",
    "meaning": "sentir",
    "category": "1. 50 Verbos",
    "pr": "fíil",
    "example": "I feel more confident now.",
    "examplePt": "Sinto-me mais confiante agora."
  },
  {
    "term": "try",
    "meaning": "tentar",
    "category": "1. 50 Verbos",
    "pr": "trái",
    "example": "Try to repeat aloud.",
    "examplePt": "Tente repetir em voz alta."
  },
  {
    "term": "leave",
    "meaning": "sair / deixar",
    "category": "1. 50 Verbos",
    "pr": "lívi",
    "example": "Never leave practice for later.",
    "examplePt": "Nunca deixe a prática para depois."
  },
  {
    "term": "call",
    "meaning": "ligar / chamar",
    "category": "1. 50 Verbos",
    "pr": "kal",
    "example": "Call out the phrase clearly.",
    "examplePt": "Fale a frase claramente."
  },
  {
    "term": "keep",
    "meaning": "manter",
    "category": "1. 50 Verbos",
    "pr": "kíp",
    "example": "Keep going, you are improving!",
    "examplePt": "Continue em frente, você está melhorando!"
  },
  {
    "term": "help",
    "meaning": "ajudar",
    "category": "1. 50 Verbos",
    "pr": "rélp",
    "example": "The virtual teacher will help you.",
    "examplePt": "O professor virtual vai te ajudar."
  },
  {
    "term": "talk",
    "meaning": "falar",
    "category": "1. 50 Verbos",
    "pr": "tólk",
    "example": "Let's talk in English today.",
    "examplePt": "Vamos conversar em inglês hoje."
  },
  {
    "term": "turn",
    "meaning": "virar",
    "category": "1. 50 Verbos",
    "pr": "târn",
    "example": "Turn up the volume to listen.",
    "examplePt": "Aumente o volume para escutar."
  },
  {
    "term": "start",
    "meaning": "começar",
    "category": "1. 50 Verbos",
    "pr": "stárt",
    "example": "Start with the basic vocabulary.",
    "examplePt": "Comece com o vocabulário básico."
  },
  {
    "term": "show",
    "meaning": "mostrar",
    "category": "1. 50 Verbos",
    "pr": "chôu",
    "example": "Show me your pronunciation score.",
    "examplePt": "Mostre-me sua pontuação de pronúncia."
  },
  {
    "term": "hear",
    "meaning": "ouvir",
    "category": "1. 50 Verbos",
    "pr": "rír",
    "example": "Hear the natural cadence.",
    "examplePt": "Ouça a cadência natural."
  },
  {
    "term": "play",
    "meaning": "jogar / tocar",
    "category": "1. 50 Verbos",
    "pr": "play",
    "example": "Play the audio to train your ear.",
    "examplePt": "Toque o áudio para treinar seu ouvido."
  },
  {
    "term": "run",
    "meaning": "correr",
    "category": "1. 50 Verbos",
    "pr": "rân",
    "example": "Run through these cards daily.",
    "examplePt": "Passe por estes cartões diariamente."
  },
  {
    "term": "move",
    "meaning": "mover",
    "category": "1. 50 Verbos",
    "pr": "múvi",
    "example": "Move forward to the next lesson.",
    "examplePt": "Avance para a próxima lição."
  },
  {
    "term": "live",
    "meaning": "viver",
    "category": "1. 50 Verbos",
    "pr": "lívi",
    "example": "I live in Brazil.",
    "examplePt": "Eu moro no Brasil."
  },
  {
    "term": "believe",
    "meaning": "acreditar",
    "category": "1. 50 Verbos",
    "pr": "bilíve",
    "example": "Believe in your learning journey.",
    "examplePt": "Acredite na sua jornada de aprendizado."
  },
  {
    "term": "bring",
    "meaning": "trazer",
    "category": "1. 50 Verbos",
    "pr": "bríng",
    "example": "Bring dedication to your study.",
    "examplePt": "Traga dedicação aos seus estudos."
  },
  {
    "term": "happen",
    "meaning": "acontecer",
    "category": "1. 50 Verbos",
    "pr": "rápen",
    "example": "Fluency happens step by step.",
    "examplePt": "A fluência acontece passo a passo."
  },
  {
    "term": "write",
    "meaning": "escrever",
    "category": "1. 50 Verbos",
    "pr": "ráit",
    "example": "Write down new vocabulary.",
    "examplePt": "Escreva o novo vocabulário."
  },
  {
    "term": "provide",
    "meaning": "fornecer",
    "category": "1. 50 Verbos",
    "pr": "prováid",
    "example": "We provide audio for every term.",
    "examplePt": "Fornecemos áudio para cada termo."
  },
  {
    "term": "sit",
    "meaning": "sentar",
    "category": "1. 50 Verbos",
    "pr": "sít",
    "example": "Sit back and listen attentively.",
    "examplePt": "Sente-se e escute com atenção."
  },
  {
    "term": "stand",
    "meaning": "ficar em pé",
    "category": "1. 50 Verbos",
    "pr": "sténd",
    "example": "Stand tall and speak with clarity.",
    "examplePt": "Fique ereto e fale com clareza."
  },
  {
    "term": "lose",
    "meaning": "perder",
    "category": "1. 50 Verbos",
    "pr": "lúuze",
    "example": "Don't lose your motivation.",
    "examplePt": "Não perca sua motivação."
  },
  {
    "term": "pay",
    "meaning": "pagar",
    "category": "1. 50 Verbos",
    "pr": "pêi",
    "example": "Pay attention to the native sounds.",
    "examplePt": "Preste atenção aos sons nativos."
  },
  {
    "term": "meet",
    "meaning": "encontrar",
    "category": "1. 50 Verbos",
    "pr": "mít",
    "example": "Glad to meet you here.",
    "examplePt": "Prazer em encontrá-lo aqui."
  },
  {
    "term": "include",
    "meaning": "incluir",
    "category": "1. 50 Verbos",
    "pr": "inclúud",
    "example": "We include all 50 verbs from the guide.",
    "examplePt": "Incluímos todos os 50 verbos do guia."
  },
  {
    "term": "continue",
    "meaning": "continuar",
    "category": "1. 50 Verbos",
    "pr": "kantíniu",
    "example": "Continue to practice every single day.",
    "examplePt": "Continue a praticar todos os dias."
  },
  {
    "term": "set",
    "meaning": "definir / colocar",
    "category": "1. 50 Verbos",
    "pr": "sét",
    "example": "Set a clear goal for yourself.",
    "examplePt": "Defina uma meta clara para você."
  },
  {
    "term": "learn",
    "meaning": "aprender",
    "category": "1. 50 Verbos",
    "pr": "lêrn",
    "example": "Learn all 50 essential verbs.",
    "examplePt": "Aprenda todos os 50 verbos essenciais."
  },
  {
    "term": "good",
    "meaning": "bom / boa",
    "category": "2. 50 Adjetivos",
    "pr": "gúd",
    "example": "This is a good start.",
    "examplePt": "Este é um bom começo."
  },
  {
    "term": "new",
    "meaning": "novo",
    "category": "2. 50 Adjetivos",
    "pr": "níu",
    "example": "Every day brings a new word.",
    "examplePt": "Cada dia traz uma nova palavra."
  },
  {
    "term": "first",
    "meaning": "primeiro",
    "category": "2. 50 Adjetivos",
    "pr": "fârst",
    "example": "First, listen to the pronunciation.",
    "examplePt": "Primeiro, escute a pronúncia."
  },
  {
    "term": "last",
    "meaning": "último",
    "category": "2. 50 Adjetivos",
    "pr": "lést",
    "example": "This is the last exercise of the set.",
    "examplePt": "Este é o último exercício da série."
  },
  {
    "term": "long",
    "meaning": "longo / comprido",
    "category": "2. 50 Adjetivos",
    "pr": "lóng",
    "example": "It was a long study session.",
    "examplePt": "Foi uma longa sessão de estudos."
  },
  {
    "term": "great",
    "meaning": "ótimo / grande",
    "category": "2. 50 Adjetivos",
    "pr": "grêit",
    "example": "Great job on your pronunciation!",
    "examplePt": "Ótimo trabalho na sua pronúncia!"
  },
  {
    "term": "little",
    "meaning": "pequeno / pouco",
    "category": "2. 50 Adjetivos",
    "pr": "lítol",
    "example": "A little practice makes a big difference.",
    "examplePt": "Um pouco de prática faz uma grande diferença."
  },
  {
    "term": "own",
    "meaning": "próprio",
    "category": "2. 50 Adjetivos",
    "pr": "ôun",
    "example": "Create your own example sentences.",
    "examplePt": "Crie suas próprias frases de exemplo."
  },
  {
    "term": "other",
    "meaning": "outro",
    "category": "2. 50 Adjetivos",
    "pr": "âder",
    "example": "Let's check the other words.",
    "examplePt": "Vamos conferir as outras palavras."
  },
  {
    "term": "old",
    "meaning": "velho / antigo",
    "category": "2. 50 Adjetivos",
    "pr": "ôuld",
    "example": "Reviewing old vocabulary is vital.",
    "examplePt": "Revisar vocabulário antigo é vital."
  },
  {
    "term": "right",
    "meaning": "certo / direito",
    "category": "2. 50 Adjetivos",
    "pr": "ráit",
    "example": "You chose the right option.",
    "examplePt": "Você escolheu a opção certa."
  },
  {
    "term": "big",
    "meaning": "grande",
    "category": "2. 50 Adjetivos",
    "pr": "bíg",
    "example": "You made a big improvement.",
    "examplePt": "Você teve uma grande melhora."
  },
  {
    "term": "high",
    "meaning": "alto",
    "category": "2. 50 Adjetivos",
    "pr": "rái",
    "example": "You achieved a high score.",
    "examplePt": "Você alcançou uma pontuação alta."
  },
  {
    "term": "different",
    "meaning": "diferente",
    "category": "2. 50 Adjetivos",
    "pr": "díferent",
    "example": "Notice the different intonations.",
    "examplePt": "Observe as diferentes entonações."
  },
  {
    "term": "small",
    "meaning": "pequeno",
    "category": "2. 50 Adjetivos",
    "pr": "smól",
    "example": "Take small steps every day.",
    "examplePt": "Dê pequenos passos todos os dias."
  },
  {
    "term": "large",
    "meaning": "grande / amplo",
    "category": "2. 50 Adjetivos",
    "pr": "lárdj",
    "example": "We built a large vocabulary bank.",
    "examplePt": "Construímos um grande banco de vocabulário."
  },
  {
    "term": "next",
    "meaning": "próximo",
    "category": "2. 50 Adjetivos",
    "pr": "nékst",
    "example": "Click next to proceed.",
    "examplePt": "Clique em próximo para prosseguir."
  },
  {
    "term": "early",
    "meaning": "cedo / prematuro",
    "category": "2. 50 Adjetivos",
    "pr": "êrli",
    "example": "I wake up early to practice.",
    "examplePt": "Eu acordo cedo para praticar."
  },
  {
    "term": "young",
    "meaning": "jovem",
    "category": "2. 50 Adjetivos",
    "pr": "iâng",
    "example": "It is great to learn while young.",
    "examplePt": "É ótimo aprender enquanto jovem."
  },
  {
    "term": "important",
    "meaning": "importante",
    "category": "2. 50 Adjetivos",
    "pr": "impórtant",
    "example": "Listening is very important.",
    "examplePt": "Ouvir é muito importante."
  },
  {
    "term": "few",
    "meaning": "poucos",
    "category": "2. 50 Adjetivos",
    "pr": "fiú",
    "example": "Just a few minutes per day suffice.",
    "examplePt": "Apenas alguns poucos minutos por dia são suficientes."
  },
  {
    "term": "public",
    "meaning": "público",
    "category": "2. 50 Adjetivos",
    "pr": "páblik",
    "example": "Speaking in public requires practice.",
    "examplePt": "Falar em público exige prática."
  },
  {
    "term": "bad",
    "meaning": "mau / ruim",
    "category": "2. 50 Adjetivos",
    "pr": "béd",
    "example": "Making mistakes is not bad.",
    "examplePt": "Cometer erros não é ruim."
  },
  {
    "term": "same",
    "meaning": "mesmo",
    "category": "2. 50 Adjetivos",
    "pr": "sêim",
    "example": "Repeat the same phrase twice.",
    "examplePt": "Repita a mesma frase duas vezes."
  },
  {
    "term": "able",
    "meaning": "capaz",
    "category": "2. 50 Adjetivos",
    "pr": "êibol",
    "example": "You will be able to speak freely.",
    "examplePt": "Você será capaz de falar livremente."
  },
  {
    "term": "real",
    "meaning": "real / verdadeiro",
    "category": "2. 50 Adjetivos",
    "pr": "ríal",
    "example": "Use real conversational sentences.",
    "examplePt": "Use frases reais de conversação."
  },
  {
    "term": "best",
    "meaning": "melhor",
    "category": "2. 50 Adjetivos",
    "pr": "bést",
    "example": "This is the best method to practice.",
    "examplePt": "Este é o melhor método para praticar."
  },
  {
    "term": "sure",
    "meaning": "certo / seguro",
    "category": "2. 50 Adjetivos",
    "pr": "chúr",
    "example": "Are you sure about the translation?",
    "examplePt": "Você tem certeza sobre a tradução?"
  },
  {
    "term": "low",
    "meaning": "baixo",
    "category": "2. 50 Adjetivos",
    "pr": "lôu",
    "example": "Start with low speed audio.",
    "examplePt": "Comece com áudio em velocidade baixa."
  },
  {
    "term": "clear",
    "meaning": "claro / limpo",
    "category": "2. 50 Adjetivos",
    "pr": "clíar",
    "example": "Speak with a clear voice.",
    "examplePt": "Fale com uma voz clara."
  },
  {
    "term": "hard",
    "meaning": "difícil / duro",
    "category": "2. 50 Adjetivos",
    "pr": "rárd",
    "example": "Nothing is too hard with persistence.",
    "examplePt": "Nada é difícil demais com persistência."
  },
  {
    "term": "only",
    "meaning": "único / apenas",
    "category": "2. 50 Adjetivos",
    "pr": "ôunli",
    "example": "English is the only language spoken here.",
    "examplePt": "O inglês é a única língua falada aqui."
  },
  {
    "term": "strong",
    "meaning": "forte",
    "category": "2. 50 Adjetivos",
    "pr": "stróng",
    "example": "Build a strong foundation.",
    "examplePt": "Construa uma base forte."
  },
  {
    "term": "possible",
    "meaning": "possível",
    "category": "2. 50 Adjetivos",
    "pr": "póssobol",
    "example": "Fluency is completely possible.",
    "examplePt": "A fluência é completamente possível."
  },
  {
    "term": "whole",
    "meaning": "inteiro / todo",
    "category": "2. 50 Adjetivos",
    "pr": "rôul",
    "example": "Practice the whole list.",
    "examplePt": "Pratique a lista inteira."
  },
  {
    "term": "free",
    "meaning": "livre / grátis",
    "category": "2. 50 Adjetivos",
    "pr": "frí",
    "example": "Feel free to test yourself in the quiz.",
    "examplePt": "Sinta-se livre para testar-se no quiz."
  },
  {
    "term": "true",
    "meaning": "verdadeiro",
    "category": "2. 50 Adjetivos",
    "pr": "trú",
    "example": "It is true that practice makes perfect.",
    "examplePt": "É verdade que a prática leva à perfeição."
  },
  {
    "term": "full",
    "meaning": "cheio",
    "category": "2. 50 Adjetivos",
    "pr": "fúl",
    "example": "Here is the full 50 adjectives list.",
    "examplePt": "Aqui está a lista completa de 50 adjetivos."
  },
  {
    "term": "easy",
    "meaning": "fácil",
    "category": "2. 50 Adjetivos",
    "pr": "ízi",
    "example": "It becomes easy after repetition.",
    "examplePt": "Fica fácil após a repetição."
  },
  {
    "term": "late",
    "meaning": "atrasado / tarde",
    "category": "2. 50 Adjetivos",
    "pr": "lêit",
    "example": "It is never too late to learn.",
    "examplePt": "Nunca é tarde para aprender."
  },
  {
    "term": "wrong",
    "meaning": "errado",
    "category": "2. 50 Adjetivos",
    "pr": "róng",
    "example": "Don't fear getting it wrong.",
    "examplePt": "Não tenha medo de errar."
  },
  {
    "term": "black",
    "meaning": "preto / negro",
    "category": "2. 50 Adjetivos",
    "pr": "blék",
    "example": "He wore a black jacket.",
    "examplePt": "Ele vestiu uma jaqueta preta."
  },
  {
    "term": "white",
    "meaning": "branco",
    "category": "2. 50 Adjetivos",
    "pr": "uáit",
    "example": "The page background is white.",
    "examplePt": "O fundo da página é branco."
  },
  {
    "term": "short",
    "meaning": "curto / baixo",
    "category": "2. 50 Adjetivos",
    "pr": "chórt",
    "example": "Keep your practice sessions short and focused.",
    "examplePt": "Mantenha suas sessões de estudo curtas e focadas."
  },
  {
    "term": "hot",
    "meaning": "quente",
    "category": "2. 50 Adjetivos",
    "pr": "rát",
    "example": "The weather is very hot today.",
    "examplePt": "O clima está muito quente hoje."
  },
  {
    "term": "cold",
    "meaning": "frio",
    "category": "2. 50 Adjetivos",
    "pr": "côuld",
    "example": "It gets cold during winter.",
    "examplePt": "Fica frio durante o inverno."
  },
  {
    "term": "happy",
    "meaning": "feliz",
    "category": "2. 50 Adjetivos",
    "pr": "répi",
    "example": "I am happy with my progress.",
    "examplePt": "Estou feliz com o meu progresso."
  },
  {
    "term": "heavy",
    "meaning": "pesado",
    "category": "2. 50 Adjetivos",
    "pr": "révi",
    "example": "Do not carry heavy stress when studying.",
    "examplePt": "Não carregue estresse pesado ao estudar."
  },
  {
    "term": "human",
    "meaning": "humano",
    "category": "2. 50 Adjetivos",
    "pr": "riúman",
    "example": "Mistakes are a natural human trait.",
    "examplePt": "Erros são um traço humano natural."
  },
  {
    "term": "local",
    "meaning": "local",
    "category": "2. 50 Adjetivos",
    "pr": "lôucal",
    "example": "Learn to speak like a local.",
    "examplePt": "Aprenda a falar como um nativo local."
  },
  {
    "term": "to",
    "meaning": "para / a",
    "category": "3. 50 Preposições",
    "pr": "tú",
    "example": "Listen to the audio pronunciation.",
    "examplePt": "Escute a pronúncia em áudio."
  },
  {
    "term": "of",
    "meaning": "de",
    "category": "3. 50 Preposições",
    "pr": "âv",
    "example": "He is proud of his achievements.",
    "examplePt": "Ele está orgulhoso de suas conquistas."
  },
  {
    "term": "in",
    "meaning": "em / dentro de",
    "category": "3. 50 Preposições",
    "pr": "ín",
    "example": "Practice in a quiet room.",
    "examplePt": "Pratique em um quarto silencioso."
  },
  {
    "term": "for",
    "meaning": "para / por",
    "category": "3. 50 Preposições",
    "pr": "fór",
    "example": "Thank you for your hard work.",
    "examplePt": "Obrigado pelo seu esforço."
  },
  {
    "term": "on",
    "meaning": "em / sobre",
    "category": "3. 50 Preposições",
    "pr": "ón",
    "example": "Turn on the microphone to speak.",
    "examplePt": "Ligue o microfone para falar."
  },
  {
    "term": "with",
    "meaning": "com",
    "category": "3. 50 Preposições",
    "pr": "uíd (som de d soprado)",
    "example": "Speak with confidence.",
    "examplePt": "Fale com confiança."
  },
  {
    "term": "at",
    "meaning": "em / no / na",
    "category": "3. 50 Preposições",
    "pr": "ét",
    "example": "She is great at English grammar.",
    "examplePt": "Ela é ótima em gramática inglesa."
  },
  {
    "term": "by",
    "meaning": "por / pelo / perto de",
    "category": "3. 50 Preposições",
    "pr": "bái",
    "example": "We learn step by step.",
    "examplePt": "Aprendemos passo a passo."
  },
  {
    "term": "from",
    "meaning": "de / a partir de",
    "category": "3. 50 Preposições",
    "pr": "fróm",
    "example": "Where are you from originally?",
    "examplePt": "De onde você é originalmente?"
  },
  {
    "term": "up",
    "meaning": "para cima / alto",
    "category": "3. 50 Preposições",
    "pr": "áp",
    "example": "Wake up early and study.",
    "examplePt": "Acorde cedo e estude."
  },
  {
    "term": "about",
    "meaning": "sobre / quase",
    "category": "3. 50 Preposições",
    "pr": "abáut",
    "example": "What is this sentence about?",
    "examplePt": "Sobre o que é esta frase?"
  },
  {
    "term": "into",
    "meaning": "para dentro de",
    "category": "3. 50 Preposições",
    "pr": "íntu",
    "example": "Translate the word into Portuguese.",
    "examplePt": "Traduza a palavra para o português."
  },
  {
    "term": "over",
    "meaning": "sobre / acima de",
    "category": "3. 50 Preposições",
    "pr": "ôuver",
    "example": "Let's go over the answers together.",
    "examplePt": "Vamos revisar as respostas juntos."
  },
  {
    "term": "after",
    "meaning": "após / depois",
    "category": "3. 50 Preposições",
    "pr": "éfter",
    "example": "Repeat after the virtual teacher.",
    "examplePt": "Repita depois do professor virtual."
  },
  {
    "term": "down",
    "meaning": "para baixo",
    "category": "3. 50 Preposições",
    "pr": "dáun",
    "example": "Write down your score in the quiz.",
    "examplePt": "Anote sua pontuação no quiz."
  },
  {
    "term": "off",
    "meaning": "fora / desligado",
    "category": "3. 50 Preposições",
    "pr": "óf",
    "example": "Turn off all distractions.",
    "examplePt": "Desligue todas as distrações."
  },
  {
    "term": "through",
    "meaning": "através de",
    "category": "3. 50 Preposições",
    "pr": "thrú (som de t soprado)",
    "example": "Progress through all 8 sections.",
    "examplePt": "Avance através de todas as 8 seções."
  },
  {
    "term": "between",
    "meaning": "entre (dois)",
    "category": "3. 50 Preposições",
    "pr": "bituín",
    "example": "Choose between the two options.",
    "examplePt": "Escolha entre as duas opções."
  },
  {
    "term": "out",
    "meaning": "fora",
    "category": "3. 50 Preposições",
    "pr": "áut",
    "example": "Speak out loud to train pronunciation.",
    "examplePt": "Fale para fora em voz alta para treinar pronúncia."
  },
  {
    "term": "against",
    "meaning": "contra",
    "category": "3. 50 Preposições",
    "pr": "aguénst",
    "example": "Compete against your best streak.",
    "examplePt": "Compita contra a sua melhor sequência."
  },
  {
    "term": "during",
    "meaning": "durante",
    "category": "3. 50 Preposições",
    "pr": "diúring",
    "example": "Stay focused during the quiz.",
    "examplePt": "Mantenha o foco durante o quiz."
  },
  {
    "term": "before",
    "meaning": "antes",
    "category": "3. 50 Preposições",
    "pr": "bifór",
    "example": "Review before answering.",
    "examplePt": "Revise antes de responder."
  },
  {
    "term": "under",
    "meaning": "debaixo / sob",
    "category": "3. 50 Preposições",
    "pr": "ânder",
    "example": "The translation appears under the term.",
    "examplePt": "A tradução aparece debaixo do termo."
  },
  {
    "term": "around",
    "meaning": "ao redor / cerca de",
    "category": "3. 50 Preposições",
    "pr": "aráund",
    "example": "Practice around 15 minutes a day.",
    "examplePt": "Pratique cerca de 15 minutos por dia."
  },
  {
    "term": "among",
    "meaning": "entre (vários)",
    "category": "3. 50 Preposições",
    "pr": "amâng",
    "example": "Discuss among your fellow students.",
    "examplePt": "Discuta entre seus colegas de estudo."
  },
  {
    "term": "without",
    "meaning": "sem",
    "category": "3. 50 Preposições",
    "pr": "uidáut",
    "example": "Speak without hesitation.",
    "examplePt": "Fale sem hesitação."
  },
  {
    "term": "across",
    "meaning": "através / do outro lado",
    "category": "3. 50 Preposições",
    "pr": "acrós",
    "example": "English connects people across the globe.",
    "examplePt": "O inglês conecta pessoas ao redor do globo."
  },
  {
    "term": "including",
    "meaning": "incluindo",
    "category": "3. 50 Preposições",
    "pr": "inclúuding",
    "example": "We include all 50 prepositions.",
    "examplePt": "Incluímos todas as 50 preposições."
  },
  {
    "term": "behind",
    "meaning": "atrás",
    "category": "3. 50 Preposições",
    "pr": "biráind",
    "example": "Do not fall behind on your practice.",
    "examplePt": "Não fique para trás na sua prática."
  },
  {
    "term": "since",
    "meaning": "desde",
    "category": "3. 50 Preposições",
    "pr": "sínts",
    "example": "I have studied English since last year.",
    "examplePt": "Eu estudo inglês desde o ano passado."
  },
  {
    "term": "until",
    "meaning": "até",
    "category": "3. 50 Preposições",
    "pr": "antíl",
    "example": "Keep practicing until you master it.",
    "examplePt": "Continue praticando até dominar."
  },
  {
    "term": "as",
    "meaning": "como / enquanto",
    "category": "3. 50 Preposições",
    "pr": "éz",
    "example": "Pronounce as clearly as you can.",
    "examplePt": "Pronuncie o mais claramente possível."
  },
  {
    "term": "like",
    "meaning": "como / semelhante a",
    "category": "3. 50 Preposições",
    "pr": "láik",
    "example": "Sound like a native speaker.",
    "examplePt": "Soe como um falante nativo."
  },
  {
    "term": "near",
    "meaning": "perto",
    "category": "3. 50 Preposições",
    "pr": "níar",
    "example": "Keep the microphone near your mouth.",
    "examplePt": "Mantenha o microfone perto da sua boca."
  },
  {
    "term": "above",
    "meaning": "acima",
    "category": "3. 50 Preposições",
    "pr": "abáv",
    "example": "Look at the badge above the card.",
    "examplePt": "Olhe o emblema acima do cartão."
  },
  {
    "term": "towards",
    "meaning": "em direção a",
    "category": "3. 50 Preposições",
    "pr": "tuórds",
    "example": "Take steps towards fluency.",
    "examplePt": "Dê passos em direção à fluência."
  },
  {
    "term": "along",
    "meaning": "ao longo de",
    "category": "3. 50 Preposições",
    "pr": "alóng",
    "example": "Read along with the spoken audio.",
    "examplePt": "Leia junto com o áudio falado."
  },
  {
    "term": "because of",
    "meaning": "por causa de",
    "category": "3. 50 Preposições",
    "pr": "bicóz âv",
    "example": "You improve because of consistency.",
    "examplePt": "Você melhora por causa da constância."
  },
  {
    "term": "upon",
    "meaning": "sobre / em cima de",
    "category": "3. 50 Preposições",
    "pr": "apón",
    "example": "Once upon a time in America.",
    "examplePt": "Era uma vez na América."
  },
  {
    "term": "beyond",
    "meaning": "além de",
    "category": "3. 50 Preposições",
    "pr": "biiónd",
    "example": "Your progress goes beyond expectations.",
    "examplePt": "Seu progresso vai além das expectativas."
  },
  {
    "term": "except",
    "meaning": "exceto",
    "category": "3. 50 Preposições",
    "pr": "icsept",
    "example": "All options except one are incorrect.",
    "examplePt": "Todas as opções exceto uma estão incorretas."
  },
  {
    "term": "inside",
    "meaning": "dentro",
    "category": "3. 50 Preposições",
    "pr": "insáid",
    "example": "Look at the examples inside the card.",
    "examplePt": "Veja os exemplos dentro do cartão."
  },
  {
    "term": "outside",
    "meaning": "fora / lado de fora",
    "category": "3. 50 Preposições",
    "pr": "autsáid",
    "example": "Step outside your comfort zone.",
    "examplePt": "Dê um passo para fora da sua zona de conforto."
  },
  {
    "term": "instead of",
    "meaning": "em vez de",
    "category": "3. 50 Preposições",
    "pr": "instéd âv",
    "example": "Listen instead of just reading.",
    "examplePt": "Ouça em vez de apenas ler."
  },
  {
    "term": "according to",
    "meaning": "de acordo com",
    "category": "3. 50 Preposições",
    "pr": "acórding tú",
    "example": "According to the guide, this is correct.",
    "examplePt": "De acordo com o guia, isso está correto."
  },
  {
    "term": "below",
    "meaning": "abaixo de",
    "category": "3. 50 Preposições",
    "pr": "bilôu",
    "example": "Select an answer below.",
    "examplePt": "Selecione uma resposta abaixo."
  },
  {
    "term": "despite",
    "meaning": "apesar de",
    "category": "3. 50 Preposições",
    "pr": "dispáit",
    "example": "He spoke well despite feeling shy.",
    "examplePt": "Ele falou bem apesar de sentir vergonha."
  },
  {
    "term": "past",
    "meaning": "passado / além de",
    "category": "3. 50 Preposições",
    "pr": "pést",
    "example": "It is ten minutes past eight.",
    "examplePt": "São oito e dez minutos."
  },
  {
    "term": "than",
    "meaning": "do que (comparação)",
    "category": "3. 50 Preposições",
    "pr": "dén",
    "example": "Speaking is faster than typing.",
    "examplePt": "Falar é mais rápido do que digitar."
  },
  {
    "term": "till",
    "meaning": "até",
    "category": "3. 50 Preposições",
    "pr": "tíl",
    "example": "Practice till you reach 100 points.",
    "examplePt": "Pratique até alcançar 100 pontos."
  },
  {
    "term": "So...",
    "meaning": "Então...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "sóu",
    "example": "So, what's next?",
    "examplePt": "Então, qual o próximo passo?"
  },
  {
    "term": "Anyway...",
    "meaning": "De qualquer forma... / Enfim...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "É-ni-uéi",
    "example": "Anyway, let's start.",
    "examplePt": "Enfim, vamos começar."
  },
  {
    "term": "Well...",
    "meaning": "Bem...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "uél",
    "example": "Well, I don't know.",
    "examplePt": "Bem, eu não sei."
  },
  {
    "term": "Now...",
    "meaning": "Agora... / Pois bem...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "náu",
    "example": "Now, listen to this.",
    "examplePt": "Pois bem, escute isso."
  },
  {
    "term": "As I was saying...",
    "meaning": "Como eu estava dizendo...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "éz ai uóz SÉI-ing",
    "example": "As I was saying, it was cold.",
    "examplePt": "Como eu estava dizendo, estava frio."
  },
  {
    "term": "Moving on to...",
    "meaning": "Passando para...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "MÚ-ving ón tú",
    "example": "Moving on to the next topic...",
    "examplePt": "Passando para o próximo tópico..."
  },
  {
    "term": "To begin with...",
    "meaning": "Para começo de conversa...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "tú bi-GÍN uís",
    "example": "To begin with, it's cheap.",
    "examplePt": "Para começo de conversa, é barato."
  },
  {
    "term": "By the way...",
    "meaning": "A propósito... / Por falar nisso...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "bai dâ uéi",
    "example": "By the way, where is he?",
    "examplePt": "A propósito, onde ele está?"
  },
  {
    "term": "Incidentally...",
    "meaning": "Por falar nisso... / Incidentalmente...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "in-si-DÉN-ta-li",
    "example": "Incidentally, I met her today.",
    "examplePt": "Por falar nisso, a encontrei hoje."
  },
  {
    "term": "Speaking of...",
    "meaning": "Falando nisso... / Falando de...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "SPÍ-king óv",
    "example": "Speaking of sports, do you play?",
    "examplePt": "Falando de esportes, você joga?"
  },
  {
    "term": "That reminds me...",
    "meaning": "Isso me lembra...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "dét ri-MÁINDS mí",
    "example": "That reminds me of home.",
    "examplePt": "Isso me lembra de casa."
  },
  {
    "term": "Also...",
    "meaning": "Também...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ÓL-sóu",
    "example": "Also, we need milk.",
    "examplePt": "Também precisamos de leite."
  },
  {
    "term": "Besides...",
    "meaning": "Além do mais...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "bi-SÁIDS",
    "example": "Besides, it's too late.",
    "examplePt": "Além do mais, é tarde demais."
  },
  {
    "term": "In fact...",
    "meaning": "Na verdade... / De fato...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "in fékt",
    "example": "In fact, it was easy.",
    "examplePt": "Na verdade, foi fácil."
  },
  {
    "term": "Actually...",
    "meaning": "Na verdade... / Para falar a verdade...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ÉK-chu-a-li",
    "example": "Actually, I prefer coffee.",
    "examplePt": "Na verdade, prefiro café."
  },
  {
    "term": "As a matter of fact...",
    "meaning": "A bem da verdade...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "éz â MÉ-ter óv fékt",
    "example": "As a matter of fact, I agree.",
    "examplePt": "A bem da verdade, eu concordo."
  },
  {
    "term": "Plus...",
    "meaning": "E mais... / Além disso...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "plâs",
    "example": "Plus, it is very fast.",
    "examplePt": "E mais, é muito rápido."
  },
  {
    "term": "On top of that...",
    "meaning": "Para completar... / Além de tudo...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ón táp óv dét",
    "example": "On top of that, it rained.",
    "examplePt": "Além de tudo, choveu."
  },
  {
    "term": "Indeed...",
    "meaning": "De fato... / Realmente...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "in-DÍD",
    "example": "It is indeed true.",
    "examplePt": "É de fato verdade."
  },
  {
    "term": "First of all...",
    "meaning": "Antes de tudo...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "fârst óv ól",
    "example": "First of all, thank you.",
    "examplePt": "Antes de tudo, obrigado."
  },
  {
    "term": "Secondly...",
    "meaning": "Em segundo lugar...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "SÉ-kand-li",
    "example": "Secondly, check the price.",
    "examplePt": "Em segundo lugar, cheque o preço."
  },
  {
    "term": "Next...",
    "meaning": "Em seguida...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "nékst",
    "example": "Next, add some sugar.",
    "examplePt": "Em seguida, adicione açúcar."
  },
  {
    "term": "Then...",
    "meaning": "Então... / Depois...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "dén",
    "example": "Then, we left.",
    "examplePt": "Depois, nós saímos."
  },
  {
    "term": "Finally...",
    "meaning": "Por fim... / Finalmente...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "FÁI-na-li",
    "example": "Finally, we arrived.",
    "examplePt": "Finalmente, nós chegamos."
  },
  {
    "term": "In the end...",
    "meaning": "No final das contas...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "in dâ end",
    "example": "In the end, it worked out.",
    "examplePt": "No final das contas, deu certo."
  },
  {
    "term": "However...",
    "meaning": "No entanto... / Porém...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "hau-É-ver",
    "example": "However, I need time.",
    "examplePt": "No entanto, preciso de tempo."
  },
  {
    "term": "Mind you...",
    "meaning": "Veja bem... / Mas repare...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "máind iú",
    "example": "Mind you, it isn't easy.",
    "examplePt": "Veja bem, não é fácil."
  },
  {
    "term": "On the other hand...",
    "meaning": "Por outro lado...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ón dâ Â-der rénd",
    "example": "On the other hand, it's good.",
    "examplePt": "Por outro lado, é bom."
  },
  {
    "term": "Having said that...",
    "meaning": "Dito isso... / Mas apesar disso...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "HÉ-ving séd dét",
    "example": "Having said that, let's try.",
    "examplePt": "Dito isso, vamos tentar."
  },
  {
    "term": "Still...",
    "meaning": "Ainda assim...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "stíl",
    "example": "Still, we should go.",
    "examplePt": "Ainda assim, deveríamos ir."
  },
  {
    "term": "At the same time...",
    "meaning": "Ao mesmo tempo...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ét dâ sêim táim",
    "example": "At the same time, be safe.",
    "examplePt": "Ao mesmo tempo, tome cuidado."
  },
  {
    "term": "Though / Although...",
    "meaning": "Embora... / Se bem que...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ðóu / ol-ÐÓU",
    "example": "Although it rained, we went.",
    "examplePt": "Embora tenha chovido, nós fomos."
  },
  {
    "term": "For instance...",
    "meaning": "Por exemplo...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "fór ÍNS-tans",
    "example": "For instance, take this item.",
    "examplePt": "Por exemplo, pegue este item."
  },
  {
    "term": "For example...",
    "meaning": "Por exemplo...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "fór ig-ZÁM-pol",
    "example": "For example, look at this.",
    "examplePt": "Por exemplo, olhe para isto."
  },
  {
    "term": "In other words...",
    "meaning": "Em outras palavras...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "in Â-der uârds",
    "example": "In other words, you won.",
    "examplePt": "Em outras palavras, você venceu."
  },
  {
    "term": "I mean...",
    "meaning": "Quero dizer... / Tipo assim...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ai mín",
    "example": "I mean, it makes sense.",
    "examplePt": "Quero dizer, faz sentido."
  },
  {
    "term": "That is to say...",
    "meaning": "Ou seja...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "dét iz tú sêi",
    "example": "That is to say, it's over.",
    "examplePt": "Ou seja, acabou."
  },
  {
    "term": "To put it another way...",
    "meaning": "Dito de outra forma...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "tú pút it â-NÂ-der uêi",
    "example": "To put it another way, no.",
    "examplePt": "Dito de outra forma, não."
  },
  {
    "term": "Therefore...",
    "meaning": "Portanto...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ÐÉR-fór",
    "example": "Therefore, we agree.",
    "examplePt": "Portanto, nós concordamos."
  },
  {
    "term": "As a result...",
    "meaning": "Como resultado...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "éz â ri-ZÂLT",
    "example": "As a result, we stayed.",
    "examplePt": "Como resultado, nós ficamos."
  },
  {
    "term": "Because of that...",
    "meaning": "Por causa disso...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "bi-CÓZ óv dét",
    "example": "Because of that, I failed.",
    "examplePt": "Por causa disso, eu falhei."
  },
  {
    "term": "In conclusion...",
    "meaning": "Em conclusão...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "in kan-KLÚ-jan",
    "example": "In conclusion, it works.",
    "examplePt": "Em conclusão, funciona."
  },
  {
    "term": "To sum up...",
    "meaning": "Resumindo...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "tú sâm áp",
    "example": "To sum up, we won.",
    "examplePt": "Resumindo, nós vencemos."
  },
  {
    "term": "All in all...",
    "meaning": "Geralmente falando... / No geral...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ól in ól",
    "example": "All in all, it was good.",
    "examplePt": "No geral, foi bom."
  },
  {
    "term": "You know...",
    "meaning": "Sabe... / Você sabe...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "iú nôu",
    "example": "You know, I agree.",
    "examplePt": "Sabe, eu concordo."
  },
  {
    "term": "I guess...",
    "meaning": "Eu acho que... / Acredito que...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ai gues",
    "example": "I guess it's true.",
    "examplePt": "Eu acho que é verdade."
  },
  {
    "term": "To be honest...",
    "meaning": "Para ser sincero...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "tú bí Ó-nest",
    "example": "To be honest, I'm tired.",
    "examplePt": "Para ser sincero, estou cansado."
  },
  {
    "term": "Honestly...",
    "meaning": "Sinceramente...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "Ó-nest-li",
    "example": "Honestly, I don't care.",
    "examplePt": "Sinceramente, não me importo."
  },
  {
    "term": "Basically...",
    "meaning": "Basicamente...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "BÉI-si-kli",
    "example": "Basically, we are ready.",
    "examplePt": "Basicamente, estamos prontos."
  },
  {
    "term": "At least...",
    "meaning": "Pelo menos...",
    "category": "4. 50 Marcadores de Discurso",
    "pr": "ét líst",
    "example": "At least you tried.",
    "examplePt": "Pelo menos você tentou."
  },
  {
    "term": "get up",
    "meaning": "levantar-se / acordar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét áp",
    "example": "I get up early every morning.",
    "examplePt": "Eu levanto cedo todas as manhãs."
  },
  {
    "term": "get out",
    "meaning": "sair / ir embora",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét áut",
    "example": "Get out and enjoy the fresh air.",
    "examplePt": "Saia e aproveite o ar puro."
  },
  {
    "term": "get in",
    "meaning": "entrar (em carro, casa)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét ín",
    "example": "Get in the car, we are leaving.",
    "examplePt": "Entre no carro, nós estamos saindo."
  },
  {
    "term": "get on",
    "meaning": "embarcar / subir (ônibus, trem)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét ón",
    "example": "Get on the bus at the corner.",
    "examplePt": "Embarque no ônibus na esquina."
  },
  {
    "term": "get off",
    "meaning": "desembarcar / sair de veículo",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét óf",
    "example": "Get off at the central station.",
    "examplePt": "Desembarque na estação central."
  },
  {
    "term": "get away",
    "meaning": "escapar / sair de férias",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét auêi",
    "example": "We need to get away this weekend.",
    "examplePt": "Precisamos viajar e relaxar neste fim de semana."
  },
  {
    "term": "get along with",
    "meaning": "dar-se bem com alguém",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét alóng uíd",
    "example": "She gets along with everyone.",
    "examplePt": "Ela se dá bem com todo mundo."
  },
  {
    "term": "get back",
    "meaning": "voltar / retornar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét bék",
    "example": "When will you get back home?",
    "examplePt": "Quando você vai voltar para casa?"
  },
  {
    "term": "get over",
    "meaning": "superar (algo/alguém)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét ôuver",
    "example": "He will get over the cold soon.",
    "examplePt": "Ele vai superar o resfriado em breve."
  },
  {
    "term": "get through",
    "meaning": "ultrapassar / superar fase difícil",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guét thrú",
    "example": "You will get through this challenge.",
    "examplePt": "Você vai superar este desafio."
  },
  {
    "term": "give up",
    "meaning": "desistir / parar de tentar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guív áp",
    "example": "Never give up on your dreams.",
    "examplePt": "Nunca desista dos seus sonhos."
  },
  {
    "term": "give back",
    "meaning": "devolver",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guív bék",
    "example": "Please give back the notebook.",
    "examplePt": "Por favor devolva o caderno."
  },
  {
    "term": "give in",
    "meaning": "ceder / entregar-se",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guív ín",
    "example": "He finally gave in to persuasion.",
    "examplePt": "Ele finalmente cedeu aos argumentos."
  },
  {
    "term": "give away",
    "meaning": "doar / revelar segredo",
    "category": "5. 50 Phrasal Verbs",
    "pr": "guív auêi",
    "example": "Don't give away the movie ending.",
    "examplePt": "Não revele o final do filme."
  },
  {
    "term": "look for",
    "meaning": "procurar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "lúk fór",
    "example": "I'm looking for my glasses.",
    "examplePt": "Estou procurando meus óculos."
  },
  {
    "term": "look after",
    "meaning": "cuidar de alguém/algo",
    "category": "5. 50 Phrasal Verbs",
    "pr": "lúk éfter",
    "example": "Can you look after the puppy?",
    "examplePt": "Você pode cuidar do filhote?"
  },
  {
    "term": "look forward to",
    "meaning": "estar ansioso por",
    "category": "5. 50 Phrasal Verbs",
    "pr": "lúk fórouard tú",
    "example": "I look forward to our next lesson.",
    "examplePt": "Estou ansioso pela nossa próxima aula."
  },
  {
    "term": "look out",
    "meaning": "prestar atenção / ter cuidado",
    "category": "5. 50 Phrasal Verbs",
    "pr": "lúk áut",
    "example": "Look out! The floor is slippery.",
    "examplePt": "Cuidado! O chão está escorregadio."
  },
  {
    "term": "look up",
    "meaning": "pesquisar informação / olhar p/ cima",
    "category": "5. 50 Phrasal Verbs",
    "pr": "lúk áp",
    "example": "Look up the word in the dictionary.",
    "examplePt": "Pesquise a palavra no dicionário."
  },
  {
    "term": "work out",
    "meaning": "dar certo / malhar / resolver",
    "category": "5. 50 Phrasal Verbs",
    "pr": "uârke áut",
    "example": "Everything will work out fine.",
    "examplePt": "Tudo vai dar certo no final."
  },
  {
    "term": "find out",
    "meaning": "descobrir (informação)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "fáind áut",
    "example": "Find out what time the quiz begins.",
    "examplePt": "Descubra a que horas o quiz começa."
  },
  {
    "term": "turn on",
    "meaning": "ligar (aparelho, luz)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "târn ón",
    "example": "Turn on the lamp please.",
    "examplePt": "Ligue a lâmpada por favor."
  },
  {
    "term": "turn off",
    "meaning": "desligar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "târn óf",
    "example": "Turn off the TV when leaving.",
    "examplePt": "Desligue a TV ao sair."
  },
  {
    "term": "turn up",
    "meaning": "aumentar volume / aparecer",
    "category": "5. 50 Phrasal Verbs",
    "pr": "târn áp",
    "example": "He turned up out of nowhere.",
    "examplePt": "Ele apareceu do nada."
  },
  {
    "term": "turn down",
    "meaning": "recusar oferta / baixar volume",
    "category": "5. 50 Phrasal Verbs",
    "pr": "târn dáun",
    "example": "She turned down the invitation politely.",
    "examplePt": "Ela recusou o convite educadamente."
  },
  {
    "term": "turn out",
    "meaning": "resultar / acabar sendo",
    "category": "5. 50 Phrasal Verbs",
    "pr": "târn áut",
    "example": "The party turned out great.",
    "examplePt": "A festa acabou sendo ótima."
  },
  {
    "term": "put on",
    "meaning": "vestir / colocar (roupa, acessório)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "pút ón",
    "example": "Put on your coat, it is chilly.",
    "examplePt": "Coloque o casaco, está friozinho."
  },
  {
    "term": "put off",
    "meaning": "adiar / procrastinar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "pút óf",
    "example": "Don't put off what you can do today.",
    "examplePt": "Não adie o que você pode fazer hoje."
  },
  {
    "term": "put out",
    "meaning": "apagar (fogo, cigarro)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "pút áut",
    "example": "The firefighters put out the fire.",
    "examplePt": "Os bombeiros apagaram o fogo."
  },
  {
    "term": "put up with",
    "meaning": "tolerar / aguentar algo chato",
    "category": "5. 50 Phrasal Verbs",
    "pr": "pút áp uíd",
    "example": "I can't put up with this noise.",
    "examplePt": "Não consigo tolerar este barulho."
  },
  {
    "term": "take off",
    "meaning": "decolar (avião) / tirar (roupa)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "têik óf",
    "example": "The flight takes off in ten minutes.",
    "examplePt": "O voo decola em dez minutos."
  },
  {
    "term": "take out",
    "meaning": "tirar / levar para fora / namorar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "têik áut",
    "example": "He took her out for a nice dinner.",
    "examplePt": "Ele a levou para jantar em um bom restaurante."
  },
  {
    "term": "take over",
    "meaning": "assumir o controle",
    "category": "5. 50 Phrasal Verbs",
    "pr": "têik ôuver",
    "example": "The new leader will take over tomorrow.",
    "examplePt": "O novo líder assumirá o controle amanhã."
  },
  {
    "term": "take care of",
    "meaning": "cuidar de",
    "category": "5. 50 Phrasal Verbs",
    "pr": "têik kér âv",
    "example": "Take care of yourself while traveling.",
    "examplePt": "Cuide de si mesmo enquanto estiver viajando."
  },
  {
    "term": "call off",
    "meaning": "cancelar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "kal óf",
    "example": "They had to call off the football match.",
    "examplePt": "Eles tiveram que cancelar a partida de futebol."
  },
  {
    "term": "call back",
    "meaning": "retornar uma ligação",
    "category": "5. 50 Phrasal Verbs",
    "pr": "kal bék",
    "example": "I will call you back in five minutes.",
    "examplePt": "Vou te ligar de volta em cinco minutos."
  },
  {
    "term": "come back",
    "meaning": "voltar / retornar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "kâme bék",
    "example": "Please come back soon.",
    "examplePt": "Por favor volte logo."
  },
  {
    "term": "come in",
    "meaning": "entrar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "kâme ín",
    "example": "Come in, make yourself comfortable.",
    "examplePt": "Entre, fique à vontade."
  },
  {
    "term": "come across",
    "meaning": "encontrar por acaso",
    "category": "5. 50 Phrasal Verbs",
    "pr": "kâme acrós",
    "example": "I came across an ancient book.",
    "examplePt": "Deparei-me com um livro antigo."
  },
  {
    "term": "come up with",
    "meaning": "inventar / propor uma ideia",
    "category": "5. 50 Phrasal Verbs",
    "pr": "kâme áp uid",
    "example": "She came up with a brilliant plan.",
    "examplePt": "Ela inventou um plano brilhante."
  },
  {
    "term": "run out of",
    "meaning": "ficar sem (estoque, tempo)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "rân áut âv",
    "example": "We ran out of milk this morning.",
    "examplePt": "Ficamos sem leite esta manhã."
  },
  {
    "term": "run into",
    "meaning": "esbarrar em / encontrar por acaso",
    "category": "5. 50 Phrasal Verbs",
    "pr": "rân íntu",
    "example": "I ran into my teacher at the mall.",
    "examplePt": "Esbarrei no meu professor no shopping."
  },
  {
    "term": "break down",
    "meaning": "quebrar (carro) / desabar emocionalmente",
    "category": "5. 50 Phrasal Verbs",
    "pr": "brêik dáun",
    "example": "My car broke down on the highway.",
    "examplePt": "Meu carro quebrou na rodovia."
  },
  {
    "term": "break up",
    "meaning": "terminar relacionamento",
    "category": "5. 50 Phrasal Verbs",
    "pr": "brêik áp",
    "example": "They decided to break up amicably.",
    "examplePt": "Eles decidiram terminar o relacionamento amigavelmente."
  },
  {
    "term": "bring up",
    "meaning": "criar (criança) / mencionar assunto",
    "category": "5. 50 Phrasal Verbs",
    "pr": "bríng áp",
    "example": "Don't bring up that argument again.",
    "examplePt": "Não mencione essa discussão novamente."
  },
  {
    "term": "go on",
    "meaning": "continuar / acontecer",
    "category": "5. 50 Phrasal Verbs",
    "pr": "gôu ón",
    "example": "Please go on with your explanation.",
    "examplePt": "Por favor continue com a sua explicação."
  },
  {
    "term": "go out",
    "meaning": "sair (para se divertir)",
    "category": "5. 50 Phrasal Verbs",
    "pr": "gôu áut",
    "example": "Let's go out for dinner tonight.",
    "examplePt": "Vamos sair para jantar hoje à noite."
  },
  {
    "term": "go back",
    "meaning": "voltar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "gôu bék",
    "example": "I need to go back to my desk.",
    "examplePt": "Preciso voltar para a minha mesa."
  },
  {
    "term": "keep on",
    "meaning": "continuar fazendo algo",
    "category": "5. 50 Phrasal Verbs",
    "pr": "kíp ón",
    "example": "Keep on speaking without fear.",
    "examplePt": "Continue falando sem medo."
  },
  {
    "term": "show up",
    "meaning": "aparecer / chegar a um lugar",
    "category": "5. 50 Phrasal Verbs",
    "pr": "chôu áp",
    "example": "Thanks for showing up right on time.",
    "examplePt": "Obrigado por comparecer exatamente na hora."
  },
  {
    "term": "Pretty",
    "meaning": "Bastante / Bem (Usado antes de adjetivo para 'bastante/bem'.)",
    "category": "6. 50 Intensificadores",
    "pr": "PRÍ-ri",
    "example": "It's pretty good.",
    "examplePt": "Está bem legal."
  },
  {
    "term": "Kind of",
    "meaning": "Meio / Mais ou menos (Suaviza o tom (falado como 'kinda').)",
    "category": "6. 50 Intensificadores",
    "pr": "KÁIN-da",
    "example": "I'm kind of tired.",
    "examplePt": "Estou meio cansado."
  },
  {
    "term": "Sort of",
    "meaning": "Meio / Mais ou menos (Variação de kind of (falado como 'sorta').)",
    "category": "6. 50 Intensificadores",
    "pr": "SÓR-ta",
    "example": "It's sort of weird.",
    "examplePt": "É meio estranho."
  },
  {
    "term": "Super",
    "meaning": "Super / Muito (Intensificador informal e moderno.)",
    "category": "6. 50 Intensificadores",
    "pr": "SÚ-per",
    "example": "I'm super busy.",
    "examplePt": "Estou super ocupado."
  },
  {
    "term": "Really",
    "meaning": "Muito / Extremamente (Intensificador universal muito natural.)",
    "category": "6. 50 Intensificadores",
    "pr": "RÍ-li",
    "example": "That's really important.",
    "examplePt": "Isso é muito importante."
  },
  {
    "term": "A bit",
    "meaning": "Um pouco (Diminui o impacto do adjetivo.)",
    "category": "6. 50 Intensificadores",
    "pr": "â bit",
    "example": "It's a bit cold today.",
    "examplePt": "Está um pouco frio hoje."
  },
  {
    "term": "A little bit",
    "meaning": "Um pouquinho (Deixa o tom ainda mais suave.)",
    "category": "6. 50 Intensificadores",
    "pr": "â LÍ-rol bit",
    "example": "I'm a little bit hungry.",
    "examplePt": "Estou com um pouquinho de fome."
  },
  {
    "term": "Very",
    "meaning": "Muito (O mais clássico e neutro.)",
    "category": "6. 50 Intensificadores",
    "pr": "VÉ-ri",
    "example": "She is very smart.",
    "examplePt": "Ela é muito inteligente."
  },
  {
    "term": "Extremely",
    "meaning": "Extremamente (Leva o adjetivo ao limite máximo.)",
    "category": "6. 50 Intensificadores",
    "pr": "iks-TRÍ-mli",
    "example": "The test was extremely hard.",
    "examplePt": "A prova foi extremamente difícil."
  },
  {
    "term": "So",
    "meaning": "Tão / Muito (Usado para dar carga emocional.)",
    "category": "6. 50 Intensificadores",
    "pr": "sóu",
    "example": "I'm so happy for you.",
    "examplePt": "Estou tão feliz por você."
  },
  {
    "term": "Too",
    "meaning": "Demais / Excessivamente (Indica excesso que causa problema.)",
    "category": "6. 50 Intensificadores",
    "pr": "tú",
    "example": "This coffee is too hot.",
    "examplePt": "Este café está quente demais."
  },
  {
    "term": "Incredibly",
    "meaning": "Incrivelmente (Dificilmente acreditável de tão intenso.)",
    "category": "6. 50 Intensificadores",
    "pr": "in-KRÉ-di-bli",
    "example": "He is incredibly talented.",
    "examplePt": "Ele é incrivelmente talentoso."
  },
  {
    "term": "Totally",
    "meaning": "Totalmente (Certeza ou intensidade total.)",
    "category": "6. 50 Intensificadores",
    "pr": "TÓU-ra-li",
    "example": "I'm totally fine.",
    "examplePt": "Estou totalmente bem."
  },
  {
    "term": "Completely",
    "meaning": "Completamente (Estado pleno e inteiro.)",
    "category": "6. 50 Intensificadores",
    "pr": "kam-PLÍT-li",
    "example": "I'm completely sure.",
    "examplePt": "Tenho certeza absoluta."
  },
  {
    "term": "Fairly",
    "meaning": "Razoavelmente (Grau moderado de intensidade.)",
    "category": "6. 50 Intensificadores",
    "pr": "FÉR-li",
    "example": "It's a fairly easy job.",
    "examplePt": "É um trabalho razoavelmente fácil."
  },
  {
    "term": "Quite",
    "meaning": "Bastante / Bem (Bastante usado no inglês britânico.)",
    "category": "6. 50 Intensificadores",
    "pr": "kuáit",
    "example": "It's quite simple.",
    "examplePt": "É bastante simples."
  },
  {
    "term": "Slightly",
    "meaning": "Ligeiramente / Levemente (Para pequenas variações.)",
    "category": "6. 50 Intensificadores",
    "pr": "SLÁIT-li",
    "example": "Prices are slightly higher.",
    "examplePt": "Os preços estão ligeiramente mais altos."
  },
  {
    "term": "Absolutely",
    "meaning": "Absolutamente (Para adjetivos extremos.)",
    "category": "6. 50 Intensificadores",
    "pr": "eb-so-LÚT-li",
    "example": "The view is absolutely amazing.",
    "examplePt": "A vista é absolutamente incrível."
  },
  {
    "term": "Crazy",
    "meaning": "Loucamente / Muito (Gíria para substituir very.)",
    "category": "6. 50 Intensificadores",
    "pr": "KRÉI-zi",
    "example": "It's crazy busy in here.",
    "examplePt": "Está muito movimentado aqui."
  },
  {
    "term": "Seriously",
    "meaning": "Seriamente / Muito (Usado na fala para dar ênfase.)",
    "category": "6. 50 Intensificadores",
    "pr": "SÍ-ri-as-li",
    "example": "This pizza is seriously good.",
    "examplePt": "Esta pizza é seriamente boa."
  },
  {
    "term": "Barely",
    "meaning": "Quase não (O adjetivo quase não se aplica.)",
    "category": "6. 50 Intensificadores",
    "pr": "BÉR-li",
    "example": "It's barely visible.",
    "examplePt": "Está quase invisível."
  },
  {
    "term": "Hardly",
    "meaning": "Dificilmente (Intensidade quase nula.)",
    "category": "6. 50 Intensificadores",
    "pr": "RÁRD-li",
    "example": "It's hardly possible.",
    "examplePt": "É dificilmente possível."
  },
  {
    "term": "Somewhat",
    "meaning": "De certa forma / Um tanto (Tom mais formal ou escrito.)",
    "category": "6. 50 Intensificadores",
    "pr": "SÂM-uót",
    "example": "The results were somewhat unexpected.",
    "examplePt": "Os resultados foram um tanto inesperados."
  },
  {
    "term": "Mildly",
    "meaning": "Levemente (Algo leve ou suave.)",
    "category": "6. 50 Intensificadores",
    "pr": "MÁILD-li",
    "example": "I was mildly surprised.",
    "examplePt": "Fiquei levemente surpreso."
  },
  {
    "term": "Insanely",
    "meaning": "Loucamente (Gíria para algo exagerado.)",
    "category": "6. 50 Intensificadores",
    "pr": "in-SÉI-nli",
    "example": "That car is insanely fast.",
    "examplePt": "Aquele carro é loucamente rápido."
  },
  {
    "term": "Ridiculously",
    "meaning": "Absurdamente (Chega a ser ridículo de tão intenso.)",
    "category": "6. 50 Intensificadores",
    "pr": "ri-DÍ-kiu-las-li",
    "example": "It's ridiculously expensive.",
    "examplePt": "É absurdamente caro."
  },
  {
    "term": "Unbelievably",
    "meaning": "Inacreditavelmente (Para intensificar o inacreditável.)",
    "category": "6. 50 Intensificadores",
    "pr": "ân-bi-LÍ-va-bli",
    "example": "She is unbelievably fast.",
    "examplePt": "Ela é inacreditavelmente rápida."
  },
  {
    "term": "Exceptionally",
    "meaning": "Excepcionalmente (Destaca raridade em tom formal.)",
    "category": "6. 50 Intensificadores",
    "pr": "ik-SÉP-sho-na-li",
    "example": "He is exceptionally smart.",
    "examplePt": "Ele é excepcionalmente inteligente."
  },
  {
    "term": "Rather",
    "meaning": "Bastante / Um tanto (Bastante comum no inglês britânico.)",
    "category": "6. 50 Intensificadores",
    "pr": "RÁ-der",
    "example": "It's a rather cold day.",
    "examplePt": "Está um dia bastante frio."
  },
  {
    "term": "Relatively",
    "meaning": "Relativamente (Intensidade em comparação.)",
    "category": "6. 50 Intensificadores",
    "pr": "RÉ-la-tiv-li",
    "example": "The exam was relatively easy.",
    "examplePt": "O exame foi relativamente fácil."
  },
  {
    "term": "Noticeably",
    "meaning": "Notavelmente (Percebido visualmente/facilmente.)",
    "category": "6. 50 Intensificadores",
    "pr": "NÓU-ti-sa-bli",
    "example": "It got noticeably colder.",
    "examplePt": "Ficou notavelmente mais frio."
  },
  {
    "term": "Remarkably",
    "meaning": "Surpreendentemente (Chama atenção pela intensidade.)",
    "category": "6. 50 Intensificadores",
    "pr": "ri-MÁR-ka-bli",
    "example": "She was remarkably calm.",
    "examplePt": "Ela estava surpreendentemente calma."
  },
  {
    "term": "Particularly",
    "meaning": "Particularmente (Destaque especial.)",
    "category": "6. 50 Intensificadores",
    "pr": "par-TÍ-kiu-lar-li",
    "example": "I'm not particularly fond of it.",
    "examplePt": "Não sou particularmente fã disso."
  },
  {
    "term": "Perfectly",
    "meaning": "Perfeitamente (Indica 100% de adequação.)",
    "category": "6. 50 Intensificadores",
    "pr": "PÊR-fekt-li",
    "example": "It's perfectly fine.",
    "examplePt": "Está perfeitamente bem."
  },
  {
    "term": "Utterly",
    "meaning": "Totalmente (Usado com adjetivos negativos.)",
    "category": "6. 50 Intensificadores",
    "pr": "Â-te-rli",
    "example": "This is utterly useless.",
    "examplePt": "Isso é totalmente inútil."
  },
  {
    "term": "Entirely",
    "meaning": "Inteiramente (Indica totalidade em tom neutro.)",
    "category": "6. 50 Intensificadores",
    "pr": "in-TÁI-er-li",
    "example": "I entirely agree.",
    "examplePt": "Concordo inteiramente."
  },
  {
    "term": "Fully",
    "meaning": "Plenamente (Nível máximo atingido.)",
    "category": "6. 50 Intensificadores",
    "pr": "FÚ-li",
    "example": "I'm fully aware of that.",
    "examplePt": "Estou plenamente ciente disso."
  },
  {
    "term": "Thoroughly",
    "meaning": "A fundo / Completamente (Completo em detalhes.)",
    "category": "6. 50 Intensificadores",
    "pr": "SÂ-ro-li",
    "example": "I'm thoroughly confused.",
    "examplePt": "Estou completamente confuso."
  },
  {
    "term": "Especially",
    "meaning": "Especialmente (Uma característica se sobressai.)",
    "category": "6. 50 Intensificadores",
    "pr": "es-PÉ-sho-li",
    "example": "It's especially good today.",
    "examplePt": "Está especialmente bom hoje."
  },
  {
    "term": "Mainly",
    "meaning": "Principalmente (Característica principal.)",
    "category": "6. 50 Intensificadores",
    "pr": "MÉIN-li",
    "example": "The room is mainly white.",
    "examplePt": "O quarto é principalmente branco."
  },
  {
    "term": "Mostly",
    "meaning": "Em sua maioria (Na maior parte das vezes.)",
    "category": "6. 50 Intensificadores",
    "pr": "MÓUST-li",
    "example": "The story is mostly true.",
    "examplePt": "A história é em sua maioria verdadeira."
  },
  {
    "term": "Largely",
    "meaning": "Em grande parte (Tom formal para mostly.)",
    "category": "6. 50 Intensificadores",
    "pr": "LÁRJ-li",
    "example": "It was a largely successful project.",
    "examplePt": "Foi um projeto em grande parte bem-sucedido."
  },
  {
    "term": "Truly",
    "meaning": "Verdadeiramente (Dá sinceridade à frase.)",
    "category": "6. 50 Intensificadores",
    "pr": "TRÚ-li",
    "example": "This is truly wonderful.",
    "examplePt": "Isso é verdadeiramente maravilhoso."
  },
  {
    "term": "Strictly",
    "meaning": "Estritamente (Limite rígido ao adjetivo.)",
    "category": "6. 50 Intensificadores",
    "pr": "STRÍKT-li",
    "example": "This is strictly confidential.",
    "examplePt": "Isso é estritamente confidencial."
  },
  {
    "term": "Dead",
    "meaning": "Morto de / Extremamente (Gíria britânica (ex: dead tired).)",
    "category": "6. 50 Intensificadores",
    "pr": "déd",
    "example": "I'm dead tired.",
    "examplePt": "Estou morto de cansado."
  },
  {
    "term": "Marginally",
    "meaning": "Minimamente (Diferença insignificante.)",
    "category": "6. 50 Intensificadores",
    "pr": "MÁR-ji-na-li",
    "example": "Sales were marginally higher.",
    "examplePt": "As vendas foram minimamente maiores."
  },
  {
    "term": "Decidedly",
    "meaning": "Decididamente (Sem dúvidas sobre a qualidade.)",
    "category": "6. 50 Intensificadores",
    "pr": "di-SÁI-ded-li",
    "example": "The response was decidedly positive.",
    "examplePt": "A resposta foi decididamente positiva."
  },
  {
    "term": "Comparatively",
    "meaning": "Comparativamente (Compara com um padrão.)",
    "category": "6. 50 Intensificadores",
    "pr": "kam-PÁ-ra-tiv-li",
    "example": "It's a comparatively cheap option.",
    "examplePt": "É uma opção comparativamente barata."
  },
  {
    "term": "100%",
    "meaning": "Cem por cento (Expressa certeza absoluta na fala.)",
    "category": "6. 50 Intensificadores",
    "pr": "uân RÂN-dred per-SENT",
    "example": "I'm 100% sure.",
    "examplePt": "Tenho 100% de certeza."
  },
  {
    "term": "Exceptionally well",
    "meaning": "Excepcionalmente bem (Modo perfeito como algo está.)",
    "category": "6. 50 Intensificadores",
    "pr": "ik-SÉP-sho-na-li uél",
    "example": "Everything is going exceptionally well.",
    "examplePt": "Tudo está indo excepcionalmente bem."
  },
  {
    "term": "Good at",
    "meaning": "Bom em [Habilidade (não use 'good in').]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "gúd et",
    "example": "She is good at math.",
    "examplePt": "Ela é boa em matemática."
  },
  {
    "term": "Interested in",
    "meaning": "Interessado em [Demonstra interesse.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "ÍN-tres-ted in",
    "example": "Are you interested in history?",
    "examplePt": "Você está interessado em história?"
  },
  {
    "term": "Afraid of",
    "meaning": "Com medo de [Sentimento de medo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "â-FRÉID óv",
    "example": "I'm afraid of heights.",
    "examplePt": "Tenho medo de altura."
  },
  {
    "term": "Depend on",
    "meaning": "Depender de [Dependência (não use 'depend of').]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "di-PEND on",
    "example": "It depends on the weather.",
    "examplePt": "Depende do tempo."
  },
  {
    "term": "Think about",
    "meaning": "Pensar em [Pensamento em algo/alguém.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "SÍNK â-báut",
    "example": "I'm thinking about moving.",
    "examplePt": "Estou pensando em me mudar."
  },
  {
    "term": "Proud of",
    "meaning": "Orgulhoso de [Sentimento de orgulho.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "PRÁUD óv",
    "example": "We are proud of you.",
    "examplePt": "Estamos orgulhosos de você."
  },
  {
    "term": "Famous for",
    "meaning": "Famoso por [Razão do reconhecimento.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "FÉI-mas fór",
    "example": "Rio is famous for its beaches.",
    "examplePt": "O Rio é famoso por suas praias."
  },
  {
    "term": "Married to",
    "meaning": "Casado com [Estado civil (não use 'married with').]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "MÉ-rid tú",
    "example": "He is married to Sarah.",
    "examplePt": "Ele é casado com a Sarah."
  },
  {
    "term": "Excited about",
    "meaning": "Empolgado com [Entusiasmo com algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "ik-SÁI-ted â-báut",
    "example": "I'm excited about the trip.",
    "examplePt": "Estou empolgado com a viagem."
  },
  {
    "term": "Used to",
    "meaning": "Acostumado com [Hábito ou costume.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "IÚST tú",
    "example": "I'm used to waking up early.",
    "examplePt": "Estou acostumado a acordar cedo."
  },
  {
    "term": "Responsible for",
    "meaning": "Responsável por [Dever ou tarefa.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "ri-SPÓN-sa-bol fór",
    "example": "Who is responsible for this?",
    "examplePt": "Quem é o responsável por isso?"
  },
  {
    "term": "Different from",
    "meaning": "Diferente de [Comparação de diferença.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "DÍ-fe-rent frâm",
    "example": "My car is different from yours.",
    "examplePt": "Meu carro é diferente do seu."
  },
  {
    "term": "Similar to",
    "meaning": "Parecido com [Comparação de semelhança.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "SÍ-mi-lar tú",
    "example": "Your shirt is similar to mine.",
    "examplePt": "Sua camisa é parecida com a minha."
  },
  {
    "term": "Look forward to",
    "meaning": "Ansioso para [Expectativa positiva.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "LÚK FÓR-uard tú",
    "example": "I look forward to meeting you.",
    "examplePt": "Aguardo ansiosamente para te conhecer."
  },
  {
    "term": "Arrive at",
    "meaning": "Chegar em [Chegada em locais específicos.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "â-RÁIV et",
    "example": "We arrived at the airport.",
    "examplePt": "Chegamos ao aeroporto."
  },
  {
    "term": "Arrive in",
    "meaning": "Chegar em [Chegada em cidades/países.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "â-RÁIV in",
    "example": "They arrived in London.",
    "examplePt": "Eles chegaram a Londres."
  },
  {
    "term": "Happy with",
    "meaning": "Feliz / Satisfeito com [Satisfação pessoal.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "RÉ-pi uís",
    "example": "I'm very happy with the results.",
    "examplePt": "Estou muito feliz com os resultados."
  },
  {
    "term": "Bad at",
    "meaning": "Ruim em [Falta de habilidade.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "béd et",
    "example": "I'm bad at cooking.",
    "examplePt": "Sou ruim em cozinhar."
  },
  {
    "term": "Believe in",
    "meaning": "Acreditar em [Ter fé ou confiança.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "bi-LÍV in",
    "example": "Do you believe in magic?",
    "examplePt": "Você acredita em magia?"
  },
  {
    "term": "Belong to",
    "meaning": "Pertencer a [Propriedade de algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "bi-LÓNG tú",
    "example": "This book belongs to me.",
    "examplePt": "Este livro pertence a mim."
  },
  {
    "term": "Listen to",
    "meaning": "Ouvir / Escutar [Dar atenção ao som.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "LÍ-sen tú",
    "example": "Listen to this song!",
    "examplePt": "Escute essa música!"
  },
  {
    "term": "Wait for",
    "meaning": "Esperar por [Aguardar por algo/alguém.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "UÉIT fór",
    "example": "I'm waiting for the bus.",
    "examplePt": "Estou esperando pelo ônibus."
  },
  {
    "term": "Apologize for",
    "meaning": "Pedir desculpas por [Pedido de desculpas.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "â-PÓ-lo-diais fór",
    "example": "I apologize for being late.",
    "examplePt": "Peço desculpas pelo atraso."
  },
  {
    "term": "Complain about",
    "meaning": "Reclamar de [Reclamação de algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "kam-PLÉIN â-báut",
    "example": "Stop complaining about everything.",
    "examplePt": "Pare de reclamar de tudo."
  },
  {
    "term": "Pay for",
    "meaning": "Pagar por [Pagamento de produto/serviço.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "péi fór",
    "example": "I'll pay for dinner.",
    "examplePt": "Eu vou pagar o jantar."
  },
  {
    "term": "Talk about",
    "meaning": "Falar sobre [Conversar sobre algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "tók â-báut",
    "example": "Let's talk about our plans.",
    "examplePt": "Vamos falar sobre nossos planos."
  },
  {
    "term": "Worry about",
    "meaning": "Preocupar-se com [Preocupação.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "UÓ-ri â-báut",
    "example": "Don't worry about it.",
    "examplePt": "Não se preocupe com isso."
  },
  {
    "term": "Agree with",
    "meaning": "Concordar com [Concordância com pessoa/ideia.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "â-GRÍ uís",
    "example": "I agree with you.",
    "examplePt": "Eu concordo com você."
  },
  {
    "term": "Apply for",
    "meaning": "Candidatar-se a [Candidatura a vaga/bolsa.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "â-PLÁI fór",
    "example": "She applied for the job.",
    "examplePt": "Ela se candidatou à vaga."
  },
  {
    "term": "Ask for",
    "meaning": "Pedir por [Solicitação de algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "ésk fór",
    "example": "Ask for help if you need it.",
    "examplePt": "Peça ajuda se precisar."
  },
  {
    "term": "Care about",
    "meaning": "Importar-se com [Importar-se com algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "kér â-báut",
    "example": "I care about your health.",
    "examplePt": "Eu me importo com a sua saúde."
  },
  {
    "term": "Concentrate on",
    "meaning": "Concentrar-se em [Foco em uma tarefa.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "KÓN-sen-treit on",
    "example": "I need to concentrate on my work.",
    "examplePt": "Preciso me concentrar no meu trabalho."
  },
  {
    "term": "Deal with",
    "meaning": "Lidar com [Lidar com problema/situação.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "díl uís",
    "example": "I can deal with this problem.",
    "examplePt": "Eu consigo lidar com esse problema."
  },
  {
    "term": "Dream about",
    "meaning": "Sonhar com [Sonhar com algo/alguém.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "drím â-báut",
    "example": "I dreamed about flying.",
    "examplePt": "Sonhei que estava voando."
  },
  {
    "term": "Forget about",
    "meaning": "Esquecer-se de [Esquecimento.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "fór-GET â-báut",
    "example": "Forget about what I said.",
    "examplePt": "Esqueça o que eu disse."
  },
  {
    "term": "Laugh at",
    "meaning": "Rir de [Rir de uma piada/situação.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "LÉF et",
    "example": "They laughed at the joke.",
    "examplePt": "Eles riram da piada."
  },
  {
    "term": "Protect from",
    "meaning": "Proteger de [Proteção contra perigo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "pro-TÉKT frâm",
    "example": "Sunscreen protects you from the sun.",
    "examplePt": "Protetor protege do sol."
  },
  {
    "term": "Rely on",
    "meaning": "Contar com [Confiança/dependência.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "ri-LÁI on",
    "example": "You can rely on me.",
    "examplePt": "Você pode contar comigo."
  },
  {
    "term": "Spend on",
    "meaning": "Gastar em [Gasto de dinheiro/tempo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "spend on",
    "example": "I spend a lot on groceries.",
    "examplePt": "Gasto muito no mercado."
  },
  {
    "term": "Succeed in",
    "meaning": "Ter sucesso em [Sucesso em um objetivo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "suk-SÍD in",
    "example": "He succeeded in business.",
    "examplePt": "Ele teve sucesso nos negócios."
  },
  {
    "term": "Suffering from",
    "meaning": "Sofrer de [Sofrer de uma doença/dor.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "SÂ-fe-ring frâm",
    "example": "He is suffering from a cold.",
    "examplePt": "Ele está sofrendo com um resfriado."
  },
  {
    "term": "Kind to",
    "meaning": "Gentil com [Gentileza com alguém.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "kaind tú",
    "example": "Be kind to animals.",
    "examplePt": "Seja gentil com os animais."
  },
  {
    "term": "Rude to",
    "meaning": "Educado / Grosso com [Mal-educado com alguém.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "RÚD tú",
    "example": "Don't be rude to her.",
    "examplePt": "Não seja grosso com ela."
  },
  {
    "term": "Full of",
    "meaning": "Cheio de [Cheio de coisas/energia.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "fúl óv",
    "example": "The room was full of people.",
    "examplePt": "A sala estava cheia de pessoas."
  },
  {
    "term": "Short of",
    "meaning": "Com falta de [Falta de algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "shórt óv",
    "example": "We are short of time.",
    "examplePt": "Estamos com pouco tempo."
  },
  {
    "term": "Tired of",
    "meaning": "Cansado de [Cansaço mental de algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "TÁI-erd óv",
    "example": "I'm tired of waiting.",
    "examplePt": "Estou cansado de esperar."
  },
  {
    "term": "Aware of",
    "meaning": "Ciente de [Consciência de algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "â-UÉR óv",
    "example": "Are you aware of the rules?",
    "examplePt": "Você está ciente das regras?"
  },
  {
    "term": "Capable of",
    "meaning": "Capaz de [Capacidade de fazer algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "KÉI-pa-bol óv",
    "example": "You are capable of doing this.",
    "examplePt": "Você é capaz de fazer isso."
  },
  {
    "term": "Jealous of",
    "meaning": "Com inveja / ciúme de [Sentimento de inveja/ciúme.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "DJÉ-las óv",
    "example": "He is jealous of your success.",
    "examplePt": "Ele tem inveja do seu sucesso."
  },
  {
    "term": "Addicted to",
    "meaning": "Viciado em [Vício em algo.]",
    "category": "7. 50 Prep. Dependentes",
    "pr": "â-DÍK-ted tú",
    "example": "She is addicted to social media.",
    "examplePt": "Ela é viciada em redes sociais."
  },
  {
    "term": "Awesome",
    "meaning": "Incrível / Demais — Elogio muito positivo.",
    "category": "8. 50 Reações Rápidas",
    "pr": "Ó-sam",
    "example": "That's awesome!",
    "examplePt": "Que incrível!"
  },
  {
    "term": "Cool",
    "meaning": "Legal / Maneiro — Reação leve de aprovação.",
    "category": "8. 50 Reações Rápidas",
    "pr": "kúl",
    "example": "That's a cool jacket.",
    "examplePt": "É uma jaqueta legal."
  },
  {
    "term": "Great",
    "meaning": "Ótimo / Excelente — Concordância ou aprovação.",
    "category": "8. 50 Reações Rápidas",
    "pr": "gréit",
    "example": "Great, see you tomorrow!",
    "examplePt": "Ótimo, te vejo amanhã!"
  },
  {
    "term": "Right",
    "meaning": "Certo / Exato — Confirmação rápida.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ráit",
    "example": "Right, I understand.",
    "examplePt": "Certo, entendo."
  },
  {
    "term": "Exactly",
    "meaning": "Exatamente — Concordância total.",
    "category": "8. 50 Reações Rápidas",
    "pr": "eg-ZÉKT-li",
    "example": "Exactly, that's what I meant.",
    "examplePt": "Exatamente, foi isso que quis dizer."
  },
  {
    "term": "No way!",
    "meaning": "Não acredito! — Espanto ou negação forte.",
    "category": "8. 50 Reações Rápidas",
    "pr": "nóu uéi",
    "example": "No way! Did he really say that?",
    "examplePt": "Não acredito! Ele disse mesmo isso?"
  },
  {
    "term": "Sounds good",
    "meaning": "Combinado / Fechado — Aceitar plano/sugestão.",
    "category": "8. 50 Reações Rápidas",
    "pr": "saunds gúd",
    "example": "Let's meet at 7. — Sounds good!",
    "examplePt": "Encontro às 7. — Combinado!"
  },
  {
    "term": "Unbelievable",
    "meaning": "Inacreditável — Reação a fato absurdo.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ân-bi-LÍ-va-bol",
    "example": "That story is unbelievable.",
    "examplePt": "Essa história é inacreditável."
  },
  {
    "term": "Fair enough",
    "meaning": "Justo / Faz sentido — Aceitar argumento justo.",
    "category": "8. 50 Reações Rápidas",
    "pr": "fér i-NÂF",
    "example": "I can't go today. — Fair enough.",
    "examplePt": "Não posso ir hoje. — Justo."
  },
  {
    "term": "Makes sense",
    "meaning": "Faz sentido — Compreensão de lógica.",
    "category": "8. 50 Reações Rápidas",
    "pr": "meiks sens",
    "example": "Oh, now it makes sense.",
    "examplePt": "Ah, agora faz sentido."
  },
  {
    "term": "No worries",
    "meaning": "Sem problemas — Resposta a agradecimento/desculpa.",
    "category": "8. 50 Reações Rápidas",
    "pr": "nóu UÓ-rís",
    "example": "Thanks for helping. — No worries!",
    "examplePt": "Obrigado pela ajuda. — Sem problemas!"
  },
  {
    "term": "I got it",
    "meaning": "Entendi / Peguei — Compreender instrução.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ai gót it",
    "example": "I got it, don't worry.",
    "examplePt": "Entendi, não se preocupe."
  },
  {
    "term": "Gotcha",
    "meaning": "Entendi / Sacou — Versão informal de I got it.",
    "category": "8. 50 Reações Rápidas",
    "pr": "GÓ-tcha",
    "example": "Gotcha, I'll do it right now.",
    "examplePt": "Entendi, vou fazer isso agora mesmo."
  },
  {
    "term": "For real?",
    "meaning": "Sério mesmo? — Dúvida com espanto.",
    "category": "8. 50 Reações Rápidas",
    "pr": "fór RÍL",
    "example": "For real? I had no idea.",
    "examplePt": "Sério mesmo? Eu não tinha ideia."
  },
  {
    "term": "Oh, really?",
    "meaning": "Ah, é mesmo? — Demonstrar interesse simples.",
    "category": "8. 50 Reações Rápidas",
    "pr": "óu RÍ-li",
    "example": "Oh, really? Tell me more.",
    "examplePt": "Ah, é mesmo? Me conta mais."
  },
  {
    "term": "I see",
    "meaning": "Entendo / Compreendo — Indicar que está acompanhando.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ai sí",
    "example": "I see what you mean.",
    "examplePt": "Compreendo o que você quer dizer."
  },
  {
    "term": "Go ahead",
    "meaning": "Fique à vontade — Dar permissão para agir.",
    "category": "8. 50 Reações Rápidas",
    "pr": "góu â-HÉD",
    "example": "Can I sit here? — Go ahead!",
    "examplePt": "Posso sentar aqui? — Fique à vontade!"
  },
  {
    "term": "Never mind",
    "meaning": "Deixa pra lá — Pedir para desconsiderar.",
    "category": "8. 50 Reações Rápidas",
    "pr": "NÉ-ver maind",
    "example": "Never mind, I'll do it myself.",
    "examplePt": "Deixa pra lá, eu mesmo faço."
  },
  {
    "term": "That's crazy!",
    "meaning": "Que loucura! — Reação a surpresa grande.",
    "category": "8. 50 Reações Rápidas",
    "pr": "déts KRÉI-zi",
    "example": "You won the lottery? That's crazy!",
    "examplePt": "Você ganhou na loteria? Que loucura!"
  },
  {
    "term": "Come again?",
    "meaning": "Como? / Repete? — Pedir repetição da frase.",
    "category": "8. 50 Reações Rápidas",
    "pr": "kâm â-GÉIN",
    "example": "Come again? I didn't hear you.",
    "examplePt": "Como? Não te ouvi."
  },
  {
    "term": "You bet!",
    "meaning": "Com certeza! — Resposta entusiasmada.",
    "category": "8. 50 Reações Rápidas",
    "pr": "iú bet",
    "example": "Thanks for the help! — You bet!",
    "examplePt": "Obrigado pela ajuda! — Com certeza!"
  },
  {
    "term": "Totally!",
    "meaning": "Com certeza! — Concordância e aprovação.",
    "category": "8. 50 Reações Rápidas",
    "pr": "TÓU-ra-li",
    "example": "Are you coming? — Totally!",
    "examplePt": "Você vai? — Com certeza!"
  },
  {
    "term": "For sure",
    "meaning": "Com certeza — Confirmação simples.",
    "category": "8. 50 Reações Rápidas",
    "pr": "fór shúr",
    "example": "Can you help me? — For sure!",
    "examplePt": "Pode me ajudar? — Com certeza!"
  },
  {
    "term": "I know, right?",
    "meaning": "Né? / Nem me fale! — Concordância de opinião.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ai nóu, ráit",
    "example": "It's so hot today! — I know, right?",
    "examplePt": "Está tão quente hoje! — Né?"
  },
  {
    "term": "No problem",
    "meaning": "De nada / De boa — Resposta a agradecimento.",
    "category": "8. 50 Reações Rápidas",
    "pr": "nóu PRÓ-blem",
    "example": "Thank you! — No problem!",
    "examplePt": "Obrigado! — De nada!"
  },
  {
    "term": "That sucks!",
    "meaning": "Que chato! / Que droga! — Empatia a fato ruim (gíria).",
    "category": "8. 50 Reações Rápidas",
    "pr": "dét sâks",
    "example": "I lost my keys. — That sucks!",
    "examplePt": "Perdi minhas chaves. — Que chato!"
  },
  {
    "term": "Good for you!",
    "meaning": "Que bom para você! — Elogio a conquista alheia.",
    "category": "8. 50 Reações Rápidas",
    "pr": "gúd fór iú",
    "example": "I passed the test! — Good for you!",
    "examplePt": "Passei no teste! — Que bom para você!"
  },
  {
    "term": "I'm in!",
    "meaning": "Tô dentro! — Aceitar convite.",
    "category": "8. 50 Reações Rápidas",
    "pr": "aim in",
    "example": "We are going to the beach. — I'm in!",
    "examplePt": "Vamos à praia. — Tô dentro!"
  },
  {
    "term": "Count me in!",
    "meaning": "Conta comigo! — Variação de 'tô dentro'.",
    "category": "8. 50 Reações Rápidas",
    "pr": "káunt mí in",
    "example": "Who wants pizza? — Count me in!",
    "examplePt": "Quem quer pizza? — Conta comigo!"
  },
  {
    "term": "I agree",
    "meaning": "Concordo — Concordância formal.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ai â-GRÍ",
    "example": "I agree with your point.",
    "examplePt": "Concordo com o seu ponto."
  },
  {
    "term": "Definitely",
    "meaning": "Com certeza — Afirmação direta.",
    "category": "8. 50 Reações Rápidas",
    "pr": "DÉ-fi-nit-li",
    "example": "Will you go? — Definitely!",
    "examplePt": "Você vai? — Com certeza!"
  },
  {
    "term": "Absolutely!",
    "meaning": "Com toda certeza! — Afirmação forte.",
    "category": "8. 50 Reações Rápidas",
    "pr": "eb-so-LÚT-li",
    "example": "Is it ready? — Absolutely!",
    "examplePt": "Está pronto? — Com toda certeza!"
  },
  {
    "term": "By the way",
    "meaning": "A propósito — Mudança de assunto.",
    "category": "8. 50 Reações Rápidas",
    "pr": "bai dâ uéi",
    "example": "By the way, where is John?",
    "examplePt": "A propósito, onde está o John?"
  },
  {
    "term": "Anyway",
    "meaning": "Enfim / De qualquer forma — Retomada da conversa.",
    "category": "8. 50 Reações Rápidas",
    "pr": "É-ni-uéi",
    "example": "Anyway, back to the story...",
    "examplePt": "Enfim, voltando à história..."
  },
  {
    "term": "Seriously?",
    "meaning": "É sério? — Questionamento de veracidade.",
    "category": "8. 50 Reações Rápidas",
    "pr": "SÍ-ri-as-li",
    "example": "He quit his job. — Seriously?",
    "examplePt": "Ele pediu demissão. — É sério?"
  },
  {
    "term": "Are you kidding?",
    "meaning": "Tá de brincadeira? — Surpresa/Incredulidade.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ár iú KÍ-ding",
    "example": "You met the president? Are you kidding?",
    "examplePt": "Você conheceu o presidente? Tá de brincadeira?"
  },
  {
    "term": "I hope so",
    "meaning": "Espero que sim — Desejo positivo.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ai hóup sóu",
    "example": "Will it stop raining? — I hope so.",
    "examplePt": "Vai parar de chover? — Espero que sim."
  },
  {
    "term": "I guess so",
    "meaning": "Acho que sim — Concordância com incerteza.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ai gues sóu",
    "example": "Is he coming? — I guess so.",
    "examplePt": "Ele vai vir? — Acho que sim."
  },
  {
    "term": "I don't think so",
    "meaning": "Acho que não — Discordância com cautela.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ai dónt sínk sóu",
    "example": "Will it rain today? — I don't think so.",
    "examplePt": "Vai chover hoje? — Acho que não."
  },
  {
    "term": "Same here",
    "meaning": "Eu também / Digo o mesmo — Concordância de experiência.",
    "category": "8. 50 Reações Rápidas",
    "pr": "séim híer",
    "example": "I'm so hungry. — Same here.",
    "examplePt": "Estou com tanta fome. — Eu também."
  },
  {
    "term": "Me neither",
    "meaning": "Nem eu — Concordância com frase negativa.",
    "category": "8. 50 Reações Rápidas",
    "pr": "mí NÍ-der",
    "example": "I don't like horror movies. — Me neither.",
    "examplePt": "Não gosto de filmes de terror. — Nem eu."
  },
  {
    "term": "Take your time",
    "meaning": "Sem pressa / No seu tempo — Pedir sem pressa.",
    "category": "8. 50 Reações Rápidas",
    "pr": "téik iór táim",
    "example": "I'm getting ready. — Take your time!",
    "examplePt": "Estou me arrumando. — Sem pressa!"
  },
  {
    "term": "Never heard of it",
    "meaning": "Nunca ouvi falar — Desconhecimento total.",
    "category": "8. 50 Reações Rápidas",
    "pr": "NÉ-ver rêrd óv it",
    "example": "Do you know this brand? — Never heard of it.",
    "examplePt": "Conhece essa marca? — Nunca ouvi falar."
  },
  {
    "term": "Tell me about it!",
    "meaning": "Nem me fale! — Concordância empática.",
    "category": "8. 50 Reações Rápidas",
    "pr": "tel mí â-báut it",
    "example": "Traffic is horrible today. — Tell me about it!",
    "examplePt": "O trânsito está horrível hoje. — Nem me fale!"
  },
  {
    "term": "I doubt it",
    "meaning": "Duvido — Ceticismo quanto a algo.",
    "category": "8. 50 Reações Rápidas",
    "pr": "ai dáut it",
    "example": "Will he apologize? — I doubt it.",
    "examplePt": "Ele vai se desculpar? — Duvido."
  },
  {
    "term": "No doubt",
    "meaning": "Sem dúvidas — Certeza indiscutível.",
    "category": "8. 50 Reações Rápidas",
    "pr": "nóu dáut",
    "example": "He is the best player, no doubt.",
    "examplePt": "Ele é o melhor jogador, sem dúvidas."
  },
  {
    "term": "Don't mention it",
    "meaning": "Não há de quê — Resposta a agradecimento.",
    "category": "8. 50 Reações Rápidas",
    "pr": "dónt MÉN-shan it",
    "example": "Thanks for the ride! — Don't mention it.",
    "examplePt": "Obrigado pela carona! — Não há de quê."
  },
  {
    "term": "My bad!",
    "meaning": "Foi mal! — Admitir erro pequeno.",
    "category": "8. 50 Reações Rápidas",
    "pr": "mái béd",
    "example": "I dropped the pen. My bad!",
    "examplePt": "Derrubei a caneta. Foi mal!"
  },
  {
    "term": "No hard feelings",
    "meaning": "Sem ressentimentos — Sem ressentimento.",
    "category": "8. 50 Reações Rápidas",
    "pr": "nóu hárd FÍ-lings",
    "example": "Sorry I couldn't make it. — No hard feelings!",
    "examplePt": "Desculpe não ter ido. — Sem ressentimentos!"
  },
  {
    "term": "Catch you later",
    "meaning": "Te vejo mais tarde — Despedida informal.",
    "category": "8. 50 Reações Rápidas",
    "pr": "kétch iú LÉI-ter",
    "example": "I have to go now. Catch you later!",
    "examplePt": "Tenho que ir agora. Te vejo mais tarde!"
  }
];

// Retrocompatibilidade
export const VOCABULARY_DATA = {
  pdf_guide: ALL_PDF_VOCABULARY,
  conversational: ALL_PDF_VOCABULARY.filter(i => i.category.includes('Reações') || i.category.includes('Marcadores')),
  verbs: ALL_PDF_VOCABULARY.filter(i => i.category === '1. 50 Verbos'),
  adjectives: ALL_PDF_VOCABULARY.filter(i => i.category === '2. 50 Adjetivos'),
  prepositions: ALL_PDF_VOCABULARY.filter(i => i.category === '3. 50 Preposições')
};
