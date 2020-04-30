import {
  getRandomNum, showGreeting, getUserAnswer, getQuestion, checkUserAnswer, getCongrats,
} from '../index.js';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const smallerNum = firstNum > secondNum ? secondNum : firstNum;
  if ((firstNum % smallerNum === 0) && (secondNum % smallerNum === 0)) {
    return smallerNum;
  }
  let greatestCommonDivisor = 1;
  const beginValue = Math.floor(smallerNum / 2);
  for (let i = beginValue; i > 1; i -= 1) {
    const isNotRemainderOfFirstNum = firstNum % i === 0;
    const isNotRemainderOfSecondNum = secondNum % i === 0;
    if (isNotRemainderOfFirstNum && isNotRemainderOfSecondNum) {
      greatestCommonDivisor = i;
      break;
    }
  }
  return greatestCommonDivisor;
};

export default () => {
  const userName = showGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter < 3) {
    const firstNumber = getRandomNum(100);
    const secondNumber = getRandomNum(100);
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
    getQuestion(firstNumber, secondNumber);
    const userAnswer = getUserAnswer();
    const isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, true);
    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === 3) getCongrats(userName);
};
