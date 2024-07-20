let addTodo = document.getElementById('addTaskButton');

let listTasks = document.getElementById('list-tasks');
let inputField = document.getElementById('input-field');


//*============== CALL FUNTION RENDER DATA TASK FROM LOCALSTORAGE ================= */
loadTask();


/*============== WHEN CLICK ADD ITEM IS CALL FUNTION addTask ================= */
addTodo.addEventListener('click',saveTask);

/*============== WHEN PRESS 'Enter' IS CALL FUNTION addTask ================= */
inputField.addEventListener('keypress',(e)=>{
    if (inputField.value && e.key === 'Enter'){
        saveTask();
    }
    else{
        if (!inputField.value && e.key == 'Enter'){
            alert("Plesea write a task you want to do.");
        }
    }
});

/*============== FUNTION CREAT ELEMENT & LOGIC ACTION BUTTON ================= */
function createElementTask(idTask,task){

    /*====================== CREAT ELEMENT FOR TASK========================= */
    const liTask = document.createElement('li');
    liTask.className = "task__content";
    liTask.setAttribute("id", "taskContent");
    listTasks.appendChild(liTask);

    const todoItem = `<p class="name__task" id="nameTask">${task}</p>
                      <div class="action__task">
                          <i class='bx bxs-check-square bx-sm bx__Checked' style="display: none" id="iChecked"></i>
                          <i class='bx bx-checkbox-square bx-md bx__noCheck' id="iNoCheck"></i>
                          <i class='bx bxs-trash bx-sm bx__trash' id="deleTask" onclick="deleteTask(${idTask})"></i>
                      </div>`
    liTask.innerHTML = todoItem;

    /*====================== CHECKBOX ACTION ========================= */
    let iconCheckbox = liTask.querySelector('i#iNoCheck');
    let taskName = liTask.querySelector('p#nameTask');

    iconCheckbox.addEventListener('click',() => {
        if (iconCheckbox.id == "iNoCheck"){
            taskName.style.textDecoration = "line-through";
            taskName.style.filter = "opacity(50%)";

            iconCheckbox.classList.remove(
                'bx',
                'bx-checkbox-square',
                'bx-md',
                'bx__noCheck');

            iconCheckbox.classList.add('bx',
                'bxs-check-square',
                'bx-sm', 
                'bx__Checked');

            iconCheckbox.setAttribute("id","Checked");
        }
        else{
            taskName.style.textDecoration = "none";
            taskName.style.filter = "opacity(100%)";

            iconCheckbox.classList.remove(
                'bx', 
                'bxs-check-square', 
                'bx-sm', 
                'bx__Checked');

            iconCheckbox.classList.add('bx', 
                'bx-checkbox-square', 
                'bx-md', 
                'bx__noCheck');

            iconCheckbox.setAttribute("id", "iNoCheck");
        }
    })
    
}

function reloadAfterDelete(todoData){

    const listElement = listTasks.querySelectorAll('li#taskContent');
    for(let i=0; i<listElement.length ;i++){
        listElement[i].parentNode.removeChild(listElement[i]);
        // console.log(listElement[i]);
    }

    todoData.forEach((e)=>{
        createElementTask(e.idTask, e.nameTaskValue);
    })
}


/*====================== DELETE TASK ========================= */
function deleteTask(idTask){
    // const li = document.getElementById('taskContent');
    todoData = JSON.parse(localStorage.getItem('taskList'));

    for(var i=0; i < todoData.length; i++){
        if (todoData[i].idTask == idTask){
            todoData.splice(i, 1);
            localStorage.setItem('taskList', JSON.stringify(todoData));
        }
    }

    reloadAfterDelete(todoData);
}


//Funtion to check Arr
function checkArr(tasksCheck){

    tasksCheck = JSON.parse(localStorage.getItem('taskList'));

    if(!tasksCheck){
        tasksCheck = [];
        return tasksCheck;
    }
    else{
        return tasksCheck;
    }
}

//Funtion to find id largest
function checkID(todo,idMax){
    todo = JSON.parse(localStorage.getItem('taskList'));
    if(!todo){
        idTask=0;
        return idTask;
    }
    else{
        let maxID = 0
        todo.forEach((item)=>{
            console.log(item.idTask);
            if(item.idTask > maxID){
                maxID = item.idTask; 
            }
        })
        console.log(maxID);
        idMax = maxID;
        return idMax+1;
    }
}

/*========== RENDER TASKS FROM LISH TASK SAVED INTO ARRAY INSIDE localStorage ========================= */
function loadTask(){
    const todo = JSON.parse(localStorage.getItem('taskList')) || [];
    
    todo.forEach((element)=>{
        createElementTask(element.id,element.nameTaskValue);
    });
}

/*============= SAVE TASK INTO OBJECT & PUSH THE ARRAY INSIDE localStorage =================== */
function saveTask(){

    const task = inputField.value.trim();
    let tasks, tasksCheck;
    let idTask, idCheck;

    //Call funtion to check Array
    tasks = checkArr(tasksCheck);
    console.log(typeof tasks);

    //Call funtion to find id largest and 
    idTask = checkID(tasks, idCheck);

    if (task){
        // funtion add value in a Object
        function ObjTask(idTask, nameTaskValue){
            this.idTask = idTask,
            this.nameTaskValue = nameTaskValue
        }

        tasks.push(new ObjTask(idTask, task));
        localStorage.setItem('taskList', JSON.stringify(tasks));

        createElementTask(idTask,task);
    }
    else{
        alert("Plesea write a task you want to do.");
    }

    inputField.value = '';
}






