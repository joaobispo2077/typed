type FilterCallback<U> = (item: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(list: T[], cb: FilterCallback<T>): T[] {
  const newList = [];

  for (const item of list) {
    if (cb(item)) newList.push(item);
  }

  return newList;
}
const list = [10, 20, 30, 40, 50, 'blabla'];

console.log(list.filter((value) => value < 50));
console.log(myFilter(list, (value) => value < 50));
