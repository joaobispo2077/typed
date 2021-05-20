@decorator
export class Animal {
  constructor(public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  console.log('eu sou um decorator');

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      this.color = 'testing';
    }
  };
}

const animal = new Animal('azul');
console.log(animal);
