/**
 *
 * Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.
 *
 * Time: O(n)
 * Space: O(n)
 */

const firstUniqChar = (s) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const val = map.get(s[i]) || 0;
    map.set(s[i], val + 1);
  }
  for (let j = 0; j < s.length; j++) {
    if (map.get(s[j]) === 1) return j;
  }
  return -1;
};

export default firstUniqChar;
