// type Persona = {
//   name: string;
//   age: number;
// }

//{ name: string }

interface Human {
  name: string
  age?: number // interface com atributo opcional
  [prop: string]: any // interface com atributo dinâmico
  greeting(lastname: string): void
  testing?(lastname: number): void // interface com função opcional
}

function sayHelloToWorker(worker: Human): void {
  console.log(`Hello, ${worker.name}!`); 
}

function changeWorkerName(worker: Human): void {
  worker.name = 'Pão';
}

const worker: Human = {
  name: 'John',
  age: 21,
  greeting(lastname : string): void{
    console.log(`Hy my name is ${this.name} ${lastname}`)
  }
};

worker.greeting('Skywalker');
sayHelloToWorker(worker);
// sayHelloToWorker({ name: 'Teste',   age: 15, xyz: true});

// Classes

class Client implements Human {
  name: string = '';
  lastAcess: Date = new Date();
  greeting(lastname : string): void {
    console.log(`Hy my name is ${this.name} ${lastname}`);
  }
}

const client = new Client();
client.name = 'Han';
client.greeting('Solo');
console.log(client);

// functions

interface Calculator {
  (a: number, b: number): number;
};

// const potency: Calculator = (base: number, exponent: number): number => Math.pow(base, exponent);
// const potency: Calculator = (base: number, exponent: number): number => base ** exponent;
// const potency: Calculator = (base: number, exponent: number): number => Array.from(new Array(exponent)).reduce(multiplicator => multiplicator * multiplicator, base);
const potency: Calculator = (base: number, exponent: number): number => Array(exponent).fill(base).reduce((acc,multiplicator)=> acc * multiplicator);

console.log(potency(2,1));


// Herança - implements and extends

interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B{
  c(): void
}

class RealA implements A {
  a(): void {};
}
class RealAB implements A, B {
  a(): void {};
  b(): void{};
}
class RealABC implements ABC {
  a(): void {};
  b(): void{};
  c(): void{};
}

abstract class AbstractABD implements A, B {
  a(): void {};
  b(): void{};
  abstract d(): void; 
}