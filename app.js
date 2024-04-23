const container = document.querySelector(".conatiner");
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#inputTodo");
const todoAddButton = document.querySelector("#addTodoButton");
const todoLists = document.getElementById("lists");
const messageElement = document.getElementById("message");
// search box
// Example search functionality



// create todo
const createTodo = (todoValue,todoId ) => {
    let createElement = document.createElement('li');
    createElement.id=todoId;
    createElement.innerHTML=`
    <span> ${todoValue} </span>
    <span> <button class="btn" id="deleteButton"> <i class="fa fa-trash"> </i> </button> </span>
    
  `
  let deleteButton = createElement.querySelector('#deleteButton');
 
  todoLists.appendChild(createElement);
    showMessage("todo Add successfully","success");
    deleteButton.addEventListener('click',deletedTodo)
};
// show message todo
const showMessage = (text,status) => {
   messageElement.textContent=text;

   messageElement.classList.add(`bg-${status}`);
   setTimeout(() => {
     messageElement.textContent="";
     messageElement.classList.remove(`bg-${status}`)
   }, 1000)
   
};
// deleted todo

const deletedTodo = (event) => {
let selectedTodo = event.target.closest('li');
if(selectedTodo){
  todoLists.removeChild(selectedTodo);
  showMessage("Todo deleted.","danger");
  let todos = getTodoLocalStorage();

  let updateTodos = todos.filter((todo)=>{
  return todo.todoId !==selectedTodo.id;
  });
  localStorage.setItem('mytodos',JSON.stringify(updateTodos));
}else{
  console.log("Failed to find todo item")
}
};


// Get localstorage
const getTodoLocalStorage = () => {
  return localStorage.getItem('mytodos')?JSON.parse(localStorage.getItem('mytodos')):[];
};
// add todd
const addTodo = (event) => {
    // event.preventDefault();
    event.preventDefault();
    let todoValue =todoInput.value;
    let todoId = Date.now().toString();

    createTodo(todoValue,todoId);
    let todos = getTodoLocalStorage();
    todos.push({todoValue,todoId});
    localStorage.setItem('mytodos',JSON.stringify(todos));
    todoInput.value=""
    
    
};
todoForm.addEventListener('submit',addTodo);

// Example search functionality
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const noResultsMessage = document.getElementById("noResultsMessage");

searchButton.addEventListener("click", function() {
const searchTerm = searchInput.value.trim().toLowerCase();
let todos = document.querySelectorAll("#lists li");
let found = false;
todos.forEach(function(task){
  let todoText = task.textContent.toLowerCase();
if(todoText.includes(searchTerm)){
  task.style.display="block"
  found=true;
}else {
  task.style.display="none";
}
});
if(!found){
  noResultsMessage.style.display="block";
}else{
  noResultsMessage.style.display="none"
}

});

