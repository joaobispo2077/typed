
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