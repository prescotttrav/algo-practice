import PriorityQueue from './PriorityQueue';

describe('Testing class methods', () => {
  const pQ = new PriorityQueue();
  it('should be initalized empty', () => {
    expect(pQ.print()).toStrictEqual([]);
    expect(pQ.size).toBe(0);
  });
  it('should throw an error on getMin() with empty queue', () => {
    expect(() => {
      pQ.getMin();
    }).toThrowError();
  });
  it('should throw an error on removeMin() with empty queue', () => {
    expect(() => {
      pQ.removeMin();
    }).toThrowError();
  });
  it('should insert key', () => {
    pQ.insert(1);
    expect(pQ.print()).toStrictEqual([1]);
    expect(pQ.size).toBe(1);
  });
  it('should maintain queue order on greater than insert', () => {
    pQ.insert(2);
    expect(pQ.print()).toStrictEqual([1, 2]);
    expect(pQ.size).toBe(2);
  });
  it('should maintain min queue order on less than insert', () => {
    pQ.insert(0);
    expect(pQ.print()).toStrictEqual([0, 2, 1]);
    expect(pQ.size).toBe(3);
  });
  it('should return min queue item on removeMin()', () => {
    expect(pQ.removeMin()).toBe(0);
    expect(pQ.size).toBe(2);
  });
  it('should return min queue item on getMin()', () => {
    expect(pQ.getMin()).toBe(1);
  });
  it('should update & restore order on decreaseKey()', () => {
    pQ.decreaseKey(1, 0);
    expect(pQ.getMin()).toBe(0);
    expect(pQ.print()).toStrictEqual([0, 1]);
  });
  it('should throw error on decreaseKey() with invalid value', () => {
    expect(() => {
      pQ.decreaseKey(1, 2);
    }).toThrowError();
  });
});
test('Use case', () => {
  const pQ = new PriorityQueue();
  let min = Infinity;
  const input = [
    12,
    5,
    23,
    54,
    9,
    50,
    3,
    90,
    4,
    8,
    45,
    6,
    89,
    97,
    43,
    69,
    14,
    13,
    10,
    46,
    95,
    94,
    30,
    43,
    60,
    98,
    29,
    37,
    56,
    79,
    72,
    17,
    24,
    19,
    76,
    83,
    79,
    42,
    53,
    85,
  ];
  const tenMin = [3, 4, 5, 6, 8, 9, 10, 12, 13, 14];
  for (let i = 0; i < input.length; i++) {
    min = Math.min(min, input[i]);
    pQ.insert(input[i]);
    expect(pQ.getMin()).toBe(min);
    expect(pQ.size).toBe(i + 1);
  }
  for (let i = 0; i < 10; i++) {
    expect(pQ.removeMin()).toBe(tenMin[i]);
  }
  const newMin = pQ.getMin();
  pQ.decreaseKey(1, 0);
  expect(newMin).not.toBe(pQ.getMin());
  expect(pQ.removeMin()).toBe(0);
  expect(pQ.getMin()).toBe(newMin);
});
