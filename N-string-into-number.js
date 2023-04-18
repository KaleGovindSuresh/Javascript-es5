// string to number conversation 

// var num = "123";
// console.log(num * 10);
// console.log(num + 10);

// there are two method to convert it  
// 1) Number():-
// 2) parseFloat():-
// 3) parseInt ():-


var num = "123.456";
console.log(Number(num));
console.log(parseFloat(num));
console.log(parseInt(num));


var num = "123.456abc";
console.log(Number(num));
console.log(parseFloat(num));
console.log(parseInt(num));



var num = "10e20";
console.log(Number(num));
console.log(parseFloat(num));
console.log(parseInt(num));



var num = "123 456";
console.log(Number(num));
console.log(parseFloat(num));
console.log(parseInt(num));



var num = "  123.456";
console.log(Number(num));
console.log(parseFloat(num));
console.log(parseInt(num));



var num = "true";
console.log(Number(num));
console.log(parseFloat(num));
console.log(parseInt(num));



var num = true;
console.log(Number(num));
console.log(parseFloat(num));
console.log(parseInt(num));


var num = "";
console.log(Number(num));
console.log(parseFloat(num));
console.log(parseInt(num));



// example  print a number 1234567 
var num = 1234567;

while (num > 0) {
    console.log(num % 10);
    num = Math.floor(num / 10);
}