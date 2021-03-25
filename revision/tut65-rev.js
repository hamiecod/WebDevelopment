const fs = require('fs');
let text = fs.readFile("dele.txt", 'utf8', (err,data)=>{
    console.log(data)
});

console.log("This is a message");