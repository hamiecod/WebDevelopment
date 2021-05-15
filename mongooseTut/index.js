// node js info
// node js works on non-blocking I/O
// the callbacks fire when the work has been done

// mongo and mongodb compass are clients that are connected to mongod
// mongod is the database process
// mongoose is also a client and you connect it to the process called mongod, it is just like using mongo or mongodb compass
// you can connect the process that is mongod with any client you want

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hargunCart', {useNewUrlParser: true, useUnifiedTopology: true});
// connects you to the specific database
// mongoose.connect('url', {useNewUrlParser: true, useUnifiedTopology: true});
// the url needs to point to the database you want to use
// the url syntax: mongodb://localhost/dbName

const db = mongoose.connection;
db.on('error', console.log.bind(console.log, 'connection error'));

db.once('open', ()=>{
    // we will be connected if the database url we specified exists
    console.log("We are connected bro...");
});

let kittySchema = new mongoose.Schema({
    // Schema is a validation for MongoDB
    // it is the scheme for data which is going to be inputted to MongoDB
    // it imposes restriction on you to input values in the database
    // for example, you have to specify the type of data inside key- 'name'... it will impose a restriction on you that you can only input a String as name in the database
    name: String
});

kittySchema.methods.speak = function(){
    let greeting = (this.name)?("Meow! My name is " + this.name):("I don't have a name :_(");
    console.log(greeting);
};

let Kitten = mongoose.model("Kittens", kittySchema);
// let variable = mongoose.mode('model name', schemaName);
// the model name will the be the collection name
// if the model name has any capital letters they will change to small letters when they go to mongoDB
// this only happens with the model name, this doesnt happen with key and value
// the collection name will be the plural of the model name

// it locks the schema
// the schema is now converted into a model and now you cannot change it

// difference between schema and model
// in schema, you define the data types and the keys
// but model is the compiled schema 

let hargunKitty = new Kitten({name: 'hargunKitty'});
// new Model() creates a document in the collection

hargunKitty.save((err, hargunKitty)=>{
    // the second arguement is the document itself
    if(err){
        // if err has some value do this
        console.error(err);
    }
    // console.log('Hello, my name is' , hargunKitty.name);
    hargunKitty.speak();
    // if you use a comma for concatination it will automatically add a white space before the variable value, whereas the plus symbol doesn't    
});
// saves the document to the mongoDB database

Kitten.find({name: "hargunKitty"},{name: true},(err, kittens)=>{
    if(err) console.error(err);
    console.log(kittens);
});
// queries/finds/searches results from the mongoDB database
/* syntax:
model.find({query-1},{query-2},{query-n}, (err, model)=>{});
*/