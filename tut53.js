console.log("This is web development tutorial 53");

function greet(name, greetText="Greetings from JavaScript")
// greetText="abc"; doesnt mean that the value of greetText is changed inside the function or anywhere else
// it is just the default value of greetText which would be assigned when no value will be assigned to greetText
{
    let name1 = "Mohan";
    // the variable declared inside the function has a local scope and not a global scope
    // const also has a local scope if declared inside a block
    // the values prompted by the function can be used inside the function
    console.log(greetText + " " + name);
    console.log(name + " is a good boy")
}
// when you need to call a set of commands again and again you use a function
// syntax:
// function name(variabletobecalled){commands}
// a function has two parts: initialisation and calling the function
// When you call the function, you have to assign a value to the variable that was declared while initialising the function
// for example age was asked by the function, you need to reply the age in the brackets when you call the function
let name = "Hargun";
let name1 = "Daniel";
let name2 = "Gaurav";
let name3 = "Sagar";
// if two values have been asked by the function, you will have to reply the function with both the values in brackets separated by a comma
// you need to call a function after it is declared to make it work
greetText1 = "Good Morning";
greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);
greet(name3, greetText1);
greet("Jamie");
// in this, when no value is assigned to greetText, it will take the default value

// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// the above code is not feasible matlab not very good practice

let returnVal = greet("Jamie");
console.log(returnVal);
// the value is undefined as the function does not get anything with it or in other terms the function does not return us anything

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // it returns the value of d
    // the function breaks when the data is returned
    // no code is read after the value returned
    console.log("hello this is sum")
}

let returnData = sum(1,2,3);
console.log(returnData);
// this is returned value
// functions should be made ez to read