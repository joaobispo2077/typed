export class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}

  public getAge(): number {
    return this.age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getFullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}

export class Student extends Person {
  public getFullname(): string {
    return `Estudante: ${this.firstname} ${this.lastname}`;
  }
}

export class Customer extends Person {
  public getFullname(): string {
    return `Cliente: ${this.firstname} ${this.lastname}`;
  }
}

const student = new Student('João', 'Bispo', 21, '000.000.00-00');
const person = new Person('João', 'Bispo', 21, '000.000.00-00');
const customer = new Customer('João', 'Bispo', 21, '000.000.00-00');

console.log(student);
console.log(person);
console.log(customer);

console.log(student.getFullname());
console.log(person.getFullname());
console.log(customer.getFullname());
