var express = require('express');
var app = express();

var port = process.env.PORT || 5000;

console.log("dirname " + __dirname);

app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, function(err) {
    console.log('running server on port ' + port);
});