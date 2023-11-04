const button = document.getElementsByTagName('button')
const newItemText = document.getElementById("todos")
const list = document.getElementById('todolist')
const newListItem= document.createElement('li')

//add to do task

function addTodo(newItemText){
    newListItem.textContent = newItemText;
    list.appendChild(newListItem);    
}