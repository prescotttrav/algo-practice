/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 *
 * Time: O(n lg n)
 * Space: O(lg n)
 *
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @param {number} mid
 * @return {number}
 */
const crossSum = (nums, low, high, mid) => {
  if (low === high) return nums[low];
  let leftSum = -Infinity;
  let currSum = 0;
  for (let i = mid; i >= low; i--) {
    currSum += nums[i];
    leftSum = Math.max(leftSum, currSum);
  }
  let rightSum = -Infinity;
  currSum = 0;
  for (let j = mid + 1; j <= high; j++) {
    currSum += nums[j];
    rightSum = Math.max(rightSum, currSum);
  }
  return leftSum + rightSum;
};
/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
const helper = (nums, low, high) => {
  if (low === high) return nums[low];
  const mid = Math.floor((low + high) / 2);

  const leftSum = helper(nums, low, mid);
  const rightSum = helper(nums, mid + 1, high);
  const cross = crossSum(nums, low, high, mid);

  return Math.max(leftSum, rightSum, cross);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  return helper(nums, 0, nums.length - 1);
};

export default maxSubArray;
