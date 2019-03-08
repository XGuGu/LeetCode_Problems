Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]


class Solution {
    public List<List<String>> partition(String s) {
        List<List<String>> res = new ArrayList<List<String>>();
        List<String> l = new ArrayList<String>();
        helper(res, l, s, 0);
        return res;
    }

    void helper(List<List<String>> res, List<String> l, String s, int k) {
      if (k == s.length()) {
        res.add(new ArrayList<String>(l));
        return;
      }

      for (int i = k + 1; i<= s.length(); i++) {
        if (ispalindrome(s.substring(k, i))) {
          l.add(s.substring(k, i));
          helper(res,l, s, i);
          l.remove(l.size() -1);
        }
      }
    }

    boolean ispalindrome(String s) {
      int l = 0;
      int r = s.length() - 1;
      while(l < r) {
        if (s.charAt(l) != s.charAt(r)) {
          return false;
        }
        l++;
        r--;
      }
      return true;
    }
 }
