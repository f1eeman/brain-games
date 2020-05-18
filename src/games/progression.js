import { getRandomNum, game } from '../index.js';

const getArithmeticProg = (start, indexHiddEl, diff, length, message) => {
  if (indexHiddEl < 0 || indexHiddEl >= length) {
    return message;
  }

  const arr = [];
  const bracket = '..';
  let value = start;
  for (let i = 0; i < length; i += 1) {
    if (i === indexHiddEl) {
      arr.push(bracket);
    } else {
      arr.push(value);
    }
    value += diff;
  }
  return arr.join(' ');
};

const getHiddenEl = (prog, indexHiddEl, diff) => {
  const arr = prog.split(' ');
  const prevValue = Number(arr[indexHiddEl - 1]);
  const nextValue = Number(arr[indexHiddEl + 1]);
  const hiddEl = indexHiddEl ? prevValue + diff : nextValue - diff;
  return hiddEl.toString();
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

const description = 'What number is missing in the progression?';
const errMess = 'ОШИБКА! \n Индекс скрытого элемента выходит за рамки арифметической прогресии.';
const countsValues = 3;
const countsQuests = 3;
const minIndex = 0;
const maxIndex = 9;
const lengthProg = 10;
const diffProg = 2;

const indexesHidd = getNumbers(countsValues, minIndex, maxIndex);
const startVal = getNumbers(countsValues);

const getQuests = (counts, indexes, beginValues, diff, length, message) => {
  const result = [];
  for (let i = 0; i < counts; i += 1) {
    result[i] = [];
    const question = getArithmeticProg(beginValues[i], indexes[i], diff, length, message);
    const anwser = getHiddenEl(question, indexes[i], diff);
    result[i].push(question, anwser);
  }
  return result;
};

const questionnaire = getQuests(countsQuests, indexesHidd, startVal, diffProg, lengthProg, errMess);

export default () => game(description, questionnaire);
