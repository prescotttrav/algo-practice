import MinHeap from './min';

describe('Min heap operations', () => {
  const H = new MinHeap();
  it('should initalize empty', () => {
    expect(H.size).toBe(0);
    expect(H.items).toStrictEqual([]);
  });
  it('should retain the min root on insert', () => {
    let min = Infinity;
    for (const val of [35, 33, 42, 10, 14, 19, 27, 44, 26, 31]) {
      min = Math.min(val, min);
      H.insert(val);
      expect(H.getMin()).toEqual(min);
    }
  });
  it('should set the min root on remove', () => {
    const res = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44];
    for (const val of res) {
      const min = H.remove();
      expect(min).toBe(val);
    }
  });
});
