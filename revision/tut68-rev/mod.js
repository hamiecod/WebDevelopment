console.log('This is module');
function average(arr){
    let answer = 0;
    for (let index = 0; index < arr.length; index++) {
        answer += arr[index];
    }
    return answer/arr.length;
}

module.exports = {
    avg: average,
    name: "Hargun",
    repo: "GitHub"
};