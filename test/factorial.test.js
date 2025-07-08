
// TDD Test Assignment 2, Pair: Angwen Sarah and Kabwaga Veronica Amooti


const assert = require('assert');
const { factorial } = require('../factorial');

// describe('factorial', () => {
//   it('factorial(1)= 1', () => {
//     assert.equal(factorial(1), 1);
//   });
// })

// describe('factorial', () => {
//   it('factorial(3)=6', () => {
//     assert.equal(factorial(3), 6);
//   });
// })

// describe('factorial', () => {
//   it('factorial(4)=24', () => {
//     assert.equal(factorial(4), 24);
//   });
// })


// describe('factorial', () => {
//   it('factorial(5)=120', () => {
//     assert.equal(factorial(5), 120);
//   });
// })

// describe('factorial', () => {
//   it('factorial(10)=3628800', () => {
//     assert.equal(factorial(10), 3628800);
//   });
// })

describe('factorial', () => {
  it('factorial(-5)', () => {
    assert.throws(() => factorial(-5), /Negative numbers not allowed/);
  });
});
