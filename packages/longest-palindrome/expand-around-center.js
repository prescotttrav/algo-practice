/**
 * Expand around center solution for finding longest palindrome in string.
 *
 * Time: O(n^2)
 * Space: O(n)
 *
 * @param {string} s
 * @param {number} i
 * @param {number} j
 * @param {number[]} longest
 * @return {number[]}
 */
const computePalindrome = (s, i, j, longest) => {
  if (i >= 0 && j < s.length) {
    if (s[i] === s[j]) {
      if (j + 1 - i > longest[1] - longest[0]) {
        [longest[0], longest[1]] = [i, j + 1];
      }
      return computePalindrome(s, i - 1, j + 1, longest);
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
    const adj = computePalindrome(s, i, i + 1, longest);
    const center = computePalindrome(s, i - 1, i + 1, longest);
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
