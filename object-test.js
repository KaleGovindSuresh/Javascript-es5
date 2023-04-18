var dog = {
    color: "white",
    height: "2.2",
    weight: 20,
    age: 6,

    // behaviour

    barking() {
        console.log("barking....");
    },

    runnning() {
        console.log("running....");
    },

    eating() {
        console.log("eating....");
    },
};

console.log(dog);



// Object property name:-
//     The object property name must be in lower camel case
// - first word in lower case and first letter of all words after first word must
//  be in upperCase

//     Ex:
//     firstname - no
//     firstName - yes
//     first_name - no
//     FirstName - no
//     Firstname - no

//    - Writing property names in double quote is optional if there is no
//    space within property name, if there is space then double quote is mandatory

//    firstName - valid
//    "firstName" - valid
//    "first name" - valid
//    first name - invalid

//    - A variable value can be used as property name

var a = "city";

var person = {
  firstName: "Topper",
  "last name": "Skills",
  [a]: "Pune",
};

console.log(person);
