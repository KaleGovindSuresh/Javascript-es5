
// for adding start and end position only :-

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// adding elements by using methods

// push (elements):- adding at end of the array 

// unshift(elements):- adding at start of the array


var size = nums.push(100, 200);

console.log(size); //11

size = nums.unshift(5, 6, 7,8,9);
console.log(size); // 16
console.log(nums); 


// for  removing start and end position only :-

// pop ():- it delete or remove last of an array 
// shift ():- it delete or remove first ofa an array

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(nums.pop());
console.log(nums.shift());
console.log(nums);



// splice :- it used for adding, remove, replace, inserting in any position of an array index

// splice(index,deletecount,ele1, ele2, eleN)

var nums = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// removing element using splice()

// console.log(nums.splice(5, 2));
// console.log(nums);

// replacing elements using slice

// console.log(nums.splice(5, 1, 600));
// console.log(nums);


// inserting elements using splice

console.log(nums.splice(3, 0, 35));
console.log(nums);