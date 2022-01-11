export const createCalculator = () => {
  let memory = 0;
  const add = (num) => {
    memory += num;
    return memory;
  };
  const decrease = (num) => {
    memory -= num;
    return memory;
  };
  const reset = () => {
    memory = 0;
    return memory;
  };
  const getMemo = () => {
    return memory;
  };
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};
