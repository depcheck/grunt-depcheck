/*
 * grunt-depcheck
 * https://github.com/rumpl/grunt-depcheck
 *
 * Copyright (c) 2015 Djordje Lukic
 * Licensed under the MIT license.
 */

'use strict';

var depcheck = require('depcheck');

exports.init = function() {
  var exports = {};

  exports.check = function (directory, options, callback) {
    depcheck(directory, options, callback);
  };

  return exports;
};
