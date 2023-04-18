// nested function 
// outer function (){
//     nested function
// }

// Scope :-
//     The level of accessiblity/availability of variables, etc. in the program is called scope
//     Scopes in the Javascript.
//     1. Global (Script/Module)
//     2. Function scope
//     3. Block Scope (if,for,while,etc.){}

//global
var a = 10;

function f1() {
  // function scope
  var b = 20;

  if (true) {
    // block scope
    let c = 30;
    console.log("f1 c: ", c);
  }
  console.log("f1 b: ", b);
  // console.log("f1 c: ", c);
}

f1();
console.log("a: ", a);
// console.log("b: ", b);
// console.log("c: ", c);

// *******************************************************************************************/

function f1(a) {
  var b = 20;
  console.log(a, b);

  function add() {
    console.log(a + b);
  }
  return add;
}

var add = f1(10);
add();


// Note:- for each function call a unique scope is created 

// Lexical Scope :- 
//     The lexical scope maintains/preserves a copy of variables of outer function to be used inside the nested function even after completing the execution of outer function 


// Closure :- 
//   The closue is a combination of nested function and lexical scope, the nested function 
//   can access the variables of outer scope(function) from the lexical scope 

// // global
// var counter = 0;

// if (true) {
//   var counter = 100;
// }

// counter++;
// counter++;
// counter++;

// console.log(counter); //3

function getCounter() {
  var counter = 0;
  function increment() {
    return ++counter;
  }
  return increment;
}

var totalBikes = getCounter();
var totalCars = getCounter();

console.log("Bikes: ", totalBikes());
console.log("Bikes: ", totalBikes());
console.log("Bikes: ", totalBikes());
console.log("Bikes: ", totalBikes());

console.log("Cars: ", totalCars());
console.log("Cars: ", totalCars());
console.log("Bikes: ", totalBikes());


// *********************************************************************************************/***** */
  // function f1() {
//   function f2() {
//     console.log("f2");
//   }
//   return f2;
// }
function f1() {
  return function () {
    console.log("f2");
    return 10;
  };
}

// var f2 = f1();
// f2();

// outer() ()

console.log(f1()()); //10

// var f2 = function () {
//   console.log("f2");
//   return 10;
// };


// *******************************************************************************************************/
function f1() {
  function f2() {
    console.log("f2");
  }
  return f2;
}
function f1() {
  return function () {
    console.log("f2");
    return 10;
  };
}

var f2 = f1();
f2();

// outer() ()

console.log(f1()()); //10

var f2 = function () {
  console.log("f2");
  return 10;
};

// *******************************************************************************************************/

// print fifty 
//fifty one 
//fifty two 
//fifty thre
//fifty four
//fifty five
//fifty six
//fifty seven
//fifty eight  
//fifty nine  
//fifty ten


function f1(a) {
    return function (b) {
      return function (c) {
        return a + b + c;
      };
    };
  }
  
  console.log(f1(10)(20)(30)); //60
  
  // fifty
  // fifty one
  // fifty two
  // fifty three
  // fifty four
  // fifty five
  // fifty six
  // fifty seven
  // fifty eight
  // fifty nine
  
  // sixty
  // sixty one
  // sixty two
  // sixty three
  // sixty four
  // sixty five
  // sixty six
  // sixty seven
  // sixty eight
  // sixty nine
  
  function table(ten) {
    return function (one) {
      console.log(ten + " " + one);
    };
  }
  
  var fifty = table("fifty");
  var sixty = table("Sixty");
  
  fifty("");
  fifty("one");
  fifty("two");
  fifty("three");
  fifty("four");
  fifty("five");
  fifty("six");
  fifty("seven");
  fifty("eight");
  fifty("nine");
  fifty("ten");
  
  sixty("");
  sixty("one");
  sixty("two");
  sixty("three");
  sixty("four");
  sixty("five");
  sixty("six");
  sixty("seven");
  sixty("eight");
  sixty("nine");
  sixty("ten");
  
  

//****************************************************** */   
function log(severity) {
    return function (message) {
    return function (time) {
        console.log("*".repeat(80));
        console.log("severity: ", severity);
        console.log("message: ", message);
        console.log("Time: ", time);
    };
 };
}
// log("High") ("the payment failed") ("19-7-2022  6:30:24pm");

// var high = log("High");
// high()("no internet connection");

