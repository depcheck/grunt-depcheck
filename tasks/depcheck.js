/*
 * grunt-depcheck
 * https://github.com/rumpl/grunt-depcheck
 *
 * Copyright (c) 2015 Djordje Lukic
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function (grunt) {
  var depcheck = require('./lib/depcheck').init();

  grunt.registerMultiTask('depcheck', 'Depcheck Grunt plugin', function () {
    var options = this.options({
      'withoutDev': false,
      'failOnUnusedDeps': false,
      'failOnMissingDeps': false,
      'listMissing': false,
      'ignoreDirs': ['.git','.svn','.hg','.idea','node_modules','bower_components'],
      'ingoreMatches': []
    });

    var dirsChecked = 0;
    var done = this.async();
    var fail = false;
    var files = this.filesSrc;

    files.forEach(function (f) {
      depcheck.check(path.resolve(f), options, function (unused) {
        if (unused.dependencies.length !== 0) {
          fail = options.failOnUnusedDeps;
          grunt.log.warn('Unused Dependencies');
          unused.dependencies.forEach(function (unusedDependency) {
            grunt.log.warn('* ' + unusedDependency);
          });
        }

        if (unused.devDependencies.length !== 0) {
          fail = options.failOnUnusedDeps;
          grunt.log.warn();
          grunt.log.warn('Unused devDependencies');
          unused.devDependencies.forEach(function (unusedDevDependency) {
            grunt.log.warn('* ' + unusedDevDependency);
          });
        }

        if (unused.missing && Object.keys(unused.missing).length !== 0) {
          fail = options.failOnMissingDeps;
          grunt.log.warn();
          grunt.log.warn('Missing Dependencies');
          Object.keys(unused.missing).forEach(function (missingDependency) {
            var warnString = '* ' + missingDependency;
            if (options.listMissing) {
              unused.missing[missingDependency].forEach(function (missingDependencyFile) {
                warnString += '\n  in ' + missingDependencyFile;
              });
            }
            grunt.log.warn(warnString);
          });
        }

        if (dirsChecked++ === files.length - 1) {
          done(!fail);
        }
      });
    });
  });
};
