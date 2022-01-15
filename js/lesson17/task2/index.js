export const callbackPrompt = {
  message: 'Введите номер телефона',
  showPrompt() {
    const phone = prompt(`${this.message}`);
    console.log(phone);
  },

  showDeferredPrompt(ms) {
    console.log(this);
    setTimeout(this.showPrompt.bind(this), ms);
  },
};
callbackPrompt.showDeferredPrompt(1000);
