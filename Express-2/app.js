// variables
const express = require('express');
const fs  = require('fs');
// importing express module
const path = require('path');
// importing path module
const app = express();
// initialising the variable app as an express app
const port = 80;

// EXPRESS SPECIFIC CONFIGURATIONS
// for serving static files
// static files are the files that do not change they can be css files, javascript files, etc.
app.use('/static', express.static('static'));
// app.use('/endpoint', express.static('dirName'));
// 'express.static' is a middleware function, it takes the directory name to read the file from as its first param and options(object) as its second param which is a complex param
// you need to use the endpoint given in css and html to reference to anything inside the folder
// for more https://stackoverflow.com/questions/42192404/cant-show-image-on-pug
app.use(express.urlencoded());
// urlencoded is a middleware which gets the data from the url to express
// the get function sends the requests in the url whereas post request gets them


// PUG SPECIFIC CONFIGURATIONS
app.set('view engine', 'pug');
// setting the view template engine to pug
app.set('views', path.join(__dirname, 'views'));
// the above statement helps in making a path
// the __dirname is the folder name and the views is the subfolder
// the path will be __dirname/views
// for more info, refer to https://stackoverflow.com/a/47304630/14951775


// ENDPOINTS
app.get('/', (req, res)=>{
    const con= "This is the best content on the internet so far, so use it wisely";
    const params = {
        title: 'Golden Fitness',
        content: con
        // it is a good practice to include the key name within appostrophes but it will also work without the apostrophes if the key is a single word
    };
    // params is an object
    res.status(200).render('index.pug', params);
    // it will also work if we do not send the status code but it is a good practice to do so and is highly recommended while building a production grade project
    // .send is sending the files
    // .render is reading the files
    // .render('filetoberead', 'toBeSent')
    // the params is the object which can be used in the pug template
});

app.post('/', (req, res)=>{
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);
    const params = {
        'message': "Your form has been submitted successfully"
    };
    res.status(200).render('index.pug', params);
});

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});