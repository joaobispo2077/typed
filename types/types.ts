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
let address: [string, number] = ["rua das pizzasas", 12002];
console.log(address);

// enums

enum Color {
  Yellow,  // 0
  Blue,  // 1
  Orange,  // 2
  Gray = 150, // 150
  Brown = 150, // 150
  Black = 9654,
  White // 9655
};

let color: Color = Color.Orange;
console.log("color", color);

console.log(Color.Black, Color.White);

// any

let car: any = 'BMW';
console.log("any car",car);
car = 10;
console.log("any car",car);
car = {type: "road"};
console.log("any car",car);

// functions

function sayMyName(): string {
  return firstName;
}

console.log("f", sayMyName());

function sayHi(): void {
   console.log('hi');
}

sayHi();

function multiplicate(number1: number, number2: number): number {
   return number1 * number2;
}

console.log(multiplicate(2, 10));

// functions as types

const teste = function(numberTest: number, text: string ): boolean {
  console.log(text);

  if (numberTest < 0)
  return false;


  return true;
}

let calc: (number1: number, number2: number) => number; // variable with function type
calc = multiplicate;
console.log(calc(10,10));


// objects
let user: {
  name: string,
  age: number,
  type?: string // optional type
} = {
 name: 'João Topperson',
 age: 21564165
}

// user = {type: 'surf'}

console.log(user);