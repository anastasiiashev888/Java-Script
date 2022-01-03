const sortDesc = (namber) => {
  const copy = [...namber];
  copy.sort((a, b) => b - a);
  return copy;
};

console.log(sortDesc([2, 4, 6, 7, 9, 5, 43, 2, 5, 8, 99]));
