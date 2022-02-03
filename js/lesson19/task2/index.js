const vehicle = {
  name: 'Agro',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  hasWheels: false,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    console.log(ship.move());
  },
  stopMachine() {
    console.log(ship.stop());
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};

export function getOwnProps(arg) {
  const arr = [];
  for (let prop in arg) {
    if (arg.hasOwnProperty(prop) && typeof arg[prop] !== 'function') {
      arr.push(prop);
    }
  }
  return arr;
}

// test data
console.log(getOwnProps(ship));
