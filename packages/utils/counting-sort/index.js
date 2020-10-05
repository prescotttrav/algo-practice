/**
 * @param {number[]} A
 * @param {number} k
 * @param {number} j
 * @return {number[]}
 */
const countingSort = (A, k, j = 0) => {
  if (j > k) throw new Error('Input range out of scope');
  const L = A.length;
  const B = new Array(L);
  const C = new Array(k - j + 1).fill(0);
  for (let i = 0; i < L; i++) {
    C[A[i] - j] = C[A[i] - j] + 1;
  }
  for (let m = j + 1; m <= k; m++) {
    C[m - j] = C[m - j] + C[m - j - 1];
  }
  for (let n = L - 1; n >= 0; n--) {
    B[C[A[n] - j] - 1] = A[n];
    C[A[n] - j] = C[A[n] - j] - 1;
  }
  return B;
};

export default countingSort;
