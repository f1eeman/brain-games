import { game } from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const rounds = 3;
const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const smallerNum = firstNum > secondNum ? secondNum : firstNum;
  if ((firstNum % smallerNum === 0) && (secondNum % smallerNum === 0)) {
    return smallerNum;
  }
  let gcd = Math.floor(smallerNum / 2);
  while (firstNum % gcd !== 0 || secondNum % gcd !== 0) {
    gcd -= 1;
  }
  return gcd;
};

export default () => game(rules, getGreatestCommonDivisor, rounds, true);
