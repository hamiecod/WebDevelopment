const fs = require('fs');
let text = fs.readFileSync("dele.txt", "utf8");
text = text.replace("browser", "Hargun")

console.log("The content of the file is as follows:");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("hargun.txt", text);