const assert = require('assert');
const { calculateTax } = require('../calculateTax');

describe('calculateTax', () => {
  it('should return 0 for income less than 12000', () => {
    assert.equal(calculateTax(10000), 0);
  });
});
