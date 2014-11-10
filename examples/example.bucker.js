'use strict';
var bucker = require('bucker');

var loggerOptions = {
    dump: true,
    dumpMethod: 'debug'
};


var debuggingExt = require('../src/index');;

var logger=bucker.createLogger({}, module);


debuggingExt(logger);

logger.debug('A debug message');
logger.info('An info message');
logger.warn('A warn message');
logger.error('An error message');

logger.info('dumpObject');

logger.dump.object('dumpObject(loggerOptions)', loggerOptions);

logger.info('check out dumpRoutes for hapi servers');

