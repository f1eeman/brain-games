import {
  getRandomNum, showGreeting, getUserAnswer, getQuestion, checkUserAnswer, getCongrats,
} from '../index.js';

export default () => {
  const userName = showGreeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let counter = 0;
  while (counter < 3) {
    const randomNum = getRandomNum();
    getQuestion(randomNum);
    const userAnswer = getUserAnswer();
    const isEven = randomNum % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    const isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, false);
    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === 3) getCongrats(userName);
};
