import React, { useState } from 'react';
import {
  BookOpen,
  FlaskConical,
  Shapes,
  Box,
  Plane,
  Cpu,
  Utensils,
  Cat,
  Sparkles,
  Sliders,
  ListOrdered,
  Grid,
  Columns,
  Layers,
  Zap,
  Type,
  LifeBuoy,
  Edit3,
  ArrowRight,
  HelpCircle,
  Database,
  Target,
  Compass,
  MapPin,
  Flag,
  TreePine,
  Flame,
  Boxes,
  Volume2,
  Hash,
  Award,
  Signpost
} from 'lucide-react';
import { GameMode, TopicId, DifficultyId } from '../types';
import { TOPICS, DIFFICULTIES, GAME_MODES_INFO } from '../data/database';

interface HubMenuProps {
  selectedTopic: TopicId;
  onSelectTopic: (topic: TopicId) => void;
  selectedDifficulty: DifficultyId;
  onSelectDifficulty: (diff: DifficultyId) => void;
  itemCount: number;
  onSelectCount: (count: number) => void;
  useAiGenerator: boolean;
  onToggleAiGenerator: (val: boolean) => void;
  availableItemsCount: number;
  onLaunchGame: (mode: GameMode) => void;
}

export const HubMenu: React.FC<HubMenuProps> = ({
  selectedTopic,
  onSelectTopic,
  selectedDifficulty,
  onSelectDifficulty,
  itemCount,
  onSelectCount,
  useAiGenerator,
  onToggleAiGenerator,
  availableItemsCount,
  onLaunchGame,
}) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('todos');

  const getTopicIcon = (id: string) => {
    switch (id) {
      case 'ciencias': return <FlaskConical className="w-4 h-4" />;
      case 'formas': return <Shapes className="w-4 h-4" />;
      case 'objetos': return <Box className="w-4 h-4" />;
      case 'geografia_comida': return <Compass className="w-4 h-4" />;
      case 'viagens': return <Plane className="w-4 h-4" />;
      case 'tecnologia': return <Cpu className="w-4 h-4" />;
      case 'comida': return <Utensils className="w-4 h-4" />;
      case 'animais': return <Cat className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getModeIcon = (iconName: string) => {
    switch (iconName) {
      case 'ListOrdered': return <ListOrdered className="w-6 h-6" />;
      case 'Grid': return <Grid className="w-6 h-6" />;
      case 'Columns': return <Columns className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      case 'Type': return <Type className="w-6 h-6" />;
      case 'LifeBuoy': return <LifeBuoy className="w-6 h-6" />;
      case 'Edit3': return <Edit3 className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'Flag': return <Flag className="w-6 h-6" />;
      case 'FlaskConical': return <FlaskConical className="w-6 h-6" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6" />;
      case 'TreePine': return <TreePine className="w-6 h-6" />;
      case 'Flame': return <Flame className="w-6 h-6" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6" />;
      case 'Boxes': return <Boxes className="w-6 h-6" />;
      case 'Volume2': return <Volume2 className="w-6 h-6" />;
      case 'Hash': return <Hash className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Signpost': return <Signpost className="w-6 h-6" />;
      default: return <BookOpen className="w-6 h-6" />;
    }
  };

  const getCardTheme = (modeId: string) => {
    switch (modeId) {
      case 'quiz':
        return {
          border: 'border-b-8 border-indigo-200',
          iconBg: 'bg-indigo-100 text-indigo-600',
          badge: 'text-indigo-600 bg-indigo-50',
          btn: 'bg-indigo-600 text-white',
        };
      case 'memory':
        return {
          border: 'border-b-8 border-rose-200',
          iconBg: 'bg-rose-100 text-rose-500',
          badge: 'text-rose-600 bg-rose-50',
          btn: 'bg-rose-500 text-white',
        };
      case 'columns':
        return {
          border: 'border-b-8 border-sky-200',
          iconBg: 'bg-sky-100 text-sky-600',
          badge: 'text-sky-600 bg-sky-50',
          btn: 'bg-sky-500 text-white',
        };
      case 'flashcards':
        return {
          border: 'border-b-8 border-orange-200',
          iconBg: 'bg-orange-100 text-orange-600',
          badge: 'text-orange-600 bg-orange-50',
          btn: 'bg-orange-500 text-white',
        };
      case 'chain':
        return {
          border: 'border-b-8 border-amber-200',
          iconBg: 'bg-amber-100 text-amber-600',
          badge: 'text-amber-600 bg-amber-50',
          btn: 'bg-amber-500 text-white',
        };
      case 'scramble':
        return {
          border: 'border-b-8 border-teal-200',
          iconBg: 'bg-teal-100 text-teal-600',
          badge: 'text-teal-600 bg-teal-50',
          btn: 'bg-teal-500 text-white',
        };
      case 'saver':
        return {
          border: 'border-b-8 border-emerald-200',
          iconBg: 'bg-emerald-100 text-emerald-600',
          badge: 'text-emerald-600 bg-emerald-50',
          btn: 'bg-emerald-500 text-white',
        };
      case 'gaps':
        return {
          border: 'border-b-8 border-purple-200',
          iconBg: 'bg-purple-100 text-purple-600',
          badge: 'text-purple-600 bg-purple-50',
          btn: 'bg-purple-500 text-white',
        };
      case 'odd_one_out':
        return {
          border: 'border-b-8 border-fuchsia-200',
          iconBg: 'bg-fuchsia-100 text-fuchsia-600',
          badge: 'text-fuchsia-600 bg-fuchsia-50',
          btn: 'bg-fuchsia-600 text-white',
        };
      case 'geoquest':
        return {
          border: 'border-b-8 border-emerald-300',
          iconBg: 'bg-emerald-100 text-emerald-700',
          badge: 'text-emerald-700 bg-emerald-50',
          btn: 'bg-emerald-600 text-white',
        };
      case 'map_pinpoint':
        return {
          border: 'border-b-8 border-blue-300',
          iconBg: 'bg-blue-100 text-blue-600',
          badge: 'text-blue-600 bg-blue-50',
          btn: 'bg-blue-600 text-white',
        };
      case 'flag_match':
        return {
          border: 'border-b-8 border-amber-300',
          iconBg: 'bg-amber-100 text-amber-700',
          badge: 'text-amber-700 bg-amber-50',
          btn: 'bg-amber-600 text-white',
        };
      case 'science_lab':
        return {
          border: 'border-b-8 border-cyan-300',
          iconBg: 'bg-cyan-100 text-cyan-700',
          badge: 'text-cyan-700 bg-cyan-50',
          btn: 'bg-cyan-600 text-white',
        };
      case 'myth_busters':
        return {
          border: 'border-b-8 border-purple-300',
          iconBg: 'bg-purple-100 text-purple-700',
          badge: 'text-purple-700 bg-purple-50',
          btn: 'bg-purple-600 text-white',
        };
      case 'food_chain':
        return {
          border: 'border-b-8 border-lime-300',
          iconBg: 'bg-lime-100 text-lime-700',
          badge: 'text-lime-700 bg-lime-50',
          btn: 'bg-lime-600 text-white',
        };
      case 'speed_run':
        return {
          border: 'border-b-8 border-orange-300',
          iconBg: 'bg-orange-100 text-orange-600',
          badge: 'text-orange-600 bg-orange-50',
          btn: 'bg-orange-600 text-white',
        };
      case 'story_quiz':
        return {
          border: 'border-b-8 border-indigo-300',
          iconBg: 'bg-indigo-100 text-indigo-700',
          badge: 'text-indigo-700 bg-indigo-50',
          btn: 'bg-indigo-600 text-white',
        };
      case 'categories':
        return {
          border: 'border-b-8 border-teal-300',
          iconBg: 'bg-teal-100 text-teal-700',
          badge: 'text-teal-700 bg-teal-50',
          btn: 'bg-teal-600 text-white',
        };
      case 'sound_spelling':
        return {
          border: 'border-b-8 border-indigo-300',
          iconBg: 'bg-indigo-100 text-indigo-700',
          badge: 'text-indigo-700 bg-indigo-50',
          btn: 'bg-indigo-600 text-white',
        };
      case 'crossword':
        return {
          border: 'border-b-8 border-yellow-300',
          iconBg: 'bg-amber-100 text-amber-700',
          badge: 'text-amber-700 bg-amber-50',
          btn: 'bg-amber-600 text-white',
        };
      case 'survivor':
        return {
          border: 'border-b-8 border-rose-300',
          iconBg: 'bg-rose-100 text-rose-700',
          badge: 'text-rose-700 bg-rose-50',
          btn: 'bg-rose-600 text-white',
        };
      case 'sign_master':
      default:
        return {
          border: 'border-b-8 border-amber-300',
          iconBg: 'bg-amber-100 text-amber-600',
          badge: 'text-amber-700 bg-amber-50',
          btn: 'bg-amber-600 text-white',
        };
    }
  };

  const CATEGORY_TABS = [
    { id: 'todos', label: 'Todos os Jogos' },
    { id: 'vocab', label: 'Vocabulário' },
    { id: 'logic', label: 'Lógica & Dedução' },
    { id: 'geo', label: 'Geografia & Mapas' },
    { id: 'science', label: 'Ciências & Natureza' },
    { id: 'reading', label: 'Leitura & Contexto' },
    { id: 'speed', label: 'Velocidade & Desafios' },
    { id: 'audio', label: 'Áudio & Escuta' },
  ];

  const filteredModes = GAME_MODES_INFO.filter((mode) => {
    if (activeCategoryFilter === 'todos') return true;
    return (mode as any).category === activeCategoryFilter;
  });

  return (
    <div className="w-full flex flex-col gap-6">
      
      {/* BANNER / INTRO & CONFIGURATION CARD */}
      <section className="bg-white rounded-[32px] shadow-xl shadow-indigo-100/60 border-b-8 border-indigo-100 border-x-2 border-t-2 border-indigo-50 p-6 sm:p-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b-2 border-slate-100">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <h2 className="text-2xl sm:text-3xl font-black font-display text-indigo-950 tracking-tight">
                Welcome back, Explorer! 👋
              </h2>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-indigo-50 text-indigo-700 border border-indigo-200">
                <Database className="w-3.5 h-3.5" />
                SQL Compartilhado: 600 Palavras
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-slate-500">
              Banco SQL compartilhado das 23 ferramentas e jogos: 4 temas com exatamente 50 palavras por nível (Fácil, Médio e Difícil).
            </p>
            <div className="flex flex-wrap items-center gap-2 mt-2.5">
              <span className="text-[11px] font-bold text-slate-400">Bancos Individuais Flutuantes:</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2 py-0.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200/80">
                1 Professor Virtual (400 Termos PDF)
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                2 Dicionário Bilíngue (Léxico Próprio)
              </span>
            </div>
          </div>

          {/* AI GENERATOR CARD WIDGET */}
          <div className="flex items-center gap-3.5 bg-indigo-600 p-4 rounded-3xl text-white shadow-lg shadow-indigo-200 border-b-4 border-indigo-900">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">
              ✨
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider">AI Generator</span>
                <span className="text-[10px] bg-white text-indigo-700 font-black px-1.5 py-0.5 rounded uppercase">Gemini</span>
              </div>
              <p className="text-[11px] text-indigo-100 font-medium mt-0.5">Criar desafios sob demanda</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer ml-3">
              <input
                id="toggle-ai-generator"
                type="checkbox"
                checked={useAiGenerator}
                onChange={(e) => onToggleAiGenerator(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-12 h-6 bg-indigo-950/40 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-400"></div>
            </label>
          </div>
        </div>

        {/* CONTROLS BAR: TOPIC, DIFFICULTY, WORD COUNT */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* TOPIC SELECT */}
          <div>
            <label htmlFor="select-topic" className="block text-xs font-black uppercase tracking-wider text-indigo-950 mb-2">
              Tema do Vocabulário:
            </label>
            <div className="relative">
              <select
                id="select-topic"
                value={selectedTopic}
                onChange={(e) => onSelectTopic(e.target.value as TopicId)}
                className="w-full bg-slate-50 hover:bg-white border-2 border-slate-100 hover:border-indigo-200 text-indigo-950 text-sm rounded-2xl py-2.5 px-4 font-bold transition-colors cursor-pointer shadow-xs focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              >
                {TOPICS.map((top) => (
                  <option key={top.id} value={top.id}>
                    {top.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* DIFFICULTY SELECT */}
          <div>
            <label htmlFor="select-difficulty" className="block text-xs font-black uppercase tracking-wider text-indigo-950 mb-2">
              Nível de Dificuldade:
            </label>
            <div className="grid grid-cols-4 gap-1.5 bg-slate-50 p-1.5 rounded-2xl border-2 border-slate-100">
              {DIFFICULTIES.map((diff) => (
                <button
                  key={diff.id}
                  id={`btn-diff-${diff.id}`}
                  onClick={() => onSelectDifficulty(diff.id as DifficultyId)}
                  className={`py-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
                    selectedDifficulty === diff.id
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200/50 scale-[1.02]'
                      : 'text-slate-400 hover:text-indigo-900 hover:bg-white'
                  }`}
                >
                  {diff.label}
                </button>
              ))}
            </div>
          </div>

          {/* COUNT SELECT */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="select-count" className="block text-xs font-black uppercase tracking-wider text-indigo-950">
                Itens por Rodada:
              </label>
              <span className="text-[11px] text-indigo-400 font-bold">
                {availableItemsCount} disponíveis
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 bg-slate-50 p-1.5 rounded-2xl border-2 border-slate-100">
              {[5, 8, 10, 12].map((num) => (
                <button
                  key={num}
                  id={`btn-count-${num}`}
                  onClick={() => onSelectCount(num)}
                  className={`py-2 text-xs font-black rounded-xl transition-all cursor-pointer ${
                    itemCount === num
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200/50 scale-[1.02]'
                      : 'text-slate-400 hover:text-indigo-900 hover:bg-white'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CATEGORY FILTER TABS */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORY_TABS.map((tab) => (
          <button
            key={tab.id}
            id={`tab-cat-${tab.id}`}
            onClick={() => setActiveCategoryFilter(tab.id)}
            className={`px-4 py-2 rounded-2xl text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              activeCategoryFilter === tab.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 border-b-2 border-indigo-900'
                : 'bg-white text-slate-500 hover:text-indigo-900 hover:bg-indigo-50 border-2 border-slate-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* MODES GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredModes.map((mode) => {
          const theme = getCardTheme(mode.id);
          return (
            <div
              key={mode.id}
              id={`card-mode-${mode.id}`}
              onClick={() => onLaunchGame(mode.id as GameMode)}
              className={`group bg-white p-6 rounded-[32px] ${theme.border} border-x-2 border-t-2 border-slate-50 shadow-xl shadow-indigo-100/50 hover:translate-y-[-4px] transition-all cursor-pointer flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 ${theme.iconBg} rounded-2xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                    {getModeIcon(mode.iconName)}
                  </div>
                  <span className={`text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full ${theme.badge}`}>
                    {mode.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-indigo-950 mb-1.5 group-hover:text-indigo-600 transition-colors">
                  {mode.title}
                </h3>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  {mode.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-slate-100/80 flex items-center justify-between">
                <span className="text-xs font-black text-indigo-900">
                  Jogar Agora
                </span>
                <div className={`w-8 h-8 ${theme.btn} rounded-full flex items-center justify-center shadow-sm group-hover:translate-x-1 transition-transform`}>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
};
