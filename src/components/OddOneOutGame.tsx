import React, { useState } from 'react';
import { Target, Volume2, CheckCircle2, XCircle, ArrowRight, HelpCircle } from 'lucide-react';
import { OddOneOutItem } from '../types';

interface OddOneOutGameProps {
  item: OddOneOutItem;
  currentIndex: number;
  totalCount: number;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const OddOneOutGame: React.FC<OddOneOutGameProps> = ({
  item,
  currentIndex,
  totalCount,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);
  const [selectedJustification, setSelectedJustification] = useState<string | null>(null);
  const [step, setStep] = useState<'pick_intruder' | 'pick_reason' | 'revealed'>('pick_intruder');
  const [showHint, setShowHint] = useState<boolean>(false);

  const handlePickIntruder = (wordEn: string) => {
    if (selectedWord) return;
    setSelectedWord(wordEn);
    onSpeak(wordEn);

    if (wordEn.toLowerCase() === item.intruderWordEn.toLowerCase()) {
      onCorrectAnswer();
      setStep('pick_reason');
    } else {
      onWrongAnswer();
      setStep('revealed');
    }
  };

  const handlePickReason = (optionId: string, isCorrect: boolean) => {
    setSelectedJustification(optionId);
    if (isCorrect) {
      onCorrectAnswer();
    }
    setStep('revealed');
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-fuchsia-100/50 border-b-8 border-fuchsia-200 border-x-2 border-t-2 border-fuchsia-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center font-black">
            <Target className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-fuchsia-700 bg-fuchsia-50 px-3 py-1 rounded-full border-2 border-fuchsia-100">
            Odd One Out • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <button
          id="btn-odd-toggle-hint"
          onClick={() => setShowHint(!showHint)}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-fuchsia-700 font-bold transition-colors cursor-pointer"
        >
          <HelpCircle className="w-4 h-4 text-fuchsia-500" />
          <span>{showHint ? 'Ocultar dica' : 'Dica temática'}</span>
        </button>
      </div>

      {showHint && (
        <div className="p-3.5 bg-amber-50 border-2 border-amber-200 rounded-2xl text-xs text-amber-900 font-medium animate-in fade-in">
          <strong className="font-black">Tema do Grupo:</strong> {item.groupTheme} (3 palavras pertencem a este campo semântico, 1 quebra a regra).
        </div>
      )}

      {/* PROMPT */}
      <div className="text-center">
        <h3 className="text-xl sm:text-2xl font-black font-display text-indigo-950 tracking-tight">
          Qual dessas palavras NÃO pertence ao grupo?
        </h3>
        <p className="text-xs text-slate-500 font-medium mt-1">
          Identifique o termo intruso e compreenda o campo semântico em inglês.
        </p>
      </div>

      {/* 4 CARDS */}
      <div className="grid grid-cols-2 gap-3.5">
        {item.items.map((wordItem, idx) => {
          const isSelected = selectedWord === wordItem.wordEn;
          const isTheIntruder = wordItem.isIntruder;
          let btnStyle = 'bg-white border-slate-100 hover:border-fuchsia-300 hover:bg-fuchsia-50/40 text-indigo-950 shadow-xs hover:translate-y-[-2px]';

          if (selectedWord) {
            if (isTheIntruder) {
              btnStyle = 'bg-emerald-50 border-emerald-400 border-b-4 border-emerald-500 text-emerald-950 font-black shadow-md';
            } else if (isSelected && !isTheIntruder) {
              btnStyle = 'bg-rose-50 border-rose-400 border-b-4 border-rose-500 text-rose-950 font-black';
            } else {
              btnStyle = 'bg-slate-50/60 border-slate-100 text-slate-400 opacity-60';
            }
          }

          return (
            <button
              key={idx}
              id={`odd-card-${idx}`}
              disabled={!!selectedWord}
              onClick={() => handlePickIntruder(wordItem.wordEn)}
              className={`p-5 rounded-2xl border-2 text-center flex flex-col items-center justify-center gap-1 transition-all cursor-pointer relative ${btnStyle}`}
            >
              <span className="text-lg sm:text-xl font-black">{wordItem.wordEn}</span>
              <span className="text-xs text-slate-400 font-medium">({wordItem.wordPt})</span>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSpeak(wordItem.wordEn);
                }}
                className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-fuchsia-600 rounded-lg transition-colors"
                title="Ouvir som"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </button>
          );
        })}
      </div>

      {/* STEP 2: JUSTIFICATION VALIDATION */}
      {step === 'pick_reason' && (
        <div className="bg-fuchsia-50/60 border-2 border-fuchsia-200 p-5 rounded-2xl flex flex-col gap-3 animate-in fade-in">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-fuchsia-900">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Excelente! Agora, por que "{item.intruderWordEn}" é a intrusa?</span>
          </div>
          <div className="flex flex-col gap-2">
            {item.justificationOptions.map((opt) => (
              <button
                key={opt.id}
                id={`btn-justification-${opt.id}`}
                onClick={() => handlePickReason(opt.id, opt.isCorrect)}
                className="w-full text-left p-3.5 bg-white hover:bg-fuchsia-100/70 border-2 border-fuchsia-100 hover:border-fuchsia-300 rounded-xl text-xs font-bold text-indigo-950 transition-all cursor-pointer"
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* STEP 3: REVEALED FEEDBACK */}
      {step === 'revealed' && (
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4 animate-in fade-in">
          <div className={`p-4 rounded-2xl border-2 text-xs leading-relaxed ${
            selectedWord?.toLowerCase() === item.intruderWordEn.toLowerCase()
              ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
              : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <p className="font-black text-sm mb-1">
              {selectedWord?.toLowerCase() === item.intruderWordEn.toLowerCase()
                ? 'Acertou o Intruso!'
                : `A palavra intrusa era "${item.intruderWordEn}"!`}
            </p>
            <p className="font-medium mt-1">{item.reasonPt}</p>
            <p className="text-[11px] text-slate-500 font-mono mt-2 italic">{item.reasonEn}</p>
          </div>

          <button
            id="btn-odd-next"
            onClick={onNext}
            className="w-full py-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-fuchsia-200 border-b-4 border-fuchsia-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próximo Desafio' : 'Ver Resultados'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
