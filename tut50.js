// cheat sheet at the end of code

var str = "That is a string";
console.log(str);

var position = str.indexOf('is');
// syntax:
// var name = victimvar.indexOf('the word you want to find');
// This function helps in finding a specific word in context to letters and not words, it will give out the character number in the string from where the specific word is starting
// It helps in finding the first occurence of a substring
// IMPORTANT!: The index starts from 0
console.log(position);

position = str.lastIndexOf('is');
// It helps in finding the last occurence of a substring
console.log(position);

// getting a substring from a string
var substr1 = str.slice(1,6);
// slice ek kam print karega agar 6 likha to 5 tak print krega
// syntax:
// var name = varofwhichwewantsubtring.slice(startIndexPosition,EndIndexPosition);
// It gets the substring by taking the starting index postion and the ending index position as input
// slicing means to get a substring from a string
console.log(substr1);


substr1 = str.substr(1,6);
// substr vs slice:
// in slice, the substring is one letter smaller from what is specified
// in substr, the substring is accurate letters as defined
// like slice will print 'hat i' whereas substr will print 'hat is' with the same values

// it accepts negation values
// syntax:
// variable = varvictim.substr(startPoint, length of substring)
console.log(substr1);

// not to go very deep into substr, substring and slice functions, use any one of them

substr1 = str.substring(1,6)
// substring function is exactly similar to slice
console.log(substr1);

var replace = str.replace("string", 'Hargun');
// This function is used to replace a substring in a string
// syntax
// var name = string.replace('originalsubstring', 'newsubstring');
console.log(replace);

console.log(str.toUpperCase());
// this function is used to write a string in block letters
console.log(str.toLowerCase());
// this function is used to write a string in small letters

var newStr = str.concat(' New String');
// This is another function for concatination but you can still use the plus symbol
console.log(newStr);

var strWhite = `   this    containss     spaces            `;
console.log(strWhite);
console.log(strWhite.trim());
// this function trims all the spaces in the starting and the ending of the sentence

var char2 = str.charAt(2);
// this lists the character at the 2 index of the string
char2 = str.charCodeAt(2);
// this function tell the UTF code of the character at a specific index
console.log(char2);


console.log(str[3]);
// Syntax
// console.log(var[index]);
// this function prints the character at the specified index number

/* cheat sheet
indexOf
lastindexof
replace
slice
substr
substring
replace
concat
charAt
charCodeat
str[]
trim
tolowercase
touppercase
*/