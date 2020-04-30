import {
  getRandomNum, showGreeting, getUserAnswer, getQuestion, checkUserAnswer, getCongrats,
} from '../index.js';

export default () => {
  const userName = showGreeting();
  console.log('What is the result of the expression?');
  let counter = 0;
  const operators = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNum(100);
    const secondNum = getRandomNum(100);
    getQuestion(firstNum, operators[i], secondNum);
    let correctAnswer;
    switch (operators[i]) {
      case '+':
        correctAnswer = firstNum + secondNum;
        break;
      case '-':
        correctAnswer = firstNum - secondNum;
        break;
      default:
        correctAnswer = firstNum * secondNum;
        break;
    }
    const userAnswer = getUserAnswer();
    const isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, true);
    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === 3) getCongrats(userName);
};
