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
  var ids=[1,2,3,4,5,6,7,8,9,10 ]
var ids=users.map(function(user){
    return user.id;
});
console.log(ids);




// print array chars count 
var cities = ["pune", "mumbai", "sangali", "parbani", "Beed","Amravati"];

var chars = cities.map(function(city){
    return city.length
});
console.log(chars);



[].fill
// how to array empty 
var cities = ["pune", "mumbai", "sangali", "parbani", "Beed","Amravati"];
// cities.length = 0;
cities.splice(0);
console.log(cities);