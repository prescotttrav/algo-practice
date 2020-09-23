/**
 * Dynamic programming solution for finding longest palindrome in string.
 *
 * Time: O(n^2)
 * Space: O(n^2)
 *
 * @param {string} s
 * @param {number} i
 * @param {number} j
 * @param {number} k
 * @param {boolean[]} dp
 * @param {number[]} longest
 * @return {number[]}
 */
const computePalindrome = (s, i, j, k, dp, longest) => {
  if (dp[i] && j >= 0 && k < s.length) {
    if (s[j] === s[k]) {
      dp[i + 1] = true;
      if (longest[1] - longest[0] < k + 1 - j) {
        [longest[0], longest[1]] = [j, k + 1];
      }
      return computePalindrome(s, i, j - 1, k + 1, dp, longest);
    }
  }
  return longest;
};
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  const longest = [0, 1];
  for (let i = 0; i < s.length - 1; i++) {
    const dp = new Array(s.length);
    dp[0] = true;
    let adj = computePalindrome(s, 0, i, i + 1, dp, longest);
    let center = computePalindrome(s, 0, i - 1, i + 1, dp, longest);
    if (adj[1] - adj[0] > longest[1] - longest[0]) {
      [longest[0], longest[1]] = [adj[0], adj[1]];
    }
    if (center[1] - center[0] > longest[1] - longest[0]) {
      [longest[0], longest[1]] = [center[0], center[1]];
    }
  }
  return s.substring(longest[0], longest[1]);
};

export default longestPalindrome;
