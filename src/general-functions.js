const getRandomNum = (min = 1, max = 100) => {
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

export default getRandomNum;
