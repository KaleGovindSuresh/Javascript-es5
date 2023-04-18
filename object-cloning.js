// The objects gets stored in the heap memory

// var obj = {
//     name: "Topper Skills",
//     city: "Pune",
//   };
  
//   var obj2 = {
//     name: "Topper Skills",
//     city: "Pune",
//   };
  
//   obj2.city = "Mumbai";
  
//   console.log(obj);
//   console.log(obj2);
  






var person = {
    name: "Govind Kale",
    mobile: "9130814901",
    address: {
        city: "pune",
        country: "India"
    },
};

// shallow cloning
// var person2 = Object.assign{}.person;

var person2 = { ...person };

console.log(person);
console.log(person2);
person2.address.city = "Mumbai";

console.log(person);
console.log(person2);




// deep cloning 
var person = {
    name: "Govind Kale",
    mobile: "9130814901",
    address: {
        city: "pune",
        country: "India"
    },
};

var str = JSON.stringify(person);
var person2 = JSON.parse(str);

console.log(person);
console.log(person2);
person2.address.city = "Mumbai";

console.log(person);
console.log(person2);





var person = {
    name: "Govind Kale",
    mobile: "9130814901",
    address: {
        city: "pune",
        country: "India"
    },
};

var person2 = person;
console.log(person);
console.log(person2);

person2.name ="abcdef"
console.log(person);
console.log(person2);


