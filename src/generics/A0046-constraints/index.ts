type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

export const getKey: GetKeyFn = (obj, key) => obj[key];

export const student = { firstname: 'Joao' };
export const animal = { color: 'marrom', vaccines: ['Vacina 1', 'Vacina 2'] };

console.log(getKey(student, 'firstname'));
console.log(getKey(animal, 'color'));
