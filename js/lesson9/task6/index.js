/* const getPeople = (obj) => {
  console.log(
    Object.values(obj)
      
      
  );
}; */
const getPeople = (obj) => {
  const copy = Object.values(obj)
    .reduce((acc, el) => acc.concat(el), [])
    .map((el) => el.name);

  return copy;
};

// tests
const rooms = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};
console.log(getPeople(rooms));

const getPeople = (obj) => {
  const unitePeople = Object.values(obj).flat();
  const unitePeopleMassive = unitePeople.map((element) =>
    Object.values(element)
  );
  return unitePeopleMassive.flat();
};
