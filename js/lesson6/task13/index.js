function withdraw(clients, balances, client, amount) {
  let output = 0;

  for (let i = 0; i < clients.length; i += 1) {
    if (clients[i] === client && balances[i] >= amount) {
      output = balances[i] - amount;
    } else if (clients[i] === client && balances[i] < amount) {
      output = -1;
    }
  }
  return output;
}

const clients = ['Ann', 'John', 'User'];
const balances = [1400, 87, -6];
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50));
console.log(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 50));
