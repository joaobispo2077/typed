class Person {
  public name: string;
  age: number;

  constructor(name: string, age: number = 20){
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
  constructor(public name: string, public age: number = 20){

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

class Product{
  constructor(public name: string, public price: number, 
    public discount: number = 0){}
}

const product1 = new Product('Bicileta', 825, 0.2);
const product2 = new Product('Teclado', 3500);

console.log(product1, product2 );
