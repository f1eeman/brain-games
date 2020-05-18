import readlineSync from 'readline-sync';

export const getRandomNum = (min = 1, max = 100) => {
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
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

export const game = (description, questionnaire) => {
  const userName = showGreeting();
  console.log(description);

  let counter = 0;
  const defRounds = 3;
  const realRounds = questionnaire.length > defRounds ? defRounds : questionnaire.length;

  const [questions, correctAnswers] = getParsedArr(questionnaire);

  for (let i = 0; i < realRounds; i += 1) {
    const question = questions[i];
    const correctAnswer = correctAnswers[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const isUserAnswerRight = userAnswer.toLowerCase() === correctAnswer;

    if (isUserAnswerRight) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === realRounds) console.log(`Congratulations, ${userName}!`);
};
