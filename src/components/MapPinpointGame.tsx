import React, { useState, useRef } from 'react';
import { MapPin, Volume2, ArrowRight, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import { MapPinpointItem } from '../types';

interface MapPinpointGameProps {
  item: MapPinpointItem;
  currentIndex: number;
  totalCount: number;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onNext: () => void;
  onSpeak: (text: string) => void;
}

export const MapPinpointGame: React.FC<MapPinpointGameProps> = ({
  item,
  currentIndex,
  totalCount,
  onCorrectAnswer,
  onWrongAnswer,
  onNext,
  onSpeak,
}) => {
  const [clickedPin, setClickedPin] = useState<{ x: number; y: number } | null>(null);
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isEvaluated || !mapRef.current) return;

    const rect = mapRef.current.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    setClickedPin({ x: clickX, y: clickY });

    // Calculate euclidean distance in percentage points
    const dx = clickX - item.coords.x;
    const dy = clickY - item.coords.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const success = distance <= item.radius;
    setIsSuccess(success);
    setIsEvaluated(true);

    if (success) {
      onCorrectAnswer();
    } else {
      onWrongAnswer();
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-[32px] p-6 sm:p-8 shadow-xl shadow-blue-100/50 border-b-8 border-blue-200 border-x-2 border-t-2 border-blue-50 flex flex-col gap-6">
      
      {/* HEADER */}
      <div className="flex items-center justify-between border-b-2 border-slate-100 pb-4">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-black">
            <MapPin className="w-4 h-4" />
          </span>
          <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border-2 border-blue-100">
            Map Pinpoint • {currentIndex + 1} de {totalCount}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onSpeak(item.promptEn)}
          className="p-2 text-slate-400 hover:text-blue-600 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-bold"
          title="Ouvir instrução"
        >
          <Volume2 className="w-4 h-4 text-blue-600" />
          <span>Ouvir em Inglês</span>
        </button>
      </div>

      {/* PROMPT */}
      <div className="bg-blue-50/60 border-2 border-blue-100 p-4 rounded-2xl flex flex-col gap-1">
        <div className="text-sm sm:text-base font-black text-indigo-950">
          {item.promptEn}
        </div>
        <div className="text-xs text-slate-500 font-medium">
          {item.promptPt}
        </div>
      </div>

      {/* INTERACTIVE SVG WORLD MAP */}
      <div
        ref={mapRef}
        id="interactive-world-map"
        onClick={handleMapClick}
        className="w-full aspect-[2/1] bg-[#1E293B] rounded-2xl border-4 border-slate-800 relative overflow-hidden select-none cursor-crosshair shadow-inner"
      >
        {/* SVG Base Continents Outline */}
        <svg viewBox="0 0 1000 500" className="w-full h-full opacity-80 pointer-events-none">
          {/* North America */}
          <path d="M120,60 Q180,40 260,70 L270,160 Q220,180 180,240 Q150,220 120,160 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
          {/* South America */}
          <path d="M250,250 Q360,260 380,330 Q360,420 300,470 Q260,420 250,340 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
          {/* Europe */}
          <path d="M470,80 Q560,70 580,140 Q530,170 470,160 Q450,120 470,80 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
          {/* Africa */}
          <path d="M460,180 Q580,180 600,260 Q560,370 510,400 Q450,330 450,250 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
          {/* Asia */}
          <path d="M580,80 Q850,70 890,160 Q820,290 680,270 Q620,200 580,140 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
          {/* Australia & Oceania */}
          <path d="M780,320 Q880,310 900,380 Q850,420 780,390 Z" fill="#334155" stroke="#475569" strokeWidth="2" />
          {/* Antarctica */}
          <path d="M100,480 L900,480 L880,500 L120,500 Z" fill="#475569" />

          {/* Oceans subtle watermarks */}
          <text x="400" y="240" fill="#64748B" fontSize="18" fontWeight="bold" opacity="0.4">ATLANTIC OCEAN</text>
          <text x="820" y="220" fill="#64748B" fontSize="18" fontWeight="bold" opacity="0.4">PACIFIC OCEAN</text>
          <text x="640" y="340" fill="#64748B" fontSize="18" fontWeight="bold" opacity="0.4">INDIAN OCEAN</text>
        </svg>

        {/* TARGET ZONE REVEALED ON EVALUATION */}
        {isEvaluated && (
          <div
            className="absolute rounded-full border-2 border-dashed border-emerald-400 bg-emerald-400/20 -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse"
            style={{
              left: `${item.coords.x}%`,
              top: `${item.coords.y}%`,
              width: `${item.radius * 2}%`,
              height: `${item.radius * 2 * 2}%`, // account for 2:1 aspect ratio
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-black uppercase bg-emerald-500 text-white px-2 py-0.5 rounded-full whitespace-nowrap shadow-md">
              {item.targetName}
            </div>
          </div>
        )}

        {/* CLICKED PIN */}
        {clickedPin && (
          <div
            className="absolute -translate-x-1/2 -translate-y-full pointer-events-none transition-transform"
            style={{
              left: `${clickedPin.x}%`,
              top: `${clickedPin.y}%`,
            }}
          >
            <MapPin className={`w-7 h-7 drop-shadow-lg ${isEvaluated ? (isSuccess ? 'text-emerald-400 fill-emerald-400' : 'text-rose-500 fill-rose-500') : 'text-amber-400 fill-amber-400'} animate-bounce`} />
          </div>
        )}

        {!clickedPin && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-xs font-bold text-slate-300 bg-slate-900/80 px-4 py-2 rounded-full border border-slate-700 shadow-md">
              Toque no mapa para posicionar seu pin
            </span>
          </div>
        )}
      </div>

      {/* FEEDBACK & EXPLANATION */}
      {isEvaluated && (
        <div className="border-t-2 border-slate-100 pt-4 flex flex-col gap-4 animate-in fade-in">
          <div className={`p-4 rounded-2xl border-2 text-xs leading-relaxed ${
            isSuccess ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-rose-50 border-rose-200 text-rose-950'
          }`}>
            <div className="flex items-center gap-2 font-black text-sm mb-1">
              {isSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Precisão Excelente! Alvo Identificado com Sucesso.</span>
                </>
              ) : (
                <>
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>Muito próximo! Veja a demarcação correta em verde no mapa.</span>
                </>
              )}
            </div>
            <p className="font-medium mt-1">{item.explanation}</p>
          </div>

          <button
            id="btn-pin-next"
            onClick={onNext}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-lg shadow-blue-200 border-b-4 border-blue-900 transition-all hover:translate-y-[-2px] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{currentIndex < totalCount - 1 ? 'Próximo Ponto no Mapa' : 'Ver Resultados'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
};
