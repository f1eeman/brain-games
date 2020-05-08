import {
  getRandomNum, showGreeting, getUserAnswer, getQuestion, checkUserAnswer, getCongrats,
} from '../index.js';

const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const smallerNum = firstNum > secondNum ? secondNum : firstNum;
  if ((firstNum % smallerNum === 0) && (secondNum % smallerNum === 0)) {
    return smallerNum;
  }
  let gcd = Math.floor(smallerNum / 2);
  while (firstNum % gcd !== 0 || secondNum % gcd !== 0) {
    gcd -= 1;
  }
  return gcd;
};

export default () => {
  const userName = showGreeting();
  console.log('Find the greatest common divisor of given numbers.');
  let counter = 0;
  while (counter < 3) {
    const firstNumber = getRandomNum();
    const secondNumber = getRandomNum();
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);
    getQuestion(firstNumber, secondNumber);
    const userAnswer = getUserAnswer();
    const isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, true);
    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === 3) getCongrats(userName);
};
