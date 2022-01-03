const squareArray = (namber) => {
  if (!Array.isArray(namber)) {
    return null;
  }
  return namber.map((nam) => nam * nam);
};

console.log(squareArray([2, 4, 6, 7, 9, 5, 43, 2, 5, 8, 99]));
