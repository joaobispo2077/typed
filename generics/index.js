"use strict";
// trying be generic without Generics
function rawEcho(obj) {
    return obj;
}
console.log(rawEcho(2).length); // sem problema na compilação do TS, mas gera undefined em tempo de execução
console.log(rawEcho('Teste').length);
console.log(rawEcho({ name: 'John', age: 21 }));
console.log(rawEcho({ catname: 'Mia', age: 7 }));
console.log(rawEcho([{ catname: 'Mia', age: 7 }, { catname: 'Doug', age: 4 }]));
// trying be generic with Generics
function echoG(obj) {
    return obj;
}
console.log(echoG(2).length); // erro na compilação do TS
console.log(echoG(2)); // forçar que o Generic assuma um Tipo
console.log(echoG('Teste').length);
console.log(echoG({ name: 'John', age: 21 }).name);
console.log(echoG({ catname: 'Mia', age: 7 }));
console.log(echoG([{ catname: 'Mia', age: 7 }, { catname: 'Doug', age: 4 }]).length);
// Generics Disponíveis na API
// const assessments: number[] = [2, 10, 3.9, 7.7];
//-- assign type in a generic constructor as class array
const assessments = [2, 10, 3.9, 7.7];
assessments.push(8.2);
assessments.push('5.9');
console.log(assessments);
// Array with generics
function logger(args) {
    args.forEach(element => console.log(element));
    return args;
}
logger([1, 2, 3]); // Array de números Genérico por inferência
logger([2, 1]); // Array de números Genérico por referência
logger(['Joao', 'Sofia', 'Vivi']);
logger(['Joao', 2, 'Vivi']); // Array de Union Type (string and number)
logger([{ name: 'John', age: 21 },
    { name: 'John', age: 21 },
    { name: 'John', age: 21 }]);
logger([{ name: 'John', age: 21 },
    { name: 'John', age: 21 },
    { name: 'John', age: 21 }]);
logger([{ name: 'John', age: 21 },
    { name: 'John', age: 21 },
    { name: 'John', age: 21 }]);
//# sourceMappingURL=index.js.map