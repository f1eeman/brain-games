import readlineSync from 'readline-sync';

export const getRandomNum = (min = 1, max = 100) => {
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

export const roundsCount = 3;

export const runGame = (description, quests) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = quests[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isUserAnswerRight = userAnswer.toLowerCase() === correctAnswer.toString();
    const gameOverMessage = `"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \n Let's try again, ${userName}!`;
    const resultMessage = isUserAnswerRight ? 'Correct!' : gameOverMessage;
    console.log(resultMessage);
    if (!isUserAnswerRight) return;
  }
  console.log(`Congratulations, ${userName}!`);
};
