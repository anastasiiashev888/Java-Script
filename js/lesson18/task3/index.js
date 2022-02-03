const sumOfSquares = (...num) => {
  return [...num].reduce((acc, elem) => acc + elem * elem, 0);
};
console.log(sumOfSquares(1, 3, 4, 5, 6, 7));
