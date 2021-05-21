function decorator(classPrototype: any, methodName: string | symbol): any {
  console.log(classPrototype);
  console.log(methodName);

  let valueProperty: any;

  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string')
        valueProperty = value.split('').reverse().join('');

      valueProperty = value;
      return;
    },
  };
}

export class Person {
  @decorator
  firstname: string;

  constructor(firstname: string, public lastname: string, private age: number) {
    this.firstname = firstname;
  }

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
