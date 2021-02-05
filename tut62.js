// JSON stands for javascript object notation
// it is a format to store and transport data
// it is a notation using which you can transport data over a network, like you want to transport an object through a network
let jsonObj = {
    name: "Hargun",
    channel: "Simplest Tech",
    friend: "Rohan Das",
    food: "Bhindi"
}
console.log(jsonObj);
// we can transport data of an object through a network, by transporting the strings one by one over the network
// but the above way is less comfortable as it is difficult to transport string by string in complex objects, there would be nested objects in an objects
// it is difficult for complex data to covert strings and again parse
// in JSON, we convert the whole object into string using function of stringify and then decode(parse) it again
let myJsonStr = JSON.stringify(jsonObj);
// let name = JSON.stringify(objecttostringify)
// stringifies the JSON
// converts the object into string
console.log(myJsonStr);
// myJsonStr contains the stringified form of the object

myJsonStr = myJsonStr.replace('Hargun', 'Sargun');
// the above replaces the words in the string
// this is done to clarify that myJsonStr is a string
console.log(myJsonStr);

// we have another advantage of using JSON, that when the object is converted to the string, we can use string function on it.

// we can decode(parse) the string by the following method
var myJsonObj = JSON.parse(myJsonStr);
//  var name = JSON.parse(thestringtoparse);
// parsing the string back to its original object form
console.log(myJsonObj);