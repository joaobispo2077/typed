"use strict";
// Exercício 1 - Classe
class Motocycle {
    constructor(name, speed = 0) {
        this.name = name;
        this.speed = speed;
    }
    honk() {
        console.log('Toooooooooot!');
    }
    accelerate(delta) {
        this.speed = this.speed + delta;
    }
}
var motinha = new Motocycle('Ducati');
motinha.honk();
console.log(motinha.speed);
motinha.accelerate(30);
console.log(motinha.speed);
// Exercício 2 - Herança
class Object2D {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}
class Rectangle extends Object2D {
    constructor(height, weight) {
        super(height, weight);
        this.height = height;
        this.weight = weight;
    }
    getArea() {
        return this.height * this.weight;
    }
}
const retangulo = new Rectangle(5, 7);
console.log(retangulo.getArea());
// Exercício 3 - Getters & Setters
class Trainner {
    constructor() {
        this._firstName = '';
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(name) {
        if (name.length >= 3)
            this._firstName = name;
    }
}
const trainner = new Trainner();
console.log(trainner.firstName);
trainner.firstName = 'Jo';
console.log(trainner.firstName);
trainner.firstName = 'João';
console.log(trainner.firstName);
//# sourceMappingURL=challenge.js.map