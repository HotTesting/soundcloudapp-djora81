"use strict";

exports.config = {
    specs: ['homework1_spec.js'],
    directConnect: true,
    framework: 'jasmine2',
    capabilities: {
        'browserName': 'chrome'
    },
    useAllAngular2AppRoots: true
};