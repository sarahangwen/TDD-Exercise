const assert = require("assert");
const { factorial } = require("../factorial");

describe("factorial ", () => {
  it("factorial(1) = 1", () => {
    assert.equal(factorial(1), 1);
  });

  it("factorial(3) = 6", () => {
    assert.equal(factorial(3), 6);
  });

  it("factorial(4) = 24", () => {
    assert.equal(factorial(4), 24);
  });

  it("factorial(5) = 120", () => {
    assert.equal(factorial(5), 120);
  });

  it("factorial(10) = 3628800", () => {
    assert.equal(factorial(10), 3628800);
  });

  it("should throw for negative numbers", () => {
    assert.throws(() => factorial(-5), /Negative numbers not allowed/);
  });
});
