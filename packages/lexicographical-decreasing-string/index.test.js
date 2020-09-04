import lexicoDecreasing from './index';

test('Test case 1', () => {
  expect(lexicoDecreasing('aaabbc')).toBeTruthy();
});
test('Test case 2', () => {
  expect(lexicoDecreasing('aaabbbbcc')).toBeFalsy();
});
test('Test case 3', () => {
  expect(lexicoDecreasing('aaabbbccc')).toBeTruthy();
});

