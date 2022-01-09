export const getMinSquaredNumber = (num) => {
  if (!Array.isArray(num) || num.length < 1) {
    return null;
  }
  const min = Math.min(...num.map((el) => Math.abs(el)));
  return min * min;
};

getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
