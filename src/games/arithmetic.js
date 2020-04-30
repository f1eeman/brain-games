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
  const userName = showGreeting();
  console.log('What number is missing in the progression?');
  let counter = 0;
  while (counter < 3) {
    const randomNum = getRandomNum(100);
    const array = getArithmeticProg(randomNum, 2, 10);
    const index = getRandomNum(9);
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
  if (counter === 3) getCongrats(userName);
};
