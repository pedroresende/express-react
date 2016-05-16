var assert = require('chai').assert;
var connection = require('./../lib/db.js');

describe('Connection', function() {
    it('should return disconnected, since it\'s not connected yet', function () {
      assert.equal('disconnected', connection.state);
    });
});
