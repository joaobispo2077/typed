type Adder = {
  (a: number, b: number): number;
  (x: number): number;
  (...numbers: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((total, num) => total + num, x + (y || 0));

  if (x && y) return x + y;

  return x;
};

console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
console.log(adder(1, 2, 3, 4));
