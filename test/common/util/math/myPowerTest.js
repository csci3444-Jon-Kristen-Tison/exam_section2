const assert = require('chai').assert;
const square = require('../../../../src/common/util/math/mySquare.js');
const cube = require('../../../../src/common/util/math//myCube.js');

const num = 3;
const numString = "3";

describe('myPowerSquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + num + ') should return string value of "' + (num * num) + '"', function() {
            let squareAns = square.toSquare(num);
            assert.equal(squareAns, (num * num));
        });

        it('toSquare(' + numString + ') should return string value of "' + (num * num) + '"', function() {
            let squareAns = square.toSquare(numString);
            assert.equal(squareAns, (num * num));
        });

        it('toNumber should return type number', function() {
            let result = square.toNumber(num);
            assert.typeOf(result, 'number');
        });
    });
});

describe('myPowerCube', function() {
    describe('toCube', function() {
        it('toCube(' + num + ') should return string value of "' + (num * num * num) + '"', function() {
            let cubeAns = cube.toCube(num);
            assert.equal(cubeAns, (num * num * num));
        });

        it('toCube(' + numString + ') should return string value of "' + (num * num * num) + '"', function() {
            let cubeAns = cube.toCube(numString);
            assert.equal(cubeAns, (num * num * num));
        });

        it('toNumber should return type number', function() {
            let result = cube.toNumber(num);
            assert.typeOf(result, 'number');
        });
    });
});