"use strict";
let isPossible = '?';
console.log(isPossible);
let isCold = true;
if (isCold)
    var action = 'Use casaco'; //hoisting with var - içar
const foodname = 'batata';
//  foodname = 'potato';
console.log(foodname);
var secret = 'external secret';
function revel() {
    var secret = 'intern secret haha';
    console.log(secret);
}
revel(); // shadowing
console.log(secret);
// Arrow function
const sumNum = function (a, b) {
    return a + b;
};
const subtract = (a, b) => a - b;
console.log(subtract(10, 2));
const sayHello = () => console.log('Hello!');
sayHello();
const talkWithPeople = (people) => console.log(`Hi ${people}`);
talkWithPeople('Sofia');
// this with arrow  fn and normal fn
//  function normalThis() {
//    console.log(this);
//  }
// normalThis();
// const normalWithSpecialThis = normalThis.bind(normalThis);
// normalWithSpecialThis();
// const arrowWithThis = (): void => console.log(this);
// arrowWithThis();
// const arrowWithSpecialThis = arrowWithThis.bind(arrowWithThis);
// arrowWithSpecialThis();
/*
Em funções tradicionais o this pode variar de acordo com a chamada da função
mas já em arrow function o this sempre aponta para o contexto em que ela foi definida
*/
// Default Params
const regressiveClock = (initialTime = 3, finalTime = initialTime - 5) => {
    console.log(initialTime);
    while (initialTime > finalTime) {
        --initialTime;
        console.log(initialTime);
    }
    console.log(`Fim da contagem regressiva com um tempo inicial de ${initialTime} e tempo final de ${finalTime}`);
};
regressiveClock();
regressiveClock(3);
regressiveClock(5, 0);
// Rest & Spread 
const numbers = [3, 6, 10, 5151, -4];
console.log(Math.max(...numbers)); // spread operator
const classA = ['Lana', 'Alana', 'Sofia'];
const classB = ['Clara', 'Nicole', 'Lorena', ...classA]; // spread operator
console.log(classB);
function getArrayOfTwoNumbers(logNumber, logNumber2, ...args) {
    console.log(logNumber);
    console.log(logNumber2);
    return args;
}
const twoNumbers = getArrayOfTwoNumbers(2, 3, 4, 5, 6);
console.log(150, 176, twoNumbers);
console.log(getArrayOfTwoNumbers(200, 132, ...numbers));
// Rest & Spread with Tuple
const foodSchedule = [10, 'Potato', true];
const logFoodSchedule = (hour, food, eat) => console.log(`eat: ${eat}, food ${food} at ${hour}`);
logFoodSchedule(...foodSchedule); // spread operator
//                           rest operator
const logFoodScheduleWithRest = (...args) => console.log(`eat: ${args[2]}, food ${args[1]} at ${args[0]}`);
logFoodScheduleWithRest(20, 'Hamburguer', false);
logFoodScheduleWithRest(...foodSchedule);
// Desestructuring (array)
const carSpecs = ['Motor Zetec 2.1', 2021];
// const moto = carSpecs[0];
// const year = carSpecs[1];
const [motor, year] = carSpecs;
console.log(carSpecs);
console.log(motor);
console.log(year);
// Desestructuring (object)
const item = {
    name: 'WaterColler 240ml',
    price: 350,
    measured: {
        height: 4,
        weight: 30,
    }
};
const itemname = item.name;
const itemprice = item.price;
const { name: productName, price: productPrice, measured } = item;
console.log(productName, productPrice, measured);
// Template Strings
const site = 'studygram 42';
const accessSite = 16546;
console.log(`O site ${site} teve a quantidade de acessos: ${accessSite}`);
console.log('O site ' + site + ' teve a quantidade de acessos: ' + accessSite);
//# sourceMappingURL=index.js.map