import React, { useState } from 'react';
import { HelpCircle, Volume2, CheckCircle2, XCircle, ArrowRight, Sparkles } from 'lucide-react';
import { MythBusterItem } from '../types';

interface MythBustersGameProps {
  item: MythBusterItem;
  currentIndex: number;
  totalCount: number;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const MythBustersGame: React.FC<MythBustersGameProps> = ({
  item,
  currentIndex,
  totalCount,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  const [userChoice, setUserChoice] = useState<boolean | null>(null);

  const handleChoose = (choice: boolean) => {
    if (userChoice !== null) return;
    setUserChoice(choice);
    onSpeak(choice ? 'True' : 'False');

    if (choice === item.isTrue) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  const isAnswered = userChoice !== null;
  const isCorrect = userChoice === item.isTrue;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-purple-100/50 border-b-8 border-purple-200 border-x-2 border-t-2 border-purple-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-black">
            <HelpCircle className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full border-2 border-purple-100">
            Myth Busters • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSpeak(item.statementEn)}
          className="p-1.5 text-slate-400 hover:text-purple-600 rounded-xl transition-colors flex items-center gap-1 text-xs font-bold"
        >
          <Volume2 className="w-4 h-4 text-purple-600" />
          <span>Ouvir Frase</span>
        </button>
      </div>

      {/* STATEMENT DISPLAY */}
      <div className="text-center bg-purple-50/50 border-2 border-purple-100 p-6 sm:p-8 rounded-3xl flex flex-col gap-2">
        <span className="text-xs font-black uppercase tracking-widest text-purple-600">
          Afirmação Científica:
        </span>
        <h3 className="text-xl sm:text-2xl font-black font-display text-indigo-950 leading-snug">
          "{item.statementEn}"
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          {item.statementPt}
        </p>
      </div>

      {/* TRUE OR FALSE BUTTONS */}
      <div className="grid grid-cols-2 gap-4">
        <button
          id="btn-myth-true"
          disabled={isAnswered}
          onClick={() => handleChoose(true)}
          className={`py-5 rounded-2xl border-2 font-black text-lg sm:text-xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
            !isAnswered
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white border-b-4 border-emerald-700 shadow-md hover:translate-y-[-2px]'
              : item.isTrue
              ? 'bg-emerald-100 text-emerald-950 border-emerald-400 border-b-4 ring-2 ring-emerald-300'
              : userChoice === true
              ? 'bg-rose-100 text-rose-950 border-rose-400 border-b-4'
              : 'bg-slate-50 text-slate-300 border-slate-100 opacity-40'
          }`}
        >
          <span>TRUE</span>
          <span className="text-[11px] font-normal opacity-90">(Verdadeiro)</span>
        </button>

        <button
          id="btn-myth-false"
          disabled={isAnswered}
          onClick={() => handleChoose(false)}
          className={`py-5 rounded-2xl border-2 font-black text-lg sm:text-xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
            !isAnswered
              ? 'bg-rose-500 hover:bg-rose-600 text-white border-b-4 border-rose-700 shadow-md hover:translate-y-[-2px]'
              : !item.isTrue
              ? 'bg-emerald-100 text-emerald-950 border-emerald-400 border-b-4 ring-2 ring-emerald-300'
              : userChoice === false
              ? 'bg-rose-100 text-rose-950 border-rose-400 border-b-4'
              : 'bg-slate-50 text-slate-300 border-slate-100 opacity-40'
          }`}
        >
          <span>FALSE</span>
          <span className="text-[11px] font-normal opacity-90">(Falso)</span>
        </button>
      </div>

      {/* BUSTER FEEDBACK */}
      {isAnswered && (
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4 animate-in fade-in">
          <div className={`p-4 rounded-2xl border-2 text-xs leading-relaxed ${
            isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center gap-2 font-black text-sm mb-1">
              <Sparkles className="w-4 h-4" />
              <span>{isCorrect ? 'Você acertou em cheio!' : 'Ops! Esse é um mito muito comum.'}</span>
            </div>
            <p className="font-bold text-slate-800 mt-1">{item.busterPt}</p>
            <p className="text-[11px] text-slate-500 font-mono italic mt-2">{item.busterEn}</p>
          </div>

          <button
            id="btn-myth-next"
            onClick={onNext}
            className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-purple-200 border-b-4 border-purple-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próximo Fato ou Mito' : 'Ver Resultados'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
