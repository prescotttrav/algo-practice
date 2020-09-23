/**
 * If a peak exists, return the peak's index else -1.
 *
 * Time: O(n)
 * Space: O(1)
 */
const findPeak = (A) => {
  for (let i = 0; i < A.length; i++) {
    if (i === 0 && A[i] >= A[i + 1]) {
      return i;
    } else if (i === A.length - 1 && A[i] >= A[i - 1]) {
      return i;
    } else if (A[i - 1] <= A[i] && A[i + 1] <= A[i]) {
      return i;
    }
  }
  return -1;
};

export default findPeak;
