// return statement :- 
// The return statement is used to terminate the execution of function 

function f1(status) {
    console.log("in f1");
    // if(status) return;
    console.log("end");
    console.log("end");
    console.log("end");
    return 10;
}

console.log(f1(true));  //undefined



// ==============================================================

function f2() {
    return {
        name: "Govind kale",
    };
}

function f3() {
    return
    {
        name: "Topper Skills";
    }
}
console.log(f2()); //{name: "Govind Skills"}
console.log(f3()); // undefined