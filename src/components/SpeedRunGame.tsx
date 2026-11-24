import React, { useState, useEffect, useRef } from 'react';
import { Flame, Clock, Zap, RotateCcw, Trophy, Volume2 } from 'lucide-react';
import { VocabItem } from '../types';

interface SpeedRunGameProps {
  vocabList: VocabItem[];
  onFinishSpeedRun: (score: number, correctCount: number) => void;
  onSpeak: (text: string) => void;
}

export const SpeedRunGame: React.FC<SpeedRunGameProps> = ({
  vocabList,
  onFinishSpeedRun,
  onSpeak,
}) => {
  const [timeLeft, setTimeLeft] = useState<number>(60);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setIsGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const currentItem = vocabList[currentIndex % vocabList.length];

  // Generate 3 options (1 correct, 2 distractors)
  const options = React.useMemo(() => {
    if (!currentItem) return [];
    const correct = currentItem.wordPt;
    const pool = vocabList.filter((v) => v.wordPt !== correct).map((v) => v.wordPt);
    const shuffledPool = pool.sort(() => 0.5 - Math.random());
    const distractors = shuffledPool.slice(0, 2);
    return [correct, ...distractors].sort(() => 0.5 - Math.random());
  }, [currentIndex, currentItem, vocabList]);

  const handleAnswer = (chosenPt: string) => {
    if (isGameOver) return;

    if (chosenPt === currentItem.wordPt) {
      const nextStreak = streak + 1;
      const multiplier = nextStreak > 5 ? 3 : nextStreak > 2 ? 2 : 1;
      const points = 50 * multiplier;
      setScore((s) => s + points);
      setCorrectCount((c) => c + 1);
      setStreak(nextStreak);
      if (nextStreak > maxStreak) setMaxStreak(nextStreak);
      onSpeak(currentItem.wordEn);
    } else {
      setStreak(0);
    }

    setCurrentIndex((i) => i + 1);
  };

  const handleRestart = () => {
    setTimeLeft(60);
    setScore(0);
    setCorrectCount(0);
    setStreak(0);
    setCurrentIndex(0);
    setIsGameOver(false);

    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setIsGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-orange-100/50 border-b-8 border-orange-200 border-x-2 border-t-2 border-orange-50 flex flex-col gap-6">
      
      {/* TIMER & SCORE BAR */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <div className={`px-3.5 py-1.5 rounded-2xl flex items-center gap-2 font-mono font-black text-sm border-2 ${
            timeLeft <= 10 ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse' : 'bg-orange-50 border-orange-200 text-orange-700'
          }`}>
            <Clock className="w-4 h-4" />
            <span>{timeLeft}s</span>
          </div>
          <span className="text-xs font-black text-indigo-950 uppercase bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-2xl">
            {correctCount} acertos
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-700 rounded-2xl text-xs font-black">
            <Flame className={`w-4 h-4 ${streak > 0 ? 'text-orange-500 fill-orange-500 animate-bounce' : 'text-slate-300'}`} />
            <span>{streak}x Combo</span>
          </div>
          <div className="text-xs font-black text-indigo-950 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-2xl">
            {score} pts
          </div>
        </div>
      </div>

      {!isGameOver ? (
        <div className="flex flex-col gap-6">
          {/* FLASH CARD */}
          <div className="text-center bg-orange-50/40 border-2 border-orange-100 p-8 rounded-3xl flex flex-col items-center justify-center gap-2 min-h-[140px]">
            <span className="text-[10px] font-black uppercase tracking-widest text-orange-600">
              Traduza o mais rápido possível:
            </span>
            <h3 className="text-3xl sm:text-4xl font-black font-display text-indigo-950">
              {currentItem?.wordEn}
            </h3>
            <button
              type="button"
              onClick={() => onSpeak(currentItem?.wordEn || '')}
              className="mt-1 p-1 text-slate-400 hover:text-orange-600 rounded"
              title="Ouvir"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {/* 3 QUICK BUTTONS */}
          <div className="flex flex-col gap-3">
            {options.map((opt, idx) => (
              <button
                key={idx}
                id={`btn-speed-opt-${idx}`}
                onClick={() => handleAnswer(opt)}
                className="w-full py-4 px-6 bg-white hover:bg-orange-50/60 border-2 border-slate-100 hover:border-orange-400 hover:translate-y-[-2px] text-indigo-950 font-black text-base sm:text-lg rounded-2xl transition-all shadow-xs cursor-pointer text-center"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* GAME OVER SUMMARY */
        <div className="flex flex-col gap-5 text-center animate-in zoom-in-90 py-4">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-orange-100">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-2xl font-black font-display text-indigo-950">
              Tempo Esgotado!
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-1">
              Excelente reflexo sob pressão de 60 segundos.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Pontuação</span>
              <span className="text-xl font-black text-indigo-950">{score}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Acertos</span>
              <span className="text-xl font-black text-emerald-600">{correctCount}</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Maior Combo</span>
              <span className="text-xl font-black text-orange-600">{maxStreak}x</span>
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <button
              id="btn-speed-restart"
              onClick={handleRestart}
              className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase tracking-wider rounded-2xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Tentar Novamente</span>
            </button>
            <button
              id="btn-speed-finish"
              onClick={() => onFinishSpeedRun(score, correctCount)}
              className="flex-1 py-3.5 bg-orange-600 hover:bg-orange-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md border-b-4 border-orange-900 transition-all cursor-pointer"
            >
              Finalizar Desafio
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
