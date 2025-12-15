const subjects = {
Math: {
notes:"",
summary:`Remainder Theorem, Factor Theorem, Descartes' Rule of Signs:
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
quiz:[
"Find remainder when f(x)=x^3-2x^2+x-5 divided by x-1.",
"Determine if x-2 is a factor of f(x)=x^3-4x^2+x+6.",
"Use Rational Root Theorem to find possible rational roots of f(x)=2x^3-3x^2+x-1."
]
},

Physics:{
notes:"",
summary:`Components Method of Vectors:
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
⟢ y = Vyt - 0.gt^2
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
quiz:[
"A projectile launched at 20 m/s at 30°. Find max height.",
"Two vectors A=5i+3j and B=-2i+4j. Find resultant using components.",
"A box rests on 30° incline. Calculate normal force."
]
},

Statistics:{
notes:"",
summary:`Random Variables:
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
- Probability Formumla:
⟢ P(X=k) = C(n,k) * p^k * q^(n-k)
- Mean & Variance:
⟢ Mean: μ = np
⟢ Variance: σ^2 = npq

Normal Distribution:
- Continuous probability distribution, symmetric bell-shaped curve.
- Standard Normal Distribution:
⟢ Mean (μ) = 0
⟢ Standard Deviation (σ) = 1
- Probability Density Function:
⟢ f(x) = (1/(σ√(2π))) * e^(-0.5((x-μ)/σ)^2)
- Z-Score:
⟢ Z = (X - μ) / σ
- Use Z-tables to find probabilities.
`,
quiz:[
"Coin flipped 5 times. Probability of exactly 3 heads?",
"Heights normal distribution mean 160cm, SD 10cm. Probability taller than 170cm?",
"Define a random variable for number of defective items in sample of 10."
]
},

Chemistry:{
notes:"",
summary:`Chemical Structures:
- Lewis Structures: Show valence electrons and bonding.
⟢ Steps:
1. Count total valence electrons.
2. Arrange atoms (central atom = least electronegative).
3. Connect atoms with single bonds, then place remaining electrons as lone pairs.
4. Use double/triple bonds if needed to satisfy octet rule.
- Octet Rule: Atoms tend to gain, lose, or share electrons to have 8 valence electrons.

Molecular Geometry & VBT:
- VSPER (Valence Shell Electron Pair Repulsion) Theory:
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
⟢ Use prefixes to indicate number of atoms (e.g., CO2 = Carbon dioxide
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
quiz:[
"Draw Lewis structure of H2O and NH3.",
"Balance: Fe + O2 → Fe2O3",
"Name compound: K2SO4"
]
},

Biology:{
notes:"",
summary:`Microscopy:
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
⟢ Transpotation of Substances:
1. Oxygen: Lungs → Body cells via hemoglobin.
2. Nutrients: Digested food → Body cells via bloodstream.
- In Plants:
⟢ Xylem: Transports water & minerals from roots to leaves.
⟢ Phloem: Transports food from leaves to other parts.
⟢ Factors affecting transport: Concentration gradient, pressure, transpiration rate
`,
quiz:[
"Identify tissue types in microscope slide.",
"Describe path of food through digestive system.",
"Explain oxygen transport in blood."
]
},

"Social Science":{
notes:"",
summary:`American Revolution (1775-1783):
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
quiz:[
"Explain causes of French Revolution.",
"Compare outcomes of American and French Revolutions.",
"Identify inventions of Industrial Revolution and impact."
]
},

"Computer Science":{
notes:"",
summary:`Arrays:
- Store multiple elements.
- Access by index.
- Looping and array operations (sum, max/min, sorting).
- Example: declare, push, pop, traverse.
`,
quiz:[
"Write program to sum elements in array.",
"Sort array [3,1,4,1,5] ascending.",
"Find max and min elements of array."
]
},

Filipino:{
notes:"",
summary:`Pangngalan, Pandiwa, Paksa, Tayutay, Sukat:
- Pangngalan: noun
- Pandiwa: verb
- Paksa: subject/topic
- Tayutay: figurative language
- Sukat: meter in poetry
`,
quiz:[
"Identify pangngalan in: 'Ang aso ay tumakbo sa parke.'",
"Piliin ang pandiwa: 'Kumain si Ana ng mangga.'",
"Ano ang paksa: 'Ang mga bata ay naglalaro sa likod-bahay.'"
]
},

English:{
notes:"",
summary:`Grammar & Literary Concepts:
- Nouns, verbs, adjectives, pronouns
- Theme, main idea, literary devices
- Example comprehension questions
`,
quiz:[
"Identify noun in: 'The cat sleeps on the mat.'",
"Underline verb: 'She runs every morning.'",
"What is theme in a story about friendship overcoming adversity?"
]
}
};

let currentSubject='Math';

Object.keys(subjects).forEach(sub=>{
const saved=localStorage.getItem('notes_'+sub);
if(saved) subjects[sub].notes=saved;
});

function loadSubject(name, event) {
  currentSubject = name;
  document.getElementById('subjectTitle').innerText = name;
  document.getElementById('notesArea').value = subjects[name].notes;
  document.getElementById('summaryBox').innerText = subjects[name].summary;
  refreshQuiz();

  document.querySelectorAll('.subject-item').forEach(item => item.classList.remove('active'));
  event.target.classList.add('active');
}


function saveNotes(){
const text=document.getElementById('notesArea').value;
subjects[currentSubject].notes=text;
localStorage.setItem('notes_'+currentSubject,text);
}

function toggleNotes(){
const box=document.getElementById('notesBox');
const btn=document.getElementById('toggleBtn');
box.classList.toggle('collapsed');
btn.innerText=box.classList.contains('collapsed')?'Expand':'Collapse';
}

function refreshQuiz(){
const quizArr=subjects[currentSubject].quiz;
const selected=[];
while(selected.length<3){
const rand=quizArr[Math.floor(Math.random()*quizArr.length)];
if(!selected.includes(rand)) selected.push(rand);
}
document.getElementById('quizList').innerHTML=selected.map(q=>`<li>${q}</li>`).join('');
}

function toggleDropdown(){
document.getElementById('menuItem').classList.toggle('show');
}

loadSubject(currentSubject,{target:document.querySelector('.subject-item.active')});
