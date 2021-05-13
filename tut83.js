show dbs
use hargunCart
show collections
db.items.find({price: 22000})

// deleting items from mongodb database
db.items.deleteOne({price: 22000})
// deletes one document matching the criteria
// it will delete the first entry if multiple documents satisfy the given criteria

db.items.deleteMany({price: 22000})
// it deletes all the documents matching the given criteria