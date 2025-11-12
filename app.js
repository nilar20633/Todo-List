let userTaskInput = document.querySelector(".task-input input");
let todosList = document.querySelector(".todos-list");

// datas from local storage
let todos = JSON.parse(localStorage.getItem("todo-list"));

// to show todos task from local storage
function showTodos() {
  todos.forEach((tasks, id) => {
    todosList.innerHTML += `
    <li class="todo-items">
      <label for="${id}">
        <input type="checkbox" id="${id}" />
        <span class="todo-txt">${tasks.task}</span>
      </label>
      <div>
        <i class="fa-solid fa-pen-to-square edit-ic"></i>
        <i class="fa-solid fa-trash delete-ic"></i>
      </div>
    </li>`;
  });
}

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
    showTodos();
  }
});
