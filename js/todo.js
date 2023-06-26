const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
    // 그냥 toDos를 localStorage에 저장하면 새로 저장했을 때 지워지기 때문에 JSON을 이용하여 변환후에 저장한다.
}

function deleteTodo(event){
     const li = event.target.parentElement;
     li.remove();
}

function paintToDo(newToDo){
    const li = document.createElement("li"); // li 태그를 생성
    const span = document.createElement("span"); // span 태그를 생성
    const button = document.createElement("button"); // button 태그를 생성
    button.innerText = "X";
    li.appendChild(span); // li 태그 안에 span 태그를 자식으로 삽입
    li.appendChild(button); // li 태그 안에 button 태그를 자식으로 삽입
    button.addEventListener("click", deleteTodo)
    span.innerText = newToDo;
    toDoList.appendChild(li); // 만들어진 li 태그를 todoList에 삽입
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);