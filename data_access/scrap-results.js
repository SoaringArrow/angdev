'use strict';

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/scrapdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connection opened to scrapdb');
});

var scrapResultSchema = mongoose.Schema({
    name: String,
    siteUrl: String,
    scrapText: [String],
    scrapImages: [String]
});

var ScrapResult = mongoose.model('ScrapResult', scrapResultSchema);

exports.insert = function (data) {
    var newResult = new ScrapResult({
        name: data.name,
        siteUrl: data.siteUrl,
        scrapText: data.scrapText,
        scrapImages: data.scrapImages
    });
    
    newResult.save();
    console.log('Scrap result saved to database');
};

exports.queryAll = function (res) {
    ScrapResult.find({})
    .select('name')
    .exec(function (err, results) {
        if (err)
            return err;
        
        res.send(results);
        
    });
};

exports.get = function(id, res) {
    ScrapResult.find({'_id': id }, function(err, result) {
        if (err)
            return err;
        
        res.send(result[0]);
    });
}