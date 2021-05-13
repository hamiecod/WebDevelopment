show dbs
use hargunCart
show collections

db.items.renameCollection("products")
// changes the name of the collection
// syntax: db.collection.renameCollection("newName")

// updating data in MongoDB
db.products.updateOne({name: "Samsung M31"}, {$set:{price: 2}})
// updateOne changes one document in the database
// the first arguement is the selector and the second arguement is the updated data
// the first arguement AKA the selector selects the document which follows the specified criteria
// the second arguement AKA the update will be the updated data
// syntax for second arguement: {$set:{blah: "bruh"}}
// we need to use the $set keyword to change the data in a document

db.products.updateMany({name: "Samsung M31"}, {$set: {price: 3, rating: 1}})
// updateMany gives us the facility to update multiple data in a document
// in the second arguement u can provide multiple keys to change in the same curly braces