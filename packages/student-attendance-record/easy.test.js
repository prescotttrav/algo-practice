import studentRecord from './easy';

test('Test case 1', () => {
  expect(studentRecord("PPALLP")).toBeTruthy();
});
test('Test case 2', () => {
  expect(studentRecord("PPALLPPCCLLL")).toBeFalsy();
});
