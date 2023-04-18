// Math API - math application programme interfaces

//  round() :- 
    //   it converts floating number into integer number 
    // 0-4 => it will not increament the integer part
    // 5-9 => it will increament  the integer by 1

    // ex:- 12.34 =>12
    //      12.56 =>13


    console.log(Math.round(12.0));  //12
    console.log(Math.round(12.01)); //12
    console.log(Math.round(12.23)); //12
    console.log(Math.round(12.45)); //12
    console.log(Math.round(12.5));  //13
    console.log(Math.round(12.75)); //13
    console.log(Math.round(12.9));  //13
    


// ceil() :-
   //  - it will increament the integer part if the floating part is greater than zero
    
// floor() :-
    //  -it will not increament the integer part 
    
    
    
    
    console.log(Math.ceil(12.0));    //12
    console.log(Math.floor(12.0));   //12

    console.log(Math.ceil(12.01));   //13
    console.log(Math.floor(12.01));  //12

    console.log(Math.ceil(12.5));    //13
    console.log(Math.floor(12.5));   //12

    console.log(Math.ceil(12.7));    //13
    console.log(Math.floor(12.7));   //12

    console.log(Math.ceil(12.9));    //13
    console.log(Math.floor(12.9));   //12



// Random() 
  //  It returns a random number from  0 to 1
  
   //   console.log(Math.random());

var rand = Math.random();

console.log(rand);
console.log(Math.floor(rand * 10));
console.log(Math.floor(rand * 100));
console.log(Math.floor(rand * 1000));


// if we want output  like a OTP four digits numbers  

var OTP = Math.random();
console.log(Math.floor(OTP * 8999 + 1000));


// Absolute method :- it convert negative into positive number

// var num = -26
var num = -58
console.log(Math.abs(num));
 

//  MAXIMUM number and MINIMUM number
console.log(Math.min(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));
console.log(Math.max(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

//SQUAREROOT
console.log(Math.sqrt(144));
console.log(Math.sqrt(16));


// Math.sign()  :-

// Math.sign(x) returns if x is negative, null or positive 

console.log(Math.sign(-20));  // -1
console.log(Math.sign(0));    // 0
console.log(Math.sign(4));   //  1




// min and max:-

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(Math.min(...nums));  //10
console.log(Math.max(...nums));   //90



// BigInt datatype :-
// it is used to handle large integers




var n1 = 100;
var n2 = 100n;
var n3 = BigInt(100);


console.log(n1);
console.log(n2);
console.log(n3);

console.log(typeof n1);
console.log(typeof n2);
console.log(typeof n3);

// console.log(n1 + n2);    // it defined error becuase we can't use number and BigInt in addition 

console.log(n2 + n3);


// undefined
var num;
var num2 = undefined;

console.log(num);   //-58
console.log(num2);  //undefined

console.log(typeof num);  //number
console.log(typeof num2);  //undefined


