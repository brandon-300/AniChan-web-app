// Supabase Client Configuration
const SUPABASE_URL = 'https://your-supabase-url.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';

let supabase;

async function initSupabase() {
    if (typeof supabaseClient !== 'undefined') {
        supabase = supabaseClient.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log('Supabase initialized');
    } else {
        console.error('Supabase client library not loaded. Add script tag.');
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', initSupabase);

// Export functions
window.supabase = () => supabase; // Simple global access for now