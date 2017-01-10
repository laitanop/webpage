var express = require('express');

var app = express();


app.use(express.static(__dirname +'/'));

app.get('*', function(request, response) {
 response.sendFile(__dirname + '/index.html')
});


app.listen(8080, function () {
	console.log('Express server is up on port 8080');

});