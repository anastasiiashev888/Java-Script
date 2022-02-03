class Order {
  constructor(price, city, type) {
    this.id = `${(Math.random() * 1000).toFixed()}`;
    this.price = price;
    this.city = city;
    this.type = type;
    this.isConfirmed = false;
    this.dateCreated = new Date();
  }
  checkPrice() {
    return this.price > 1000;
  }
  confirmOrder() {
    if (this.isConfirmed !== true) this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }
  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}
