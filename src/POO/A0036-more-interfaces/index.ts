interface Person {
  firstName: string;
}

// Declaration Merge
interface Person {
  lastName: string;
}

interface Person {
  readonly address: readonly string[];
}

interface Person {
  readonly age?: number;
}

const person: Person = {
  firstName: 'João',
  lastName: 'Bispo',
  address: ['Rua legal'],
};

//person.address.push('Rua legal');
console.log(person);
