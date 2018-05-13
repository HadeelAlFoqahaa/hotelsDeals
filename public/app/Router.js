define([
	'App',
	'marionette',
	'layouts/internal/view',
	'text!layouts/internal/template.html'
],
function (
	App,
	Marionette,
	InternalView,
	template
) {
	return Marionette.AppRouter.extend({

		appRoutes: {
			''				: 'showHotels',
			'hotelsRoute'   : 'showHotels'
		},

		controller : {

			showHotels: function () {
				App.rootView = new InternalView({view: 'hotelsDeals'});
				App.rootView.render();
			},	
		},
	});
});