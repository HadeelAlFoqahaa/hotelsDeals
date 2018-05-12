define([
	'App'
], function(
	App
){
	return Backbone.Collection.extend({

		model: Backbone.Model,

		initialize: function(options){
		  
		},

		url: function(){
			return '/getOffers';
		},
	});
});
