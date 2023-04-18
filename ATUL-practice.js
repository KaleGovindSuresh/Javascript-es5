// 15july 2022

// to find arguments average-

// function avg(){
//     var sum=0;
//     for(var n of arguments){
//         sum +=n;
//     }
//     return sum /arguments.length;
// };

// console.log(avg(10,20,30,40,50,60)); //35
// console.log(avg(10,20,30,40,50,60,70,80,90));  //50
// --------------------------------------------------------------------------
// note :- in js a function can be treated as like a value

// function greet(){
//     console.log("hello topper skills");
// };
// greet();

// var f1=greet;
// f1();
// -----------------------------------------------------------------------------

// return statement :--

// function f1(status){
//     console.log("in f1");
//     if(status) return;
//     console.log("end");
//     console.log("end");
//     console.log("end");
//     console.log("end");
//     // return 10;
// };

// f1(true);
// f1(false);
// console.log(f1(true));

// ---------------------------------------------------------------------------
// function f1(){
//     return {
//         name:"topper skills"
//     }
// }

// function f2(){
//     return
//     {
//         name:"topper skills"
//     }
// };

// console.log(f1());//{ name: 'topper skills' }
// console.log(f2()); //undefined
// --------------------------------------------------------------

// function recurssion:-
//it a function calls itself is called function recurssion

//    function f1(){
//     console.log("hii");
//     f1();  //function recurssion
//    }

//    f1();
// -------------------------------------------------------------

// function sq(num){
//     console.log(num +"^2="+num*num);
//      if(num < 100) sq(num +1)
// }

// sq(1);
// --------------------------------------------
// print between 2-100 even numbers

// function even(num) {
//   console.log(num); //2,4,6,8,10...................
//   if (num < 100) even(num + 2);
// }
// even(2);

// for (var i = 1; i <= 100; i++) {
//   if (i % 2 != 0) console.log(i);
// }
// ----------------------------------------------------------
// hosting:-available karun dene
//   example:- web hosting,party hosting

// hoisting:-
// it accept only declaration is hoist ,it not be hoist initialization

// city="pune";  //initialization
// console.log(city); //pune

// var city ; //declaration
// ----------------------------------------------------------------------------

// difference between function declaration vs function expression

// function declaration:-
//the definition is start with function keyword then it is called function declaration
// it is hoisted

// syntax:-
//   function f1(){
//      // function declaration
//    }

//  examples:-
// f1(); //it is hoisted
//       function f1(){
//          console.log("in f1");
//       };

// function expression:-
// the defenition is does not start with function keyword then it is called function expression
// it is not hoisted

// syntax:-
// var f2=function(){
//    // function expression
// }

// examples:-

// var f2=function(){
//    console.log("in f2");
// }

// f2();  //it not hoisted
// ------------------------------------------------------------------------------
// types of function
// there are three main types function

// 1.Named function:-
//   if a function is defined with a name then it is called named function
//   named function ps preffered when you have to use same function for multiple times
//   from different location

// // examples:-
// function functionName(params){
//    body
// }
// -------------------------------------------
// 2.Anonymoyus function

// //   if a function is defined without a name then it is called named function
// //   it is prefered for one time use

// // examples:-
// var functionName =function(){
//    body
// }
// -----------------========================
// 3.Arrow function (ES6)

// ------------------------------------------
// other type/term of function

// pure function
//   if a function always return same output  if same input is given it called pure function
//   pure function does not modifies the parameters

// pure function
// function add(a,b){
//    return a+b;
// }
// console.log(add(10,20));  //30
// console.log(add(10,20));  //30
// console.log(add(10,20));  //30
// console.log(add(10,20));  //30

// impure function/not pure :-
// function getTime(){
//    return new Date().getMilliseconds()
// }
// console.log(getTime());  //939
// console.log(getTime());  //940
// console.log(getTime());  //940
// console.log(getTime());  //941
// *************************************************************
// factory function
//    if a function returns an object then it is called factory function

// example
// function getUser(name,mobile,email,city){
//    // return {name,mobile,email,city };
//    return {name:name,mobile:mobile,email:email,city:city}
// }
// console.log(getUser("Atup Diwate","1234567889","atul1997@gmail.com","pune"));
// output:-
//{
//    name: 'Atup Diwate',
//    mobile: '1234567889',
//    email: 'atul1997@gmail.com',
//    city: 'pune'
//  }
// *********************************************************************************

// callback functionan
// A callback is a any javascript function which is passed as an argument to another function (HOC) to be executed in the future after some operation settimeout/asynchronous operation

// higher order function
// It is a function that accepts another function as an argument or returns a function as return value or both .
// It perform common asynchronous operation

// async function
// a function which is defined with async keyword is called async function
// the async function returns a promise

// Await :- It is a keyword used in async function

// print all the numbers which are divisible by " 5" from 1 to 100

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0) console.log(i);
// }

// print odd number from 1 to 100
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 != 0) console.log(i);
// }
// print even number from 1 to 100
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) console.log(i);
// }

// print 13 * 13 upto 10 means 13 pada
// for (i = 1; i <= 10; i++) {
//   console.log(i * 13);
// }


// let num = 13;
// for (let i = num; i <= num * 10; i += num) {
//   console.log(i);
// }


