var newTask = document.getElementById('new-task');
var taskList = document.getElementById('task-list');
var botonAdd = document.getElementById('btnAdd');

function addTask(e){
    e.preventDefault();
    var newT = document.createElement('li');
    var btn = document.createElement('button');
    newT.textContent = newTask.value;
    btn.value="Eliminar";
    taskList.appendChild(newT);
    newT.appendChild(btn);
    newT.appendChild(btn);
    newTask.value = "";
}

botonAdd.addEventListener('click',addTask);