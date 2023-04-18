// Date (year,month,date,hour,minutes,seconds,)
// Date (year,month,date,hour,minutes,seconds,miliseconds)


// UTC- Cordinated Universal Time

var d = new Date();
var d = new Date(0);
var d = new Date(2022,2);
var d = new Date(2022, 2, 16);
var d = new Date(2022, 2, 16, 16, 30, 45, 888);


console.log(d);
// it give date and time   in indian standard
console.log(d.toLocaleString());
// it gives date only
console.log(d.toLocaleDateString());
// it gives time only
console.log(d.toLocaleTimeString());


// Months and day of the week uses indexes

//Jan - 0
//feb - 1
// March - 2



//Dec - 11


// sun - 0
// Mon - 1
// Tue - 2
//wed - 3
//Thurs - 4
// fri - 5
// sat - 6 