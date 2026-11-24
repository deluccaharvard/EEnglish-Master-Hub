import React from 'react';
import { Volume2, Check, X, Sparkles } from 'lucide-react';
import { ColumnItem } from '../types';

interface ColumnsGameProps {
  leftItems: ColumnItem[];
  rightItems: { pairId: string; text: string; hint?: string }[];
  selectedLeft: ColumnItem | null;
  selectedRight: { pairId: string; text: string; hint?: string } | null;
  matchedPairs: string[];
  wrongMatch: boolean;
  onSelectLeft: (item: ColumnItem) => void;
  onSelectRight: (item: { pairId: string; text: string; hint?: string }) => void;
  onSpeak: (text: string) => void;
}

export const ColumnsGame: React.FC<ColumnsGameProps> = ({
  leftItems,
  rightItems,
  selectedLeft,
  selectedRight,
  matchedPairs,
  wrongMatch,
  onSelectLeft,
  onSelectRight,
  onSpeak,
}) => {
  const total = leftItems.length;
  const currentMatched = matchedPairs.length;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      
      {/* HEADER BAR */}
      <div className="bg-white rounded-[28px] p-5 shadow-lg shadow-indigo-100/50 border-2 border-indigo-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Pares Combinados</span>
          <span className="text-xl font-black font-display text-sky-600">
            {currentMatched} / {total}
          </span>
        </div>
        <p className="text-xs font-bold text-slate-500 text-right">
          Ligue o termo em <strong className="text-sky-600 font-black">Inglês</strong> à tradução em <strong className="text-indigo-600 font-black">Português</strong>.
        </p>
      </div>

      {/* TWO COLUMNS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        
        {/* LEFT COLUMN: ENGLISH */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-950 px-1">
            Termos em Inglês
          </span>
          {leftItems.map((item) => {
            const isMatched = matchedPairs.includes(item.pairId);
            const isSelected = selectedLeft?.pairId === item.pairId;
            const isWrong = isSelected && wrongMatch;

            let cardStyle = 'bg-white border-2 border-slate-100 text-indigo-950 hover:border-sky-300 hover:bg-slate-50 shadow-xs hover:translate-y-[-2px]';
            if (isMatched) {
              cardStyle = 'bg-emerald-50 border-2 border-emerald-300 text-emerald-950 opacity-70 cursor-default';
            } else if (isWrong) {
              cardStyle = 'bg-rose-50 border-2 border-rose-400 text-rose-950 animate-shake shadow-md';
            } else if (isSelected) {
              cardStyle = 'bg-sky-50 border-2 border-sky-500 text-sky-950 shadow-md ring-2 ring-sky-200 scale-[1.02]';
            }

            return (
              <button
                key={item.pairId}
                id={`col-left-${item.pairId}`}
                disabled={isMatched}
                onClick={() => onSelectLeft(item)}
                className={`p-4 rounded-2xl text-left flex items-center justify-between transition-all cursor-pointer ${cardStyle}`}
              >
                <span className="text-sm sm:text-base font-black">{item.text}</span>
                <div className="flex items-center gap-2">
                  {!isMatched && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        onSpeak(item.wordEn);
                      }}
                      className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-white rounded-xl transition-colors cursor-pointer border border-transparent hover:border-sky-100"
                      title="Ouvir"
                    >
                      <Volume2 className="w-4 h-4" />
                    </span>
                  )}
                  {isMatched && <Check className="w-5 h-5 text-emerald-600" />}
                  {isWrong && <X className="w-5 h-5 text-rose-600" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT COLUMN: PORTUGUESE */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-950 px-1">
            Traduções em Português
          </span>
          {rightItems.map((item) => {
            const isMatched = matchedPairs.includes(item.pairId);
            const isSelected = selectedRight?.pairId === item.pairId;
            const isWrong = isSelected && wrongMatch;

            let cardStyle = 'bg-white border-2 border-slate-100 text-indigo-950 hover:border-indigo-300 hover:bg-slate-50 shadow-xs hover:translate-y-[-2px]';
            if (isMatched) {
              cardStyle = 'bg-emerald-50 border-2 border-emerald-300 text-emerald-950 opacity-70 cursor-default';
            } else if (isWrong) {
              cardStyle = 'bg-rose-50 border-2 border-rose-400 text-rose-950 animate-shake shadow-md';
            } else if (isSelected) {
              cardStyle = 'bg-indigo-50 border-2 border-indigo-500 text-indigo-950 shadow-md ring-2 ring-indigo-200 scale-[1.02]';
            }

            return (
              <button
                key={item.pairId}
                id={`col-right-${item.pairId}`}
                disabled={isMatched}
                onClick={() => onSelectRight(item)}
                className={`p-4 rounded-2xl text-left flex items-center justify-between transition-all cursor-pointer ${cardStyle}`}
              >
                <span className="text-sm sm:text-base font-black">{item.text}</span>
                <div>
                  {isMatched && <Check className="w-5 h-5 text-emerald-600" />}
                  {isWrong && <X className="w-5 h-5 text-rose-600" />}
                </div>
              </button>
            );
          })}
        </div>

      </div>

    </div>
  );
};
