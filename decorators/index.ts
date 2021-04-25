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

// @showClass
// @decorator({a:'ATA', b: 23})
// @showClassWhen(true)

@showObject
class Eletronics {

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

new Eletronics()
new Eletronics()
new Eletronics()
new Eletronics()