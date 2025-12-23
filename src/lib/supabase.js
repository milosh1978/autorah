import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  // This makes the error obvious in Vercel logs / browser console.
  console.warn(
    '[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. ' +
    'Add them in Vercel → Project → Settings → Environment Variables (and locally in a .env file).'
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');
