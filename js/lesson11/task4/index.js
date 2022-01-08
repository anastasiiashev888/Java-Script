const countOccurrences = (text = '', str) => {
  if (str.length === 0) {
    return null;
  }
  return text.includes(str) ? text.split(str).length - 1 : 0;
};

console.log(countOccurrences('jhkjuhujhuhh', 'h'));
