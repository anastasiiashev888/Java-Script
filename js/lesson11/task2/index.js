const sortContacts = (arr, bulian = true) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.sort((a, b) =>
    bulian === true
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );
};

const contacts = [
  {
    name: 'Tom',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Kate',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Luise',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Richard',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Ann',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Robert',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Nensi',
    phoneNumber: '777-77-77',
  },
  {
    name: 'Daniel',
    phoneNumber: '777-77-77',
  },
];

console.log(sortContacts(contacts, true));
