const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let all = arr.slice();
  let run = [];

  for (let i = 0; i < all.length; i++) {
    if (all[i] % 2 === 0) {
      run.push(all[i] + delta);
    } else {
      run.push(all[i]);
    }
  }
  return run;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([7, 11, 1], 10));
console.log(increaseEvenEl([], 120));
