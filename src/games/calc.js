import { roundsCount, runGame } from '../index.js';
import getRandomNum from '../random.js';

const description = 'What is the result of the expression?';
const minNum = 0;
const maxNum = 20;

const getOperator = () => {
  const operators = ['+', '-', '*'];
  const minIndex = 0;
  const maxIndex = operators.length - 1;
  const index = getRandomNum(minIndex, maxIndex);
  return operators[index];
};

const calculate = (operator, firstNum, secondNum) => {
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
    const firstNum = getRandomNum(minNum, maxNum);
    const secondNum = getRandomNum(minNum, maxNum);
    const operator = getOperator();
    const question = `${firstNum} ${operator} ${secondNum}`;
    const answer = calculate(operator, firstNum, secondNum);
    result.push([question, answer.toString()]);
  }
  return result;
};

const quests = getQuests(roundsCount);

export default () => runGame(description, quests);
