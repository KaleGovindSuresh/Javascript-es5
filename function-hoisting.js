
// Hoisting :-
// Hoisting:-
//   It is a default behaviour of the javascript in which the variable and
//   function declaration are moved to the top of the current scope.

//   Only declarations are hoisted and variable initialization and function expressions
//   are not hoisted


// it returns the Pune because of first declared then initialize 
var city1;  // declaration
city1 = "Pune"; // initialization
console.log(city1);



// it returns the undefined because of first initailaze the declared
console.log(city);

city = "Pune"; // initialization

var city;  // declaration



// function Initialization VS function Declaration VS function Expression

// function Initialization:-


// function declaration:- 
//   If the function difintion line starts with 'function' keyword then it is 
//   called function declaration. 

//   - function declarations are hoisted

//   Ex. 
//         function f1(){
//           //function declaration
//         }


// Function Expression:- 
//       If the function definition line does not start with 'function' keyword then 
//       it is called function expression

//       function expressions are not hoisted 

//     Ex> 

//     var f2 = function(){
//       // function expression
//     }


f1();
f2();

//declaration - hoisted
function f1() {
    console.log("in f1");
}

// Expression-not hoisted
var f2 = function () {
    console.log("in f2");
};