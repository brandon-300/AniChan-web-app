const SUPABASE_URL = 'https://yphxpgssdqboufbgazwi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_eKe5liyr5Mc-mumZbXLuZw_Pt3-KVm0';
let supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
window.supabaseClient = supabase;