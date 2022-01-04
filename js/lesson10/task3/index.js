const number = 11.12556;
const numberV2 = 6.112;

const multiRound = (num) => [
  Math.floor(num * 100) / 100,
  Math.trunc(num * 100) / 100,
  Math.round(num * 100) / 100,
  Math.ceil(num * 100) / 100,
  Number(num.toFixed(2)),
];

console.log(multiRound(number));
console.log(multiRound(numberV2));
