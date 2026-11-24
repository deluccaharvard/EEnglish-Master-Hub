import React from 'react';
import { Volume2, HelpCircle, RotateCcw, ChevronRight, CheckCircle2, XCircle, Undo2 } from 'lucide-react';
import { VocabItem, ScrambleLetter } from '../types';

interface ScrambleGameProps {
  item: VocabItem;
  currentIndex: number;
  totalCount: number;
  scrambledLetters: ScrambleLetter[];
  selectedLetters: ScrambleLetter[];
  status: 'playing' | 'correct' | 'wrong';
  showHint: boolean;
  onSelectLetter: (letter: ScrambleLetter) => void;
  onDeselectLetter: (letter: ScrambleLetter) => void;
  onReset: () => void;
  onToggleHint: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const ScrambleGame: React.FC<ScrambleGameProps> = ({
  item,
  currentIndex,
  totalCount,
  scrambledLetters,
  selectedLetters,
  status,
  showHint,
  onSelectLetter,
  onDeselectLetter,
  onReset,
  onToggleHint,
  onNext,
  onSpeak,
}) => {
  const targetWord = item.wordEn.replace(/[^a-zA-Z]/g, '').toUpperCase();
  const totalLetters = targetWord.length;

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-pink-100/50 border-b-8 border-pink-200 border-x-2 border-t-2 border-pink-50 flex flex-col gap-6">
      
      {/* HEADER & PROGRESS */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <span className="text-[10px] font-black uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full border-2 border-pink-100">
          Palavra {currentIndex + 1} de {totalCount}
        </span>

        {item.hint && (
          <button
            id="btn-scramble-toggle-hint"
            onClick={onToggleHint}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-pink-600 font-bold transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-pink-500" />
            <span>{showHint ? 'Ocultar dica' : 'Ver dica'}</span>
          </button>
        )}
      </div>

      {/* CLUE / MEANING IN PORTUGUESE */}
      <div className="text-center">
        <span className="text-xs text-slate-400 uppercase font-black tracking-wider">
          Traduza para o inglês
        </span>
        <h3 className="text-2xl sm:text-3xl font-black font-display text-indigo-950 tracking-tight mt-1">
          {item.wordPt}
        </h3>

        {showHint && item.hint && (
          <div className="mt-3 p-3 bg-amber-50 border-2 border-amber-200 rounded-2xl text-xs text-amber-900 font-medium animate-in fade-in">
            <strong className="font-black">Dica:</strong> {item.hint}
          </div>
        )}
      </div>

      {/* ANSWER SLOTS (SELECTED LETTERS) */}
      <div className="flex flex-wrap items-center justify-center gap-2 my-2 min-h-[64px] p-4 bg-slate-50 rounded-2xl border-2 border-slate-100">
        {Array.from({ length: totalLetters }).map((_, index) => {
          const letterObj = selectedLetters[index];
          return (
            <button
              key={index}
              id={`slot-letter-${index}`}
              disabled={!letterObj || status !== 'playing'}
              onClick={() => letterObj && onDeselectLetter(letterObj)}
              className={`w-12 h-14 rounded-2xl border-2 flex items-center justify-center font-black font-display text-xl select-none transition-all cursor-pointer ${
                letterObj
                  ? status === 'correct'
                    ? 'bg-emerald-600 text-white border-emerald-700 shadow-md scale-105'
                    : status === 'wrong'
                    ? 'bg-rose-600 text-white border-rose-700 shadow-md animate-shake'
                    : 'bg-white text-indigo-950 border-indigo-200 border-b-4 border-b-indigo-300 shadow-sm hover:border-pink-400 hover:text-pink-600'
                  : 'bg-indigo-50/50 border-indigo-200 border-dashed text-transparent cursor-default'
              }`}
              title={letterObj ? 'Clique para remover' : ''}
            >
              {letterObj ? letterObj.char : ''}
            </button>
          );
        })}
      </div>

      {/* POOL OF SCRAMBLED LETTERS */}
      {status === 'playing' && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {scrambledLetters.map((l) => (
              <button
                key={l.id}
                id={`scramble-let-${l.id}`}
                onClick={() => onSelectLetter(l)}
                className="w-12 h-14 rounded-2xl bg-white hover:bg-pink-50 border-2 border-slate-100 border-b-4 border-b-slate-200 hover:border-b-pink-300 text-indigo-950 font-black font-display text-xl shadow-sm transition-all hover:translate-y-[-2px] active:translate-y-0 cursor-pointer"
              >
                {l.char}
              </button>
            ))}
          </div>

          {/* RESET / UNDO */}
          {selectedLetters.length > 0 && (
            <button
              id="btn-scramble-reset"
              onClick={onReset}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-500 hover:text-indigo-950 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Limpar letras</span>
            </button>
          )}
        </div>
      )}

      {/* SUCCESS BANNER */}
      {status === 'correct' && (
        <div className="p-5 bg-emerald-50 rounded-2xl border-2 border-emerald-200 flex flex-col gap-4 animate-in zoom-in-95">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-emerald-950 font-black text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Correto! Vocabulário decifrado.</span>
            </div>
            <button
              id="btn-scramble-speak-correct"
              onClick={() => onSpeak(item.wordEn)}
              className="p-2 bg-white text-emerald-700 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors shadow-xs"
              title="Ouvir som"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          {item.sentence && (
            <p className="text-xs text-emerald-800 font-medium italic">
              Exemplo: "{item.sentence.replace('_________', item.wordEn)}"
            </p>
          )}

          <button
            id="btn-scramble-next"
            onClick={onNext}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-200 border-b-4 border-emerald-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próxima Palavra' : 'Ver Resultados'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* WRONG BANNER */}
      {status === 'wrong' && (
        <div className="p-5 bg-rose-50 rounded-2xl border-2 border-rose-200 flex flex-col gap-4 animate-in zoom-in-95">
          <div className="flex items-center gap-2.5 text-rose-950 font-black text-sm">
            <XCircle className="w-5 h-5 text-rose-600" />
            <span>Ortografia incorreta. Tente reorganizar!</span>
          </div>

          <button
            id="btn-scramble-retry"
            onClick={onReset}
            className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-rose-200 border-b-4 border-rose-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tentar Novamente</span>
          </button>
        </div>
      )}

    </div>
  );
};
