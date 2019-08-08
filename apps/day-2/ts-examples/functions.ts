// ES5 - Named function
// function sum(a, b) {
//   return a + b;
// }

// function expression, anonymous function
// var sum = function (a, b) {
//   return a + b;
// }

// arrow function #1
// var sum = (a, b) => {
//   return a + b;
// }

// arrow function #2
var sum = (a, b) => a + b;

var square = x => x * x;

var c = sum(10, 20);

console.log('sum:', c);
console.log('square:', square(10));