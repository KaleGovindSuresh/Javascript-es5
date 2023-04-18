//length
var str = "Topper Skills";
console.log(str.length);


// text transform

var str = "Topper Skills";

console.log(str.toLowerCase());
console.log(str.toUpperCase());



console.log("Topper Skills".repeat(50)); // it repeat strings word/sentence upto limit


// replace method 

var str = "pune aaa Pune aaa pune";

str = str.replace("pune", "mumbai"); // pune in lowercase

str = str.replace("Pune", "mumbai"); // Pune in Uppercase

str = str.replace(/Pune/gi, "mumbai"); // replace pune in mumbai  all string

console.log(str);



// includes() :-
// it returns true if the provided string is available otherwise returns false

var str = "pune mumbai nagpur parbhani";

console.log(str.includes("pune"));  //true
console.log(str.includes("nashik"));  //false
console.log(str.includes("pune","nashik"));  //true
console.log(str.includes("nashik","pune"));  //false


// split (separator ) :-

//-it splits the string into an array of substring
// -it returns an array


var str = "Topper Skills, pune";

console.log(str.split());    //[ 'Topper Skills, pune' ]

console.log(str.split("")); //[
//     'T', 'o', 'p', 'p', 'e',
//     'r', ' ', 'S', 'k', 'i',
//     'l', 'l', 's', ',', ' ',
//     'p', 'u', 'n', 'e'
//   ]
console.log(str.split(" "));  //[ 'Topper', 'Skills,', 'pune' ]

console.log(str.split(","));  //[ 'Topper Skills', ' pune' ]




// the same string value cannot be revered becuase it is immutable

// solution 1
var str = "Topper skills"
var rstr = "";
for  (var i=0; i<str.length; i++) {
    rstr = str.charAt(i) + rstr;
    }

    console.log(rstr);




    // solution 2 

    var arr = str.split("");
    arr.reverse();
    var rstr = arr.join("");
    console.log(rstr);

    // solution 3
    console.log(str.split("").reverse().join(""));


// *********************************************************/
    // example of palindrome 

    // check it palindrome or not

    // solution 1
// var str = "topper";
var str = "MADAM";  //MADAM,NAYAN,NITIN,MAM
var rstr = str.split("").reverse().join("");
if (str == rstr) {
    console.log("Palindrome");
}else {
    console.log("Not a palindrome");
}

// solution 2
var str = "GOVIND";
var isPalindrome = true;
for (var i = 0, j= str.length-1; i<j; i++, j--) {
    if(str.charAt(i) != str.charAt(j)) {
        isPalindrome = false;
        break;
    }
}

if(isPalindrome) {
    console.log("Its palindrome");
} else {
    console.log("Its not palindrome");
}