exports.Portfolio = class Portfolio {
  constructor () {
    this.stocks = {};
    this.length = 0;
  }

  isEmpty () {
    return this.length == 0;
  }

  numTickers () {
    return this.length;
  }

  buy (name, num) {
    if (this.stocks.hasOwnProperty(name)) {
      this.stocks[name] += num;
    } else {
      this.length += 1;
      this.stocks[name] = num;
    }
  }

  sell (name, num) {
    if (num > this.stocks[name] 
      || !(this.stocks.hasOwnProperty(name))) {
      throw new Error('Not possible to sell this number of shares.');
    }
    this.stocks[name] -= num;
    if (this.stocks[name] == 0) {
      delete this.stocks[name];
      this.length -= 1;
    }
  }

  getNumShares(name) {
    if (this.stocks.hasOwnProperty(name)){
      return this.stocks[name];
    } else {
      return 0;
    }
  }

}
