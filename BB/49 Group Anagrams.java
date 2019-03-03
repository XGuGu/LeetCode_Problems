Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

// time O(m*n*logn)  space: On

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
      List<List<String>> res = new ArrayList<>();
      if (strs == null || strs.length == 0) {
        return res;
      }

      HashMap<String, Integer> map = new HashMap<>();
      for (String str : strs) {
        char[] ch = str.toCharArray();
        Arrays.sort(ch);
        String s = new String(ch);
        if (map.containsKey(s)) {
          List<String> list = res.get(map.get(s));
          list.add(str);
        } else {
          List<String> list = new ArrayList<>();
          list.add(str);
          map.put(s, res.size());
          res.add(list);
         }
      }
      return res
    }
}

//counting sort 
