let addTodo = document.getElementById('addTaskButton');

let listTasks = document.getElementById('list-tasks');
let inputField = document.getElementById('input-field');



function addTask(){

    const task = inputField.value;
    if (task){
        createElementTask(task);
        inputField.value = '';
    }
    else{
        alert("Plesea write a task you want to do.");
    }
}

addTodo.addEventListener('click',addTask)


function createElementTask(task){
    const liTask = document.createElement('li');
    liTask.className = "task__content";
    listTasks.appendChild(liTask);

    const pTask = document.createElement('p');
    pTask.innerText = task;
    pTask.className = "name__task";
    liTask.appendChild(pTask);

    const divAction = document.createElement('div');
    divAction.className = "action__task";
    liTask.appendChild(divAction);

    const inputCheckbox = document.createElement('input');
    inputCheckbox.className = "checkbox__task";
    inputCheckbox.setAttribute("type", "checkbox");
    divAction.appendChild(inputCheckbox);

    const iconDelete = document.createElement('i');
    iconDelete.classList.add('bx', 'bxs-trash', 'bx-md');
    divAction.appendChild(iconDelete);
}
