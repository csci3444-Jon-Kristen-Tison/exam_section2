var express = require('express');
var myPowers = require('./common/util/math/myPower.js');

var app = express();

app.set('views', './views');
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Exam Section 2' },
        name: 'Jon-Kristen',
        lastname: 'Tison'
    };
    res.render('../views/pages/home.ejs', data2template);
});

app.get('/square', function(req, res) {
    var inpNumber = 2;
    var resultNumber = myPowers.toSquare(inpNumber);
    var data2template = {
        head: { title: 'Square Page' },
        inpNumber: inpNumber,
        resultNumber: resultNumber
    };
    res.render('../views/pages/square.ejs', data2template);
});

app.get('/cube', function(req, res) {
    var inpNumber = 3;
    var resultNumber = myPowers.toCube(inpNumber);
    var data2template = {
        head: { title: 'Cube Page' },
        inpNumber: inpNumber,
        resultNumber: resultNumber
    };
    res.render('../views/pages/cube.ejs', data2template);
});

app.get('/about', function(req, res) {
    res.status(200).render('../views/pages/about.html');
});

app.get('/*', function(req, res) {
    res.status(404).render('../views/pages/error.ejs', { head: { title: 'Error' } });
});

var server = app.listen(8015, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port
    );
});