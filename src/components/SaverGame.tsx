import React from 'react';
import { Volume2, Heart, HelpCircle, ChevronRight, CheckCircle2, XCircle } from 'lucide-react';
import { VocabItem } from '../types';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

interface SaverGameProps {
  item: VocabItem;
  currentIndex: number;
  totalCount: number;
  guessedLetters: string[];
  wrongGuessesCount: number;
  maxWrongGuesses?: number;
  status: 'playing' | 'won' | 'lost';
  showHint: boolean;
  onGuessLetter: (letter: string) => void;
  onToggleHint: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const SaverGame: React.FC<SaverGameProps> = ({
  item,
  currentIndex,
  totalCount,
  guessedLetters,
  wrongGuessesCount,
  maxWrongGuesses = 6,
  status,
  showHint,
  onGuessLetter,
  onToggleHint,
  onNext,
  onSpeak,
}) => {
  const targetWord = item.wordEn.toUpperCase();
  const livesLeft = Math.max(0, maxWrongGuesses - wrongGuessesCount);

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-emerald-100/50 border-b-8 border-emerald-200 border-x-2 border-t-2 border-emerald-50 flex flex-col gap-6">
      
      {/* HEADER & HEARTS */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border-2 border-emerald-100">
          Palavra {currentIndex + 1} de {totalCount}
        </span>

        {/* LIVES/HEARTS */}
        <div className="flex items-center gap-1.5" title={`${livesLeft} vidas restantes`}>
          {Array.from({ length: maxWrongGuesses }).map((_, i) => (
            <Heart
              key={i}
              className={`w-5 h-5 transition-all ${
                i < livesLeft
                  ? 'text-rose-500 fill-rose-500 scale-100'
                  : 'text-slate-200 scale-90'
              }`}
            />
          ))}
        </div>
      </div>

      {/* CLUE IN PORTUGUESE */}
      <div className="text-center">
        <span className="text-xs text-slate-400 uppercase font-black tracking-wider">
          Adivinhe o termo em inglês para
        </span>
        <h3 className="text-2xl sm:text-3xl font-black font-display text-indigo-950 tracking-tight mt-1">
          {item.wordPt}
        </h3>

        {item.hint && (
          <div className="mt-2">
            {!showHint ? (
              <button
                id="btn-saver-toggle-hint"
                onClick={onToggleHint}
                className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-emerald-600 font-bold transition-colors cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-emerald-500" />
                <span>Ver dica</span>
              </button>
            ) : (
              <div className="p-3 bg-amber-50 border-2 border-amber-200 rounded-2xl text-xs text-amber-900 font-medium animate-in fade-in">
                <strong className="font-black">Dica:</strong> {item.hint}
              </div>
            )}
          </div>
        )}
      </div>

      {/* WORD LETTERS DISPLAY */}
      <div className="flex flex-wrap items-center justify-center gap-2 my-2 py-3">
        {targetWord.split('').map((char, index) => {
          const isAlpha = /[A-Z]/.test(char);
          const isGuessed = guessedLetters.includes(char) || status !== 'playing';

          if (!isAlpha) {
            return (
              <span key={index} className="w-5 text-center font-black text-xl text-slate-400">
                {char}
              </span>
            );
          }

          return (
            <div
              key={index}
              id={`saver-letter-${index}`}
              className={`w-11 sm:w-12 h-14 rounded-2xl border-2 flex items-center justify-center font-black font-display text-2xl transition-all ${
                isGuessed
                  ? status === 'won'
                    ? 'bg-emerald-50 border-emerald-400 border-b-4 border-b-emerald-500 text-emerald-950 shadow-sm'
                    : status === 'lost' && !guessedLetters.includes(char)
                    ? 'bg-rose-50 border-rose-400 border-b-4 border-b-rose-500 text-rose-950'
                    : 'bg-emerald-50 border-emerald-300 border-b-4 border-b-emerald-400 text-emerald-950 shadow-xs'
                  : 'bg-slate-50 border-slate-200 border-b-4 border-b-slate-300 text-transparent'
              }`}
            >
              {isGuessed ? char : ''}
            </div>
          );
        })}
      </div>

      {/* STATUS BANNERS */}
      {status === 'won' && (
        <div className="p-5 bg-emerald-50 rounded-2xl border-2 border-emerald-200 flex flex-col gap-4 animate-in zoom-in-95">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-emerald-950 font-black text-sm">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Excelente! Você salvou a palavra.</span>
            </div>
            <button
              id="btn-saver-speak"
              onClick={() => onSpeak(item.wordEn)}
              className="p-2 bg-white text-emerald-700 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors shadow-xs"
              title="Ouvir som"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <button
            id="btn-saver-next-won"
            onClick={onNext}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-200 border-b-4 border-emerald-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próxima Palavra' : 'Ver Resultados'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {status === 'lost' && (
        <div className="p-5 bg-rose-50 rounded-2xl border-2 border-rose-200 flex flex-col gap-4 animate-in zoom-in-95">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-rose-950 font-black text-sm">
              <XCircle className="w-5 h-5 text-rose-600" />
              <span>Tentativas esgotadas! A palavra era "{item.wordEn}".</span>
            </div>
            <button
              id="btn-saver-speak-lost"
              onClick={() => onSpeak(item.wordEn)}
              className="p-2 bg-white text-rose-700 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors shadow-xs"
              title="Ouvir som"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>

          <button
            id="btn-saver-next-lost"
            onClick={onNext}
            className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-rose-200 border-b-4 border-rose-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próxima Palavra' : 'Ver Resultados'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* ON-SCREEN ALPHABET KEYBOARD */}
      {status === 'playing' && (
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {ALPHABET.map((letter) => {
            const isGuessed = guessedLetters.includes(letter);
            const isCorrect = isGuessed && targetWord.includes(letter);
            const isWrong = isGuessed && !targetWord.includes(letter);

            return (
              <button
                key={letter}
                id={`key-${letter}`}
                disabled={isGuessed}
                onClick={() => onGuessLetter(letter)}
                className={`w-9 h-11 sm:w-10 sm:h-12 rounded-2xl text-xs sm:text-sm font-black font-display transition-all border-2 cursor-pointer ${
                  isCorrect
                    ? 'bg-emerald-100 border-emerald-300 border-b-4 border-b-emerald-400 text-emerald-950 opacity-80 cursor-default'
                    : isWrong
                    ? 'bg-slate-100 border-slate-200 border-b-4 border-b-slate-200 text-slate-400 opacity-40 cursor-default'
                    : 'bg-white hover:bg-emerald-50 border-slate-100 border-b-4 border-b-slate-200 hover:border-b-emerald-400 text-indigo-950 shadow-xs hover:translate-y-[-2px] active:translate-y-0'
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>
      )}

    </div>
  );
};
