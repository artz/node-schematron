/* jshint node: true */
'use strict';

var FeedParser = require('feedparser');
var request = require('request');

console.log('Requesting ' + 'http://schema.org/docs/schemaorg.owl');
request('http://schema.org/docs/schemaorg.owl')
	.pipe(new FeedParser())
	.on('error', function (error) {
		// always handle errors
		console.log(error);
	})
	.on('meta', function (meta) {
		// do something
		console.log(meta);
	})
	.on('data', function (data) {
		console.log(data);
	})
	.on('readable', function () {
		var stream = this, item;
		while (item = stream.read()) {
			console.log('Got article: %s', item.title || item.description);
		}
	});
