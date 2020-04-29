import readlineSync from 'readline-sync';
import {
  getRandomNum, showGreeting, showSalute,
} from '../index.js';

const getArithmeticProg = (begin, difference, lengthProg) => {
  const arr = [];
  let value = begin;
  for (let i = 0; i < lengthProg; i += 1) {
    arr.push(value);
    value += difference;
  }
  return arr;
};

export default () => {
  showGreeting();
  const userName = readlineSync.question('May i have your name? ');
  showSalute(userName);
  console.log('What number is missing in the progression?');
  let counter = 0;
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum(100);
    const array = getArithmeticProg(randomNum, 2, 10);
    const index = getRandomNum(9);
    const correctAnswer = array[index];
    const editArray = [...array];
    editArray[index] = '..';
    const str = editArray.join(' ');
    console.log(`Question: ${str}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === Number(userAnswer)) {
      console.log('Correct');
      counter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${userName}!`);
};
