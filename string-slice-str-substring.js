var title = "Topper Skills"

// slice
// slice(startIndex)
// slice(startIndex,endIndex)
//- it accept the positive as well as negative value
//-slice() cannot swap the start and end indexes if end ninde is greater 
// start index  
console.log(title.slice());
console.log(title.slice(3));
console.log(title.slice(3, 9));
console.log(title.slice(9, 3));     
console.log(title.slice(-6, -2));




// substring
// substring(startIndex)
// substring(startIndex,endIndex)
// -it can accept positive indexes only
// - it can swap the indexes if startindex  is greaterthan endindex.
console.log(title.substring());
console.log(title.substring(3));
console.log(title.substring(3, 9));
console.log(title.substring(9, 3));
console.log(title.substring(-6, -2));



// substr
//substr(startIndex) 
//substr(startIndex,length)
// it start from startIndex but it print length from startpoint of index 

console.log(title.substr());
console.log(title.substr(3));
console.log(title.substr(3, 9));
console.log(title.substr(9, 3));
console.log(title.substr(2, 7));
console.log(title.substr(0, 6));