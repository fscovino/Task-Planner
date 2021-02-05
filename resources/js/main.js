/***** Import Required Modules *****/
import {TaskManager} from './task.js';

/***** Map HTML Elements *****/
const taskTitle = document.querySelector('#task-name');
const taskDescription = document.querySelector('#description');
const taskAssign = document.querySelector('#assigned-to');
const taskDue = document.querySelector('#due-date');
const btnCreate = document.querySelector('#btn-create');
const taskList = document.querySelector('#task-list');

const errorName = document.querySelector('#error-name');
const errorDescription = document.querySelector('#error-description');
const errorAssign = document.querySelector('#error-assign');
const errorDate = document.querySelector('#error-date');

/***** Define Global Variables *****/
const taskManager = new TaskManager();

/***** Functions *****/

//Verify All fields before creating a task
function validateForm() {
    // Counter to count fields with errors
    let errorCounter = 0;

    // Task Title
    if (taskTitle.value.length < 3) {
        errorName.style.display = 'block';
        errorCounter += 1;
    } else {
        errorName.style.display = 'none';
    }

    // Task Description
    if (taskDescription.value.length < 3) {
        errorDescription.style.display = 'block';
        errorCounter += 1;
    } else {
        errorDescription.style.display = 'none';
    }

    // Task Assign To
    if (taskAssign.value.length < 2) {
        errorAssign.style.display = 'block';
        errorCounter += 1;
    } else {
        errorAssign.style.display = 'none';
    }

    // Task Due Date
    if (taskDue.value.length < 9) {
        errorDate.style.display = 'block';
        errorCounter += 1;
    } else {
        errorDate.style.display = 'none';
    }

    // If No errors, create task
    if (errorCounter === 0) {
        createTask();
    }
}


// Create a new Task
function createTask() {
    let task = taskManager.createTask();
    task._title = taskTitle.value;
    task._description = taskDescription.value;
    task._assignedTo = taskAssign.value;
    task._dueDate = taskDue.value;
    // Create task on webpage
    renderTask(task);
    // Clean all fields
    cleanFields();
    // Save Task List on local storage
    taskManager.saveTaskList();
}


// Render a task in the website
function renderTask(task) {
    const li = document.createElement('li');
    
    // Set status badge color and button done color
    let statusColor;
    let btnDoneColor = 'badge-success';
    switch(task._status) {
        case 'DONE':
            statusColor = 'badge-success';
            btnDoneColor = 'badge-light';
            break;
        case 'OVERDUE':
            statusColor = 'badge-danger';
            break;
        default:
            statusColor = 'badge-warning';
            break;
    }
    
    // Add data to the list element
    li.innerHTML = `
    <li class="list-group-item">
        <div id='${task._id}' class="task">
            <div class="task-top">
                <div><span class="task-title"'>${task._title}</span></div>
                <div><span class="badge badge-pill ${statusColor} task-status">${task._status}</span></div>
            </div>
        <div class="task-desc">
            <p>${task._description}</p>
        </div>
        <div class="task-bottom">
            <div><span class="task-assign">${task._assignedTo}</span></div>
            <div><a type='button' class="badge ${btnDoneColor} btn-done">Done</a></div>
            <div><a type='button' class="badge badge-danger btn-delete">Delete</a></div>
            <div><span class="task-date">Due Date: ${task._dueDate}</span></div>
        </div>
        </div>
    </li>`;
    // Add the new list item to the list
    taskList.appendChild(li);
}


// Render all tasks
function renderAllTasks() {
    // Remove all list childs first
    while  (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
    // Reden all tasks
    taskManager.getAllTaks().forEach(task => renderTask(task));
}


// Reset all fields
function cleanFields() {
    taskTitle.value = '';
    taskDescription.value = '';
    taskAssign.value = '';
    taskDue.value = '';
}


// Modify selected task
function updateTask(task) {
    // pending code
}


// Complete selected task
function completeTask(id) {
    taskManager.completeTask(parseInt(id));
    renderAllTasks();
}


// Delete selected task
function deleteTask(id) {
    taskManager.deleteTask(parseInt(id));
    renderAllTasks();
}


/***** Event Listeners *****/

btnCreate.addEventListener('click', validateForm);

// Load Task list stored on local memory
document.addEventListener("DOMContentLoaded", function() {
    // Get all tasks from local memory
    taskManager.loadTaskList();
    // Render all tasks on webpage
    renderAllTasks();
});


// Buttons DONE and DELETE from each task
taskList.addEventListener('click', (event) => {
    const task = event.target.parentElement.parentElement.parentElement;
    const id = task.attributes.id.value;
    const button = event.target.attributes.class;

    if (button.value.includes('btn-done')) {
        button.nodeValue = 'badge badge-light btn-done disabled';
        completeTask(id);
    }

    if (button.value.includes('btn-delete')) {
        deleteTask(id);
    }
});



// https://okiyitooo.github.io/catalyst-final-project-jwd/
// https://github.com/okiyitooo/catalyst-final-project-jwd