const app = require('express')();
const offers = require('./router/offers.js');

/*Use Offers API as a middleware to save the modulerity*/
app.use(offers);

const port = 3000;
app.listen(port, function(){
	console.log('Listening on port ' + port);
});