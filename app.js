// Selectors
const todoInput = document.querySelector(".todo-input")
const todoBtn = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")
const filterOp = document.querySelector('.filter-todos')
//Event Listener
todoBtn.addEventListener('click',addToDo)
todoList.addEventListener('click',deletechk)
filterOp.addEventListener('click',filterTodo)

// Functions
function addToDo(e){
e.preventDefault();

const todoDiv = document.createElement('div')
todoDiv.classList.add("todo")
const newTodo = document.createElement("li")
newTodo.classList.add("todo-item")
newTodo.textContent= todoInput.value
todoDiv.appendChild(newTodo)

saveLocalTodos(todoInput.value)

const completedBtn = document.createElement('button')
completedBtn.innerHTML = `<i class="fas fa-check"></i>`
completedBtn.classList.add('completed-btn')
todoDiv.appendChild(completedBtn)

const deleteBtn = document.createElement('button')
deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`
deleteBtn.classList.add('delete-btn')
todoDiv.appendChild(deleteBtn)
todoList.appendChild(todoDiv)
todoInput.value=""
}


////to delete
function deletechk(e){
    const item = e.target
    if(item.classList.contains('delete-btn')){
        const todo =  item.parentElement
        todo.remove()
    }

    if(item.classList.contains('completed-btn')){
        const todo = item.parentElement
        todo.classList.toggle("done")
    }
}

///filterTodo
function filterTodo(e){
const option = todoList.childNodes
option.forEach(function(todo){
    switch(e.target.value){
        case "all":
            todo.style.display = 'flex'
            break;
        case "completed":
            if(todo.classList.contains("done")){
                todo.style.display = "flex"
            } else {
                todo.style.display = "none"
            }
            break;
        case 'uncompleted':
            if(!todo.classList.contains("done")){
                todo.style.display = "flex"
            } else {
                todo.style.display = "none"
            }
            break; 
    }
})
}

//to save on storage
function saveLocalTodos(todo){
    let todos
    if (localStorage.getItem('todos')===null) {
        todos =[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}
// get totdos
function getTodos(){
    let todos
    if (localStorage.getItem('todos')===null) {
        todos =[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo){
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
    )
}