const numberArr = [1, 33, 44.555, 0, 99, NaN, 'text'];
const getFiniteNumbers = (num) => num.filter((el) => Number.isFinite(el));
console.log(getFiniteNumbers(numberArr));

const getFiniteNumbersV2 = (num) => num.filter((el) => isFinite(el));
console.log(getFiniteNumbersV2(numberArr));

const getNaN = (num) => num.filter((el) => Number.isNaN(el));
console.log(getNaN(numberArr));

const getNaNV2 = (num) => num.filter((el) => isNaN(el));
console.log(getNaNV2(numberArr));

const getIntegers = (num) => num.filter((el) => Number.isInteger(el));
console.log(getIntegers(numberArr));

const compare = (num) => getFiniteNumbers(num) === getFiniteNumbersV2(num);
const compareV2 = (num) => getNaN(num) === getNaNV2(num);
console.log(compare(numberArr));
console.log(compareV2(numberArr));
