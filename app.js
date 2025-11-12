let userTaskInput = document.querySelector(".task-input input");
let todosList = document.querySelector(".todos-list");

// datas from local storage
let todos = JSON.parse(localStorage.getItem("todo-list"));

// update status on local storage and UI
function statusUpdate(item) {
  let task = item.parentElement.lastElementChild;
  if (item.checked) {
    task.classList.add("active");
    // update local storage
    todos[item.id].status = "complete";
  } else {
    task.classList.remove("active");
    todos[item.id].status = "pending";
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
}

// to show todos task from local storage
function showTodos() {
  todos.forEach((tasks, id) => {
    // update completeStatus and completeTaskCheck in UI
    let completeStatus = tasks.status === "complete" ? "active" : "";
    let completeTaskCheck = tasks.status === "complete" ? "checked" : "";
    todosList.innerHTML += `
    <li class="todo-items">
      <label for="${id}">
        <input type="checkbox" id="${id}" onclick="statusUpdate(this)" ${completeTaskCheck}/>
        <p class="todo-txt ${completeStatus}" >${tasks.task}</p>
      </label>
      <div>
        <i class="fa-solid fa-pen-to-square edit-ic"></i>
        <i class="fa-solid fa-trash delete-ic"></i>
      </div>
    </li>`;
  });
}
showTodos();

userTaskInput.addEventListener("keyup", (e) => {
  let userInput = userTaskInput.value.trim();
  if (e.key === "Enter" && userInput) {
    // if todos not have create todos with empty array
    if (!todos) {
      todos = [];
    }
    userTaskInput.value = "";
    let userTasks = { task: userInput, status: "pending" };
    todos.push(userTasks);
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }
});
