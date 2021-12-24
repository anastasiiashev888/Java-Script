let n = 14;
let result = 1;
let m = 7;

for (let i = m; i <= n; i++) {
  if (i % 2 === 1) {
    result *= i;
  }
}

console.log(result);
