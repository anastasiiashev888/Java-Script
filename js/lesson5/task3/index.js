function getEvenOdd(num) {
  if (num % 2 === 0) {
    return 'even';
  }
  if (num % 2 === 1) {
    return 'odd';
  }
}
const result = getEvenOdd(17);
console.log(result);
