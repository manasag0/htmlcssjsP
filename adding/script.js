const container = document.getElementById("container");
let todoList = [];
// Function to display the list of todos in HTML
function renderTodos() {
    // Clearing out old todos before rendering new ones
    container.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        let li = document.createElement("li");
        li.textContent = `${todoList[i].task} - ${todoList[i].completed ? "Completed"
            : "Not Completed"}`;
        if (!todoList[i].completed) {
            let button = document.createElement("button");
            button.textContent = "Mark as Complete";
            button.classList.add("complete-btn");
            button.id = i;
            button.onclick = () => completeTask(button.id);
            li.appendChild(document.createTextNode(" "));
            li.appendChild(button);
        }
        li.classList.add("list-item");
        container.appendChild(li);
        console.log(li);
    }
};

