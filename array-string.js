var names = ["Govind","Atul","Arjun","Akhilesh"];
var name = names.toLocaleString();
console.log(name);


// [].toLocaleString method :-

const event = new   Date(Date.UTC(2022,19,3,0,0));
console.log(event.toLocaleString('en-GB',{timeZone: 'UTC'}));
console.log(event.toLocaleString('ko-KR',{timeZone: 'UTC'}));