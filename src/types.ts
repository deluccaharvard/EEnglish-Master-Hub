export type GameMode =
  | 'hub'
  | 'quiz'
  | 'memory'
  | 'columns'
  | 'flashcards'
  | 'chain'
  | 'scramble'
  | 'saver'
  | 'gaps'
  | 'odd_one_out'
  | 'geoquest'
  | 'map_pinpoint'
  | 'flag_match'
  | 'science_lab'
  | 'myth_busters'
  | 'food_chain'
  | 'speed_run'
  | 'story_quiz'
  | 'categories'
  | 'sound_spelling'
  | 'crossword'
  | 'survivor'
  | 'sign_master';

export type GameState = 'menu' | 'loading_ai' | 'game' | 'finished';

export type TopicId = 'todos' | 'ciencias' | 'formas' | 'objetos' | 'geografia_comida' | 'viagens' | 'tecnologia' | 'comida' | 'animais';

export type DifficultyId = 'todas' | 'facil' | 'medio' | 'dificil';

export interface QuizOption {
  id: string;
  text: string;
  isCorrect: boolean;
  rationale: string;
}

export interface VocabItem {
  id: string;
  topic?: string;
  difficulty?: string;
  wordEn: string;
  wordPt: string;
  phonetic?: string;
  sentence?: string;
  sentencePt?: string;
  exampleEn?: string;
  examplePt?: string;
  gapWord?: string;
  question?: string;
  hint?: string;
  rationale?: string;
  options?: QuizOption[];
}

export interface MemoryCard {
  cardId: string;
  pairId: string;
  lang: 'en' | 'pt';
  text: string;
  wordEn: string;
  hint?: string;
}

export interface ColumnItem {
  pairId: string;
  text: string;
  wordEn: string;
  hint?: string;
}

export interface ScrambleLetter {
  id: string;
  char: string;
}

export interface SRSStats {
  easy: number;
  medium: number;
  hard: number;
}

// 1. Odd One Out
export interface OddOneOutItem {
  id: string;
  topic: string;
  difficulty: string;
  groupTheme: string;
  items: { wordEn: string; wordPt: string; isIntruder: boolean }[];
  intruderWordEn: string;
  intruderWordPt: string;
  reasonEn: string;
  reasonPt: string;
  justificationOptions: { id: string; text: string; isCorrect: boolean }[];
}

// 2. GeoQuest
export interface GeoQuestItem {
  id: string;
  targetNameEn: string;
  targetNamePt: string;
  category: 'country' | 'continent' | 'landmark' | 'ocean';
  flagEmoji?: string;
  clues: string[];
  funFact: string;
  options: string[];
}

// 3. Map Pinpoint
export interface MapPinpointItem {
  id: string;
  promptEn: string;
  promptPt: string;
  targetId: string;
  targetName: string;
  targetType: 'ocean' | 'continent' | 'country';
  coords: { x: number; y: number }; // Percentage 0-100 on map
  radius: number; // Tolerance in percentage points
  explanation: string;
}

// 4. Flag & Language Match
export interface CountryMatchItem {
  id: string;
  countryEn: string;
  countryPt: string;
  flagEmoji: string;
  capital: string;
  language: string;
}

// 5. Science Lab: Order the Process
export interface ScienceStep {
  id: string;
  order: number;
  titleEn: string;
  titlePt: string;
  descEn: string;
  descPt: string;
}

export interface ScienceProcessItem {
  id: string;
  processNameEn: string;
  processNamePt: string;
  difficulty: string;
  intro: string;
  steps: ScienceStep[];
  scientificPrinciple: string;
}

// 6. True or False: Myth Busters
export interface MythBusterItem {
  id: string;
  topic: string;
  difficulty: string;
  statementEn: string;
  statementPt: string;
  isTrue: boolean;
  busterEn: string;
  busterPt: string;
}

// 7. Food Chain Builder
export interface FoodChainOrganism {
  id: string;
  nameEn: string;
  namePt: string;
  icon: string;
  trophicLevel: 'producer' | 'herbivore' | 'carnivore' | 'decomposer';
  energyDescription: string;
}

// 8. Story Quiz (Choose-your-own-adventure)
export interface StoryOption {
  id: string;
  actionEn: string;
  actionPt: string;
  feedbackEn: string;
  feedbackPt: string;
  isCorrect: boolean;
  points: number;
  nextSceneIndex?: number;
}

export interface StoryScene {
  id: number;
  title: string;
  settingEn: string;
  settingPt: string;
  promptEn: string;
  promptPt: string;
  options: StoryOption[];
}

export interface StoryAdventure {
  id: string;
  title: string;
  scenario: string;
  scenes: StoryScene[];
}

// 9. Categories
export interface CategoryBin {
  id: string;
  nameEn: string;
  namePt: string;
  icon: string;
  color: string;
}

export interface CategoryWordItem {
  id: string;
  wordEn: string;
  wordPt: string;
  categoryId: string;
  hint: string;
}

// 10. Sound & Spelling
export interface SoundSpellingItem {
  id: string;
  wordEn: string;
  wordPt: string;
  phonetic: string;
  exampleSentence: string;
  hint: string;
}

// 11. Crossword Quiz
export interface CrosswordClue {
  id: string;
  number: number;
  direction: 'across' | 'down';
  clueEn: string;
  cluePt: string;
  answer: string;
  row: number;
  col: number;
}

export interface CrosswordGrid {
  id: string;
  title: string;
  rows: number;
  cols: number;
  clues: CrosswordClue[];
}

// 12. Survivor Trivia
export interface SurvivorQuestion {
  id: string;
  prizeAmount: number;
  questionEn: string;
  questionPt: string;
  hint: string;
  options: QuizOption[];
}

// 13. Sign Master & AI Teacher
export interface SignMasterItem {
  id: string;
  environment: 'traffic' | 'shopping' | 'airport' | 'metro' | 'cafe';
  signText: string;
  subText?: string;
  symbol: string;
  signType: 'danger' | 'warning' | 'info' | 'mandatory';
  translationPt: string;
  realWorldContext: string;
  practiceQuestion: string;
  options: QuizOption[];
  aiTeacherTip: string;
}

// 14. Teacher Tool (Laboratório de Fala com IA)
export type TeacherTabType = 'pdf_guide' | 'quiz' | 'conversational' | 'verbs' | 'adjectives' | 'prepositions';

export interface VocabularyItem {
  term: string;
  meaning: string;
  category?: string;
  pr: string;
  example?: string;
  examplePt?: string;
}

export interface SelectedWords {
  verb: string;
  modifier: string;
  adj: string;
}

export interface NotificationState {
  message: string;
  type: 'info' | 'warning' | 'success';
}

// 15. Léxico Polido (Dicionário Elegante)
export interface LexicoItem {
  id?: string;
  cotidiano: string;
  elegante: string;
  significado: string;
  categoria: 'geral' | 'corporativo' | 'elogios' | 'perguntas' | 'limites' | string;
}

// 16. Autenticação e Sessão da Plataforma
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  provider: 'local' | 'supabase';
  createdAt: string;
}

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

