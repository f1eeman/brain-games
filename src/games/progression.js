import { getRandomNum, roundsCount, runGame } from '../index.js';

const description = 'What number is missing in the progression?';
const minIndex = 0;
const maxIndex = 9;
const lengthProgression = 10;
const diffProgression = 2;

const getProgression = (startValue, diff, length, hiddenIndexElement) => {
  const arr = [];
  const bracket = '..';
  for (let i = 0; i < length; i += 1) {
    const value = startValue + (diff * i);
    const element = (i === hiddenIndexElement ? bracket : value);
    arr.push(element);
  }
  return arr.join(' ');
};

const getQuests = (count, diff, length) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const beginValue = getRandomNum();
    const hiddenIndexElement = getRandomNum(minIndex, maxIndex);
    const question = getProgression(beginValue, diff, length, hiddenIndexElement);
    const answer = beginValue + (diff * hiddenIndexElement);
    result.push([question, answer]);
  }
  return result;
};

const quests = getQuests(roundsCount, diffProgression, lengthProgression);

export default () => runGame(description, quests);
