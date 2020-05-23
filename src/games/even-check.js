import { getRandomNum, roundsCount, runGame } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getQuests = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const question = getRandomNum();
    const anwser = isEven(question) ? 'yes' : 'no';
    result.push([question, anwser]);
  }
  return result;
};

const quests = getQuests(roundsCount);

export default () => runGame(description, quests);
