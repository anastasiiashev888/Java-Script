const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copy = [...arr];
  return copy.reduce((a, b) => a + b) / copy.length;
};

console.log(arrAverage([2, 3, 4, 5]));
