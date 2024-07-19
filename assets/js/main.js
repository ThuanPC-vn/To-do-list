let addTodo = document.getElementById('addTaskButton');

let listTasks = document.getElementById('list-tasks');
let inputField = document.getElementById('input-field');


//*============== CALL FUNTION RENDER DATA TASK FROM LOCALSTORAGE ================= */
loadTask();


/*============== FUNTION addTask WITH CONDITIONAL ================= */
// function addTask(){

//     const task = inputField.value.trim();
//     if (task){
//         createElementTask(task);
//         inputField.value = '';
//         saveTask();
//     }
//     else{
//         alert("Plesea write a task you want to do.");
//     }

    
// }

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
function createElementTask(task){

    /*====================== CREAT ELEMENT FOR TASK========================= */
    const liTask = document.createElement('li');
    liTask.className = "task__content";
    liTask.setAttribute("id", "taskContent");
    listTasks.appendChild(liTask);

    const todoItem = `<p class="name__task" id="nameTask">${task}</p>
                      <div class="action__task">
                          <i class='bx bxs-check-square bx-sm bx__Checked' style="display: none" id="iChecked"></i>
                          <i class='bx bx-checkbox-square bx-md bx__noCheck' id="iNoCheck"></i>
                          <i class='bx bxs-trash bx-sm bx__trash' id="deleTask" onClick="deleteTask(element.id)"></i>
                      </div>`
    liTask.innerHTML = todoItem;

    /*====================== CHECKBOX ACTION ========================= */
    const iconCheckbox = liTask.querySelector('i#iNoCheck');
    const taskName = liTask.querySelector('p#nameTask');

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

/*====================== DELETE TASK ========================= */








/*============= SAVE TASK INTO OBJECT & PUSH THE ARRAY INSIDE localStorage =================== */
function saveTask(){

    const task = inputField.value.trim();
    let tasks = [];
    let idTask, IDmax;
    
    //Funtion to find id largest
    function checkArr(tasks){

        tasks = JSON.parse(localStorage.getItem('taskList'));

        if(!tasks){
            tasks = [];
        }
    }

    //Funtion to find id largest
    function checkID(todo,idTask){

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
            idTask = maxID;
            return idTask+1;
        }
    }

    

    if (task){
        // funtion add value in a Object
        function ObjTask(idTask, nameTaskValue){
            this.idTask = idTask,
            this.nameTaskValue = nameTaskValue
        }

        checkArr(tasks);
        idTask = checkID(tasks, IDmax);

        // listTasks.querySelectorAll('li').forEach((item)=>{
        //     tasks.push(new objectTask(idTask, item.textContent));
        // })
        tasks.push(new ObjTask(idTask, task));
        localStorage.setItem('taskList', JSON.stringify(tasks));

        let todoRender = JSON.parse(localStorage.getItem('taskList')) || [];
        todoRender.forEach((element)=>{
            createElementTask(element.nameTaskValue);
        })
        
        console.log(tasks);
        inputField.value = '';
    }
    else{
        alert("Plesea write a task you want to do.");
    }

}


/*========== RENDER TASKS FROM LISH TASK SAVED INTO ARRAY INSIDE localStorage ========================= */
function loadTask(){
    const todo = JSON.parse(localStorage.getItem('taskList')) || [];
    
    todo.forEach((item)=>{
        createElementTask(item.nameTaskValue);
    });
}



