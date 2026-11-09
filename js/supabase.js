// js/supabase.js
const SUPABASE_URL = 'https://srnzmdqlidilmobrftgn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1CV8wnD3SIis8DPBFV4HHA_nUnFcQbD';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
