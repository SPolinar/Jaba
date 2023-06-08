const { getRandomNumber, getRandomArray,  }  = require('./utils/random');
const { checkArraySort} = require('./utils/array');
const correctlySortedArray = [1,2,3,4,5];
const incorrectlySortedArray = [3,5,6,7,5];
console.log (checkArraySort (correctlySortedArray));
console.log (checkArraySort (incorrectlySortedArray));