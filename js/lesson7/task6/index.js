const reverseArray = (namber) => {
  if (!Array.isArray(namber)) {
    return null;
  }
  const copy = namber.slice();
  return copy.reverse();
};

console.log(reverseArray([2, 4, 6, 7, 9, 5, 43, 2, 5, 8, 99]));
