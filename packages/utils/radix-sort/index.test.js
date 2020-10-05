import radixSort from './index';

test('Returns array', () => {
  expect(radixSort([329, 457, 657, 839, 436, 720, 355])).toBeInstanceOf(Array);
});
test('Test case 1', () => {
  expect(radixSort([329, 457, 657, 839, 436, 720, 355])).toStrictEqual([329, 355, 436, 457, 657, 720, 839]);
});
test('Test case 2', () => {
  expect(radixSort([3, 45, 57, 8, 436, 72, 355])).toStrictEqual([3, 8, 45, 57, 72, 355, 436]);
});
test('Test case 3', () => {
  expect(radixSort([0, 100, 10000, 100000, 1000000, 1000, 10])).toStrictEqual([
    0,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
  ]);
});
