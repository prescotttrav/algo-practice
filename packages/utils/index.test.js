import { randomNumber } from './index';

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
    expect(() => { randomNumber(5, 1); }).toThrow(Error);
    expect(() => { randomNumber(1, 1); }).toThrow(Error);
  });
});

