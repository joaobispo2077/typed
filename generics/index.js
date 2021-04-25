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
//# sourceMappingURL=index.js.map