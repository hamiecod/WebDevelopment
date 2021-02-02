// 1. VARIABLES IN JS

var a = 78;//data type= integer
var b = "Hargun"// data type = string
var c= 34.55;
// syntax for variable:
// var nameofVariable = value;

/* a variable is a container that stores a value
javascript is a dynamically written language meaning that you do not need to define variable type in javascript */
// dynamically written means that something in which we do not need to define the variable type

console.log(c);

/* ------------------------ */

// 2. OPERATORS IN JS
// Operators are the symbols that require some values to be operated
// Operands are the values that would be acted upon by operators
// for example, in 3+5, '+' is the operator and '3' and '5' are the operands

/* There are two types of operators in JS:
1) Unary operator: It has single operand (x = -x).. in this only x is the operand and '=' is the operator... when a positive value is changed to a negative value it is called 'unary negation'
Example of unary negation in action:
*/
c= -c;
console.log(c)
/*
2) Binary operator: It has two operands (x= x+7)... in this 'x' and '7' are operands
Example of binary operands in action:
*/
c= 333+44;
console.log(c);

// JS is a very forgiving language.. for example if you dont end your line with a semicolon, it does not still throw you an error..... this is because it works in browsers so it does not want to throw so much errors

// ------------------

var num1 = 3;
var num2 = 3;

// This is string concatination
// string concatination is the merging of a string and an arithmetic operator or a number
// strings are concatinated with numbers using the '+' symbol
// JS understands that anything inside ('') would be a string

// Arithmetic operators are operators which do any arithmetic
// Arithmetic operators in action in JS:
console.log("The value of num1 + num2 is " + (num1 + num2));
console.log("The value of num1 - num2 is " + (num1 - num2));
console.log("The value of num1 * num2 is " + (num1 * num2));
console.log("The value of num1 / num2 is " + (num1 / num2));

// Exponential operators are the operators that deal with exponents and exponential powers
console.log("The value of num1 raised to the power of num2 is " + (num1 ** num2));

// There are also incremental or decremental operators in JS
// increment means to increase the original number
// Decrement means to decrease the original value

console.log("The value of incremented num1 is " + (num1++));
// it will show that the value of num1 is 3 only which is actually the original value.... the incremented value is not shown because it is incremented after it has been written in the console log

// now in the command below, JS would show that the incremented value is 5 which rather should be 4 according to us..... it is 5 because in the last command we incremented the value after it was written in the console... so technically num1 has been incremented twice 
console.log("The value of incremented num1 is " + (++num1));

num1 =3;
// reseting the value

console.log("The value of decremented num1 is " + (num1--));
// it will show that the value of num1 is 3 only which is actually the original valu decremented value is not shown because it is decremented after it has been written in the console log

// now in the command below, JS would show that the decremented value is 5 which rather should be 4 according to us..... it is 5 because in the last command we decremented the value after it was written in the console... so technically num1 has been decremented twice 
console.log("The value of incremented num1 is " + (--num1));