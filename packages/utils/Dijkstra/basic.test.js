import determinePath from './basic';

test('Test case 1', () => {
  const input = [
    ['A', 'B', 6],
    ['A', 'D', 1],
    ['D', 'B', 2],
    ['D', 'E', 1],
    ['E', 'B', 2],
    ['B', 'C', 5],
    ['E', 'C', 5],
  ];
  const N = 5;
  const start = 'A';
  const res = new Map();
  for (const [node, val] of [
    ['A', 0],
    ['B', 3],
    ['D', 1],
    ['E', 2],
    ['C', 7],
  ])
    res.set(node, val);
  expect(determinePath(input, N, start)).toStrictEqual(res);
});
test('Test case 2', () => {
  const input = [
    ['A', 'B', 4],
    ['A', 'C', 3],
    ['B', 'E', 2],
    ['D', 'E', 1],
    ['E', 'F', 2],
    ['D', 'C', 3],
    ['D', 'F', 1],
    ['F', 'C', 4],
  ];
  const N = 6;
  const start = 'B';
  const res = new Map();
  for (const [node, val] of [
    ['A', 4],
    ['B', 0],
    ['C', 6],
    ['D', 3],
    ['E', 2],
    ['F', 4],
  ])
    res.set(node, val);
  expect(determinePath(input, N, start)).toStrictEqual(res);
});
