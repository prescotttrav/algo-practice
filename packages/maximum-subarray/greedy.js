/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let currMax = -Infinity;
  let maxSum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    currMax = Math.max(currMax + nums[i], nums[i]);
    if (currMax > maxSum) maxSum = currMax;
  }
  return maxSum;
};

export default maxSubArray;
