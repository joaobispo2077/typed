function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2);
}

const obj1 = { anykey: 'blabla' };
const obj2 = { otherkey: 2021 };

const union = mergeObjects(obj1, obj2);
console.log(union);
