var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var routes = require('./routes');
var api = require('./routes/api');

var env = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

// JSON API
app.get('/api/test', api.test);

app.get('/api/scrap-text', api.scrapText);
app.get('/api/scrap-images', api.scrapImages);

app.post('/api/scrap-results', api.insertScrapResult);
app.get('/api/scrap-results', api.getAllScrapResults);
app.get('/api/scrap-results/:id', api.getScrapResult);


// Catch All Route
app.get('*', routes.index);

// Start Server
var port = 3030;
app.listen(port);
console.log('Listening on port ' + port + '...');