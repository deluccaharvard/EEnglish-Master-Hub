import React from 'react';
import { Trophy, Flame, RotateCcw, ArrowLeft, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { GameMode } from '../types';

interface FinishedModalProps {
  score: number;
  streak: number;
  maxStreak: number;
  activeGameMode: GameMode;
  onPlayAgain: () => void;
  onGoToHub: () => void;
}

export const FinishedModal: React.FC<FinishedModalProps> = ({
  score,
  streak,
  maxStreak,
  activeGameMode,
  onPlayAgain,
  onGoToHub,
}) => {
  const getBadgeLabel = () => {
    if (score >= 500) return { title: 'Mestre do Vocabulário', color: 'text-amber-600 bg-amber-50 border-amber-200' };
    if (score >= 250) return { title: 'Explorador Avançado', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' };
    return { title: 'Bom Começo!', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' };
  };

  const badge = getBadgeLabel();

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-indigo-100/50 border-b-8 border-indigo-200 border-x-2 border-t-2 border-indigo-50 text-center animate-in fade-in duration-200">
      
      {/* TROPHY ICON */}
      <div className="w-24 h-24 mx-auto rounded-3xl bg-amber-400 border-b-6 border-amber-600 flex items-center justify-center text-white shadow-lg mb-5 animate-bounce">
        <Trophy className="w-12 h-12" />
      </div>

      <span className={`inline-block text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 mb-3 ${badge.color}`}>
        {badge.title}
      </span>

      <h2 className="text-3xl font-black font-display text-indigo-950 tracking-tight">
        Rodada Finalizada!
      </h2>
      <p className="text-xs text-slate-500 font-medium mt-1">
        Excelente prática! Você continua expandindo seu repertório de inglês.
      </p>

      {/* STATS HIGHLIGHT */}
      <div className="grid grid-cols-2 gap-3.5 my-6">
        <div className="p-5 bg-slate-50 rounded-2xl border-2 border-slate-100">
          <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[10px] font-black uppercase tracking-wider mb-1">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>Pontuação Total</span>
          </div>
          <span className="text-3xl font-black font-display text-indigo-950">{score} pts</span>
        </div>

        <div className="p-5 bg-slate-50 rounded-2xl border-2 border-slate-100">
          <div className="flex items-center justify-center gap-1.5 text-slate-400 text-[10px] font-black uppercase tracking-wider mb-1">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>Maior Sequência</span>
          </div>
          <span className="text-3xl font-black font-display text-indigo-950">{maxStreak || streak}</span>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-col sm:flex-row items-center gap-3.5">
        <button
          id="btn-finished-play-again"
          onClick={onPlayAgain}
          className="w-full sm:flex-1 py-4 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-200 border-b-4 border-indigo-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Jogar Novamente</span>
        </button>

        <button
          id="btn-finished-back-hub"
          onClick={onGoToHub}
          className="w-full sm:flex-1 py-4 px-4 bg-slate-100 hover:bg-slate-200 text-indigo-950 font-black text-xs uppercase tracking-wider rounded-2xl border-2 border-slate-200 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar ao Hub</span>
        </button>
      </div>

    </div>
  );
};
