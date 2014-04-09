/* jshint node: true */
'use strict';

// Load module dependencies.
var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');

// Configure Express.
var app = express();
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('tiny'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use('/static', express.static(path.join(__dirname, 'public')), { maxAge: 60 });
app.use('/lib', express.static(path.join(__dirname, 'bower_components')));

// Setup dev configuration.
if ('development' === app.get('env')) {
	app.use(express.errorHandler());
}

// Define routes.
app.get('/', routes.index);
app.get('/schema/:type', routes.schema);

// Start server.
http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
