/**
 * @param {number[]} A
 * @param {number} i
 * @return {number[]}
 */
const countingSort = (A, i) => {
  const B = new Array(A.length);
  const C = new Array(10).fill(0);
  for (let j = 0; j < A.length; j++) {
    const num = A[j].toString();
    const index = num.length - i < 0 ? 0 : num[num.length - i];
    C[index] = C[index] + 1;
  }
  for (let k = 1; k < 10; k++) {
    C[k] = C[k] + C[k - 1];
  }
  for (let n = A.length - 1; n >= 0; n--) {
    const num = A[n].toString();
    const index = num.length - i < 0 ? 0 : num[num.length - i];
    B[C[index] - 1] = A[n];
    C[index] = C[index] - 1;
  }
  return B;
};

export default countingSort;
