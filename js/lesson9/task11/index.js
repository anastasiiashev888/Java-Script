const getCustomersList = (obj) => {
  const copyObj = { ...obj };
  const arrWithUsers = [];
  const idValues = Object.keys(copyObj);
  const usersArr = Object.values(copyObj);
  usersArr.forEach((el, i) => {
    arrWithUsers.push({ ...el, id: idValues[i] });
  });
  return arrWithUsers.sort((a, b) => a.age - b.age);
};

// tests
const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

console.log(getCustomersList(customers));
