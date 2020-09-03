/**
 * Returns random number greater than or equal to min & less than max.
 */
export const randomNumber = (min, max) => {
  if (min >= max) {
    throw new Error('Invalid input on reandomNumber');
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

