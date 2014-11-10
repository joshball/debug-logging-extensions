'use strict';
var pad = require('./pad');

module.exports = function(config, dumpMethod){

    var dumpObject = function (name, obj, dumpStack) {
        dumpMethod('');
        dumpMethod(' --------------------------------------------------------------------------------');
        dumpMethod(' -----' + pad.lrpad('Dumping: ' + name, 70) + '-----');
        dumpMethod(' --------------------------------------------------------------------------------');
        dumpMethod('\n' + JSON.stringify(obj, undefined, 4));
        dumpMethod(' --------------------------------------------------------------------------------');
        if (dumpStack) {
            dumpMethod(' -----' + pad.lrpad('STACK DUMP', 70) + '-----');
            dumpMethod(' --------------------------------------------------------------------------------');
            dumpMethod(new Error().stack);
            dumpMethod(' --------------------------------------------------------------------------------');
        }
        dumpMethod('');
    };

    var dumpHapiRoutes = function (routingTable) {
        dumpMethod('');
        dumpMethod(' --------------------------------------------------------------------------------');
        dumpMethod(' -----' + pad.lrpad('Routes: ' + routingTable.length, 70) + '-----');
        dumpMethod(' --------------------------------------------------------------------------------');
        routingTable.map(function (route) {
            dumpMethod('');
            dumpMethod('   - %s %s [%s] [params: %s]', route.method.toUpperCase(), route.path, route.fingerprint, route.params);
            if (route.settings.tags || route.settings.app.name) {
                dumpMethod('      tags: %s (app: %s)', route.settings.tags, route.settings.app.name);
            }
            if (route.settings.notes) {
                route.settings.notes.forEach(function (note) {
                    dumpMethod('      notes: ', note);
                });
            }
        });
        dumpMethod(' --------------------------------------------------------------------------------');
        dumpMethod('');
    };

    return {
        object: dumpObject,
        hapiRoutes: dumpHapiRoutes
    };
};