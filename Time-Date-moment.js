var d = Date.now();

console.log(d);

var str = "2022/07/13";

var dd = Date.parse(str);
console.log(new Date(dd).toLocaleDateString());

const moment = require("moment");

console.log(moment().format("MMMM Do YYYY, h:mm:ss a")); // July 21st 2022, 6:58:11 pm
console.log(moment().format("dddd")); // Thursday
console.log(moment().format("MMM Do YY")); // Jul 21st 22
console.log(moment().format("YYYY [escaped] YYYY")); // 2022 escaped 2022
console.log(moment().format());

console.log(moment("20111031", "YYYYMMDD").fromNow()); // 11 years ago
console.log(moment("20120620", "YYYYMMDD").fromNow()); // 10 years ago
console.log(moment().startOf("day").fromNow()); // 19 hours ago
console.log(moment().endOf("day").fromNow()); // in 5 hours
console.log(moment().startOf("hour").fromNow());
