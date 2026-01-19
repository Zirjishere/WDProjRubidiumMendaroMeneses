/* =========================================================
   DARK MODE TOGGLE
========================================================= */

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});

/* =========================================================
   LOAD USER DATA AND GOALS
========================================================= */

let dailyGoals = [];

window.addEventListener('DOMContentLoaded', () => {
  const userData = localStorage.getItem('studyMateUser');
  
  if (!userData) {
    // No profile found
    document.getElementById('no-profile').style.display = 'flex';
    document.getElementById('goals-section').style.display = 'none';
  } else {
    // Profile exists
    document.getElementById('no-profile').style.display = 'none';
    document.getElementById('goals-section').style.display = 'block';
    
    const user = JSON.parse(userData);
    displayUserGoals(user);
    
    // Load daily goals from localStorage
    loadDailyGoals();
  }
});

/* =========================================================
   DISPLAY USER GOALS
========================================================= */

function displayUserGoals(user) {
  // Display user name
  document.getElementById('user-name').textContent = user.name;
  
  // Calculate and display days active
  const daysActive = calculateDaysActive(user.joinDate);
  document.getElementById('days-active').textContent = daysActive;
  
  // Set motivational message based on days active
  const motivationalMessage = getMotivationalMessage(daysActive);
  document.getElementById('motivational-message').textContent = motivationalMessage;
  
  // Display main study goals
  document.getElementById('main-goals').textContent = user.goals;
  
  // Display stats
  document.getElementById('study-hours-goal').textContent = `${user.studyHours} hours/day`;
  document.getElementById('motivation-level').textContent = `${user.motivation}/10 🔥`;
  document.getElementById('subjects-count').textContent = `${user.subjects.length} subjects`;
  
  // Display subjects
  displaySubjects(user.subjects);
}

/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function calculateDaysActive(joinDate) {
  const start = new Date(joinDate);
  const today = new Date();
  const diffTime = Math.abs(today - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function getMotivationalMessage(days) {
  if (days === 0 || days === 1) {
    return "Welcome to your journey! Let's make today count! 🚀";
  } else if (days < 7) {
    return "Great start! Keep the momentum going! 💪";
  } else if (days < 30) {
    return "You're building a strong habit! Keep it up! 🌟";
  } else if (days < 90) {
    return "Amazing progress! You're on fire! 🔥";
  } else {
    return "You're a StudyMate champion! Incredible dedication! 🏆";
  }
}

function displaySubjects(subjects) {
  const subjectsList = document.getElementById('subjects-list');
  subjectsList.innerHTML = '';
  
  const emojiMap = {
    'Mathematics': '📐',
    'Science': '🔬',
    'English': '📖',
    'History': '🏛️',
    'Computer Science': '💻',
    'Arts': '🎨',
    'Physical Education': '⚽',
    'Languages': '🌍'
  };
  
  subjects.forEach(subject => {
    const item = document.createElement('div');
    item.className = 'subject-item';
    item.textContent = `${emojiMap[subject] || '📚'} ${subject}`;
    subjectsList.appendChild(item);
  });
}

/* =========================================================
   DAILY GOALS CHECKLIST
========================================================= */

function loadDailyGoals() {
  const savedGoals = localStorage.getItem('dailyGoals');
  if (savedGoals) {
    dailyGoals = JSON.parse(savedGoals);
  } else {
    // Default goals
    dailyGoals = [
      { id: Date.now(), text: 'Review today\'s lessons', completed: false },
      { id: Date.now() + 1, text: 'Complete homework assignments', completed: false },
      { id: Date.now() + 2, text: 'Study for 2 hours', completed: false }
    ];
    saveDailyGoals();
  }
  renderGoalsList();
}

function saveDailyGoals() {
  localStorage.setItem('dailyGoals', JSON.stringify(dailyGoals));
  updateCompletedCount();
}

function renderGoalsList() {
  const checklist = document.getElementById('goals-checklist');
  checklist.innerHTML = '';
  
  if (dailyGoals.length === 0) {
    checklist.innerHTML = '<p style="text-align: center; color: var(--text-color); opacity: 0.6; padding: 20px;">No daily goals yet. Add one below!</p>';
  } else {
    dailyGoals.forEach(goal => {
      const goalItem = createGoalElement(goal);
      checklist.appendChild(goalItem);
    });
  }
  
  updateCompletedCount();
}

function createGoalElement(goal) {
  const div = document.createElement('div');
  div.className = `goal-item ${goal.completed ? 'completed' : ''}`;
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = goal.completed;
  checkbox.addEventListener('change', () => toggleGoal(goal.id));
  
  const span = document.createElement('span');
  span.textContent = goal.text;
  
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.addEventListener('click', () => deleteGoal(goal.id));
  
  div.appendChild(checkbox);
  div.appendChild(span);
  div.appendChild(deleteBtn);
  
  return div;
}

function toggleGoal(id) {
  const goal = dailyGoals.find(g => g.id === id);
  if (goal) {
    goal.completed = !goal.completed;
    saveDailyGoals();
    renderGoalsList();
  }
}

function deleteGoal(id) {
  dailyGoals = dailyGoals.filter(g => g.id !== id);
  saveDailyGoals();
  renderGoalsList();
}

function updateCompletedCount() {
  const completed = dailyGoals.filter(g => g.completed).length;
  const total = dailyGoals.length;
  document.getElementById('completed-goals').textContent = `${completed}/${total}`;
}

/* =========================================================
   ADD NEW GOAL
========================================================= */

document.getElementById('add-goal-btn').addEventListener('click', addNewGoal);

document.getElementById('new-goal-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addNewGoal();
  }
});

function addNewGoal() {
  const input = document.getElementById('new-goal-input');
  const text = input.value.trim();
  
  if (text === '') {
    alert('Please enter a goal!');
    return;
  }
  
  const newGoal = {
    id: Date.now(),
    text: text,
    completed: false
  };
  
  dailyGoals.push(newGoal);
  saveDailyGoals();
  renderGoalsList();
  
  input.value = '';
  input.focus();
}

/* =========================================================
   EDIT MAIN GOALS
========================================================= */

document.getElementById('edit-goals-btn').addEventListener('click', () => {
  const userData = localStorage.getItem('studyMateUser');
  if (userData) {
    const user = JSON.parse(userData);
    const newGoals = prompt('Edit your study goals:', user.goals);
    
    if (newGoals !== null && newGoals.trim() !== '') {
      user.goals = newGoals.trim();
      localStorage.setItem('studyMateUser', JSON.stringify(user));
      document.getElementById('main-goals').textContent = user.goals;
      alert('Goals updated successfully! ✅');
    }
  }
});
