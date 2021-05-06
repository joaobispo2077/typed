// Tuple
const people: readonly [string, number] = ['João', 21];

const peopleWithData: [string, ...number[]] = ['João', 21];

const peopleWithLastname: [string, string, number?] = ['João', 'Bispo', 21];

// readonly array
const names: readonly string[] = ['João', 'Viviane', 'Teste'];
const namesReadOnly: ReadonlyArray<string> = ['Teste'];

console.log(people);
console.log(peopleWithData);
console.log(peopleWithLastname);
console.log(names);
console.log(namesReadOnly);

export { namesReadOnly };
