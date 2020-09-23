import Queue from './index';

describe('Initialized Queue', () => {
  const q = new Queue();
  it('should have size of zero', () => {
    expect(q.isEmpty()).toBeTruthy();
  });
  it('should have head of null', () => {
    expect(q.remove()).toBeNull();
  });
});
describe('Adding & removing to Queue', () => {
  const q = new Queue();
  it('should add 3 values', () => {
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.isEmpty()).toBeFalsy();
    expect(q.size).toBe(3);
  });
  it('should remove values as expected', () => {
    expect(q.remove()).toBe(1);
    expect(q.size).toBe(2);
    expect(q.remove()).toBe(2);
    expect(q.size).toBe(1);
    expect(q.remove()).toBe(3);
    expect(q.size).toBe(0);
  });
});
