console.log("This is web development tutorial 55");
// !-----LOOPS-----!

// for loops
for(i=0; i<3; i++){
    console.log(i);
}

/*
syntax:
for(varInit; condtion; updation){
    commands
}
*/
// loops are the functions that repeat something if certain conditions are met
// a variable is initialized or given to the loop in the first arguement
// a condition with accordance to the variable is given in the second arguement
// an updation in accordance with the variable is given in the third arguement.... updation is that when the condition will be fulfilled what would happen with accordance ot the var
// first the init runs, then the condition and the the updation

let friends = ["Rohan", "Ram", "Shyam", "Deepti", "Pooja"];
for (let index = 0; index < friends.length; index++) {
    console.log("Hello friend, " + friends[index]);
}

// forEach is used in modern js
// forEach runs the function inside it for every element inside an array without even calling out the function after it is declared
friends.forEach(function f(element){
    console.log("Hello " + element + " to modern JavaScript");
})

// !---for of loop----!
// for of loop also runs for each of the value of an array
// for (element of friends){
//     console.log("Hello " + element + " to modern JavaScript");
// }
// syntax:
// for (var of array){
    // commands
// }

// FOR, FOR OF AND FOR EACH LOOPS ARE USED TO ITERATE THE VALUES OF AN ARRAY

let employee = {
    name: "Hargun",
    salary: 2000,
    channel: "Simplest Tech"
}

// FOR IN LOOP
// for in loop is used for iteration of object values
for (label in employee){
    console.log(`The ${label} of employee is ${employee[label]}`);
}
/*
syntax:
for (varstoringKey in object){
    commands;
}
*/
// the iteration of object keys and values is done by for in loop
// the variable intialized at first, is the variable that stores the key

// WHILE LOOP
let o=0;
while(o<4){
    console.log(`${o} is less than 4`);
    o++;
}
// the function of while loop is just the same as for, for of and for each loop

// !---DO WHILE LOOP---!
// do while and while loop are twins
let j = 25;
do{
    console.log(`${j} is less than 4 and we are inside do while loop`);
}while(j<4);
// the difference between while and do while loop is that do while loop runs the commands once before checking the conditions, it runs the commands for once and then realises 
document.getElementById("container").innerHTML="This is an injection by JavaScript";