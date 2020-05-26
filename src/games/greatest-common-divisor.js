import { roundsCount, runGame } from '../index.js';
import getRandomNum from '../general-functions.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGreatestCommonDivisor(b, a % b);
};

const getQuests = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const firstNum = getRandomNum();
    const secondNum = getRandomNum();
    const question = `${firstNum} ${secondNum}`;
    const anwser = (getGreatestCommonDivisor(firstNum, secondNum)).toString();
    result.push([question, anwser]);
  }
  return result;
};

const quests = getQuests(roundsCount);

export default () => runGame(description, quests);
