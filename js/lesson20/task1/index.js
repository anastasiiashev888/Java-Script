class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(newAge) {
    this.age = newAge;
    if (newAge < 0) {
      return false;
    }
    if (newAge >= 25) {
      this.requestNewPhoto();
    }
    return newAge;
  }
  static createEmpty() {
    return new this('', null);
  }
}

const user1 = new User('John', 23);
console.log(user1);
user1.sayHi();
user1.requestNewPhoto();
user1.setAge(26);
user1.setAge(5);
user1.setAge(-1);
