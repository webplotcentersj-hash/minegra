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
