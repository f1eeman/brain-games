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
    const firstNum = getRandomNum();
    const secondNum = getRandomNum();
    const question = `${firstNum} ${secondNum}`;
    const anwser = getGreatestCommonDivisor(firstNum, secondNum);
    result.push([question, anwser]);
  }
  return result;
};

const questionnaire = getQuests(countsQuests);

export default () => game(description, questionnaire);
