import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, BookOpen } from 'lucide-react';

interface FloatingNavProps {
  onOpenTeacher: () => void;
  onOpenDictionary: () => void;
  activeTool: 'teacher' | 'dictionary' | null;
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  onOpenTeacher,
  onOpenDictionary,
  activeTool,
}) => {
  return (
    <aside
      aria-label="Ferramentas Flutuantes"
      className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-40 flex flex-col gap-4 items-end pointer-events-auto"
    >
      {/* 1. Ícone Redondo: Professor */}
      <motion.div
        animate={{
          y: [0, -9, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="relative group flex items-center"
      >
        {/* Tooltip Lateral */}
        <span
          className="absolute right-full mr-3.5 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-slate-700 flex items-center gap-1.5 backdrop-blur-xs"
        >
          <span className="w-4 h-4 rounded-full bg-indigo-500 text-white text-[10px] flex items-center justify-center font-black">
            1
          </span>
          Professor Virtual
        </span>

        {/* Botão Redondo */}
        <button
          type="button"
          id="floating-btn-teacher"
          onClick={onOpenTeacher}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer ${
            activeTool === 'teacher'
              ? 'bg-indigo-600 text-white ring-4 ring-indigo-300 ring-offset-2 scale-105 shadow-indigo-500/40'
              : 'bg-gradient-to-tr from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white border-2 border-indigo-400/50 border-b-4 border-b-indigo-800 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 active:border-b-2'
          }`}
          title="1 Professor - Assistente e Tutor de Inglês"
          aria-label="Abrir ferramenta 1 Professor"
        >
          {/* Badge Numérico 1 */}
          <span className="absolute -top-1 -left-1 w-5 h-5 bg-amber-400 text-amber-950 text-[11px] font-black rounded-full border-2 border-white shadow-md flex items-center justify-center">
            1
          </span>

          <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] drop-shadow-sm" />
          <span className="text-[10px] font-extrabold tracking-wide uppercase mt-0.5 scale-90">
            Prof.
          </span>
        </button>
      </motion.div>

      {/* 2. Ícone Redondo: Dicionário */}
      <motion.div
        animate={{
          y: [0, -9, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.6, // Descompasso suave para flutuação harmônica
        }}
        className="relative group flex items-center"
      >
        {/* Tooltip Lateral */}
        <span
          className="absolute right-full mr-3.5 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-bold rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-slate-700 flex items-center gap-1.5 backdrop-blur-xs"
        >
          <span className="w-4 h-4 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center font-black">
            2
          </span>
          Dicionário Bilíngue
        </span>

        {/* Botão Redondo */}
        <button
          type="button"
          id="floating-btn-dictionary"
          onClick={onOpenDictionary}
          className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex flex-col items-center justify-center shadow-2xl transition-all duration-200 cursor-pointer ${
            activeTool === 'dictionary'
              ? 'bg-emerald-600 text-white ring-4 ring-emerald-300 ring-offset-2 scale-105 shadow-emerald-500/40'
              : 'bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white border-2 border-emerald-300/50 border-b-4 border-b-emerald-800 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 active:border-b-2'
          }`}
          title="2 Dicionário - Busca e Pronúncia de Palavras"
          aria-label="Abrir ferramenta 2 Dicionário"
        >
          {/* Badge Numérico 2 */}
          <span className="absolute -top-1 -left-1 w-5 h-5 bg-amber-400 text-amber-950 text-[11px] font-black rounded-full border-2 border-white shadow-md flex items-center justify-center">
            2
          </span>

          <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] drop-shadow-sm" />
          <span className="text-[10px] font-extrabold tracking-wide uppercase mt-0.5 scale-90">
            Dicio
          </span>
        </button>
      </motion.div>
    </aside>
  );
};
