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

player.sayHello();

// Calculator

const calculator = {
    plus: function (a, b) {
        return a + b;
    },

    minus: function (a, b) {
        return a - b;
    },

    times: function (a, b) {
        return a * b;
    },

    divice: function (a, b) {
        return a / b;
    },

    power: function (a, b) {
        return a ** b;
    }
}

const plusResult = calculator.plus(2,3);
const minusResult = calculator.minus(plusResult, 10);
const timesReust = calculator.times(10, minusResult);
const diviceResult = calculator.divice(timesReust, minusResult);
const powerResult = calculator.power(diviceResult, minusResult);

// CalculatorKAge

const age = 96;
function CalculatorKAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const KrAge = CalculatorKAge(age);

console.log(KrAge);

// if문

const realAge = parseInt(prompt("How old are you"));

if(isNaN(isNaN(realAge) || realAge < 0)){
    console.log("Please write a number");
} else if(realAge < 18){
    console.log("You are too Young");
}else if(realAge >= 18 && age <= 50){
    console.log('You can drink');   
}else if(realAge > 50 && age <= 80){
    console.log('You should exercise');  
}else if(age > 80) {
    console.log("You can do whatever you want.");
}