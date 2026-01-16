/* =========================================================
   C-Motivation.js (Used on: 3-ProjectMotivation.html)
   Features:
   1) Dark mode toggle with localStorage persistence
   2) Random motivational quote display
   3) Button to get new random quote
========================================================= */

// ===== Motivational Quotes Array =====
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Education is the most powerful weapon which you can use to change the world.",
    author: "Nelson Mandela"
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.",
    author: "Abigail Adams"
  },
  {
    text: "The beautiful thing about learning is that no one can take it away from you.",
    author: "B.B. King"
  },
  {
    text: "Study while others are sleeping; work while others are loafing; prepare while others are playing.",
    author: "William A. Ward"
  },
  {
    text: "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice.",
    author: "Brian Herbert"
  },
  {
    text: "Don't let what you cannot do interfere with what you can do.",
    author: "John Wooden"
  },
  {
    text: "Success is the sum of small efforts repeated day in and day out.",
    author: "Robert Collier"
  },
  {
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    text: "Strive for progress, not perfection.",
    author: "Unknown"
  },
  {
    text: "Your limitation—it's only your imagination.",
    author: "Unknown"
  }
];

// ===== Display Random Quote =====
function displayRandomQuote() {
  const quoteEl = document.getElementById("motivational-quote");
  const authorEl = document.getElementById("quote-author");
  
  if (!quoteEl || !authorEl) return;

  // Get random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  // Display quote with fade effect
  quoteEl.style.opacity = "0";
  authorEl.style.opacity = "0";

  setTimeout(() => {
    quoteEl.textContent = `"${selectedQuote.text}"`;
    authorEl.textContent = `— ${selectedQuote.author}`;
    
    quoteEl.style.opacity = "1";
    authorEl.style.opacity = "1";
  }, 300);
}

// ===== Dark mode toggle with persistence =====
const themeToggleBtn = document.getElementById("theme-toggle");

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
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

// ===== New Quote Button =====
const newQuoteBtn = document.getElementById("new-quote-btn");

if (newQuoteBtn) {
  newQuoteBtn.addEventListener("click", displayRandomQuote);
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  displayRandomQuote();
});
