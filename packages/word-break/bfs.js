/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Time: O(n^2)
 * Space: O(n)
 */
import Queue from '../utils/Queue';

const wordBreak = (s, wordDict) => {
  const set = new Set(wordDict);
  const visited = new Array(s.length).fill(false);
  const q = new Queue();
  q.add(0);
  
  while (!q.isEmpty()) {
    const start = q.remove();
    if (!visited[start]) {
      for (let end = start + 1; end <= s.length; end++) {
        if (set.has(s.substring(start, end))) {
          if (end === s.length) return true;
          q.add(end);
        }
      }
      visited[start] = true;
    }
  }
  return false;
};

export default wordBreak;
