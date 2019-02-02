// Given a string, find the length of the longest substring without repeating characters.
//
// Example 1:
//
// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
//
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
//
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.



var lengthOfLongestSubstring = function(s) {
  if (s.length === 0 || s.length === 1) {
    return s.length;
  }

  let max = 0;
  let set = new Set();

  for (var i = 0; i < s.length - 1; i++) {
    set.add(s[i]);
    for (var j = i + 1; j < s.length; j++) {
      if (!set.has(s[j])) {
        set.add(s[j]);
      } else {
        if (set.size > max) {
          max = set.size;
        }
        set.clear();
        break;
      }
    }
    if (set.size > max) {
      max = set.size;
    }
  }
  return max;
}


使用两层for循环, 遍历所有可能的情况; 使用set来存储不重复的子串.
