const assert = require('assert');
const { calculateTax } = require('../calculateTax');

describe('calculateTax', () => {
  it('calculateTax(10000)=0', () => {
    assert.equal(calculateTax(10000), 0);
  });

  it('calculateTax(20000), (20000 - 12000) * 0.2', () => {
  assert.equal(calculateTax(20000), (20000 - 12000) * 0.2); 
});

  it('should return correct tax for income greater than 36000', () => {
  const income = 50000;
  const tax = (36000 - 12000) * 0.2 + (50000 - 36000) * 0.4; 
  assert.strictEqual(calculateTax(income), tax);
});



});
