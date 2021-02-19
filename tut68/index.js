console.log(`This is index`);
// linking the module
const mod = require("./mod.js");
// mod stores the function of average which is exported, if the exports are one in number
// mod itself contains the exports if the exports are one in number and you do not need to mention the function explicitly like 'mod.average'
// console.log(mod([3,4]));

// follow the below method if the exports are multiple in number
// you have to mention, which particular key you want of the exports
// like 'mod.avg' or 'mod.name'
console.log(mod.avg([3,2]));