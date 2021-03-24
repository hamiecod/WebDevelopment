// it prints the math object, you can use the math object as a cheatsheet
let m = Math;
console.log(m);

// Printing the constants from Math Object
// `m` is the shorthand for `Math`
console.log("The value of Math.E is ", Math.E);
console.log("The value of Math.LN2 is ", m.LN2);
console.log("The value of Math.LN10 is ", m.LN10);
console.log("The value of Math.LOG2E is ", m.LOG2E);
console.log("The value of Math.PI is ", m.PI);
console.log("The value of Math.SQRT1_2 is ", m.SQRT1_2);
console.log("The value of Math.SQRT2 is ", m.SQRT2);

// Printing the functions from Math Object
let a = 34.3634;
let b = 89;

console.log("The value of a and b is ", a, b);
console.log("The value of a and b rounded is ", Math.round(a), Math.round(b));
// rounds off the value to the nearest integer
console.log(`3 raised to the power of 2 is `, Math.pow(3, 2));
// returns the value of a raised to the power of b
console.log(`2 raised to the power of 12 is `, Math.pow(2, 12));

console.log("Square root of 36 is ", Math.sqrt(36));
// returns the square root of a number
console.log("Square root of 50 is ", Math.round(Math.sqrt(50)));
    
// Ceil and floor
// ceil function rounds the value up to nearest integer
// floor function rounds the value down to nearest integer
console.log("5.8 rounded up to nearest integer is ", Math.ceil(5.8));
console.log("5.8 rounded down to nearest integer is ", Math.floor(5.8));

// Absolute function
console.log("Absolute value of 5.66 is ", Math.abs(5.66));
console.log("Absolute value of -5.66 is ", Math.abs(-5.66));
// it returns the absolute value of a number

// Trignometric functions
console.log("The vale of sin(pi) is ", Math.sin(Math.PI));
// it returns the value of sin pi
console.log("The vale of sin(pi/2) is ", Math.sin(Math.PI/2));
console.log("The value of cos(pi) is ", Math.cos(Math.PI/2));

// Min and Max functions
console.log("Minimum value of 4, 5, 6 is ", Math.min(4,5,6));
console.log("Minimum value of 14, 5, 16 is ", Math.min(14,5,16));
// returns the minimum value from a set of numbers

console.log("Maximum value of 4, 5, 6 is ", Math.max(4,5,6));
console.log("Maximum value of 14, 5, 16 is ", Math.max(14,5,16));
// returns the maximum value from a set of numbers

// Generating a random number
let r = Math.random();
console.log("The random number is ", r);
// generates a random number between 0 and 1

// if you want to create a random generator between 1 and 100
// let r1_100 = min + (max-min)*Math.random();
let min = 10;
let max = 100;
let r1_100 = min + (max-min)*Math.random();
// above given is the formula to get a random number between 1 and 100
// it just multiplies the the the random number between 0 and 1 with the difference between maximum and minimum and then adds the minimum to it so that the value is not faulty and not below the minimum value
console.log(`The random number is `, Math.round(r1_100));

let x = 4;
let y = 10;
let random = (x + (y-x)*Math.random());
console.log(Math.round(random));