function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Create the task container
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    // Get the current task count
    const taskList = document.getElementById('taskList');
    const taskNumber = taskList.children.length + 1;

    // Create the task number
    const taskNumberSpan = document.createElement('span');
    taskNumberSpan.className = 'task-number';
    taskNumberSpan.textContent = `${taskNumber}.`;
    taskDiv.appendChild(taskNumberSpan);

    // Add task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskDiv.appendChild(taskSpan);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function () {
        taskDiv.remove();
        updateTaskNumbers(); // Update numbering after deletion
        updateEmptyListMessage();
    };
    taskDiv.appendChild(deleteButton);

    // Add the task to the task list
    taskList.appendChild(taskDiv);

    // Clear the input field
    taskInput.value = '';

    // Update the "Empty List" message
    updateEmptyListMessage();
}

function updateTaskNumbers() {
    const taskList = document.getElementById('taskList').children;
    for (let i = 0; i < taskList.length; i++) {
        const taskNumberSpan = taskList[i].querySelector('.task-number');
        taskNumberSpan.textContent = `${i + 1}.`;
    }
}

function updateEmptyListMessage() {
    const taskList = document.getElementById('taskList');
    const delMessage = document.getElementById('del');
    if (taskList.children.length === 0) {
        delMessage.textContent = 'Hurray!! there\'s no task left';
    } else {
        delMessage.textContent = '';
    }
}
