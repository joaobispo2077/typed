
let isPossible = '?';
console.log(isPossible);

 let isCold = true;

 if(isCold) var action = 'Use casaco';  //hoisting with var - içar

 const foodname = 'batata';
//  foodname = 'potato';
 console.log(foodname);

 var secret = 'external secret';

 function revel(){
   var secret = 'intern secret haha';
   console.log(secret);
 }

 revel(); // shadowing
 console.log(secret);

 // Arrow function

 const sumNum = function(a: number, b: number): number {
   return a + b;
 }

 const subtract = (a: number, b: number): number => a - b;

 console.log(subtract(10,2));

 const sayHello = (): void => console.log('Hello!');

 sayHello();

 const talkWithPeople = (people: string): void => console.log(`Hi ${people}`);

 talkWithPeople('Sofia');
// this with arrow  fn and normal fn
//  function normalThis() {
//    console.log(this);
//  }

// normalThis();

// const normalWithSpecialThis = normalThis.bind(normalThis);

// normalWithSpecialThis();

// const arrowWithThis = (): void => console.log(this);

// arrowWithThis();

// const arrowWithSpecialThis = arrowWithThis.bind(arrowWithThis);

// arrowWithSpecialThis();
/*
Em funções tradicionais o this pode variar de acordo com a chamada da função
mas já em arrow function o this sempre aponta para o contexto em que ela foi definida
*/

// Default Params

const regressiveClock = (initialTime: number = 3, finalTime: number = initialTime - 5): void => {
  console.log(initialTime);

  while(initialTime > finalTime){  
    --initialTime;
    console.log(initialTime);
  }

  console.log(`Fim da contagem regressiva com um tempo inicial de ${initialTime} e tempo final de ${finalTime}`);
}

regressiveClock();
regressiveClock(3);
regressiveClock(5, 0);