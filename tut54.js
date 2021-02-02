// Alert in in-browser JavaScript
// alert("This is an alert!");
// it opens a modale window in the webpage
// modale window is a window that you have to deal with, without addressing it you cannot access the page
// in the modale alert you do not have any option except to say ok
// the alert function does not return anything
// console.log(a);
// alert is given when you want to alert the user or tell the user that something has happened

// PROMPT
// We use a prompt when we want some input from the user
// syntax for prompt:
// prompt("message to be displayed", "default value");
// default value is the value that would be filled in the prompt by default
// The prompt will also work without the default name, and the default value wud be void
// but in old browsers like internet explorer you always have to supply a default value which you can keep blank for your sake
// It will work without default value but it is a good practice to add default value so that your website can run on any browser

// do not use 'name' as variable name as it is a reserved word
// it will work but it is not a good practice
// let name1 = prompt("What is your name?", "Guest");
// when you cancel the prompt, the value null is stored in the variable
// when you store the prompt in a variable, the variable stores the user input

// confirm function demands a re-confirmation input from the user
// it also opens a modale window
// it has two options: ok or cancel
let deletePost = confirm("Do you really want to delete this post?");
// deletePost variable here stores the result of the user input of the confirmation alert
// console.log(deletePost);  

// the default value of boolean variable is true
if(deletePost==true){
    alert("Your post has successfully been deleted");
}
else{
    alert("Your post has not been deleted");
}