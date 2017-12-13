const assert = require('chai').assert;
const square = require('./mySquare.js');
const cube = require('./myCube.js');

module.exports = {
    toSquare: function(inpNumber) {
        return square.toSquare(inpNumber);
    },

    toCube: function(inpNumber) {
        return cube.toCube(inpNumber);
    }
}