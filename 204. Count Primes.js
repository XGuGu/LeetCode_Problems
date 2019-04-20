Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.


解题思路:

借助数组, 如果非质数, 数组元素置为true; 然后判断false的个数.
优化措施: 只判断奇数.
代码:

var countPrimes = function(n) {
  const arr = new Array(n);
  arr.fill(false);
  let count = 0;
  if (n > 2) count = 1;
  for (let i = 3; i < n; i += 2) {
    if (arr[i] === false) {
      count++;
      for (let j = 3; i * j < n; j += 2) {
        arr[i * j] = true;
      }
    }
  }

  return count;
};
