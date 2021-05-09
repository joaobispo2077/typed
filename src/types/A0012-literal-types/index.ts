// eslint-disable-next-line
let x = 10;
x = 0b1010;
//x = 'ata';

const y = 10; // literal type - subnumber

// eslint-disable-next-line
let a: 100 = 100;
// a = 120;

// eslint-disable-next-line
let b = 200 as const;

const person = {
  firstName: 'Joao' as const,
  lastName: 'Bispo',
};

person.firstName = 'Joao';

function choiceColor(color: 'Verde' | 'Azul' | 'Roxo'): string {
  return color;
}

console.log(choiceColor('Roxo'));

export default 'literal types';
