var test = require('tap').test;
var Client = require('../');
var client = Client();

test('disconnects', function(t) {
  client.disconnect();
  client.once('end', function() {
    t.end();
  })
});
