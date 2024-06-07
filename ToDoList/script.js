// Event listener to load tasks from local storage when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => createTaskElement(task));
}

function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value;
    if (task) {
        createTaskElement(task);
        saveTask(task);
        // The input field is cleared after adding the task
        input.value = ''; 
    }
}

function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function createTaskElement(task) {
    const list = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        li.remove();
        deleteTask(task);
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        const newTask = prompt('Edit Task', task);
        if (newTask) {
            li.textContent = newTask;
            li.appendChild(deleteButton); // Re-append buttons to maintain order
            li.appendChild(editButton);
            editTask(task, newTask);
        }
    };
    // Append the buttons to the list item
    li.appendChild(deleteButton);
    li.appendChild(editButton);
    list.appendChild(li);
}

function deleteTask(taskToDelete) {
    // Retrieve tasks from local storage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    // Filter out the task to be deleted
    tasks = tasks.filter(task => task !== taskToDelete);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function editTask(oldTask, newTask) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    // Find the index of the task to be replaced
    const taskIndex = tasks.indexOf(oldTask);
    tasks[taskIndex] = newTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
