import React, { useState, useEffect, useRef } from 'react';
import {
  Play,
  Languages,
  BookOpen,
  Volume2,
  Sparkles,
  AlertCircle,
  X,
  Info,
  Search,
  HelpCircle,
  Copy,
  Check,
  Menu,
  Trophy,
  Mic,
  RotateCcw,
  GraduationCap,
  FileText,
  BookmarkCheck,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_PDF_VOCABULARY, PDF_SECTIONS } from '../data/teacherVocabularyData';
import { TeacherTabType, VocabularyItem, SelectedWords, NotificationState } from '../types';

interface TeacherToolProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak?: (text: string) => void;
}

export const TeacherTool: React.FC<TeacherToolProps> = ({
  isOpen,
  onClose,
}) => {
  // Abas do Professor: Guia Completo (PDF) + Quiz Interativo
  const [activeTab, setActiveTab] = useState<TeacherTabType>('pdf_guide');
  const [selectedSection, setSelectedSection] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showTranslation, setShowTranslation] = useState<boolean>(true);
  const [robotText, setRobotText] = useState<string>(
    "Olá! Sou seu professor de IA. O Guia Completo do PDF foi 100% integrado com 50 termos em cada um dos 8 temas (400 termos no total)! Clique em qualquer cartão para ouvir com sotaque nativo ou treine no Quiz!"
  );
  const [isTalking, setIsTalking] = useState<boolean>(false);
  const [selectedWords, setSelectedWords] = useState<SelectedWords>({
    verb: "It's getting",
    modifier: "pretty",
    adj: "good"
  });
  const [notification, setNotification] = useState<NotificationState | null>(null);
  const [waveHeights, setWaveHeights] = useState<number[]>([30, 20, 50, 40, 60, 25, 45, 30]);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Barra lateral responsiva móvel
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Progresso de estudos
  const [practicesCount, setPracticesCount] = useState<number>(5);
  const maxPractices = 20;
  const progressPercentage = Math.min(100, (practicesCount / maxPractices) * 100);

  // Ondas sonoras visuais durante fala
  useEffect(() => {
    if (!isTalking) {
      setWaveHeights([4, 4, 4, 4, 4, 4, 4, 4]);
      return;
    }
    const interval = setInterval(() => {
      setWaveHeights(Array.from({ length: 8 }, () => Math.floor(Math.random() * 85) + 15));
    }, 100);
    return () => clearInterval(interval);
  }, [isTalking]);

  // Toast
  const showNotification = (message: string, type: 'info' | 'warning' | 'success' = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  const incrementPractice = () => {
    setPracticesCount(prev => Math.min(maxPractices, prev + 1));
  };

  // Síntese de voz
  const speak = (text: string, rate: number = 1.0) => {
    incrementPractice();
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const cleanText = text.replace(/\.\.\./g, ' ');
      const utterance = new SpeechSynthesisUtterance(cleanText);

      const voices = window.speechSynthesis.getVoices();
      const usVoice = voices.find(v => v.lang === 'en-US' || v.lang.includes('en'));
      if (usVoice) {
        utterance.voice = usVoice;
      }

      utterance.rate = rate;
      utterance.lang = 'en-US';

      utterance.onstart = () => setIsTalking(true);
      utterance.onend = () => setIsTalking(false);
      utterance.onerror = () => setIsTalking(false);

      setRobotText(text);
      window.speechSynthesis.speak(utterance);
    } else {
      showNotification(
        "Seu navegador não suporta síntese de voz ativa. Recomendamos usar Chrome, Edge ou Safari.",
        "warning"
      );
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    showNotification(`Copiado: "${text}"`, "success");
    setTimeout(() => setCopiedText(null), 2000);
  };

  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  // ================= QUIZ STATES & LOGIC =================
  const [quizMode, setQuizMode] = useState<'translation' | 'pronunciation'>('translation');
  const [quizItem, setQuizItem] = useState<VocabularyItem | null>(null);
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [quizAnswered, setQuizAnswered] = useState<boolean>(false);
  const [quizSelectedOption, setQuizSelectedOption] = useState<string | null>(null);
  const [quizPoints, setQuizPoints] = useState<number>(0);
  const [quizStreak, setQuizStreak] = useState<number>(0);
  const [quizSpeechResult, setQuizSpeechResult] = useState<string>('');
  const [quizSpeechScore, setQuizSpeechScore] = useState<number | null>(null);
  const [isListening, setIsListening] = useState<boolean>(false);
  const recognitionRef = useRef<any>(null);
  const [quizDirection, setQuizDirection] = useState<'en_to_pt' | 'pt_to_en'>('en_to_pt');
  const [bestStreak, setBestStreak] = useState<number>(() => {
    const saved = localStorage.getItem('quiz_best_streak');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    if (quizStreak > bestStreak) {
      setBestStreak(quizStreak);
      localStorage.setItem('quiz_best_streak', quizStreak.toString());
    }
  }, [quizStreak, bestStreak]);

  const computeSimilarity = (spoken: string, target: string): number => {
    const cleanSpoken = spoken.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, "").trim();
    const cleanTarget = target.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, "").trim();
    if (cleanSpoken === cleanTarget) return 100;

    const spokenWords = cleanSpoken.split(/\s+/);
    const targetWords = cleanTarget.split(/\s+/);

    let matches = 0;
    targetWords.forEach(w => {
      if (spokenWords.includes(w)) matches++;
    });

    const score = Math.round((matches / targetWords.length) * 100);
    return score;
  };

  const generateNewQuizQuestion = (overrideMode?: 'translation' | 'pronunciation', specificItem?: VocabularyItem) => {
    const currentMode = overrideMode || quizMode;
    const allItems: VocabularyItem[] = ALL_PDF_VOCABULARY;

    if (allItems.length === 0) return;

    const selectedItem = specificItem || allItems[Math.floor(Math.random() * allItems.length)];

    setQuizItem(selectedItem);
    setQuizAnswered(false);
    setQuizSelectedOption(null);
    setQuizSpeechResult('');
    setQuizSpeechScore(null);
    setIsListening(false);

    if (currentMode === 'translation') {
      const dir = Math.random() > 0.5 ? 'en_to_pt' : 'pt_to_en';
      setQuizDirection(dir);

      const correctOption = dir === 'en_to_pt' ? selectedItem.meaning : selectedItem.term;

      const incorrectPool = allItems
        .filter(item => item.term !== selectedItem.term)
        .map(item => dir === 'en_to_pt' ? item.meaning : item.term);

      const uniqueIncorrects = Array.from(new Set(incorrectPool))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      while (uniqueIncorrects.length < 3) {
        uniqueIncorrects.push("Outro termo");
      }

      const mixed = [...uniqueIncorrects, correctOption].sort(() => 0.5 - Math.random());
      setQuizOptions(mixed);
      speak(selectedItem.term, 0.95);
    } else {
      speak(selectedItem.term, 0.95);
    }
  };

  const startSpeechRecognition = () => {
    if (isListening && recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (err) {
        console.error(err);
      }
      setIsListening(false);
      return;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {
        console.warn("Falha ao abortar reconhecimento:", e);
      }
      recognitionRef.current = null;
    }

    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      showNotification("Seu navegador não suporta captura via SpeechRecognition API. Use a simulação abaixo.", "warning");
      return;
    }

    try {
      // @ts-ignore
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
        setQuizSpeechResult('Ouvindo pronúncia em inglês...');
      };

      recognition.onerror = (event: any) => {
        console.error("Erro no reconhecimento:", event);
        setIsListening(false);
        const errType = event.error;
        if (errType === 'not-allowed') {
          showNotification("Acesso ao microfone negado. Ative a permissão ou use a simulação.", "warning");
        } else if (errType === 'no-speech') {
          showNotification("Nenhuma fala detectada. Tente falar mais perto do microfone.", "info");
        } else {
          showNotification(`Erro de captura: ${errType || 'Desconhecido'}.`, "warning");
        }
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onresult = (event: any) => {
        const resultText = event.results[0][0].transcript;
        setQuizSpeechResult(resultText);

        if (quizItem) {
          const score = computeSimilarity(resultText, quizItem.term);
          setQuizSpeechScore(score);
          setQuizAnswered(true);

          if (score >= 70) {
            setQuizStreak(prev => prev + 1);
            setQuizPoints(prev => prev + score);
            showNotification(`Excelente! Pronúncia com ${score}% de similaridade! 🎉`, "success");
          } else {
            setQuizStreak(0);
            showNotification(`Pronúncia reconhecida: "${resultText}" (${score}%). Tente novamente!`, "warning");
          }
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error(err);
      setIsListening(false);
      showNotification("Não foi possível iniciar o microfone no momento.", "warning");
    }
  };

  const simulatePerfectPronunciation = () => {
    if (!quizItem) return;
    setQuizSpeechResult(quizItem.term);
    setQuizSpeechScore(100);
    setQuizAnswered(true);
    setQuizStreak(prev => prev + 1);
    setQuizPoints(prev => prev + 100);
    showNotification("Pronúncia 100% perfeita simulada com sucesso! 🎉", "success");
  };

  const handleAnswerTranslation = (selectedOption: string) => {
    if (!quizItem || quizAnswered) return;

    setQuizSelectedOption(selectedOption);
    setQuizAnswered(true);

    const correctOption = quizDirection === 'en_to_pt' ? quizItem.meaning : quizItem.term;
    const isCorrect = selectedOption === correctOption;

    if (isCorrect) {
      setQuizStreak(prev => prev + 1);
      setQuizPoints(prev => prev + 10);
      showNotification("Resposta correta! Parabéns! 🎉", "success");
    } else {
      setQuizStreak(0);
      showNotification(`Incorreto. A resposta correta é "${correctOption}".`, "warning");
    }
  };

  useEffect(() => {
    if (activeTab === 'quiz' && !quizItem) {
      generateNewQuizQuestion();
    }
  }, [activeTab]);

  const trainItemInQuiz = (item: VocabularyItem) => {
    setActiveTab('quiz');
    setQuizMode('translation');
    generateNewQuizQuestion('translation', item);
    showNotification(`Praticando o termo "${item.term}" no Quiz!`, "info");
  };

  // Construtor combinatório de frases
  const getTranslation = (verbo: string, modificador: string, adj: string) => {
    const transMap: Record<string, string> = {
      "It's getting": "Está ficando",
      "I feel": "Eu me sinto",
      "That sounds": "Isso soa/parece",
      "You look": "Você parece",
      "pretty": "bem / bastante",
      "really": "realmente / muito",
      "kind of": "meio / mais ou menos",
      "a bit": "um pouco",
      "good": "bom(a)",
      "hard": "difícil",
      "important": "importante",
      "different": "diferente"
    };
    const vT = transMap[verbo] || verbo;
    const mT = transMap[modificador] || modificador;
    const aT = transMap[adj] || adj;
    return `${vT} ${mT} ${aT}`;
  };

  const combinedSentence = `${selectedWords.verb} ${selectedWords.modifier} ${selectedWords.adj}`;
  const combinedTranslation = getTranslation(selectedWords.verb, selectedWords.modifier, selectedWords.adj);

  // Navegação: 2 abas solicitadas (Guia Completo PDF + Quiz que vai permanecer)
  const navItems = [
    {
      id: 'pdf_guide' as TeacherTabType,
      label: 'Guia Completo (PDF)',
      icon: BookOpen,
      badge: `${ALL_PDF_VOCABULARY.length} termos`,
      desc: 'Verbos, phrasal verbs, adjetivos, preposições e expressões'
    },
    {
      id: 'quiz' as TeacherTabType,
      label: 'Quiz Interativo',
      icon: Sparkles,
      badge: `${quizPoints} pts`,
      desc: 'Treino ativo de tradução e pronúncia com microfone'
    },
  ];

  // Filtro de lista do Guia Completo
  const filteredVocabulary = ALL_PDF_VOCABULARY.filter((item) => {
    const matchesSection = selectedSection === 'Todas' || item.category === selectedSection;
    if (!matchesSection) return false;

    if (searchQuery.trim() === '') return true;
    const q = searchQuery.toLowerCase();
    return (
      item.term.toLowerCase().includes(q) ||
      item.meaning.toLowerCase().includes(q) ||
      (item.category && item.category.toLowerCase().includes(q)) ||
      item.pr.toLowerCase().includes(q) ||
      (item.example && item.example.toLowerCase().includes(q))
    );
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-5xl h-[92vh] max-h-[860px] bg-[#020617] text-slate-100 rounded-3xl border-2 border-indigo-500/30 shadow-2xl flex flex-col md:flex-row overflow-hidden relative"
      >
        {/* NOTIFICAÇÃO GLOBAL TOAST */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="absolute top-4 right-4 z-50 max-w-sm bg-slate-900/95 border border-slate-800 backdrop-blur-xl p-3.5 rounded-2xl shadow-2xl flex items-start gap-3 ring-1 ring-white/10"
            >
              <div className="mt-0.5 shrink-0">
                {notification.type === 'warning' ? (
                  <AlertCircle className="text-amber-400" size={18} />
                ) : notification.type === 'success' ? (
                  <BookmarkCheck className="text-emerald-400" size={18} />
                ) : (
                  <Info className="text-cyan-400" size={18} />
                )}
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  {notification.message}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setNotification(null)}
                className="text-slate-400 hover:text-white transition-colors p-0.5 rounded-lg hover:bg-slate-800 shrink-0 cursor-pointer"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CABEÇALHO PARA DISPOSITIVOS MÓVEIS */}
        <div className="md:hidden flex items-center justify-between p-3.5 bg-[#020617] border-b border-slate-900 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
              <GraduationCap size={16} className="text-slate-950 font-black" />
            </div>
            <div>
              <span className="font-extrabold text-sm tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent block leading-tight">
                Professor Virtual
              </span>
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
                Guia Completo & Quiz
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-1.5 text-slate-400 hover:text-white transition rounded-xl bg-slate-900 border border-slate-800 cursor-pointer"
            >
              <Menu size={16} />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white transition rounded-xl bg-slate-900 border border-slate-800 cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* BARRA LATERAL DE NAVEGAÇÃO */}
        <aside
          className={`
            fixed md:relative inset-y-0 left-0 z-40 w-64 border-r border-slate-800/60 bg-[#020617] md:bg-[#020617]/90 p-5 flex flex-col transition-transform duration-200
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          `}
        >
          <button
            type="button"
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg bg-slate-900/60 border border-slate-800 cursor-pointer"
          >
            <X size={16} />
          </button>

          {/* Logotipo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <span className="absolute -top-1 -left-1 w-4 h-4 bg-amber-400 text-amber-950 text-[10px] font-black rounded-full flex items-center justify-center">
                1
              </span>
              <GraduationCap size={20} className="text-slate-950 font-black" />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent block">
                Professor Virtual
              </span>
              <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider block">
                Guia Completo Integrado
              </span>
            </div>
          </div>

          {/* Abas */}
          <nav className="space-y-2 flex-1">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider px-2 mb-2">
              Módulos de Estudo
            </p>
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full flex items-start gap-3 p-3 rounded-2xl text-xs font-semibold transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500/15 to-indigo-500/10 border border-cyan-500/40 text-cyan-300 shadow-md shadow-cyan-500/5'
                      : 'text-slate-400 hover:text-white border border-transparent hover:bg-slate-900/60'
                  }`}
                >
                  <div
                    className={`p-2 rounded-xl transition-colors mt-0.5 ${
                      isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-900 text-slate-400'
                    }`}
                  >
                    <IconComponent size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <p className="truncate text-xs font-bold leading-none text-white">{item.label}</p>
                      <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 font-mono font-bold shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-snug mt-1.5 line-clamp-2">{item.desc}</p>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Metas Gamificadas */}
          <div className="mt-auto pt-4 border-t border-slate-900 space-y-3">
            <div className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Treinos de Fala</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded-full font-bold">
                  {practicesCount >= maxPractices ? 'Meta batida! 🎉' : `${Math.round(progressPercentage)}%`}
                </span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                />
              </div>
              <p className="text-[10px] text-slate-400">
                <span className="text-white font-bold">{practicesCount}</span> / {maxPractices} pronúncias ouvidas
              </p>
            </div>
          </div>
        </aside>

        {isSidebarOpen && (
          <div
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-xs z-30 md:hidden"
          />
        )}

        {/* CONTEÚDO PRINCIPAL */}
        <main className="flex-1 flex flex-col p-4 md:p-6 gap-5 overflow-y-auto w-full relative">
          {/* TOPO COM FECHAR */}
          <div className="hidden md:flex justify-between items-center border-b border-slate-900 pb-3">
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <GraduationCap size={15} className="text-cyan-400" />
                1 Professor Virtual — Guia Completo & Laboratório Ativo
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Vocabulário unificado do PDF com áudio nativo, pronúncia fonética e quiz interativo.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 bg-slate-900/60 border border-slate-800 py-1 px-3 rounded-xl text-xs text-slate-300">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Áudio Nativo Conectado
              </div>
              <button
                type="button"
                id="close-teacher-modal"
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
                title="Fechar Professor"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* CABEÇALHO DO ROBÔ DE FALA */}
          <header className="bg-gradient-to-r from-slate-900/90 to-slate-950 border border-slate-800/80 rounded-3xl p-5 shadow-xl flex flex-col sm:flex-row items-center gap-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Cabeça animada do robô */}
            <div className="relative shrink-0">
              <div
                className={`w-20 h-20 sm:w-22 sm:h-22 rounded-2xl bg-slate-800/90 border transition-all duration-300 flex flex-col items-center justify-center space-y-1.5 relative shadow-lg ${
                  isTalking ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-slate-700/60'
                }`}
              >
                <div className="flex gap-2.5">
                  <motion.div
                    animate={isTalking ? { scaleY: [1, 0.2, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2.5 }}
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]"
                  />
                  <motion.div
                    animate={isTalking ? { scaleY: [1, 0.2, 1] } : {}}
                    transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2.5 }}
                    className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_8px_#22d3ee]"
                  />
                </div>
                <div className="w-10 h-0.5 bg-slate-700 rounded-full" />
                <div className="flex gap-1 h-3.5 items-end">
                  {waveHeights.slice(0, 4).map((h, i) => (
                    <motion.div
                      key={i}
                      className={`w-1 rounded-full ${isTalking ? 'bg-cyan-400' : 'bg-slate-600'}`}
                      animate={{ height: `${h * 0.7}%` }}
                      style={{ minHeight: '3px' }}
                      transition={{ type: "spring", stiffness: 350, damping: 12 }}
                    />
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-3.5 h-3.5 rounded-full border-2 border-slate-950" />
            </div>

            {/* Balão do robô */}
            <div className="flex-1 w-full space-y-3">
              <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-3.5 relative group">
                <div className="flex justify-between items-start gap-2">
                  <p className="text-cyan-300 font-mono text-xs sm:text-sm font-semibold tracking-wide italic leading-relaxed">
                    "{robotText}"
                  </p>
                  <button
                    type="button"
                    onClick={() => handleCopy(robotText)}
                    className="text-slate-500 hover:text-slate-200 transition-colors p-1 rounded-lg hover:bg-slate-900 shrink-0 cursor-pointer"
                    title="Copiar texto"
                  >
                    {copiedText === robotText ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={13} />
                    )}
                  </button>
                </div>
              </div>

              {/* Botões de controle de voz */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => speak(robotText, 1.0)}
                  className="flex items-center gap-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold px-3 py-2 rounded-xl shadow-md cursor-pointer transition-transform active:scale-95"
                >
                  <Play size={12} fill="currentColor" /> Pronunciar Normal (1.0x)
                </button>
                <button
                  type="button"
                  onClick={() => speak(robotText, 0.55)}
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-3 py-2 rounded-xl border border-slate-700 cursor-pointer transition-transform active:scale-95"
                >
                  <RotateCcw size={12} /> Lento (0.55x)
                </button>
                <button
                  type="button"
                  onClick={() => setShowTranslation(!showTranslation)}
                  className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl border cursor-pointer transition-colors ${
                    showTranslation
                      ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-200'
                      : 'bg-transparent border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <Languages size={12} /> {showTranslation ? "Ocultar Traduções" : "Mostrar Traduções"}
                </button>
              </div>
            </div>
          </header>

          {/* ================= ABA 1: GUIA COMPLETO (PDF) ================= */}
          {activeTab === 'pdf_guide' && (
            <>
              {/* Banner informativo de unificação do PDF */}
              <div className="bg-gradient-to-r from-indigo-950/60 via-slate-900 to-cyan-950/40 border border-indigo-500/30 rounded-3xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-indigo-500/20 text-indigo-300 rounded-2xl border border-indigo-500/30 shrink-0">
                    <FileText size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-extrabold text-white">
                        Guia Completo de Inglês — 400 Termos (50 de Cada Tema)
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30">
                        PDF 100% Integrado
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Todos os 8 temas do PDF com exatamente 50 itens cada: 50 Verbos, 50 Adjetivos, 50 Preposições, 50 Marcadores de Discurso, 50 Phrasal Verbs, 50 Intensificadores, 50 Preposições Dependentes e 50 Reações Rápidas.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab('quiz');
                      generateNewQuizQuestion();
                    }}
                    className="flex items-center gap-2 px-3.5 py-2 bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-bold text-xs rounded-xl shadow-md cursor-pointer transition-transform active:scale-95"
                  >
                    <Trophy size={14} /> Ir para o Quiz Interativo
                  </button>
                </div>
              </div>

              {/* CONSTRUTOR DINÂMICO DE FRASES */}
              <section className="bg-slate-900/50 border border-indigo-900/30 rounded-3xl p-4 sm:p-5 space-y-3.5">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-1.5 text-amber-400 font-black text-xs uppercase tracking-wider">
                    <Sparkles size={14} /> Laboratório: Construtor Dinâmico de Frases
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                    Prática de Combinações
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-900">
                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      1. Ação
                    </label>
                    <select
                      value={selectedWords.verb}
                      onChange={(e) => setSelectedWords({ ...selectedWords, verb: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-xs text-slate-200 focus:outline-hidden focus:border-cyan-500 cursor-pointer"
                    >
                      <option value="It's getting">It's getting (Está ficando)</option>
                      <option value="I feel">I feel (Eu me sinto)</option>
                      <option value="That sounds">That sounds (Isso soa/parece)</option>
                      <option value="You look">You look (Você parece)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      2. Intensidade
                    </label>
                    <select
                      value={selectedWords.modifier}
                      onChange={(e) => setSelectedWords({ ...selectedWords, modifier: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-xs text-slate-200 focus:outline-hidden focus:border-cyan-500 cursor-pointer"
                    >
                      <option value="pretty">pretty (bem / bastante)</option>
                      <option value="really">really (realmente / muito)</option>
                      <option value="kind of">kind of (meio / mais ou menos)</option>
                      <option value="a bit">a bit (um pouco)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      3. Estado
                    </label>
                    <select
                      value={selectedWords.adj}
                      onChange={(e) => setSelectedWords({ ...selectedWords, adj: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2 text-xs text-slate-200 focus:outline-hidden focus:border-cyan-500 cursor-pointer"
                    >
                      <option value="good">good (bom / boa)</option>
                      <option value="hard">hard (difícil / desafiador)</option>
                      <option value="important">important (importante)</option>
                      <option value="different">different (diferente)</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      type="button"
                      onClick={() => speak(combinedSentence, 1.0)}
                      className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-2 px-3 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Play size={13} fill="currentColor" /> Pronunciar Frase
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/80 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-white font-mono text-sm font-bold">
                      "{combinedSentence}."
                    </span>
                    {showTranslation && (
                      <span className="text-slate-400 text-xs block sm:inline sm:ml-3">
                        → {combinedTranslation}.
                      </span>
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(combinedSentence)}
                    className="text-slate-400 hover:text-white text-xs p-1.5 rounded-lg hover:bg-slate-900 cursor-pointer"
                    title="Copiar frase combinada"
                  >
                    <Copy size={13} />
                  </button>
                </div>
              </section>

              {/* BARRA DE PESQUISA E FILTROS DE CATEGORIA */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="relative flex-1 max-w-md">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
                      <Search size={14} />
                    </span>
                    <input
                      type="text"
                      placeholder="Pesquisar por termo em inglês, tradução ou fonética..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-900/60 border border-slate-800 rounded-xl py-2.5 px-3 pl-9 text-xs text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-cyan-500"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => setSearchQuery('')}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300 cursor-pointer"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px] bg-slate-900/60 border border-slate-800 py-1.5 px-3 rounded-xl">
                    <HelpCircle size={13} className="text-cyan-400" />
                    <span>Clique em qualquer cartão para ouvir com voz e entonação nativa</span>
                  </div>
                </div>

                {/* Filtros em Pílulas Organizadas */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                    <Layers size={12} /> Seções do Guia Completo:
                  </div>
                  <div className="flex flex-wrap gap-1.5 bg-[#020617] p-2 rounded-2xl border border-slate-800/80">
                    {PDF_SECTIONS.map((sec) => {
                      const isSelected = selectedSection === sec.id;
                      const count = sec.id === 'Todas'
                        ? ALL_PDF_VOCABULARY.length
                        : ALL_PDF_VOCABULARY.filter(i => i.category === sec.id).length;

                      return (
                        <button
                          type="button"
                          key={sec.id}
                          onClick={() => setSelectedSection(sec.id)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-xs'
                              : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                          }`}
                        >
                          <span>{sec.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                            isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* GRADE DE TERMOS DO GUIA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredVocabulary.length === 0 ? (
                  <div className="col-span-full py-12 text-center text-slate-500 space-y-2 border border-dashed border-slate-800 rounded-3xl bg-slate-900/20">
                    <Search className="mx-auto text-slate-600 mb-1" size={24} />
                    <p className="text-xs font-bold text-slate-400">Nenhum termo encontrado com o filtro atual.</p>
                    <p className="text-[11px] text-slate-500">Tente buscar outra expressão ou selecione "Todos os Termos".</p>
                  </div>
                ) : (
                  filteredVocabulary.map((item, idx) => (
                    <div
                      key={`${item.term}-${idx}`}
                      className="bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 p-4 rounded-2xl transition-all flex flex-col justify-between space-y-3 group shadow-xs hover:shadow-cyan-500/5"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <button
                            type="button"
                            onClick={() => speak(item.term, 0.95)}
                            className="text-left cursor-pointer group-hover:text-cyan-300 transition-colors"
                          >
                            <h3 className="text-base font-black text-slate-100 tracking-tight">
                              {item.term}
                            </h3>
                            <span className="text-[11px] font-mono text-cyan-400 font-medium">
                              /{item.pr}/
                            </span>
                          </button>
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => speak(item.term, 0.95)}
                              className="p-1.5 bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 rounded-lg transition-colors cursor-pointer"
                              title="Ouvir termo"
                            >
                              <Volume2 size={14} />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs font-semibold text-slate-300">
                          {item.meaning}
                        </p>

                        {item.example && (
                          <div className="p-2.5 bg-slate-950/70 rounded-xl border border-slate-850 space-y-1">
                            <p className="text-[11px] font-medium text-slate-200 italic">
                              "{item.example}"
                            </p>
                            {item.examplePt && showTranslation && (
                              <p className="text-[10px] text-slate-400">
                                {item.examplePt}
                              </p>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-slate-800/50 text-[10px] text-slate-500">
                        <span className="font-medium text-slate-400 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-850">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => trainItemInQuiz(item)}
                            className="text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-0.5 cursor-pointer"
                            title="Treinar no Quiz"
                          >
                            <Trophy size={11} /> Treinar
                          </button>
                          <button
                            type="button"
                            onClick={() => handleCopy(item.example ? `${item.term} (${item.meaning}) - Ex: "${item.example}"` : `${item.term} (${item.meaning})`)}
                            className="hover:text-slate-300 flex items-center gap-1 cursor-pointer"
                            title="Copiar termo"
                          >
                            <Copy size={11} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}

          {/* ================= ABA 2: QUIZ INTERATIVO ================= */}
          {activeTab === 'quiz' && (
            <section className="bg-slate-900/50 border border-indigo-900/30 rounded-3xl p-4 sm:p-5 space-y-5">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-white flex items-center gap-2">
                      <Trophy size={18} className="text-amber-400" /> Quiz de Fala & Tradução
                    </h3>
                    <span className="px-2 py-0.5 bg-amber-400/20 text-amber-300 text-[11px] font-bold rounded-md">
                      {quizPoints} pts
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Sequência atual: <span className="text-cyan-400 font-bold">{quizStreak}</span> | Melhor: <span className="text-emerald-400 font-bold">{bestStreak}</span> (Perguntas puxadas do Guia Completo)
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex gap-1">
                    <button
                      type="button"
                      onClick={() => {
                        setQuizMode('translation');
                        generateNewQuizQuestion('translation');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                        quizMode === 'translation'
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Tradução
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setQuizMode('pronunciation');
                        generateNewQuizQuestion('pronunciation');
                      }}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                        quizMode === 'pronunciation'
                          ? 'bg-cyan-500 text-slate-950 shadow-xs'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Pronúncia / Mic
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => generateNewQuizQuestion()}
                    className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl border border-slate-700 transition cursor-pointer"
                    title="Nova pergunta aleatória"
                  >
                    <RotateCcw size={15} />
                  </button>
                </div>
              </div>

              {quizItem && (
                <div className="space-y-5">
                  {/* Cartão da Questão */}
                  <div className="bg-slate-950/80 border-2 border-indigo-500/30 rounded-3xl p-6 text-center space-y-3 relative overflow-hidden shadow-lg">
                    <div className="flex justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                        {quizMode === 'translation'
                          ? (quizDirection === 'en_to_pt' ? 'Qual é a tradução em português?' : 'Qual é o termo em inglês?')
                          : 'Fale esta palavra em voz alta no microfone:'}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {quizMode === 'translation'
                        ? (quizDirection === 'en_to_pt' ? quizItem.term : quizItem.meaning)
                        : quizItem.term}
                    </h2>

                    {quizItem.pr && (
                      <p className="text-xs font-mono text-cyan-400">
                        Pronúncia fonética: /{quizItem.pr}/
                      </p>
                    )}

                    {quizItem.category && (
                      <span className="inline-block text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                        Categoria: {quizItem.category}
                      </span>
                    )}

                    <div>
                      <button
                        type="button"
                        onClick={() => speak(quizItem.term, 0.95)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-850 hover:bg-slate-800 text-slate-300 rounded-xl text-xs font-semibold transition cursor-pointer border border-slate-750"
                      >
                        <Volume2 size={13} /> Ouvir Pronúncia
                      </button>
                    </div>
                  </div>

                  {/* Opções de Tradução */}
                  {quizMode === 'translation' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {quizOptions.map((option, idx) => {
                        const correctOption = quizDirection === 'en_to_pt' ? quizItem.meaning : quizItem.term;
                        const isCorrect = option === correctOption;
                        const isSelected = option === quizSelectedOption;

                        let btnClass = 'bg-slate-950/70 border-slate-800 hover:border-indigo-500/50 text-slate-200';
                        if (quizAnswered) {
                          if (isCorrect) {
                            btnClass = 'bg-emerald-950/80 border-emerald-500 text-emerald-200';
                          } else if (isSelected) {
                            btnClass = 'bg-rose-950/80 border-rose-500 text-rose-200';
                          }
                        }

                        return (
                          <button
                            type="button"
                            key={idx}
                            disabled={quizAnswered}
                            onClick={() => handleAnswerTranslation(option)}
                            className={`p-4 rounded-2xl border-2 font-bold text-sm text-left transition-all cursor-pointer disabled:cursor-default flex items-center justify-between ${btnClass}`}
                          >
                            <span>{option}</span>
                            {quizAnswered && isCorrect && (
                              <Check size={16} className="text-emerald-400 shrink-0" />
                            )}
                            {quizAnswered && isSelected && !isCorrect && (
                              <X size={16} className="text-rose-400 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Modo de Pronúncia com Microfone */}
                  {quizMode === 'pronunciation' && (
                    <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-4 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <button
                          type="button"
                          onClick={startSpeechRecognition}
                          className={`w-20 h-20 rounded-full flex items-center justify-center text-white transition-all shadow-xl cursor-pointer ${
                            isListening
                              ? 'bg-rose-600 animate-pulse ring-4 ring-rose-400'
                              : 'bg-gradient-to-tr from-cyan-600 to-indigo-600 hover:scale-105'
                          }`}
                          title="Clique para falar"
                        >
                          <Mic size={32} />
                        </button>
                        <p className="text-xs text-slate-400 font-medium">
                          {isListening
                            ? 'Ouvindo agora... Fale a palavra no microfone!'
                            : 'Clique no microfone para falar em voz alta'}
                        </p>
                      </div>

                      {quizSpeechResult && (
                        <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs space-y-1">
                          <p className="text-slate-400">Você disse:</p>
                          <p className="font-mono text-sm text-white font-bold">"{quizSpeechResult}"</p>
                          {quizSpeechScore !== null && (
                            <p className="text-xs font-bold text-cyan-400 mt-1">
                              Similaridade com "{quizItem.term}": {quizSpeechScore}%
                            </p>
                          )}
                        </div>
                      )}

                      <div className="pt-2 border-t border-slate-850 flex flex-wrap justify-center gap-2">
                        <button
                          type="button"
                          onClick={simulatePerfectPronunciation}
                          className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs rounded-xl border border-slate-800 cursor-pointer"
                        >
                          Simular Pronúncia Perfeita (Teste)
                        </button>
                      </div>
                    </div>
                  )}

                  {quizAnswered && (
                    <div className="flex justify-between items-center pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('pdf_guide');
                          setSelectedSection(quizItem.category || 'Todas');
                        }}
                        className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer"
                      >
                        ← Ver no Guia Completo ({quizItem.category})
                      </button>

                      <button
                        type="button"
                        onClick={() => generateNewQuizQuestion()}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer transition-transform active:scale-95 flex items-center gap-1.5"
                      >
                        Próxima Pergunta <RotateCcw size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </section>
          )}
        </main>
      </motion.div>
    </div>
  );
};
