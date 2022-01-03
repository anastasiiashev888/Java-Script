'use strict';

const withdraw = (clients, balances, client, amount) => {
  let sum = 0;
  let nameIndex = clients.indexOf(client);
  if (balances[nameIndex] > amount) {
    sum = balances[nameIndex] - amount;
    return sum;
  }
  return -1;
};

console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10));
