// export abstract class Person {
//   protected abstract firstName: string;
//   protected abstract lastName: string;
//   protected abstract getFullName(): string;
// }

type TypePerson = {
  firstName?: string;
  lastName: string;
  getFullName(): string;
};

interface Person {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

interface Buyer extends Person {
  buyThings(): void;
}

export class Customer implements Buyer {
  constructor(public firstName: string, public lastName: string) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  buyThings(): void {
    console.log('Comprando coisas...');
  }
}

const customer = new Customer('John', 'Bispo');

customer.buyThings();
console.log(customer.getFullName());
