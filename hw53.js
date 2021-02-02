function max(a,b){
    if(a<b){
        console.log(a + " is smaller than " + b);
    }
    else if(a>b){
        console.log(a + " is greater than " + b);
    }
    else{
        console.log(a + " and " + b + " are both equal");
    }
}

function div(a,b){
    let c = a/b;
    return c;
}

max(2,2);
let returnVal= div(4,3);
console.log("The quotient is " + returnVal);