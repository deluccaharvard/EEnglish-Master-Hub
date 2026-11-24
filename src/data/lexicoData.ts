import { LexicoItem } from '../types';

export const DICIONARIO_INICIAL: LexicoItem[] = [
  // Categoria: Geral / Transição para Inglês Fluido
  {
    cotidiano: "I want to talk about...",
    elegante: "I would like to discuss...",
    significado: "Em inglês, 'want' soa excessivamente infantil ou mandão. 'Would like to discuss' eleva a conversa a um tom profissional e maduro.",
    categoria: "geral"
  },
  {
    cotidiano: "I think that's a bad idea.",
    elegante: "I have some reservations regarding this approach.",
    significado: "Dizer diretamente que uma ideia é 'ruim' pode quebrar o rapport. 'Reservations' expressa discordância de forma polida e construtiva.",
    categoria: "geral"
  },
  {
    cotidiano: "Help me with this.",
    elegante: "Could you please assist me with this matter?",
    significado: "Evita o imperativo direto de comando. O uso de 'assist' e 'matter' suaviza e formaliza o pedido de ajuda.",
    categoria: "geral"
  },
  {
    cotidiano: "I don't understand.",
    elegante: "Could you clarify that point for me?",
    significado: "Em vez de colocar a culpa em si ou no interlocutor, solicita uma elucidação elegante e profissional.",
    categoria: "geral"
  },

  // Categoria: Elogios (Compliments)
  {
    cotidiano: "You work very hard.",
    elegante: "Your work ethic and dedication are highly commendable.",
    significado: "Em vez de um elogio genérico de esforço, 'commendable' (louvável) destaca o profissionalismo e a admirável ética de trabalho da pessoa.",
    categoria: "elogios"
  },
  {
    cotidiano: "I like your ideas.",
    elegante: "I find your insights highly innovative and forward-thinking.",
    significado: "Troca o simples 'ideas' por 'insights' (percepções refinadas) e coroa com 'forward-thinking', que significa visionário e inovador.",
    categoria: "elogios"
  },
  {
    cotidiano: "Your presentation was great.",
    elegante: "Your presentation was exceptionally articulate and well-structured.",
    significado: "Elogia especificamente a eloquência de quem falou ('articulate') e a impecável organização da linha de raciocínio da apresentação.",
    categoria: "elogios"
  },
  {
    cotidiano: "You are a very good leader.",
    elegante: "You possess a remarkable ability to inspire and guide others.",
    significado: "Dizer que alguém é um 'bom líder' é comum. Destacar a habilidade de inspiração e mentoria ('inspire and guide') demonstra profundo respeito intelectual.",
    categoria: "elogios"
  },

  // Categoria: Corporativo & Negócios
  {
    cotidiano: "Your work is very good.",
    elegante: "Your contribution has been invaluable to our progress.",
    significado: "Transforma um feedback genérico ('very good') em um reconhecimento profundo de valor profissional, usando o adjetivo sofisticado 'invaluable'.",
    categoria: "corporativo"
  },
  {
    cotidiano: "You are very smart.",
    elegante: "You possess a highly analytical and insightful perspective.",
    significado: "Elogio intelectual refinado. Em vez do simples 'smart', ressalta-se a profundidade da visão analítica de mundo da pessoa.",
    categoria: "corporativo"
  },
  {
    cotidiano: "Send me the files quickly.",
    elegante: "Could you kindly provide the documentation at your earliest convenience?",
    significado: "Substitui a pressão rude pelo padrão executivo internacional 'at your earliest convenience'.",
    categoria: "corporativo"
  },
  {
    cotidiano: "We disagree with your price.",
    elegante: "We would appreciate exploring more commercially viable alternatives.",
    significado: "Em vez de fechar a porta com 'está caro', convida a outra parte a negociar alternativas viáveis.",
    categoria: "corporativo"
  },

  // Categoria: Perguntas e Questionamentos Diplomáticos
  {
    cotidiano: "What do you mean?",
    elegante: "Could you please elaborate on your perspective?",
    significado: "Evita soar defensivo ou acusatório. Solicita que a pessoa detalhe seus argumentos de forma acolhedora com o verbo 'elaborate'.",
    categoria: "perguntas"
  },
  {
    cotidiano: "Are you sure about this?",
    elegante: "Has this assertion been verified against the latest data?",
    significado: "Em vez de questionar a memória ou capacidade do colega diretamente, transfere-se o foco para a checagem profissional dos fatos.",
    categoria: "perguntas"
  },
  {
    cotidiano: "Why did you do that?",
    elegante: "Could you walk me through the reasoning behind this decision?",
    significado: "O 'Why did you' soa como interrogatório policial. 'Walk me through the reasoning' convida à parceria e ao entendimento mútuo.",
    categoria: "perguntas"
  },
  {
    cotidiano: "Who said that?",
    elegante: "Could you direct me to the primary source of this information?",
    significado: "Neutraliza fofocas ou boatos exigindo a fonte primária com máxima polidez corporativa.",
    categoria: "perguntas"
  },

  // Categoria: Limites Diplomáticos (A famosa "Virada de Mesa" polida)
  {
    cotidiano: "Shut up / Stop talking.",
    elegante: "I would appreciate it if we could allow each other to finish speaking.",
    significado: "Restabelece os limites de respeito mútuo em uma reunião sem descer ao nível da agressividade verbal.",
    categoria: "limites"
  },
  {
    cotidiano: "Do this for me now.",
    elegante: "Could you kindly prioritize this task as your schedule permits?",
    significado: "Uma forma polida de acelerar uma entrega sem parecer autoritário ou desrespeitar a agenda alheia.",
    categoria: "limites"
  },
  {
    cotidiano: "That's not my problem.",
    elegante: "While I understand the concern, this falls outside my current scope of responsibility.",
    significado: "Afasta de forma cirúrgica e corporativamente perfeita tarefas que não pertencem ao seu escopo de trabalho.",
    categoria: "limites"
  },
  {
    cotidiano: "You don't know what you are saying.",
    elegante: "Perhaps we could re-evaluate the premises of this argument.",
    significado: "Desconstrói o erro do outro de forma sutil, apontando para a necessidade de revisar as premissas de maneira neutra.",
    categoria: "limites"
  }
];
