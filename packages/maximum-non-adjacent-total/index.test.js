import maximumSum from './index';

test('Test case 1', () => {
  expect(maximumSum([2, 7, 9, 3, 1])).toBe(12);
});
test('Test case 2', () => {
  expect(maximumSum([2, 1, 1, 2])).toBe(4);
});
test('Test case 3', () => {
  expect(maximumSum([1, 2, 3, 1])).toBe(4);
});
