const getSubArray = (arr, numberOfElements) => {
  let run = [];
  for (let i = 0; i <= numberOfElements; i++) {
    run = arr.slice(0, i);
  }
  return run;
};

console.log(getSubArray([11, 100, 200, 30], 2));
console.log(getSubArray([11, 100, 2000, 30], 3));
