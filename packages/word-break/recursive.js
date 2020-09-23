/**
 * Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Time: O(n^n)
 * Space: O(n)
 */

const wordBreakHelper = (s, set, start) => {
  if (start === s.length) return true;
  for (let end = start + 1; end <= s.length; end++) {
    if (set.has(s.substring(start, end)) && wordBreakHelper(s, set, end)) return true;
  }
  return false;
};

const wordBreak = (s, wordDict) => {
  return wordBreakHelper(s, new Set(wordDict), 0);
};

export default wordBreak;
