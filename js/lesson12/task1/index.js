const calc = (expression) => {
  const a = expression.split(' ');
  let result = 0;
  switch (a[1]) {
    case '+':
      result = +a[0] + +a[2];
      break;
    case '-':
      result = +a[0] - +a[2];
      break;
    case '*':
      result = +a[0] * +a[2];
      break;
    case '/':
      result = +a[0] / +a[2];
      break;
  }
  return expression + ' = ' + result;
};

console.log(calc('4 / 2'));
