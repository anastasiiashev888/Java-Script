const finishForm = () => {
  const form = document.querySelector('.login-form');
  const input = document.createElement('input');
  const inputChange = document.querySelector('input');
  input.type = 'text';
  input.name = 'login';
  form.prepend(input);
  inputChange.type = 'password';
};
finishForm();
