import React, { useState } from 'react';
import { Award, Heart, Volume2, HelpCircle, Sparkles, ArrowRight, ShieldAlert, SplitSquareVertical } from 'lucide-react';
import { SurvivorQuestion, QuizOption } from '../types';

interface SurvivorGameProps {
  questions: SurvivorQuestion[];
  onFinishSurvivor: (prize: number) => void;
  onSpeak: (text: string) => void;
}

export const SurvivorGame: React.FC<SurvivorGameProps> = ({
  questions,
  onFinishSurvivor,
  onSpeak,
}) => {
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [eliminatedOptions, setEliminatedOptions] = useState<string[]>([]);
  const [usedLifelines, setUsedLifelines] = useState<{ fiftyFifty: boolean; hint: boolean; aiAssist: boolean }>({
    fiftyFifty: false,
    hint: false,
    aiAssist: false,
  });
  const [activeHint, setActiveHint] = useState<string | null>(null);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  const currentQ = questions[currentLevel] || questions[0];

  const handleUseFiftyFifty = () => {
    if (usedLifelines.fiftyFifty || selectedOption) return;
    const wrongOptions = currentQ.options.filter((o) => !o.isCorrect).map((o) => o.id);
    const toEliminate = wrongOptions.slice(0, 2);
    setEliminatedOptions(toEliminate);
    setUsedLifelines((prev) => ({ ...prev, fiftyFifty: true }));
  };

  const handleUseHint = () => {
    if (usedLifelines.hint || selectedOption) return;
    setActiveHint(currentQ.hint);
    setUsedLifelines((prev) => ({ ...prev, hint: true }));
  };

  const handleUseAiAssist = () => {
    if (usedLifelines.aiAssist || selectedOption) return;
    const correctOpt = currentQ.options.find((o) => o.isCorrect);
    setActiveHint(`Professor IA: "Analisando a estrutura linguística, com 95% de certeza a resposta correta é '${correctOpt?.text}'."`);
    setUsedLifelines((prev) => ({ ...prev, aiAssist: true }));
  };

  const handleSelectOption = (opt: QuizOption) => {
    if (selectedOption || isGameOver) return;
    setSelectedOption(opt.id);
    onSpeak(opt.text);

    if (opt.isCorrect) {
      // Correct!
    } else {
      const nextLives = lives - 1;
      setLives(nextLives);
      if (nextLives <= 0) {
        setIsGameOver(true);
      }
    }
  };

  const handleAdvance = () => {
    if (currentLevel < questions.length - 1) {
      setCurrentLevel((prev) => prev + 1);
      setSelectedOption(null);
      setEliminatedOptions([]);
      setActiveHint(null);
    } else {
      onFinishSurvivor(currentQ.prizeAmount);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-rose-100/50 border-b-8 border-rose-200 border-x-2 border-t-2 border-rose-50 flex flex-col gap-6">
      
      {/* HEADER: LIVES & PRIZE LADDER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 3 }).map((_, i) => (
            <Heart
              key={i}
              className={`w-6 h-6 ${
                i < lives ? 'text-rose-500 fill-rose-500 animate-pulse' : 'text-slate-200 fill-slate-100'
              }`}
            />
          ))}
          <span className="text-[10px] font-black uppercase tracking-wider text-rose-700 ml-1.5 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
            {lives} Vidas Restantes
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black uppercase text-amber-600 bg-amber-50 px-3 py-1 rounded-full border-2 border-amber-200">
            Prêmio: ${currentQ.prizeAmount.toLocaleString()} XP
          </span>
        </div>
      </div>

      {/* LIFELINES DOCK */}
      <div className="flex items-center justify-center gap-2.5">
        <button
          type="button"
          id="btn-lifeline-5050"
          disabled={usedLifelines.fiftyFifty || !!selectedOption}
          onClick={handleUseFiftyFifty}
          className="px-3 py-2 bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-700 disabled:opacity-30 disabled:pointer-events-none rounded-xl border border-slate-200 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
          title="Elimina duas opções erradas"
        >
          <SplitSquareVertical className="w-3.5 h-3.5" />
          <span>50:50</span>
        </button>

        <button
          type="button"
          id="btn-lifeline-hint"
          disabled={usedLifelines.hint || !!selectedOption}
          onClick={handleUseHint}
          className="px-3 py-2 bg-slate-50 hover:bg-rose-50 text-slate-700 hover:text-rose-700 disabled:opacity-30 disabled:pointer-events-none rounded-xl border border-slate-200 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
          title="Revela uma pista temática"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Dica</span>
        </button>

        <button
          type="button"
          id="btn-lifeline-ai"
          disabled={usedLifelines.aiAssist || !!selectedOption}
          onClick={handleUseAiAssist}
          className="px-3 py-2 bg-gradient-to-r from-purple-50 to-rose-50 hover:from-purple-100 text-indigo-900 disabled:opacity-30 disabled:pointer-events-none rounded-xl border border-purple-200 text-xs font-black uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
          title="Consulta ao Professor IA"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
          <span>Ajuda da IA</span>
        </button>
      </div>

      {activeHint && (
        <div className="p-3.5 bg-amber-50 border-2 border-amber-200 rounded-2xl text-xs text-amber-900 font-medium animate-in fade-in">
          {activeHint}
        </div>
      )}

      {/* QUESTION HERO */}
      <div className="text-center bg-rose-50/50 border-2 border-rose-100 p-6 sm:p-8 rounded-3xl flex flex-col gap-2">
        <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">
          Pergunta valendo ${currentQ.prizeAmount.toLocaleString()} XP:
        </span>
        <h3 className="text-xl sm:text-2xl font-black font-display text-indigo-950 leading-snug">
          {currentQ.questionEn}
        </h3>
        <p className="text-xs text-slate-500 font-medium">
          {currentQ.questionPt}
        </p>

        <button
          type="button"
          onClick={() => onSpeak(currentQ.questionEn)}
          className="self-center mt-1 p-1 text-slate-400 hover:text-rose-600 rounded"
        >
          <Volume2 className="w-4 h-4" />
        </button>
      </div>

      {/* 4 OPTIONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {currentQ.options.map((opt) => {
          const isEliminated = eliminatedOptions.includes(opt.id);
          const isSelected = selectedOption === opt.id;

          let btnStyle = 'bg-white border-slate-100 hover:border-rose-300 hover:bg-rose-50/30 text-indigo-950';

          if (isEliminated) {
            btnStyle = 'opacity-20 pointer-events-none bg-slate-100 border-dashed border-slate-200 text-slate-400';
          } else if (selectedOption) {
            if (opt.isCorrect) {
              btnStyle = 'bg-emerald-50 border-emerald-400 border-b-4 border-emerald-500 text-emerald-950 font-black';
            } else if (isSelected && !opt.isCorrect) {
              btnStyle = 'bg-rose-50 border-rose-400 border-b-4 border-rose-500 text-rose-950 font-black';
            } else {
              btnStyle = 'bg-slate-50/50 border-slate-100 text-slate-400 opacity-40';
            }
          }

          return (
            <button
              key={opt.id}
              id={`btn-survivor-opt-${opt.id}`}
              disabled={!!selectedOption || isEliminated}
              onClick={() => handleSelectOption(opt)}
              className={`p-4 rounded-2xl border-2 text-left flex items-center gap-3 transition-all cursor-pointer ${btnStyle}`}
            >
              <span className="w-7 h-7 rounded-xl bg-rose-100 text-rose-800 font-black text-xs flex items-center justify-center shrink-0">
                {opt.id}
              </span>
              <span className="text-sm font-black">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {/* FEEDBACK & ADVANCE OR GAME OVER */}
      {selectedOption && (
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4 animate-in fade-in">
          {lives <= 0 ? (
            <div className="p-4 bg-rose-50 border-2 border-rose-200 rounded-2xl text-center flex flex-col gap-2">
              <span className="text-sm font-black text-rose-950">Suas vidas se esgotaram!</span>
              <p className="text-xs text-rose-800">
                Você conquistou um grande avanço no Survivor Trivia. Tente novamente para alcançar o prêmio máximo!
              </p>
              <button
                id="btn-survivor-finish-gameover"
                onClick={() => onFinishSurvivor(currentLevel > 0 ? questions[currentLevel - 1].prizeAmount : 0)}
                className="mt-2 py-3 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
              >
                Finalizar Desafio
              </button>
            </div>
          ) : (
            <button
              id="btn-survivor-next"
              onClick={handleAdvance}
              className="w-full py-4 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-rose-200 border-b-4 border-rose-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{currentLevel < questions.length - 1 ? `Avançar para $${questions[currentLevel + 1].prizeAmount.toLocaleString()} XP` : 'Conquistar o Prêmio Máximo!'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}

    </div>
  );
};
