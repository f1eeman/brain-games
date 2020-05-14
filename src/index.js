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


export const showQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const getErrorMessage = (userName, userAnswer, correctAnswer) => {
  console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
};

export const isAnswerRight = (userAnswer, correctAnswer) => {
  if (userAnswer.toLowerCase() === correctAnswer) {
    return true;
  }
  return false;
};

export const getMessage = () => {
  console.log('Correct!');
};

export const getCongrats = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const showRulesGame = (rules) => {
  console.log(rules);
};

const getParsedArr = (arr) => {
  const questions = [];
  const correctAnswers = [];
  const steps = arr.length;
  for (let j = 0; j < steps; j += 1) {
    const [question, correctAnswer] = arr[j];
    questions.push(question);
    correctAnswers.push(correctAnswer);
  }
  return [questions, correctAnswers];
};

export const game = (rules, questionnare) => {
  const userName = showGreeting();
  showRulesGame(rules);

  let counter = 0;
  const rounds = questionnare.length;

  const [questions, correctAnswers] = getParsedArr(questionnare);

  for (let i = 0; i < rounds; i += 1) {
    const question = questions[i];
    const correctAnswer = correctAnswers[i];
    showQuestion(question);
    const correctResponse = correctAnswer;
    const userAnswer = getUserAnswer();

    const isUserAnswerRight = isAnswerRight(userAnswer, correctResponse);
    if (isUserAnswerRight) {
      getMessage();
    } else {
      getErrorMessage(userName, userAnswer, correctResponse);
      break;
    }

    counter += 1;
  }
  if (counter === rounds) getCongrats(userName);
};
