define([
	'App',
	'modules/hotels-deals/filter-deals/view',
	'modules/hotels-deals/deals/view',
	'text!modules/hotels-deals/template.html'
],
function(
	App,
	FilterView,
	DealsView,
	template
){
	return Backbone.Marionette.View.extend({

		tagName: 'section',
		
		template: _.template(template),

		regions: {
			deals: "#deals",
			filter : '#filter'
		},
		
		onRender: function(){
			this.getRegion('filter').show(new FilterView());
			this.getRegion('deals').show(new DealsView());
		},
	});
});
