'use strict';

var nextday = require("nextday")

/**
 * @returns {Date}
 */
module.exports = function () {
    return nextday(new Date())
}
