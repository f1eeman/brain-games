import {
  getRandomNum, showGreeting, getUserAnswer, getQuestion, checkUserAnswer, getCongrats,
} from '../index.js';

const getArithmeticProg = (begin, difference, lengthProg) => {
  const arr = [];
  let value = begin;
  for (let i = 0; i < lengthProg; i += 1) {
    arr.push(value);
    value += difference;
  }
  return arr;
};


export default () => {
  const stepsProgression = 3;
  const lengthProgression = 10;
  const rounds = 3;
  const minIndex = 0;
  const maxIndex = 9;
  const userName = showGreeting();
  console.log('What number is missing in the progression?');
  let counter = 0;
  while (counter < rounds) {
    const randomNum = getRandomNum();
    const array = getArithmeticProg(randomNum, stepsProgression, lengthProgression);
    const index = getRandomNum(minIndex, maxIndex);
    const correctAnswer = array[index];
    const editArray = [...array];
    editArray[index] = '..';
    const str = editArray.join(' ');
    getQuestion(str);
    const userAnswer = getUserAnswer();
    const isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, true);
    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === rounds) getCongrats(userName);
};
