const newTask = document.getElementById('new-task');
const btnAdd = document.getElementById('btnAdd');
const tasks = document.getElementById('tasks');

let listTasks = [];

btnAdd.addEventListener('click', addTask);
tasks.addEventListener('click', removeTask);
tasks.addEventListener('click', editTask);

function addTask(){
    if(newTask.value==''){
        alert("Ingrese la tarea para poder agregarla.")
    }else{
        listTasks.push(newTask.value);
        renderTasks();
    }
    newTask.value = "";    
}

function renderTasks(){
    tasks.innerHTML='';
    for(let i=0; i<listTasks.length;i++){
        // if(listTasks[i]===newTask.value){
            const addedTask = document.createElement('div');
            addedTask.classList.add('task-item');
            const input=document.createElement('input');
            input.classList.add('task-item-input');
            input.value = listTasks[i];
            input.setAttribute('readonly','readonly');
            input.id = 'inputItem'+i;
            const taskBtn = document.createElement('div');
            taskBtn.classList.add('buttons');
            const taskEdit = document.createElement('button');
            taskEdit.innerHTML ='<i class="fa-regular fa-pen-to-square"></i>';
            taskEdit.classList.add('task-item-edit');
            taskEdit.id = "btnEdit"+i;
            const taskRemove = document.createElement('button');
            taskRemove.innerHTML ='<i class="fa-regular fa-trash-can"></i>'
            taskRemove.classList.add('task-item-remove');
            taskRemove.id= "btnRemove"+i;
            taskBtn.append(taskEdit,taskRemove)
            addedTask.append(input,taskBtn);
            tasks.appendChild(addedTask);
    }
}

function editTask(event){
    const node = event.target.parentNode;
    if(node.classList.contains('task-item-edit')){
        const inputTask = node.parentNode.previousSibling;
        if(inputTask.getAttribute('readonly') === 'readonly'){
            inputTask.removeAttribute('readonly');
            inputTask.classList.toggle('border');
        }else{
            inputTask.setAttribute('readonly','readonly');
            const idTask = Number(inputTask.id.substring(9,inputTask.id.length));
            listTasks[idTask] = inputTask.value;
            inputTask.classList.toggle('border');
        }
    }
    
}

function removeTask(event){
    const node = event.target.parentNode;
    if(node.classList.contains('task-item-remove')){
        const newTasks = listTasks.filter((tarea)=>tarea!==node.parentNode.previousSibling.value);
        listTasks = newTasks;
        renderTasks();
    }
}



