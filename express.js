var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:3000
app.use('/bundle', express.static('bundle'));
app.use('/node_modules', express.static('node_modules'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log(__dirname)
});


app.listen(3000);