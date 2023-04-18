// JSON - Javascript Object Notation 
// - it is a string represenation of javascript objects and arrays
// - it is used as a format to store the data in string form. 
// -it is very similar to javascript objects with few differences
// -The JSON format is used to store the project configuration and exchange the data between client and server 



// JSON VS Javascript Object

// - In javascript writing object properties in double quotes is optional 
// but in JSON writing properties  in double quote is mandatory/compulsary

var jsObj = {
    id : 11,
    name: "Govind Kale",
    isActive: true,
    mobiles: ["9130814901", "2458962242"],
    address: { street: "vadgaon bu.", city: "pune" },
    printProfile() {
        console.log("Name: " + this.name);
    },
};
// IT Convert javascript Object into JSON
console.log(jsObj);
var str = JSON.stringify(jsObj);
console.log(str);


// IT Convert JSON into javascript Object 

var obj = JSON.parse(str);
console.log(obj);