/*
* GET home page.
*/

exports.index = function (reg, res) {
    res.render('index');
};

exports.partials = function (reg, res) {
    var name = reg.params.name;
    res.render('partials/' + name);
};