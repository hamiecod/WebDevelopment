// DOM is document object model
// DOM is the structure of the page or the HTML
// DOM is used by js to manipulate the webpage

let main = document.getElementById('main');
// the variable main has stored targetting the element with main id
// Whenever the variable is used it will target the element with main id
console.log(main);
// when the variable storing a target will be printed, it will print the whole element of id main
let nav = document.getElementById("nav");
// the var nav is storing targetting of the element of id nav
console.log(nav);
// when nav variable would be printed, it will print the entire element with the specific element id
// this is done when we need to change something in the dom when certain conditions are met

// nav.innerHTML = "<li>dynamic</li>"
// nav.innerHTML gets all the HTML written inside the specific id
// the new HTML is written inside the quotes in the HTML syntax
// the above command replaces the whole old HTML inside a specific element with the new HTML

// we can also trigger elements with accordance to classes

let containers = document.getElementsByClassName('container');
// the variable container stores the triggering of all the elements having class 'container'
// you can write the class or id name while triggering inside back ticks, single quotes or double quotes
console.log(containers);
// a HTML collection will be printed if the var contains triggereing of multiple elements
// it will contain all the elements with class of container as an HTML collection

// let sel = document.querySelector('#nav>li');
let sel = document.querySelectorAll('#nav>li');
// the query selector triggers the element following the syntax of CSS selectors
// querySelector will only trigger the first element with the same class
// querySelectorAll will trigger all the elements with the same condition, it will display them as a list
console.log('selector returns', sel);