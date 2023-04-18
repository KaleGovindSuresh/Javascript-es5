// Making an object readonly

var person = {
    name: "Topper Skills",
    mobile: "7875580668",
    city: "Pune",
  };
  
  Object.preventExtensions(person);
  // - Cannot add new property
  // - can update and remove existing property
  
  Object.seal(person);
  // - cannot add and remove properties
  // - you can modify existing property
  
  Object.freeze(person);
  // - cannot add, update and remove properties
  
  // adding property
  person.email = "mailto:topperskills@gmail.com";
  
  // modify existing property
  person.city = "Mumbai";
  
  // remove a property
  delete person.name;
  
  console.log(person);
  
  console.log("IsFrozen: ", Object.isFrozen(person)); //true
  console.log("IsSealed: ", Object.isSealed(person)); //true
  console.log("isExtensible: ", Object.isExtensible(person)); //false
  