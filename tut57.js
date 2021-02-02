/*
events are some actions done by the user which send a response to the browser
certain actions can be performed when a specific event is triggered using JS
the events are:
click: it is the mouse click
contextmenu: event is fired on right mouse click
mouseover: it is fired when the mouse gets over something
mouseout: it is fired when the mouse gest outside something
mousedown: it is fired when a button is hold
mouseup: it is fired when a button which is already hold, is released
mousemove: it is fired when the mouse is moving
submit: it is fired when a form is submitted or submit button is clicked
focus: it is fired when an element is focused
DOMContentLoaded: it is fired when the whole HTML is loaded
transitionend: it is fired when the css transition has ended
*/

// you can show or hide an element when the mouse click event is fired
// you will have to listen to the event to take actions accordingly
// you have to give the button an onclick of a function
// the hide function will be executed when the button will be clicked

// the function which will be executed when button will be clicked
let para = document.getElementById('para');
// even if we dont assign the value of triggering to a variable, if will automatically work if the name of the id is written as it is default in most modern browsers
function toggleHide(){
    let btn = document.getElementById('btn');
    // the if else statement detects that if the para is hidden when the button is pressed, it will show it and vice versa
    if(para.style.display != 'none'){
        para.style.display='none';
        // we can change the css of a particular element using js by the above syntax: element.style.xyz='value';
        // in JS the first word is the main, then the secondary separated by a dot
    }
    else{
        para.style.display = 'block';
    }
}
// the onclick functions are given by assigning a function to a button whereas all other events can be listened to in other formats

// we can listen to all other events by the following:
// element.addEventListener('event', function name(){});
para.addEventListener('mouseover', function run(){
    console.log(`Mouse inside`);
})

para.addEventListener('mouseout', function run(){
    console.log("Mouse is now outside");
})

