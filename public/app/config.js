require.config( {

	paths: {

		jquery: '../bower_components/jquery/dist/jquery.min',
		
		underscore: '../bower_components/lodash/lodash',

		text: '../bower_components/text/text',
		
		backbone: '../bower_components/backbone/backbone',

		marionette: '../bower_components/marionette/lib/backbone.marionette',
		
		bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',

		'backbone.radio': '../bower_components/backbone.radio/build/backbone.radio'
	},

	shim: {

		jquery: {
			exports: '$'
		},

		underscore: {
			exports: '_'
		},

		backbone: {
			deps: [ 'underscore', 'jquery'],
			exports: 'Backbone'
		},

		marionette : {
			deps: [ 'underscore', 'backbone', 'backbone.radio'],
			exports: 'Marionette'
		},

		bootstrap: {
			deps: [ 'jquery' ]
		},
	},

	waitSeconds: 0,
	
	baseURL: 'app',

	deps : ['startup'],

	load : 0,

	progress : 0,
});