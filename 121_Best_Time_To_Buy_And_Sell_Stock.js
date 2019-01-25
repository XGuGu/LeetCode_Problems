// Say you have an array for which the ith element is the price of a given stock on day i.
//
// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
// design an algorithm to find the maximum profit.
//
// Note that you cannot sell a stock before you buy one.
//
// Example 1:
//
// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:
//
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

var maxProfit = function(prices) {
  let r = 0;
  let max = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    const v = max - prices[i];
    if (prices[i] > max) max = prices[i];
    if (v > r) r = v;
  }

  return r;
};

从数组尾部开始递减; 保留两个变量: 最大值和差值.
由于是递减的, 所以最大值永远相对于前面的元素而言是有效的.
判断最大差值即可.
