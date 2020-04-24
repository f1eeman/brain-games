import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

export const evenCheck = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  let counter = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum();
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

export const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  let counter = 0;
  const operators = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const firstNum = getRandomNum();
    const secondNum = getRandomNum();
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
