import quicksort from './index';
import randomQuicksort from './randomPartition';

const res = [1, 2, 3, 4, 5, 6, 7, 8];
test('Test case 1', () => {
  const arr1 = [2, 8, 7, 1, 3, 6, 5, 4];
  const arr2 = [...arr1];
  quicksort(arr1, 0, arr1.length - 1);
  randomQuicksort(arr2, 0, arr2.length - 1);
  expect(arr1).toEqual(res);
  expect(arr2).toEqual(res);
});
test('Test case 2', () => {
  const arr1 = [8, 7, 6, 5, 4, 3, 2, 1];
  const arr2 = [...arr1];
  quicksort(arr1, 0, arr1.length - 1);
  randomQuicksort(arr2, 0, arr2.length - 1);
  expect(arr1).toEqual(res);
  expect(arr2).toEqual(res);
});
test('Test case 3', () => {
  const arr1 = [2, 8, 7, 1, 3, 6, 5, 4];
  const arr2 = [...arr1];
  quicksort(arr1, 0, arr1.length - 1);
  randomQuicksort(arr2, 0, arr2.length - 1);
  expect(arr1).toEqual(res);
  expect(arr2).toEqual(res);
});
test('Test case 4', () => {
  const arr1 = [1, 1, 1, 1, 1, 1, 1, 1];
  const arr2 = [...arr1];
  quicksort(arr1, 0, arr1.length - 1);
  randomQuicksort(arr2, 0, arr2.length - 1);
  expect(arr1).toEqual([1, 1, 1, 1, 1, 1, 1, 1]);
  expect(arr2).toEqual([1, 1, 1, 1, 1, 1, 1, 1]);
});
