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
//enums
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
