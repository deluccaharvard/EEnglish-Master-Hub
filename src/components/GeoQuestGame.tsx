import React, { useState } from 'react';
import { Compass, Volume2, HelpCircle, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { GeoQuestItem } from '../types';

interface GeoQuestGameProps {
  item: GeoQuestItem;
  currentIndex: number;
  totalCount: number;
  onCorrectAnswer: (bonus: number) => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const GeoQuestGame: React.FC<GeoQuestGameProps> = ({
  item,
  currentIndex,
  totalCount,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  const [unlockedCluesCount, setUnlockedCluesCount] = useState<number>(1);
  const [selectedGuess, setSelectedGuess] = useState<string | null>(null);

  const handleRevealClue = () => {
    if (unlockedCluesCount < item.clues.length) {
      setUnlockedCluesCount((prev) => prev + 1);
    }
  };

  const handleSelectOption = (option: string) => {
    if (selectedGuess) return;
    setSelectedGuess(option);
    onSpeak(option);

    const isCorrect = option.toLowerCase() === item.targetNameEn.toLowerCase();
    if (isCorrect) {
      const bonus = unlockedCluesCount === 1 ? 300 : unlockedCluesCount === 2 ? 200 : 100;
      onCorrectAnswer(bonus);
    } else {
      onWrongAnswer();
    }
  };

  const potentialPoints = unlockedCluesCount === 1 ? 300 : unlockedCluesCount === 2 ? 200 : 100;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-emerald-100/50 border-b-8 border-emerald-200 border-x-2 border-t-2 border-emerald-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black">
            <Compass className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border-2 border-emerald-100">
            GeoQuest • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-full border-2 border-amber-100">
            +{potentialPoints} pts
          </span>
        </div>
      </div>

      {/* CLUES CONTAINER */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-950">
            Pistas em Inglês ({unlockedCluesCount} de {item.clues.length} liberadas):
          </span>
          {unlockedCluesCount < item.clues.length && !selectedGuess && (
            <button
              id="btn-geo-more-clue"
              onClick={handleRevealClue}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-xl border border-emerald-200 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Ver Próxima Pista</span>
            </button>
          )}
        </div>

        <div className="flex flex-col gap-2.5">
          {item.clues.map((clue, idx) => {
            const isUnlocked = idx < unlockedCluesCount;
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border-2 transition-all flex items-start justify-between gap-3 ${
                  isUnlocked
                    ? 'bg-slate-50 border-slate-100 text-indigo-950 font-bold text-sm sm:text-base animate-in fade-in'
                    : 'bg-slate-100/40 border-dashed border-slate-200 text-slate-400 text-xs italic'
                }`}
              >
                <div className="flex items-start gap-2.5">
                  <span className={`text-xs font-black px-2 py-0.5 rounded-lg ${
                    isUnlocked ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{isUnlocked ? clue : 'Pista bloqueada — desvende com menos pistas para ganhar mais pontos!'}</span>
                </div>

                {isUnlocked && (
                  <button
                    type="button"
                    onClick={() => onSpeak(clue)}
                    className="p-1 text-slate-400 hover:text-emerald-600 rounded-lg transition-colors shrink-0"
                    title="Ouvir pista"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* OPTIONS LIST */}
      <div>
        <span className="block text-xs font-black uppercase tracking-wider text-indigo-950 mb-2.5 text-center">
          Qual é o país ou acidente geográfico?
        </span>
        <div className="grid grid-cols-2 gap-3">
          {item.options.map((opt, idx) => {
            const isSelected = selectedGuess === opt;
            const isCorrect = opt.toLowerCase() === item.targetNameEn.toLowerCase();

            let btnStyle = 'bg-white border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/40 text-indigo-950 shadow-xs hover:translate-y-[-2px]';

            if (selectedGuess) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-400 border-b-4 border-emerald-500 text-emerald-950 font-black shadow-md ring-2 ring-emerald-200';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-rose-50 border-rose-400 border-b-4 border-rose-500 text-rose-950 font-black';
              } else {
                btnStyle = 'bg-slate-50/60 border-slate-100 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                id={`btn-geo-opt-${idx}`}
                disabled={!!selectedGuess}
                onClick={() => handleSelectOption(opt)}
                className={`p-4 sm:p-5 rounded-2xl border-2 text-center font-black text-base sm:text-lg transition-all cursor-pointer ${btnStyle}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* RESULTS & FUN FACT */}
      {selectedGuess && (
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4 animate-in fade-in">
          <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl flex flex-col gap-2">
            <div className="flex items-center gap-2 text-emerald-950 font-black text-sm">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>
                {item.flagEmoji} {item.targetNameEn} ({item.targetNamePt})
              </span>
            </div>
            <p className="text-xs text-emerald-900 font-medium leading-relaxed">
              <strong>Curiosidade:</strong> {item.funFact}
            </p>
          </div>

          <button
            id="btn-geo-next"
            onClick={onNext}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-200 border-b-4 border-emerald-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próximo Enigma' : 'Ver Resultados'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
