// flat-array():-
// it converts nested array into single array use direct flat-array method

var arr = [
  10,
  20,
  30,
  40,
  [100, 200, 300, [500, 600, 700], 400],
  50,
  60,
  70,
  80,
];

// var nums = arr.flat(1);
// var nums = arr.flat(2);
var nums = arr.flat(Infinity);
console.log(nums);

// faltMap() array method :-
// it converts the nested array into single array when array are in strings after spliting

var arr = ["one two three", "four five six", "seven", "eight", "nine", "ten"];

var strArr = arr.map(function (str) {
  return str.split(" ");
});
console.log(strArr);
console.log(strArr.flat());

var strArr2 = arr.flatMap(function (str) {
  return str.split(" ");
});

console.log(strArr2);

//***************************************** */Example 2**************************************

// var  arrayNumber= [1, 2, 3, 4];
// console.log(arrayNumber.map(number => [number * 3]));
// //[[3], [6], [9], [12]]
// console.log(arrayNumber.flatMap(number => [number * 3]));
// // [3, 6, 9, 12]

// //***************************************** */Example 3**************************************
// var stringArray = ["es10", "", "feature"];
// console.log(stringArray.map(word =>word.split(" ")));
// //[["es10"], [""], ["feature"]]
// console.log(stringArray.flatMap(word =>word.split("")));
// //["e", "s", "1", "0", "f", "e", "a", "t", "u", "r", "e"]
