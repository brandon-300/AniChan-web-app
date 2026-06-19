// i18n.js - AniChan Multilingual Support (EN / JA)
const translations = {
    en: {
        home: "Home",
        watchlist: "Watchlist",
        chat: "Chat",
        profile: "Profile",
        login: "Login",
        // Add more as needed
    },
    ja: {
        home: "ホーム",
        watchlist: "ウォッチリスト",
        chat: "チャット",
        profile: "プロフィール",
        login: "ログイン",
    }
};

let currentLang = 'en';

function t(key) {
    return translations[currentLang][key] || key;
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ja' : 'en';
    document.documentElement.lang = currentLang;
    // Re-render texts if needed
    console.log(`Language switched to ${currentLang}`);
}