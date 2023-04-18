// object pproperrty values

var person = {
    name: "Govind Kale",
    age: 22,
    isAlive: true,
    GST: undefined,
    mobiles: ["9130814901", "9325241353"],
    address: {
        streets: "kale pimpalgaon, tq.pathri",
        city: "parbhani",
        state: "maharashtra",
        pincode: 431541,
    },
    printProfile: function (){
        console.log("Name: ",this.name);
    },
    adhar: null,
};

console.log(person);
person.printProfile();



// objectName["propertyName"]


var a = "city";

var obj = {
    firstName: "Topper",
    "last name": "Skills",
    [a]: "Pune",
};
console.log("First name: ", obj.firstName);
console.log("last name: ", obj["last name"]);
console.log("City: ", obj[a]);



// adding new property to existing object

var person = {
    name: "Topper Skills",
};

person.mobile = "9130814901";

person["city"] = "pune";
console.log(person);


//************************ */ remove a property *********************************

var person = {
    name: "Govind kale",
    mobile: "9130814901",
    city: "pune",
};

console.log(person);
delete person.city
console.log(person);


/************** object methods ***********/

var dog = {
    name:"tommy",
    age: 2,
    color: "white",
    weight: 10,

    running: function () {
        console.log(this.name + " is running");
    },

    barking() {
        console.log(this.name + " is barking");
    },
};

dog.running();
dog.barking();