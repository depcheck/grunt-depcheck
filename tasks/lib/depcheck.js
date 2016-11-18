'use strict';

var depcheck = require('depcheck');

exports.init = function() {
  var exports = {};

  exports.check = function (directory, options, callback) {
    depcheck(directory, options, callback);
  };

  return exports;
};
