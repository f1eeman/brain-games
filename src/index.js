import readlineSync from 'readline-sync';

export const getRandomNum = (limitNumber) => Math.floor(Math.random() * limitNumber) + 1;

export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const getErrorMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
};

export const getQuestion = (firstAtr, secondAtr, thirdAtr) => {
  if (firstAtr && secondAtr && thirdAtr) {
    console.log(`Question: ${firstAtr} ${secondAtr} ${thirdAtr}`);
  } else if (firstAtr && secondAtr && !thirdAtr) {
    console.log(`Question: ${firstAtr} ${secondAtr}`);
  } else {
    console.log(`Question: ${firstAtr}`);
  }
};

export const checkUserAnswer = (userName, userAnswer, correctAnswer, toNumber) => {
  const editUserAnswer = toNumber ? Number(userAnswer) : userAnswer;
  if (editUserAnswer === correctAnswer) {
    console.log('Correct');
    return true;
  }
  getErrorMessage(userName, userAnswer, correctAnswer);
  return false;
};

export const getCongrats = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
