
// trying be generic without Generics
function rawEcho(obj: any): any {
  return obj;
}

console.log(rawEcho(2).length); // sem problema na compilação do TS, mas gera undefined em tempo de execução
console.log(rawEcho('Teste').length);
console.log(rawEcho({ name: 'John',  age: 21}));
console.log(rawEcho({ catname: 'Mia',  age: 7}));
console.log(rawEcho([{ catname: 'Mia',  age: 7}, { catname: 'Doug',  age: 4}]));

// trying be generic with Generics
function echoG<T>(obj: T): T {
  return obj;
}

console.log(echoG(2).length); // erro na compilação do TS
console.log(echoG<number>(2)); // forçar que o Generic assuma um Tipo
console.log(echoG('Teste').length);
console.log(echoG({ name: 'John',  age: 21}).name);
console.log(echoG({ catname: 'Mia',  age: 7}));
console.log(echoG([{ catname: 'Mia',  age: 7}, { catname: 'Doug',  age: 4}]).length);

// Generics Disponíveis na API

// const assessments: number[] = [2, 10, 3.9, 7.7];
//-- assign type in a generic constructor as class array
const assessments: Array<number> = [2, 10, 3.9, 7.7];
assessments.push(8.2);
assessments.push('5.9');
console.log(assessments);


// Array with generics
function logger<T>(args: T[]): T[] {
    args.forEach(element => console.log(element));
    return args;
}

logger([1,2,3]); // Array de números Genérico por inferência
logger<number>([2, 1]); // Array de números Genérico por referência
logger<string>(['Joao', 'Sofia', 'Vivi']);
logger<string | number>(['Joao', 2, 'Vivi']); // Array de Union Type (string and number)

logger<{name: string, age: number}>(
  [{ name: 'John', age: 21},
  { name: 'John', age: 21},
  { name: 'John', age: 21}]
);

type Student = {
  name: string;
  age: number
}

logger<Student>(
  [{ name: 'John', age: 21},
  { name: 'John', age: 21},
  { name: 'John', age: 21}]
);

interface IStudent {
  name: string;
  age: number;
}

logger<IStudent>(
  [{ name: 'John', age: 21},
  { name: 'John', age: 21},
  { name: 'John', age: 21}]
);

// Type Generic with Functions
type Echo = <T>(data: T) => T;

const callEcho: Echo = echoG;

console.log(callEcho<string>('Testing'));

// Type Generic with Classes

class ConcatenatorWithoutGenerics {
  constructor(public firstConcat: any, public secondConcat: any){}
  execute(){
    return `${this.firstConcat} ${this.secondConcat}`;
  }
}

new ConcatenatorWithoutGenerics('Bom', 'Dia');
console.log(new ConcatenatorWithoutGenerics('Bom', 'Dia').execute());
console.log(new ConcatenatorWithoutGenerics(2, 3).execute());
console.log(new ConcatenatorWithoutGenerics(3, 'Woops').execute());
console.log(new ConcatenatorWithoutGenerics({}, 'Woops').execute());

// with generics 
abstract class Concatenator<T, R>{
  constructor(public firstConcat: T, public secondConcat: T){};
  abstract execute(): R;
}

class Stringnator extends Concatenator<string, string> {
  execute(): string{
    return `${this.firstConcat} ${this.secondConcat}`;
  };
}

class Numberator extends Concatenator<number, number> {
  execute(): number{
    return this.firstConcat + this.secondConcat;
  };
}

class Data {
  constructor(public day: number, public month: number, public year: number){}
}
class Datenator extends Concatenator<Data, string> {
  getTime(date: Data): number {
    const { day, month, year } = date;

    return new Date(`${month}/${day}/${year}`).getTime();
  }
  execute(): string {
    const date1 = this.getTime(this.firstConcat);
    const date2 = this.getTime(this.secondConcat);
    const remainTime = Math.abs(date1 - date2);

    const days = 1000 * 60 * 60 * 24;

    const remainDays = Math.ceil(remainTime / days);

    return `${remainDays} dia(s)`;
  }
}

console.log(new Stringnator('Bom', 'Dia').execute());
console.log(new Numberator(2, 2).execute());
console.log(new Datenator(
  {day: 25, month: 10, year:2020 },
  {day: 10, month: 2, year: 2019 },
  ).execute());

  //  Challenge
  // Make a Queue Class
  // Attributtes queue/items Array
  // metodos add, next, show

class Queue<T> {
  constructor(private items: T[]){}

  show(): void{
    console.log(this.items);
  }

  add(item: T): void {
    this.show();
    this.items.push(item);
    this.show();
  }

  next(): T  | null {
    this.show();
    if(this.items.length > 0) {
      const item = this.items[0];
      this.items = this.items.slice(1);
      this.show();
      return item;
    } else {
      return null;
    }
  }
}

const students = new Queue(['John', 'Vivi']);
students.add('Sofia');
students.next();

const resultsOfProves = new Queue<number>([2, 10,9.5,8.7,6.5]);
resultsOfProves.add(3);
resultsOfProves.next();

const ProductsAndPrice = new Queue<number | string>([35, 'Pen drive', 400,'Teclado']);
ProductsAndPrice.add(300);
ProductsAndPrice.add('Mouse');
ProductsAndPrice.next();
ProductsAndPrice.next();

interface IPokemon {
  name: string;
  type: string;
}


const pokemons = new Queue<IPokemon>([{ name: 'Pikachu',  type: 'Thunder'}]);

const pokemon: IPokemon = {
  name: 'Charizard',
  type: 'Fire'
}

pokemons.add(pokemon);
pokemons.next();

class QueueNumber<T extends number> extends Queue<T>{}
const resultsOfProves2 = new QueueNumber<number>([2, 10,9.5,8.7,6.5]);
resultsOfProves2.add(3);
resultsOfProves2.next();

