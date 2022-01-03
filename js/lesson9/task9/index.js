/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, key, i) => {
    acc[key] = valuesList[i];
    return acc;
  }, {});

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
console.log(buildObject(keys, values)); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
