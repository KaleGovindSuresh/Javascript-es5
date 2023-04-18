var city1 = "Pune"
var city2 = "Pune"
// city1 = city1.concat(" India");
console.log(city1);
console.log(city2);

var city3 = new String("Pune");
console.log(typeof city1);  // string
console.log(typeof city2);  // string
console.log(typeof city3);  // object

console.log(city1 == city2); // true
console.log(city1 === city2); //true
console.log(city1 == city3);  // true
console.log(city1 === city3); // false

