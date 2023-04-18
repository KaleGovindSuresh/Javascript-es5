// time count when code run
// console.time ("time taken to run")
// console.timeEnd("time taken to run");


// Find number of times the abc repitition

var str = "abc-abc+abc=abcabc-abc*abc";
var sstr = "abc";

// 0 = str.indexOf("abc",0)
// 5 = str.indexOf("abc",1)
// 9 = str.indexOf("abc",6)
// -1 = str.indexOf("abc",10)


//solution 1st by using for loop
var count = 0;
for (var i = 0; i < str.length; ){
    var index = str.indexOf(sstr, i);
    if (index >= 0){
        count++;
        i = index + 1;
    } else {
        i++;
    }
}
console.log("Total: ",count);



// solution 2nd by using while loop

var total = 0;
var startIndex = -1;

while ((startIndex = str.indexOf(sstr,startIndex + 1)) >= 0) {
    total++;    
}

console.log("Total: ",total);




// direct increament of i in for loop  
var count = 0;
for (var i = 0; i < str.length;  i++){
    var index = str.indexOf(sstr, i);
    if (index >= 0){
        count++;
        i = index + 1;
    } 
}
console.log("Total: ",count);

// second example  find  repitition of a 
var str = "aha-aba-ava-aga-afa"

var count = 0; 

for (var i = 0; i < str.length;  i++){
    if (str.charAt(i)=="a"){
        count++;
    } 
}
console.log("Total: ",count);



// third example find digits in var 

var str = "abc123abc6589ABC"
// var str = "abc123abc6589ABC+123*432/8587"  // or madhe ghetle ahe

var count = 0;
for(var i=0; i< str.length; i++)
if(str.charCodeAt(i)>=48 && str.charCodeAt(i) <=57) count++;

console.log("Total: ",count);



//

// a a a a a
// b b b b b
// c c c c c

// 97 97 97 97
// 98 98 98 98
// 99 99 99 99
for( i=97; i<=99; i++){
    var str=""
    for( j=1; j<=4; j++){
        var str= str + " "+ String.fromCharCode(i);
    }
    console.log(str);
}


// a b c d
// a b c d
// a b c d
// a b c d

// 97 98 99 100
// 97 98 99 100
// 97 98 99 100
// 97 98 99 100
for( i=1; i<=4; i++){
    var str=""
    for( j=97; j<=100; j++){
        var str= str + " "+ String.fromCharCode(j);
    }
    console.log(str);
}



// a a a a
// a b c d
// c c c c
// a b c d
for( i=97; i<=100; i++){
    var str="";
    for (var j = 97; j<=100;j++){
        var str= str + " "+ String.fromCharCode(i % 2 == 0 ? j : i);
        // var str= str + " "+ String.fromCharCode(i % 2 == 0 ? i : j); // it o/p abcd &bbbb &dddd
        // var str= str + " "+ String.fromCharCode(i % 2 != 0 ? i : j); 
    }
    console.log(str);
}

