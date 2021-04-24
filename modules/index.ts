import { getCircleCircumferenceByRadius as circ } from './circumference';
import getRectangleBySides from './rectangle';

console.log(circ(2));
console.log(getRectangleBySides(2, 4));


const { sayHiToPerson } = require('./greetings');

console.log(sayHiToPerson('JOAO'));
