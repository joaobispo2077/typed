export class Person {
  static defaulAge = 18;
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  static describe(): string {
    return 'Person class is OBJ that represents People';
  }

  static create(firstname: string, lastname: string): Person {
    return new Person(firstname, lastname, Person.defaulAge, '000.000.00-00');
  }

  showDefaults(): void {
    console.log(Person.defaulAge);
  }
}

const person = new Person('João', 'Bispo', 21, '000.000.00-00');
console.log(person);
console.log(Person.describe());
console.log(Person.create('João', 'Bispo'));
person.showDefaults();
