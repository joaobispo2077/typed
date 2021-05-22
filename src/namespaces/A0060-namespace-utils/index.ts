import _ from 'lodash';

const array = [100, 200, 300, 400, 500];

_.multiply = (array) => array.reduce((acc, item) => acc + item, 0);

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.multiply(array));

global.myGlobal = 'wow';
console.log(global.myGlobal);
