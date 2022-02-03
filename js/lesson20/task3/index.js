class Wallet {
  constructor() {
    this.balans = 0;
  }
  getBalance() {
    return this.balans;
  }
  deposit(sum) {
    return (this.balans += sum);
  }
  withdraw(sum) {
    if (this.balans < sum) {
      console.log('No enough funds');
    } else {
      this.balans -= sum;
    }
  }
}
const myWallet = new Wallet();

console.log(myWallet.getBalance());
myWallet.deposit(48);
console.log(myWallet.getBalance());
myWallet.withdraw(40);
console.log(myWallet.getBalance());
myWallet.withdraw(100);
console.log(myWallet.getBalance());
