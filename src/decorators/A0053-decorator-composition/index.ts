interface Constructor {
  new (...args: any[]): any;
}

function invertNameAndColor(param1: string, param2: string) {
  console.log('testing ' + param1);

  return function <T extends Constructor>(target: T): T {
    console.log('eu sou um decorator com um ' + param2);

    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        this.name = this.invert(args[0]);
        this.color = this.invert(args[1]);
      }
      invert(value: string): string {
        return value.split('').reverse().join('');
      }
    };
  };
}

function toLowerCase(param: string) {
  return function (target: Constructor): Constructor {
    console.log('im other decorator');
    console.log(param);

    return target;
  };
}

@invertNameAndColor('testador', 'gatos')
@toLowerCase('potato other decorator')
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('gato legal', 'cinza');
const animal2 = new Animal('gato emburrado', 'branco');
console.log(animal);
console.log(animal2);
console.log(animal instanceof Animal);
