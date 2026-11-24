import React, { useState } from 'react';
import { FlaskConical, Volume2, ArrowUp, ArrowDown, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { ScienceProcessItem, ScienceStep } from '../types';

interface ScienceLabGameProps {
  item: ScienceProcessItem;
  currentIndex: number;
  totalCount: number;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const ScienceLabGame: React.FC<ScienceLabGameProps> = ({
  item,
  currentIndex,
  totalCount,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  // Initialize shuffled steps
  const [currentOrder, setCurrentOrder] = useState<ScienceStep[]>(() => {
    return [...item.steps].sort(() => 0.5 - Math.random());
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isAllCorrect, setIsAllCorrect] = useState<boolean>(false);

  const handleMove = (index: number, direction: 'up' | 'down') => {
    if (isSubmitted) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentOrder.length) return;

    const newOrder = [...currentOrder];
    const temp = newOrder[index];
    newOrder[index] = newOrder[targetIndex];
    newOrder[targetIndex] = temp;
    setCurrentOrder(newOrder);
  };

  const handleCheckOrder = () => {
    const correct = currentOrder.every((step, idx) => step.order === idx + 1);
    setIsAllCorrect(correct);
    setIsSubmitted(true);

    if (correct) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-cyan-100/50 border-b-8 border-cyan-200 border-x-2 border-t-2 border-cyan-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-black">
            <FlaskConical className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border-2 border-cyan-100">
            Science Lab • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSpeak(item.processNameEn)}
          className="p-1.5 text-slate-400 hover:text-cyan-600 rounded-xl transition-colors flex items-center gap-1 text-xs font-bold"
        >
          <Volume2 className="w-4 h-4 text-cyan-600" />
          <span>Ouvir</span>
        </button>
      </div>

      {/* PROCESS TITLE & INTRO */}
      <div>
        <h3 className="text-xl sm:text-2xl font-black font-display text-indigo-950">
          {item.processNameEn}
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-1">
          {item.intro} Organize os passos na ordem temporal correta (1º ao 4º).
        </p>
      </div>

      {/* STEPS LIST */}
      <div className="flex flex-col gap-3">
        {currentOrder.map((step, idx) => {
          const isSlotCorrect = isSubmitted && step.order === idx + 1;
          const isSlotWrong = isSubmitted && step.order !== idx + 1;

          return (
            <div
              key={step.id}
              className={`p-4 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all ${
                isSlotCorrect
                  ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-100'
                  : isSlotWrong
                  ? 'bg-rose-50 border-rose-300'
                  : 'bg-slate-50/70 border-slate-100 hover:border-cyan-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-xl bg-cyan-600 text-white font-black text-xs flex items-center justify-center shrink-0">
                  {idx + 1}º
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black text-indigo-950">{step.titleEn}</span>
                    <button
                      type="button"
                      onClick={() => onSpeak(`${step.titleEn}. ${step.descEn}`)}
                      className="p-1 text-slate-400 hover:text-cyan-600 rounded"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{step.descPt}</span>
                  <span className="text-[11px] text-cyan-700 italic mt-0.5">{step.descEn}</span>
                </div>
              </div>

              {!isSubmitted && (
                <div className="flex flex-col gap-1 shrink-0">
                  <button
                    id={`btn-move-up-${idx}`}
                    disabled={idx === 0}
                    onClick={() => handleMove(idx, 'up')}
                    className="p-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    id={`btn-move-down-${idx}`}
                    disabled={idx === currentOrder.length - 1}
                    onClick={() => handleMove(idx, 'down')}
                    className="p-1.5 bg-white border border-slate-200 rounded-lg text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ACTION BUTTON */}
      {!isSubmitted ? (
        <button
          id="btn-sci-submit"
          onClick={handleCheckOrder}
          className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-cyan-200 border-b-4 border-cyan-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Validar Sequência Científica</span>
        </button>
      ) : (
        <div className="flex flex-col gap-4 border-t-2 border-slate-100 pt-4 animate-in fade-in">
          <div className="p-4 bg-cyan-50 border-2 border-cyan-200 rounded-2xl text-xs text-cyan-950 font-medium leading-relaxed">
            <strong className="block font-black text-sm mb-1 text-cyan-950">
              {isAllCorrect ? 'Sequência Perfeita!' : 'Revise as Etapas:'}
            </strong>
            <p>{item.scientificPrinciple}</p>
          </div>

          <button
            id="btn-sci-next"
            onClick={onNext}
            className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-cyan-200 border-b-4 border-cyan-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próximo Processo' : 'Ver Resultados'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
