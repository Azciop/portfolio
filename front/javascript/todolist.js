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
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragstart")
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
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

// creating the new todo
function createTodo() {
  // creating the div
  const todo_div = document.createElement("div");
  const input_value = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_value);

  todo_div.appendChild(txt);
  todo_div.classList.add('todo');
  todo_div.setAttribute("draggable", "true");

  // creating the close span
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00d7")
  span.classList.add("close");
  span.appendChild(span_txt);

  todo_div.appendChild(span);

  no_status.appendChild(todo_div);

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  })

  todo_div.addEventListener('dragstart', dragStart);
  todo_div.addEventListener('dragend', dragEnd);

  document.getElementById("todo_input").value = "";
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

const close_btns = document.querySelectorAll('.close');

close_btns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  })
})

