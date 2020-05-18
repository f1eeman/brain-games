import { getRandomNum, game } from '../index.js';

const description = 'What is the result of the expression?';
const countsQuests = 3;

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const min = 0;
  const max = operators.length - 1;
  const index = getRandomNum(min, max);
  return operators[index];
};

const getResultOfCalc = (firstNum, operator, secondNum) => {
  let result;
  switch (operator) {
    case '+':
      result = firstNum + secondNum;
      break;
    case '-':
      result = firstNum - secondNum;
      break;
    case '*':
      result = firstNum * secondNum;
      break;
    default:
      break;
  }
  return result;
};

const getQuests = (count) => {
  const result = [];
  for (let i = 0; i < count; i += 1) {
    const firstNum = getRandomNum();
    const secondNum = getRandomNum();
    const operator = getOperator();
    const question = `${firstNum} ${operator} ${secondNum}`;
    const anwser = getResultOfCalc(firstNum, operator, secondNum);
    result.push([question, anwser]);
  }
  return result;
};

const questionnaire = getQuests(countsQuests);

export default () => game(description, questionnaire);
