/**
 * You are allowed to buy one unit of stock only one time and then sell it at a later date.
 * Your goal is to maximize your profit.
 *
 * Returns a start & end of subarray along with the subarray's summation.
 *
 * Time: O(n)
 * Space: O(1)
 */
const findMaxProfit = (A) => {
  let low, high;
  let val = -Infinity;
  let sum = 0;
  let i = 0;

  for (let j = 1; j < A.length; j++) {
    sum += A[j] - A[j - 1];
    if (sum > val) {
      val = sum;
      low = i;
      high = j;
    } else if (j + 1 < A.length) {
      const sum2 = sum + A[j + 1] - A[j];
      if (sum2 > val) {
        val = sum;
        low = i;
        high = j;
      } else {
        sum = 0;
        i = j;
      }
    }
  }
  return [low, high, val];
};

export default findMaxProfit;
