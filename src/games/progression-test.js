import { game } from '../index.js';

const rules = 'What number is missing in the progression?';
const getArithmeticProg = (begin, difference, lengthProg) => {
  const arr = [];
  let value = begin;
  for (let i = 0; i < lengthProg; i += 1) {
    arr.push(value);
    value += difference;
  }
  return arr;
};

export default () => game(rules, getArithmeticProg);
