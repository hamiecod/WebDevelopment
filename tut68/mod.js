console.log(`This is module`);

// creating a function that finds the average of the parameters
function average(values){
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
    }
    // returning the average
    return sum/values.length;
}

// module.exports is used to export some things to another file
// module.exports = average;
// the exports can be single fucntion or an object
module.exports = {
    avg: average,
    name: `Hargun`,
    repo: 'Github'
};