// Main application logic
let currentUser = null;

async function loadAnimeGrid() {
    const grid = document.getElementById('anime-grid');
    if (!grid) return;
    
    grid.innerHTML = '<p class="col-span-full text-center py-12">Loading anime...</p>';
    
    const animes = await api.getTopAnime();
    
    grid.innerHTML = '';
    
    animes.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'anime-card bg-gray-900 rounded-2xl overflow-hidden cursor-pointer';
        card.innerHTML = `
            <div class="relative">
                <img src="${anime.images.jpg.large_image_url || anime.images.jpg.image_url}" 
                     alt="${anime.title}" 
                     class="card-img w-full h-64 object-cover">
                <div class="absolute top-2 right-2 bg-black/70 text-xs px-2 py-1 rounded">
                    ${anime.score ? anime.score : 'N/A'}
                </div>
            </div>
            <div class="p-4">
                <h3 class="font-semibold line-clamp-2 mb-1">${anime.title}</h3>
                <p class="text-gray-400 text-sm">${anime.type} • ${anime.year || 'N/A'}</p>
            </div>
        `;
        card.onclick = () => window.location.href = `anime.html?id=${anime.mal_id}`;
        grid.appendChild(card);
    });
}

async function loadWatchlist() {
    const grid = document.getElementById('watchlist-grid');
    if (!grid) return;
    // TODO: Fetch from Supabase user watchlist
    grid.innerHTML = '<p class="col-span-full text-center py-12 text-gray-400">Your watchlist is empty. Add some anime from home!</p>';
}

// Simple auth placeholders
function login() {
    alert("Supabase Auth coming soon! Connect your Supabase keys.");
}

function logout() {
    alert("Logged out");
    window.location.reload();
}

function toggleSearch() {
    const container = document.getElementById('search-container');
    if (container) container.classList.toggle('hidden');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadAnimeGrid();
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    const grid = document.getElementById('anime-grid');
                    grid.innerHTML = '<p class="col-span-full text-center py-12">Searching...</p>';
                    
                    const results = await api.searchAnime(query);
                    // Render results similarly...
                    console.log('Search results:', results);
                }
            }
        });
    }
});