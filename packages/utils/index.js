/**
 * Returns random number greater than or equal to min & less than max.
 *
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
export const randomNumber = (min, max) => {
  if (min >= max) {
    throw new Error('Invalid input on reandomNumber');
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Swaps two indexes of an array in-place.
 *
 * @param {(Object|string|number)[]} A
 * @param {number} i
 * @param {number} j
 * @return {(Object|string|number)[]}
 */
export const swap = (A, i, j) => {
  if (i < 0 || j < 0) {
    throw new Error('Invalid input on swap, negative indexing');
  }
  if (A.length <= i || A.length <= j) {
    throw new Error('Invalid input on swap, indexes out of scope');
  }
  [A[i], A[j]] = [A[j], A[i]];
};
