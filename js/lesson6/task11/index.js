function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let copy = arr.slice();
  for (let i = 0; i < copy.length; i++) {
    let max = Math.max(copy[i]);
    let min = Math.min(copy[i]);
    if (max + min > 1000) {
      return true;
    }
  }
  return false;
}

console.log(checker([11, 100, 200, 30]));
console.log(checker([11, 100, 2000, 30]));
