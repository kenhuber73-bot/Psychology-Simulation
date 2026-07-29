const SUPABASE_URL = 'https://wpmgniolethhnfrvpqyk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_cbpSvG6xBhZc-IUzl1j56A_q2XjVTVM';

// Creates a shared client other pages will use as `sb`
window.sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
