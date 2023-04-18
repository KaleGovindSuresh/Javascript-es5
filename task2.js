
// operations on array of numbers 

// 1. min
// 2. max 
// 3. evens
// 4. odds 
// 5. sum 


// You will get two arrays, one for numbers and another for commands 

// Ex: 

// var nums = [1,2,3,4,5,6]
// var cmds = ["odd","even"]
// []
// var nums = [1,3,5]//even
// 5 //min

function even(arr) {
    return arr.filter(function (n) {
      return n % 2 == 0;
    });
  }
  
  function odd(arr) {
    return arr.filter(function (n) {
      return n % 2 != 0;
    });
  }
  
  function min(arr) {
    return Math.min(...arr);
  }
  
  function max(arr) {
    return Math.max(...arr);
  }
  
  function sum(arr) {
    return arr.reduce(function (p, n) {
      return p + n;
    }, 0);
  }
  
  function operation(nums, cmds) {
    var result = nums;
  
    for (var cmd of cmds) {
      switch (cmd) {
        case "even": {
          result = even(result);
          break;
        }
        case "odd": {
          result = odd(result);
          break;
        }
        case "sum": {
          result = sum(result);
          break;
        }
        case "min": {
          result = min(result);
          break;
        }
        case "max": {
          result = max(result);
          break;
        }
      }
    }
    return result;
  }
  
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  console.log(operation(arr, ["even"]));
  console.log(operation(arr, ["odd"]));
  console.log(operation(arr, ["sum"]));
  console.log(operation(arr, ["min"]));
  console.log(operation(arr, ["max"]));
  console.log(operation(arr, ["even", "max"]));
  console.log(operation(arr, ["even", "min"]));
  console.log(operation(arr, ["even", "sum"]));
  console.log(operation(arr, ["odd", "max"]));
  console.log(operation(arr, ["odd", "min"]));
  console.log(operation(arr, ["odd", "sum"]));
  console.log(operation(arr, ["odd", "even"]));
  console.log(operation(arr, ["even", "odd"]));
  



