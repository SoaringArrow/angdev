'use strict';

var Xray = require('x-ray');
var scrapData = require('../data_access/scrap-results');

var x = Xray();

/*
* Serve JSON to our AngularJS client
*/

exports.test = function (req, res) {
    res.json({
        'message': 'Test'
    });
};

exports.scrapText = function (req, res) {
    var url = req.query.url;
    
    x(url, ['p'])(function (err, obj){
        if (obj == null)
            obj = [];
        
        for (var i = obj.length; i--;) {
            if(obj[i] === "") {
                obj.splice(i, 1);
            } else {
                obj[i] = obj[i].trim();
            }
        };
        res.setHeader('Content-Type', 'application/json');
        res.send(obj);
    });
};

exports.scrapImages = function (req, res) {
    var url = req.query.url;
    
    x(url, ['img@src'])(function (err, obj){
        if (obj == null)
            obj = [];
        
        res.setHeader('Content-Type', 'application/json');
        res.send(obj);
    });
};

exports.insertScrapResult = function (req, res) {
    scrapData.insert(req.body);
    res.send(req.body);
};

exports.getAllScrapResults = function (req, res) {
    if(req.query.name == null)
        scrapData.queryAll(res);
    else
        scrapData.get(req.query.name, res);
};