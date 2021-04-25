"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// decorator
function showClass(constructor) {
    console.log(constructor);
}
// decorator
function emptyDecorator(_) { }
// factory
function showClassWhen(show) {
    return show ? showClass : emptyDecorator;
}
// factory - function that return a decorator
function decorator(obj) {
    return function (constructor) {
        console.log(obj.a + ' ' + obj.b);
        console.log(constructor);
    };
}
// @showClass
// @decorator({a:'ATA', b: 23})
// @showClassWhen(true)
let Eletronics = class Eletronics {
};
Eletronics = __decorate([
    showObject
], Eletronics);
function showObject(constructor) {
    console.log('decorator carregado');
    return class extends constructor {
        constructor(...args) {
            console.log('antes do super');
            super(...args);
            console.log('depois do super');
        }
    };
}
new Eletronics();
new Eletronics();
new Eletronics();
new Eletronics();
//# sourceMappingURL=index.js.map