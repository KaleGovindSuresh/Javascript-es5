// Context :-
//     The object on which the function is running is called context/current
//     running object.

// 'this' keyword:-

// The 'this' keyword is used to access the context / current running object

function f1() {
    console.log("This: ", this);
  }
  
  // In case of named and anonymous function the context is an object on which the
  // function is called
  
  // global
  f1();
  
  var obj = {
    title: "Topper Skills",
    fun: f1,
  };
  
  obj.fun();
  


// **************************** EXAMPLE  *********************************************/
// name = "ABC";
// city = "Mumbai";

// var person = {
//   name: "Topper Skills",
//   city: "Pune",
//   profile() {
//     console.log("Name: ", this.name);
//     console.log("City: ", this.city);
//   },
// };

// person.profile();

// var pro = person.profile;

// pro();


// **************************** EXAMPLE  *********************************************/

// function printProfile() {
//     console.log("Name: ",this.name);;
// }

// var user1 = {name: "aaa"};
// var user2 = {name: "bbb"};
// var user3 = {name: "ccc"};
// var user4 = {name: "ddd"};

// printProfile();  //global

// printProfile.call(user1, 10, 20);
// printProfile.call(user2, 10, 20);
// printProfile.apply(user3, 10, 20);
// printProfile.apply(user4, 10, 20);




// bind()
// It creates a duplicates function,binds that function with the given object and returns the bounded function

function printProfile() {
    console.log("Name: ",this.name);;
}

var user1 = {name: "aaa"};
var user2 = {name: "bbb"};
var user3 = {name: "ccc"};
var user4 = {name: "ddd"};

printProfile(); //global
printProfile.call(user1);
printProfile(); //global

var fun = printProfile.bind(user2);
fun(100, 200);




var person = {
  name: "Topper Skills",
  city: "Pune",
  mobile: "9130814901",
  printProfile() {
    console.log("Name: " + this.name);
    console.log(" Mobile: " + this.mobile);
    console.log("City: " + this.city);
  },
};


person.printProfile();

var obj = {
  name: "abcdfe",
  mobile:"9162528",
  city: "Mumbai",
};

person.printProfile.call(obj);



//******************************************** */ example **********************************************/

// Define a function , it will accept an array of members and returns an even array


function even(arr) {
  var evenArr = arr.filter(function (n) {
    return n % 2 == 0;
  });

  return evenArr;
}
console.log(even([1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 9, 10,]));
console.log(even([11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]));


//******************************************** */ example **********************************************/
// sum of array 

function sum(arr) {
  return arr.reduce(function (pre,n) {
  return pre + n;
  }, 0)
}
console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 17, 18, 19, 9, 10,]));
console.log(sum([11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]));
