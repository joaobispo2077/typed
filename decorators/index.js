"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
// @showClass
// @decorator({a:'ATA', b: 23})
// @showClassWhen(true)
let Eletronics = class Eletronics {
    constructor() {
        console.log('new eletronics :D');
    }
};
Eletronics = __decorate([
    showObject,
    addReadable
], Eletronics);
function addReadable(constructor) {
    constructor.prototype.readable = function () {
        console.log(this);
    };
}
// casting to any type
//(<any>new Eletronics()).readable()
const eletronic = new Eletronics(); // 
eletronic.readable && eletronic.readable();
// Decorator de método e atributo
class HolderAccountDecorator {
    constructor(balance) {
        this.balance = balance;
    }
    withdraw(value) {
        if (value <= this.balance) {
            this.balance -= value;
            return true;
        }
        else {
            return false;
        }
    }
    getBalance() {
        return this.balance;
    }
}
__decorate([
    notNegative
], HolderAccountDecorator.prototype, "balance", void 0);
__decorate([
    freeze,
    __param(0, infoParams)
], HolderAccountDecorator.prototype, "withdraw", null);
__decorate([
    freeze
], HolderAccountDecorator.prototype, "getBalance", null);
const holderAccountDecorator = new HolderAccountDecorator(10000);
holderAccountDecorator.withdraw(5000);
console.log(holderAccountDecorator.getBalance());
// holderAccountDecorator.getBalance = function () {
//   return this['balance'] + 7000;
// }
// holderAccountDecorator.withdraw(5001);
console.log(holderAccountDecorator.getBalance());
// decorator that freeze changes in a method
function freeze(target, property, descritor) {
    console.log(target);
    console.log(property);
    descritor.writable = false;
}
// intercept attribbute manipulation
function notNegative(target, property) {
    delete target[property];
    Object.defineProperty(target, property, {
        get: function () {
            return target[`_${property}`];
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Invalid Balance');
            else
                target[`_${property}`] = value;
        },
    });
}
function infoParams(target, property, indexParam) {
    console.log(`Target: ${target}`);
    console.log(`Method: ${property}`);
    console.log(`Param index: ${indexParam}`);
}
//# sourceMappingURL=index.js.map