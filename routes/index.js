/* jshint node: true */
'use strict';

// Load Schema.org data.
var schemaData = require('../schema.json');

/*
 * GET index
 */
exports.index = function (req, res) {
	res.render('index', { title: 'Welcome to SCHEMATR0N.', types: schemaData.types });
};

/*
 * GET schema
 */
exports.schema = function (req, res) {
	var params = req.params;
	var type = params.type;
	var schema = schemaData.types[type];
	console.log('schema: ', schema);

	res.render('index', {
		title: 'Create a ' + type,
		type: type,
		schema: schema,
		properties: schemaData.properties,
		types: schemaData.types
	});

};


