const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

let tasks = [];

taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const taskTitle = document.getElementById('task-title').value;
    const taskDesc = document.getElementById('task-desc').value;
    const taskDate = document.getElementById('task-date').value;

    const task = {
        title: taskTitle,
        description: taskDesc,
        dueDate: taskDate
    };

    tasks.push(task);
    displayTasks();

    taskForm.reset();
});

function displayTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'task-item';

        li.innerHTML = `
            <div>
                <strong>${task.title}</strong> <br>
                <small>${task.description}</small> <br>
                <small>Due: ${task.dueDate}</small>
            </div>
            <div>
                <button onclick="editTask(${index})">Edit</button>
                <button onclick="deleteTask(${index})">Delete</button>
            </div>
        `;

        taskList.appendChild(li);
    });
}

function editTask(index) {
    const task = tasks[index];

    document.getElementById('task-title').value = task.title;
    document.getElementById('task-desc').value = task.description;
    document.getElementById('task-date').value = task.dueDate;

    tasks.splice(index, 1);
}

function deleteTask(index) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks.splice(index, 1);
        displayTasks();
    }
}
