/* =========================================================
   D-Subjects.js (Used on: 4-ProjectSubjects.html)
   
   PURPOSE:
   This file manages the Subjects page functionality, allowing
   users to view different subjects, take notes, read summaries,
   and answer random quiz questions for each subject.
   
   FEATURES:
   1) Switch between 9 different subjects
   2) Write and save notes for each subject (localStorage)
   3) View subject summaries/reviews
   4) Generate random quiz questions
   5) Expand/collapse notes section
   6) Dark mode toggle with persistence
   
   HOW IT WORKS:
   - All subject data (summaries, quiz questions) stored in objects
   - Notes are saved to localStorage per subject
   - Quiz questions are randomly selected from a pool
   - Active subject is highlighted in sidebar
========================================================= */

// ===== DARK MODE TOGGLE =====
// Get the dark mode toggle button
const themeToggleBtn = document.getElementById("theme-toggle");

// Update the theme icon based on current mode
function updateThemeIcon() {
  if (!themeToggleBtn) return;
  const isDark = document.body.classList.contains("dark-mode");
  themeToggleBtn.textContent = isDark ? "☀️" : "🌙";
}

// Apply the saved theme preference when the page loads
function applySavedTheme() {
  // Check localStorage for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  
  // If dark mode was previously selected, apply it
  if (savedTheme === "dark") document.body.classList.add("dark-mode");
  else document.body.classList.remove("dark-mode");
  updateThemeIcon();
}

// Add click event listener to the theme toggle button
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    // Toggle the dark-mode class on the body
    document.body.classList.toggle("dark-mode");
    
    // Save the preference to localStorage
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    updateThemeIcon();
  });
}


// ===== SUBJECTS DATA STRUCTURE =====
// Object containing all subject information
// Each subject has: notes (user-written), summary (pre-written content), quiz (array of questions)
const subjects = {
  Math: {
    notes: "",
    summary: `Remainder Theorem, Factor Theorem, Descartes' Rule of Signs:
- Remainder Theorem: The remainder of f(x) divided by (x-a) is f(a).
- Factor Theorem: If f(a)=0, then (x-a) is a factor of f(x).
- Descartes' Rule of Signs: Determines possible number of positive and negative real roots.

Rational Root Theorem:
- Provides all possible rational roots of a polynomial.

End Behavior of Polynomials:
- Determines how the function behaves as x→±∞.

Sketching Graphs:
- Identify zeros, multiplicities, end behavior.

Square Root Functions:
- Domain x≥0, range y≥0.

Piecewise-Defined Functions:
- Function defined by multiple sub-functions over intervals.

Transformation of Functions:
- Translation, Reflection, Scaling, Sequences.

Inverse Functions & Graphs:
- Function must be one-to-one. Graph reflected over y=x.
`,
    quiz: [
      "Find remainder when f(x)=x^3-2x^2+x-5 divided by x-1.",
      "Determine if x-2 is a factor of f(x)=x^3-4x^2+x+6.",
      "Use Rational Root Theorem to find possible rational roots of f(x)=2x^3-3x^2+x-1."
    ]
  },

  Physics: {
    notes: "",
    summary: `Components Method of Vectors:
- Any vector can be broken into horizontal (x) and vertical (y) components.
⟢ Vx = Vcosθ
⟢ Vy = Vsinθ
- To add vectors:
1. Resolve each vector into components.
2. Sum all x-components and y-components separately.
⟢ Rx = ΣVx
3. Find the resultant vector magnitude and direction:
⟢ R = √(Rx^2 + Ry^2)
4. Find angle
⟢ θ = tan^(-1)(Ry/Rx)

Projectile Motion:
- Motion of an object under gravity, moving in a parabolic path.
- Horizontal motion: constant velocity.
⟢ x = Vxt
- Vertical motion: constant acceleration (gravity).
⟢ y = Vyt - 0.5gt^2
⟢ vy = Vyi - gt
- Key equations
⟢ Range: R = (V^2sin2θ)/g
⟢ Max Height: H = (V^2sin^2θ)/(2g)

Normal Force:
- Force perpendicular to surface.
- On a flat surface:
⟢ Fn = mg
- On an incline:
⟢ Fn = mgcosθ
- Acts opposite to component of weight perpendicular to surface.

Apparent Motion:
- Motion as observed from a moving frame of reference.
- Apparent velocity:
⟢ Vab = Vao - Vbo
- Explains why objects appear to move differently from different frames.
`,
    quiz: [
      "A projectile launched at 20 m/s at 30°. Find max height.",
      "Two vectors A=5i+3j and B=-2i+4j. Find resultant using components.",
      "A box rests on 30° incline. Calculate normal force."
    ]
  },

  Statistics: {
    notes: "",
    summary: `Random Variables:
- A random variable (X) is a variable whose value is determined by a random experiment.
- Types:
⟢ Discrete: countable outcomes (e.g., number of heads in coin tosses).
⟢ Continuous: infinite outcomes within a range (e.g., height, weight).
- Expected Value (Mean):
⟢ E(X) = Σ[x * P(x)] for discrete
⟢ E(X) = ∫ x * f(x) dx for continuous
- Variance & Standard Deviation:
⟢ Var(X) = E[(X - μ)^2] = Σ[(x - μ)^2 * P(x)]
⟢ SD(X) = √Var(X)

Binomial Distribution:
- Models number of successes in n independent Bernoulli trials.
- Conditions:
⟢ Fixed number of trials (n)
⟢ Each trial is independent
⟢ Two possible outcomes: success (p) and failure (q=1-p)
⟢ Probability of success (p) is constant
- Probability Formula:
⟢ P(X=k) = C(n,k) * p^k * q^(n-k)
- Mean & Variance:
⟢ Mean: μ = np
⟢ Variance: σ^2 = npq

Normal Distribution:
- Continuous probability distribution, symmetric bell-shaped curve.
- Standard Normal Distribution:
⟢ Mean (μ) = 0
⟢ Standard Deviation (σ) =1
- Probability Density Function:
⟢ f(x) = (1/(σ√(2π))) * e^(-0.5((x-μ)/σ)^2)
- Z-Score:
⟢ Z = (X - μ) / σ
- Use Z-tables to find probabilities.
`,
    quiz: [
      "Coin flipped 5 times. Probability of exactly 3 heads?",
      "Heights normal distribution mean 160cm, SD 10cm. Probability taller than 170cm?",
      "Define a random variable for number of defective items in sample of 10."
    ]
  },

  Chemistry: {
    notes: "",
    summary: `Chemical Structures:
- Lewis Structures: Show valence electrons and bonding.
⟢ Steps:
1. Count total valence electrons.
2. Arrange atoms (central atom = least electronegative).
3. Connect atoms with single bonds, then place remaining electrons as lone pairs.
4. Use double/triple bonds if needed to satisfy octet rule.
- Octet Rule: Atoms tend to gain, lose, or share electrons to have 8 valence electrons.

Molecular Geometry & VBT:
- VSEPR (Valence Shell Electron Pair Repulsion) Theory:
⟢ Electron pairs around central atom repel each other, determining shape.
⟢ Common Geometries:
1. Linear (180°)
2. Trigonal Planar (120°)
3. Tetrahedral (109.5°)
4. Trigonal Bipyramidal (90°, 120°)
5. Octahedral (90°)
- VBT (Valence Bond Theory):
⟢ Bonds form when atomic orbitals overlap.
⟢ Sigma (σ) bonds: head-on overlap.
⟢ Pi (π) bonds: side-on overlap.

Nomenclature:
- Ionic Compounds:
⟢ Metal + Non-metal
⟢ Use stock system if transition metals (e.g., FeCl3 = Iron(III) chloride).
- Covalent Compounds:
⟢ Non-metal + Non-metal
⟢ Use prefixes to indicate number of atoms (e.g., CO2 = Carbon dioxide)
- Acids:
⟢ HCl -> Hydrochloric acid (binary)
⟢ H2SO4 -> Sulfuric acid (oxyanion acid)

Writing & Balancing Equations:
- Steps:
1. Write unbalanced equation with correct formulas.
2. Count atoms of each element on both sides.
3. Adjust coefficients to balance atoms.
4. Check final counts.

Types of Reactions:
- Synthesis: A + B → AB
- Decomposition: AB → A + B
- Single Replacement: A + BC → AC + B
- Double Replacement: AB + CD → AD + CB
- Combustion: Hydrocarbon + O2 → CO2 + H2O
`,
    quiz: [
      "Draw Lewis structure of H2O and NH3.",
      "Balance: Fe + O2 → Fe2O3",
      "Name compound: K2SO4"
    ]
  },

  Biology: {
    notes: "",
    summary: `Microscopy:
- Microscope Parts & Functions:
⟢ Eyepiece: Magnifies image.
⟢ Objective Lenses: Different magnifications (4x, 10x, 40x).
⟢ Stage: Holds slide.
⟢ Diaphragm: Controls light.
⟢ Coarse/Fine Focus: Adjusts clarity.
- Magnification Formula:
⟢ Total Magnification = Eyepiece Magnification × Objective Magnification
- Resolving power: 
⟢ Ability to distinguish two close objects as separate.
- Types of Microscopes:
⟢ Light Microscope: Uses light, max mag ~1000x.
⟢ Electron Microscope: Uses electrons, max mag ~1,000,000x.

Animal and Plant Tissues:
- Animal Tissues:
⟢ Epithelial: Covers body surfaces.
⟢ Connective: Supports and binds (e.g., bone, blood).
⟢ Muscle: Movement (skeletal, cardiac, smooth).
⟢ Nervous: Transmits signals.
- Plant Tissues:
⟢ Meristematic: Growth regions.
⟢ Permanent/Simple: Parenchyma, Collenchyma, Sclerenchyma.
⟢ Permanent/Complex: Xylem (water transport), Phloem (food transport).

Nutrition & Digestion:
- Nutrition Types:
⟢ Autotrophic: Produce own food (photosynthesis).
⟢ Heterotrophic: Consume other organisms.
- Human Digestive System:
⟢ Mouth: Mechanical & chemical digestion (saliva).
⟢ Esophagus: Transports food to stomach.
⟢ Stomach: Protein digestion (pepsin, HCl).
⟢ Small Intestine: Nutrient absorption (enzymes from pancreas, bile from liver).
⟢ Large Intestine: Water absorption, feces formation.

Transport/Circulation:
- In Animals:
⟢ Circulatory System:
1. Heart: Pumps blood.
2. Blood Vessels: Arteries, veins, capillaries.
3. Blood: RBCs, WBCs, platelets, plasma.
⟢ Transportation of Substances:
1. Oxygen: Lungs → Body cells via hemoglobin.
2. Nutrients: Digested food → Body cells via bloodstream.
- In Plants:
⟢ Xylem: Transports water & minerals from roots to leaves.
⟢ Phloem: Transports food from leaves to other parts.
⟢ Factors affecting transport: Concentration gradient, pressure, transpiration rate
`,
    quiz: [
      "Identify tissue types in microscope slide.",
      "Describe path of food through digestive system.",
      "Explain oxygen transport in blood."
    ]
  },

  "Social Science": {
    notes: "",
    summary: `American Revolution (1775-1783):
- Colonists in North America rebelled against British rule.
- Key causes: taxation without representation, desire for self-governance.
- Outcome: Independence of USA, establishment of democratic government.

French Revolution (1789-1799):
- People in France overthrew monarchy due to inequality, financial crisis.
- Key causes: social inequality, enlightenment ideas, unfair taxation.
- Outcome: End of monarchy, rise of republic, spread of revolutionary ideas.

Industrial Revolution (18th-19th centuries):
- A period of major industrialization in 18th-19th centuries.
- Key inventions: steam engine, spinning jenny, power loom.
- Impact: Urbanization, economic growth, social changes.
`,
    quiz: [
      "Explain causes of French Revolution.",
      "Compare outcomes of American and French Revolutions.",
      "Identify inventions of Industrial Revolution and impact."
    ]
  },

  "Computer Science": {
    notes: "",
    summary: `Arrays:
- Store multiple elements.
- Access by index.
- Looping and array operations (sum, max/min, sorting).
- Example: declare, push, pop, traverse.
`,
    quiz: [
      "Write program to sum elements in array.",
      "Sort array [3,1,4,1,5] ascending.",
      "Find max and min elements of array."
    ]
  },

  Filipino: {
    notes: "",
    summary: `Pangngalan, Pandiwa, Paksa, Tayutay, Sukat:
- Pangngalan: noun
- Pandiwa: verb
- Paksa: subject/topic
- Tayutay: figurative language
- Sukat: meter in poetry
`,
    quiz: [
      "Identify pangngalan in: 'Ang aso ay tumakbo sa parke.'",
      "Piliin ang pandiwa: 'Kumain si Ana ng mangga.'",
      "Ano ang paksa: 'Ang mga bata ay naglalaro sa likod-bahay.'"
    ]
  },

  English: {
    notes: "",
    summary: `Grammar & Literary Concepts:
- Nouns, verbs, adjectives, pronouns
- Theme, main idea, literary devices
- Example comprehension questions
`,
    quiz: [
      "Identify noun in: 'The cat sleeps on the mat.'",
      "Underline verb: 'She runs every morning.'",
      "What is theme in a story about friendship overcoming adversity?"
    ]
  }
};


// ===== CURRENT SUBJECT TRACKER =====
// Keeps track of which subject is currently being viewed
let currentSubject = "Math";

// ===== LOAD SAVED NOTES FROM LOCALSTORAGE =====
// When page loads, retrieve any saved notes for each subject
// Loop through all subjects and check if notes exist in localStorage
Object.keys(subjects).forEach((sub) => {
  const saved = localStorage.getItem("notes_" + sub);
  // If notes exist, load them into the subjects object
  if (saved) subjects[sub].notes = saved;
});

// ===== LOAD SUBJECT FUNCTION =====
// This function is called when user clicks on a subject in the sidebar
// @param name - The name of the subject to load
// @param event - The click event (used to highlight active subject)
function loadSubject(name, event) {
  // Update the current subject
  currentSubject = name;

  // Update the page title to show current subject
  document.getElementById("subjectTitle").innerText = name;  
  // Load the saved notes for this subject into the textarea
  document.getElementById("notesArea").value = subjects[name].notes;  
  // Display the summary/review content for this subject
  document.getElementById("summaryBox").innerText = subjects[name].summary;

  // Generate new random quiz questions for this subject
  refreshQuiz();

  // Remove 'active' class from all subject items in sidebar
  document.querySelectorAll(".subject-item").forEach((item) => item.classList.remove("active"));  
  // Add 'active' class to the clicked subject item
  if (event && event.target) event.target.classList.add("active");
}

// ===== SAVE NOTES FUNCTION =====
// This function is called whenever user types in the notes textarea
// It automatically saves the notes to localStorage
function saveNotes() {
  // Get the current text from the notes textarea
  const text = document.getElementById("notesArea").value;  
  // Update the notes in the subjects object
  subjects[currentSubject].notes = text;  
  // Save to localStorage with a unique key for each subject
  localStorage.setItem("notes_" + currentSubject, text);
}

// ===== TOGGLE NOTES VISIBILITY =====
// This function expands or collapses the notes section
function toggleNotes() {
  // Get the notes box and toggle button elements
  const box = document.getElementById("notesBox");
  const btn = document.getElementById("toggleBtn");

  // Toggle the 'collapsed' class to show/hide notes
  box.classList.toggle("collapsed");
  
  // Update button text based on current state
  btn.innerText = box.classList.contains("collapsed") ? "Expand" : "Collapse";
}

// ===== REFRESH QUIZ FUNCTION =====
// This function generates 3 random quiz questions from the current subject's quiz pool
function refreshQuiz() {
  // Get the quiz questions array for current subject
  const quizArr = subjects[currentSubject].quiz;
  
  // Array to store selected questions (prevents duplicates)
  const selected = [];

  // Keep selecting random questions until we have 3 unique ones
  while (selected.length < 3 && selected.length < quizArr.length) {
    // Pick a random question from the quiz array
    const rand = quizArr[Math.floor(Math.random() * quizArr.length)];
    
    // Only add if not already selected (prevents duplicates)
    if (!selected.includes(rand)) selected.push(rand);
  }

  // Display the selected questions as list items
  document.getElementById("quizList").innerHTML =
    selected.map((q) => `<li>${q}</li>`).join("");
}

// ===== INITIALIZATION =====
// Apply saved theme when page loads
applySavedTheme();

// Load the initial subject (Math) and highlight it in the sidebar
// This ensures the page shows content when first loaded
loadSubject(currentSubject, { target: document.querySelector(".subject-item.active") });
