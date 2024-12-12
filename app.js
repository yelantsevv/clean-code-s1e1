const addInput = document.querySelector(".add__task_input");
const addBtn = document.querySelector(".add__task_btn");
const todo = document.querySelector(".todo");
const todoInCompleted = document.querySelector(".todo__incompleted");
const todoCompleted = document.querySelector(".todo__completed");

addBtn.addEventListener("click", () => {
  if (!addInput.value) return;
  const li = document.createElement("li");

  li.innerHTML = `
  <input type="checkbox" class="todo__checkbox">
  <label class="task todo__label">${addInput.value}</label>
  <input type="text" class="task todo__input">
  <button class="todo__edit_btn">Edit</button>
  <button class="todo__delete_btn">
    <img class="todo__delete_img" src="./remove.svg" alt="Remove">
  </button>`;

  todoInCompleted.appendChild(li);
  addInput.value = "";
});

todo.addEventListener("click", (event) => {
  const parentElement = event.target.parentElement;
 const contains = (className) => event.target.classList.contains(className)
  if (contains("todo__edit_btn")) {
    editTask(parentElement);
  }

  if (contains("todo__delete_img") || contains("todo__delete_btn")) {
    const li = contains("todo__delete_img") ? parentElement.parentNode : parentElement;
    const ul = li.parentNode;
    ul.removeChild(li);
  }

  if (contains("todo__checkbox")) {
    if (event.target.checked) {
      todoCompleted.appendChild(parentElement);
    } else {
      todoInCompleted.appendChild(parentElement);
    }
  }
});

function editTask(li) {
  const editInput = li.querySelector(".todo__input");
  const editLabel = li.querySelector(".todo__label");
  const editBtn = li.querySelector(".todo__edit_btn");
  const containsClass = li.classList.contains("todo__edit_mode");

  if (containsClass) {
    editLabel.innerText = editInput.value;
    editBtn.innerText = "Edit";
  } else {
    editInput.value = editLabel.innerText;
    editBtn.innerText = "Save";
  }

  li.classList.toggle("todo__edit_mode");
}