const assert = require('assert');
const Calculator = require('../../src/calculator');

describe('Calculator Tests', function() {
    let calc;

    beforeEach(function() {
        calc = new Calculator();
    });

    it('should add two numbers correctly', function() {
        assert.strictEqual(calc.add(2, 3), 5);
    });

    it('should subtract two numbers correctly', function() {
        assert.strictEqual(calc.subtract(5, 2), 3);
    });

    it('should multiply two numbers correctly', function() {
        assert.strictEqual(calc.multiply(4, 3), 12);
    });

    it('should divide two numbers correctly', function() {
        assert.strictEqual(calc.divide(6, 2), 3);
    });

    it('should throw error when dividing by zero', function() {
        assert.throws(() => calc.divide(5, 0), Error);
    });
});