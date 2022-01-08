const splitString = (str, num = 10) => {
  if (typeof str !== 'string') {
    return null;
  }
  const strArr = [];
  let startPosition = 0;
  while (str.substr(startPosition, num)) {
    strArr.push(str.substr(startPosition, num).padEnd(num, '.'));
    startPosition += num;
  }

  return strArr;
};

// tests
console.log(splitString('lsjlfoi   dfsjdf sfijbn  sdfi sddfijsdfj dsofjosdjf'));
