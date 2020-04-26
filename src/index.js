export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const showSalute = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getRandomNum = (limitNumber) => Math.floor(Math.random() * limitNumber) + 1;

export const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const smallerNum = firstNum > secondNum ? secondNum : firstNum;
  if ((firstNum % smallerNum === 0) && (secondNum % smallerNum === 0)) {
    return smallerNum;
  }
  let greatestCommonDivisor = 1;
  const beginValue = Math.floor(smallerNum / 2);
  for (let i = beginValue; i > 1; i -= 1) {
    const isNotRemainderOfFirstNum = firstNum % i === 0;
    const isNotRemainderOfSecondNum = secondNum % i === 0;
    if (isNotRemainderOfFirstNum && isNotRemainderOfSecondNum) {
      greatestCommonDivisor = i;
      break;
    }
  }
  return greatestCommonDivisor;
};

export const getArithmeticProg = (begin, difference, lengthProg) => {
  const arr = [];
  let value = begin;
  for (let i = 0; i < lengthProg; i += 1) {
    arr.push(value);
    value += difference;
  }
  return arr;
};
