// var str = "lerem ipsum pune is best city lorem ips pune is the best city "

// var sub = "is"

// string madhla "is" delete karayach ahe
// using only conditional statement if, else, nested if, for ,while, do-while, break, return  etc . 

var str = "Topper is Skills is pune is abcd";
var str2 = "";

for (var i = 0; i < str.length - 1; i++) {
  var ss = str[i] + str[i + 1] + str[i + 2] + str[i + 3];
  if (ss != " is ") {
    str2 += str[i];
  } else {
    str2 += " ";
    i += 3;
  }
}

console.log(str2);

// Problem 2:
// Complexity: Medium

// You have been given a set of integers. You need to write a program that will divide a set 
// in two subsets of n/2 sizes each such that the difference of the sum of two subsets is as
//  minimum as possible.

// Note: n is even, hence sizes of two subsets must be strictly n/2.

// For example,

// Input =  [3, 4, 5, 3, 100, 1, 83, 54, 23, 20]
// Output = [3, 5, 3, 83, 54] and [4, 100, 1, 23, 20].
// Also print the sum of each set.

// Both output subsets are of size 5 and sum of elements in both subsets is same (148 and 148).
