// reduce () :-
// The reduce() method runs a function on each array element to produce (reduce it to) a single value.

// The reduce() method works from left-to-right in the array. See also reduceRight().

// The reduce() method does not reduce the original array.


// var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// // previous value is not defined
// var sum = nums.reduce(function (prev, curr, i, arr) {
//     return prev + curr;
// });
// console.log(sum);




var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];


// previous value is defined   prev = 5
var sum = nums.reduce(function (prev, curr, i, arr) {
    return prev + curr;
},5);
console.log(sum);

// ======================================================================================================================

// find the min and max number in array using reduce method

// var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// var min = nums.reduce(function (prev, curr) {
//     return prev > curr ? curr : prev;
//     // return prev < curr ? prev : curr;     we can write also this way

// });

// var max = nums.reduce(function (prev, curr) {
//     return prev > curr ? prev : curr;
// });

// console.log("Min: ",min);
// console.log("Max: ",max);

