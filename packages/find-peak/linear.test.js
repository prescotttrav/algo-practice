import findPeak from './linear';

test('Test case 1', () => {
  expect(findPeak([1,2,3,4,3,2,1])).toBe(3);
});
test('Test case 2', () => {
  expect(findPeak([1,2,3,4,5,6,7,8])).toBe(7);
});
test('Test case 3', () => {
  expect(findPeak([8,7,6,5,4,3,2,1])).toBe(7);
});
test('Test case 4', () => {
  expect(findPeak([1,1,1,1,1,1,1])).toBe(-1);
});
