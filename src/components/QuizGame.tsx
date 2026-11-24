import React from 'react';
import { Volume2, HelpCircle, CheckCircle2, XCircle, ChevronRight, Sparkles } from 'lucide-react';
import { VocabItem, QuizOption } from '../types';

interface QuizGameProps {
  item: VocabItem;
  currentIndex: number;
  totalCount: number;
  selectedOption: QuizOption | null;
  showHint: boolean;
  onSelectOption: (opt: QuizOption) => void;
  onToggleHint: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const QuizGame: React.FC<QuizGameProps> = ({
  item,
  currentIndex,
  totalCount,
  selectedOption,
  showHint,
  onSelectOption,
  onToggleHint,
  onNext,
  onSpeak,
}) => {
  const options = item.options || [];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-indigo-100/60 border-b-8 border-indigo-200 border-x-2 border-t-2 border-indigo-50 flex flex-col gap-6">
      
      {/* HEADER & PROGRESS */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3.5 py-1.5 rounded-full border-2 border-indigo-100">
            Questão {currentIndex + 1} de {totalCount}
          </span>
        </div>

        {item.wordEn && (
          <button
            id="btn-quiz-pronounce"
            onClick={() => onSpeak(item.wordEn)}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-2xl border-2 border-indigo-100 shadow-xs transition-all hover:translate-y-[-1px]"
            title="Ouvir pronúncia"
          >
            <Volume2 className="w-4 h-4 text-indigo-600" />
            <span>Ouvir "{item.wordEn}"</span>
          </button>
        )}
      </div>

      {/* QUESTION PROMPT */}
      <div>
        <h3 className="text-2xl sm:text-3xl font-black font-display text-indigo-950 tracking-tight">
          {item.question || `Qual é o significado correto de "${item.wordEn}"?`}
        </h3>

        {/* HINT BUTTON & REVEAL */}
        {item.hint && (
          <div className="mt-3">
            {!showHint ? (
              <button
                id="btn-quiz-toggle-hint"
                onClick={onToggleHint}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors"
              >
                <HelpCircle className="w-4 h-4" />
                <span>Ver dica contextual</span>
              </button>
            ) : (
              <div className="p-4 bg-amber-50 border-2 border-amber-200 rounded-2xl text-xs font-medium text-amber-950 animate-in fade-in">
                <strong className="font-black">Dica:</strong> {item.hint}
              </div>
            )}
          </div>
        )}
      </div>

      {/* OPTIONS LIST */}
      <div className="grid grid-cols-1 gap-3 my-1">
        {options.map((opt, idx) => {
          const letter = opt.id || String.fromCharCode(65 + idx);
          const isSelected = selectedOption?.id === opt.id || selectedOption?.text === opt.text;
          const isAnswered = selectedOption !== null;

          let btnStyle = 'bg-slate-50 border-2 border-slate-100 hover:border-indigo-300 hover:bg-white text-indigo-950 font-bold shadow-xs hover:translate-y-[-2px]';

          if (isAnswered) {
            if (opt.isCorrect) {
              btnStyle = 'bg-emerald-50 border-2 border-emerald-400 text-emerald-950 font-black shadow-md';
            } else if (isSelected && !opt.isCorrect) {
              btnStyle = 'bg-rose-50 border-2 border-rose-400 text-rose-950 font-black shadow-md';
            } else {
              btnStyle = 'bg-slate-50/60 border-2 border-slate-100 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={opt.id || idx}
              id={`quiz-opt-${letter}`}
              disabled={isAnswered}
              onClick={() => onSelectOption(opt)}
              className={`w-full p-4 rounded-2xl text-left flex items-center justify-between transition-all cursor-pointer ${btnStyle}`}
            >
              <div className="flex items-center gap-3.5">
                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black shadow-xs ${
                  isAnswered && opt.isCorrect
                    ? 'bg-emerald-600 text-white'
                    : isSelected && !opt.isCorrect
                    ? 'bg-rose-600 text-white'
                    : 'bg-white text-indigo-900 border-2 border-slate-200'
                }`}>
                  {letter}
                </span>
                <span className="text-sm sm:text-base font-bold">{opt.text}</span>
              </div>

              {isAnswered && (
                <div>
                  {opt.isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                  {isSelected && !opt.isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* EXPLANATION & NEXT BUTTON */}
      {selectedOption !== null && (
        <div className="border-t-2 border-slate-100 pt-5 flex flex-col gap-4">
          <div className={`p-4 rounded-2xl border-2 text-xs leading-relaxed font-medium ${
            selectedOption.isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
              : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <p className="font-black text-sm mb-1">
              {selectedOption.isCorrect ? 'Correto! 🎉' : 'Incorreto! ❌'}
            </p>
            <p>{selectedOption.rationale || item.rationale}</p>
          </div>

          <button
            id="btn-quiz-next"
            onClick={onNext}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-200 border-b-4 border-indigo-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próxima Pergunta' : 'Ver Resultados da Partida'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
