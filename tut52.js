// variables are containers to store something
// in JS the values are of two types: primitive and reference
// dont go very deep in these types
// just understand that either objects are made or primitive data types are made
// primitive data types are of the following types:
// integer
// string
// boolean (true of false)
// null
// undefined
// any other data type except the above primitive data types; are called objects

let myVar = 34;
let myVar2 = "string";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;

// an object is different from primitive data types
// an object is a data type which has multiple values like the example given below
let employee = {
    name: "hargun",
    salary: 10,
    channel1: `Simplest Tech`,
    // in the above given example, `channel1` is the key and `Simplest Tech` is the value
    "channel 2": `Technical Guruji`
    // if a key name contains a space, you need to contain the key name with double quotes
    // you need to suffix every value declaration in an object with a comma
}
console.log(employee);
// if you want to print the value of a key, the syntax is as follows:
// console.log(nameofobject.keyName);
// other syntax:
// console.log(nameofobject['keyName']);
// !-----IMPORTANT-----!
// if your key name contains spaces then you need to follow the below given syntax:
console.log(employee["channel 2"]);
// you need to contain the key name with spaces inside quotes and you cannot use the first syntax for the key name which has spaces in it

// an array is also a type of an object
// an object can contain different types of data types
let names = [41, 2, 4, "hargun", undefined, true, null,];
// Syntax(es) of array:
// let nameofArray = [value1, value2];
// let nameofArray = new Array(value1, value2);
// console.log(names);

// syntax to print array
// console.log(names[numberofthearrayitem]);
// the array item numbering starts from 0 and goes on
// console.log(names.length);
// 'nameofArray.length' returns the number of values in a specific array

// console.log(names.sort())
// console.log(nameofArray.sort()) sorts the array in ascending order as integer --> false --> string --> null --> true --> undefined 

// where are arrays used in real life scenarios:
// for example you open a playlist on youtube; the videos in the playlist will be given to you in the form of an array, so you can call any video from the array

//  in technical terms, pushing means adding something in a thing which already exists
// you can add a value in an array by pushing it
names.push("this is pushed");
// a value can be pushed in an array by the following syntax:
// nameofArray.push(`the value to be pushed`);
// you need to print the array again if you want the pushed string to be included in it
console.log(names);

// you can make an array of n number of values by the following syntax:
// let nameofArray = new Array(n);
let cars = new Array(23);
console.log(cars);

console.log(Object.keys(employee).length);
// the above calculates the length of the object
// first we get the key names by `Object.keys(objectName)` in the form of an array and then we can simply write the code to calculate the length of the array

employee.post = "Senior Engineer";
// the above adds a key and value pair to an object
// objectName.key = "value";

console.log(employee);