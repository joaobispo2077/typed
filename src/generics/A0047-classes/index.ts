export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

const person = new Person('João', 654);

console.log(person);

export class Stack<S> {
  private counter = 0;
  private readonly items: { [key: number]: S } = [];

  constructor(...items: S[]) {
    items.forEach((item) => {
      this.add(item);
    });
  }

  private increment(): void {
    this.counter++;
  }

  private decrement(): void {
    this.counter--;
  }

  add(item: S): void {
    this.items[this.counter] = item;
    this.increment();
  }

  isEmpty(): boolean {
    return this.counter === 0;
  }

  remove(): S | null {
    if (this.isEmpty()) return null;

    this.decrement();
    const item = this.items[this.counter];
    delete this.items[this.counter];

    return item;
  }

  show(): void {
    for (const item in this.items) {
      console.log(this.items[item]);
    }
  }

  getLength(): number {
    return this.counter;
  }
}

const stringStack = new Stack<string>('batata');
stringStack.add('testing');
stringStack.add('potato');
stringStack.add('hello');
stringStack.show();
console.log('len', stringStack.getLength());
console.log(stringStack.remove());
stringStack.show();

interface Cat {
  name: string;
  weight: number;
}

const catStack = new Stack<Cat>({ name: 'miau', weight: 4.2 });
const cat: Cat = { name: 'miau 2', weight: 4.2 };
const cat2: Cat = { name: 'miau 3', weight: 4.2 };
const cat3: Cat = { name: 'miau 7', weight: 4.2 };

catStack.add(cat);
catStack.add(cat2);
catStack.add(cat3);
catStack.show();
console.log(catStack.remove());
catStack.show();
