Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).


class Solution {
    public int threeSumClosest(int[] nums, int target) {
      if (nums.length < 3) {
        return Integer.MAX_VALU;
      }

      Arrays.sort(nums);
      int min_sum = nums[0] + nums[1] + nums[nums.length - 1];
    }
}


public int threeSumClosest(int[] nums, int target) {
        if(nums.length < 3)
            return Integer.MAX_VALUE;

        Arrays.sort(nums);
        int min_sum = nums[0] + nums[1] + nums[nums.length - 1];
        for(int i = 0; i <= nums.length - 3; i++) {
            int j = i + 1;
            int k = nums.length - 1;
            while(j < k) {
                int sum = nums[i] + nums[j] + nums[k];
                if(target > sum)
                    j++;
                else
                    k--;

                if(Math.abs(sum - target) < Math.abs(min_sum - target))
                    min_sum = sum;
            }
        }

        return min_sum;
    }