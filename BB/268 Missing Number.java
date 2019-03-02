Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8

//Array.sort time Onlogn
//Hashset  time On
// 求sum 首项 末项 乘项数 除2 再 减  On
[3, 0, 1]

class Solution {
    public int missingNumber(int[] nums) {
      int res = nums.length;
      for (int i = 0; i < nums.length; i++) {
        res ^= i ^ nums[i];
      }
      return res;
    }
}

class Solution {
    public int missingNumber(int[] nums) {
      int res = 0;
      for (int i = 1; i <= nums.length; i++) {
        res ^= i ^ nums[i - 1];
      }
      return res;
    }
}


0 ^ 0 = 0
b ^ b = 0
0 ^ a = a
a ^ b ^ b = a

3 ^ 3 = 0
3 ^ 1 = 2
2 ^ (1 ^ 2) = 1

01
10
11
10
01
