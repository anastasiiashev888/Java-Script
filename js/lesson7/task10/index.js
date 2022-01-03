const sum = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const all = (acc, delte) => acc + delte;

  return arr.reduce(all);
};

console.log(sum([2, 4, 6, 7, 9, 5, 43, 2, 5, 8, 99]));
