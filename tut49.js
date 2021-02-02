var string = 'this "hello"';
var Name = "Hargun";
var message = " hargun singh is a bad boy"
/* when to use double quotes and when to use single quotes:
when you want to include single quotes in your string use double quotes to contain your string
when you want to include double quotes in your string use single quotes to contain your string
*/
// 'name' is a reserved word
// console.log(string + Name + message);

var channel = 'Simplest Tech';

// this is called template literal
var temp = `${Name} is a nice person, he has a channel name ${channel}`;
// you can use backward ticks for giving a string to a variable
// backward ticks are present just below the escape key
// the advantage of backward ticks is that the text inside it can contain both double as well as single quotes
// while using backward ticks you can concatinate a variable by '${variable}' and you do not even need to use '+' for concatination
// the '${variable}' kind of acts as a fill in the blank
console.log(temp);
// mainly template literal is used to make big string templates which you want to fill later on
var len = Name.length;
// this is used to count the characters in a variable
// syntax:
// var variable1 = variable2.length;
// the length includes spaces and concatinated strings or data types
console.log(`The length of name is ${len}`);

console.log(`Hello World\nHargun\tAman`);
// '\n' is an escape sequence it represents new line
// '\t' escape sequence means space
// if you want to write '\n' normally that you will have to precede it with two backslashes

var y = new String("this");
// this is a string constructor
// not explained in detail... not recommended to use
console.log(y);

document.getElementById('content').innerHTML=`<h3>This is a heading inserted by JavaScript</h3>`;
// syntax:
// document.getElementById(or)class('class or id name').innerHTML='the content you want to add in HTML';
// innerHTML means to manipulate something in the DOM