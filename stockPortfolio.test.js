const stonks = require('./stockPortfolio.js');

test ('2.1 new Portfolio', () => {
  portfolio = new stonks.Portfolio();
  expected = 0;
  actual = portfolio.length;
  expect(actual).toBe(expected);
});

test ('2.2 isEmpty', () => {
  portfolio = new stonks.Portfolio();
  actual = portfolio.isEmpty(); 
  expect(actual).toBeTruthy();
});

test ('2.3 make a purchase: buy', () => {
  portfolio = new stonks.Portfolio();
  portfolio.buy("APPL", 21); 
  expected = 21;
  actual = portfolio.stocks["APPL"]; // or .APPL
  expect(actual).toBe(expected);

  portfolio.buy("APPL", 22);
  expected = 43;
  actual = portfolio.stocks["APPL"]; // or .APPL
  expect(actual).toBe(expected);
});

test ('2.4 make a sale: sell', () => {
  portfolio = new stonks.Portfolio();
  portfolio.buy("SGEN", 400);
  portfolio.sell("SGEN", 20);
  expected = 380;
  actual = portfolio.stocks.SGEN;
  expect(actual).toBe(expected);
});

test ('2.5 count ticker symbols: numTickers', () => {
  portfolio = new stonks.Portfolio();
  expected = 0;
  actual = portfolio.numTickers();
  expect(actual).toBe(expected);

  portfolio.buy("ABNB", 17);
  expected = 1
  actual = portfolio.numTickers();
  expect(actual).toBe(expected);
});

test ('2.6 remove zero-share stocks', () => {
  portfolio = new stonks.Portfolio();
  portfolio.buy("ETH", 15);
  portfolio.sell("ETH", 15);
  expected = 0;
  actual = portfolio.numTickers();
  expect(actual).toBe(expected);
});

test ('2.7 how many shares: getShares(SYMBOL)', () => {
  portfolio = new stonks.Portfolio();
  expected = 0;
  actual = portfolio.getNumShares("COST");
  expect(actual).toBe(expected);

  portfolio.buy("COST", 50);
  portfolio.sell("COST", 20);
  expected = 30;
  actual = portfolio.getNumShares("COST");
  expect(actual).toBe(expected);
});

test ('2.8 sell too many', () => {
  portfolio = new stonks.Portfolio();
  portfolio.buy("GME", 50);
  fun = () => portfolio.sell("GME", 100);
  expect(fun).toThrow(Error);
});

/* 3. Reflection on TDD
I was able to follow the test-first approach, going with the res/green cycle.
Even though I had the strong urge to just write all the funtionality, 
I resisted and wrote the tests first for each one, for the
sake of the assignment. However, I did not like it, and I prefer writing
some functions, then testing the functionalities I was looking for after.
*/