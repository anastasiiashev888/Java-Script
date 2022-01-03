const cloneArr = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copy = [...arr];
  return copy;
};

console.log(cloneArr([2, 4, 6, 7, 9, 5, 43, 2, 5, 8, 99], 2));
