const flatArray = (arr) =>
  arr.reduce((acc, elem) => {
    return acc.concat(elem).sort((a, b) => a - b);
  }, []);

const num = [3, [2, 4, 5, 5], 5, [10]];
console.log(flatArray(num));

/* const flatArray = (arr) => {
  const copy = [...arr];
  return copy
    .slice()
    .flat()
    .sort((a, b) => a - b);
};
const num = [3, [2, 4, 5, 5], 5, [10]];
console.log(flatArray(num)); */
