import countingSort from '../counting-sort/counting-sort-index-based';

/**
 * @param {number[]} A
 * @return {number[]}
 */
const radixSort = (A) => {
  let B = A;
  let max = -Infinity;
  for (let i = 0; i < A.length; i++) {
    max = Math.max(max, A[i].toString().length);
  }
  for (let j = 1; j <= max; j++) {
    B = countingSort(B, j);
  }
  return B;
};

export default radixSort;
