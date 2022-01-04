const numberArr = [22.3, 44.4, 0.55];

const getParsedIntegers = (num) => num.map((el) => Number.parseInt(el, 10));

console.log(getParsedIntegers(numberArr));

const getParsedIntegersV2 = (num) => num.map((el) => parseInt(el, 10));

console.log(getParsedIntegersV2(numberArr));

const getParsedFloats = (num) => num.map((el) => Number.parseFloat(el, 10));
console.log(getParsedFloats(numberArr));

const getParsedFloatsV2 = (num) => num.map((el) => parseFloat(el, 10));
console.log(getParsedFloatsV2(numberArr));

const getСompare = (num) => getParsedIntegers(num) === getParsedIntegersV2(num);
console.log(getСompare(numberArr));

const getСompareV2 = (num) => getParsedFloats(num) === getParsedFloatsV2(num);
console.log(getСompareV2(numberArr));
