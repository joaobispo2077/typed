// Array<T> - T[]
function multiplyArgs(...args: Array<number>): number {
  return args.reduce((acc: number, value: number) => acc * value, 1);
}

function concatStrings(...args: Array<string>): string {
  return args.reduce((acc: string, value: string) => acc + value);
}

function textListToUpperCase(...args: string[]): string[] {
  return args.map((value: string) => value.toUpperCase());
}

console.log(multiplyArgs(2, 2));
console.log(concatStrings('hello', ' ', 'world'));
console.log(textListToUpperCase('hello', ' ', 'world'));
