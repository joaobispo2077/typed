interface PersonProtocol<T = string, U = number> {
  firstName: T;
  lastName: T;
  age: U;
}

type HumanProtocol<T = string, U = number> = {
  firstName: T;
  lastName: T;
  age: U;
};

export const person: PersonProtocol<string, number> = {
  firstName: 'João',
  lastName: 'Bispo',
  age: 99999,
};

export const student: PersonProtocol = {
  firstName: 'João',
  lastName: 'Bispo',
  age: 99999,
};

export const testing: PersonProtocol<number, string> = {
  firstName: 641651,
  lastName: 65465,
  age: '99999',
};

export const personWithType: HumanProtocol<string, number> = {
  firstName: 'João',
  lastName: 'Bispo',
  age: 99999,
};

export const studentWithType: HumanProtocol = {
  firstName: 'João',
  lastName: 'Bispo',
  age: 99999,
};

export const testingWithType: HumanProtocol<number, string> = {
  firstName: 641651,
  lastName: 65465,
  age: '99999',
};

console.log(person);
console.log(student);
console.log(testing);

console.log(personWithType);
console.log(studentWithType);
console.log(testingWithType);
