'use strict';
var logger = require('./someLogger');

var loggerOptions = {
    dump: true,
    dumpMethod: 'debug'
};


require('../src/index')(logger, loggerOptions);

logger.debug('A debug message');
logger.info('An info message');
logger.warn('A warn message');
logger.error('An error message');

logger.info('dumpObject');

logger.dump.object('dumpObject(loggerOptions)', loggerOptions);

logger.info('check out dumpRoutes for hapi servers');

