'use strict';

var Xray = require('x-ray');
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