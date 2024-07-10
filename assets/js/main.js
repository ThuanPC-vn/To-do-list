let addTodo = document.getElementById('AddtaskButton');

let listTasks = document.getElementById('list-tasks');
let inputField = document.getElementById('input-field');


function TasksFun(){

    if (!inputField.value) {
        alert("Please fill out the task");
        return;
    }

    var divBG = document.createElement('div');
    divBG.classList.add('work__bg');
    listTasks.appendChild(divBG);

    var divContent = document.createElement('div');
    divContent.classList.add('works__content');
    divBG.appendChild(divContent);


    var lab = document.createElement('label');
    lab.classList.add('name__works');
    lab.innerText = inputField.value;
    divContent.appendChild(lab);

    var divAction = document.createElement('div');
    divAction.classList.add('action__buttons');   
    divContent.appendChild(divAction);

    var ipAction = document.createElement('input');
    ipAction.classList.add('checkbox__work');
    ipAction.setAttribute("type", "checkbox")
    ipAction.setAttribute("id", "compeleteCheck")
    divAction.appendChild(ipAction);

    var iAction = document.createElement('i');
    iAction.classList.add('bx');
    iAction.classList.add('bxs-trash');
    iAction.setAttribute("id", "deleTask")
    divAction.appendChild(iAction);

    
    ipAction.addEventListener('click',() => {
        if (ipAction.checked == true){ 
            lab.style.textDecoration = "line-through";
            lab.style.filter = "opacity(50%)";
        }
        else{
            lab.style.textDecoration = "none";
            lab.style.filter = "opacity(100%)";
        }
    })
    

    iAction.addEventListener('click',() => {
        listTasks.removeChild(divBG);
    })

    inputField.value = "";
};


addTodo.addEventListener('click',TasksFun);



