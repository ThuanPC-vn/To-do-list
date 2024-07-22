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