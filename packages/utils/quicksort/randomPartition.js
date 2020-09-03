import { randomNumber } from '../index';

const randomPartition = (A, low, high) => {
  const i = randomNumber(low, high + 1);
  [A[i], A[high]] = [A[high], A[i]];
  return partition(A, low, high);
};

const partition = (A, low, high) => {
  const x = A[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (A[j] <= x) {
      i++;
      [A[j], A[i]] = [A[i], A[j]];
    }
  }
  i++;
  [A[i], A[high]] = [A[high], A[i]];
  return i;
};

const quicksort = (A, low, high) => {
  if (low < high) {
    const q = randomPartition(A, low, high);
    quicksort(A, low, q - 1);
    quicksort(A, q + 1, high);
  }
};

export default quicksort;
