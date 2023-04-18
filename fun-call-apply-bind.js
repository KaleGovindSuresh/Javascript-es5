function printProfile(a, b) {
  console.log("Name: ", this.name);
  console.log("Sum: ", a + b);
}

var user1 = { name: "aaaa" };
var user2 = { name: "bbbb" };
var user3 = { name: "cccc" };
var user4 = { name: "dddd" };

// printProfile(); //global

// printProfile.call(user1, 10, 20);
// printProfile.call(user2, 10, 20);
// printProfile.apply(user3, [10, 20]);
// printProfile.apply(user4, [10, 20]);

// call()
//     accepts individual arguments
// apply()
//     accepts array of arguments

//     call() and apply() methods are used to call a function by substituting the
//     context/current object one time

// // bind()
//     It creates a duplicate function, binds that function with the given
//     object and returns the bounded function

printProfile(); //global
printProfile.call(user1); //user1
printProfile(); //global

var fun = printProfile.bind(user2);
fun(100, 200); //user2

var person = {
  name: "Topper Skills",
  city: "Pune",
  mobile: "7875580668",
  printProfile() {
    console.log("Name: " + this.name);
    console.log("Mobile: " + this.mobile);
    console.log("City: " + this.city);
  },
};

person.printProfile();

var obj = {
  name: "abcd",
  mobile: "345678",
  city: "Mumbai",
};

person.printProfile.call(obj);

// ****************************************** Example ******************************************************/

// Define a function, it will accept an array of numbers and returns an even array

function even(arr) {
  var evenArr = arr.filter(function (n) {
    return n % 2 == 0;
  });

  return evenArr;
}

console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(even([11, 12, 13, 14, 51, 16, 71, 18, 19]));

function sum(arr) {
  return arr.reduce(function (pre, n) {
    return pre + n;
  }, 0);
}

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(sum([11, 12, 13, 14, 51, 16, 71, 18, 19]));

//   operations on array of numbers

//   1. min
//   2. max
//   3. evens
//   4. odds
//   5. sum

//   You will get two arrays, one for numbers and another for commands

//   Ex:

//   var nums = [1,2,3,4,5,6]
//   var cmds = ["odd","even"]
//   []
//   var nums = [1,3,5]//even
//   5 //min

var cities = ["pune", "mumbai", "delhi", "nagpur", "parbhani", "sangli"];
var arr = cities.map(function (city) {
  return city.toUpperCase().split("").reverse().join("");
});

console.log(arr);

let num = [
  1,
  2,
  3,
  4,
  1,
  3,
  4,
  5,
  6,
  7,
  9,
  0,
  0,
  12,
  ,
  23,
  4,
  5,
  5,
  6,
  6,
  6,
  7,
  9,
  4,
  3,
];
const uni = [];
// num.forEach(function (n) {
//   if (!uni.includes(n)) uni.push(n);
// });
num.forEach((a)=>{
  if(!uni.includes(a)){
    uni.push(a)
  }
})
console.log(uni.sort(function(a,b){
  return a-b;
}));
