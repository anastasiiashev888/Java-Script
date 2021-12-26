function compreSums(a, b, c, d) {
  if (sum(a, b) > sum(c, d)) {
    return true;
  }
  return false;
}


function sum(from, to) {
  let all = 0;
  for (let i = from; i <= to; i++) {
    all += i;
  }
  return all;
}

