import React from 'react';
import { Brain, Clock, Flame, Trophy, Volume2, ArrowLeft, RotateCcw, LogOut, User } from 'lucide-react';
import { GameMode, GameState, AuthUser } from '../types';

interface HeaderProps {
  activeGameMode: GameMode;
  gameState: GameState;
  score: number;
  streak: number;
  timeSeconds: number;
  isPlayingAudio: boolean;
  onGoToHub: () => void;
  onRestartCurrent?: () => void;
  currentUser?: AuthUser | null;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeGameMode,
  gameState,
  score,
  streak,
  timeSeconds,
  isPlayingAudio,
  onGoToHub,
  onRestartCurrent,
  currentUser,
  onLogout,
}) => {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getModeTitle = (mode: GameMode) => {
    switch (mode) {
      case 'quiz': return 'Quiz de Vocabulário';
      case 'memory': return 'Jogo da Memória';
      case 'columns': return 'Match Columns';
      case 'flashcards': return 'Flashcards SRS';
      case 'chain': return 'Memory Chain';
      case 'scramble': return 'Word Scramble';
      case 'saver': return 'Word Saver';
      case 'gaps': return 'Fill in the Gaps';
      case 'odd_one_out': return 'Odd One Out (Encontre o Intruso)';
      case 'geoquest': return 'GeoQuest (Adivinhe o País)';
      case 'map_pinpoint': return 'Map Pinpoint (Caça ao Tesouro)';
      case 'flag_match': return 'Flag & Language Match';
      case 'science_lab': return 'Science Lab (Ordem do Experimento)';
      case 'myth_busters': return 'Myth Busters (Fato ou Fake?)';
      case 'food_chain': return 'Food Chain Builder (Teia Alimentar)';
      case 'speed_run': return 'Speed Run: 60s Challenge';
      case 'story_quiz': return 'Story Quiz (Cenários & Decisões)';
      case 'categories': return 'Categorização Rápida';
      case 'sound_spelling': return 'Sound & Spelling';
      case 'crossword': return 'Crossword Quiz';
      case 'survivor': return 'Survivor Trivia ($50,000)';
      case 'sign_master': return 'Sign Master & AI Teacher';
      default: return 'Learning Hub';
    }
  };

  return (
    <header className="w-full max-w-5xl bg-white rounded-[28px] shadow-lg shadow-indigo-100/60 border-2 border-indigo-100 p-4 sm:p-5 mb-6 transition-all">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* LOGO & TITLE */}
        <div className="flex items-center gap-3.5 w-full sm:w-auto justify-between sm:justify-start">
          <div
            id="header-hub-logo-btn"
            onClick={onGoToHub}
            className="flex items-center gap-3.5 cursor-pointer group select-none"
            title="Voltar ao início"
          >
            <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 rotate-3 text-white group-hover:rotate-6 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-black tracking-tight text-indigo-950 uppercase font-display">
                  English Master
                </h1>
                {isPlayingAudio && (
                  <span className="flex items-center gap-1 text-[10px] font-black uppercase bg-indigo-50 text-indigo-600 px-2.5 py-0.5 rounded-full border-2 border-indigo-100 animate-pulse tracking-wider">
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Áudio</span>
                  </span>
                )}
              </div>
              <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">
                {activeGameMode === 'hub' ? 'Learning Hub' : getModeTitle(activeGameMode)}
              </div>
            </div>
          </div>

          {/* BACK TO HUB BUTTON ON MOBILE */}
          {activeGameMode !== 'hub' && (
            <button
              id="header-back-hub-btn"
              onClick={onGoToHub}
              className="sm:hidden flex items-center gap-1.5 px-3 py-2 text-xs font-black uppercase tracking-wider text-indigo-700 bg-indigo-50 hover:bg-indigo-100 rounded-2xl border-2 border-indigo-100 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Hub</span>
            </button>
          )}
        </div>

        {/* RIGHT CONTROLS & STATS */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          {activeGameMode !== 'hub' && (
            <button
              id="header-back-hub-desktop-btn"
              onClick={onGoToHub}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-indigo-700 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 rounded-2xl border-2 border-indigo-100 shadow-sm transition-all hover:translate-y-[-1px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar ao Hub</span>
            </button>
          )}

          {activeGameMode !== 'hub' && onRestartCurrent && gameState === 'game' && (
            <button
              id="header-restart-btn"
              onClick={onRestartCurrent}
              title="Reiniciar rodada"
              className="p-2.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-2xl transition-all border-2 border-slate-100 hover:border-indigo-100 shadow-xs"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}

          {/* GAME STATS BADGES */}
          {activeGameMode !== 'hub' && gameState === 'game' && (
            <div className="flex items-center gap-2.5">
              {(activeGameMode === 'memory' || activeGameMode === 'columns') && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-900 rounded-2xl border-2 border-indigo-100 text-xs font-black font-mono shadow-xs" title="Tempo Decorrido">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  <span>{formatTime(timeSeconds)}</span>
                </div>
              )}

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gradient-to-br from-amber-400 to-orange-500 text-white rounded-2xl shadow-md shadow-orange-200/50 text-xs font-black" title="Sequência de Acertos">
                <Flame className={`w-4 h-4 ${streak > 0 ? 'text-white fill-white animate-pulse' : 'text-amber-100'}`} />
                <span>{streak} 🔥</span>
              </div>

              <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border-2 border-slate-100 rounded-2xl shadow-xs text-xs font-black text-indigo-950" title="Pontuação Geral">
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>{score} XP</span>
              </div>
            </div>
          )}

          {currentUser && onLogout && (
            <div className="flex items-center gap-2 pl-2 border-l border-slate-200">
              <span className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 max-w-[140px] truncate" title={currentUser.email}>
                <User className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span className="truncate">{currentUser.name}</span>
              </span>
              <button
                type="button"
                id="header-logout-btn"
                onClick={onLogout}
                title="Sair da sessão"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-red-700 bg-slate-100 hover:bg-red-50 rounded-xl border border-slate-200 hover:border-red-200 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sair</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
