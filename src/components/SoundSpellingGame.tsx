import React, { useState, useEffect } from 'react';
import { Volume2, Volume1, ArrowRight, CheckCircle2, RotateCcw, HelpCircle } from 'lucide-react';
import { SoundSpellingItem } from '../types';

interface SoundSpellingGameProps {
  item: SoundSpellingItem;
  currentIndex: number;
  totalCount: number;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string, rate?: number) => void;
}

export const SoundSpellingGame: React.FC<SoundSpellingGameProps> = ({
  item,
  currentIndex,
  totalCount,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  const [typedInput, setTypedInput] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Play pronunciation on component mount or item change
  useEffect(() => {
    setTypedInput('');
    setIsSubmitted(false);
    setShowHint(false);
    onSpeak(item.wordEn, 0.9);
  }, [item]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isSubmitted || !typedInput.trim()) return;

    const normalizedTyped = typedInput.trim().toLowerCase();
    const normalizedTarget = item.wordEn.trim().toLowerCase();
    const success = normalizedTyped === normalizedTarget;

    setIsCorrect(success);
    setIsSubmitted(true);

    if (success) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-indigo-100/50 border-b-8 border-indigo-200 border-x-2 border-t-2 border-indigo-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
            <Volume2 className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border-2 border-indigo-100">
            Sound & Spelling • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setShowHint(!showHint)}
          className="text-xs font-bold text-slate-500 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
        >
          <HelpCircle className="w-4 h-4" />
          <span>{showHint ? 'Ocultar dica' : 'Ver dica'}</span>
        </button>
      </div>

      {/* AUDIO PLAYER HERO */}
      <div className="text-center bg-indigo-50/60 border-2 border-indigo-100 p-6 sm:p-8 rounded-3xl flex flex-col items-center justify-center gap-4">
        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">
          Ouça com atenção e escreva a palavra:
        </span>

        {/* Big Audio Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            id="btn-play-normal-sound"
            onClick={() => onSpeak(item.wordEn, 0.9)}
            className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-wider shadow-md shadow-indigo-200 border-b-4 border-indigo-900 transition-all hover:translate-y-[-2px] flex items-center gap-2 cursor-pointer"
          >
            <Volume2 className="w-4 h-4" />
            <span>Ouvir Normal</span>
          </button>

          <button
            type="button"
            id="btn-play-slow-sound"
            onClick={() => onSpeak(item.wordEn, 0.65)}
            className="px-4 py-3 bg-white hover:bg-indigo-50 text-indigo-700 border-2 border-indigo-200 rounded-2xl font-black text-xs uppercase tracking-wider transition-all hover:translate-y-[-2px] flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Volume1 className="w-4 h-4" />
            <span>Lento (0.6x)</span>
          </button>
        </div>

        {/* Phonetic & Translation */}
        <div className="flex flex-col items-center gap-0.5 mt-1">
          <span className="font-mono text-xs text-indigo-700 bg-indigo-100/60 px-3 py-0.5 rounded-full">
            {item.phonetic}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Tradução: <strong className="text-indigo-950">{item.wordPt}</strong>
          </span>
        </div>
      </div>

      {showHint && (
        <div className="p-3.5 bg-amber-50 border-2 border-amber-200 rounded-2xl text-xs text-amber-900 font-medium animate-in fade-in">
          <strong className="font-black">Dica de Grafia:</strong> {item.hint}
        </div>
      )}

      {/* INPUT FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          id="input-sound-spelling"
          disabled={isSubmitted}
          autoFocus
          value={typedInput}
          onChange={(e) => setTypedInput(e.target.value)}
          placeholder="Digite a palavra em inglês..."
          className="w-full text-center text-xl sm:text-2xl font-black text-indigo-950 p-4 rounded-2xl border-2 border-slate-200 focus:border-indigo-600 focus:outline-none tracking-wide bg-white shadow-xs"
        />

        {!isSubmitted ? (
          <button
            type="submit"
            id="btn-sound-submit"
            disabled={!typedInput.trim()}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:pointer-events-none text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-200 border-b-4 border-indigo-900 transition-all hover:translate-y-[-2px] cursor-pointer"
          >
            Verificar Soletração
          </button>
        ) : (
          <div className="flex flex-col gap-4 animate-in fade-in">
            <div className={`p-4 rounded-2xl border-2 text-xs leading-relaxed ${
              isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
            }`}>
              <div className="flex items-center gap-2 font-black text-sm mb-1">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Perfeito! Soletração exata: "{item.wordEn}".</span>
                  </>
                ) : (
                  <span>A palavra correta é: <strong className="text-base text-rose-700 underline">{item.wordEn}</strong></span>
                )}
              </div>
              <p className="text-slate-600 mt-1 italic">"{item.exampleSentence}"</p>
            </div>

            <button
              type="button"
              id="btn-sound-next"
              onClick={onNext}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-200 border-b-4 border-indigo-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{currentIndex < totalCount - 1 ? 'Próxima Palavra' : 'Ver Resultados'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>

    </div>
  );
};
