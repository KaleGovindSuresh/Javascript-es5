// filter all prime numbers from the array and check prime number or not ?
// Filter all the prime numbers from the array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 9, 10, 11, 12, 13];
var arr2 = arr.map((n) => n * 2).filter((n) => n > 10);
console.log(arr2);

var primeNums = arr.filter(function (num) {
  if (num == 1) {
    return false;
  } else {
    var isPrime = true;

    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }

    return isPrime;
  }
});

console.log(primeNums);

var users = [
  { id: 1, name: "aaaa", city: "Pune" },
  { id: 2, name: "bbbb", city: "pune" },
  { id: 3, name: "cccc", city: "mumbai" },
  { id: 4, name: "ddddd", city: "Pune" },
  { id: 5, name: "eeee", city: "nagpur" },
  { id: 6, name: "fffff", city: "nashik" },
  { id: 7, name: "gggg", city: "Pune" },
  { id: 8, name: "hhhh", city: "Nagpur" },
  { id: 9, name: "iiii", city: "Pune" },
  { id: 10, name: "jjjj", city: "mumbai" },
];
//   var ids=[1,2,3,4,5,6,7,8,9,10 ]
// var ids=users.map(function(user){
//     return user.id;
// });
// console.log(ids);
// ====================================================
var puneUsers = users.filter(function (user) {
  return user.city.toLowerCase() == "pune";
});
console.log(puneUsers);
