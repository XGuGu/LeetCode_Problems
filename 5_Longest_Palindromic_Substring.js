// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
//
// Example 1:
//
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:
//
// Input: "cbbd"
// Output: "bb"

var longestPalindrome = function(s) {
  if (s.length === 0) return '';
  if (s.length === 1) return s;
  if (s.length === 2) {
    if (s[0] === s[1]) return s;
    else return s[0];
  }

  const arr = s.split('');
  // 存储回文数组
  let r = [];
  // 存储最大长度
  let max = 0;
  const judgeArr = (i, j, arr, isMid=false) => {
    let k = 0;
    while (i - k >= 0 && j + k < arr.length && arr[i - k] === arr[j + k]) k++;
    if (isMid) {
      if (2 * k + 1 > max) {
        max = 2 * k + 1;
        r = arr.slice(i - k + 1, j + k);
      }
    } else {
      if (2 * k > max) {
        max = 2 * k;
        r = arr.slice(i - k + 1, j + k)
      }
    }

  }
  const getLongest = (mid, arr) => {
    judgeArr(mid - 1, mid, arr);
    judgeArr(mid, mid + 1, arr);
    judgeArr(mid - 1, mid + 1, arr, true);
  }

  for (let i = 1; i < arr.length - 1; i++) {
    getLongest(i, arr);
  }

  return r.join('');
};

对数组的回文判断, 假设i - 1, i, i + 1三个字符, 可能出现三种情况: i - 1 === i, i === i + 1, i - 1 === i + 1(i为索引)
需要循环数组, 判断以上三种情况, 得到最长的回文字符.
这类判断需要三个字符以上, 所以对长度0,1,2进行额外处理.
