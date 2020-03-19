var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();

app.set('port', (process.env.PORT || 8080));

app.use(express.static(__dirname + '/dist'));
app.listen(app.get('port'), function() {
       console.log('app running on port', app.get('port'));
});
