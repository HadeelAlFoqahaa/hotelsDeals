define([
	'jquery',
	'underscore',
	'backbone',
	'backbone.wreqr',
	'marionette',
	'marionetteRegion',
	'bootstrap'
],
function (
	$,
	_,
	Backbone,
	wreqr,
	Marionette,
	marionetteRegion,
	bootstrap
) {

	var App = new Backbone.Marionette.Application({
		region: '#root'
	});

	App.on("start", function (options) {
        if (Backbone.history)
            Backbone.history.start();
    })
    
	return App;
});
