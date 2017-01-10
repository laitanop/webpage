var express = require('express');
var PORT = process.env.PORT || 8080;
var app = express();


app.use(express.static(__dirname +'/'));

app.get('*', function(request, response) {
 response.sendFile(__dirname + '/index.html')
});


app.listen(PORT, function () {
	console.log('Express server is up on port 8080');

});