// Currying
//     The currying is the process of transforming a function callable like
// add(10,20) into callable like add(10)(20)

// Curried  function
//     The function which is callable like add(10)(20) is called curried function
// Curry function
//     The function which performs currying operation is called curry function

function add(a, b, c) {
  return a + b + c;
}

console.log(add(10, 20, 30));

function curry(fun) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fun(a, b, c);
      };
    };
  };
}

var curriedFun = curry(add);

console.log(add(10, 20, 30));
console.log(curriedFun(10)(20)(30));
