const express = require('express');
const app = express();
const offers = require('./router/offers.js');

app.use(express.static('public'));

/*Use Offers API as a middleware to save the modulerity*/
app.use(offers);

var port = process.env.PORT || 8000

app.listen(port, function(){
	console.log('Listening on port ' + port);
});