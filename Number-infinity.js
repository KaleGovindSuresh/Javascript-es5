

// Infinity:-
// it represents a Number which is out of number handling capacity of javascript engine

console.log( Number.MAX_VALUE);
console.log( Number.MIN_VALUE);


console.log( Number.MAX_VALUE * 10000);
console.log( Number.MIN_VALUE * 10000);

console.log(10 / 0);

var num = 1000;
while (num != Infinity) {
    console.log(num = num * 10000);
}