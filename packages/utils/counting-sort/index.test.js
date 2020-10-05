import countingSort from './index';
import countingSortIndexBased from './counting-sort-index-based';

describe('Default counting sort', () => {
  it('should throw an error on incorrect input', () => {
    expect(() => {
      countingSort([0, 4, 5, 1, 3, 4, 3], 0, 5);
    }).toThrowError();
  });
  it('should return an array', () => {
    expect(countingSort([0, 4, 5, 1, 3, 4, 3], 5)).toBeInstanceOf(Array);
  });
  it('test case 1', () => {
    expect(countingSort([0, 4, 5, 1, 3, 4, 3], 5)).toStrictEqual([0, 1, 3, 3, 4, 4, 5]);
  });
  it('test case 2', () => {
    expect(countingSort([4, 5, 1, 3, 4, 3], 5, 1)).toStrictEqual([1, 3, 3, 4, 4, 5]);
  });
  it('test case 3', () => {
    expect(countingSort([1000, 1004, 1005, 1001, 1003, 1004, 1003], 1005, 1000)).toStrictEqual([
      1000,
      1001,
      1003,
      1003,
      1004,
      1004,
      1005,
    ]);
  });
});
describe('Index based counting sort', () => {
  it('should return an array', () => {
    expect(countingSortIndexBased([0, 4, 5, 1, 3, 4, 3], 1)).toBeInstanceOf(Array);
  });
  it('should only perform counting sort on the given index & be stable on all other indexes', () => {
    expect(countingSortIndexBased([125, 470, 500, 101, 403, 410, 350], 3)).toStrictEqual([
      125,
      101,
      350,
      470,
      403,
      410,
      500,
    ]);
  });
  it('should not error on out of range indexes', () => {
    expect(countingSortIndexBased([0, 4, 5, 1, 3, 4, 3], 3)).toStrictEqual([0, 4, 5, 1, 3, 4, 3]);
  });
  it('test case 1', () => {
    expect(countingSortIndexBased([0, 4, 5, 1, 3, 4, 3], 1)).toStrictEqual([0, 1, 3, 3, 4, 4, 5]);
  });
  it('test case 2', () => {
    expect(countingSortIndexBased([40, 14, 25, 31, 33, 54, 13], 2)).toStrictEqual([14, 13, 25, 31, 33, 40, 54]);
  });
  it('test case 3', () => {
    expect(countingSortIndexBased([640, 314, 525, 131, 333, 254, 813], 3)).toStrictEqual([
      131,
      254,
      314,
      333,
      525,
      640,
      813,
    ]);
  });
});
