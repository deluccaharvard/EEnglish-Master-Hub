import { AuthUser, SupabaseConfig } from '../types';

const SESSION_USER_KEY = 'acg_auth_user';
const SESSION_TOKEN_KEY = 'acg_auth_token';
const SUPABASE_CONFIG_KEY = 'acg_supabase_config';
const LOCAL_FALLBACK_USERS_KEY = 'acg_local_users';

interface StoredLocalBrowserUser {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export function getSupabaseConfig(): SupabaseConfig | null {
  try {
    const raw = localStorage.getItem(SUPABASE_CONFIG_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SupabaseConfig;
    if (parsed?.url?.trim() && parsed?.anonKey?.trim()) {
      return {
        url: parsed.url.trim().replace(/\/+$/, ''),
        anonKey: parsed.anonKey.trim(),
      };
    }
    return null;
  } catch {
    return null;
  }
}

export function saveSupabaseConfig(config: SupabaseConfig | null): void {
  if (!config || !config.url.trim() || !config.anonKey.trim()) {
    localStorage.removeItem(SUPABASE_CONFIG_KEY);
    return;
  }
  localStorage.setItem(
    SUPABASE_CONFIG_KEY,
    JSON.stringify({
      url: config.url.trim().replace(/\/+$/, ''),
      anonKey: config.anonKey.trim(),
    })
  );
}

export function getStoredSession(): { user: AuthUser; token: string } | null {
  try {
    const rawUser = localStorage.getItem(SESSION_USER_KEY);
    const token = localStorage.getItem(SESSION_TOKEN_KEY);
    if (!rawUser || !token) return null;
    const user = JSON.parse(rawUser) as AuthUser;
    if (!user?.id || !user?.email) return null;
    return { user, token };
  } catch {
    return null;
  }
}

export function persistSession(user: AuthUser, token: string): void {
  localStorage.setItem(SESSION_USER_KEY, JSON.stringify(user));
  localStorage.setItem(SESSION_TOKEN_KEY, token);
}

export function clearSession(): void {
  localStorage.removeItem(SESSION_USER_KEY);
  localStorage.removeItem(SESSION_TOKEN_KEY);
}

function getBrowserUsers(): StoredLocalBrowserUser[] {
  try {
    const raw = localStorage.getItem(LOCAL_FALLBACK_USERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveBrowserUsers(users: StoredLocalBrowserUser[]): void {
  localStorage.setItem(LOCAL_FALLBACK_USERS_KEY, JSON.stringify(users));
}

export async function loginUser(
  email: string,
  password: string
): Promise<{ user: AuthUser; token: string }> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    throw new Error('Informe um e-mail válido.');
  }
  if (password.length < 6) {
    throw new Error('A senha deve ter no mínimo 6 caracteres.');
  }

  const supabase = getSupabaseConfig();
  if (supabase) {
    const response = await fetch(`${supabase.url}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabase.anonKey,
      },
      body: JSON.stringify({
        email: normalizedEmail,
        password,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(
        data?.error_description || data?.msg || data?.message || 'E-mail ou senha inválidos no Supabase.'
      );
    }

    const supaUser = data.user || {};
    const user: AuthUser = {
      id: supaUser.id || `supa-${Date.now()}`,
      name:
        supaUser.user_metadata?.full_name ||
        supaUser.user_metadata?.name ||
        normalizedEmail.split('@')[0],
      email: supaUser.email || normalizedEmail,
      provider: 'supabase',
      createdAt: supaUser.created_at || new Date().toISOString(),
    };
    const token = data.access_token || `supa-token-${Date.now()}`;
    persistSession(user, token);
    return { user, token };
  }

  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: normalizedEmail, password }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'E-mail ou senha inválidos.');
    }
    persistSession(data.user, data.token);
    return { user: data.user, token: data.token };
  } catch (err: any) {
    if (err?.message && err.message !== 'Failed to fetch') {
      throw err;
    }
    const localUsers = getBrowserUsers();
    const matched = localUsers.find(
      (u) => u.email === normalizedEmail && u.password === password
    );
    if (!matched) {
      throw new Error('E-mail ou senha inválidos.');
    }
    const user: AuthUser = {
      id: matched.id,
      name: matched.name,
      email: matched.email,
      provider: 'local',
      createdAt: matched.createdAt,
    };
    const token = `local-${matched.id}`;
    persistSession(user, token);
    return { user, token };
  }
}

export async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<{ user: AuthUser; token: string }> {
  const trimmedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  if (trimmedName.length < 2) {
    throw new Error('Informe seu nome completo.');
  }
  if (!normalizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    throw new Error('Informe um e-mail válido.');
  }
  if (password.length < 6) {
    throw new Error('A senha deve ter no mínimo 6 caracteres.');
  }

  const supabase = getSupabaseConfig();
  if (supabase) {
    const response = await fetch(`${supabase.url}/auth/v1/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabase.anonKey,
      },
      body: JSON.stringify({
        email: normalizedEmail,
        password,
        data: { full_name: trimmedName },
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(
        data?.error_description || data?.msg || data?.message || 'Não foi possível criar conta no Supabase.'
      );
    }

    if (!data.access_token) {
      throw new Error(
        'Conta criada no Supabase! Verifique seu e-mail para confirmar o cadastro antes de entrar.'
      );
    }

    const supaUser = data.user || {};
    const user: AuthUser = {
      id: supaUser.id || `supa-${Date.now()}`,
      name: trimmedName,
      email: supaUser.email || normalizedEmail,
      provider: 'supabase',
      createdAt: supaUser.created_at || new Date().toISOString(),
    };
    const token = data.access_token;
    persistSession(user, token);
    return { user, token };
  }

  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: trimmedName, email: normalizedEmail, password }),
    });
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Não foi possível criar a conta.');
    }
    persistSession(data.user, data.token);
    return { user: data.user, token: data.token };
  } catch (err: any) {
    if (err?.message && err.message !== 'Failed to fetch') {
      throw err;
    }
    const localUsers = getBrowserUsers();
    if (localUsers.some((u) => u.email === normalizedEmail)) {
      throw new Error('Este e-mail já está cadastrado. Faça login na aba Entrar.');
    }
    const newRecord: StoredLocalBrowserUser = {
      id: `local-${Date.now()}`,
      name: trimmedName,
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString(),
    };
    localUsers.push(newRecord);
    saveBrowserUsers(localUsers);
    const user: AuthUser = {
      id: newRecord.id,
      name: newRecord.name,
      email: newRecord.email,
      provider: 'local',
      createdAt: newRecord.createdAt,
    };
    const token = `local-${newRecord.id}`;
    persistSession(user, token);
    return { user, token };
  }
}
