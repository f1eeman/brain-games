import { getRandomNum, game } from '../index.js';

const description = 'What number is missing in the progression?';
const countsValues = 3;
const minIndex = 0;
const maxIndex = 9;
const lengthProg = 10;
const diffProg = 2;

const getProgElements = (start, indexHiddEl, diff, length) => {
  const arr = [];
  const bracket = '..';

  for (let i = 0; i < length; i += 1) {
    const element = start + (diff * i);
    arr.push(element);
  }

  const hiddEl = arr[indexHiddEl];
  arr[indexHiddEl] = bracket;
  return [arr.join(' '), hiddEl];
};

const getNumbers = (count, min = 1, max = 100) => {
  let counter = count;
  const result = [];
  while (counter !== 0) {
    const num = getRandomNum(min, max);
    result.push(num);
    counter -= 1;
  }
  return result;
};

const indexesHidd = getNumbers(countsValues, minIndex, maxIndex);
const startValues = getNumbers(countsValues);

const getQuests = (counts, indexes, beginValues, diff, length) => {
  const result = [];
  for (let i = 0; i < counts; i += 1) {
    const [question, answer] = getProgElements(beginValues[i], indexes[i], diff, length);
    result.push([question, answer]);
  }
  return result;
};

const questionnaire = getQuests(countsValues, indexesHidd, startValues, diffProg, lengthProg);

export default () => game(description, questionnaire);
