const { getRandomNumber, getRandomArray,  }  = require('./utils/random');
const { checkArraySort} = require('./utils/array');
const {StasSort} = require('./sorts/StasSort')
const {bugusSort} = require('./sorts/bogusSort');
const {bubbleSort}=require('./sorts/bubbleSort');
const {GnomeSort}=require('./sorts/GnomeSort');
let a=getRandomArray(100,0,1000);
//let b=StasSort (a);
//let b=bugusSort (a);
let b=GnomeSort (a);
console.log (b);
console.log (checkArraySort (b));
//console.log (getRandomArray (3));