type Constructor = { new(...args: any[]): {}  }

// decorator
function showClass(constructor: Constructor): void{
  console.log(constructor);
}

// decorator
function emptyDecorator(_: Constructor) {}

// factory
function showClassWhen(show: boolean): Function {
  return show ? showClass : emptyDecorator;
}

// factory - function that return a decorator
function decorator(obj: { a: string, b: number}){
  return function(constructor: Constructor): void {
    console.log(obj.a + ' ' + obj.b);
    console.log(constructor);
  }
}



function showObject(constructor: Constructor) {
  console.log('decorator carregado');

  return class extends constructor {
    constructor(...args: any[]){
      console.log('antes do super');
      super(...args);
      console.log('depois do super');
    }
  }
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
    console.log('new eletronics :D')
  }
}

function addReadable(constructor: Function){
  constructor.prototype.readable = function () {
    console.log(this);
  }
}

// casting to any type
//(<any>new Eletronics()).readable()
const eletronic = new Eletronics(); // 

eletronic.readable && eletronic.readable()

