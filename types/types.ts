// The Javascript is a programing language with dynamic types
//string
let firstName: string = 'João';
console.log(firstName);
// name = 20

//numbers
let age: number = 21; 
// age = "batata";
console.log(age);
  
//boolean
let hasHobbies: boolean = false;
// hasHobbies = 1;
console.log(hasHobbies);

// explicit types

let actualAge: number;
actualAge = 496498465;
console.log(typeof actualAge);

// array
let hobbies: any[] = ["Programar", "Comer", "Assistir"];
console.log(hobbies[0]);
hobbies = [100, 200, 300]
console.log(hobbies);

// tuplas
let address: [string, number] = ["rua das pizzas", 654];
console.log(address);