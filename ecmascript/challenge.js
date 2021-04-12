"use strict";
// 1
var double = function (value) { return value * 2; };
console.log(double(10));
// 2
var sayHiToPerson = function (name) {
    if (name === void 0) { name = 'Pessoa'; }
    return console.log("Ol\u00E1, " + name);
};
sayHiToPerson();
sayHiToPerson("Anna");
// 3
var nums = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, nums));
// 4
var array = [55, 20];
array.push.apply(array, nums);
console.log(array);
// 5
var notes = [8.5, 6.3, 9.4];
// const notes1 = notes[0]
// const notes2 = notes[1]
// const notes3 = notes[2]
var note1 = notes[0], note2 = notes[1], note3 = notes[2];
console.log(note1, note2, note3);
var cientist = { fistName: "Will", expierence: 12 };
// const fistName = cientist.fistName
// const expierence = cientist.expierence
var fistName = cientist.fistName, expierence = cientist.expierence;
console.log(fistName, expierence);
//# sourceMappingURL=challenge.js.map