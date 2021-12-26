function uniqueCount(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const copyArr = [...new Set(array)];

  return copyArr.length;
}
console.log(uniqueCount([2, 5, 7, 7, 5, 2, 23, 23]));
console.log(uniqueCount([1, 2, 3, 1, 1, 3, 4, 5, 7]));
uniqueCount([1, 2, 3, 1, 1, 3, 4, 5, 7]);
console.log(uniqueCount(1, 2, 3, 1, 1, 3, 4, 5, 7));
