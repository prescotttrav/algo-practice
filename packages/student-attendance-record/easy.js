/**
 * Leetcode: 551. Student Attendance Record I
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'A') {
      count++;
      if (count > 1) return false;
    } else if (i > 1 && s[i] === 'L') {
      if (s[i - 2] === 'L' && s[i - 1] === 'L') return false;
    }
  }
  return true;
};

export default checkRecord;
