var express = require('express')
var app = express()
var exphbs  = require('express-handlebars')

var mammals = require('./data/mammals');
var reptiles = require('./data/reptiles');
var birds = require('./data/birds');
var seaLife = require('./data/seaLife');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/about', function (req, res) {
    res.render('about');
});

app.get('/mammals', function (req, res) {
    res.render('animals',{animals:mammals});
    
});

app.get('/reptiles', function (req, res) {
    res.render('animals',{animals:reptiles});
});

app.get('/birds', function (req, res) {
    res.render('animals',{animals:birds});
});

app.get('/seaLife', function (req, res) {
    res.render('animals', {animals:seaLife});
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

