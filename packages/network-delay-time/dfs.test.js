import dfs from './dfs';

describe('Test case 1', () => {
  const times = [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ];
  const nodes = 4;
  const start = 2;
  const res = 2;
  it('should resolve with DFS', () => {
    expect(dfs(times, nodes, start)).toBe(res);
  });
});
describe('Test case 2', () => {
  const times = [
    [1, 2, 1],
    [2, 3, 2],
    [1, 3, 4],
  ];
  const nodes = 3;
  const start = 1;
  const res = 3;
  it('should resolve with DFS', () => {
    expect(dfs(times, nodes, start)).toBe(res);
  });
});
