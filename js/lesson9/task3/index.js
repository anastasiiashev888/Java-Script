const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

function getKeys(obj) {
  Object.keys(obj).forEach((keys) => {
    console.log(keys);
  });
}

getKeys(object);
