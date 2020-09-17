/**
 * Reduce string to k, or less, elements
 *
 * Example: str = '1112334567' k = 3 => '111', '233', '456', '7' => '38157'
 *                '381' '57' => '1212'
 *                '42'
 *
 * Time: O(n)
 * Space: O(1)
 */
const reduceStr = (S, k) => {
  if (S.length <= k) return S;
  let low = 0;
  let high = k;
  let res = '';
  while (low < S.length) {
    let val = 0;
    for (let i = low; i < high; i++) {
      if (i >= S.length) break;
      val += Number(S[i]);
    }
    low = high;
    high += k;
    res += val;
  }
  return reduceStr(res, k);
};

export default reduceStr;

