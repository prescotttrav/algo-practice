/**
 *
 * Uniqe emails: https://leetcode.com/problems/unique-email-addresses/
 *
 * Time: O(x) where x is the total char count of array input
 * Space: O(n)
 */
const numUniqueEmails = (emails) => {
  const set = new Set();
  for (const email of emails) {
    let result = '';
    let ignore = false;
    for (let i = 0; i < email.length; i++) {
      if (email[i] === '@') {
        result += email.slice(i);
        set.add(result);
        break;
      } else if (email[i] === '+') {
        ignore = true;
      } else if (!ignore && email[i] !== '.') {
        result += email[i];
      }
    }
  }
  return set.size;
};

export default numUniqueEmails;
