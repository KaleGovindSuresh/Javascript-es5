// find multiple nested arrays length without using methods in javascript
  
  function arrLength(nums) {
    var count = 0;
    function fun(arr) {
      for (var i = 0; i < arr.length; i++) {
        var ele = arr[i];

        // if(typeof ele == "object");
        if (Array.isArray(ele)) fun(ele);
        else count++;
      }
    }
    fun(nums);
    return count;
  }

  var arr = [1, 2, 3, [4, 3, 5, [5, 6, 7, [8, 9, [4, 5]]]]];
  console.log(arrLength(arr));
  console.log(arrLength([1, [2, [3]]]));
  console.log(arrLength([1, [2, [3], [4, 5]]]));

