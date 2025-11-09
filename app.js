let userTaskInput = document.querySelector(".task-input input");

let todos = localStorage.getItem("todo-list");
userTaskInput.addEventListener("keyup", (e) => {
  let userInput = userTaskInput.value.trim();
  if (e.key === "Enter" && userInput) {
    if (!todos) {
      todos = [];
    }
    userTaskInput.value = "";
    let userTasks = { task: userInput, status: "pending" };
    todos.push(userTasks);
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }
});
