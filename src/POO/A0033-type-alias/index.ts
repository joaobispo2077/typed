// export abstract class Person {
//   protected abstract firstName: string;
//   protected abstract lastName: string;
//   protected abstract getFullName(): string;
// }
type Person = {
  firstName: string;
  lastName: string;
  getFullName(): string;
};

type Student = {
  readBook(): void;
};

export class Customer implements Person, Student {
  constructor(public firstName: string, public lastName: string) {}

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  readBook(): void {
    console.log('Lendo um livro...');
  }
}

const customer = new Customer('John', 'Bispo');

customer.readBook();
console.log(customer.getFullName());
