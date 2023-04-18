// NaN :-
// checking the Nan value :-

// There are two methods to check the NaN value

// console.log(isNaN(100));
// console.log(Number.isNaN(100));

// console.log(isNaN("100"));
// console.log(Number.isNaN("100"));

// console.log(isNaN("100abc"));
// console.log(Number.isNaN("100abc"));

console.log(isNaN(100 * undefined));
console.log(Number.isNaN(100 * undefined));

console.log(isNaN(true));
console.log(Number.isNaN(true));

console.log(isNaN(10 + 10));
console.log(Number.isNaN(10 + 10 + null));

