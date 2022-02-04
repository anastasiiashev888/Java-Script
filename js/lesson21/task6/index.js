export const setButton = (text) => {
  if (typeof text !== 'string') {
    return alert('Вы ввели не строку');
  }
  const buttonText = document.querySelector('body');
  buttonText.innerHTML = `<button> ${text} </button>`;
  return buttonText;
};
setButton('button text');
