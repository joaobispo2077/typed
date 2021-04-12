"use strict";
// 1
const double = (value) => value * 2;
console.log(double(10));
// 2
const sayHiToPerson = (name = 'Pessoa') => console.log(`Olá, ${name}`);
sayHiToPerson();
sayHiToPerson("Anna");
// 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// 4
const array = [55, 20];
array.push(...nums);
console.log(array);
// 5
const notes = [8.5, 6.3, 9.4];
// const notes1 = notes[0]
// const notes2 = notes[1]
// const notes3 = notes[2]
const [note1, note2, note3] = notes;
console.log(note1, note2, note3);
const cientist = { fistName: "Will", expierence: 12 };
// const fistName = cientist.fistName
// const expierence = cientist.expierence
const { fistName, expierence } = cientist;
console.log(fistName, expierence);
// extra
const waitForCallback = (second, callback) => setTimeout(() => callback(`Passaram ${second} segundos`), second * 1000);
waitForCallback(3, function (data) {
    console.log(data);
});
const waitForPromise = (second) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Passaram ${second} segundos`), second * 1000);
});
waitForPromise(3.5).then(console.log);
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(console.log)
    .catch(console.error);
//# sourceMappingURL=challenge.js.map