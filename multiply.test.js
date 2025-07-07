const assert = require("assert");
const { multiply } = require("./multiply");

describe("multiply", () => {
  it("should return 1 when multiplying 1 and 1", () => {
    assert.strictEqual(multiply(1, 1), 1);
  });
});
