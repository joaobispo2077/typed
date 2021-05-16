type myType = number;
const numberList: Array<number> = [2, 3, 5, 99, 12];
console.log(numberList);

async function promiseAsync() {
  return 1;
}

promiseAsync().then((result) => console.log(result + 2));

function myPromise(): Promise<myType> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(2), 1000);
  });
}

myPromise().then((result) => console.log(result + 2));
