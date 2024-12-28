import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Please define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables in .env file'
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);