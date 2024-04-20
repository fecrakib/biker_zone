
const container=document.querySelector(".container");
const todoForm=document.querySelector(".todo-form");
const todoInput=document.querySelector("#inputTodo");
const todoAddButton=document.querySelector("#addTodoButton");
const todoLists=document.getElementById('lists');

// cretate todo
const createTodo=(todoId,todovalue)=>{
    const todoElement=document.createElement('li');
    todoElement.id=todoId;
    // console.log(todoId);
    todoElement.innerHTML=`
    <span>${todovalue}</span>
    <span> <button class="btn" id="deleteButton"> <i class="fa-regular fa-delete-right"></i></button></span>
    `;
    todoLists.appendChild(todoElement);
}

// add to do
const addTodo=(event)=>{
    event.preventDefault();
    console.log(todoInput.value);
    const todovalue=todoInput.value;
    // unique id generate
    const todoId=Date.now().toString();
    createTodo(todoId,todovalue);

}
todoForm.addEventListener("submit",addTodo);























// const todoForm=document.querySelector('.todo-form');
// const todoInput=document.querySelector('#inputTodo');
// const todoAddButton=document.querySelector('#addTodoButton');
// const todoLists=document.getElementById('lists');
// // create new todo

// const cretateTodo=(todoId,todovalue)=>{
// const todoElement=document.createElement('li');
// console.log(todoElement);
// console.log(todovalue);
// todoElement.innerHTML=`
// <span>${todovalue}</span>
// <span><button class="btn" id="deleteButton"><i class="fa-regular fa-delete-right"></i></button></span>
// `
// todoLists.appendChild(todoElement);
// }

//  const addTodo=(event)=>{
//     event.preventDefault();
//     const todoValue=todoInput.value;
//     // console.log(todoInput.value);
//     // unique id generate
//     const todoId=Date.now().toString();
//     cretateTodo(todoId,todoValue);
//  }
//  todoForm.addEventListener('submit',addTodo);