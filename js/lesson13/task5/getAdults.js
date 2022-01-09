export const getAdults = (obj) => {
  const copy = {};
  for (const key in obj) {
    if (obj[key] >= 18) {
      copy[key] = obj[key];
    }
  }
  return copy;
};

// examples
getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 }); // ==> { 'John Doe': 19, Bob: 18 }
getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }
