// Jikan API + Internal API helpers
const JIKAN_BASE = 'https://api.jikan.moe/v4';

async function searchAnime(query) {
    try {
        const res = await fetch(`${JIKAN_BASE}/anime?q=${encodeURIComponent(query)}&limit=24`);
        const data = await res.json();
        return data.data || [];
    } catch (e) {
        console.error('Search failed', e);
        return [];
    }
}

async function getTopAnime() {
    try {
        const res = await fetch(`${JIKAN_BASE}/top/anime?limit=24`);
        const data = await res.json();
        return data.data || [];
    } catch (e) {
        console.error(e);
        return [];
    }
}

async function getAnimeById(id) {
    try {
        const res = await fetch(`${JIKAN_BASE}/anime/${id}`);
        const data = await res.json();
        return data.data;
    } catch (e) {
        console.error(e);
        return null;
    }
}

window.api = {
    searchAnime,
    getTopAnime,
    getAnimeById
};