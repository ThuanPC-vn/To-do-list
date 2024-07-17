let addTodo = document.getElementById('addTaskButton');

let listTasks = document.getElementById('list-tasks');
let inputField = document.getElementById('input-field');



function addTask(){

    const task = inputField.value;
    if (task){
        createElementTask(task);
        inputField.value = '';
        saveTask();
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
    pTask.textContent = task;
    pTask.className = "name__task";
    liTask.appendChild(pTask);

    const divAction = document.createElement('div');
    divAction.className = "action__task";
    liTask.appendChild(divAction);

    const iconCheckbox = document.createElement('i');
    iconCheckbox.classList.add('bx', 'bx-checkbox-square', 'bx-md', 'bx__noCheck');
    iconCheckbox.setAttribute("id", "iNoCheck")
    divAction.appendChild(iconCheckbox);

    const iconDelete = document.createElement('i');
    iconDelete.classList.add('bx', 'bxs-trash', 'bx-sm', 'bx__trash');
    divAction.appendChild(iconDelete);

    iconCheckbox.addEventListener('click',() => {
        if (iconCheckbox.id == "iNoCheck"){
            pTask.style.textDecoration = "line-through";
            pTask.style.filter = "opacity(50%)";

            iconCheckbox.classList.remove('bx', 'bx-checkbox-square', 'bx-md', 'bx__noCheck');
            iconCheckbox.classList.add('bx', 'bxs-check-square', 'bx-sm', 'bx__Checked');
            iconCheckbox.setAttribute("id", "Checked");
        }
        else{
            pTask.style.textDecoration = "none";
            pTask.style.filter = "opacity(100%)";

            iconCheckbox.classList.remove('bx', 'bxs-check-square', 'bx-sm', 'bx__Checked');
            iconCheckbox.classList.add('bx', 'bx-checkbox-square', 'bx-md', 'bx__noCheck');
            iconCheckbox.setAttribute("id", "iNoCheck");
        }
    })
}

function saveTask(){

    let taskContent = document.getElementById('taskContent');
    let tasks = [];
    let idTask = 0;

    taskContent.querySelectorAll('p.name__task').forEach(function(item){
         
        let nameTaskValue = item.textContent.trim();
        var ojectTask = new Object();

        ojectTask.id = idTask;
        ojectTask.nameTask = nameTaskValue;

        tasks.push(ojectTask)//<= push a Object right here

        idTask++;
    });
    
    localStorage.setItem('taskList', JSON.stringify(tasks));
    
    console.log(tasks);
}
