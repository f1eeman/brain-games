import readlineSync from 'readline-sync';

export const getRandomNum = (min = 1, max = 100) => {
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');


export const getQuestion = (firstAtr, secondAtr, thirdAtr) => {
  if (firstAtr && secondAtr && thirdAtr) {
    console.log(`Question: ${firstAtr} ${secondAtr} ${thirdAtr}`);
  } else if (firstAtr && secondAtr && !thirdAtr) {
    console.log(`Question: ${firstAtr} ${secondAtr}`);
  } else {
    console.log(`Question: ${firstAtr}`);
  }
};

export const getErrorMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
};

export const checkUserAnswer = (userName, userAnswer, correctAnswer, toNumber) => {
  const editUserAnswer = toNumber ? Number(userAnswer) : userAnswer.toLowerCase();
  if (editUserAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  getErrorMessage(userName, userAnswer, correctAnswer);
  return false;
};

export const getCongrats = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const showRulesGame = (rules) => console.log(rules);

export const game = (rules, gameFunc, rounds = 3, gcd = false, prog = false) => {
  const userName = showGreeting();
  showRulesGame(rules);
  let counter = 0;
  while (counter < rounds) {
    const randomNum = getRandomNum();
    const secondRandomNum = getRandomNum();

    const stepsProgression = 2;
    const lengthProgression = 10;
    const minIndex = 0;
    const maxIndex = 9;
    const array = gameFunc(randomNum, stepsProgression, lengthProgression);
    const index = getRandomNum(minIndex, maxIndex);
    const editArray = [...array];
    editArray[index] = '..';
    const str = editArray.join(' ');

    if (gcd) {
      getQuestion(randomNum, secondRandomNum);
    } else if (prog) {
      getQuestion(str);
    } else {
      getQuestion(randomNum);
    }

    const userAnswer = getUserAnswer();

    let correctAnswer;
    if (gcd) {
      correctAnswer = gameFunc(randomNum, secondRandomNum);
    } else if (prog) {
      correctAnswer = array[index];
    } else {
      correctAnswer = gameFunc(randomNum) ? 'yes' : 'no';
    }

    let isUserAnswerRight;
    if (gcd || prog) {
      isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, true);
    } else {
      isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, false);
    }

    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === rounds) getCongrats(userName);
};
