// function parameters 


function add(a, b) {
    console.log(a,b);
    return a + b; 
}

console.log(add(10));  //NaN
console.log(a, b);



// Default function parameter (ES6):-

function add(a, b = 0) {
// function add(a, b = a){
    console.log(a, b);
    return a + b;
}

console.log(add(10));  //20
console.log(add(10, 20)); //30


// checking the number of parmeters of a function

console.log(add.length);