export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log(isNumber('trying'));
console.log(isNumber(['bla']));
console.log(isNumber(22));

export function add<T>(...args: T[]): number {
  const result = args.reduce((sum, value) => {
    if (isNumber(value) && isNumber(sum)) return sum + value;

    return sum;
  }, 0);

  // if(isNumber(result))

  return result;
}

console.log(add(1, 2, 3));
console.log(add('a', 'b', 'c'));
console.log(add(...[1, 2, 3, 'a', 'b', 'c']));
