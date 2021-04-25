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
const callEcho = echoG;
console.log(callEcho('Testing'));
// Type Generic with Classes
class ConcatenatorWithoutGenerics {
    constructor(firstConcat, secondConcat) {
        this.firstConcat = firstConcat;
        this.secondConcat = secondConcat;
    }
    execute() {
        return `${this.firstConcat} ${this.secondConcat}`;
    }
}
new ConcatenatorWithoutGenerics('Bom', 'Dia');
console.log(new ConcatenatorWithoutGenerics('Bom', 'Dia').execute());
console.log(new ConcatenatorWithoutGenerics(2, 3).execute());
console.log(new ConcatenatorWithoutGenerics(3, 'Woops').execute());
console.log(new ConcatenatorWithoutGenerics({}, 'Woops').execute());
// with generics 
class Concatenator {
    constructor(firstConcat, secondConcat) {
        this.firstConcat = firstConcat;
        this.secondConcat = secondConcat;
    }
    ;
}
class Stringnator extends Concatenator {
    execute() {
        return `${this.firstConcat} ${this.secondConcat}`;
    }
    ;
}
class Numberator extends Concatenator {
    execute() {
        return this.firstConcat + this.secondConcat;
    }
    ;
}
class Data {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
class Datenator extends Concatenator {
    getTime(date) {
        const { day, month, year } = date;
        return new Date(`${month}/${day}/${year}`).getTime();
    }
    execute() {
        const date1 = this.getTime(this.firstConcat);
        const date2 = this.getTime(this.secondConcat);
        const remainTime = Math.abs(date1 - date2);
        const days = 1000 * 60 * 60 * 24;
        const remainDays = Math.ceil(remainTime / days);
        return `${remainDays} dia(s)`;
    }
}
console.log(new Stringnator('Bom', 'Dia').execute());
console.log(new Numberator(2, 2).execute());
console.log(new Datenator({ day: 25, month: 10, year: 2020 }, { day: 10, month: 2, year: 2019 }).execute());
//# sourceMappingURL=index.js.map