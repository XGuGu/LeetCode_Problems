Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a, b) => a-b);
    helper(nums, res, 0, []);
    return res;
};

const helper = function(nums, res, start, temp) {
    res.push(temp.slice());
    for(let i=start; i<nums.length; i++) {
        if(i>start && nums[i] == nums[i-1]) continue;
        temp.push(nums[i]);
        helper(nums, res, i+1, temp);
        temp.pop();
    }
}

递归法
