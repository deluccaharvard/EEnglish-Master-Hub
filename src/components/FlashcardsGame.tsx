import React from 'react';
import { Volume2, Repeat, ThumbsUp, Meh, ThumbsDown, HelpCircle, Sparkles } from 'lucide-react';
import { SRSStats } from '../types';

interface FlashcardItem {
  id: string;
  wordEn: string;
  wordPt: string;
  hint?: string;
  rationale?: string;
}

interface FlashcardsGameProps {
  currentCard: FlashcardItem;
  currentIndex: number;
  totalCards: number;
  isFlipped: boolean;
  srsStats: SRSStats;
  onFlip: () => void;
  onRate: (rating: 'easy' | 'medium' | 'hard') => void;
  onSpeak: (text: string) => void;
}

export const FlashcardsGame: React.FC<FlashcardsGameProps> = ({
  currentCard,
  currentIndex,
  totalCards,
  isFlipped,
  srsStats,
  onFlip,
  onRate,
  onSpeak,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col gap-6">
      
      {/* HEADER & SRS STATS */}
      <div className="flex items-center justify-between text-xs text-slate-500 bg-white p-4 rounded-[28px] border-2 border-indigo-100 shadow-md">
        <span className="font-black text-indigo-950 uppercase tracking-wider text-xs">
          Card {currentIndex + 1} de {totalCards}
        </span>

        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-black text-[10px] uppercase tracking-wider border-2 border-emerald-100">
            Fácil: {srsStats.easy}
          </span>
          <span className="flex items-center gap-1 text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full font-black text-[10px] uppercase tracking-wider border-2 border-amber-100">
            Médio: {srsStats.medium}
          </span>
          <span className="flex items-center gap-1 text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full font-black text-[10px] uppercase tracking-wider border-2 border-rose-100">
            Difícil: {srsStats.hard}
          </span>
        </div>
      </div>

      {/* FLASHCARD (CLICK TO FLIP) */}
      <div
        id="flashcard-main-card"
        onClick={onFlip}
        className="w-full min-h-[320px] bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-orange-100/50 border-b-8 border-orange-200 border-x-2 border-t-2 border-orange-50 hover:translate-y-[-2px] transition-all cursor-pointer select-none flex flex-col justify-between text-center relative group"
      >
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="uppercase tracking-wider font-black text-indigo-950">
            {isFlipped ? 'Tradução & Contexto' : 'Termo em Inglês'}
          </span>
          <span className="flex items-center gap-1 group-hover:text-orange-600 transition-colors font-bold text-slate-400">
            <Repeat className="w-4 h-4" />
            <span>Toque para virar</span>
          </span>
        </div>

        {/* CARD CONTENT */}
        <div className="my-auto py-6 flex flex-col items-center justify-center gap-3">
          {!isFlipped ? (
            <>
              <div className="flex items-center justify-center gap-3.5">
                <h3 className="text-3xl sm:text-4xl font-black font-display text-indigo-950 tracking-tight">
                  {currentCard.wordEn}
                </h3>
                <button
                  type="button"
                  id="btn-flashcard-speak"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSpeak(currentCard.wordEn);
                  }}
                  className="p-2.5 text-orange-600 hover:text-orange-800 bg-orange-50 hover:bg-orange-100 rounded-2xl border-2 border-orange-100 transition-transform hover:scale-110"
                  title="Ouvir pronúncia"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>

              {currentCard.hint && (
                <p className="text-xs text-slate-400 font-medium max-w-sm italic mt-2">
                  Dica: {currentCard.hint}
                </p>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 animate-in fade-in zoom-in-95 duration-150">
              <span className="text-xs text-emerald-600 font-black uppercase tracking-wider">
                Português
              </span>
              <h3 className="text-3xl sm:text-4xl font-black font-display text-emerald-800 tracking-tight">
                {currentCard.wordPt}
              </h3>
              <p className="text-xs text-slate-600 font-medium max-w-sm mt-2 leading-relaxed bg-slate-50 p-4 rounded-2xl border-2 border-slate-100">
                {currentCard.rationale || `A tradução de "${currentCard.wordEn}" é "${currentCard.wordPt}".`}
              </p>
            </div>
          )}
        </div>

        <div className="text-xs font-bold text-slate-400">
          {isFlipped ? 'Avalie seu domínio para calibrar o SRS' : 'Toque no card para revelar a resposta'}
        </div>
      </div>

      {/* SRS RATING CONTROLS (VISIBLE ONCE FLIPPED) */}
      {isFlipped && (
        <div className="grid grid-cols-3 gap-3.5 animate-in fade-in slide-in-from-bottom-2">
          <button
            id="btn-srs-hard"
            onClick={() => onRate('hard')}
            className="py-4 px-3 bg-rose-50 hover:bg-rose-100 text-rose-950 border-2 border-rose-300 rounded-2xl font-black text-xs flex flex-col items-center gap-1 shadow-md hover:translate-y-[-2px] transition-all cursor-pointer"
          >
            <ThumbsDown className="w-5 h-5 text-rose-600" />
            <span>Difícil</span>
            <span className="text-[10px] font-bold text-rose-600">Revisar de novo</span>
          </button>

          <button
            id="btn-srs-medium"
            onClick={() => onRate('medium')}
            className="py-4 px-3 bg-amber-50 hover:bg-amber-100 text-amber-950 border-2 border-amber-300 rounded-2xl font-black text-xs flex flex-col items-center gap-1 shadow-md hover:translate-y-[-2px] transition-all cursor-pointer"
          >
            <Meh className="w-5 h-5 text-amber-600" />
            <span>Médio</span>
            <span className="text-[10px] font-bold text-amber-600">+75 pts</span>
          </button>

          <button
            id="btn-srs-easy"
            onClick={() => onRate('easy')}
            className="py-4 px-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border-2 border-emerald-300 rounded-2xl font-black text-xs flex flex-col items-center gap-1 shadow-md hover:translate-y-[-2px] transition-all cursor-pointer"
          >
            <ThumbsUp className="w-5 h-5 text-emerald-600" />
            <span>Fácil</span>
            <span className="text-[10px] font-bold text-emerald-600">+150 pts</span>
          </button>
        </div>
      )}

    </div>
  );
};
