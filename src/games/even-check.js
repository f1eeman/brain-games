import readlineSync from 'readline-sync';
import {
  getRandomNum, showGreeting, showSalute,
} from '../index.js';

export default () => {
  showGreeting();
  const userName = readlineSync.question('May i have your name? ');
  showSalute(userName);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');

  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum(100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = randomNum % 2 === 0;
    if ((isEven && (userAnswer === 'yes')) || (!isEven && (userAnswer === 'no'))) {
      console.log('Correct');
      counter += 1;
    } else {
      const correctAnswer = isEven ? 'yes' : 'no';
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${userName}!`);
};
