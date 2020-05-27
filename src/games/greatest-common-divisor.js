import { roundsCount, runGame } from '../index.js';
import getRandomNum from '../random-num.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }

  return getGreatestCommonDivisor(secondNum, firstNum % secondNum);
};

const getQuests = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const firstNum = getRandomNum();
    const secondNum = getRandomNum();
    const question = `${firstNum} ${secondNum}`;
    const answer = getGreatestCommonDivisor(firstNum, secondNum);
    result.push([question, answer.toString()]);
  }
  return result;
};

const quests = getQuests(roundsCount);

export default () => runGame(description, quests);
