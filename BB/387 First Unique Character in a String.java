Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.





class Solution {
    public int firstUniqChar(String s) {
        Map<Character, Integer> countMap = new HashMap<>();
        for (int i = 0; i< s.length(); i++) {
          char letter = s.charAt(i);
          if (countMap.containsKey(letter)) {
            countMap.put(letter, countMap.get(letter) + 1);
          } else {
            countMap.put(letter, 1);
          }
        }

        for (int i = 0; i < s.length(); i++) {
          char letter = s.charAt(i);
          if (countMap.get(letter) == 1) {
            return i;
          }
        }

        return -1;
    }
}
