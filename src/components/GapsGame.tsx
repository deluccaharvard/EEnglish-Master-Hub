import React from 'react';
import { Volume2, HelpCircle, CheckCircle2, XCircle, ChevronRight, Sparkles, BookOpen } from 'lucide-react';
import { VocabItem, QuizOption } from '../types';

interface GapsGameProps {
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

export const GapsGame: React.FC<GapsGameProps> = ({
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
  const sentence = item.sentence || `I need a _________ to finish my work.`;
  const options = item.options || [];

  // Parts of the sentence before and after gap
  const parts = sentence.split('_________');
  const filledWord = selectedOption ? selectedOption.text : null;

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-cyan-100/50 border-b-8 border-cyan-200 border-x-2 border-t-2 border-cyan-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <span className="text-[10px] font-black uppercase tracking-wider text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border-2 border-cyan-100">
          Frase {currentIndex + 1} de {totalCount}
        </span>

        {item.wordEn && (
          <button
            id="btn-gaps-speak"
            onClick={() => {
              const fullSentence = sentence.replace('_________', filledWord || item.wordEn);
              onSpeak(fullSentence);
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider text-cyan-800 bg-cyan-50 hover:bg-cyan-100 rounded-xl border-2 border-cyan-100 transition-colors cursor-pointer"
            title="Ouvir frase completa"
          >
            <Volume2 className="w-4 h-4 text-cyan-600" />
            <span>Ouvir Frase</span>
          </button>
        )}
      </div>

      {/* SENTENCE CARD WITH GAP */}
      <div className="p-6 sm:p-7 bg-slate-50 rounded-[28px] border-2 border-slate-100 text-center flex flex-col gap-3">
        <p className="text-lg sm:text-xl font-bold text-indigo-950 leading-relaxed">
          {parts[0]}
          <span
            className={`inline-block px-4 py-1.5 mx-1.5 rounded-2xl font-black border-2 transition-all ${
              filledWord
                ? selectedOption?.isCorrect
                  ? 'bg-emerald-100 border-emerald-400 text-emerald-950 shadow-xs'
                  : 'bg-rose-100 border-rose-400 text-rose-950 shadow-xs'
                : 'bg-white border-dashed border-slate-300 text-slate-400 min-w-[120px]'
            }`}
          >
            {filledWord || '_________'}
          </span>
          {parts[1]}
        </p>

        {item.sentencePt && (
          <p className="text-xs text-slate-500 font-medium italic mt-1">
            "{item.sentencePt}"
          </p>
        )}
      </div>

      {/* HINT */}
      {item.hint && (
        <div>
          {!showHint ? (
            <button
              id="btn-gaps-toggle-hint"
              onClick={onToggleHint}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-700 font-bold transition-colors cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-cyan-600" />
              <span>Ver dica de contexto</span>
            </button>
          ) : (
            <div className="p-3.5 bg-amber-50 border-2 border-amber-200 rounded-2xl text-xs text-amber-900 font-medium animate-in fade-in">
              <strong className="font-black">Dica:</strong> {item.hint}
            </div>
          )}
        </div>
      )}

      {/* OPTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-1">
        {options.map((opt, idx) => {
          const isSelected = selectedOption?.id === opt.id || selectedOption?.text === opt.text;
          const isAnswered = selectedOption !== null;

          let btnStyle = 'bg-white border-2 border-slate-100 text-indigo-950 hover:border-cyan-400 hover:bg-cyan-50/40 shadow-xs hover:translate-y-[-2px]';

          if (isAnswered) {
            if (opt.isCorrect) {
              btnStyle = 'bg-emerald-50 border-2 border-emerald-400 text-emerald-950 font-black shadow-md ring-2 ring-emerald-200';
            } else if (isSelected && !opt.isCorrect) {
              btnStyle = 'bg-rose-50 border-2 border-rose-400 text-rose-950 font-black shadow-md animate-shake';
            } else {
              btnStyle = 'bg-slate-50/50 border-2 border-slate-100 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={opt.id || idx}
              id={`gaps-opt-${idx}`}
              disabled={isAnswered}
              onClick={() => onSelectOption(opt)}
              className={`p-4 sm:p-5 rounded-2xl text-left flex items-center justify-between font-black text-sm sm:text-base transition-all cursor-pointer ${btnStyle}`}
            >
              <span>{opt.text}</span>
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
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4">
          <div className={`p-4 rounded-2xl border-2 text-xs leading-relaxed ${
            selectedOption.isCorrect
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
              : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <p className="font-black mb-1 text-sm">
              {selectedOption.isCorrect ? 'Correto!' : 'Incorreto!'}
            </p>
            <p className="font-medium">{selectedOption.rationale || item.rationale}</p>
          </div>

          <button
            id="btn-gaps-next"
            onClick={onNext}
            className="w-full py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-cyan-200 border-b-4 border-cyan-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próxima Frase' : 'Ver Resultados'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
