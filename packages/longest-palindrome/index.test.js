import bruteForce from './brute-force';
import dynamicProgramming from './dynamic-programming';
import expandAroundCenter from './expand-around-center';

describe('Test case 1', () => {
  const s = 'babad';
  const res = 'bab';
  it('brute force should return correctly', () => {
    expect(bruteForce(s)).toBe(res);
  });
  it('dynamic programming should return correctly', () => {
    expect(dynamicProgramming(s)).toBe(res);
  });
  it('expand around center should return correctly', () => {
    expect(expandAroundCenter(s)).toBe(res);
  });
});
describe('Test case 2', () => {
  const s = 'abacdfgdcaba';
  const res = 'aba';
  it('brute force should return correctly', () => {
    expect(bruteForce(s)).toBe(res);
  });
  it('dynamic programming should return correctly', () => {
    expect(dynamicProgramming(s)).toBe(res);
  });
  it('expand around center should return correctly', () => {
    expect(expandAroundCenter(s)).toBe(res);
  });
});
describe('Test case 3', () => {
  const s = 'abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc';
  const res = 'a';
  it('brute force should return correctly', () => {
    expect(bruteForce(s)).toBe(res);
  });
  it('dynamic programming should return correctly', () => {
    expect(dynamicProgramming(s)).toBe(res);
  });
  it('expand around center should return correctly', () => {
    expect(expandAroundCenter(s)).toBe(res);
  });
});
