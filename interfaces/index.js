"use strict";
// type Persona = {
//   name: string;
//   age: number;
// }
function sayHelloToWorker(worker) {
    console.log(`Hello, ${worker.name}!`);
}
function changeWorkerName(worker) {
    worker.name = 'Pão';
}
const worker = {
    name: 'John',
    age: 21,
    greeting(lastname) {
        console.log(`Hy my name is ${this.name} ${lastname}`);
    }
};
worker.greeting('Skywalker');
sayHelloToWorker(worker);
// sayHelloToWorker({ name: 'Teste',   age: 15, xyz: true});
// Classes
class Client {
    constructor() {
        this.name = '';
        this.lastAcess = new Date();
    }
    greeting(lastname) {
        console.log(`Hy my name is ${this.name} ${lastname}`);
    }
}
const client = new Client();
client.name = 'Han';
client.greeting('Solo');
console.log(client);
;
// const potency: Calculator = (base: number, exponent: number): number => Math.pow(base, exponent);
// const potency: Calculator = (base: number, exponent: number): number => base ** exponent;
// const potency: Calculator = (base: number, exponent: number): number => Array.from(new Array(exponent)).reduce(multiplicator => multiplicator * multiplicator, base);
const potency = (base, exponent) => Array(exponent).fill(base).reduce((acc, multiplicator) => acc * multiplicator);
console.log(potency(2, 1));
class RealA {
    a() { }
    ;
}
class RealAB {
    a() { }
    ;
    b() { }
    ;
}
class RealABC {
    a() { }
    ;
    b() { }
    ;
    c() { }
    ;
}
//# sourceMappingURL=index.js.map