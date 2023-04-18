// function parameter:- Function parameters are the names listed in the function defination 

// function arguments:- Function arguments are the real values passed to(and received by ) the function

// function add(a, b, c) {
//     return a + b + c; 
// }

// console.log(add());
// console.log(add(10));
// console.log(add(10, 20));
// console.log(add(10, 20, 30));
// console.log(add(10, 20, 30, 40, 50, 60));


// var a = 10, b = 10, c = 10;
// console.log(add(a, b, c)); 


// var x = 10, y = 10, z = 10;
// console.log(add(x, y, z)); 




// arguments-object

function add(a, b, c) {
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments.callee.caller.name);


    for (var num of arguments) console.log(num);
    
    return a + b + c; 
}

console.log(add());
console.log(add(10));
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(10, 20, 30, 40, 50, 60));

function f1() {
    add(10, 20, 30, 40, 50, 60);
}
f1();




