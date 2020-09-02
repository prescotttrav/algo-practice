import quicksort from './index';

test('Test case 1', () => {
  const arr = [2, 8, 7, 1, 3, 6, 5, 4];
  const res = [1, 2, 3, 4, 5, 6, 7, 8];
  quicksort(arr, 0, arr.length - 1);
  expect(arr).toEqual(res);
});
test('Test case 2', () => {
  const arr = [8, 7, 6, 5, 4, 3, 2, 1];
  const res = [1, 2, 3, 4, 5, 6, 7, 8];
  quicksort(arr, 0, arr.length - 1);
  expect(arr).toEqual(res);
});
test('Test case 3', () => {
  const arr = [2, 8, 7, 1, 3, 6, 5, 4];
  const res = [1, 2, 3, 4, 5, 6, 7, 8];
  quicksort(arr, 0, arr.length - 1);
  expect(arr).toEqual(res);
});
test('Test case 4', () => {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  const res = [1, 1, 1, 1, 1, 1, 1, 1];
  quicksort(arr, 0, arr.length - 1);
  expect(arr).toEqual(res);
});
