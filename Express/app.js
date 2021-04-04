const express = require('express');
// importing express module
const app = express();
// initialized 'app' variable as an express app
const port = 80;
// initialising a variable to hold the value of the port
// port 80 is recommmended because this will work also if the port is not specified explicitly

// app.get is an HTTP method
// when 'get' method is hit on the first paramater end point it will return res.send
// the second parameter is the callback function
app.get(["/", "/home"], (req, res)=>{
    res.send("This is the home page of my first express app");
    // this is the response when the end point is hit by a particular HTTP method
});
// syntax:
// express.get("endpoint", (req, res)=>{
    // res.send("The response")
// });

app.get("/about", (req, res)=>{
    res.status(200).send("This is the about page of my first express app");
    // you can also send the status code with the response by the following syntax:
    // res.status(code).send("response");
});

app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found");
});

// app.post is another HTTP method
// it will give the response when post method is hit on a particular end point
app.post("/about", (req, res)=>{
    res.send("This is a post request triggered in the about page of my first express app");
});

// app.listen listens your server at a particular port
// this method is important as this method starts your server
app.listen(port, ()=>{
    console.log(`The application started succesfully on port ${port}`);
});
// syntax:
// app.listen(port, ()=>{
    // console.log("statement saying that the app has started at port __")
// })