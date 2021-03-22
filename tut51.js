var string1 = "This is a string";
string1 = "This is a string2";
console.log(string1);

// !!-------- LET VS VAR -------!!
// global means that it can be used anywhere within the document
// local means that it can only be used in the place where it is declared, suppose if a variable is declared inside a function it can only be used within the same function

// the system reports an error if a variable is declared twice in a document, these errors generally happen when working in a large file and forgetting that you have already declared the variable
// var is always declared globally.... even if it is declared in a function or in a block, it will still be global

// we use 'let' for the same function as 'var'
// it is recommended to use 'let' over 'var' as let if used in a block or function is declared locally(only for the function or block)
// whereas var is always declared globally, even if it is declared inside a function, it is still global and can be used anywhere else
// that disadvantage of using 'var' poses a problem as when you are working in a large file, you usually forget that you have already declared a particular variable

let test = 'u';
{
    let test = 'u6';
    console.log(test);
    // this will print the value declared by local variable
}
console.log(test);
// this will ignore the value declared by local variable and print the value of global variable

const fixed = "This cannot be changed";
// const cannot be changed in the whole document, it is constant and fixed
// const is used where the developer thinks a specific value will not be changed in the whole document
// let is used for more functionality and let can be changed anywhere in the document unlike const
console.log(fixed);

// !-----IF ELSE CONDITIONS-----!
let age = 10;

// syntax for if-else:
/*
if(condition){
    commands;
}
else-if(condition){
    commands;
}
else{
    commands;
}
*/
// if else conditions mean that if a condition is true then follow a particular set of instructions and if it is false follow another particular set of instructions

if(age>18){
    console.log("You can drink alcohol");
}
else if(age==2){
    console.log("You can drink milk because your age in 2");
// once a condition turns out to be true the if else condition stops executing
}
else if(age<18 && age>3){
    // this operator is greater than equal to
    console.log("You are a grown up");
}
else{
    // else is executed when all the other conditions turned out to be false
    console.log("You can drink soft drink because you are not old enough")
}
// operator for if else condtions:
// (==)equals to: this is used to operate that something is equal to something.... it is different from (=) as equal to sign is used for variable assignment
// greater than or lesser than


// !-----SWITCH STATEMENTS-----!
const cups = 42;
// switch statement is just like if else conditions
/*
syntax:
switch(variablethatyouwanttocheck){
    case valueofvar:
        conditon;
        break;
    default:
        condition;
        break;
    default is just like else
}
*/
// break is necessary because without it the statement wouldnt break and the system will run all the statements
switch (cups) {
    case 4:
        console.log("The value of cups is 4");
        break;

    case 41:
        console.log("The value of cups is 41");
        break;

    case 42:
        console.log("The value of cups is 42");
        break;

    case 43:
        console.log("The value of cups is 43");
        break;
 
    default:
        // default is just like else in if else
        console.log("The value of cups is none of 4, 41, 42 or 43")
        break;
}

// you can use any of the two: if else or switch