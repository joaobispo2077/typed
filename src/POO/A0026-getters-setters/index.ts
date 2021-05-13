export class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    private age: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  public getAge(): number {
    return this.age;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  public getFullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}

const person = new Person('João', 'Bispo', 21, '000.000.00-00');
console.log(person.cpf);
console.log((person.cpf = '000.000.00-99'));
console.log(person.cpf);
