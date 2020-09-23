import divideAndConquer from './divide-and-conquer';

describe('Test case 1', () => {
  const input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  const res = 6;
  it('divide and conquer', () => {
    expect(divideAndConquer(input)).toBe(res);
  });
});
describe('Test case 2', () => {
  const input = [-1, 10, -8, 2, 3, -16, 6, 2, -5, -12, 9, 12, -22];
  const res = 21;
  it('divide and conquer', () => {
    expect(divideAndConquer(input)).toBe(res);
  });
});
