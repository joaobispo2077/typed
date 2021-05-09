// | -> OR
// & -> AND (intersection)

type hasFirstname = { firstname: string };
type hasLastname = { lastname: string };
type hasAge = { age: number };

type Person = hasFirstname & hasLastname & hasAge;

const person: Person = {
  firstname: 'John',
  lastname: 'Smith',
  age: 21,
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC;

const intersection: Intersection = 'A';

console.log(intersection);

export default 20;
