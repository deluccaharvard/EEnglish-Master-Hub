import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  GameMode,
  GameState,
  TopicId,
  DifficultyId,
  VocabItem,
  QuizOption,
  MemoryCard,
  ColumnItem,
  ScrambleLetter,
  SRSStats,
  AuthUser,
} from './types';
import { LOCAL_DATABASE, TOPICS, DIFFICULTIES } from './data/database';
import { playPronunciation, stopPronunciation } from './utils/speech';
import { getStoredSession, clearSession } from './utils/auth';
import { Header } from './components/Header';
import { HubMenu } from './components/HubMenu';
import { LoadingAI } from './components/LoadingAI';
import { FinishedModal } from './components/FinishedModal';
import { QuizGame } from './components/QuizGame';
import { MemoryGame } from './components/MemoryGame';
import { ColumnsGame } from './components/ColumnsGame';
import { FlashcardsGame } from './components/FlashcardsGame';
import { ChainGame } from './components/ChainGame';
import { ScrambleGame } from './components/ScrambleGame';
import { SaverGame } from './components/SaverGame';
import { GapsGame } from './components/GapsGame';
import { OddOneOutGame } from './components/OddOneOutGame';
import { GeoQuestGame } from './components/GeoQuestGame';
import { MapPinpointGame } from './components/MapPinpointGame';
import { FlagMatchGame } from './components/FlagMatchGame';
import { ScienceLabGame } from './components/ScienceLabGame';
import { MythBustersGame } from './components/MythBustersGame';
import { FoodChainGame } from './components/FoodChainGame';
import { SpeedRunGame } from './components/SpeedRunGame';
import { StoryQuizGame } from './components/StoryQuizGame';
import { CategoriesGame } from './components/CategoriesGame';
import { SoundSpellingGame } from './components/SoundSpellingGame';
import { CrosswordGame } from './components/CrosswordGame';
import { SurvivorGame } from './components/SurvivorGame';
import { SignMasterGame } from './components/SignMasterGame';
import { FloatingNav } from './components/FloatingNav';
import { TeacherTool } from './components/TeacherTool';
import { DictionaryTool } from './components/DictionaryTool';
import { LoginScreen } from './components/LoginScreen';
import {
  ODD_ONE_OUT_DATA,
  GEOQUEST_DATA,
  MAP_PINPOINT_DATA,
  FLAG_MATCH_DATA,
  SCIENCE_PROCESS_DATA,
  MYTH_BUSTERS_DATA,
  FOOD_CHAIN_DATA,
  STORY_ADVENTURES,
  CATEGORY_BINS,
  CATEGORY_WORD_ITEMS,
  SOUND_SPELLING_DATA,
  SAMPLE_CROSSWORD,
  SURVIVOR_QUESTIONS,
  SIGN_MASTER_DATA,
} from './data/extendedGamesData';

export function App() {
  // Authentication & Session Gate
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(() => {
    const stored = getStoredSession();
    return stored ? stored.user : null;
  });

  // Navigation & Game State
  const [activeGameMode, setActiveGameMode] = useState<GameMode>('hub');
  const [gameState, setGameState] = useState<GameState>('menu');

  // Filters & Settings
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('todos');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyId>('todas');
  const [itemCount, setItemCount] = useState<number>(5);
  const [useAiGenerator, setUseAiGenerator] = useState<boolean>(false);

  // Overall Stats
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [maxStreak, setMaxStreak] = useState<number>(0);
  const [timeSeconds, setTimeSeconds] = useState<number>(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  // Active Game Deck & Progress
  const [gameItems, setGameItems] = useState<VocabItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [notification, setNotification] = useState<string | null>(null);

  // Floating Tools Modal State (1 Professor, 2 Dicionário)
  const [activeFloatingTool, setActiveFloatingTool] = useState<'teacher' | 'dictionary' | null>(null);

  // Sub-game specific states
  // Quiz & Gaps
  const [selectedOption, setSelectedOption] = useState<QuizOption | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);

  // Memory Game
  const [memCards, setMemCards] = useState<MemoryCard[]>([]);
  const [memFlipped, setMemFlipped] = useState<number[]>([]);
  const [memMatched, setMemMatched] = useState<string[]>([]);
  const [memMoves, setMemMoves] = useState<number>(0);

  // Columns Match
  const [colLeft, setColLeft] = useState<ColumnItem[]>([]);
  const [colRight, setColRight] = useState<{ pairId: string; text: string; hint?: string }[]>([]);
  const [selectedColLeft, setSelectedColLeft] = useState<ColumnItem | null>(null);
  const [selectedColRight, setSelectedColRight] = useState<{ pairId: string; text: string; hint?: string } | null>(null);
  const [colMatched, setColMatched] = useState<string[]>([]);
  const [colWrong, setColWrong] = useState<boolean>(false);

  // Flashcards SRS
  const [flashDeck, setFlashDeck] = useState<VocabItem[]>([]);
  const [flashFlipped, setFlashFlipped] = useState<boolean>(false);
  const [srsStats, setSrsStats] = useState<SRSStats>({ easy: 0, medium: 0, hard: 0 });

  // Memory Chain
  const [chainLevel, setChainLevel] = useState<number>(1);
  const [chainPool, setChainPool] = useState<VocabItem[]>([]);
  const [chainSequence, setChainSequence] = useState<VocabItem[]>([]);
  const [chainUserSeq, setChainUserSeq] = useState<VocabItem[]>([]);
  const [chainStage, setChainStage] = useState<'memorize' | 'recall' | 'success' | 'failed'>('memorize');
  const [countdownTimer, setCountdownTimer] = useState<number>(5);

  // Word Scramble
  const [scrambledLetters, setScrambledLetters] = useState<ScrambleLetter[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<ScrambleLetter[]>([]);
  const [scrambleStatus, setScrambleStatus] = useState<'playing' | 'correct' | 'wrong'>('playing');

  // Word Saver (Hangman)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuessesCount, setWrongGuessesCount] = useState<number>(0);
  const [saverStatus, setSaverStatus] = useState<'playing' | 'won' | 'lost'>('playing');

  // Filtered Local Items count for info
  const availableItems = useMemo(() => {
    return LOCAL_DATABASE.filter((item) => {
      const matchTopic = selectedTopic === 'todos' || item.topic === selectedTopic;
      const matchDiff = selectedDifficulty === 'todas' || item.difficulty === selectedDifficulty;
      return matchTopic && matchDiff;
    });
  }, [selectedTopic, selectedDifficulty]);

  // Pronunciation handler
  const handleSpeak = (text: string) => {
    setIsPlayingAudio(true);
    playPronunciation(
      text,
      () => setIsPlayingAudio(true),
      () => setIsPlayingAudio(false)
    );
  };

  // Timer effect for active games
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (gameState === 'game') {
      interval = setInterval(() => {
        setTimeSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameState]);

  // Streak tracker
  const incrementStreak = (bonusPoints: number = 100) => {
    setStreak((prev) => {
      const next = prev + 1;
      if (next > maxStreak) setMaxStreak(next);
      return next;
    });
    setScore((prev) => prev + bonusPoints);
  };

  const resetStreak = () => {
    setStreak(0);
  };

  // -------------------------------------------------------------
  // GAME INITIALIZATION & AI CALL
  // -------------------------------------------------------------
  const launchGame = async (mode: GameMode) => {
    setActiveGameMode(mode);
    setTimeSeconds(0);
    setCurrentIndex(0);
    stopPronunciation();

    // Check if it's one of the 14 extended games
    const extendedModes = [
      'odd_one_out', 'geoquest', 'map_pinpoint', 'flag_match',
      'science_lab', 'myth_busters', 'food_chain', 'speed_run',
      'story_quiz', 'categories', 'sound_spelling', 'crossword',
      'survivor', 'sign_master'
    ];

    if (extendedModes.includes(mode)) {
      setGameState('game');
      return;
    }

    if (useAiGenerator) {
      setGameState('loading_ai');
      try {
        const res = await fetch('/api/gemini/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            mode,
            topic: selectedTopic,
            difficulty: selectedDifficulty,
            count: itemCount,
          }),
        });

        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setupGameWithItems(mode, data.data);
          setNotification('Desafios inéditos gerados com IA Gemini!');
          setTimeout(() => setNotification(null), 4000);
          return;
        } else {
          throw new Error(data.error || 'Falha ao processar resposta da IA');
        }
      } catch (err: any) {
        console.warn('Erro ao chamar API Gemini, recorrendo ao banco local:', err);
        setNotification('Modo offline/local ativado: usando banco de dados nativo.');
        setTimeout(() => setNotification(null), 4000);
        fallbackToLocal(mode);
      }
    } else {
      fallbackToLocal(mode);
    }
  };

  const fallbackToLocal = (mode: GameMode) => {
    let pool = [...availableItems];
    if (pool.length === 0) {
      pool = [...LOCAL_DATABASE];
    }
    // Shuffle pool
    pool.sort(() => Math.random() - 0.5);
    const chosen = pool.slice(0, Math.min(itemCount, pool.length));
    setupGameWithItems(mode, chosen);
  };

  const setupGameWithItems = (mode: GameMode, items: VocabItem[]) => {
    setGameItems(items);
    setGameState('game');
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowHint(false);

    if (mode === 'memory') {
      setupMemoryCards(items);
    } else if (mode === 'columns') {
      setupColumns(items);
    } else if (mode === 'flashcards') {
      setFlashDeck([...items]);
      setFlashFlipped(false);
      setSrsStats({ easy: 0, medium: 0, hard: 0 });
    } else if (mode === 'chain') {
      startChainGame(items, 1);
    } else if (mode === 'scramble') {
      if (items.length > 0) {
        setupScrambleWord(items[0]);
      }
    } else if (mode === 'saver') {
      if (items.length > 0) {
        setupSaverWord(items[0]);
      }
    }
  };

  // -------------------------------------------------------------
  // SUB-GAME LOGIC: MEMORY
  // -------------------------------------------------------------
  const setupMemoryCards = (items: VocabItem[]) => {
    const list: MemoryCard[] = [];
    items.forEach((it, idx) => {
      const pId = it.id || `pair-${idx}`;
      list.push({
        cardId: `${pId}-en`,
        pairId: pId,
        lang: 'en',
        text: it.wordEn,
        wordEn: it.wordEn,
        hint: it.hint,
      });
      list.push({
        cardId: `${pId}-pt`,
        pairId: pId,
        lang: 'pt',
        text: it.wordPt,
        wordEn: it.wordEn,
        hint: it.hint,
      });
    });
    list.sort(() => Math.random() - 0.5);
    setMemCards(list);
    setMemFlipped([]);
    setMemMatched([]);
    setMemMoves(0);
  };

  const handleMemCardClick = (idx: number) => {
    if (memFlipped.length === 2 || memFlipped.includes(idx)) return;
    const clickedCard = memCards[idx];
    if (memMatched.includes(clickedCard.pairId)) return;

    if (clickedCard.lang === 'en') {
      handleSpeak(clickedCard.wordEn);
    }

    const nextFlipped = [...memFlipped, idx];
    setMemFlipped(nextFlipped);

    if (nextFlipped.length === 2) {
      setMemMoves((m) => m + 1);
      const card1 = memCards[nextFlipped[0]];
      const card2 = memCards[nextFlipped[1]];

      if (card1.pairId === card2.pairId && card1.cardId !== card2.cardId) {
        // MATCH!
        const nextMatched = [...memMatched, card1.pairId];
        setMemMatched(nextMatched);
        setMemFlipped([]);
        incrementStreak(120);

        if (nextMatched.length === memCards.length / 2) {
          setTimeout(() => setGameState('finished'), 800);
        }
      } else {
        // MISMATCH
        resetStreak();
        setTimeout(() => {
          setMemFlipped([]);
        }, 900);
      }
    }
  };

  // -------------------------------------------------------------
  // SUB-GAME LOGIC: COLUMNS
  // -------------------------------------------------------------
  const setupColumns = (items: VocabItem[]) => {
    const left: ColumnItem[] = items.map((it, idx) => ({
      pairId: it.id || `col-${idx}`,
      text: it.wordEn,
      wordEn: it.wordEn,
      hint: it.hint,
    }));
    const right = items.map((it, idx) => ({
      pairId: it.id || `col-${idx}`,
      text: it.wordPt,
      hint: it.hint,
    }));

    left.sort(() => Math.random() - 0.5);
    right.sort(() => Math.random() - 0.5);

    setColLeft(left);
    setColRight(right);
    setSelectedColLeft(null);
    setSelectedColRight(null);
    setColMatched([]);
    setColWrong(false);
  };

  const handleColLeftSelect = (item: ColumnItem) => {
    setSelectedColLeft(item);
    handleSpeak(item.wordEn);

    if (selectedColRight) {
      checkColMatch(item.pairId, selectedColRight.pairId);
    }
  };

  const handleColRightSelect = (item: { pairId: string; text: string }) => {
    setSelectedColRight(item);

    if (selectedColLeft) {
      checkColMatch(selectedColLeft.pairId, item.pairId);
    }
  };

  const checkColMatch = (leftId: string, rightId: string) => {
    if (leftId === rightId) {
      const nextMatched = [...colMatched, leftId];
      setColMatched(nextMatched);
      setSelectedColLeft(null);
      setSelectedColRight(null);
      setColWrong(false);
      incrementStreak(100);

      if (nextMatched.length === colLeft.length) {
        setTimeout(() => setGameState('finished'), 700);
      }
    } else {
      setColWrong(true);
      resetStreak();
      setTimeout(() => {
        setSelectedColLeft(null);
        setSelectedColRight(null);
        setColWrong(false);
      }, 700);
    }
  };

  // -------------------------------------------------------------
  // SUB-GAME LOGIC: FLASHCARDS
  // -------------------------------------------------------------
  const handleFlashRate = (rating: 'easy' | 'medium' | 'hard') => {
    if (rating === 'easy') {
      setSrsStats((s) => ({ ...s, easy: s.easy + 1 }));
      incrementStreak(150);
    } else if (rating === 'medium') {
      setSrsStats((s) => ({ ...s, medium: s.medium + 1 }));
      incrementStreak(75);
    } else {
      setSrsStats((s) => ({ ...s, hard: s.hard + 1 }));
      resetStreak();
      // Re-queue card at the end of the deck
      const current = flashDeck[currentIndex];
      setFlashDeck((prev) => [...prev, current]);
    }

    if (currentIndex + 1 < flashDeck.length) {
      setCurrentIndex((prev) => prev + 1);
      setFlashFlipped(false);
    } else {
      setGameState('finished');
    }
  };

  // -------------------------------------------------------------
  // SUB-GAME LOGIC: MEMORY CHAIN
  // -------------------------------------------------------------
  const startChainGame = (items: VocabItem[], lvl: number) => {
    setChainLevel(lvl);
    setChainPool(items);
    setChainUserSeq([]);
    setChainStage('memorize');

    // Pick sequence based on level (level 1 = 3 items, level 2 = 4 items, etc.)
    const seqLength = Math.min(items.length, 2 + lvl);
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    const seq = shuffled.slice(0, seqLength);
    setChainSequence(seq);

    const countdownTime = Math.max(3, seqLength + 2);
    setCountdownTimer(countdownTime);

    // Speak first item
    if (seq.length > 0) {
      handleSpeak(seq[0].wordEn);
    }
  };

  // Chain countdown timer
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (activeGameMode === 'chain' && chainStage === 'memorize' && countdownTimer > 0) {
      timer = setTimeout(() => {
        setCountdownTimer((prev) => {
          if (prev <= 1) {
            setChainStage('recall');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [activeGameMode, chainStage, countdownTimer]);

  const handleChainCardClick = (item: VocabItem) => {
    if (chainStage !== 'recall') return;

    handleSpeak(item.wordEn);
    const expectedItem = chainSequence[chainUserSeq.length];
    const nextUserSeq = [...chainUserSeq, item];
    setChainUserSeq(nextUserSeq);

    if (item.id !== expectedItem.id && item.wordEn !== expectedItem.wordEn) {
      setChainStage('failed');
      resetStreak();
    } else if (nextUserSeq.length === chainSequence.length) {
      setChainStage('success');
      incrementStreak(150 * chainLevel);
    }
  };

  const handleChainNextLevel = () => {
    if (chainLevel < 4) {
      startChainGame(chainPool, chainLevel + 1);
    } else {
      setGameState('finished');
    }
  };

  // -------------------------------------------------------------
  // SUB-GAME LOGIC: SCRAMBLE
  // -------------------------------------------------------------
  const setupScrambleWord = (item: VocabItem) => {
    const letters = item.wordEn
      .replace(/[^a-zA-Z]/g, '')
      .toUpperCase()
      .split('')
      .map((char, index) => ({ id: `scramble-${index}-${char}`, char }));

    // Shuffle pool
    const shuffled = [...letters].sort(() => Math.random() - 0.5);
    setScrambledLetters(shuffled);
    setSelectedLetters([]);
    setScrambleStatus('playing');
    setShowHint(false);
  };

  const handleScrambleSelectLetter = (letter: ScrambleLetter) => {
    if (scrambleStatus !== 'playing') return;

    const nextSelected = [...selectedLetters, letter];
    const nextScrambled = scrambledLetters.filter((l) => l.id !== letter.id);
    setSelectedLetters(nextSelected);
    setScrambledLetters(nextScrambled);

    const target = gameItems[currentIndex].wordEn.replace(/[^a-zA-Z]/g, '').toUpperCase();
    if (nextSelected.length === target.length) {
      const formedWord = nextSelected.map((l) => l.char).join('');
      if (formedWord === target) {
        setScrambleStatus('correct');
        incrementStreak(100);
        handleSpeak(gameItems[currentIndex].wordEn);
      } else {
        setScrambleStatus('wrong');
        resetStreak();
      }
    }
  };

  const handleScrambleDeselectLetter = (letter: ScrambleLetter) => {
    if (scrambleStatus !== 'playing') return;
    setSelectedLetters(selectedLetters.filter((l) => l.id !== letter.id));
    setScrambledLetters([...scrambledLetters, letter]);
  };

  const handleScrambleReset = () => {
    if (gameItems[currentIndex]) {
      setupScrambleWord(gameItems[currentIndex]);
    }
  };

  const handleScrambleNext = () => {
    if (currentIndex + 1 < gameItems.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setupScrambleWord(gameItems[nextIdx]);
    } else {
      setGameState('finished');
    }
  };

  // -------------------------------------------------------------
  // SUB-GAME LOGIC: SAVER (HANGMAN)
  // -------------------------------------------------------------
  const setupSaverWord = (item: VocabItem) => {
    setGuessedLetters([]);
    setWrongGuessesCount(0);
    setSaverStatus('playing');
    setShowHint(false);
  };

  const handleSaverGuessLetter = (letter: string) => {
    if (saverStatus !== 'playing' || guessedLetters.includes(letter)) return;

    const nextGuessed = [...guessedLetters, letter];
    setGuessedLetters(nextGuessed);

    const targetWord = gameItems[currentIndex].wordEn.toUpperCase();
    if (!targetWord.includes(letter)) {
      const nextWrong = wrongGuessesCount + 1;
      setWrongGuessesCount(nextWrong);
      if (nextWrong >= 6) {
        setSaverStatus('lost');
        resetStreak();
        handleSpeak(gameItems[currentIndex].wordEn);
      }
    } else {
      // Check win condition
      const cleanLetters = targetWord.replace(/[^A-Z]/g, '').split('');
      const isWon = cleanLetters.every((l) => nextGuessed.includes(l));
      if (isWon) {
        setSaverStatus('won');
        incrementStreak(120);
        handleSpeak(gameItems[currentIndex].wordEn);
      }
    }
  };

  const handleSaverNext = () => {
    if (currentIndex + 1 < gameItems.length) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setupSaverWord(gameItems[nextIdx]);
    } else {
      setGameState('finished');
    }
  };

  // -------------------------------------------------------------
  // SUB-GAME LOGIC: QUIZ & GAPS
  // -------------------------------------------------------------
  const handleQuizOptionSelect = (opt: QuizOption) => {
    setSelectedOption(opt);
    if (opt.isCorrect) {
      incrementStreak(100);
      const currentItem = gameItems[currentIndex];
      if (currentItem?.wordEn) {
        handleSpeak(currentItem.wordEn);
      }
    } else {
      resetStreak();
    }
  };

  const handleQuizNext = () => {
    if (currentIndex + 1 < gameItems.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowHint(false);
    } else {
      setGameState('finished');
    }
  };

  // Return to Hub
  const handleGoToHub = () => {
    setActiveGameMode('hub');
    setGameState('menu');
    stopPronunciation();
  };

  // Restart Current Mode
  const handleRestartCurrent = () => {
    if (activeGameMode !== 'hub') {
      launchGame(activeGameMode);
    }
  };

  // Extended Games Handlers
  const handleExtendedNext = (totalLength: number) => {
    if (currentIndex + 1 < totalLength) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setGameState('finished');
    }
  };

  const handleExtendedFinish = (earnedScore: number) => {
    setScore((prev) => prev + earnedScore);
    incrementStreak(150);
    setGameState('finished');
  };

  const handleAuthSuccess = (user: AuthUser) => {
    setCurrentUser(user);
    setActiveGameMode('hub');
    setGameState('menu');
  };

  const handleLogout = () => {
    clearSession();
    stopPronunciation();
    setActiveFloatingTool(null);
    setActiveGameMode('hub');
    setGameState('menu');
    setCurrentUser(null);
  };

  // Active item for classical modes
  const currentItem = gameItems[currentIndex] || null;

  if (!currentUser) {
    return <LoginScreen onAuthSuccess={handleAuthSuccess} />;
  }

  return (
    <div className="min-h-screen bg-[#F0F4FF] text-slate-800 flex flex-col items-center p-4 sm:p-6 lg:p-8 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* NOTIFICATION TOAST */}
      {notification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 px-5 py-2.5 bg-indigo-950 text-white text-xs font-black uppercase tracking-wider rounded-2xl shadow-xl border-2 border-indigo-800 animate-in fade-in slide-in-from-top-2">
          {notification}
        </div>
      )}

      {/* GLOBAL HEADER */}
      <Header
        activeGameMode={activeGameMode}
        gameState={gameState}
        score={score}
        streak={streak}
        timeSeconds={timeSeconds}
        isPlayingAudio={isPlayingAudio}
        onGoToHub={handleGoToHub}
        onRestartCurrent={handleRestartCurrent}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* MAIN CONTAINER CONTENT */}
      <main className="w-full max-w-5xl flex flex-col items-center justify-center">
        
        {/* 1. HUB / HOME MENU */}
        {activeGameMode === 'hub' && (
          <HubMenu
            selectedTopic={selectedTopic}
            onSelectTopic={setSelectedTopic}
            selectedDifficulty={selectedDifficulty}
            onSelectDifficulty={setSelectedDifficulty}
            itemCount={itemCount}
            onSelectCount={setItemCount}
            useAiGenerator={useAiGenerator}
            onToggleAiGenerator={setUseAiGenerator}
            availableItemsCount={availableItems.length}
            onLaunchGame={launchGame}
          />
        )}

        {/* 2. LOADING AI SCREEN */}
        {gameState === 'loading_ai' && (
          <LoadingAI
            onCancelToLocal={() => fallbackToLocal(activeGameMode)}
            topicLabel={TOPICS.find((t) => t.id === selectedTopic)?.label || 'Geral'}
            difficultyLabel={DIFFICULTIES.find((d) => d.id === selectedDifficulty)?.label || 'Mista'}
          />
        )}

        {/* 3. FINISHED MODAL SCREEN */}
        {gameState === 'finished' && (
          <FinishedModal
            score={score}
            streak={streak}
            maxStreak={maxStreak}
            activeGameMode={activeGameMode}
            onPlayAgain={() => launchGame(activeGameMode)}
            onGoToHub={handleGoToHub}
          />
        )}

        {/* 4. ACTIVE GAME SCREEN */}
        {gameState === 'game' && (
          <>
            {/* ORIGINAL VOCABULARY MODES */}
            {activeGameMode === 'quiz' && currentItem && (
              <QuizGame
                item={currentItem}
                currentIndex={currentIndex}
                totalCount={gameItems.length}
                selectedOption={selectedOption}
                showHint={showHint}
                onSelectOption={handleQuizOptionSelect}
                onToggleHint={() => setShowHint(!showHint)}
                onNext={handleQuizNext}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'memory' && (
              <MemoryGame
                cards={memCards}
                flipped={memFlipped}
                matched={memMatched}
                moves={memMoves}
                time={timeSeconds}
                onCardClick={handleMemCardClick}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'columns' && (
              <ColumnsGame
                leftItems={colLeft}
                rightItems={colRight}
                selectedLeft={selectedColLeft}
                selectedRight={selectedColRight}
                matchedPairs={colMatched}
                wrongMatch={colWrong}
                onSelectLeft={handleColLeftSelect}
                onSelectRight={handleColRightSelect}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'flashcards' && flashDeck[currentIndex] && (
              <FlashcardsGame
                currentCard={flashDeck[currentIndex]}
                currentIndex={currentIndex}
                totalCards={flashDeck.length}
                isFlipped={flashFlipped}
                srsStats={srsStats}
                onFlip={() => setFlashFlipped(!flashFlipped)}
                onRate={handleFlashRate}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'chain' && (
              <ChainGame
                chainPool={chainPool}
                chainSequence={chainSequence}
                userSequence={chainUserSeq}
                chainStage={chainStage}
                chainLevel={chainLevel}
                countdownTimer={countdownTimer}
                onCardClick={handleChainCardClick}
                onNextLevel={handleChainNextLevel}
                onRetryLevel={() => startChainGame(chainPool, chainLevel)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'scramble' && currentItem && (
              <ScrambleGame
                item={currentItem}
                currentIndex={currentIndex}
                totalCount={gameItems.length}
                scrambledLetters={scrambledLetters}
                selectedLetters={selectedLetters}
                status={scrambleStatus}
                showHint={showHint}
                onSelectLetter={handleScrambleSelectLetter}
                onDeselectLetter={handleScrambleDeselectLetter}
                onReset={handleScrambleReset}
                onToggleHint={() => setShowHint(!showHint)}
                onNext={handleScrambleNext}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'saver' && currentItem && (
              <SaverGame
                item={currentItem}
                currentIndex={currentIndex}
                totalCount={gameItems.length}
                guessedLetters={guessedLetters}
                wrongGuessesCount={wrongGuessesCount}
                status={saverStatus}
                showHint={showHint}
                onGuessLetter={handleSaverGuessLetter}
                onToggleHint={() => setShowHint(!showHint)}
                onNext={handleSaverNext}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'gaps' && currentItem && (
              <GapsGame
                item={currentItem}
                currentIndex={currentIndex}
                totalCount={gameItems.length}
                selectedOption={selectedOption}
                showHint={showHint}
                onSelectOption={handleQuizOptionSelect}
                onToggleHint={() => setShowHint(!showHint)}
                onNext={handleQuizNext}
                onSpeak={handleSpeak}
              />
            )}

            {/* EXTENDED NEW GAME MODES */}
            {activeGameMode === 'odd_one_out' && ODD_ONE_OUT_DATA[currentIndex] && (
              <OddOneOutGame
                item={ODD_ONE_OUT_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={ODD_ONE_OUT_DATA.length}
                onCorrectAnswer={() => incrementStreak(100)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(ODD_ONE_OUT_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'geoquest' && GEOQUEST_DATA[currentIndex] && (
              <GeoQuestGame
                item={GEOQUEST_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={GEOQUEST_DATA.length}
                onCorrectAnswer={() => incrementStreak(120)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(GEOQUEST_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'map_pinpoint' && MAP_PINPOINT_DATA[currentIndex] && (
              <MapPinpointGame
                item={MAP_PINPOINT_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={MAP_PINPOINT_DATA.length}
                onCorrectAnswer={() => incrementStreak(150)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(MAP_PINPOINT_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'flag_match' && FLAG_MATCH_DATA[currentIndex] && (
              <FlagMatchGame
                item={FLAG_MATCH_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={FLAG_MATCH_DATA.length}
                onCorrectAnswer={() => incrementStreak(100)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(FLAG_MATCH_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'science_lab' && SCIENCE_PROCESS_DATA[currentIndex] && (
              <ScienceLabGame
                experiment={SCIENCE_PROCESS_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={SCIENCE_PROCESS_DATA.length}
                onCorrectAnswer={() => incrementStreak(200)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(SCIENCE_PROCESS_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'myth_busters' && MYTH_BUSTERS_DATA[currentIndex] && (
              <MythBustersGame
                item={MYTH_BUSTERS_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={MYTH_BUSTERS_DATA.length}
                onCorrectAnswer={() => incrementStreak(100)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(MYTH_BUSTERS_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'food_chain' && FOOD_CHAIN_DATA[currentIndex] && (
              <FoodChainGame
                item={FOOD_CHAIN_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={FOOD_CHAIN_DATA.length}
                onCorrectAnswer={() => incrementStreak(100)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(FOOD_CHAIN_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'speed_run' && (
              <SpeedRunGame
                vocabList={LOCAL_DATABASE}
                onFinishSpeedRun={(finalScore) => handleExtendedFinish(finalScore)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'story_quiz' && (
              <StoryQuizGame
                adventure={STORY_ADVENTURES[0]}
                onFinishAdventure={(finalScore) => handleExtendedFinish(finalScore)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'categories' && (
              <CategoriesGame
                bins={CATEGORY_BINS}
                items={CATEGORY_WORD_ITEMS}
                onFinishCategories={(finalScore) => handleExtendedFinish(finalScore)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'sound_spelling' && SOUND_SPELLING_DATA[currentIndex] && (
              <SoundSpellingGame
                item={SOUND_SPELLING_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={SOUND_SPELLING_DATA.length}
                onCorrectAnswer={() => incrementStreak(120)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(SOUND_SPELLING_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'crossword' && (
              <CrosswordGame
                grid={SAMPLE_CROSSWORD}
                onFinishCrossword={(finalScore) => handleExtendedFinish(finalScore)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'survivor' && (
              <SurvivorGame
                questions={SURVIVOR_QUESTIONS}
                onFinishSurvivor={(finalPrize) => handleExtendedFinish(finalPrize)}
                onSpeak={handleSpeak}
              />
            )}

            {activeGameMode === 'sign_master' && SIGN_MASTER_DATA[currentIndex] && (
              <SignMasterGame
                item={SIGN_MASTER_DATA[currentIndex]}
                currentIndex={currentIndex}
                totalCount={SIGN_MASTER_DATA.length}
                onCorrectAnswer={() => incrementStreak(100)}
                onWrongAnswer={resetStreak}
                onNext={() => handleExtendedNext(SIGN_MASTER_DATA.length)}
                onSpeak={handleSpeak}
              />
            )}
          </>
        )}

      </main>

      {/* 2 ÍCONES REDONDOS FLUTUANTES (DESCE E SOBE ACOMPANHANDO A TELA) */}
      <FloatingNav
        onOpenTeacher={() => setActiveFloatingTool('teacher')}
        onOpenDictionary={() => setActiveFloatingTool('dictionary')}
        activeTool={activeFloatingTool}
      />

      {/* FERRAMENTA 1: PROFESSOR */}
      <TeacherTool
        isOpen={activeFloatingTool === 'teacher'}
        onClose={() => setActiveFloatingTool(null)}
        onSpeak={handleSpeak}
      />

      {/* FERRAMENTA 2: DICIONÁRIO */}
      <DictionaryTool
        isOpen={activeFloatingTool === 'dictionary'}
        onClose={() => setActiveFloatingTool(null)}
        onSpeak={handleSpeak}
      />
    </div>
  );
}
export default App;
