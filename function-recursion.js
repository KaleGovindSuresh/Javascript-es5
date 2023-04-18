// function recursion
// if a function calls itself is called function recursion

// function f1() {
//     console.log("hi");
//     f1();  // function recursion
// }
// f1();

// print square of numbers
function sq(num) {
  console.log(num + "^2 = " + num * num);
  if (num < 100) sq(num + 1);
}

sq(1);

// print even numbers from 2 to 100 without using any loop
function even(n) {
  console.log(n);
  if (n < 100) even(n + 2);
}

even(2);

// print odd numbers from 1 to 100 without using any loop
function odd(n) {
  console.log(n);
  if (n < 100) odd(n + 2);
}

odd(1);

//print numbers from 1 to 100 using function
// function num(n) {
//   if (n <= 100) {
//     console.log(n);
//     num(n + 1);
//   }
// }
// num(1);



// arrow function 
const num = (n) => {
  if (n <= 100) {
    console.log(n);
    num(n + 1);
  }
};
num(1);
