const getSpecialNumbers = (namber) => {
  const result = namber.filter((num) => num % 3 === 0);
  return result;
};

console.log(getSpecialNumbers([2, 4, 6, 7, 9, 5, 43, 2, 5, 8, 99]));
