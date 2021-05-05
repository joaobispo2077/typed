/* eslint-disable */
/** Type Annotations */

let name: string = 'Joao'; // Qualquer tio
let age: number = 0b1010; //
let adult: boolean = true;
let simbol: symbol = Symbol('any-symbol');
// let big: bigint = 10n;

// Arrays

let numbers: Array<number> = [1, 2, 3];
let numbers2: number[] = [3, 2, 1];

let letters: Array<string> = ['a', 'b', 'c', 'd', 'e', 'f'];
let letters2: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

// Objects

let person: { name: string; age: number; adult?: boolean } = {
  name,
  age,
};

console.log(person);

// Functions

function sum(x: number, y: number): number {
  return x + y;
}

const add: (x: number, y: number) => number = (x, y) => x + y;

export default name;
