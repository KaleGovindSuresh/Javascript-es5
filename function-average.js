// find average 
// 10,20,30
// avg = (10+20+30)/3

function avg() {
    var sum = 0;
    for (var n of arguments) {
        sum +=n;
    }
    return sum / arguments.length;
}

console.log(avg(10, 20, 30, 40)); //25
console.log(avg(-10, -20, 30, 40)); //10
console.log(avg(10, -20, 30, -40)); //-5
console.log(avg(10, 20, 30, 40, 50, 60, 70,80,90)); //40