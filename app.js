let a = 5;
let b = 2;

let myName = "KSY"

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log('hello ' + myName);

myName = "SangYoung"

console.log('your new name is ' + myName);

const amIFat = false;
console.log(amIFat);

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// daysOfWeek를 호출 (토요일까지만 있어서 6개출력)
console.log(daysOfWeek);

// 일요일을 추가  
daysOfWeek.push("sun")

console.log(daysOfWeek);

// Objecr
const player = {
    name: "nico",
    points: 10,
    fat: true,
    sayHello: function () {
        console.log("hello " + this.name + " nice to meet you")
    }
}

console.log(player);
console.log(player.name);

// Function

function sayHello(){
    console.log('Hello!');
}

player.sayHello()