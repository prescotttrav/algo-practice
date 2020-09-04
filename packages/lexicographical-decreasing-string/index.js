/**
 *
 * Check whether a string is lexicographically decreasing.
 *
 * Time: O(n)
 * Space: O(1)
 */

const lexicoDecreasing = (s) => {
  const A = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const j = s[i].toLowerCase().charCodeAt(0) - 97;
    A[j] = A[j] + 1;
  }
  let min = Infinity;
  for (let k = 0; k < A.length; k++) {
    if (A[k] > min) {
      return false;
    }
    min = A[k];
  }
  return true;
};

export default lexicoDecreasing;

