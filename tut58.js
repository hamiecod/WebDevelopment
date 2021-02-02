console.log("This is tutorial 58");
// settimeout and cleartimeout are the functions which are related to time
// setTimeout: it allows us to run the function once after a particular interval of time
// clearTimeout: it clears out the setTimeout by the unique id which is returned by a specific setTimeout

function greet(name1, byeText="Goodbye"){
    console.log("Hello Good Morning " + name1 + " " + byeText)
}

// the syntax of setTimeout is as follows:
// setTimeout(fucntion(){
    
// }, timeout, "input for function(if any)", "second input for function(if any)");
// the timeout is measured in milliseconds; 1 second = 1000 milliseconds
// you can also use a pre-defined function in setTimeout
// you can also create a function inside setTimeout
// setTimeout(greet, 5000);
// the setTimeout in this case will execute the greet function after 5 seconds
// setTimeout(greet, 5000, "Hargun", "Take Care");
// a function is called when it is followed by brackets... it is not called when it is without any brackets..... in setTimeout and some other functions you just need to tell the function and not call it
// the above setTimeout in this case will execute the greet function after 5 seconds by taking the third and fourth arguements as its first and second inputs, respectively

// setTimeout(greet(), 12000, "hello", "bye");
// the above syntax is wrong.... as the coder is calling the function inside setTimeout whereas you dont need to call it inside setTimeout... you just need to tell setTimeOut which function you wanna execute
// only the function will be executed and not the setTimeout.... as a result, the function will run instantly and not follow the time limit and it will not take the inputs we have defined in the third and the fourth arguement

// setTimeout returns a unique id which is assigned to it
// setTimeout can be cleared by clearTimeout..... it is cleared when the unique id of setTimeout is given to clearTimeout

// timeOut = setTimeout(greet, 5000, "Hargun", "Take Care");
// console.log(timeOut);

// now as shown in the developer console, the unique id of the specific setTimeout is 1 so we can clear it by using its id or the variable in which the unique id is stored
// the syntax of clearTimeout is:
// clearTimeout(uniqueIDofsetTimeOut);

// clearTimeout(timeOut);

// the above command clears the specific setTimeout according to the unique id provided to it
// an example of its usage is that if you want to show a sign up prompt to a user who has visited your website for the first time, you will at first wait 20 seconds and then show the user the sign up prompt.... but if the user signs up before 20 seconds... then you will have to apply logic and clear the timeout which shows the sign up prompt; using clearTimeout

// !---SETINTERVAL---!
// setinterval is used to do repeated things after a particular amount of time
// setinterval executes the function given to it repeatedly after the specific amount of time has passed
// the syntax is as follows
// setInterval(function, interval);
// in setInterval too you can give a already made function or create a funtion in it
// you can give the parameters for the function in the third, fourth.,.,. and so on arguements, the third will be the first parameter and so on
// it also calculates the time in milliseconds
intervalId = setInterval(greet, 1000, "Hargun", "Good Night");
// the setInterval will still run even if it is assigned to a variable
// setInterval also returns a unique id of itself
// the unique id will also count the setTimeouts
// if a settimeout has id 1, then setInterval which is after it has id 2
// it will repeat the same function after the specific time has passed
console.log(intervalId);
// there is clearInterval which performs the same functions as of clearTimeout
// you also have to supply the unique id as a parameter of clearInterval
clearInterval(intervalId);