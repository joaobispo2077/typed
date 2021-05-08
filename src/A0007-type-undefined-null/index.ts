export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return { firstName, lastName };
}

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squaredOfTwo = squareOf(2);
const squaredOfTwoString = squareOf('2');

if (squaredOfTwo === null) {
  console.log('Conta inválida');
} else {
  console.log('numoro', squaredOfTwo * 2);
}
