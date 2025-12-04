import { createClient } from '@supabase/supabase-js';

// Access environment variables safely
// In Vite, these are exposed via import.meta.env
const env = (import.meta as any).env;

const supabaseUrl = env?.VITE_SUPABASE_URL;
const supabaseAnonKey = env?.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase credentials missing! Falling back to placeholder.\n' +
    'Make sure you have a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.'
  );
}

// Initialize Supabase client
// If keys are missing, we use placeholders to prevent the app from crashing immediately,
// allowing the UI to render (though data fetching will fail gracefully).
export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder'
);