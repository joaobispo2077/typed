type Constructor = { new (...args: any[]): {} };

// decorator
function showClass(constructor: Constructor): void {
  console.log(constructor);
}

// decorator
function emptyDecorator(_: Constructor) {}

// factory
function showClassWhen(show: boolean): Function {
  return show ? showClass : emptyDecorator;
}

// factory - function that return a decorator
function decorator(obj: { a: string; b: number }) {
  return function (constructor: Constructor): void {
    console.log(obj.a + ' ' + obj.b);
    console.log(constructor);
  };
}

function showObject(constructor: Constructor) {
  console.log('decorator carregado');

  return class extends constructor {
    constructor(...args: any[]) {
      console.log('antes do super');
      super(...args);
      console.log('depois do super');
    }
  };
}

// new Eletronics()
// new Eletronics()
// new Eletronics()
// new Eletronics()

interface Eletronics {
  readable?(): void;
}
// @showClass
// @decorator({a:'ATA', b: 23})
// @showClassWhen(true)
@showObject
@addReadable
class Eletronics {
  constructor() {
    console.log('new eletronics :D');
  }
}

function addReadable(constructor: Function) {
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
  @notNegative
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  @freeze
  withdraw(@infoParams value: number): boolean {
    if (value <= this.balance) {
      this.balance -= value;
      return true;
    } else {
      return false;
    }
  }

  @freeze
  getBalance(): number {
    return this.balance;
  }
}

const holderAccountDecorator = new HolderAccountDecorator(10000);
holderAccountDecorator.withdraw(5000);
console.log(holderAccountDecorator.getBalance());

// holderAccountDecorator.getBalance = function () {
//   return this['balance'] + 7000;
// }

// holderAccountDecorator.withdraw(5001);

console.log(holderAccountDecorator.getBalance());

// decorator that freeze changes in a method
function freeze(target: any, property: string, descritor: PropertyDescriptor) {
  console.log(target);
  console.log(property);
  descritor.writable = false;
}

// intercept attribbute manipulation
function notNegative(target: any, property: string) {
  delete target[property];
  Object.defineProperty(target, property, {
    get: function (): any {
      return target[`_${property}`];
    },
    set: function (value: any): void {
      if (value < 0) throw new Error('Invalid Balance');
      else target[`_${property}`] = value;
    },
  });
}

function infoParams(target: any, property: string, indexParam: number) {
  console.log(`Target: ${target}`);
  console.log(`Method: ${property}`);
  console.log(`Param index: ${indexParam}`);
}
