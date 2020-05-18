import { getRandomNum, game } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const countsQuests = 3;


const isPrime = (num) => {
  if (typeof (num) !== 'number') {
    return NaN;
  }

  if (num < 2) {
    return false;
  }

  const stopValue = num / 2;
  for (let i = 2; i <= stopValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const getQuests = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const question = getRandomNum();
    const anwser = getAnswer(question);
    result.push([question, anwser]);
  }
  return result;
};

const questionnaire = getQuests(countsQuests);

export default () => game(description, questionnaire);
