import firstUniqChar from './index';

test('Test case 1', () => {
  expect(firstUniqChar('abcdbcd')).toBe(0);
});
test('Test case 2', () => {
  expect(firstUniqChar('abcdabcdz')).toBe(8);
});
test('Test case 3', () => {
  expect(firstUniqChar('abcdzabcdz')).toBe(-1);
});
