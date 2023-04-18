// There are three types of functions
// 1. Named function
// 2.Anonymous function
// 3.Arrow function 


// There are three types of functions 
// 1. Named function 

//     If a function is defined with a name then it is called named function 

//     Named function is preferred when you have to use same function for 
//     multiple times from different locations 


//     Example: 

//     function functionName(params) {
//       body
//     }

// 2. Anonymous function 
//     If a function is defined without a name then it is called anonymous function 

//     Anonymous is preferred for one time use 

//     Example: 
    
//     var functionName = function(){
//       body 
//     }


// 3. Arrow function (ES6):-




// pure function:-
//   If a function always returns same output if same input is given then it
//   called pure function
//   Pure function does not modifies the parameters

// pure fun
function add(a, b) {
    return a + b;
  }
  
  console.log(add(10, 20));
  console.log(add(10, 20));
  console.log(add(10, 20));
  console.log(add(10, 20));
  
  // not pure
  function getTime() {
    return new Date().getMilliseconds();
  }
  
  console.log(getTime());
  console.log(getTime());
  console.log(getTime());
  console.log(getTime());
  
// factory function 


// callback function 
// higher order function 

