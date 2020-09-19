/**
 * Brute force for finding longest palindrome in string.
 *
 * Time: O(n^3)
 * Space: O(1)
 *
 * @param {string} s
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
const isPalindrome = (s, i, j) => {
    const mid = Math.floor((j + i) / 2);
    let l = mid - 1;
    let r = mid + 1;
    if ((j - i) % 2 === 0) {
        r = mid;
    }
    while (l >= i && r < j) {
        if (s[l] !== s[r])
            return false;
        l--;
        r++;
    }
    return true;
};
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    const longest = [0, 1];
    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            if (isPalindrome(s, i, j)) {
                if (j - i > longest[1] - longest[0]) {
                    longest[0] = i;
                    longest[1] = j;
                }
            }
        }
    }
    return s.substring(longest[0], longest[1]);
};

export default longestPalindrome;
