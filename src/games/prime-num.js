import {
  getRandomNum, showGreeting, getUserAnswer, getQuestion, checkUserAnswer, getCongrats,
} from '../index.js';

const isPrime = (num) => {
  if (typeof (num) !== 'number') {
    return NaN;
  }
  const stopValue = num / 2;
  for (let i = 2; i <= stopValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const userName = showGreeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  let counter = 0;
  while (counter < 3) {
    const randomNum = getRandomNum();
    getQuestion(randomNum);
    const userAnswer = getUserAnswer();
    const isValuePrime = isPrime(randomNum);
    const correctAnswer = isValuePrime ? 'yes' : 'no';
    const isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, false);
    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === 3) getCongrats(userName);
};
