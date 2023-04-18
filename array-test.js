// creating an array 
// there are two ways to create array 

// 1. using literal [] 
//   var arrayName = []

// 2. using 'new' keyword 

// var array = new array 


// var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// console.log(nums);
// console.log(nums.length);
// console.log(typeof nums);


// accessing array elements without methods 
// arrayName[index] 
// var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// console.log(nums[4]);  // it returns the index of that position 
// nums[4] = 500;  // it changes the value of that index position
// nums[nums.length] = 100; // it adding in the last of index  
// console.log(nums);

// change the index 





// var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// console.log(nums.indexOf(30));
// console.log(nums.lastIndexOf(80));


// var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    
//     for (var i = 0; i < nums.length; i++){
//         if(nums[i] % 2 != 0) {
//             nums.splice(i, 1, 0)
//         }
//     }
    
//     console.log(nums);
    

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    
    for (var i = 0; i < nums.length; i++){
        if(nums[i] % 2 == 0) {
            nums.splice(i, 1, 0)
        }
    }
    
    console.log(nums);
    
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    for (var ele of nums) {
        console.log(ele);
    }

