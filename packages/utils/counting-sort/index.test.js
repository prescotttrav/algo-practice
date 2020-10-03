import countingSort from './index';

test('Test case 1', () => {
  expect(() => {
    countingSort([0, 4, 5, 1, 3, 4, 3], 0, 5);
  }).toThrowError();
});
test('Test case 2', () => {
  expect(countingSort([0, 4, 5, 1, 3, 4, 3], 5)).toBeInstanceOf(Array);
});
test('Test case 3', () => {
  expect(countingSort([0, 4, 5, 1, 3, 4, 3], 5)).toStrictEqual([0, 1, 3, 3, 4, 4, 5]);
});
test('Test case 4', () => {
  expect(countingSort([4, 5, 1, 3, 4, 3], 5, 1)).toStrictEqual([1, 3, 3, 4, 4, 5]);
});
test('Test case 5', () => {
  expect(countingSort([1000, 1004, 1005, 1001, 1003, 1004, 1003], 1005, 1000)).toStrictEqual([
    1000,
    1001,
    1003,
    1003,
    1004,
    1004,
    1005,
  ]);
});
