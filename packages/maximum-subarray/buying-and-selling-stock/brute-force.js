/**
 * You are allowed to buy one unit of stock only one time and then sell it at a later date.
 * Your goal is to maximize your profit.
 *
 * Returns a start & end of subarray along with the subarray's summation.
 *
 * Time: O(n^2)
 * Space: O(1)
 */

const findMaxProfit = (A) => {
  let maxVal = -Infinity;
  let start = 0;
  let end = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const val = A[j] - A[i];
      if (val > maxVal) {
        maxVal = val;
        start = i;
        end = j;
      }
    }
  }
  return [start, end, maxVal];
};

export default findMaxProfit;
