// Write a program to check whether a given number is an ugly number.
//
// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
//
// Example 1:
//
// Input: 6
// Output: true
// Explanation: 6 = 2 × 3
// Example 2:
//
// Input: 8
// Output: true
// Explanation: 8 = 2 × 2 × 2
// Example 3:
//
// Input: 14
// Output: false
// Explanation: 14 is not ugly since it includes another prime factor 7.

var isUgly = function(num) {
  const v = [5, 3, 2];
  for (let i = 0; i < v.length && num > 1; i++) {
    while (num % v[i] === 0) num /= v[i];
  }
  return num === 1;
};
