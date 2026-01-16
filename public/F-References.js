/* =========================================================
   F-References.js (Used on: 6-ProjectReferences.html)
   
   PURPOSE:
   This file manages the References page functionality,
   specifically the dark mode toggle with localStorage persistence.
   
   FEATURES:
   1) Dark mode toggle with persistence
   
   HOW IT WORKS:
   - Checks localStorage for saved theme preference on page load
   - Applies dark mode class to body if previously selected
   - Saves theme preference when toggle button is clicked
========================================================= */

// ===== DARK MODE TOGGLE =====
// Get the dark mode toggle button
const themeToggleBtn = document.getElementById("theme-toggle");

// Apply the saved theme preference when page loads
function applySavedTheme() {
  // Check localStorage for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  
  // If dark mode was previously selected, apply it
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}

// Add click event listener to theme toggle button
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    // Toggle the dark-mode class on body
    document.body.classList.toggle("dark-mode");
    
    // Save the preference to localStorage
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });
}

// ===== INITIALIZATION =====
// This code runs when the page finishes loading
document.addEventListener("DOMContentLoaded", () => {
  // Apply saved theme preference
  applySavedTheme();
});
