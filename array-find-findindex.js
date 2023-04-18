
// find():
// it returns the value of array 


var nums = [10, 20, 30, 40, 45, 50, 60, 70, 80, 90];


var num = nums.find(function (val, i, arr) {
    console.log(val);
    return val > 40 && val < 50;
});



// findindex():
  // it returns the position of that array 
var index = nums.findIndex(function (val, i, arr) {
    console.log(val);
    return val > 40 && val < 50;
});

console.log(num);
console.log(index);


// example ====================================================
// find only id: 4 in array 

var users = [
    {id: 1, name: "Govind Kale1", city: "pune"},
    {id: 2, name: "Govind Kale1", city: "pune"},
    {id: 3, name: "Govind Kale1", city: "pune"},
    {id: 5, name: "Govind Kale1", city: "pune"},
    {id: 4, name: "Govind Kale1", city: "pune"},
    {id: 6, name: "Govind Kale1", city: "pune"},
    {id: 7, name: "Govind Kale1", city: "pune"},
    {id: 8, name: "Govind Kale1", city: "pune"},
];



var user = users.find(function (u) {
    return u.id == 4;
});
console.log(user);