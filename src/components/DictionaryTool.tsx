import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Search,
  Volume2,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  X,
  Languages,
  RotateCcw,
  Plus,
  Send,
  Loader2,
  Briefcase,
  HeartHandshake,
  HelpCircle,
  ShieldAlert,
  SlidersHorizontal,
  BookmarkPlus
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DICIONARIO_INICIAL } from '../data/lexicoData';
import { LexicoItem } from '../types';

interface DictionaryToolProps {
  isOpen: boolean;
  onClose: () => void;
  onSpeak?: (text: string) => void;
}

export const DictionaryTool: React.FC<DictionaryToolProps> = ({
  isOpen,
  onClose,
  onSpeak,
}) => {
  const [dicionario, setDicionario] = useState<LexicoItem[]>(() => {
    const saved = localStorage.getItem('lexico_polido_custom');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return [...DICIONARIO_INICIAL, ...parsed];
      } catch (e) {
        console.error(e);
      }
    }
    return DICIONARIO_INICIAL;
  });

  const [busca, setBusca] = useState<string>('');
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todas');
  const [reproduzindo, setReproduzindo] = useState<string | null>(null);
  const [copiado, setCopiado] = useState<string | null>(null);

  // Estados do Refinador de IA
  const [inputTradutor, setInputTradutor] = useState<string>('');
  const [intencaoTradutor, setIntencaoTradutor] = useState<string>('corporativo');
  const [carregandoIA, setCarregandoIA] = useState<boolean>(false);
  const [resultadoIA, setResultadoIA] = useState<{ refined: string; explanation: string } | null>(null);
  const [mostraRefinador, setMostraRefinador] = useState<boolean>(false);

  // Pronúncia nativa via Web Speech API
  const handleFalar = (texto: string) => {
    if (onSpeak) {
      onSpeak(texto);
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(texto);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;

      const voices = window.speechSynthesis.getVoices();
      const usVoice = voices.find(v => v.lang === 'en-US' || v.lang.includes('en'));
      if (usVoice) utterance.voice = usVoice;

      setReproduzindo(texto);
      utterance.onend = () => setReproduzindo(null);
      utterance.onerror = () => setReproduzindo(null);

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopiar = (texto: string) => {
    navigator.clipboard.writeText(texto);
    setCopiado(texto);
    setTimeout(() => setCopiado(null), 2000);
  };

  // Refinar texto com IA através do endpoint do servidor
  const refinarComIA = async () => {
    if (!inputTradutor.trim() || carregandoIA) return;
    setCarregandoIA(true);
    setResultadoIA(null);

    try {
      const response = await fetch('/api/lexico/refine', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phrase: inputTradutor.trim(),
          category: intencaoTradutor
        })
      });

      const resJson = await response.json();
      if (resJson.success && resJson.data) {
        setResultadoIA(resJson.data);
      } else {
        throw new Error("Falha ao refinar");
      }
    } catch (err) {
      console.error(err);
      // Fallback gracioso
      setResultadoIA({
        refined: `Could you kindly consider: "${inputTradutor.trim()}"?`,
        explanation: "Versão suavizada e aberta à cooperação profissional."
      });
    } finally {
      setCarregandoIA(false);
    }
  };

  // Sugerir nova expressão elegante via IA
  const sugerirExpressaoIA = async () => {
    setCarregandoIA(true);
    try {
      const response = await fetch('/api/lexico/suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: categoriaAtiva === 'todas' ? 'corporativo' : categoriaAtiva })
      });
      const resJson = await response.json();
      if (resJson.success && resJson.data) {
        const item: LexicoItem = resJson.data;
        adicionarAoDicionario(item);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setCarregandoIA(false);
    }
  };

  // Salvar expressão personalizada
  const salvarResultadoNoDicionario = () => {
    if (!resultadoIA || !inputTradutor.trim()) return;
    const novoItem: LexicoItem = {
      cotidiano: inputTradutor.trim(),
      elegante: resultadoIA.refined,
      significado: resultadoIA.explanation,
      categoria: intencaoTradutor
    };
    adicionarAoDicionario(novoItem);
    setInputTradutor('');
    setResultadoIA(null);
  };

  const adicionarAoDicionario = (item: LexicoItem) => {
    const updated = [item, ...dicionario];
    setDicionario(updated);
    const customItems = updated.filter(
      it => !DICIONARIO_INICIAL.some(orig => orig.cotidiano === it.cotidiano && orig.elegante === it.elegante)
    );
    localStorage.setItem('lexico_polido_custom', JSON.stringify(customItems));
  };

  const categorias = [
    { id: 'todas', label: 'Todas as Expressões', icon: BookOpen },
    { id: 'corporativo', label: 'Corporativo & Negócios', icon: Briefcase },
    { id: 'elogios', label: 'Elogios Profissionais', icon: HeartHandshake },
    { id: 'perguntas', label: 'Perguntas Diplomáticas', icon: HelpCircle },
    { id: 'limites', label: 'Limites Polidos', icon: ShieldAlert },
    { id: 'geral', label: 'Inglês Fluido Geral', icon: Languages },
  ];

  const itensFiltrados = dicionario.filter((item) => {
    const combinaCategoria = categoriaAtiva === 'todas' || item.categoria === categoriaAtiva;
    const q = busca.toLowerCase().trim();
    if (!q) return combinaCategoria;
    const combinaTexto =
      item.cotidiano.toLowerCase().includes(q) ||
      item.elegante.toLowerCase().includes(q) ||
      item.significado.toLowerCase().includes(q);
    return combinaCategoria && combinaTexto;
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-5xl h-[92vh] max-h-[860px] bg-[#020617] text-slate-100 rounded-3xl border-2 border-emerald-500/30 shadow-2xl flex flex-col overflow-hidden relative"
      >
        {/* CABEÇALHO DO DICIONÁRIO */}
        <header className="p-4 sm:p-5 border-b border-slate-850 bg-slate-950/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="relative w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
              <span className="absolute -top-1 -left-1 w-4 h-4 bg-amber-400 text-amber-950 text-[10px] font-black rounded-full flex items-center justify-center">
                2
              </span>
              <BookOpen size={22} className="text-slate-950 font-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  Léxico Polido & Diplomático
                </h1>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider">
                  Inglês C2
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Transforme o inglês direto/informal em linguagem corporativa impecável e persuasiva.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => setMostraRefinador(!mostraRefinador)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                mostraRefinador
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : 'bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30'
              }`}
            >
              <Sparkles size={14} />
              <span>{mostraRefinador ? 'Ocultar Refinador' : 'Refinador IA'}</span>
            </button>

            <button
              type="button"
              onClick={sugerirExpressaoIA}
              disabled={carregandoIA}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-xl border border-slate-800 text-xs font-semibold transition cursor-pointer disabled:opacity-50"
              title="Gerar sugestão inteligente com IA"
            >
              {carregandoIA ? <Loader2 size={13} className="animate-spin" /> : <Plus size={13} />}
              <span className="hidden sm:inline">Sugerir Expressão</span>
            </button>

            <button
              type="button"
              id="close-dictionary-modal"
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors cursor-pointer"
              title="Fechar Dicionário"
            >
              <X size={16} />
            </button>
          </div>
        </header>

        {/* CORPO DO DICIONÁRIO SCROLLÁVEL */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* PAINEL REFINADOR POR IA (EXPANSÍVEL) */}
          <AnimatePresence>
            {mostraRefinador && (
              <motion.section
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-emerald-500/30 rounded-3xl p-4 sm:p-5 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-400 font-black text-xs uppercase tracking-wider">
                      <Sparkles size={15} /> Refinador Ativo por IA
                    </div>
                    <span className="text-[10px] text-slate-400 font-semibold">
                      Digite qualquer frase em português ou inglês informal
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        type="text"
                        value={inputTradutor}
                        onChange={(e) => setInputTradutor(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') refinarComIA();
                        }}
                        placeholder="Ex: Não gostei do seu plano / Mande logo os arquivos..."
                        className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-hidden focus:border-emerald-500"
                      />
                      <select
                        value={intencaoTradutor}
                        onChange={(e) => setIntencaoTradutor(e.target.value)}
                        className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-hidden focus:border-emerald-500 cursor-pointer"
                      >
                        <option value="corporativo">Corporativo / Negócios</option>
                        <option value="elogios">Elogios & Feedback</option>
                        <option value="perguntas">Perguntas Diplomáticas</option>
                        <option value="limites">Limites Polidos ("Virada de Mesa")</option>
                        <option value="geral">Geral / Fluidez</option>
                      </select>
                      <button
                        type="button"
                        onClick={refinarComIA}
                        disabled={carregandoIA || !inputTradutor.trim()}
                        className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 text-slate-950 disabled:text-slate-500 font-bold px-4 py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-md transition cursor-pointer disabled:cursor-not-allowed"
                      >
                        {carregandoIA ? (
                          <Loader2 size={14} className="animate-spin" />
                        ) : (
                          <>
                            <Send size={13} /> Refinar
                          </>
                        )}
                      </button>
                    </div>

                    {resultadoIA && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-slate-950/80 border border-emerald-500/40 rounded-2xl p-4 space-y-3"
                      >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                            Versão Refinada & Polida:
                          </span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleFalar(resultadoIA.refined)}
                              className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold rounded-lg text-slate-300 flex items-center gap-1 cursor-pointer"
                            >
                              <Volume2 size={13} /> Ouvir
                            </button>
                            <button
                              type="button"
                              onClick={() => handleCopiar(resultadoIA.refined)}
                              className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-semibold rounded-lg text-slate-300 flex items-center gap-1 cursor-pointer"
                            >
                              {copiado === resultadoIA.refined ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                              Copiar
                            </button>
                            <button
                              type="button"
                              onClick={salvarResultadoNoDicionario}
                              className="px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/40 text-xs font-bold rounded-lg text-emerald-300 flex items-center gap-1 cursor-pointer"
                            >
                              <BookmarkPlus size={13} /> Salvar no Dicionário
                            </button>
                          </div>
                        </div>

                        <p className="text-sm sm:text-base font-bold text-white font-mono">
                          "{resultadoIA.refined}"
                        </p>

                        <p className="text-xs text-slate-400 italic">
                          💡 <span className="font-semibold text-slate-300">Por que funciona:</span> {resultadoIA.explanation}
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>

          {/* BARRA DE PESQUISA & FILTRO RÁPIDO */}
          <div className="space-y-3">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-500">
                <Search size={15} />
              </span>
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar por expressão comum, versão elegante ou explicação..."
                className="w-full bg-slate-900/80 border border-slate-800 rounded-2xl py-3 px-4 pl-10 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-hidden focus:border-emerald-500 shadow-inner"
              />
              {busca && (
                <button
                  type="button"
                  onClick={() => setBusca('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-500 hover:text-slate-300 cursor-pointer"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* ABAS DE CATEGORIA */}
            <div className="flex flex-wrap gap-1.5 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-850">
              {categorias.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = categoriaAtiva === cat.id;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setCategoriaAtiva(cat.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-xs'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                    }`}
                  >
                    <IconComponent size={13} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* LISTA DE CARTÕES DO DICIONÁRIO */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {itensFiltrados.length === 0 ? (
              <div className="col-span-full py-16 text-center text-slate-500 space-y-3 border border-dashed border-slate-800 rounded-3xl bg-slate-900/30">
                <BookOpen className="mx-auto text-slate-600 mb-2" size={32} />
                <p className="text-sm font-bold text-slate-300">Nenhuma expressão encontrada</p>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Tente buscar por outras palavras-chave ou use o botão "Refinador IA" acima para criar sua própria versão elegante!
                </p>
              </div>
            ) : (
              itensFiltrados.map((item, index) => {
                const estaReproduzindo = reproduzindo === item.elegante;
                return (
                  <motion.div
                    key={`${item.cotidiano}-${index}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15, delay: Math.min(index * 0.03, 0.3) }}
                    className="bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 rounded-3xl p-5 shadow-lg flex flex-col justify-between space-y-4 group transition-all"
                  >
                    <div className="space-y-3.5">
                      {/* Categoria Badge */}
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2.5 py-0.5 bg-slate-950 rounded-lg border border-slate-800">
                          {item.categoria}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleCopiar(item.elegante)}
                            className="p-1.5 text-slate-500 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
                            title="Copiar versão elegante"
                          >
                            {copiado === item.elegante ? (
                              <Check size={14} className="text-emerald-400" />
                            ) : (
                              <Copy size={13} />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Comparação: Cotidiano vs Elegante */}
                      <div className="space-y-2">
                        <div className="bg-slate-950/70 p-3 rounded-2xl border border-rose-900/20">
                          <div className="flex items-center gap-1.5 text-[10px] font-bold text-rose-400/90 uppercase tracking-wider mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                            Expressão Cotidiana / Direta:
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 font-medium">
                            "{item.cotidiano}"
                          </p>
                        </div>

                        <div className="flex justify-center text-slate-600 -my-1">
                          <ArrowRight size={14} className="rotate-90 sm:rotate-0 text-emerald-500/70" />
                        </div>

                        <div className="bg-emerald-950/20 p-3.5 rounded-2xl border border-emerald-500/30">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                              Versão Polida & Diplomática (C2):
                            </div>
                            <button
                              type="button"
                              onClick={() => handleFalar(item.elegante)}
                              className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition cursor-pointer ${
                                estaReproduzindo
                                  ? 'bg-emerald-400 text-slate-950 ring-2 ring-emerald-400/30'
                                  : 'bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300'
                              }`}
                              title="Ouvir pronúncia da versão refinada"
                            >
                              <Volume2 size={13} />
                              <span className="text-[10px]">{estaReproduzindo ? 'Falando...' : 'Ouvir'}</span>
                            </button>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-emerald-100 font-mono">
                            "{item.elegante}"
                          </p>
                        </div>
                      </div>

                      {/* Explicação & Racional comunicativo */}
                      <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-950/40 p-2.5 rounded-xl border border-slate-850">
                        <span className="font-semibold text-slate-300">Por que soa melhor:</span> {item.significado}
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
