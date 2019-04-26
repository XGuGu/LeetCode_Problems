Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7]
Explanation:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Note:
You may assume k is always valid, 1 ≤ k ≤ input array's size for non-empty array.
We can use a two pointers to replace the temp array. See the second solution;


//hard

function findTheMax(arr) {
    let max = Number.MIN_SAFE_INTEGER;
    for (const a of arr) {
        max = Math.max(a, max);
    }
    return max
}
var maxSlidingWindow = function(nums, k) {
    // priority Queue, but JS do not have it,
    if (!nums || nums.length === 0 || k === 0) {
        return [];
    }
    const r = [];
    const temp = [];
    for (let i = 0; i <= nums.length; i++) {
        if (temp.length < k) {
            temp.push(nums[i]);
        } else {
            // calculate the max;
            // then shift the tail
            // then push the new element
            const m = findTheMax(temp);
            r.push(m);
            temp.shift();
            temp.push(nums[i]);
        }
    }
    return r;
};
Second:

function findTheMax(nums, start, end) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = start; i <= end && i < nums.length; i++) {
        max = Math.max(max, nums[i]);
    }
    return max
}
var maxSlidingWindow = function(nums, k) {
    // priority Queue, but JS do not have it,
    if (!nums || nums.length === 0 || k === 0) {
        return [];
    }
    const r = [];
    let start = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i - start + 1 === k) {
            const max = findTheMax(nums, start, i);
            r.push(max);
            start++;
        }
    }
    return r;
};
