function checkSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  if (sum >= 100) {
    return true;
  }

  return false;
}
