export const showGreeting = () => {
  console.log('Welcome to the Brain Games!');
};

export const showSalute = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getRandomNum = (limitNumber) => Math.floor(Math.random() * limitNumber) + 1;
