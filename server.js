var express = require('express');
var app = express();

var hostname = '127.0.0.1';
var currentPort = 8080;

console.log(`Welcome port: ${currentPort} will be ready shortly`);


app.use(express.static('./public'))

app.get('/', function (req, res) {
    res.sendFile('./public/html/index.html', {
        root: './'
    });
})


app.get('/about', function (req, res) {
    res.sendFile('./public/html/about.html', {
        root: './'
    });
})

app.get('/contact', function (req, res) {
    res.sendFile('./public/html/contact.html', {
        root: './'
    });
})

app.get('/portfolio', function (req, res) {
    res.sendFile('./public/html/portfolio.html', {
        root: './'
    });
})


app.use((function (req, res) {
    res.sendStatus(404);
}))



var server = app.listen(currentPort, hostname, function () {
    console.log(`Server running at http://${hostname}:${currentPort}/`);
    console.log('Express server listening on port %s.', currentPort);
    console.log('Thanks for waiting... the app is ready for action.')
});
