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
//# sourceMappingURL=index.js.map