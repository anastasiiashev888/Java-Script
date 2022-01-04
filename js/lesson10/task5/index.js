const number = [2, 4, 6, 7, 22.55, 44.7766];

const getTotalPrice = (num) => {
  const copy = [...num];
  const sum = copy.reduce((acc, el) => acc + el, 0);
  const numFloor = Math.floor(sum * 100) / 100;

  return '$' + numFloor;
};

console.log(getTotalPrice(number));
