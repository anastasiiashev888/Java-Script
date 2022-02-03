const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(arr) {
    const [firstName, lastName] = arr.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
export default user;
