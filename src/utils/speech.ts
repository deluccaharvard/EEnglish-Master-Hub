// Speech Synthesis utility using Web Speech API

let currentUtterance: SpeechSynthesisUtterance | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];
let speakTimeout: ReturnType<typeof setTimeout> | null = null;

function loadVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return [];
  }
  const voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    cachedVoices = voices;
  }
  return cachedVoices.length > 0 ? cachedVoices : voices;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  loadVoices();
  if (typeof window.speechSynthesis.addEventListener === 'function') {
    window.speechSynthesis.addEventListener('voiceschanged', () => {
      loadVoices();
    });
  }
}

function pickEnglishVoice(): SpeechSynthesisVoice | undefined {
  const voices = loadVoices();
  if (!voices || voices.length === 0) return undefined;

  return (
    voices.find(
      (v) =>
        v.lang.toLowerCase().startsWith('en') &&
        (v.name.includes('Google') || v.name.includes('Natural'))
    ) ||
    voices.find((v) => v.lang.toLowerCase().startsWith('en-us')) ||
    voices.find((v) => v.lang.toLowerCase().startsWith('en'))
  );
}

export function playPronunciation(
  text: string,
  onStart?: () => void,
  onEnd?: () => void
): void {
  const cleanText = (text || '').trim();
  if (!cleanText) {
    if (onEnd) onEnd();
    return;
  }

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis is not supported by this browser.');
    if (onEnd) onEnd();
    return;
  }

  try {
    if (speakTimeout) {
      clearTimeout(speakTimeout);
      speakTimeout = null;
    }

    const synth = window.speechSynthesis;

    if (synth.paused) {
      synth.resume();
    }

    const hadActiveSpeech = synth.speaking || synth.pending;
    if (hadActiveSpeech) {
      synth.cancel();
    }

    const dispatchSpeak = () => {
      if (synth.paused) {
        synth.resume();
      }

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.lang = 'en-US';
      utterance.rate = 0.88;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;

      const enVoice = pickEnglishVoice();
      if (enVoice) {
        utterance.voice = enVoice;
        utterance.lang = enVoice.lang;
      }

      utterance.onstart = () => {
        if (onStart) onStart();
      };

      utterance.onend = () => {
        if (currentUtterance === utterance) {
          currentUtterance = null;
        }
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        if (currentUtterance === utterance) {
          currentUtterance = null;
        }
        // 'interrupted' e 'canceled' ocorrem naturalmente ao trocar de palavra rápido
        if (e.error !== 'interrupted' && e.error !== 'canceled') {
          console.warn('Speech synthesis error:', e.error || e);
        }
        if (onEnd) onEnd();
      };

      currentUtterance = utterance;
      synth.speak(utterance);
    };

    // Pequeno respiro após cancel() evita que o navegador engula a próxima fala
    if (hadActiveSpeech) {
      speakTimeout = setTimeout(() => {
        speakTimeout = null;
        dispatchSpeak();
      }, 60);
    } else {
      dispatchSpeak();
    }
  } catch (err) {
    console.warn('Failed to speak word:', err);
    if (onEnd) onEnd();
  }
}

export function stopPronunciation(): void {
  if (speakTimeout) {
    clearTimeout(speakTimeout);
    speakTimeout = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  currentUtterance = null;
}
