const manageClasses = () => {
  const one = document.querySelector('.one');
  const two = document.querySelector('.two');
  const three = document.querySelector('.three');
  const four = document.querySelector('.four');
  two.classList.remove('selected');
  one.classList.add('selected');
  three.classList.toggle('three_done');
  if (four.classList.contains('some-class')) {
    four.classList.add('another-class');
  }
};
manageClasses();
