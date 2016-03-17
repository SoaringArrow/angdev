var express = require('express');
var logger = require('morgan');
var routes = require('./routes');

var env = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

app.get('*', routes.index);

// Start Server
var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');