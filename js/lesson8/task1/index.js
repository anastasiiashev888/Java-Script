const transformToObject = (arr) => {
  const copy = {};
  arr.forEach((el) => {
    copy[el] = el;
  });
  return copy;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
