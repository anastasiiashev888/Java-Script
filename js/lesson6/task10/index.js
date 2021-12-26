function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let all = arr.slice();
  const run = [];
  for (let i = 0; i < all.length; i++) {
    run.push(all[i]);
  }
  return run;
}

console.log(cloneArr([2, 5, 6, 8, 11, 9, 4, 20]));
console.log(cloneArr([7, 11, 1]));
console.log(cloneArr([]));
console.log(cloneArr());
