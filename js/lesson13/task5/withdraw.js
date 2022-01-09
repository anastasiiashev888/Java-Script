export const withdraw = (clients, balances, client, amount) => {
  let sum = 0;
  let nameIndex = clients.indexOf(client);
  if (balances[nameIndex] > amount) {
    sum = balances[nameIndex] - amount;
    return sum;
  }
  return -1;
};

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10);
