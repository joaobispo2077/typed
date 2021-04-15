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
// methods of classes
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
// inherite
class Ferrari extends Car {
    constructor(model, maxSpeed = 200) {
        super("Ferrari", model, maxSpeed);
    }
    accelerate() {
        return this.changeVelocity(70);
    }
    toBrake() {
        return this.changeVelocity(-65);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(f40.brand, f40.model);
console.log(f40.accelerate());
console.log(f40.toBrake());
// getters and setters
class PersonWithAge {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120)
            this._age = value;
    }
}
const person3 = new PersonWithAge();
console.log(person3.age);
console.log(person3.age = 20);
console.log(person3.age);
// static attributtes and static methods
class Mathmatics {
    static getCircleCircumference(radius) {
        return this.PI * radius * radius;
    }
}
Mathmatics.PI = 3.1416;
console.log(Mathmatics.PI);
console.log(Mathmatics.getCircleCircumference(4));
console.log(Mathmatics.getCircleCircumference(4));
class Calc {
    constructor() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
}
class Sum extends Calc {
    execute(...numbers) {
        this.result = numbers.reduce((acc, number) => acc + number);
    }
}
class Multi extends Calc {
    execute(...numbers) {
        this.result = numbers.reduce((acc, number) => acc * number);
    }
}
const summ = new Sum();
const multii = new Multi();
summ.execute(2, 2, 2);
multii.execute(2, 2, 2);
console.log(summ.getResult());
console.log(multii.getResult());
//# sourceMappingURL=index.js.map