import { game } from '../index.js';

const rules = 'What is the result of the expression?';
const rounds = 3;

export default () => game(rules, null, rounds, false, false, true);
