define([
	'App',
	'modules/hotels-deals/filter-deals/view',
	'modules/hotels-deals/deals/view',
	'text!layouts/internal/template.html'
],
function(
	App,
	FilterView,
	DealsView,
	template
){
	return Backbone.Marionette.LayoutView.extend({

		el: 'section',
		
		template: _.template(template),

		regions: {
			deals: "#deals",
			filter : '#filter-deals'
		},
		
		onRender: function(){
			console.log('hon')
			this.getRegion('filter').show(new FilterView());
			this.getRegion('deals').show(new DealsView());
		},
	});
});
