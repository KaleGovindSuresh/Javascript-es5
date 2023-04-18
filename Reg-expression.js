var mobilePattern = /^[0-9]{10}$/;

// test 
console.log(mobilePattern.test("abcdef"));
console.log(mobilePattern.test("1234567"));
console.log(mobilePattern.test("abcdef12354689"));
console.log(mobilePattern.test("1234567890"));
console.log(mobilePattern.test("12345678901234567"));


// exec 

console.log(mobilePattern.exec("abcdef"));
console.log(mobilePattern.exec("1234567"));
console.log(mobilePattern.exec("abcdef12354689"));
console.log(mobilePattern.exec("1234567890"));
console.log(mobilePattern.exec("12345678901234567"));



// match method in regular Expression 

var str = "puneabcde pune aijfijafka pune, asdrfespune Pune";
var sstr = "pune";

console.log(str.match(new RegExp(sstr, "gi")));
console.log(str.match(new RegExp(sstr, "gi")).length);
// console.log(str.matchAll(sstr));   // not get output of match all


// matchAll for checking how many times iterate 

var str = "puneabcde pune aijfijafka pune, asdrfespune Pune";
var sstr = "pune";

// console.log(str.match(new RegExp(sstr, "gi")));
console.log(str.match(new RegExp(sstr, "gi")).length);

var result = str.matchAll(sstr);

for (var r of result) {
    console.log(r);
}




// example *************************************/
// check whether the substring is available or not without using string methods

var str = "lkflakja aijiofjjhgn irjoifapon jija pune kjkjfa";
// var str = "lkflakja aijiofjjhgn irjoifapon jija  kjkjfa";
var sstr = "pune";
console.log(new RegExp(sstr, "gi").test(str));