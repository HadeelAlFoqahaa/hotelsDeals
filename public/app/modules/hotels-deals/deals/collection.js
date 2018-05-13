define([
	'App',
	'modules/hotels-deals/deals/deal/model',
], function(
	App,
	DealModel
){
	return Backbone.Collection.extend({

		model: DealModel,

		url: function(){
			return '/getOffers';
		},
	});
});
