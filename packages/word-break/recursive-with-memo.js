/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Time: O(n^2)
 * Space: O(n)
 */

const wordBreakHelper= (s, set, start, memo) => {
  if (start === s.length)
    return true;
  if (memo[start] !== undefined)
    return memo[start];
  for (let end = start + 1; end <= s.length; end++) {
    if (set.has(s.substring(start, end)) && wordBreakHelper(s, set, end, memo))
      return memo[start] = true;
  }
  return memo[start] = false;
};

const wordBreak = (s, wordDict) => {
  return wordBreakHelper(s, new Set(wordDict), 0, new Array(s.length));
};

export default wordBreak;
