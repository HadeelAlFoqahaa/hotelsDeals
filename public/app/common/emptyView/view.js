define([
	'App',
	'text!common/emptyView/template.html'
], function(
	App,
	template
){
	return Backbone.Marionette.View.extend({

		className : 'alert alert-info alert-dismissible',

		template : _.template(template),

		attributes : function(){ 
			return { 
				style: 'margin : 20px;' 
			} 
		},
	});
});