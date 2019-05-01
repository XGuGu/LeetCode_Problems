Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.

Example:

Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
Note:

1 is typically treated as an ugly number.
n does not exceed 1690.

//medium
var nthUglyNumber = function(n) {
    let idx = Array(3).fill(0);
    let ugly = Array(n).fill(1);
    _.range(1, n).forEach((i) => {
        ugly[i] = _.min([ugly[idx[0]] * 2, ugly[idx[1]] * 3, ugly[idx[2]] * 5]);
        if (ugly[i] === ugly[idx[0]] * 2) {
            idx[0]++;
        }

        if (ugly[i] === ugly[idx[1]] * 3) {
            idx[1]++;
        }

        if (ugly[i] === ugly[idx[2]] * 5) {
            idx[2]++;
        }
    });
    return _.last(ugly);
};
