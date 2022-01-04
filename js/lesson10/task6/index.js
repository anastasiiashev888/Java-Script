const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    const nunRandom = Number(Math.random() * (to - from) + from);
    arr.push(Math.ceil(nunRandom));
  }
  return arr;
};

/* const isNumber = (num) => {
  for (let i = 0; i < num.length; i += 1) {
    if (!Number.isInteger(num[i])) {
      return null;
    }
  }
  return num;
};

const getRandomNumbers = (length, from, to) => {
  const arr = [];

  for (let i = 0; i < length; i += 1) {
    const number = Number(Math.random() * (to - from) + from).toFixed();
    arr.push(Math.floor(number));
  }
  // return arr;
  return arr;
}; */

// examples
/* const getRandomNumbers = (length, from, to) =>
  to - from < 1
    ? null
    : Array(length)
        .fill(null)
        .map(() => Math.ceil(Math.random() * (to - from) + from)); */
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
