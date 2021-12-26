function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }

  const copyArr = [...new Set(array)];
  return copyArr;
}

console.log(removeDuplicates([1, 2, 3, 1, 1, 3, 4, 5, 7]));
