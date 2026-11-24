import React from 'react';
import { Volume2, Sparkles, Check, HelpCircle } from 'lucide-react';
import { MemoryCard } from '../types';

interface MemoryGameProps {
  cards: MemoryCard[];
  flipped: number[];
  matched: string[];
  moves: number;
  time: number;
  onCardClick: (index: number) => void;
  onSpeak: (text: string) => void;
}

export const MemoryGame: React.FC<MemoryGameProps> = ({
  cards,
  flipped,
  matched,
  moves,
  time,
  onCardClick,
  onSpeak,
}) => {
  const totalPairs = cards.length / 2;
  const matchedPairsCount = matched.length;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-5">
      
      {/* STATUS BAR */}
      <div className="bg-white rounded-[28px] p-5 shadow-lg shadow-indigo-100/50 border-2 border-indigo-100 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Pares Encontrados</span>
            <span className="text-xl font-black font-display text-rose-600">
              {matchedPairsCount} / {totalPairs}
            </span>
          </div>
          <div className="w-0.5 h-8 bg-slate-100" />
          <div>
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Movimentos</span>
            <span className="text-xl font-black font-display text-indigo-950">{moves}</span>
          </div>
        </div>

        <p className="text-xs font-bold text-slate-500 hidden sm:block">
          Combine a palavra em <strong className="text-rose-600 font-black">Inglês</strong> com a tradução em <strong className="text-emerald-600 font-black">Português</strong>.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index);
          const isMatched = matched.includes(card.pairId);
          const isVisible = isFlipped || isMatched;

          return (
            <div
              key={card.cardId}
              id={`mem-card-${index}`}
              onClick={() => onCardClick(index)}
              className={`h-32 sm:h-36 rounded-[24px] p-3 border-2 cursor-pointer select-none transition-all flex flex-col items-center justify-center text-center relative ${
                isMatched
                  ? 'bg-emerald-50 border-b-6 border-emerald-400 text-emerald-950 cursor-default opacity-90 shadow-sm'
                  : isFlipped
                  ? 'bg-rose-50 border-b-6 border-rose-400 text-rose-950 shadow-md scale-[1.02]'
                  : 'bg-white hover:bg-slate-50 border-slate-100 border-b-6 border-b-slate-200 shadow-md hover:border-b-rose-300 hover:translate-y-[-2px]'
              }`}
            >
              {isVisible ? (
                <div className="flex flex-col items-center justify-center gap-1.5 w-full animate-in fade-in zoom-in-95 duration-150">
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border-2 ${
                    card.lang === 'en'
                      ? 'bg-rose-100 text-rose-700 border-rose-200'
                      : 'bg-emerald-100 text-emerald-800 border-emerald-200'
                  }`}>
                    {card.lang === 'en' ? 'Inglês' : 'Português'}
                  </span>

                  <span className="text-sm sm:text-base font-black leading-tight break-words max-w-full px-1 text-indigo-950">
                    {card.text}
                  </span>

                  {card.lang === 'en' && !isMatched && (
                    <button
                      type="button"
                      id={`mem-speak-${index}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSpeak(card.wordEn);
                      }}
                      className="mt-1 p-1.5 text-rose-600 hover:text-rose-800 bg-white rounded-xl shadow-xs border-2 border-rose-100 hover:scale-110 transition-transform"
                      title="Ouvir som"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {isMatched && (
                    <span className="absolute top-2.5 right-2.5 text-emerald-600">
                      <Check className="w-4 h-4" />
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-400 font-black text-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    ?
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
};
