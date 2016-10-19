'use strict';

var grunt = require('grunt');
var depcheck = require('../tasks/lib/depcheck').init();
var path = require('path');

var fixtures = path.join(__dirname, 'fixtures');

exports.depcheck = {
  testBad: function (test) {
    depcheck.check(path.join(fixtures, 'bad'), {withoutDev: true}, function (unused) {
      test.expect(3);
      test.equal(1, unused.dependencies.length);
      test.equal(0, unused.devDependencies.length);
      test.equal(1, Object.keys(unused.missing).length);
      test.done();
    });
  },
  testGood: function (test) {
    depcheck.check(path.join(fixtures, 'good'), {withoutDev: true}, function (unused) {
      test.expect(3);
      test.equal(0, unused.dependencies.length);
      test.equal(0, unused.devDependencies.length);
      test.equal(0, Object.keys(unused.missing).length);
      test.done();
    });
  }
};
