define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'bootstrap',
	'datepicker'
],
function (
	$,
	_,
	Backbone,
	Marionette,
	bootstrap,
	datepicker
) {

	var App = new Backbone.Marionette.Application();

	App.on("start", function (options) {
        if (Backbone.history)
            Backbone.history.start();
    });

    App.vent = _.extend({}, Backbone.Events);
    
	return App;
});
