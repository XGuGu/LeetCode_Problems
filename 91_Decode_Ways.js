A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).


重要！
两种解法  space: On 和 O1

用DP做 Facebook容易出现

// space O(n)
var numDecodings = function(s) {
    if (s.length === 0) {
      return 0;
    }

    let len = s.length;
    let dp = Array(len + 1).fill(0);

    dp[0] = 1;
    dp[1] = s[0] != '0' ? 1: 0;

    for (let i = 2; i <= len; i++) {
      let first = parseInt(s.substring(i - 1, i));
      let second = parseInt(s.substring(i - 2, i));
      if (first != 0) {
        dp[i] += dp[i - 1];
      }

      if (second >= 10 && second <= 26) {
        dp[i] += dp[i - 2];
      }
    }
    return dp[len];
};


//space O(1)
var numDecodings = function(s) {
    if (s.length === 0 || s[0] === '0') {
      return 0;
    }

    let c1 = 1;
    let c2 = 1;

    for (var i = 1; i < s.length; i++) {
      if (s[i] === '0') {
        c1 = 0;
      }
      if (s[i] <= '6' && s[i - 1] ==='2' || s[i - 1] === '1') { // ⚠️  符号 && 的先后判定
        c1 = c1 + c2;
        c2 = c1 - c2; // 把c1先前的值给c2
      } else {
        c2 = c1
      }
    }
    return c1;

}
