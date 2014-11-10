'use strict';
var _ = require('lodash');
var dumpUtils = require('./dumpUtils.js');

var configDefaults = {
    dumpMethod: 'debug'
};

module.exports = function (logger, options) {
    var config = _.extend({}, configDefaults, options);
    var dumpMethod = logger[config.dumpMethod] || function(){};
    var dumpObject = {
        dump: dumpUtils(config,dumpMethod)
    };
    _.assign(logger, dumpObject);
};