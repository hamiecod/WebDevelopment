database: it is the database where all the data are stored
collection: It is just like a workbook in excel
document: it is just like a row in excel

// in mongo db we do not need to follow any schema as we do in MySQL, in mysql all the documents need to have the same keys, but in mongodb we do not need to follow any schema and documents can have non-matching keys

// setup of mongodb
in C:/ mkae a directory called data and another directory inside data called db
make a path in This pc properties> environment variable for mongo db with the following file address:
C:/Program Files/MongoDB/Server/4.4/bin/

mongod: it is the mongo server, it stands for mongo-daeman
mongo: it is the mongo cli, it will only work if mongod is running

run a terminal as admin
run mongod by typing 'mongod' in the terminal
after starting mongod, in another terminal start mongo cli by typing 'mongo' in the terminal

show dbs: shows the existing databases

// Inserting data in mongoDB
use hargunCart: shifts to the database if it exists, if it doesnt exist then this command makes a database with the supplied name and shifts the cli to the same database

we can also reference the current database name we are working with by an alias as 'db'

hargunCart.items: makes a collection(workbook) with the name- 'items'
hargunCart.items.insert(): it inserts a document in the particular collection
db.dropDatabase(): it deletes the current database

db.items.insertOne({name: "Samsung M31", price: 22000, rating: 4.5, qty: 235, sold: 44})
// it inserts a single document in the collection
// you need to add an object in form of BSON

db.items.insertMany([{name: "Samsung M31", price: 22000, rating: 4.5, qty: 235, sold: 44}, {name: "iPhone X", price: 102000, rating: 4.9, qty: 23500, sold: 4400}, {name: "iMac", price: 200000, rating: 4.1, qty: 235, sold: 44, iscomputer: true}])
// insertMany is used to add multiple documents in a collection
// we can insert multiple documents using insertMany as writing multiple BSON objects in an array

db.items.find()
// shows all the documents in the collection