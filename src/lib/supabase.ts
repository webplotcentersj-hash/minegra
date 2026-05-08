import { createClient } from '@supabase/supabase-js';

// Usaremos variables de entorno, pero por defecto no fallará si no están en desarrollo inicial
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Interfaz para la tabla de participantes
export interface Participant {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  score?: number;
  time_seconds?: number;
  created_at?: string;
}

export const SYSTEM_EMAIL = 'system@admin.reset';

export interface GameSession {
  name: string;
  created_at: string;
}

export const getCurrentSession = async (): Promise<GameSession | null> => {
  try {
    const { data, error } = await supabase
      .from('participants')
      .select('company, created_at')
      .eq('email', SYSTEM_EMAIL)
      .order('created_at', { ascending: false })
      .limit(1);
    
    if (error) throw error;
    if (data && data.length > 0) {
      return { name: data[0].company || 'Sesión Actual', created_at: data[0].created_at };
    }
  } catch (e) {
    console.error('Error fetching session:', e);
  }
  return null;
};

export const resetGameSession = async (sessionName: string) => {
  const { error } = await supabase.from('participants').insert([
    {
      name: 'SESSION_RESET',
      email: SYSTEM_EMAIL,
      phone: '0000000000',
      company: sessionName,
      score: -1,
      time_seconds: -1
    }
  ]);
  if (error) throw error;
};
