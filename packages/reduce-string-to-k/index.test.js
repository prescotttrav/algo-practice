import reduceStr from './index';

test('Test case 1', () => {
  expect(reduceStr('5438', 2)).toBe('11');
});
test('Test case 2', () => {
  expect(reduceStr('1112334567', 3)).toBe('42');
});
