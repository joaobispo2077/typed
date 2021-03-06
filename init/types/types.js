"use strict";
// The Javascript is a programing language with dynamic types
//string
let firstName = 'João';
console.log(firstName);
// name = 20
//numbers
let age = 21;
// age = "batata";
console.log(age);
//boolean
let hasHobbies = false;
// hasHobbies = 1;
console.log(hasHobbies);
// explicit types
let actualAge;
actualAge = 496498465;
console.log(typeof actualAge);
// array
let hobbies = ["Programar", "Comer", "Assistir"];
console.log(hobbies[0]);
hobbies = [100, 200, 300];
console.log(hobbies);
// tuplas
let address = ["rua das pizzasas", 12002];
console.log(address);
// enums
var Color;
(function (Color) {
    Color[Color["Yellow"] = 0] = "Yellow";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Orange"] = 2] = "Orange";
    Color[Color["Gray"] = 150] = "Gray";
    Color[Color["Brown"] = 150] = "Brown";
    Color[Color["Black"] = 9654] = "Black";
    Color[Color["White"] = 9655] = "White"; // 9655
})(Color || (Color = {}));
;
let color = Color.Orange;
console.log("color", color);
console.log(Color.Black, Color.White);
// any
let car = 'BMW';
console.log("any car", car);
car = 10;
console.log("any car", car);
car = { type: "road" };
console.log("any car", car);
// functions
function sayMyName() {
    return firstName;
}
console.log("f", sayMyName());
function sayHi() {
    console.log('hi');
}
sayHi();
function multiplicate(number1, number2) {
    return number1 * number2;
}
console.log(multiplicate(2, 10));
// functions as types
const teste = function (numberTest, text) {
    console.log(text);
    if (numberTest < 0)
        return false;
    return true;
};
let calc; // variable with function type
calc = multiplicate;
console.log(calc(10, 10));
// objects
let user = {
    name: 'João Topperson',
    age: 21564165
};
// user = {type: 'surf'}
console.log(user);
// Challenge
/*
 Criar um objeto funcionário com:
 - Array de strings com os nomes dos supervisores
 - Função de bater o ponto que recebe hora e retorna uma string
    - retorna ponto norma se o ponto for menor ou igual a 8
    - retorna Ponto fora do horário se o ponto for maior que 8
*/
let employee;
let supervisors = ['Lucia', 'Ana'];
function hitPoint(hour) {
    if (hour > 8)
        return "Ponto fora do horário";
    else
        return "Ponto normal";
}
employee = {
    supervisors,
    hitPoint
};
console.log(employee);
console.log(employee.supervisors);
console.log(employee.hitPoint(8));
console.log(employee.hitPoint(9));
let employee2;
employee2 = {
    supervisors,
    hitPoint
};
console.log(employee2);
console.log(employee2.supervisors);
console.log(employee2.hitPoint(8));
console.log(employee2.hitPoint(9));
// Union types
// parse with union TypeS
let note0 = 9;
console.log(`Minha nota eh: ${note0}`);
note0 = String(note0);
console.log(`Minha nota eh: ${note0}`);
// parse without union types
let note = 10;
let numberText;
console.log(`Minha nota eh: ${note}`);
numberText = String(note);
console.log(`Minha nota eh: ${numberText}`);
// Checking types
let anyvalue = 30;
if (typeof anyvalue === 'number')
    console.log('anyvalue is number type');
else
    console.log('anyvalue is not anumber type');
// type never returns => function that never reachable in end 
// function with infinity loop and function that throw error
function failure(msg) {
    throw new Error(msg);
}
const productWithValidation = {
    name: "Azeitona",
    price: 10,
    validate() {
        if (!this.name || this.name.trim().length === 0)
            failure('Produto com n0ome inválido');
        if (!this.price || this.price <= 0)
            failure('Produto com preço inválido');
        console.log("Produto válido");
    }
};
productWithValidation.validate();
// null type
let height;
height = null;
console.log("height", height);
height = 10;
console.log("height", height);
height = null;
console.log("height", height);
const contact1 = {
    name: 'Ciclano',
    tel1: '4654654',
    tel2: null
};
console.log("contact1", contact1);
//# sourceMappingURL=types.js.map