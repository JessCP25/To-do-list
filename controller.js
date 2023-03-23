var newTaskEl = document.getElementById('new-task');
var taskList = document.getElementById('tasks');
var botonAdd = document.getElementById('btnAdd');
var botonEdit = document.getElementById('btnEdit');
var botonRemove = document.getElementById('btnRemove');
var task = document.getElementById('task-item-span');
var inbox = new List('inbox');

function addTask(e, lista = inbox){
    e.preventDefault();
    if(newTaskEl.value == ""){
        alert("Ingrese una tarea")
    }else{
        var newTask = new Task(newTaskEl.value);
        lista.addTask(newTask);
        printTask(newTaskEl.value);
        console.table(lista.tasks);
        newTaskEl.value="";
    }

    
}

function editTask(list = inbox){
    var listItems = taskList.children;
    for (let i = 0; i< listItems.length; i++) {
        listItems[i].querySelector('button#btnEdit').addEventListener('click', function(e){
            e.preventDefault();
            listItems[i].querySelector('input').removeAttribute("readonly");
            list.tasks[i].edit(listItems[i].querySelector('input').value);
            console.table(list.tasks);
        //listItems[i].querySelector('input').setAttribute("readonly","readonly");
        })
    }
}

function removeTask(list = inbox){
    var listItems = taskList.children;
    for (let i = 0; i< listItems.length; i++) {
        listItems[i].querySelector('button#btnRemove').addEventListener('click', function(e){
            e.preventDefault();
            var _i = i;
            list.removeTask(_i);
            var a = this.parentElement;
            a.parentElement.remove();
            console.table(list.tasks)
            console.log(_i);
        })
    }
}

botonAdd.addEventListener('click',addTask);
