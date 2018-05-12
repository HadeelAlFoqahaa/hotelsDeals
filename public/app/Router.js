define([
	'App',
	'marionette',
	'layouts/internal/view',
	'modules/hotels-deals/view',
	'text!layouts/internal/template.html'
],
function (
	App,
	Marionette,
	InternalView,
	HotelsView,
	template
) {
	return Marionette.AppRouter.extend({

		routes: {
			''				: 'showHotels',
			'hotelsRoute'   : 'showHotels'
		},

		showHotels: function () {
			// setTimeout(function () {
			// 	App.rootView = new InternalView({view: 'hotelsDeals'});
			// 	App.rootView.render();
			// }, 3000)
			// (new InternalView({view: 'hotelsDeals'})).render();
			// App.rootView.getRegion('content').show(new HotelsView());

			// var S = Backbone.Marionette.LayoutView.extend({
				
			// 	el: 'body',

			// 	template: _.template(template),

			// 	regions: {
			// 		content: "#page-content",
			// 	},

			// 	initialize : function (options) {
			// 		// Based on options view hotelsdeals, now we only have one hotelsview 
			// 		console.log('initialize')
			// 	},
				
			// 	onRender: function(){
			// 		console.log('Render')
			// 		this.contentView = new HotelsView();
			// 		this.getRegion('content').show(this.contentView);
			// 	},

			// 	onDestroy: function(){
			// 		$('html').append(document.createElement('body'));
			// 	},
			// });
			// var s = new S();
			// s.render();
		},	
		
		onRoute: function (route, path, args) {
			
		},
	});
});