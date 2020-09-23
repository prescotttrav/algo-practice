import { randomNumber, swap } from './index';

describe('Random number generator', () => {
  it('should return a number', () => {
    expect(typeof randomNumber(6, 8)).toBe('number');
  });
  it('should return a value within range', () => {
    const value = randomNumber(1, 5);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThan(5);
  });
  it('should throw error on invalid input', () => {
    expect(() => {
      randomNumber(5, 1);
    }).toThrow(Error);
    expect(() => {
      randomNumber(1, 1);
    }).toThrow(Error);
  });
});
describe('Swap array elements in place', () => {
  it('should swap array elements', () => {
    const A = [1, 2, 3, 4];
    swap(A, 0, 2);
    expect(A).toStrictEqual([3, 2, 1, 4]);
  });
  it('should throw error on invalid input', () => {
    expect(() => {
      swap([1], 0, 1);
    }).toThrow(Error);
    expect(() => {
      swap([1, 2, 3], 1, -1);
    }).toThrow(Error);
  });
});
