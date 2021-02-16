// Synchronous or blocking
// line by line execution.... the code will be executed line by line
// it is just like interpreter

// Asynchronous or non-blocking
// no line by line execution..... the whole program is executed at once
// it is just like compiler 

const fs = require('fs');
// let text = fs.readFileSync('tut65.txt', 'utf-8');
// readFileSync is a synchronous or blocking function, meaning that it will not move to the execution of the next line, until and unless the current line has been executed
// console.log(text);

// readFile is a non-blocking statement
// readFile needs another arguement which is a callback
// callback will only be fired when the data has been read
// it will only be fired after the task has been done
// callbacks are fired when a particular event is done
// in this case callback is fired when the file has been read
fs.readFile("tut65.txt", "utf-8", (err, data)=>{
    console.log(data);
    // the first variable is the error whereas the data variable is the data stored in the file
});
console.log("This is a message");
// readFile is an asynchronous or non-blocking function, it executes the whole code at once and does not wait for a single line to be executed first so, in this the lines are executed according to their speed
// asynchronous function are preferred over sychronous ones because sychronous functions waste the time, as if the code takes more time, the program will be stuck at a point and will not run ahead, but that is not the case with asynchronous functions, the program isnt stuck in async functions