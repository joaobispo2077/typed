type MapperString = (text: string) => string;

export function mapStrings(array: string[], callback: MapperString): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }

  return newArray;
}

const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f'];

const lettersUppercase = mapStrings(letters, (item) => item.toUpperCase());

console.log(lettersUppercase);
