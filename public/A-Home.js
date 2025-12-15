// Array of motivational quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "You miss 100% of the shots you don't take. – Wayne Gretzky",
    "The best way to predict the future is to create it. – Peter Drucker"
];

// Update real-time clock every second
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const clockEl = document.getElementById('clock');
    if(clockEl) {
        clockEl.textContent = timeString;
    }
}

// Display a random motivational quote on page load
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteEl = document.getElementById('motivational-quote');
    if(quoteEl) {
        quoteEl.textContent = quotes[randomIndex];
    }
}

// Dark mode toggle with persistence
const themeToggleBtn = document.getElementById('theme-toggle');

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();       // Apply saved mode before other scripts
    updateClock();           // Show clock immediately
    setInterval(updateClock, 1000);  // Keep clock ticking every second
    displayRandomQuote();    // Show motivational quote
});