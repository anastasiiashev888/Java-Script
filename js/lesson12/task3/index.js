const cleanTransactionsList = (balans) =>
  balans
    .filter((el) => isFinite(el) === true)
    .map((el) => '$' + (+el).toFixed(2));

console.log(cleanTransactionsList([' 1.9', '16.4', 17, ' 1 dollar ']));
