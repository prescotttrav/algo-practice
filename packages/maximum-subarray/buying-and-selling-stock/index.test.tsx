import bruteForce from './brute-force';
import divideConquer from './divide-and-conquer';
import linear from './linear-time';

describe('Find maximum subarray, Test case 1', () => {
  const arr = [10, 11, 7, 10, 6];
  const res = [2, 3, 3];
  it('Brute force', () => {
    expect(bruteForce(arr)).toStrictEqual(res);
  });
  it('Divide & conquer', () => {
    expect(divideConquer(arr)).toStrictEqual(res);
  });
  it('Linear time', () => {
    expect(linear(arr)).toStrictEqual(res);
  });
});

describe('Find maximum subarray, Test case 2', () => {
  const arr = [100, 113, 110, 85, 105, 102, 86, 63, 81, 101, 94, 106, 101, 79, 94, 90, 97];
  const res = [7, 11, 43];
  it('Brute force', () => {
    expect(bruteForce(arr)).toStrictEqual(res);
  });
  it('Divide & conquer', () => {
    expect(divideConquer(arr)).toStrictEqual(res);
  });
  it('Linear time', () => {
    expect(linear(arr)).toStrictEqual(res);
  });
});

