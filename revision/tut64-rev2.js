const fs = require('fs');
let fileContent = fs.readFileSync('hargun.txt', 'utf-8');
fileContent = fileContent.replace("Hargun","Neha");

console.log('The new content of the file is as follows:');
console.log(fileContent);

console.log('Creating a new file...');
fs.writeFileSync('neha.txt', fileContent)