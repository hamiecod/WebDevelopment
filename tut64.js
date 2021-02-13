// do refer to the documentation of node.js for further info
// node js modules are just like javascript libraries which help you work
const fs = require("fs");
// fs stands for file system which is a node.js module
// as per the docs, this module synchronously reads the content of a file
let text = fs.readFileSync("tut64.txt", "utf-8");
// const named = fs.readFileSync('A:/filepath', 'encodingAlgorithm');
// the variables are set to constant type because we do not want to change the values of the containers
// console.log(text);
console.log(`The content of the file is as follows: ${text}`);

text = text.replace('friends', 'Neha');
// this replaces a particular word with another
console.log(`Creating a new file...`);
fs.writeFileSync('neha.txt', text);
// fs.writeFileSync('filePath', "text");
// writefilesync writes the data in an existing file or creates a new file for the same
