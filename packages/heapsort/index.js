/*
 * Implementing heapsort algorithm.
 *
 * Time: O(n lg n)
 * Space O(1)
 */
import { swap } from '../utils';

const heapify = (A, i, size) => {
  let largest = i;
  const l = 2 * i + 1;
  const r = l + 1;
  if (l < size && A[i] < A[l]) {
    largest = l;
  }
  if (r < size && A[largest] < A[r]) {
    largest = r;
  }
  if (largest !== i) {
    swap(A, i, largest);
    heapify(A, largest, size);
  }
};

const buildMaxHeap = (A) => {
  for (let i = Math.floor((A.length - 1) / 2); i >= 0; i--) {
    heapify(A, i, A.length - 1);
  }
};

const heapsort = (A) => {
  buildMaxHeap(A);
  for (let i = A.length - 1; i > 0; i--) {
    swap(A, i, 0);
    heapify(A, 0, i);
  }
  return A;
};

export default heapsort;
