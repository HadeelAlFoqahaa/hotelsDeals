define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'bootstrap'
],
function (
	$,
	_,
	Backbone,
	Marionette,
	bootstrap
) {

	var App = new Backbone.Marionette.Application();

	App.on("start", function (options) {
        if (Backbone.history)
            Backbone.history.start();
    });

    App.vent = _.extend({}, Backbone.Events);
    
	return App;
});
