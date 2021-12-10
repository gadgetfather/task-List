// Selectors
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
//Event Listener
todoBtn.addEventListener('click',addToDo)

// Functions
function addToDo(e){
e.preventDefault();

const todoDiv = document.createElement('div')
todoDiv.classList.add("todo")
const newTodo = document.createElement("li")
newTodo.classList.add("todo-item")
newTodo.textContent= todoInput.value
todoDiv.appendChild(newTodo)

const completedBtn = document.createElement('button')
completedBtn.innerHTML = `<i class="fas fa-check"></i>`
completedBtn.classList.add('completed-btn')
todoDiv.appendChild(completedBtn)

const deleteBtn = document.createElement('button')
deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`
deleteBtn.classList.add('delete-btn')
todoDiv.appendChild(deleteBtn)
todoList.appendChild(todoDiv)
}