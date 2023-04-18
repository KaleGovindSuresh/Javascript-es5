// at():- it returns the position of array from left to right or right to left 
  // it return positive as well as negative value of indexcex

// var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// console.log(nums.at(3));
// console.log(nums.at(5));
// console.log(nums.at(-2));

// key ():-

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(nums.keys(1));

// [].copyWithin
// [].entries
// [].keys
// [].from
// [].of


// How to empty an array ?***************************************************

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
nums.length = 0;
nums.splice(0);

console.log(nums);


// fill ():- 

// fill empty into values 

// var arr = new Array(50);

// console.log(arr);
// arr.fill(0);
// console.log(arr);
// var arr2 = arr.map(function (val, i) {
//   return i + 1; 
// });
// console.log(arr2);


var arr3 = new Array(10);
arr3.fill(0);
// console.log(arr3);
var arr4 = arr3.map(function (val, i) {
  return (i + 1) * 10; 
});
console.log(arr4);

// solution 2 in one line 

var result = new Array(10).fill(0).map(function (v, i) {
  return ++i * 10;
})
console.log(result);


// isArray():- 
// To check the given value is an array or not 
var a = [10];
var b = {};

console.log(typeof a);
console.log(typeof b);
console.log(Array.isArray(a));  // true
console.log(Array.isArray(b));  // false



// from() :- 

// it create an array from iterable object 
var arr = Array.from("Topper Skills")
console.log(arr);


// of():-
var arr2 = Array.of(10, 20, 30, 40, 50, 60, 70)
var arr2 = Array.of(10, 20, 30, 40, 50, 60, 70 ,"abc", "gkdkk")


console.log(arr2);


var arr = new Array(50);

console.log(arr);
arr.fill(0);
console.log(arr);
var arr2 = arr.map(function (val, i) {
  return i + 1; 
});
console.log(arr2);



// key ():-

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
console.log(nums.keys(1));