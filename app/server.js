const express = require('express');
const app = express();
const offers = require('./router/offers.js');
const config = require('../config');

app.use(express.static('public'));

/*Use Offers API as a middleware to save the modulerity*/
app.use(offers);

var port = process.env.PORT || config.port;

module.exports = app.listen(port, function(){
	console.log('Listening on port ' + port);
});