export const wallet = {
  transactions: [1, 4, 6, 7, 88],
  getMax() {
    return Math.max.apply(wallet, this.transactions);
  },
  getMin() {
    return Math.min.apply(wallet, this.transactions);
  },
};
console.log(wallet.getMax());
console.log(wallet.getMin());
