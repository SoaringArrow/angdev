var express = require('express');
var logger = require('morgan');
var routes = require('./routes');
var api = require('./routes/api');

var env = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// JSON API
app.get('/api/test', api.test);
app.get('/api/scraptext', api.scraptext);


// Catch All Route
app.get('*', routes.index);

// Start Server
var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');