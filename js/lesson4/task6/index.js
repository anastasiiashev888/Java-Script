let and = 1000;
let sum = 0;
for (let i = 0; i <= and; i++) {
  if (i % 2 === 1) {
    console.log('Faund');
    sum += i;
  }
}
if (sum * 5 >= 5000) {
  console.log('Bigger');
} else {
  console.log('Smaller or equal');
}
