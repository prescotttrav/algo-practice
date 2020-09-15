import heapsort from './index';

test('Test case 1', () => {
  const A = [4, 2, 1, 7, 8, 6, 3, 5];
  heapsort(A);
  expect(A).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
});
test('Test case 2', () => {
  const A = [54, 26, 93, 17, 77, 31, 44, 55, 20];
  heapsort(A);
  expect(A).toStrictEqual([17, 20, 26, 31, 44, 54, 55, 77, 93]);
});

