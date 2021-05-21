/* eslint-disable @typescript-eslint/no-namespace*/
namespace Space {
  export const name = 'Joao';

  export class Person {
    constructor(public name: string) {}
  }

  const person = new Person(name);
  console.log(person);

  export namespace OtherSpace {
    export const lastname = 'Bispo';
  }
}

const person2 = new Space.Person('Batatinha');
console.log(person2);
console.log(Space.OtherSpace.lastname);
