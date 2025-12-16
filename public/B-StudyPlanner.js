/* =========================================================
   B-StudyPlanner.js (Used on: 2-ProjectStudyPlanner.html)
   
   PURPOSE:
   This file manages the Study Planner functionality, allowing
   users to add, edit, and delete study tasks. All tasks are
   saved to localStorage so they persist even after page refresh.
   
   FEATURES:
   1) Add new study tasks
   2) Edit existing tasks
   3) Delete tasks with confirmation
   4) Automatic localStorage persistence
   5) Dark mode toggle with persistence
   
   HOW IT WORKS:
   - Tasks are stored in an array and saved to localStorage
   - When page loads, tasks are retrieved from localStorage
   - Any changes (add/edit/delete) automatically save to localStorage
   - Users can press Enter key or click button to add tasks
========================================================= */

// ===== GLOBAL VARIABLES =====
// Array to hold all study tasks in memory
let tasks = [];

// ===== LOAD TASKS FROM LOCALSTORAGE =====
// This function runs when the page loads to retrieve saved tasks
function loadTasks() {
    // Get the stored tasks from localStorage (returns null if nothing saved)
    const storedTasks = localStorage.getItem('studyTasks');
    
    // If tasks exist in localStorage
    if(storedTasks) {
        // Parse the JSON string back into an array
        tasks = JSON.parse(storedTasks);
        // Display the tasks on the page
        renderTasks();
    }
}

// ===== SAVE TASKS TO LOCALSTORAGE =====
// This function saves the current tasks array to localStorage
// Called after every add, edit, or delete operation
function saveTasks() {
    // Convert the tasks array to a JSON string and save it
    localStorage.setItem('studyTasks', JSON.stringify(tasks));
}

// ===== RENDER ALL TASKS TO THE PAGE =====
// This function displays all tasks in the task list
function renderTasks() {
    // Get the <ul> element where tasks will be displayed
    const taskList = document.getElementById('task-list');
    
    // Clear existing content
    taskList.innerHTML = '';
    
    // Loop through each task and create HTML elements
    tasks.forEach((task, i) => {
        // Create a new list item for each task
        const li = document.createElement('li');
        
        // Set the HTML content with task text and buttons
        // The index (i) is passed to edit/delete functions
        li.innerHTML = `
            <span class="task-text">${task}</span>
            <button class="edit-btn" onclick="editTask(${i})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
        `;
        
        // Add the list item to the task list
        taskList.appendChild(li);
    });
}

// ===== ADD NEW TASK =====
// This function adds a new task from the input field
function addTask() {
    // Get the input element
    const taskInput = document.getElementById('task-input');
    
    // Get the text and remove extra whitespace
    const text = taskInput.value.trim();
    
    // Only add if text is not empty
    if(text) {
        // Add the task to the array
        tasks.push(text);
        
        // Clear the input field
        taskInput.value = '';
        
        // Save to localStorage
        saveTasks();
        
        // Update the display
        renderTasks();
    }
}

// ===== EDIT EXISTING TASK =====
// This function allows editing a task at a specific index
// @param index - The position of the task in the array
function editTask(index) {
    // Show a prompt with the current task text
    const newTask = prompt('Edit task:', tasks[index]);
    
    // If user didn't cancel and entered text
    if(newTask !== null && newTask.trim()) {
        // Update the task in the array
        tasks[index] = newTask.trim();
        
        // Save changes to localStorage
        saveTasks();
        
        // Update the display
        renderTasks();
    }
}

// ===== DELETE TASK =====
// This function deletes a task at a specific index
// @param index - The position of the task in the array
function deleteTask(index) {
    // Ask for confirmation before deleting
    if(confirm('Are you sure you want to delete this task?')) {
        // Remove the task from the array
        // splice(index, 1) removes 1 item at the given index
        tasks.splice(index, 1);
        
        // Save changes to localStorage
        saveTasks();
        
        // Update the display
        renderTasks();
    }
}

// ===== DARK MODE FUNCTIONALITY =====
// Get the dark mode toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Apply the saved theme preference when page loads
function applySavedTheme() {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // If dark mode was previously selected
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Add click event listener to theme toggle button
if(themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the dark-mode class on body
        document.body.classList.toggle('dark-mode');
        
        // Save the preference to localStorage
        if(document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

// ===== INITIALIZATION =====
// This code runs when the page finishes loading
document.addEventListener('DOMContentLoaded', () => {
    // Apply saved theme preference
    applySavedTheme();
    
    // Load saved tasks from localStorage
    loadTasks();
    
    // Set up event listeners for adding tasks
    const addBtn = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    
    // Add task when button is clicked
    if(addBtn) addBtn.addEventListener('click', addTask);
    
    // Add task when Enter key is pressed in input field
    if(taskInput) {
        taskInput.addEventListener('keypress', e => {
            if(e.key === 'Enter') addTask();
        });
    }
});
