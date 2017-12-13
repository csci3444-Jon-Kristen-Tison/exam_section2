const assert = require('chai').assert;
const cube = require('../../../../src/common/util/math/myCube.js');

const num = 3;
const numString = "3";

describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + num + ') should return number value of "' + (num * num * num) + '"', function() {
            let result = cube.toCube(num);
            assert.equal(result, (num * num * num));
        });

        it('toCube("' + numString + '") should return number value of "' + (num * num * num) + '"', function() {
            let result = cube.toCube(numString);
            assert.equal(result, (num * num * num));
        });

        it('toNumber should return type number', function() {
            let result = cube.toNumber(num);
            assert.typeOf(result, 'number');
        });
    });
});