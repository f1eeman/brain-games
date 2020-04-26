import readlineSync from 'readline-sync';
import {
  getRandomNum, showGreeting, showSalute,
} from '../index.js';

export default () => {
  showGreeting();
  const userName = readlineSync.question('May i have your name? ');
  showSalute(userName);
  console.log('What is the result of the expression?');
  let counter = 0;
  const operators = ['+', '-', '*'];
  const numberIter = operators.length;

  for (let i = 0; i < numberIter; i += 1) {
    const firstNum = getRandomNum(100);
    const secondNum = getRandomNum(100);
    console.log(`Question: ${firstNum} ${operators[i]} ${secondNum}`);
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
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct');
      counter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${userName}!`);
};
