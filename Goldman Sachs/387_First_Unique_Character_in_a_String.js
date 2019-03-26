Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

方法1: 暴力破解法
解题思路:

将不重复的字符提取出来.
跟原字符一一判断.
代码:

var firstUniqChar = function(s) {
  s = s.split('');
  const r = s.filter((v, i, arr) => arr.indexOf(v) !== i);
  for (let i = 0; i < s.length; i++) {
    if (!r.includes(s[i])) return i;
  }
  return -1;
};
方法2: 字典法
解题思路:

使用字典判断出现的次数
代码:

var firstUniqChar = function(s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] || 0;
    map[s[i]]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map && map[s[i]] === 1) return i;
  }
  return -1;
};
方法3: 改进字典法
解题思路:

使用数组当作字典, 而字符的ASCII当作索引.
代码:

var firstUniqChar = function(s) {
  const map = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (map[s.charCodeAt(i) - 97] === 1) return i;
  }
  return -1;
};
