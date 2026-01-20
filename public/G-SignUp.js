/* =========================================================
   DARK MODE TOGGLE
   - Handles theme switching between light and dark mode
   - Saves preference to localStorage
========================================================= */

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Update the theme icon based on current mode
function updateThemeIcon() {
  if (!themeToggle) return;
  const isDark = body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
}

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
}
updateThemeIcon();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Save theme preference
  const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
  updateThemeIcon();
});

/* =========================================================
   MOTIVATION LEVEL SLIDER
   - Updates the displayed value as user moves the slider
========================================================= */

const motivationSlider = document.getElementById('motivation');
const motivationValue = document.getElementById('motivationValue');

motivationSlider.addEventListener('input', (e) => {
  motivationValue.textContent = e.target.value;
});

/* =========================================================
   FORM SUBMISSION
   - Validates form data
   - Saves user data to localStorage
   - Redirects to loading screen then profile
========================================================= */

const signupForm = document.getElementById('signup-form');

// Set default date to today
const joinDateInput = document.getElementById('joinDate');
const today = new Date().toISOString().split('T')[0];
joinDateInput.value = today;
joinDateInput.max = today; // Prevent future dates

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(signupForm);
  
  // Get all selected subjects
  const subjects = [];
  const subjectCheckboxes = document.querySelectorAll('input[name="subjects"]:checked');
  subjectCheckboxes.forEach(checkbox => {
    subjects.push(checkbox.value);
  });
  
  // Validate at least one subject is selected
  if (subjects.length === 0) {
    alert('Please select at least one favorite subject!');
    return;
  }
  
  // Create user object
  const userData = {
    name: formData.get('name'),
    email: formData.get('email'),
    grade: formData.get('grade'),
    joinDate: formData.get('joinDate'),
    studyHours: formData.get('studyHours'),
    motivation: formData.get('motivation'),
    studyTime: formData.get('studyTime'),
    subjects: subjects,
    goals: formData.get('goals'),
    createdAt: new Date().toISOString()
  };
  
  // Save to localStorage
  localStorage.setItem('studyMateUser', JSON.stringify(userData));
  
  // Show success message
  alert('Profile created successfully! 🎉');
  
  // Redirect to home page with loading screen
  window.location.href = '../index.html';
});

/* =========================================================
   CHECK IF USER ALREADY EXISTS
   - If user data exists, show option to view profile
========================================================= */

window.addEventListener('DOMContentLoaded', () => {
  const existingUser = localStorage.getItem('studyMateUser');
  
  if (existingUser) {
    const userData = JSON.parse(existingUser);
    const formWrapper = document.querySelector('.form-wrapper');
    
    // Add a notice at the top
    const notice = document.createElement('div');
    notice.style.cssText = `
      background-color: #d4edda;
      border: 1px solid #c3e6cb;
      color: #155724;
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 20px;
      text-align: center;
    `;
    notice.innerHTML = `
      <strong>Welcome back, ${userData.name}! 👋</strong><br>
      <span style="font-size: 14px;">You already have a profile. You can update it below or <a href="7-MyProfile.html" style="color: #155724; font-weight: 600;">view your profile</a>.</span>
    `;
    
    formWrapper.insertBefore(notice, formWrapper.firstChild);
    
    // Pre-fill form with existing data
    document.getElementById('name').value = userData.name;
    document.getElementById('email').value = userData.email;
    document.getElementById('grade').value = userData.grade;
    document.getElementById('joinDate').value = userData.joinDate;
    document.getElementById('studyHours').value = userData.studyHours;
    document.getElementById('motivation').value = userData.motivation;
    document.getElementById('motivationValue').textContent = userData.motivation;
    
    // Select study time radio button
    const studyTimeRadio = document.querySelector(`input[name="studyTime"][value="${userData.studyTime}"]`);
    if (studyTimeRadio) {
      studyTimeRadio.checked = true;
    }
    
    // Select subject checkboxes
    userData.subjects.forEach(subject => {
      const checkbox = document.querySelector(`input[name="subjects"][value="${subject}"]`);
      if (checkbox) {
        checkbox.checked = true;
      }
    });
    
    document.getElementById('goals').value = userData.goals;
    
    // Change button text
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.textContent = 'Update My Profile 🔄';
  }
});
