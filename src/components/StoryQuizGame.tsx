import React, { useState } from 'react';
import { Sparkles, Volume2, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { StoryAdventure, StoryScene, StoryOption } from '../types';

interface StoryQuizGameProps {
  adventure: StoryAdventure;
  onFinishAdventure: (totalPoints: number) => void;
  onSpeak: (text: string) => void;
}

export const StoryQuizGame: React.FC<StoryQuizGameProps> = ({
  adventure,
  onFinishAdventure,
  onSpeak,
}) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<StoryOption | null>(null);
  const [accumulatedScore, setAccumulatedScore] = useState<number>(0);

  const currentScene: StoryScene = adventure.scenes[currentSceneIndex] || adventure.scenes[0];

  const handleSelectOption = (opt: StoryOption) => {
    if (selectedOption) return;
    setSelectedOption(opt);
    onSpeak(opt.actionEn);

    if (opt.isCorrect) {
      setAccumulatedScore((s) => s + opt.points);
    }
  };

  const handleAdvance = () => {
    if (currentSceneIndex < adventure.scenes.length - 1) {
      setCurrentSceneIndex((i) => i + 1);
      setSelectedOption(null);
    } else {
      onFinishAdventure(accumulatedScore);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-indigo-100/50 border-b-8 border-indigo-200 border-x-2 border-t-2 border-indigo-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-black">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border-2 border-indigo-100">
            {adventure.scenario} • Cena {currentSceneIndex + 1} de {adventure.scenes.length}
          </span>
        </div>

        <div className="text-xs font-black text-indigo-950 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
          {accumulatedScore} XP
        </div>
      </div>

      {/* STORY CONTEXT / NARRATIVE */}
      <div className="bg-gradient-to-br from-indigo-50/70 to-purple-50/70 border-2 border-indigo-100 p-6 rounded-3xl flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">
            {currentScene.title}
          </span>
          <button
            type="button"
            onClick={() => onSpeak(`${currentScene.settingEn}. ${currentScene.promptEn}`)}
            className="p-1 text-slate-400 hover:text-indigo-600 rounded"
            title="Ouvir narrativa"
          >
            <Volume2 className="w-4 h-4" />
          </button>
        </div>

        <p className="text-base sm:text-lg font-black text-indigo-950 leading-relaxed">
          {currentScene.settingEn}
        </p>
        <p className="text-xs text-slate-500 font-medium">
          {currentScene.settingPt}
        </p>

        <div className="border-t border-indigo-100/80 pt-3 mt-1">
          <p className="text-sm font-black text-indigo-900">
            👉 {currentScene.promptEn}
          </p>
          <p className="text-[11px] text-slate-500">
            {currentScene.promptPt}
          </p>
        </div>
      </div>

      {/* DECISION OPTIONS */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-black uppercase tracking-wider text-indigo-950">
          Qual decisão você toma?
        </span>
        {currentScene.options.map((opt) => {
          const isSelected = selectedOption?.id === opt.id;
          let btnStyle = 'bg-white border-slate-100 hover:border-indigo-300 hover:bg-indigo-50/30 text-indigo-950';

          if (selectedOption) {
            if (opt.isCorrect) {
              btnStyle = 'bg-emerald-50 border-emerald-400 border-b-4 border-emerald-500 text-emerald-950 font-black';
            } else if (isSelected && !opt.isCorrect) {
              btnStyle = 'bg-rose-50 border-rose-400 border-b-4 border-rose-500 text-rose-950 font-black';
            } else {
              btnStyle = 'bg-slate-50/40 border-slate-100 text-slate-400 opacity-40';
            }
          }

          return (
            <button
              key={opt.id}
              id={`btn-story-opt-${opt.id}`}
              disabled={!!selectedOption}
              onClick={() => handleSelectOption(opt)}
              className={`p-4 rounded-2xl border-2 text-left flex items-start gap-3 transition-all cursor-pointer ${btnStyle}`}
            >
              <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-800 font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                {opt.id.slice(-1)}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-black">{opt.actionEn}</span>
                <span className="text-xs text-slate-500 font-medium">{opt.actionPt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* CONSEQUENCE / FEEDBACK */}
      {selectedOption && (
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4 animate-in fade-in">
          <div className={`p-4 rounded-2xl border-2 text-xs leading-relaxed ${
            selectedOption.isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <p className="font-black text-sm mb-1">
              {selectedOption.isCorrect ? 'Decisão Certeira! (+100 XP)' : 'Ops, não era a melhor escolha.'}
            </p>
            <p className="font-medium">{selectedOption.feedbackPt}</p>
            <p className="text-[11px] text-slate-500 font-mono italic mt-1">{selectedOption.feedbackEn}</p>
          </div>

          <button
            id="btn-story-next"
            onClick={handleAdvance}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-indigo-200 border-b-4 border-indigo-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentSceneIndex < adventure.scenes.length - 1 ? 'Avançar na História' : 'Concluir Aventura'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
