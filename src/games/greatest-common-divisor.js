import { getRandomNum, game } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const countsQuests = 3;


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

const getQuests = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    result[i] = [];
    const firstNum = getRandomNum(1, 20);
    const secondNum = getRandomNum(1, 20);
    const question = `${firstNum} ${secondNum}`;
    const anwser = getGreatestCommonDivisor(firstNum, secondNum);
    result[i].push(question, anwser.toString());
  }
  return result;
};

const questionnaire = getQuests(countsQuests);

export default () => game(description, questionnaire);
