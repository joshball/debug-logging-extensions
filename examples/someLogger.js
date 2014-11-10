'use strict';
var util = require('util');
module.exports = {
    error: function () {
        var args = Array.prototype.slice.call(arguments);
        return console.log('ERROR:', util.format.apply(util.format, args));
    },
    warn: function () {
        var args = Array.prototype.slice.call(arguments);
        return console.log('WARN:', util.format.apply(util.format, args));
    },
    info: function () {
        var args = Array.prototype.slice.call(arguments);
        return console.log('INFO:', util.format.apply(util.format, args));
    },
    debug: function () {
        var args = Array.prototype.slice.call(arguments);
        return console.log('DEBUG:', util.format.apply(util.format, args));
    }
};
