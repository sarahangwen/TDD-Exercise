const assert = require('assert');
const { calculateTax } = require('../calculateTax');

describe('calculateTax', () => {
  it('calculateTax(10000)=0', () => {
    assert.equal(calculateTax(10000), 0);
  });

  it('calculateTax(20000), (20000 - 12000) * 0.2', () => {
  assert.equal(calculateTax(20000), (20000 - 12000) * 0.2); 
});

});
