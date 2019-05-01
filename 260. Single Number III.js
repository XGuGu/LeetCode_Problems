
Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:

Input:  [1,2,1,3,2,5]
Output: [3,5]
Note:

The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

//medium


var singleNumber = function(nums) {
    var number = {};

    for(var i=0;i<nums.length;i++) {
        var key = nums[i].toString();
        if(number.hasOwnProperty(key)) {
            delete number[key];
        } else {
            number[key] = true;
        }
    }

    var result = Object.getOwnPropertyNames(number);
    result[0] = Number(result[0]);
    result[1] = Number(result[1]);

    return result;
};
