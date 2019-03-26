Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.


var largestNumber = function(nums) {
  var sorted = nums.sort(function(a, b) {
    var ab = a.toString() + b.toString();
    var ba = b.toString() + a.toString();
  });

  var joined = sorted.join('');
  if (parseInt(joined) === 0) {
    return '0';
  } else {
    return joined;
  }
};
