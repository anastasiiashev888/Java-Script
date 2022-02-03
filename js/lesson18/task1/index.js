export const event = {
  message: 'Welcome to the party!',
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Key', age: 17, email: 'example@server.com' },
  ],
  getInvitations() {
    const eventMessage = event.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        message: `Dear ${name}! ${this.message}`,
        email,
      }));
    return eventMessage;
  },
};

console.log(event.getInvitations());
