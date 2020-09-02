const partition = (A, low, high) => {
  const x = A[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (A[j] <= x) {
      i++;
      [A[i], A[j]] = [A[j], A[i]];
    }
  }
  i++;
  [A[i], A[high]] = [A[high], A[i]];
  return i;
}
const quicksort = (A, low, high) => {
  if (low < high) {
    const p = partition(A, low, high);
    quicksort(A, low, p - 1);
    quicksort(A, p + 1, high);
  }
  return A;
};

export default quicksort;

