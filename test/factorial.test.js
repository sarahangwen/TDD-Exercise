


const assert = require('assert');
const { factorial } = require('../factorial');

// describe('factorial', () => {
//   it('should return 1 for 1!', () => {
//     assert.strictEqual(factorial(1), 1);
//   });
// })

// describe('factorial', () => {
//   it('should return 6 for 3!', () => {
//     assert.strictEqual(factorial(3), 6);
//   });
// })

describe('factorial', () => {
  it('should return 24 for 4!', () => {
    assert.strictEqual(factorial(4), 24);
  });
})

  // it('should return 120 for 5!', () => {
  //   assert.strictEqual(factorial(5), 120);
  // });

  // it('should return 3628800 for 10!', () => {
  //   assert.strictEqual(factorial(10), 3628800);
  // });

  // it('should throw an error for negative numbers', () => {
  //   assert.throws(() => factorial(-5), /Negative numbers not allowed/);
  // });
// });
