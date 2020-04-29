import readlineSync from 'readline-sync';
import {
  getRandomNum, showGreeting, showSalute,
} from '../index.js';

const isPrime = (num) => {
  if (typeof (num) !== 'number') {
    return NaN;
  }
  const stopValue = num / 2;
  for (let i = 2; i < stopValue; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};


export default () => {
  showGreeting();
  const userName = readlineSync.question('May i have your name? ');
  showSalute(userName);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum(100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isValuePrime = isPrime(randomNum);
    if ((isValuePrime && (userAnswer === 'yes')) || (!isValuePrime && (userAnswer === 'no'))) {
      console.log('Correct');
      counter += 1;
    } else {
      const correctAnswer = isValuePrime ? 'yes' : 'no';
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${userName}!`);
};
