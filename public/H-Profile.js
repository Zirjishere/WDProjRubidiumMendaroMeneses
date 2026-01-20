/* =========================================================
   DARK MODE TOGGLE
========================================================= */

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Update the theme icon based on current mode
function updateThemeIcon() {
  if (!themeToggle) return;
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}
updateThemeIcon();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeIcon();
});

/* =========================================================
   LOAD USER PROFILE DATA
========================================================= */

window.addEventListener('DOMContentLoaded', () => {
  const userData = localStorage.getItem('studyMateUser');
  
  if (!userData) {
    // No profile found - show no profile message
    document.getElementById('no-profile').style.display = 'flex';
    document.getElementById('profile-section').style.display = 'none';
  } else {
    // Profile exists - show profile section
    document.getElementById('no-profile').style.display = 'none';
    document.getElementById('profile-section').style.display = 'block';
    
    // Parse user data
    const user = JSON.parse(userData);
    
    // Display user data
    displayUserProfile(user);
  }
});

/* =========================================================
   DISPLAY USER PROFILE
========================================================= */

function displayUserProfile(user) {
  // Welcome message
  document.getElementById('user-name').textContent = user.name;
  
  // Set greeting based on time of day
  const hour = new Date().getHours();
  let greeting = '';
  if (hour < 12) {
    greeting = 'Good morning! ☀️';
  } else if (hour < 18) {
    greeting = 'Good afternoon! 🌤️';
  } else {
    greeting = 'Good evening! 🌙';
  }
  document.getElementById('greeting-message').textContent = greeting + ' Ready to continue your learning journey?';
  
  // Profile details
  document.getElementById('profile-name').textContent = user.name;
  document.getElementById('profile-email').textContent = user.email;
  document.getElementById('profile-grade').textContent = formatGrade(user.grade);
  document.getElementById('profile-join-date').textContent = formatDate(user.joinDate);
  document.getElementById('profile-study-time').textContent = formatStudyTime(user.studyTime);
  document.getElementById('profile-study-hours').textContent = `${user.studyHours} hours/day`;
  document.getElementById('profile-motivation').textContent = `${user.motivation}/10 🔥`;
  
  // Calculate days active
  const daysActive = calculateDaysActive(user.joinDate);
  document.getElementById('profile-days-active').textContent = `${daysActive} days 📆`;
  
  // Display subjects
  displaySubjects(user.subjects);
  
  // Display goals
  document.getElementById('profile-goals').textContent = user.goals;
}

/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function formatGrade(grade) {
  if (grade === 'college') {
    return 'College Student';
  } else if (grade === 'other') {
    return 'Other';
  } else {
    return `Grade ${grade}`;
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function formatStudyTime(time) {
  const timeMap = {
    'morning': '🌅 Morning (6 AM - 12 PM)',
    'afternoon': '☀️ Afternoon (12 PM - 6 PM)',
    'evening': '🌆 Evening (6 PM - 12 AM)',
    'night': '🌙 Night (12 AM - 6 AM)'
  };
  return timeMap[time] || time;
}

function calculateDaysActive(joinDate) {
  const start = new Date(joinDate);
  const today = new Date();
  const diffTime = Math.abs(today - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

function displaySubjects(subjects) {
  const subjectsList = document.getElementById('subjects-list');
  subjectsList.innerHTML = '';
  
  // Subject emoji map
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
    const badge = document.createElement('div');
    badge.className = 'subject-badge';
    badge.textContent = `${emojiMap[subject] || '📚'} ${subject}`;
    subjectsList.appendChild(badge);
  });
}

/* =========================================================
   DELETE PROFILE
========================================================= */

document.getElementById('delete-profile').addEventListener('click', () => {
  const confirmDelete = confirm('Are you sure you want to delete your profile? This action cannot be undone.');
  
  if (confirmDelete) {
    // Remove user data from localStorage
    localStorage.removeItem('studyMateUser');
    
    // Show success message
    alert('Profile deleted successfully. You will be redirected to the sign-up page.');
    
    // Redirect to sign-up page
    window.location.href = '0-SignUp.html';
  }
});
