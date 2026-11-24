import React from 'react';
import { Volume2, Zap, RotateCcw, ChevronRight, CheckCircle2, XCircle, Clock } from 'lucide-react';

interface ChainItem {
  id: string;
  wordEn: string;
  wordPt: string;
}

interface ChainGameProps {
  chainPool: ChainItem[];
  chainSequence: ChainItem[];
  userSequence: ChainItem[];
  chainStage: 'memorize' | 'recall' | 'success' | 'failed';
  chainLevel: number;
  countdownTimer: number;
  onCardClick: (item: ChainItem) => void;
  onNextLevel: () => void;
  onRetryLevel: () => void;
  onSpeak: (text: string) => void;
}

export const ChainGame: React.FC<ChainGameProps> = ({
  chainPool,
  chainSequence,
  userSequence,
  chainStage,
  chainLevel,
  countdownTimer,
  onCardClick,
  onNextLevel,
  onRetryLevel,
  onSpeak,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col gap-6">
      
      {/* HEADER & LEVEL STATUS */}
      <div className="bg-white rounded-[28px] p-5 shadow-lg shadow-indigo-100/50 border-2 border-indigo-100 flex items-center justify-between">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center font-black">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] text-amber-600 font-black uppercase tracking-wider block">
              Nível {chainLevel} de 4
            </span>
            <span className="text-base font-black text-indigo-950 font-display">
              Cadeia de {chainSequence.length} palavras
            </span>
          </div>
        </div>

        {chainStage === 'memorize' && (
          <div className="flex items-center gap-2 bg-amber-50 text-amber-900 px-3.5 py-2 rounded-2xl border-2 border-amber-200 font-black text-xs animate-pulse">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Memorize: {countdownTimer}s</span>
          </div>
        )}

        {chainStage === 'recall' && (
          <div className="text-xs bg-indigo-50 text-indigo-900 font-black px-3.5 py-2 rounded-2xl border-2 border-indigo-100">
            Sua vez: {userSequence.length} / {chainSequence.length}
          </div>
        )}
      </div>

      {/* MAIN STAGE DISPLAY */}
      {chainStage === 'memorize' && (
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-amber-100/50 border-b-8 border-amber-200 border-x-2 border-t-2 border-amber-50 text-center flex flex-col items-center">
          <span className="text-xs font-black text-amber-600 uppercase tracking-wider mb-2">
            Ouça e memorize a sequência exata
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-indigo-950 mb-6">
            Sequência do Nível {chainLevel}
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            {chainSequence.map((item, idx) => (
              <div
                key={item.id}
                className="px-5 py-3.5 bg-amber-50 border-2 border-amber-200 text-amber-950 rounded-2xl font-black text-base shadow-sm flex items-center gap-2.5 animate-in zoom-in-95"
              >
                <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-[11px] font-black flex items-center justify-center">
                  {idx + 1}
                </span>
                <span>{item.wordEn}</span>
                <button
                  type="button"
                  onClick={() => onSpeak(item.wordEn)}
                  className="p-1 text-amber-600 hover:text-amber-900 transition-colors"
                >
                  <Volume2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <p className="text-xs font-bold text-slate-400 mt-8">
            O tempo de memorização acabará em breve... prepare-se para clicar na mesma ordem!
          </p>
        </div>
      )}

      {/* RECALL STAGE */}
      {chainStage === 'recall' && (
        <div className="bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-amber-100/50 border-b-8 border-amber-200 border-x-2 border-t-2 border-amber-50 flex flex-col gap-6">
          <div className="text-center">
            <h3 className="text-2xl font-black font-display text-indigo-950">
              Selecione as palavras na ordem correta
            </h3>
            <p className="text-xs font-medium text-slate-500 mt-1">
              Clique nas palavras memorizadas para reproduzir a cadeia.
            </p>
          </div>

          {/* USER PROGRESS CHIPS */}
          <div className="min-h-14 p-3.5 bg-slate-50 rounded-2xl border-2 border-slate-100 flex flex-wrap items-center justify-center gap-2.5">
            {userSequence.length === 0 ? (
              <span className="text-xs font-bold text-slate-400 italic">Nenhuma palavra selecionada ainda...</span>
            ) : (
              userSequence.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-2 bg-indigo-600 text-white text-xs font-black rounded-xl shadow-sm animate-in zoom-in-95 flex items-center gap-1.5"
                >
                  <span className="opacity-70">{idx + 1}.</span> {item.wordEn}
                </span>
              ))
            )}
          </div>

          {/* POOL OF WORDS TO PICK FROM */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
            {chainPool.map((item) => {
              return (
                <button
                  key={item.id}
                  id={`chain-pick-${item.id}`}
                  onClick={() => onCardClick(item)}
                  className="p-4 bg-slate-50 hover:bg-white border-2 border-slate-100 hover:border-amber-400 rounded-2xl text-center font-black text-sm text-indigo-950 transition-all shadow-xs hover:translate-y-[-2px] cursor-pointer"
                >
                  <span className="text-base font-black">{item.wordEn}</span>
                  <span className="block text-xs text-slate-400 font-bold mt-0.5">
                    {item.wordPt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* SUCCESS STAGE */}
      {chainStage === 'success' && (
        <div className="bg-white rounded-[32px] p-8 border-b-8 border-emerald-300 border-x-2 border-t-2 border-emerald-100 text-center flex flex-col items-center shadow-xl shadow-emerald-100/50 animate-in zoom-in-95">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center text-3xl mb-4">
            🎉
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-emerald-950">
            Excelente Memória!
          </h3>
          <p className="text-xs font-medium text-emerald-800 mt-1 max-w-sm">
            Você reproduziu a cadeia de {chainSequence.length} palavras perfeitamente.
          </p>

          <button
            id="btn-chain-next-level"
            onClick={onNextLevel}
            className="mt-6 py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-200 border-b-4 border-emerald-900 transition-all hover:translate-y-[-2px] flex items-center gap-2 cursor-pointer"
          >
            <span>{chainLevel < 4 ? 'Avançar para o Próximo Nível' : 'Concluir Desafio'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* FAILED STAGE */}
      {chainStage === 'failed' && (
        <div className="bg-white rounded-[32px] p-8 border-b-8 border-rose-300 border-x-2 border-t-2 border-rose-100 text-center flex flex-col items-center shadow-xl shadow-rose-100/50 animate-in zoom-in-95">
          <div className="w-16 h-16 bg-rose-100 text-rose-600 rounded-3xl flex items-center justify-center text-3xl mb-4">
            ❌
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-display text-rose-950">
            Ordem Incorreta
          </h3>
          <p className="text-xs font-medium text-rose-800 mt-1 max-w-sm">
            Não desanime! Tente novamente para reforçar a memorização da sequência.
          </p>

          <button
            id="btn-chain-retry"
            onClick={onRetryLevel}
            className="mt-6 py-4 px-8 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-rose-200 border-b-4 border-rose-900 transition-all hover:translate-y-[-2px] flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tentar este Nível Novamente</span>
          </button>
        </div>
      )}

    </div>
  );
};
