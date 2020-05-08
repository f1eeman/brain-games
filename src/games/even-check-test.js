import { game } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
const rounds = 3;
const isEven = (num) => num % 2 === 0;

export default () => game(rules, isEven, rounds);
