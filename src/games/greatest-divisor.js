import readlineSync from 'readline-sync';
import {
  getRandomNum, getGreatestCommonDivisor, showGreeting, showSalute,
} from '../index.js';

export default (numberIter) => {
  showGreeting();
  const userName = readlineSync.question('May i have your name? ');
  showSalute(userName);
  console.log('Find the greatest common divisor of given numbers.');

  let counter = 0;
  for (let i = 0; i < numberIter; i += 1) {
    const firstNumber = getRandomNum(100);
    const secondNumber = getRandomNum(100);
    const correctAnswer = getGreatestCommonDivisor(firstNumber, secondNumber);

    console.log(`Question: ${firstNumber} ${secondNumber}`);
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
