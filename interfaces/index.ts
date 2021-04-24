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
sayHelloToWorker({ name: 'Teste',   age: 15, xyz: true});