/* eslint-disable max-classes-per-file */

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return `${this._id}`;
  }

  get name() {
    return `${this._name}`;
  }

  get sessionId() {
    return `${this._sessionId}`;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map((user) => user._name);
  }

  getUserIds() {
    return this._users.map((user) => user._id);
  }

  getUserNameById(idOfName) {
    let name = '';

    this._users.forEach((el) => {
      if (el._id === idOfName) {
        name = el._name;
      }
    });
    return name;
  }
}

// examples
const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('12', 'Nastya', 'session-id');

const user3 = new User('13', 'John', 'session-id');
console.log(user1);
console.log(user2);
console.log(user3);
// получить свойства можем
console.log(user1.id); // ===> '1'
console.log(user1.name); // ===> 'Tom'
console.log(user1.sessionId); // ===> 'session-id'
