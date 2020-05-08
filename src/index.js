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

export const game = (rules, gameFunc, typeGame = 'standart', rounds = 3) => {
  const userName = showGreeting();
  showRulesGame(rules);
  let counter = 0;

  while (counter < rounds) {
    const firstRandomNum = getRandomNum();
    const secondRandomNum = getRandomNum();

    let correctAnswer;
    if (typeGame === 'calc') {
      const operators = ['+', '-', '*'];
      getQuestion(firstRandomNum, operators[counter], secondRandomNum);
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
    } else if (typeGame === 'gcd') {
      getQuestion(firstRandomNum, secondRandomNum);
      correctAnswer = gameFunc(firstRandomNum, secondRandomNum);
    } else if (typeGame === 'prog') {
      const stepsProgression = 2;
      const lengthProgression = 10;
      const minIndex = 0;
      const maxIndex = 9;
      const array = gameFunc(firstRandomNum, stepsProgression, lengthProgression);
      const index = getRandomNum(minIndex, maxIndex);
      const editArray = [...array];
      editArray[index] = '..';
      const str = editArray.join(' ');
      getQuestion(str);
      correctAnswer = array[index];
    } else {
      getQuestion(firstRandomNum);
      correctAnswer = gameFunc(firstRandomNum) ? 'yes' : 'no';
    }

    const userAnswer = getUserAnswer();

    let isUserAnswerRight;
    if (typeGame === 'standart') {
      isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, false);
    } else {
      isUserAnswerRight = checkUserAnswer(userName, userAnswer, correctAnswer, true);
    }

    if (!isUserAnswerRight) break;
    counter += 1;
  }
  if (counter === rounds) getCongrats(userName);
};
