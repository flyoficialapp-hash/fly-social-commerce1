// js/supabase.js
const SUPABASE_URL = 'https://srnzmdqlidilmobrftgn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_1CV8wnD3SIis8DPBFV4HHA_nUnFcQbD';

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ✅ Helper: verifica se a conta está suspensa e expulsa para o login
async function verificarContaSuspensa() {
  try {
    const { data: { session } } = await supabaseClient.auth.getSession();
    if (!session) return false;
    const { data: profile } = await supabaseClient
      .from('profiles')
      .select('is_suspended')
      .eq('id', session.user.id)
      .single();
    if (profile && profile.is_suspended) {
      await supabaseClient.auth.signOut();
      window.location.href = 'index.html?suspended=1';
      return true;
    }
    return false;
  } catch (err) {
    console.warn('[auth] verificarContaSuspensa:', err);
    return false;
  }
}