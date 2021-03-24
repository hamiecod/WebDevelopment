console.log("This is date and time tutorial");

// date in javascript is initialised in JavaScript by the following syntax
// let name = new Date();
// the date is a primitive data type meaning an array or object
// let now = new Date();
// console.log(now);

// the date kept as reference for the dates is 05:30 1 Jan 1970
// the syntax for custom time is as follows:
// let name = new Date(milliseconds);
// the value you substitute in the place of milliseconds will be the time added to the reference date
// like if the milliseconds are 1000, then 1 second will be added to 5:30 1st jan 1970. and so on

// let dt = new Date(1000);
// console.log(dt);
// this is somewhat inconvinient as if you want the date to be 2021, you wouldnt like to count the milliseconds in 41 years and n days and n seconds
// so you can write the date as follows:
// let newDate = new Date("YYYY-MM-DD");
// let newDate = new Date("2029-09-30");
// console.log(newDate);

// you can be even more precise by the following method:
// let newDate = new Date(year, month, date, hours, minutes, seconds, milliseconds)
let newDate = new Date(3020, 4, 12, 3, 37, 57, 358);
console.log(newDate);

// function of date
let yr = newDate.getFullYear();
// the above function just gives the year in a particular date
// getFullYear vs getYear
// getFullYear gives the exact year in the date
// getYear gives the year by subtracting 1900 from the year in the date
console.log(`The year is `, yr);

let month = newDate.getMonth();
// the above function gives the number of the month
console.log(`The month is `, month);

let date = newDate.getDate();
// the above function gives the date
console.log(`The date is `, date);

let day = newDate.getDay();
// the above function gives the number of the day with accordance to monday as 1
console.log(`The day is `, day);

// there are many function like the above, like seconds, milliseconds, etc.

let hours = newDate.getHours();
// the above function gives the hours
console.log(`The hours are `, hours);

let seconds = newDate.getSeconds();
// the above function gives the seconds
console.log(`The seconds are `, seconds);

let milliseconds = newDate.getMilliseconds();
// the above function gives the milliseconds
console.log(`The milliseconds are `, milliseconds);

// JavaScript auto-corrects the dates, like if the date is 32, it gets one month ahead

// you can prefix the hours or anything with UTC, to get the timezone of utc london

// you can change the date by the following
newDate.setDate(15);
// it changes the date
console.log(newDate);
// you can set anything- month, etc

let now = Date.now();
// it gives teh milliseconds passed till now since the reference date
console.log(now);