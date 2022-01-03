const transaction = {
  currency: 'USD',
  value: 170,
  operation: 'sale',
  agent: {
    country: 'Ukraine',
    company: 'NYSE',
  },
  'operation time': 1584029990001,
};
console.log(transaction.currency);
/* выведи в консоль значение свойства 'currency' с помощью точки */
console.log([transaction.value]);
/* выведи в консоль значение свойства 'value' с помощью квадратных скобок */

const key = 'operation';
console.log([key]);
/* выведи в консоль значение свойства, название которого находится в переменной key - используйте квадратные скобки */
console.log([transaction.agent.company]);
/* выведи в консоль значение свойства 'company' используя квадратные скобки */
console.log(transaction.agent.company);
/* выведи в консоль значение свойства 'country' используя точку */
console.log([transaction['operation time']]);
/* выведи в консоль значение свойства 'operation time' используя квадратные скобки */
