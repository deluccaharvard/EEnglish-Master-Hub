import React, { useState } from 'react';
import { Boxes, Volume2, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { CategoryBin, CategoryWordItem } from '../types';

interface CategoriesGameProps {
  bins: CategoryBin[];
  items: CategoryWordItem[];
  onFinishCategories: (score: number) => void;
  onSpeak: (text: string) => void;
}

export const CategoriesGame: React.FC<CategoriesGameProps> = ({
  bins,
  items,
  onFinishCategories,
  onSpeak,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; text: string } | null>(null);

  const currentWord = items[currentIndex];

  const handleSelectBin = (binId: string) => {
    if (feedback || !currentWord) return;

    onSpeak(currentWord.wordEn);
    const isCorrect = currentWord.categoryId === binId;

    if (isCorrect) {
      setScore((s) => s + 50);
      setFeedback({ isCorrect: true, text: `Correto! "${currentWord.wordEn}" pertence a esta categoria.` });
    } else {
      const correctBin = bins.find((b) => b.id === currentWord.categoryId);
      setFeedback({ isCorrect: false, text: `Incorreto. "${currentWord.wordEn}" pertence a ${correctBin?.nameEn}.` });
    }

    setTimeout(() => {
      setFeedback(null);
      if (currentIndex < items.length - 1) {
        setCurrentIndex((i) => i + 1);
      } else {
        onFinishCategories(score + (isCorrect ? 50 : 0));
      }
    }, 1100);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-teal-100/50 border-b-8 border-teal-200 border-x-2 border-t-2 border-teal-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-black">
            <Boxes className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border-2 border-teal-100">
            Categorização Rápida • {currentIndex + 1} de {items.length}
          </span>
        </div>

        <div className="text-xs font-black text-indigo-950 bg-teal-50 border border-teal-100 px-3 py-1 rounded-full">
          {score} XP
        </div>
      </div>

      {/* CURRENT WORD CARD */}
      {currentWord && (
        <div className="text-center bg-teal-50/50 border-2 border-teal-100 p-8 rounded-3xl flex flex-col items-center justify-center gap-2 relative">
          <span className="text-[10px] font-black uppercase tracking-widest text-teal-600">
            Classifique a palavra no cesto correto:
          </span>
          <h3 className="text-3xl sm:text-4xl font-black font-display text-indigo-950">
            {currentWord.wordEn}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            ({currentWord.wordPt})
          </p>

          <button
            type="button"
            onClick={() => onSpeak(currentWord.wordEn)}
            className="mt-1 p-1 text-slate-400 hover:text-teal-600 rounded"
            title="Ouvir pronúncia"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* FEEDBACK POPUP */}
      {feedback && (
        <div className={`p-3 text-center text-xs font-black rounded-2xl animate-in zoom-in-90 border-2 ${
          feedback.isCorrect ? 'bg-emerald-50 text-emerald-950 border-emerald-300' : 'bg-rose-50 text-rose-950 border-rose-300'
        }`}>
          {feedback.text}
        </div>
      )}

      {/* 3 THEMATIC BINS */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        {bins.map((bin) => (
          <button
            key={bin.id}
            id={`btn-bin-${bin.id}`}
            disabled={!!feedback}
            onClick={() => handleSelectBin(bin.id)}
            className={`p-5 rounded-2xl border-2 flex flex-col items-center justify-center text-center gap-2 cursor-pointer transition-all hover:translate-y-[-2px] ${bin.color} shadow-xs`}
          >
            <span className="text-3xl select-none">{bin.icon}</span>
            <div className="flex flex-col">
              <span className="text-sm font-black">{bin.nameEn}</span>
              <span className="text-[10px] opacity-75 font-medium">{bin.namePt}</span>
            </div>
          </button>
        ))}
      </div>

    </div>
  );
};
