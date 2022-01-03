const user = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  return Object.assign(userData, { id: userId });
}

function addPropertyV3(userData, userId) {
  const newObj = {};
  newObj.id = userId;
  return Object.assign({}, userData, newObj);
}

const addPropertyV4 = (userData, userId) => ({ ...userData, id: userId });

// examples

addPropertyV1(user, '1234567'); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV1(user, '1234567'));
console.log(addPropertyV2(user, '1234567'));
console.log(addPropertyV3(user, '1234567'));
console.log(addPropertyV4(user, '1234567'));
