let addTodo = document.getElementById('addTaskButton');

let listTasks = document.getElementById('list-tasks');
let inputField = document.getElementById('input-field');


//*============== CALL FUNTION RENDER DATA TASK FROM LOCALSTORAGE ================= */
loadTask();


/*============== FUNTION addTask WITH CONDITIONAL ================= */
function addTask(){

    const task = inputField.value.trim();
    if (task){
        createElementTask(task);
        inputField.value = '';
        saveTask();
    }
    else{
        alert("Plesea write a task you want to do.");
    }

    
}

/*============== WHEN CLICK ADD ITEM IS CALL FUNTION addTask ================= */
addTodo.addEventListener('click',addTask)

/*============== FUNTION CREAT ELEMENT & LOGIC ACTION BUTTON ================= */
function createElementTask(task){

    /*====================== CREAT ELEMENT FOR TASK========================= */
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

    /*====================== CHECKBOX ACTION ========================= */
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

    /*====================== CHECKBOX ACTION ========================= */
    iconDelete.addEventListener('click',() => {
        listTasks.removeChild(liTask);
        saveTask();
    })
}


/*============= SAVE TASK INTO OBJECT & PUSH THE ARRAY INSIDE localStorage =================== */
function saveTask(){

    
    let tasks = [];
    let idTask = 0;
    
    // funtion add value in a Object
    function objectTask(idTask, nameTask){
        this.idTask = idTask,
        this.nameTask = nameTask
    }

    
    listTasks.querySelectorAll('li.task__content').forEach(function(item) {
        //push a new Object right here 
        tasks.push(new objectTask(idTask, item.textContent))
        idTask++;
    })
      
    localStorage.setItem('taskList', JSON.stringify(tasks));
    
    console.log(tasks);
}


/*========== RENDER TASKS FROM LISH TASK SAVED INTO ARRAY INSIDE localStorage ========================= */
function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('taskList')) || [];
    
    tasks.forEach(function(item){
        createElementTask(item.nameTask);
    });
}


