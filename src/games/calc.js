import { getRandomNum, game } from '../index.js';

const description = 'What is the result of the expression?';
const countsQuests = 3;

const getQuestion = (firstNum, secondNum) => {
  const operators = ['+', '-', '*'];
  const min = 0;
  const max = 2;
  const index = getRandomNum(min, max);
  const result = `${firstNum} ${operators[index]} ${secondNum}`;
  return result;
};

const getAnswer = (question) => {
  const [firstNum, operator, secondNum] = question.split(' ');
  let answer;
  switch (operator) {
    case '+':
      answer = Number(firstNum) + Number(secondNum);
      break;
    case '-':
      answer = Number(firstNum) - Number(secondNum);
      break;
    case '*':
      answer = Number(firstNum) * Number(secondNum);
      break;
    default:
      break;
  }
  return answer.toString();
};

const getQuests = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    result[i] = [];
    const firstNum = getRandomNum();
    const secondNum = getRandomNum();
    const question = getQuestion(firstNum, secondNum);
    const anwser = getAnswer(question);
    result[i].push(question, anwser);
  }
  return result;
};

const questionnaire = getQuests(countsQuests);

export default () => game(description, questionnaire);
