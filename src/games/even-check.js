import { getRandomNum, game } from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const countsQuests = 3;

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

const questionnaire = getQuests(countsQuests);

export default () => game(description, questionnaire);
