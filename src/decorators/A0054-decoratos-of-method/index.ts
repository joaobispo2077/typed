function decorator(
  classPrototype: any,
  methodName: string,
  descritor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descritor);

  return {
    value: (...args: string[]) => {
      return args[0].toUpperCase();
    },
  };
}

export class Person {
  constructor(
    public firstname: string,
    public lastname: string,
    private age: number,
  ) {}

  @decorator
  public getFirstnameCombined(value: string): string {
    return this.firstname + ' ' + value;
  }

  public getAge(): number {
    return this.age;
  }
  get fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullname(value: string) {
    const words = value.split(/\s+/g);
    const firstname = words.shift();
    if (!firstname) return;
    this.firstname = firstname;
    this.lastname = words.join(' ');
  }
}

const person = new Person('João', 'bispo', 1);
// person.getAge = () => 333;
const method = person.getFirstnameCombined('decorator');
console.log(method);
