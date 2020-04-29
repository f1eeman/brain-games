import readlineSync from 'readline-sync';
import {
  getRandomNum, showGreeting, showSalute,
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
  showGreeting();
  const userName = readlineSync.question('May i have your name? ');
  showSalute(userName);
  console.log('Find the greatest common divisor of given numbers.');

  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
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
