// Searching for data in mongo DB
use hargunCart
// set the current database to hargunCart
show collections
// shows all the collections in a databse
db.items.find()
// list all the documents in a collection

// query is a request for specific data

// we will learn how to search documents in a collection
// we are gonna use queries to find documents in the collection
db.items.find({rating: 4.5})
// you have to supply an object in the parameters for find
// the object will serve as a query
// in this case, we will get all the documents with rating 4.5 as the response

db.items.find({rating: {$gte: 3.5}})
db.items.find({rating: {$gte: 3.5}})
// we can use complex queries to fetch documents from the collection
// $gte stands for greater than equal
// we need to contain complex queries within curly braces
// in this case, the database will return the documents with rating greater or equal to 3.5
// syntax: db.collection.find({key: {$complexQuery: val}})

db.items.find({rating: {$gte: 3.5, $lte: 4.5}})
// we can also use multiple complex queries in the same object by separting them with a comma
// $lte stands for lesser than or equal to
// in this case, the database will return the documents with rating greater than or equal to 3.5 and rating lesser than or equal to 4.5

db.items.find({rating: {$gt: 3.5}})
// $gt stands for greater than

db.items.find({rating: {$lt: 4.6}})
// $lt stands for lesser than

db.items.find({rating: {$lte: 4.6}})
// $lte stands for less than equal to

db.items.find({rating: {$gt: 3.5}, price: {$gt: 4000}}})
// we can apply complex queries to  multiple keys in a document
// the comma acts as `and` relational operator
// when queries are requested for multiple keys in a document, then the database will return the documents which fulfil both the key queries
// in this case, the db will return the documents with rating greater than 3.5 AND price greater than 4000
// this will return only the documents which follow both the criteria

db.items.find({rating: {$lt: 3.5}, price: {$gt: 114000}}})

db.items.find({$or:[{rating: {$lt: 3.5}}, {price: {$gt: 114000}}]})
// we can also use OR relational operator in queries 
// syntax:
// db.collection.find($or:[{rating: 4}, {price: 2000}])
// we need to contain the multiple queries inside of an array after the $or
// using the or operator, the db will return the documents which fulfil any of the multiple queries

// projection query
db.items.find({rating: {$lt: 3.5}}, {rating: true})
// 1 stands for true and 0 stands for false
// you need to specify a query at first, and then in another pair of curly braces, you have to specify the keys in a document u wanna project
// you need to specify the key and in the value you need to keep it true or false, the default value is false
// the keys whose projection value has been set to true, will only be send by the database

db.items.find(null, {rating: true})
// the above will only display the rating of the documents
// mongo by default take the first params as conditional query so we have made it null

db.items.find(null, {rating:true, _id:false})
// the above only displays the ratings of the document and not even the object id