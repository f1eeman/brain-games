export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const showSalute = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getRandomNum = () => Math.floor(Math.random() * 100) + 1;

export const getGreatestCommonDivisor = (firstNum, secondNum) => {
  const smallerNum = firstNum > secondNum ? secondNum : firstNum;
  let greatestCommonDivisor = 1;
  for (let i = smallerNum; i > 1; i -= 1) {
    const isNotRemainderOfFirstNum = firstNum % i === 0;
    const isNotRemainderOfSecondNum = secondNum % i === 0;
    if (isNotRemainderOfFirstNum && isNotRemainderOfSecondNum) {
      greatestCommonDivisor = i;
      break;
    }
  }
  return greatestCommonDivisor;
};
