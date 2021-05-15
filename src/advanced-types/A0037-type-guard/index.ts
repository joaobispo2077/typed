export function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  return `${a}${b}`;
}

console.log(add(20, 2));
console.log(add('a', 'b'));

type Person = { name: string; type: 'person' };
type Animal = { color: string; type: 'animal' };

type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  type: 'person' = 'person';
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal) {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);
  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log(obj.color);
      return;
  }
}

showName(new Student('Joao'));
