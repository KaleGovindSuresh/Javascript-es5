
// i1st example sort by first number in ascending order 
var nums = [8, 20, 100, 9, 25];
nums.sort();
console.log(nums);

// output 
// [ 100, 20, 25, 8, 9 ]



var nums = [8, 20, 100, 9, 25];

nums.sort(function (a, b) {
    return b-a;
});
// output 
// [ 100, 25, 20, 9, 8 ]

console.log(nums);
var nums = [8, 20, 100, 9, 25];

nums.sort(function (a, b) {
    return a-b;
});

console.log(nums);
// output 
// [ 8, 9, 20, 25, 100 ]


// =================================================================================================================

// find minimun and maximum number from the array 
var nums = [8, 20, 100, 9, 25];

// solution 1st 
var min = nums[0];
var max = nums[0];
for (var n of nums){
    if (min > n) min = n;
    if (max < n) max = n;
}
console.log("Min: ", min);
console.log("max: ", max);


// solution 2nd 
console.log("Min: ", Math.min(...nums));
console.log("Max: ", Math.max(...nums));

// =================================================================================================================
// remove duplicate numbers from an Array 

// solution 1 
var nums = [10, 20, 10, 20, 30, 30, 30, 40, 50];

for (var i = 0; i < nums.length; i++){
    var n = nums[i];
    var count = 1;
    for (var j = i + 1; j < nums.length; j++) {
        var n2 = nums[j];
        if (n == n2) {
            nums.splice(j,1);
            count++;
            j--;
        }
    }
    
    console.log(n + " -> " + count);
}

console.log(nums);


// soution 2 
// var nums2 = [10, 20, 10, 20, 30, 30, 30, 40, 50];

// var s = new Set(nums2);
// var arr = Array.from(s);
// console.log(arr);

// solution 2nd in one line 
// console.log(Array.from(new Set(nums2)));


// solution 3rd 

var nums3 = [10, 20, 10, 20, 30, 30, 30, 40, 50];

var uniqueArr = [];
nums3.forEach(function (n) {
    if  (!uniqueArr.includes(n)) uniqueArr.push(n);
});
console.log(uniqueArr);


// =================================================================================================================
// convert array into subarray using slice method 

var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// [ 10, 20, 30, 40 ]
// [ 30, 40, 50, 60, 70 ]
// [ 50, 60, 70, 80, 90, 100 ]

var arr1 = arr.slice(0, 4);
var arr2 = arr.slice(2, 7);
var arr3 = arr.slice(4);

console.log(arr1);
console.log(arr2);
console.log(arr3);


// concate or join multiple array into single array by using methods
var arr1 = [ 10, 20, 30, 40 ];
var arr2 = [ 30, 40, 50, 60, 70 ];
var arr3 = [ 50, 60, 70, 80, 90, 100 ];

// by using concatenation method
var arr4 = arr2.concat(arr3, arr1)
console.log(arr4);

// by using spread operator
var arr5 = [...arr2, ...arr1, ...arr3];
console.log(arr5);




var nums = [10, 20, 30, 5, 70, 100, 60, 35, 15]
nums.sort(function (a, b) {
    return b-a;
});

console.log(nums);

