// Array to hold tasks
let tasks = [];

// Load tasks from localStorage
function loadTasks() {
    const storedTasks = localStorage.getItem('studyTasks');
    if(storedTasks) {
        tasks = JSON.parse(storedTasks);
        renderTasks();
    }
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('studyTasks', JSON.stringify(tasks));
}

// Render all tasks
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${task}</span>
            <button class="edit-btn" onclick="editTask(${i})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

// Add task from input box
function addTask() {
    const taskInput = document.getElementById('task-input');
    const text = taskInput.value.trim();
    if(text) {
        tasks.push(text);
        taskInput.value = '';
        saveTasks();
        renderTasks();
    }
}

// Edit task at given index
function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    if(newTask !== null && newTask.trim()) {
        tasks[index] = newTask.trim();
        saveTasks();
        renderTasks();
    }
}

// Delete task at given index
function deleteTask(index) {
    if(confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
}

// Dark mode toggle with persistence
const themeToggleBtn = document.getElementById('theme-toggle');

function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if(document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    applySavedTheme();          // Apply saved theme on load
    loadTasks();                // Load saved tasks
    // Add event listeners for adding tasks
    const addBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    if(addBtn) addBtn.addEventListener('click', addTask);
    if(taskInput) {
        taskInput.addEventListener('keypress', e => {
            if(e.key === 'Enter') addTask();
        });
    }
});