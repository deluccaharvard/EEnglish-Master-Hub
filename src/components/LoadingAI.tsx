import React, { useState, useEffect } from 'react';
import { Sparkles, Loader2, Database, Brain } from 'lucide-react';

interface LoadingAIProps {
  onCancelToLocal: () => void;
  topicLabel: string;
  difficultyLabel: string;
}

const TIPS = [
  'Dica: Ouvir a pronúncia em voz alta fortalece as conexões neurais da memória.',
  'Dica: O aprendizado espaçado (SRS) ajuda a fixar vocabulário na memória de longo prazo.',
  'Dica: Tente associar novas palavras em inglês a imagens mentais vívidas.',
  'Dica: No modo Memory Chain, preste atenção tanto na grafia quanto no som das palavras.'
];

export const LoadingAI: React.FC<LoadingAIProps> = ({
  onCancelToLocal,
  topicLabel,
  difficultyLabel,
}) => {
  const [tipIndex, setTipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % TIPS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto bg-white rounded-[32px] p-8 sm:p-10 shadow-xl shadow-indigo-100/50 border-b-8 border-indigo-200 border-x-2 border-t-2 border-indigo-50 text-center flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-3xl bg-indigo-600 border-b-6 border-indigo-900 flex items-center justify-center text-white shadow-xl shadow-indigo-100 animate-pulse">
          <Brain className="w-12 h-12" />
        </div>
        <div className="absolute -bottom-2 -right-2 p-2.5 bg-white rounded-2xl shadow-md border-2 border-slate-100">
          <Loader2 className="w-6 h-6 text-indigo-600 animate-spin" />
        </div>
      </div>

      <h3 className="text-2xl sm:text-3xl font-black font-display text-indigo-950 tracking-tight">
        Gerando Desafios com IA Gemini
      </h3>
      <p className="text-xs text-slate-500 font-medium mt-1 max-w-sm">
        Criando vocabulário dinâmico para <strong className="text-indigo-600 font-black">{topicLabel}</strong> ({difficultyLabel}).
      </p>

      {/* ROTATING TIP */}
      <div className="mt-6 p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl w-full text-xs font-medium text-slate-600 italic">
        {TIPS[tipIndex]}
      </div>

      <div className="mt-8 flex items-center gap-3">
        <button
          id="btn-cancel-loading-ai"
          onClick={onCancelToLocal}
          className="inline-flex items-center gap-2 px-5 py-3 text-xs font-black uppercase tracking-wider text-indigo-950 bg-slate-100 hover:bg-slate-200 rounded-2xl border-2 border-slate-200 transition-all hover:translate-y-[-2px] cursor-pointer"
        >
          <Database className="w-4 h-4 text-slate-500" />
          <span>Jogar agora com Banco Local</span>
        </button>
      </div>
    </div>
  );
};
