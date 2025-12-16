/* =========================================================
   A-Home.js (Used on: 1-ProjectHome.html)
   Features:
   1) Dark mode toggle with localStorage persistence
   2) Real-time clock (#clock)
   3) Random motivational quote (#motivational-quote)
========================================================= */

// ===== Quotes for the Motivational Glimpse =====
const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "The best way to predict the future is to create it. – Peter Drucker"
];

// ===== Clock (updates every second) =====
function updateClock() {
  const clockEl = document.getElementById("clock");
  if (!clockEl) return;

  const now = new Date();
  clockEl.textContent = now.toLocaleTimeString();
}

// ===== Quote (random on load) =====
function displayRandomQuote() {
  const quoteEl = document.getElementById("motivational-quote");
  if (!quoteEl) return;

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}

// ===== Dark mode toggle with persistence =====
const themeToggleBtn = document.getElementById("theme-toggle");

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") document.body.classList.add("dark-mode");
  else document.body.classList.remove("dark-mode");
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  displayRandomQuote();
  updateClock();
  setInterval(updateClock, 1000);
});