function printTask(name){
    var taskLi = document.createElement('div');
    taskLi.classList.add('task-item');
    var taskEl = document.createElement('input');
    taskEl.type = 'text';
    taskEl.value = name;
    taskEl.classList.add('task-item-span');
    taskEl.id = "task-item-span";
    taskEl.setAttribute("readonly", "readonly");
    var taskBtn = document.createElement('div');
    taskBtn.classList.add('buttons');
    var taskEdit = document.createElement('button');
    taskEdit.innerHTML ='<i class="fa-regular fa-pen-to-square"></i>';
    taskEdit.href="";
    taskEdit.classList.add('task-item-edit');
    taskEdit.id = "btnEdit";
    var taskRemove = document.createElement('button');
    taskRemove.innerHTML ='<i class="fa-regular fa-trash-can"></i>'
    taskRemove.href="";
    taskRemove.classList.add('task-item-remove');
    taskRemove.id= "btnRemove";
    taskLi.appendChild(taskEl);
    taskBtn.appendChild(taskEdit);
    taskBtn.appendChild(taskRemove);
    taskLi.appendChild(taskBtn);
    taskList.appendChild(taskLi);
    removeTask();
    editTask();
}