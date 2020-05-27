import { roundsCount, runGame } from '../index.js';
import getRandomNum from '../random-num.js';

const description = 'What number is missing in the progression?';
const lengthProgression = 10;
const diffProgression = 2;
const minIndex = 0;
const maxIndex = lengthProgression - 1;

const getQuestion = (startValue, diff, length, hiddenElementIndex) => {
  const result = [];
  const bracket = '..';
  for (let i = 0; i < length; i += 1) {
    const value = startValue + (diff * i);
    const element = (i === hiddenElementIndex ? bracket : value);
    result.push(element);
  }
  return result.join(' ');
};

const getQuests = (count, diff, length) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const beginValue = getRandomNum();
    const hiddenElementIndex = getRandomNum(minIndex, maxIndex);
    const question = getQuestion(beginValue, diff, length, hiddenElementIndex);
    const answer = beginValue + (diff * hiddenElementIndex);
    result.push([question, answer.toString()]);
  }
  return result;
};

const quests = getQuests(roundsCount, diffProgression, lengthProgression);

export default () => runGame(description, quests);
