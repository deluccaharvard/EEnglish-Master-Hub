import React, { useState } from 'react';
import {
  Database,
  ChevronDown,
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { AuthUser } from '../types';
import {
  loginUser,
  registerUser,
  getSupabaseConfig,
  saveSupabaseConfig,
} from '../utils/auth';

interface LoginScreenProps {
  onAuthSuccess: (user: AuthUser) => void;
}

const AcgCrestLogo: React.FC<{ className?: string }> = ({ className = 'w-20 h-20' }) => (
  <svg
    viewBox="0 0 120 132"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Escudo Atlético Clube Goianiense"
  >
    {/* Estrela dourada superior */}
    <path
      d="M60 4L63.8 14.2L74.8 14.5L66.1 21.1L69.1 31.6L60 25.4L50.9 31.6L53.9 21.1L45.2 14.5L56.2 14.2L60 4Z"
      fill="#FACC15"
      stroke="#FEF08A"
      strokeWidth="1"
      strokeLinejoin="round"
    />

    {/* Contorno externo branco do escudo */}
    <defs>
      <clipPath id="acg-shield-clip">
        <path d="M22 36H98V74C98 99.5 60 121 60 121C60 121 22 99.5 22 74V36Z" />
      </clipPath>
    </defs>

    <g clipPath="url(#acg-shield-clip)">
      {/* Fundo vermelho */}
      <rect x="20" y="34" width="80" height="90" fill="#DC141C" />
      {/* Listras verticais pretas rubro-negras */}
      <rect x="22" y="34" width="15.2" height="90" fill="#0B0B0D" />
      <rect x="52.4" y="34" width="15.2" height="90" fill="#0B0B0D" />
      <rect x="82.8" y="34" width="15.2" height="90" fill="#0B0B0D" />

      {/* Faixa horizontal preta central */}
      <rect x="18" y="61" width="84" height="22" fill="#0B0B0D" />
      <line x1="18" y1="61" x2="102" y2="61" stroke="#FFFFFF" strokeWidth="2.2" />
      <line x1="18" y1="83" x2="102" y2="83" stroke="#FFFFFF" strokeWidth="2.2" />

      {/* Sigla ACG */}
      <text
        x="60"
        y="76.5"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="15.5"
        fontWeight="900"
        letterSpacing="2.2"
        fontFamily="Outfit, Plus Jakarta Sans, sans-serif"
      >
        ACG
      </text>
    </g>

    {/* Borda branca nítida do escudo */}
    <path
      d="M22 36H98V74C98 99.5 60 121 60 121C60 121 22 99.5 22 74V36Z"
      stroke="#FFFFFF"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
  </svg>
);

export const LoginScreen: React.FC<LoginScreenProps> = ({ onAuthSuccess }) => {
  const [authTab, setAuthTab] = useState<'login' | 'register'>('login');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  // Optional Supabase config accordion
  const existingSupabase = getSupabaseConfig();
  const [isSupabaseOpen, setIsSupabaseOpen] = useState<boolean>(false);
  const [supabaseUrl, setSupabaseUrl] = useState<string>(existingSupabase?.url || '');
  const [supabaseKey, setSupabaseKey] = useState<string>(existingSupabase?.anonKey || '');
  const [isSupabaseActive, setIsSupabaseActive] = useState<boolean>(Boolean(existingSupabase));

  const handleTabChange = (tab: 'login' | 'register') => {
    setAuthTab(tab);
    setErrorMessage(null);
    setInfoMessage(null);
  };

  const handleSaveSupabase = () => {
    setErrorMessage(null);
    setInfoMessage(null);
    if (!supabaseUrl.trim() || !supabaseKey.trim()) {
      setErrorMessage('Preencha a URL do projeto e a Chave Anon do Supabase para ativar.');
      return;
    }
    saveSupabaseConfig({ url: supabaseUrl.trim(), anonKey: supabaseKey.trim() });
    setIsSupabaseActive(true);
    setInfoMessage('Conexão Supabase salva para esta sessão.');
  };

  const handleClearSupabase = () => {
    saveSupabaseConfig(null);
    setSupabaseUrl('');
    setSupabaseKey('');
    setIsSupabaseActive(false);
    setInfoMessage('Configuração Supabase removida. Autenticação local ativada.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setInfoMessage(null);
    setIsSubmitting(true);

    try {
      if (authTab === 'register') {
        const result = await registerUser(fullName, email, password);
        onAuthSuccess(result.user);
      } else {
        const result = await loginUser(email, password);
        onAuthSuccess(result.user);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Não foi possível autenticar. Verifique seus dados.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(circle at 50% 16%, #45090f 0%, #220508 42%, #0c0204 100%)',
      }}
    >
      {/* Brilho sutil rubro-negro atrás do escudo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl opacity-30 bg-[#dc141c]"
      />

      <div className="w-full max-w-[440px] relative z-10 flex flex-col items-center">
        {/* Escudo Central ACG */}
        <div className="w-24 h-24 rounded-3xl bg-[#160406]/90 border border-red-900/50 shadow-2xl shadow-black/60 flex items-center justify-center mb-6">
          <AcgCrestLogo className="w-16 h-[72px]" />
        </div>

        {/* Subtítulo institucional */}
        <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.18em] text-[#ef4444] text-center mb-3">
          ATLÉTICO CLUBE GOIANIENSE · RUBRO-NEGRO
        </p>

        {/* Título Principal */}
        <h1 className="text-3xl sm:text-[34px] leading-[1.15] font-extrabold font-display text-white text-center tracking-tight mb-3 [text-wrap:balance]">
          Plataforma oficial do clube Atlético GO
        </h1>

        {/* Descrição */}
        <p className="text-sm leading-relaxed text-slate-300/90 text-center max-w-[400px] mb-7">
          Acesse sua conta ou crie seu cadastro para treinar inglês nos 23 módulos interativos com acompanhamento de desempenho e proteção de sessão.
        </p>

        {/* Card Branco de Login / Cadastro */}
        <div className="w-full bg-white rounded-[28px] shadow-2xl shadow-black/50 border-b-4 border-[#dc141c] p-6 sm:p-7">
          {/* Tabs Segmented Control */}
          <div
            role="tablist"
            aria-label="Modo de acesso"
            className="grid grid-cols-2 gap-1.5 bg-slate-100 p-1.5 rounded-2xl mb-6"
          >
            <button
              type="button"
              role="tab"
              aria-selected={authTab === 'login'}
              id="tab-auth-login"
              onClick={() => handleTabChange('login')}
              className={`py-2.5 px-4 text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                authTab === 'login'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Entrar
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={authTab === 'register'}
              id="tab-auth-register"
              onClick={() => handleTabChange('register')}
              className={`py-2.5 px-4 text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                authTab === 'register'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Criar Conta
            </button>
          </div>

          {/* Alertas de Erro ou Sucesso */}
          {errorMessage && (
            <div
              role="alert"
              className="mb-4 flex items-start gap-2.5 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-xs font-semibold"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {infoMessage && (
            <div
              role="status"
              className="mb-4 flex items-start gap-2.5 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold"
            >
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
              <span>{infoMessage}</span>
            </div>
          )}

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {authTab === 'register' && (
              <div>
                <label
                  htmlFor="auth-full-name"
                  className="block text-sm font-bold text-slate-900 mb-1.5"
                >
                  Nome Completo
                </label>
                <input
                  id="auth-full-name"
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#dc141c]/30 focus:border-[#dc141c] transition-colors"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="auth-email"
                className="block text-sm font-bold text-slate-900 mb-1.5"
              >
                E-mail
              </label>
              <input
                id="auth-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="atleta@atleticogoianiense.com.br"
                required
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#dc141c]/30 focus:border-[#dc141c] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="auth-password"
                className="block text-sm font-bold text-slate-900 mb-1.5"
              >
                Senha (mínimo 6 caracteres)
              </label>
              <div className="relative">
                <input
                  id="auth-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete={authTab === 'register' ? 'new-password' : 'current-password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••"
                  minLength={6}
                  required
                  className="w-full px-4 py-3 pr-11 rounded-2xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#dc141c]/30 focus:border-[#dc141c] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              id="btn-auth-submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-[#d61a21] hover:bg-[#b8141b] active:scale-[0.99] disabled:opacity-70 text-white text-sm font-extrabold uppercase tracking-wider shadow-lg shadow-red-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processando...</span>
                </>
              ) : authTab === 'register' ? (
                <span>CRIAR CONTA E ENTRAR</span>
              ) : (
                <span>ENTRAR</span>
              )}
            </button>
          </form>

          {/* Divisor e Accordion Supabase Opcional */}
          <div className="mt-6 pt-4 border-t border-slate-100">
            <button
              type="button"
              id="btn-toggle-supabase"
              onClick={() => setIsSupabaseOpen((prev) => !prev)}
              aria-expanded={isSupabaseOpen}
              className="w-full flex items-center justify-between text-xs font-semibold text-slate-600 hover:text-slate-900 py-1.5 transition-colors cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Database className="w-4 h-4 text-slate-500" />
                <span>Configurar Supabase (opcional)</span>
                {isSupabaseActive && (
                  <span className="text-[11px] font-bold text-emerald-700">· Ativo</span>
                )}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  isSupabaseOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isSupabaseOpen && (
              <div className="mt-3 pt-3 border-t border-slate-100 space-y-3">
                <p className="text-xs text-slate-500 leading-relaxed">
                  Opcionalmente conecte seu projeto Supabase Auth. Sem configuração, a plataforma utiliza sessão protegida nativa.
                </p>
                <div>
                  <label
                    htmlFor="supabase-url"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Supabase Project URL
                  </label>
                  <input
                    id="supabase-url"
                    type="url"
                    value={supabaseUrl}
                    onChange={(e) => setSupabaseUrl(e.target.value)}
                    placeholder="https://seu-projeto.supabase.co"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="supabase-anon-key"
                    className="block text-xs font-bold text-slate-700 mb-1"
                  >
                    Supabase Anon Key
                  </label>
                  <input
                    id="supabase-anon-key"
                    type="password"
                    value={supabaseKey}
                    onChange={(e) => setSupabaseKey(e.target.value)}
                    placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={handleSaveSupabase}
                    className="flex-1 py-2 px-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Salvar Conexão
                  </button>
                  {isSupabaseActive && (
                    <button
                      type="button"
                      onClick={handleClearSupabase}
                      className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      Desativar
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rodapé de Sessão Protegida */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-400">
          <Lock className="w-3.5 h-3.5 text-[#ef4444]" />
          <span>Sessão protegida · Atlético Clube Goianiense</span>
        </div>
      </div>
    </div>
  );
};
