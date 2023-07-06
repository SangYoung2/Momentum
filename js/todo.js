const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const username = document.getElementById("greeting").innerText.split(',')[1];

console.log(username);


const TODOS_KEY = "todos"

let toDos = [];
let nowUserTodo = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // 그냥 toDos를 localStorage에 저장하면 새로 저장했을 때 지워지기 때문에 JSON을 이용하여 변환후에 저장한다.
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id) && toDo.username != username)
    saveToDos()
}

function paintToDo(newToDo){
    const li = document.createElement("li"); // li 태그를 생성
    li.id = newToDo.id;
    const span = document.createElement("span"); // span 태그를 생성
    span.innerText = newToDo.text;
    const button = document.createElement("button"); // button 태그를 생성
    button.innerText = "×";
    li.appendChild(span); // li 태그 안에 span 태그를 자식으로 삽입
    li.appendChild(button); // li 태그 안에 button 태그를 자식으로 삽입
    button.addEventListener("click", deleteTodo)
    toDoList.appendChild(li); // 만들어진 li 태그를 todoList에 삽입
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        username : username
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // localStorage에 저장된 todos를 parse 시켜 자바스크립트에서 사용할 수 있는 object로 가져온다.
    toDos = parsedToDos;
    console.log(toDos);
    nowUserTodo = toDos.filter(toDo => toDo.username == username)
    console.log(nowUserTodo);
    nowUserTodo.forEach(paintToDo);
}