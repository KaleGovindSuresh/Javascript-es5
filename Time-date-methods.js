// setter method :- to set the value of date and time 

var d = new Date();

// to modify existing object there are setter methods


d.setFullYear(2020);
// d.setFullYear(2020, 2, 16);

d.setMonth(4);
// d.setMonth(4, 25);

d.setDate(27);

d.setHours(2);
// d.setHours(2, 30, 45, 777);
d.setMinutes(45);
// d.setMinutes(45,54,787);
d.setSeconds(55);
// d.setSeconds(55,785);
d.setMilliseconds(666);

console.log(d.toLocaleString());
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());


// getter method 

var d = new Date();

console.log("Year: ", d.getFullYear());
console.log("Month: ", d.getMonth());
console.log("Date: ",d.getDate());
console.log("Day of the week: ", d.getDay());
console.log("Hours: ", d.getHours());
console.log("Minute: ", d.getMinutes());
console.log("Seconds: ", d.getSeconds());
console.log("Miliseconds: ", d.getMilliseconds());



// Example find cuurent day 

var d = new Date();
var days = ["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(days[d.getDay()]);


// Find  Day of Birthday 

var d = new Date(1999, 9,11);
var days = ["Sun", "Mon","Tue", "Wed", "Thu", "Fri", "Sat"];

console.log(days[d.getDay()]);


// Define a function to format the date 

function format(d, sep = "/") {
    return d.getDate() + sep + (d.getMonth() + 1) + sep + d.getFullYear();
}

// dd-mm-yyyy
// dd/mm/yyyy

var d = new Date();
console.log(format(d));
console.log(format(d, "-"));
console.log(format(d, "/"));
console.log(format(d, "_"));
console.log(format(d, "*"));


// get date in miliseconds

var d = Date.now();

console.log(d);

var str = "2022/07/13";
var dd = Date.parse(str);
console.log(new Date(dd).toLocaleDateString());