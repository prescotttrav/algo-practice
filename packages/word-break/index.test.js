import recursive from './recursive';
import recursiveWithMemo from './recursive-with-memo';
import bfs from './bfs';
import dynamicProgramming from './dynamic-programming';

describe('Test case 1', () => {
  const s = 'catsanddog';
  const wordDict = ['cats', 'cat', 'and', 'dog'];
  it('Recursive', () => {
    expect(recursive(s, wordDict)).toBeTruthy();
  });
  it('Recursivei with memo', () => {
    expect(recursiveWithMemo(s, wordDict)).toBeTruthy();
  });
  it('Breadth first search', () => {
    expect(bfs(s, wordDict)).toBeTruthy();
  });
  it('Dynamic programming', () => {
    expect(dynamicProgramming(s, wordDict)).toBeTruthy();
  });
});
describe('Test case 2', () => {
  const s = 'catsanddog';
  const wordDict = ['cats', 'sand', 'dog'];
  it('Recursive', () => {
    expect(recursive(s, wordDict)).toBeFalsy();
  });
  it('Recursivei with memo', () => {
    expect(recursiveWithMemo(s, wordDict)).toBeFalsy();
  });
  it('Breadth first search', () => {
    expect(bfs(s, wordDict)).toBeFalsy();
  });
  it('Dynamic programming', () => {
    expect(dynamicProgramming(s, wordDict)).toBeFalsy();
  });
});
