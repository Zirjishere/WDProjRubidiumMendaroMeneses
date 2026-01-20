/* =========================================================
   E-About.js (Used on: 5-ProjectAbout.html)
   Features:
   1) Dark mode toggle with localStorage persistence
   2) Flip card functionality for creator cards
========================================================= */

// ===== Dark mode toggle with persistence =====
const themeToggleBtn = document.getElementById("theme-toggle");

function updateThemeIcon() {
  if (!themeToggleBtn) return;
  const isDark = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
}

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  updateThemeIcon();
}

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    updateThemeIcon();
  });
}

// ===== Flip Card Functionality =====
function initFlipCards() {
  const flipCards = document.querySelectorAll(".flip-card");

  flipCards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    // Optional: Add keyboard accessibility
    card.setAttribute("tabindex", "0");
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
  initFlipCards();
});
