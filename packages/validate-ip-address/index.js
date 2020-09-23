/**
 * Given a string IP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.
 *
 * Time: O(n)
 * Space: O(1)
 *
 * @param {string} IP
 * @return {boolean}
 */
const isValidV4 = (IP) => {
  const numeric = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
  const subset = IP.split('.');
  for (const series of subset) {
    if (series.length < 1 || series.length > 3) return false;
    if (Number(series) < 0 || Number(series) > 255) return false;
    if (series[0] === '0' && series.length > 1) return false;
    for (let i = 0; i < series.length; i++) {
      if (!numeric.has(series[i])) return false;
    }
  }
  return true;
};
/**
 * @param {string} IP
 * @return {boolean}
 */
const isValidV6 = (IP) => {
  const hexdigits = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']);
  const subset = IP.split(':');
  for (const series of subset) {
    if (series.length < 1 || series.length > 4) return false;
    for (let i = 0; i < series.length; i++) {
      if (!hexdigits.has(series[i].toLowerCase())) return false;
    }
  }
  return true;
};
/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function (IP) {
  let v4Count = 0;
  let v6Count = 0;
  for (let i = 0; i < IP.length; i++) {
    if (IP[i] === '.') v4Count++;
    else if (IP[i] === ':') v6Count++;
  }
  if (v4Count === 3 && isValidV4(IP)) return 'IPv4';
  else if (v6Count === 7 && isValidV6(IP)) return 'IPv6';
  else return 'Neither';
};

export default validIPAddress;
