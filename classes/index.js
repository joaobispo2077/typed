"use strict";
class Person {
    constructor(name, age = 20) {
        this.name = name;
        this.age = age;
    }
}
const person = new Person('João', 21);
console.log(person.age);
person.age = 22;
console.log(person.age);
console.log(person);
class PersonSmart {
    constructor(name, age = 20) {
        this.name = name;
        this.age = age;
    }
}
const personSmart = new PersonSmart('João', 21);
console.log(personSmart.age);
personSmart.age = 22;
console.log(personSmart.age);
console.log(personSmart);
// Challenge: Create Product Class
// Attributes: name, price and discount
// obs: discount is optional (default: 0)
// obs: create two products with two and three arguments
class Product {
    constructor(name, price, discount = 0) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    resume() {
        return `A ${this.name} custa ${this.priceWithDiscount()}`;
    }
    priceWithDiscount() {
        return (this.price * (1 - this.discount));
    }
}
const product1 = new Product('Bicileta', 825, 0.2);
const product2 = new Product('Teclado', 3500);
console.log(product1.resume());
class Car {
    constructor(brand, model, maxSpeed = 200) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.actualSpeed = 0;
    }
    changeVelocity(delta) {
        const speed = this.actualSpeed + delta;
        const isValidSpeed = speed >= 0 && speed <= this.maxSpeed;
        if (isValidSpeed)
            this.actualSpeed = speed;
        else
            this.actualSpeed = delta > 0 ? this.maxSpeed : 0;
        return this.actualSpeed;
    }
    accelerate() {
        return this.changeVelocity(50);
    }
    toBrake() {
        return this.changeVelocity(-50);
    }
}
const car1 = new Car('Tesla', 'Model 3');
console.log(car1.accelerate());
console.log(car1.accelerate());
console.log(car1.toBrake());
//# sourceMappingURL=index.js.map