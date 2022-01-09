export const reverseArray = (namber) => {
  if (!Array.isArray(namber)) {
    return null;
  }
  const copy = namber.slice();
  return copy.reverse();
};

reverseArray([2, 4, 6, 7, 9, 5, 43]);
reverseArray([4, 6, 9, 5, 6, 7, 4]);
