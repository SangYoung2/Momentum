const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const logout = document.querySelector("#logout-btn > span");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form > input");
const todoBtn = document.querySelector("#todo-btn > label");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
    location.reload();
}

function logoutSubmit(event) {
    localStorage.removeItem(USERNAME_KEY);
    location.reload();
}

logout.addEventListener('click', logoutSubmit);

function paintGreetings(username){
    let comments = "";
    const date = new Date();
    const hour = date.getHours()
    if(hour >= 0 && hour < 6){
        comments = "Good night"
    }else if(hour >= 6 && hour < 12) {
        comments = "Good morning"
    }else if(hour >=12 && hour < 18) {
        comments = "Good afternoon"
    }else {
        comments = "Good evening"
    }

    greeting.innerText = `${comments}, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
    todoInput.classList.remove(HIDDEN_CLASSNAME);
    todoBtn.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
