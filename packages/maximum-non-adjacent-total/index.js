/**
 * Given an array, find the maximum sum of non-adjacent values.
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxNonAdjacentSum = (nums) => {
  let prev = 0;
  let cur = 0;
  for (const num of nums) {
    const temp = cur;
    cur = Math.max(prev + num, cur);
    prev = temp;
  }
  return cur;
};

export default maxNonAdjacentSum;
