document.addEventListener('DOMContentLoaded', function () {
    const todoInput = document.querySelector('.todo-input');
    const addBtn = document.querySelector('.add-btn');
    const todoList = document.querySelector('.todo-list');

    addBtn.addEventListener('click', addTodo);

    function addTodo(event) {
        event.preventDefault();

        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const completeBtn = document.createElement('button');
        completeBtn.innerHTML = '<i class="fas fa-check"></i>';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', completeTodo);
        todoDiv.appendChild(completeBtn);

        const editBtn = document.createElement('button');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', editTodo);
        todoDiv.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTodo);
        todoDiv.appendChild(deleteBtn);

        todoList.appendChild(todoDiv);
        todoInput.value = '';
    }

    function completeTodo() {
        const todo = this.parentElement;
        todo.classList.toggle('completed');
    }

    function editTodo() {
        const todo = this.parentElement;
        const todoText = todo.querySelector('.todo-item');
        const newText = prompt('Edit task:', todoText.innerText);

        if (newText !== null) {
            todoText.innerText = newText;
        }
    }

    function deleteTodo() {
        const todo = this.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
});
