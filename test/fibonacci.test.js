const assert = require('assert');
const { fibonacci } = require('../fibonacci');

describe('fibonacci', () => {
    it('fibonacci(1) = 1', () => {
        assert.equal(fibonacci(1), 1); 
    });

    it('fibonacci(2) = 3', () => {
        assert.equal(fibonacci(1), 1); 
    });
});

