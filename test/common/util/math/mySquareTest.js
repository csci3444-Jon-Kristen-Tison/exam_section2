const assert = require('chai').assert;
const square = require('../../../../src/common/util/math/mySquare.js');

const num = 2;
const numString = "2";

describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + num + ') should return string value of "' + (num * num) + '"', function() {
            let result = square.toSquare(num);
            assert.equal(result, (num * num));
        });

        it('toSquare("' + numString + '") should return string value of "' + (num * num) + '"', function() {
            let result = square.toSquare(numString);
            assert.equal(result, (num * num));
        });

        it('toNumber should return type number', function() {
            let result = square.toNumber(num);
            assert.typeOf(result, 'number');
        });
    });
});