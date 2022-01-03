const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copy = [];
  arr.map((nam) => {
    if (nam % 2 === 0) {
      copy.push(nam + delta);
    } else {
      copy.push(nam);
    }
  });
  return copy;
};

console.log(increaseEvenEl([2, 4, 6, 7, 9, 5, 43, 2, 5, 8, 99], 2));
