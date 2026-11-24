import React, { useState } from 'react';
import { Flag, Volume2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { CountryMatchItem } from '../types';

interface FlagMatchGameProps {
  item: CountryMatchItem;
  currentIndex: number;
  totalCount: number;
  allCountries: CountryMatchItem[];
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const FlagMatchGame: React.FC<FlagMatchGameProps> = ({
  item,
  currentIndex,
  totalCount,
  allCountries,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  const [selectedCapital, setSelectedCapital] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  // Generate distinct distractors
  const capitalOptions = React.useMemo(() => {
    const set = new Set<string>([item.capital]);
    allCountries.forEach((c) => {
      if (c.capital !== item.capital && set.size < 4) {
        set.add(c.capital);
      }
    });
    return Array.from(set).sort(() => 0.5 - Math.random());
  }, [item, allCountries]);

  const languageOptions = React.useMemo(() => {
    const set = new Set<string>([item.language]);
    allCountries.forEach((c) => {
      if (c.language !== item.language && set.size < 4) {
        set.add(c.language);
      }
    });
    return Array.from(set).sort(() => 0.5 - Math.random());
  }, [item, allCountries]);

  const handleSelectCapital = (cap: string) => {
    if (selectedCapital) return;
    setSelectedCapital(cap);
    onSpeak(cap);

    if (cap !== item.capital) {
      onWrongAnswer();
    }
  };

  const handleSelectLanguage = (lang: string) => {
    if (selectedLanguage || !selectedCapital) return;
    setSelectedLanguage(lang);
    onSpeak(lang);

    const isAllCorrect = selectedCapital === item.capital && lang === item.language;
    if (isAllCorrect) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
    setIsCompleted(true);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-amber-100/50 border-b-8 border-amber-200 border-x-2 border-t-2 border-amber-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
            <Flag className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border-2 border-amber-100">
            Flag & Language Match • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSpeak(item.countryEn)}
          className="p-1.5 text-slate-400 hover:text-amber-600 rounded-xl transition-colors flex items-center gap-1 text-xs font-bold"
        >
          <Volume2 className="w-4 h-4" />
          <span>{item.countryEn}</span>
        </button>
      </div>

      {/* TARGET COUNTRY DISPLAY */}
      <div className="text-center bg-amber-50/50 border-2 border-amber-100 p-6 rounded-3xl flex flex-col items-center justify-center gap-2">
        <span className="text-6xl sm:text-7xl drop-shadow-sm select-none animate-in zoom-in-50">
          {item.flagEmoji}
        </span>
        <h3 className="text-2xl sm:text-3xl font-black font-display text-indigo-950">
          {item.countryEn}
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          Em português: <strong className="text-indigo-900">{item.countryPt}</strong>
        </p>
      </div>

      {/* QUESTION 1: CAPITAL */}
      <div className="flex flex-col gap-2.5">
        <span className="text-xs font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
          <span>1. Qual é a capital?</span>
          {selectedCapital && (
            <span className={`text-[10px] px-2 py-0.5 rounded-md font-black ${
              selectedCapital === item.capital ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
            }`}>
              {selectedCapital === item.capital ? 'Correto!' : `Correto: ${item.capital}`}
            </span>
          )}
        </span>
        <div className="grid grid-cols-2 gap-2.5">
          {capitalOptions.map((cap, idx) => {
            const isSelected = selectedCapital === cap;
            const isCorrect = cap === item.capital;
            let btnStyle = 'bg-white border-slate-100 hover:border-amber-300 hover:bg-amber-50/30 text-indigo-950';

            if (selectedCapital) {
              if (isCorrect) {
                btnStyle = 'bg-emerald-50 border-emerald-400 border-b-4 border-emerald-500 text-emerald-950 font-black';
              } else if (isSelected && !isCorrect) {
                btnStyle = 'bg-rose-50 border-rose-400 border-b-4 border-rose-500 text-rose-950 font-black';
              } else {
                btnStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-50';
              }
            }

            return (
              <button
                key={idx}
                id={`btn-flag-cap-${idx}`}
                disabled={!!selectedCapital}
                onClick={() => handleSelectCapital(cap)}
                className={`p-3.5 rounded-2xl border-2 font-bold text-sm text-center transition-all cursor-pointer ${btnStyle}`}
              >
                {cap}
              </button>
            );
          })}
        </div>
      </div>

      {/* QUESTION 2: LANGUAGE */}
      {selectedCapital && (
        <div className="flex flex-col gap-2.5 animate-in fade-in">
          <span className="text-xs font-black uppercase tracking-wider text-indigo-950 flex items-center gap-1.5">
            <span>2. Qual é o idioma oficial predominante?</span>
            {selectedLanguage && (
              <span className={`text-[10px] px-2 py-0.5 rounded-md font-black ${
                selectedLanguage === item.language ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
              }`}>
                {selectedLanguage === item.language ? 'Correto!' : `Correto: ${item.language}`}
              </span>
            )}
          </span>
          <div className="grid grid-cols-2 gap-2.5">
            {languageOptions.map((lang, idx) => {
              const isSelected = selectedLanguage === lang;
              const isCorrect = lang === item.language;
              let btnStyle = 'bg-white border-slate-100 hover:border-amber-300 hover:bg-amber-50/30 text-indigo-950';

              if (selectedLanguage) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-50 border-emerald-400 border-b-4 border-emerald-500 text-emerald-950 font-black';
                } else if (isSelected && !isCorrect) {
                  btnStyle = 'bg-rose-50 border-rose-400 border-b-4 border-rose-500 text-rose-950 font-black';
                } else {
                  btnStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-50';
                }
              }

              return (
                <button
                  key={idx}
                  id={`btn-flag-lang-${idx}`}
                  disabled={!!selectedLanguage}
                  onClick={() => handleSelectLanguage(lang)}
                  className={`p-3.5 rounded-2xl border-2 font-bold text-sm text-center transition-all cursor-pointer ${btnStyle}`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* NEXT BUTTON */}
      {isCompleted && (
        <div className="border-t-2 border-slate-100 pt-4 animate-in fade-in">
          <button
            id="btn-flag-next"
            onClick={onNext}
            className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-amber-200 border-b-4 border-amber-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próximo País' : 'Ver Resultados'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
