// modal function 

const btns = document.querySelectorAll("[data-target]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

// draggable functions

const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;

todos.forEach(todo => {
    todo.addEventListener('dragstart', dragStart);
    todo.addEventListener('dragend', dragEnd);
})

function dragStart() {
    draggableTodo = this;
    console.log("dragstart")
}

function dragEnd() {
    draggableTodo = null;
    console.log("dragend")
}

all_status.forEach(status => {
    status.addEventListener("dragover", dragOver);
    status.addEventListener("dragenter", dragEnter);
    status.addEventListener("dragleave", dragLeave);
    status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
    e.preventDefault();
    console.log("dragover");
}

function dragEnter() {
    console.log("dragenter");
}

function dragLeave() {
    console.log("dragleave");
}

function dragDrop() {
    this.appendChild(draggableTodo);
    console.log("drop");
}

// create new todo function 

const todo_submit = document.getElementById('todo_submit');

todo_submit.addEventListener('click', createTodo);

function createTodo(){

};

