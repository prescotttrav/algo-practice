import linear from './linear';
import log from './log';

test('Test case 1', () => {
  const input = [1,2,3,4,3,2,1];
  const res = 3;
  expect(linear(input)).toBe(res);
  expect(log(input)).toBe(res);
});
test('Test case 2', () => {
  const input = [1,2,3,4,5,6,7,8];
  const res = 7;
  expect(linear(input)).toBe(res);
  expect(log(input)).toBe(res);
});
test('Test case 3', () => {
  const input = [8,7,6,5,4,3,2,1];
  const res = 0;
  expect(linear(input)).toBe(res);
  expect(log(input)).toBe(res);
});
test('Test case 4', () => {
  const input = [1,1,1,1,1,1,1];
  expect(linear(input)).toBe(0);
  expect(log(input)).toBe(3);
});
