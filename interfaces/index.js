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
sayHelloToWorker({ name: 'Teste', age: 15, xyz: true });
//# sourceMappingURL=index.js.map