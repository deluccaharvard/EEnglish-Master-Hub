# -*- coding: utf-8 -*-
import json
import random
from def_ciencias import CIENCIAS_DATA
from def_formas import FORMAS_DATA
from def_objetos import OBJETOS_DATA
from def_geografia_comida import GEOGRAFIA_COMIDA_DATA

themes = [
    {
        "id": "ciencias",
        "label": "Ciência e Natureza",
        "en": "Science & Nature",
        "short": "sci",
        "data": CIENCIAS_DATA
    },
    {
        "id": "formas",
        "label": "Objetos Geométricos",
        "en": "Geometric Objects & Shapes",
        "short": "geo",
        "data": FORMAS_DATA
    },
    {
        "id": "objetos",
        "label": "Objetos do Dia a Dia (Foco na Escola)",
        "en": "School & Daily Objects",
        "short": "sch",
        "data": OBJETOS_DATA
    },
    {
        "id": "geografia_comida",
        "label": "Geografia e Comida",
        "en": "Geography & Food",
        "short": "gf",
        "data": GEOGRAFIA_COMIDA_DATA
    }
]

diff_map = {
    "facil": "f",
    "medio": "m",
    "dificil": "d"
}

all_vocab_items = []

for t in themes:
    t_id = t["id"]
    t_short = t["short"]
    for diff in ["facil", "medio", "dificil"]:
        items = t["data"][diff]
        d_short = diff_map[diff]
        for idx, item in enumerate(items):
            word_en, word_pt, phonetic, sentence, sentence_pt, rationale_text = item
            word_en_cap = word_en[0].upper() + word_en[1:]
            
            other_items = [x for i, x in enumerate(items) if i != idx]
            rng = random.Random(f"{t_id}_{diff}_{idx}")
            chosen_distractors = rng.sample(other_items, 3)
            
            correct_opt = {
                "text": word_en_cap,
                "isCorrect": True,
                "rationale": f"'{word_en_cap}' é a tradução correta para '{word_pt}'."
            }
            distractor_opts = [
                {
                    "text": d[0].upper() + d[0][1:],
                    "isCorrect": False,
                    "rationale": f"'{d[0].upper() + d[0][1:]}' significa '{d[1]}', não '{word_pt}'."
                }
                for d in chosen_distractors
            ]
            
            pos = idx % 4
            options_list = list(distractor_opts)
            options_list.insert(pos, correct_opt)
            
            letters = ["A", "B", "C", "D"]
            final_options = []
            for l_idx, opt in enumerate(options_list):
                final_options.append({
                    "id": letters[l_idx],
                    "text": opt["text"],
                    "isCorrect": opt["isCorrect"],
                    "rationale": opt["rationale"]
                })
            
            vocab_obj = {
                "id": f"sql-{t_short}-{d_short}-{idx+1:02d}",
                "topic": t_id,
                "difficulty": diff,
                "wordEn": word_en_cap,
                "wordPt": word_pt,
                "phonetic": phonetic,
                "sentence": sentence,
                "sentencePt": sentence_pt,
                "exampleEn": sentence.replace("_________", word_en_cap),
                "examplePt": sentence_pt,
                "gapWord": word_en_cap,
                "question": f"Como se diz '{word_pt}' em inglês?",
                "hint": rationale_text,
                "rationale": f"'{word_en_cap}' ({phonetic}): {rationale_text}",
                "options": final_options
            }
            all_vocab_items.append(vocab_obj)

print("Generated all 600 items successfully.")

ts_header = """import { VocabItem } from '../types';

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

export const LOCAL_DATABASE: VocabItem[] = """

json_content = json.dumps(all_vocab_items, ensure_ascii=False, indent=2)

ts_footer = """;

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
"""

with open("../src/data/database.ts", "w", encoding="utf-8") as f:
    f.write(ts_header + json_content + ts_footer)

print("Successfully written to src/data/database.ts!")
