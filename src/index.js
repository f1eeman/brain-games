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

export const game = (rules, gameFunc, rounds = 3, gcd = false, prog = false, calc = false) => {
  const userName = showGreeting();
  showRulesGame(rules);
  let counter = 0;

  const stepsProgression = 2;
  const lengthProgression = 10;
  const minIndex = 0;
  const maxIndex = 9;
  const operators = ['+', '-', '*'];

  while (counter < rounds) {
    const firstRandomNum = getRandomNum();
    const secondRandomNum = getRandomNum();

    let array;
    let editArray;
    let str;
    let index;
    if (gameFunc) {
      array = gameFunc(firstRandomNum, stepsProgression, lengthProgression);
      index = getRandomNum(minIndex, maxIndex);
      editArray = [...array];
      editArray[index] = '..';
      str = editArray.join(' ');
    }

    if (gcd) {
      getQuestion(firstRandomNum, secondRandomNum);
    } else if (prog) {
      getQuestion(str);
    } else if (calc) {
      getQuestion(firstRandomNum, operators[counter], secondRandomNum);
    } else {
      getQuestion(firstRandomNum);
    }

    const userAnswer = getUserAnswer();

    let correctAnswer;
    if (gcd) {
      correctAnswer = gameFunc(firstRandomNum, secondRandomNum);
    } else if (prog) {
      correctAnswer = array[index];
    } else if (calc) {
      switch (operators[counter]) {
        case '+':
          correctAnswer = firstRandomNum + secondRandomNum;
          break;
        case '-':
          correctAnswer = firstRandomNum - secondRandomNum;
          break;
        default:
          correctAnswer = firstRandomNum * secondRandomNum;
          break;
      }
    } else {
      correctAnswer = gameFunc(firstRandomNum) ? 'yes' : 'no';
    }

    let isUserAnswerRight;
    if (gcd || prog || calc) {
      isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, true);
    } else {
      isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, false);
    }

    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === rounds) getCongrats(userName);
};
