define([
	'App',
	'modules/hotels-deals/deals/deal/model',
	'text!modules/hotels-deals/deals/deal/template.html'
],
function(
	App,
	DealModel,
	template
){
	return Backbone.Marionette.View.extend({

		model : DealModel,

		className : 'col-sm-3',

		template: _.template(template)
	});
});
