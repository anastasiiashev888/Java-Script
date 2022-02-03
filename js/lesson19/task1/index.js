export const vehicle = {
  name: 'Agro',
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
export const ship = {
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
ship.startMachine();
ship.stopMachine();
vehicle.move();
vehicle.stop();
