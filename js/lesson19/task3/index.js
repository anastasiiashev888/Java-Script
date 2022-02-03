export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (newAge < 0) {
    return false;
  }
  if (newAge >= 25) {
    this.requestNewPhoto();
  }
  return newAge;
};
const user1 = new User('John', 23);
console.log(user1);
user1.sayHi();
user1.requestNewPhoto();
user1.setAge(26);
user1.setAge(5);
user1.setAge(-1);
