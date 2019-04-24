Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3, t = 0
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1, t = 2
Output: true
Example 3:

Input: nums = [1,5,9,1,5,9], k = 2, t = 3
Output: false


var containsNearbyAlmostDuplicate = function(nums, k, t) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            const x = Math.abs(nums[i] - nums[j]);
            const y = Math.abs(i - j);

            if(x <= t && y <= k) {
                return true;
            }
        }
    }

    return false;
};
