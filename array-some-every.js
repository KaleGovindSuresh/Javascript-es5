// some():- some means one or more value in array returns true otherwise false

// every():- every means all  value in array are correct then returns true otherwise false 



var nums = [10, 20, 30, 40, 45, 50, 60, 70, 80, 90, 100];

var status = nums.some(function (val, i, arr) {
    return val > 100;
}); 

var status2 = nums.every(function (val, i, arr) {
    return val <= 100;
});


console.log(status);
console.log(status2);


// ============================================ Example ================================
// check whether the typeof array in array all value are string, object, number etc 

var arr = ["pune", "mumbai", "satara", "parbhani", 10, "sangli", "nashik"];

var isString = arr.every(function (city) {
    return typeof city == "string";
});
console.log(isString);
// output 
// false

var arr = ["pune", "mumbai", "satara", "parbhani", "sangli", "nashik"];

var isString = arr.every(function (city) {
    return typeof city == "string";
});
console.log(isString);
// output 
// true