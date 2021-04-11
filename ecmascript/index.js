"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var isPossible = '?';
console.log(isPossible);
var isCold = true;
if (isCold)
    var action = 'Use casaco'; //hoisting with var - içar
var foodname = 'batata';
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
var sumNum = function (a, b) {
    return a + b;
};
var subtract = function (a, b) { return a - b; };
console.log(subtract(10, 2));
var sayHello = function () { return console.log('Hello!'); };
sayHello();
var talkWithPeople = function (people) { return console.log("Hi " + people); };
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
var regressiveClock = function (initialTime, finalTime) {
    if (initialTime === void 0) { initialTime = 3; }
    if (finalTime === void 0) { finalTime = initialTime - 5; }
    console.log(initialTime);
    while (initialTime > finalTime) {
        --initialTime;
        console.log(initialTime);
    }
    console.log("Fim da contagem regressiva com um tempo inicial de " + initialTime + " e tempo final de " + finalTime);
};
regressiveClock();
regressiveClock(3);
regressiveClock(5, 0);
// Rest & Spread 
var numbers = [3, 6, 10, 5151, -4];
console.log(Math.max.apply(Math, numbers)); // spread operator
var classA = ['Lana', 'Alana', 'Sofia'];
var classB = __spreadArray(['Clara', 'Nicole', 'Lorena'], classA); // spread operator
console.log(classB);
function getArrayOfTwoNumbers(logNumber, logNumber2) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    console.log(logNumber);
    console.log(logNumber2);
    return args;
}
var twoNumbers = getArrayOfTwoNumbers(2, 3, 4, 5, 6);
console.log(150, 176, twoNumbers);
console.log(getArrayOfTwoNumbers.apply(void 0, __spreadArray([200, 132], numbers)));
// Rest & Spread with Tuple
var foodSchedule = [10, 'Potato', true];
var logFoodSchedule = function (hour, food, eat) { return console.log("eat: " + eat + ", food " + food + " at " + hour); };
logFoodSchedule.apply(void 0, foodSchedule); // spread operator
//                           rest operator
var logFoodScheduleWithRest = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return console.log("eat: " + args[2] + ", food " + args[1] + " at " + args[0]);
};
logFoodScheduleWithRest(20, 'Hamburguer', false);
logFoodScheduleWithRest.apply(void 0, foodSchedule);
// Desestructuring (array)
var carSpecs = ['Motor Zetec 2.1', 2021];
// const moto = carSpecs[0];
// const year = carSpecs[1];
var motor = carSpecs[0], year = carSpecs[1];
console.log(carSpecs);
console.log(motor);
console.log(year);
// Desestructuring (object)
var item = {
    name: 'WaterColler 240ml',
    price: 350,
    measured: {
        height: 4,
        weight: 30,
    }
};
var itemname = item.name;
var itemprice = item.price;
var productName = item.name, productPrice = item.price, measured = item.measured;
console.log(productName, productPrice, measured);
// Template Strings
var site = 'studygram 42';
var accessSite = 16546;
console.log("O site " + site + " teve a quantidade de acessos: " + accessSite);
console.log('O site ' + site + ' teve a quantidade de acessos: ' + accessSite);
//# sourceMappingURL=index.js.map