const assert = require('assert');
const { factorial } = require('../factorial');

describe("factorial", () => {
  it("should return 1 when input is 0", () => {
    assert.strictEqual(factorial(0), 1);
  });
})