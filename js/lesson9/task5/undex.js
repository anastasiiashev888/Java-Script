function mergeObjectsV1(obj1, obj2) {
  const mergeObj = {};
  Object.assign(mergeObj, obj1, obj2);
  return mergeObj;
}

function mergeObjectsV2(obj1, obj2) {
  const mergeObj = {};
  Object.assign(mergeObj, obj2, obj1);
  return mergeObj;
}

function mergeObjectsV3(obj1, obj2) {
  const mergeObj = { ...obj1, ...obj2 };
  return mergeObj;
}

function mergeObjectsV4(obj1, obj2) {
  const mergeObj = { ...obj2, ...obj1 };
  return mergeObj;
}

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

console.log(mergeObjectsV1(obj1, obj2));
console.log(mergeObjectsV2(obj1, obj2));
console.log(mergeObjectsV3(obj1, obj2));
console.log(mergeObjectsV4(obj1, obj2));
