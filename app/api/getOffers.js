const fs = require('fs');
const _ = require('lodash');
const queryHelper = require('../helpers/queryHelper');

module.exports = function (req, res) {

	const query = req.query;
	const queryKeys = _.keys(query);

	let offers = JSON.parse(fs.readFileSync("app/src/offers.json"));
	offers = offers.offers.Hotel;

	/* if there is no any criteria so return all offers. */
	if (queryKeys.length == 0)
		return res.send(offers);

	/* We only support certain query params,
	 * if the user tried to send other params,
	 * his query will be ignored.
	*/
	if(_.difference(queryKeys, _.keys(queryHelper)).length > 0){
		return res.status(404).send({
			message : 'Some of query params not supported.'
		});
	}
	
	let matchedOffers = [];
	
	/* Loop through offers, 
	*  one offer must match all criteria to set it as a matched offer.
	*/
	for (let i = 0; i < offers.length; i++) {
		
		let matchedLength = 0
		for(qParam in query){

			const offerValue = _.get(offers[i], queryHelper[qParam].path);
			const qParamValue = query[qParam];
			const comparer = queryHelper[qParam].comparer;
			let isMatched = false;

			/* Choose the way of comparing the offer with criteria.
			*   example : 
			*     qParam minStarRating, qParamValue = 2.0, type : number.
			*     offerValue >= qParamValue // 4.0 >= 2.0;
			*/
			switch(queryHelper[qParam].type){
				case 'string':
					isMatched = eval('_.toLower(offerValue).' + comparer + '(_.toLower(qParamValue))');
					break;
				case 'stringArray':
					isMatched = eval('_.toLower(qParamValue).' + comparer + '(_.toLower(offerValue))');
					break;
				case 'number':
					isMatched = eval( parseFloat(offerValue) + comparer + parseFloat(qParamValue));
					break;
				case 'date':
					isMatched = eval(+new Date(offerValue) + comparer + +new Date(qParamValue));
					break;
			}

			matchedLength = isMatched ? matchedLength + 1 : matchedLength;
		}

		if (matchedLength === queryKeys.length)
			matchedOffers.push(offers[i]);	
	}
	
	res.send(matchedOffers);
}