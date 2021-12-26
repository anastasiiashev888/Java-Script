function derSum(first, second) {
  let sum = 0;
  for (let i = first; i <= second; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(derSum(10, 20));
