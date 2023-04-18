// to fixed 

var num = 123.456

console.log(num.toFixed());   //123
console.log(num.toFixed(0));  //123
console.log(num.toFixed(2));  //123.45
console.log(num.toFixed(3));  //123.456
console.log(num.toFixed(6));  //123.456000


// exponential 
var n = 1000
console.log(n.toExponential()); // 1e+3


// number to string
console.log(n.toLocaleString()); // 1,000
console.log(n.toString());  // 1000


// value of
// console.log(n.valueOf()); // 1000 

var nn = new Number(100);
console.log(typeof nn);     // object
console.log(nn.valueOf());  //100
console.log(typeof nn.valueOf());  //number


// toPrecision() :-
   // it returns exact decimal point 
   // range between 1 to infionite

var a=98.5;  
console.log(a.toPrecision(1));   // 1e+2
console.log(a.toPrecision(2)); //99
console.log(a.toPrecision(3)); //99.0
console.log(a.toPrecision(4)); //98.97
console.log(a.toPrecision(11)); //98.972