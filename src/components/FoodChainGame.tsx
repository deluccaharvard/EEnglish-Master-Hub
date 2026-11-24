import React, { useState } from 'react';
import { TreePine, Volume2, CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import { FoodChainOrganism } from '../types';

interface FoodChainGameProps {
  item: FoodChainOrganism;
  currentIndex: number;
  totalCount: number;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

const TROPHIC_LEVELS = [
  { id: 'producer', labelEn: 'Producer', labelPt: 'Produtor (Plantas/Algas)', icon: '🌱', color: 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:border-emerald-500' },
  { id: 'herbivore', labelEn: 'Herbivore', labelPt: 'Consumidor Primário (Herbívoros)', icon: '🐇', color: 'bg-lime-50 text-lime-900 border-lime-300 hover:border-lime-500' },
  { id: 'carnivore', labelEn: 'Carnivore / Predator', labelPt: 'Predador / Carnívoro', icon: '🦅', color: 'bg-orange-50 text-orange-900 border-orange-300 hover:border-orange-500' },
  { id: 'decomposer', labelEn: 'Decomposer', labelPt: 'Decompositor (Fungos/Bactérias)', icon: '🍄', color: 'bg-amber-50 text-amber-900 border-amber-300 hover:border-amber-500' },
];

export const FoodChainGame: React.FC<FoodChainGameProps> = ({
  item,
  currentIndex,
  totalCount,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const handleSelect = (levelId: string) => {
    if (selectedLevel) return;
    setSelectedLevel(levelId);
    onSpeak(item.nameEn);

    if (levelId === item.trophicLevel) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  const isAnswered = selectedLevel !== null;
  const isCorrect = selectedLevel === item.trophicLevel;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-lime-100/50 border-b-8 border-lime-200 border-x-2 border-t-2 border-lime-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-lime-100 text-lime-700 flex items-center justify-center font-black">
            <TreePine className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-lime-700 bg-lime-50 px-3 py-1 rounded-full border-2 border-lime-100">
            Food Chain Builder • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSpeak(item.nameEn)}
          className="p-1.5 text-slate-400 hover:text-lime-600 rounded-xl transition-colors flex items-center gap-1 text-xs font-bold"
        >
          <Volume2 className="w-4 h-4 text-lime-600" />
          <span>Ouvir</span>
        </button>
      </div>

      {/* ORGANISM TARGET CARD */}
      <div className="text-center bg-lime-50/50 border-2 border-lime-100 p-6 rounded-3xl flex flex-col items-center justify-center gap-2">
        <span className="text-6xl drop-shadow-sm select-none">{item.icon}</span>
        <h3 className="text-2xl sm:text-3xl font-black font-display text-indigo-950">
          {item.nameEn}
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          Em português: <strong className="text-indigo-900">{item.namePt}</strong>
        </p>
      </div>

      {/* TROPHIC LEVEL OPTIONS */}
      <div className="flex flex-col gap-2.5">
        <span className="text-xs font-black uppercase tracking-wider text-indigo-950 text-center">
          A qual nível trófico este organismo pertence na teia alimentar?
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TROPHIC_LEVELS.map((level) => {
            const isSelected = selectedLevel === level.id;
            const isCorrectLevel = level.id === item.trophicLevel;

            let btnStyle = `bg-white border-slate-100 hover:border-lime-300 text-indigo-950 hover:bg-lime-50/30`;

            if (selectedLevel) {
              if (isCorrectLevel) {
                btnStyle = 'bg-emerald-50 border-emerald-400 border-b-4 border-emerald-500 text-emerald-950 font-black shadow-sm';
              } else if (isSelected && !isCorrectLevel) {
                btnStyle = 'bg-rose-50 border-rose-400 border-b-4 border-rose-500 text-rose-950 font-black';
              } else {
                btnStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-50';
              }
            }

            return (
              <button
                key={level.id}
                id={`btn-trophic-${level.id}`}
                disabled={isAnswered}
                onClick={() => handleSelect(level.id)}
                className={`p-4 rounded-2xl border-2 text-left flex items-center gap-3 transition-all cursor-pointer ${btnStyle}`}
              >
                <span className="text-2xl">{level.icon}</span>
                <div className="flex flex-col">
                  <span className="text-sm font-black">{level.labelEn}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{level.labelPt}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* FEEDBACK & ECOLOGICAL ROLE */}
      {isAnswered && (
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4 animate-in fade-in">
          <div className={`p-4 rounded-2xl border-2 text-xs leading-relaxed ${
            isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center gap-2 font-black text-sm mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{isCorrect ? 'Papel Ecológico Identificado!' : 'Classificação Ecológica:'}</span>
            </div>
            <p className="font-medium mt-1">{item.energyDescription}</p>
          </div>

          <button
            id="btn-food-next"
            onClick={onNext}
            className="w-full py-4 bg-lime-600 hover:bg-lime-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-lime-200 border-b-4 border-lime-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próximo Organismo' : 'Ver Resultados'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
