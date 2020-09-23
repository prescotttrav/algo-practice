/*
 * If a peak exists, return the peak's index else -1.
 *
 * Time: O(log n)
 * Space: O(1)
 */
const findPeak = (A) => {
  let low = 0;
  let high = A.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (mid > 0 && A[mid] < A[mid - 1]) {
      high = mid - 1;
    } else if (mid < A.length - 1 && A[mid] < A[mid + 1]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

export default findPeak;
