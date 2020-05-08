import { game } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (num) => {
  if (typeof (num) !== 'number') {
    return NaN;
  }
  const stopValue = num / 2;
  for (let i = 2; i <= stopValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => game(rules, isPrime);
