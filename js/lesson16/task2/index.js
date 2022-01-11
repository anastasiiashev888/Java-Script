/* const createArrayOfFunctions = (num) => {
  if (typeof num === 'undefined') {
    return [];
  }
  if (typeof num !== 'number') {
    return null;
  }
  let run = [];
  for (let i = 0; i < num; i++) {
    run.push(i);
    run[i] = function () {
      return i;
    };
  }
  return run;
};

// test data

console.log(createArrayOfFunctions('some text'));
console.log(createArrayOfFunctions(5));
console.log(createArrayOfFunctions()); */
