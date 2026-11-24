import React, { useState } from 'react';
import { Signpost, Volume2, CheckCircle2, XCircle, ArrowRight, Sparkles, AlertTriangle, Info, ShieldAlert } from 'lucide-react';
import { SignMasterItem, QuizOption } from '../types';

interface SignMasterGameProps {
  item: SignMasterItem;
  currentIndex: number;
  totalCount: number;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const SignMasterGame: React.FC<SignMasterGameProps> = ({
  item,
  currentIndex,
  totalCount,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectOption = (opt: QuizOption) => {
    if (selectedOption) return;
    setSelectedOption(opt.id);
    onSpeak(item.signText);

    if (opt.isCorrect) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  const getSignTheme = () => {
    switch (item.signType) {
      case 'danger':
        return 'bg-red-600 border-red-800 text-white shadow-red-200';
      case 'warning':
        return 'bg-amber-400 border-amber-600 text-slate-950 shadow-amber-200';
      case 'mandatory':
        return 'bg-blue-600 border-blue-800 text-white shadow-blue-200';
      case 'info':
      default:
        return 'bg-emerald-600 border-emerald-800 text-white shadow-emerald-200';
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-amber-100/50 border-b-8 border-amber-200 border-x-2 border-t-2 border-amber-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
            <Signpost className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border-2 border-amber-100">
            Sign Master • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSpeak(item.signText)}
          className="p-1.5 text-slate-400 hover:text-amber-600 rounded-xl transition-colors flex items-center gap-1 text-xs font-bold"
        >
          <Volume2 className="w-4 h-4 text-amber-600" />
          <span>Ouvir Placa</span>
        </button>
      </div>

      {/* REALISTIC SIGN MOCKUP HERO */}
      <div className="flex flex-col items-center justify-center">
        <div className={`p-8 rounded-3xl border-4 text-center flex flex-col items-center justify-center gap-3 shadow-xl max-w-sm w-full select-none ${getSignTheme()}`}>
          <span className="text-4xl sm:text-5xl">{item.symbol}</span>
          <h2 className="text-2xl sm:text-3xl font-black font-display tracking-wider uppercase drop-shadow-xs">
            {item.signText}
          </h2>
          {item.subText && (
            <p className="text-xs uppercase font-bold tracking-widest opacity-90">
              {item.subText}
            </p>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="capitalize font-bold text-indigo-950">Ambiente: {item.environment}</span>
          <span>•</span>
          <span>Tradução: <strong className="text-indigo-900">{item.translationPt}</strong></span>
        </div>
      </div>

      {/* PRACTICAL QUESTION */}
      <div className="flex flex-col gap-2.5">
        <span className="text-xs font-black uppercase tracking-wider text-indigo-950">
          {item.practiceQuestion}
        </span>
        <div className="flex flex-col gap-2.5">
          {item.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            let btnStyle = 'bg-white border-slate-100 hover:border-amber-300 hover:bg-amber-50/30 text-indigo-950';

            if (selectedOption) {
              if (opt.isCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-400 border-b-4 border-emerald-500 text-emerald-950 font-black';
              } else if (isSelected && !opt.isCorrect) {
                btnStyle = 'bg-rose-50 border-rose-400 border-b-4 border-rose-500 text-rose-950 font-black';
              } else {
                btnStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-50';
              }
            }

            return (
              <button
                key={opt.id}
                id={`btn-sign-opt-${opt.id}`}
                disabled={!!selectedOption}
                onClick={() => handleSelectOption(opt)}
                className={`p-4 rounded-2xl border-2 text-left flex items-start gap-3 transition-all cursor-pointer ${btnStyle}`}
              >
                <span className="w-6 h-6 rounded-xl bg-amber-100 text-amber-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {opt.id}
                </span>
                <span className="text-xs sm:text-sm font-bold">{opt.text}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI TEACHER TIP CARD */}
      {selectedOption && (
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4 animate-in fade-in">
          <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl flex flex-col gap-2 text-xs text-amber-950 leading-relaxed">
            <div className="flex items-center gap-2 font-black text-sm text-amber-900">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Dica Cultural do Professor IA:</span>
            </div>
            <p className="font-medium">{item.aiTeacherTip}</p>
          </div>

          <button
            id="btn-sign-next"
            onClick={onNext}
            className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-amber-200 border-b-4 border-amber-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próxima Placa' : 'Ver Resultados'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
