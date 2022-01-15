const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullname) {
    const allName = fullname.split(' ');
    const setfirstName = allName[0];
    const setlastName = allName[1];
    this.firstName = setfirstName;
    this.lastName = setlastName;
    return allName;
  },
};

const userGetFullName = user.getFullName();
user.setFullName(userGetFullName);
