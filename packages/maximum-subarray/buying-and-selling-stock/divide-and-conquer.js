/**
 * You are allowed to buy one unit of stock only one time and then sell it at a later date.
 * Your goal is to maximize your profit.
 *
 * Returns a start & end of subarray along with the subarray's summation.
 *
 * Time: O(n lg n)
 * Space: O(n) 
 */
const findCrossSubarray = (A, low, mid, high) => {
  let leftMax = mid;
  let leftSum = -Infinity;
  let sum = 0;
  for (let i = mid; i >= low; i--) {
   sum += A[i];
   if (sum > leftSum) {
     leftSum = sum;
     leftMax = i;
   }
  }
  let rightMax = mid + 1;
  let rightSum = -Infinity;
  sum = 0;
  for (let j = mid + 1; j <= high; j++) {
    sum += A[j];
    if (sum > rightSum) {
      rightSum = sum;
      rightMax = j;
    }
  }
  return [leftMax, rightMax, leftSum + rightSum];
}

const findMaxSubarray = (A, low, high) => {
  if (low === high) {
    return [low, high, A[low]];
  }
  const mid = Math.floor((low + high) / 2);
  const [leftLow, leftHigh, leftSum] = findMaxSubarray(A, low, mid);
  const [rightLow, rightHigh, rightSum] = findMaxSubarray(A, mid + 1, high);
  const [crossLow, crossHigh, crossSum] = findCrossSubarray(A, low, mid, high);
  
  if (leftSum === Math.max(leftSum, rightSum, crossSum)) {
    return [leftLow, leftHigh, leftSum];
  } else if (rightSum === Math.max(leftSum, rightSum, crossSum)) {
    return [rightLow, rightHigh, rightSum];
  } else {
    return [crossLow, crossHigh, crossSum];
  }
}

const findMaxProfit = (A) => {
  const L = A.length;
  if (L < 2) return null;

  const diff = [];
  for (let i = 1; i < L; i++) {
    diff.push(A[i] - A[i - 1]);
  }
  const [low, high, sum] = findMaxSubarray(diff, 0, L - 1);
  return [low, high + 1, sum];
}

export default findMaxProfit;

