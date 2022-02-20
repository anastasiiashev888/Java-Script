const finishList = () => {
  const elemUl = document.querySelector('ul');
  const elemSpecial = document.querySelector('.special');

  const newLi1 = document.createElement('li');
  const newLi4 = document.createElement('li');
  const newLi6 = document.createElement('li');
  const newLi8 = document.createElement('li');
  newLi1.textContent = '1';
  newLi4.textContent = '4';
  newLi6.textContent = '6';
  newLi8.textContent = '8';

  elemUl.prepend(newLi1);
  elemSpecial.before(newLi4);
  elemSpecial.after(newLi6);
  elemUl.append(newLi8);
};
finishList();
