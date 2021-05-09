type Person = {
  name: string;
  age: number;
  salary: number;
  color?: {
    favorite: RGBColor | HotColor;
  };
};

type RGBColor = 'Red' | 'Green' | 'Blue';
type HotColor = 'Orange' | 'Yellow' | 'Red';

const person: Person = {
  name: 'John',
  age: 21,
  salary: 200,
};

export function setFavoriteColorIntoPerson(
  person: Person,
  color: RGBColor | HotColor,
): Person {
  return { ...person, color: { favorite: color } };
}

console.log(setFavoriteColorIntoPerson(person, 'Blue'));
console.log(person);
