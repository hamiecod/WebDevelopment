// We have created a simple function below
// function greet() {
//     console.log(`Good Morning`);
// }

// Arrow Functions
// let greet = ()=>{
//     console.log(`Good Morning`)
// }
let greet = () => console.log(`Good Morning`);
// if there are no parameters, you just need to write empty paranthesis
// the above function does the same actions as of the standard function
// arrow functions are shortcuts
// like in a standard function, you will have to write the function and the function name, but in arrow functions you only need to code the function inside a variable which is easier
// syntax:
// let name = ()=>{
    // code
// }
greet();

// setTimeout also use arrow functions
// arrow functions are shortcuts for function
// they save the code for writing 'function' and function name, in this u just enter inside the function
// '=>' is an arrow
setTimeout(() => {
    console.log("We are inside setTimeout");
}, 3000);

let sum2 = (a, b)=>a+b;
// arrow function shorten the actual function
// you do not even need to use curly brackets to get into the function
// you do not even need to write return to return something, you just write the thing you want to return and it will return it
// but you need to write the parameters in the paranthesis if the parameters are multiple in number 
// you can write a parameter without paranthesis if it is just one
let half = a => a/2;
// arrow function are so short that you do not even need to write the parameters in paranthesis
// you can just write 'a' and it will automatically understand that it is 
// a parameter 

// the arrow functions store the function in a variable

let obj1={
    greeting: "Good Morning",
    names: ["Hargun", "Rohan", "SkillF", "DjKhiladi"],
    // names is a n array inside of an object
    // hello is a method inside obj1
    // it will work when it is called
    hello(){
        // lexical this
        // in arrow function lexical this is used
        // 'this' is referred to the object the a specific thing belongs to
        // if you create a simple function the 'this' will point out to the function itself as the object
        // if you create an arrow function its 'this' will be referred to as its parent, so it is called lexical this
        // in this case, lexical this points out to obj1
        this.names.forEach((student)=>{
            console.log(this.greeting + " Kukdoo Koo " + student);
        })
    }
}

obj1.hello();
