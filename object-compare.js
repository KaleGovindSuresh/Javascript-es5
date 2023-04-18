// compare number of properties
function equals(ob1, ob2) {
  var keys1 = Object.keys(ob1);
  var keys2 = Object.keys(ob2);

  if (keys1.length != keys2.length) return false;

  for (var k of keys1) {
    if (ob1[k] != ob2[k]) {
      return false;
    }
  }
  return true;
}

var o1 = { a: "aa", b: "bb" };
var o2 = { a: "aa", b: "bbb" };

console.log("o1 == o2 ", equals(o1, o2));

var obj1 = { city: "pune" };
var obj2 = { city: "pune" };

console.log("obj1 == obj2 ", equals(obj1, obj2));

var obj3 = { city: "pune" };
var obj4 = { city: "pune", country: "India" };

console.log("obj3 == obj4 ", equals(obj3, obj4));

var obj5 = { name: "govind", country: "India" };
var obj6 = { name: "govind", country: "India" };

console.log("obj5 == obj6 ", equals(obj5, obj6));
