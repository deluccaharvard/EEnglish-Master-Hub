import React, { useState } from 'react';
import { Hash, Volume2, CheckCircle2, HelpCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { CrosswordGrid, CrosswordClue } from '../types';

interface CrosswordGameProps {
  grid: CrosswordGrid;
  onFinishCrossword: (score: number) => void;
  onSpeak: (text: string) => void;
}

export const CrosswordGame: React.FC<CrosswordGameProps> = ({
  grid,
  onFinishCrossword,
  onSpeak,
}) => {
  // Initialize grid matrix
  const [userLetters, setUserLetters] = useState<{ [key: string]: string }>({});
  const [selectedClue, setSelectedClue] = useState<CrosswordClue>(grid.clues[0]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleCellChange = (row: number, col: number, char: string) => {
    const key = `${row}-${col}`;
    const cleanChar = char.toUpperCase().slice(-1);
    setUserLetters((prev) => ({ ...prev, [key]: cleanChar }));
  };

  const handleValidate = () => {
    let allCorrect = true;

    for (const clue of grid.clues) {
      const letters = clue.answer.toUpperCase();
      for (let i = 0; i < letters.length; i++) {
        const r = clue.direction === 'across' ? clue.row : clue.row + i;
        const c = clue.direction === 'across' ? clue.col + i : clue.col;
        const key = `${r}-${c}`;
        if ((userLetters[key] || '') !== letters[i]) {
          allCorrect = false;
          break;
        }
      }
      if (!allCorrect) break;
    }

    if (allCorrect) {
      setIsCompleted(true);
      setFeedback('Sensacional! Todas as palavras foram cruzadas e preenchidas com sucesso!');
      onFinishCrossword(300);
    } else {
      setFeedback('Algumas letras ainda estão incorretas ou faltando. Verifique as dicas!');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-amber-100/50 border-b-8 border-amber-200 border-x-2 border-t-2 border-amber-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-black">
            <Hash className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border-2 border-amber-100">
            {grid.title}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSpeak(selectedClue?.clueEn || '')}
          className="text-xs font-bold text-slate-500 hover:text-amber-600 flex items-center gap-1 cursor-pointer"
        >
          <Volume2 className="w-4 h-4" />
          <span>Ouvir dica selecionada</span>
        </button>
      </div>

      {/* ACTIVE CLUE BANNER */}
      {selectedClue && (
        <div className="bg-amber-50/70 border-2 border-amber-200 p-4 rounded-2xl flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-amber-800">
              Dica {selectedClue.number} ({selectedClue.direction === 'across' ? 'Horizontal' : 'Vertical'})
            </span>
            <span className="text-[11px] font-mono font-bold text-amber-700">
              {selectedClue.answer.length} Letras
            </span>
          </div>
          <p className="text-sm font-black text-indigo-950">{selectedClue.clueEn}</p>
          <p className="text-xs text-slate-500">{selectedClue.cluePt}</p>
        </div>
      )}

      {/* CLUES TABS (ACROSS & DOWN) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Horizontal (Across):
          </span>
          {grid.clues.filter((c) => c.direction === 'across').map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedClue(c)}
              className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                selectedClue?.id === c.id ? 'bg-amber-100 border-amber-300 text-amber-950 font-black' : 'bg-slate-50 border-slate-100 hover:bg-amber-50 text-slate-700'
              }`}
            >
              <strong>{c.number}.</strong> {c.clueEn}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
            Vertical (Down):
          </span>
          {grid.clues.filter((c) => c.direction === 'down').map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedClue(c)}
              className={`p-2.5 rounded-xl border text-left text-xs font-bold transition-all cursor-pointer ${
                selectedClue?.id === c.id ? 'bg-amber-100 border-amber-300 text-amber-950 font-black' : 'bg-slate-50 border-slate-100 hover:bg-amber-50 text-slate-700'
              }`}
            >
              <strong>{c.number}.</strong> {c.clueEn}
            </button>
          ))}
        </div>
      </div>

      {/* CROSSWORD LETTER INPUT CARDS */}
      <div className="p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl flex flex-col gap-3">
        <span className="text-xs font-black uppercase tracking-wider text-indigo-950">
          Preencha a palavra selecionada:
        </span>
        <div className="flex items-center gap-2 justify-center flex-wrap">
          {Array.from({ length: selectedClue.answer.length }).map((_, i) => {
            const r = selectedClue.direction === 'across' ? selectedClue.row : selectedClue.row + i;
            const c = selectedClue.direction === 'across' ? selectedClue.col + i : selectedClue.col;
            const key = `${r}-${c}`;
            const val = userLetters[key] || '';

            return (
              <input
                key={i}
                type="text"
                maxLength={1}
                value={val}
                onChange={(e) => handleCellChange(r, c, e.target.value)}
                className="w-10 h-12 text-center text-lg font-black uppercase rounded-xl border-2 border-slate-200 focus:border-amber-500 bg-white shadow-xs focus:outline-none"
              />
            );
          })}
        </div>
      </div>

      {feedback && (
        <div className={`p-3 text-center text-xs font-black rounded-2xl border-2 ${
          isCompleted ? 'bg-emerald-50 text-emerald-950 border-emerald-300' : 'bg-amber-50 text-amber-950 border-amber-300'
        }`}>
          {feedback}
        </div>
      )}

      {/* VALIDATE BUTTON */}
      {!isCompleted ? (
        <button
          id="btn-cw-validate"
          onClick={handleValidate}
          className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-amber-200 border-b-4 border-amber-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Conferir Palavras Cruzadas</span>
        </button>
      ) : (
        <button
          id="btn-cw-finish"
          onClick={() => onFinishCrossword(300)}
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-emerald-200 border-b-4 border-emerald-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Concluir Desafio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      )}

    </div>
  );
};
