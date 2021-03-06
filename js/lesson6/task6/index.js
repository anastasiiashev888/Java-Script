'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  let num = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i <= [arr.length - 1]; i++) {
    num.push(arr[i] * arr[i]);
  }
  return num;
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
