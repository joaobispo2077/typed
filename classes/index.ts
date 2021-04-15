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
  
  public resume(): string {
    return `A ${this.name} custa ${this.priceWithDiscount()}`;
  }

  public priceWithDiscount(): number {
    return (this.price * (1 - this.discount));
  }
}

const product1 = new Product('Bicileta', 825, 0.2);
const product2 = new Product('Teclado', 3500);

console.log(product1.resume()) ;


class Car {
  private actualSpeed: number = 0;

  constructor(
    public brand: string, 
    public model: string, 
    private maxSpeed: number = 200
  ) {}

  protected changeVelocity(delta: number): number {
    const speed = this.actualSpeed + delta;
    const isValidSpeed = speed >= 0 && speed <= this.maxSpeed;

    if(isValidSpeed) this.actualSpeed = speed;
    else this.actualSpeed = delta > 0 ? this.maxSpeed : 0;

    return this.actualSpeed;
  }

  public accelerate(): number {
    return this.changeVelocity(50);
  }

  public toBrake(): number {
    return this.changeVelocity(-50);
  }

}

const car1 = new Car('Tesla', 'Model 3');

console.log(car1.accelerate());
console.log(car1.accelerate());

console.log(car1.toBrake());

class Ferrari extends Car {
  constructor(model: string, maxSpeed: number = 200){
    super("Ferrari", model, maxSpeed);
  }
  public accelerate(): number {
    return this.changeVelocity(70);
  }

  public toBrake(): number {
    return this.changeVelocity(-65);
  }

}

const f40 = new Ferrari('F40', 324);

console.log(f40.brand,f40.model);
console.log(f40.accelerate());
console.log(f40.toBrake());

class PersonWithAge{
  private _age: number = 0;

  get age(): number{
    return this._age;
  }

  set age(value: number){
    if(value >=0 && value <= 120) this._age = value;
  }
}

const person3 = new PersonWithAge();
console.log(person3.age);
console.log(person3.age = 20);
console.log(person3.age);

class Mathmatics {
  public static PI: number = 3.1416;

  static getCircleCircumference(radius: number): number {
    return this.PI * radius * radius;
  }
}


console.log(Mathmatics.PI);

console.log(Mathmatics.getCircleCircumference(4));


console.log(Mathmatics.getCircleCircumference(4));