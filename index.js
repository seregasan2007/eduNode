var express = require('express');

var app = express();

var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs')

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get('/another', function(req, res){
    res.render('index');
});

app.get('/news/:id', function(req, res){
    res.render('news', {newsId: req.params.id});
});

app.get('/task', function(req, res){
    res.render('task');
});

app.get('/about-success', function(req, res){
    res.render('about-success');
});

app.post('/task', urlencodedParser, function(req, res){
    if (!req.body) return res.sendStatus(400)
    console.log(req.body)
    res.render('about-success', {data: req.body});
});

app.listen(3000);