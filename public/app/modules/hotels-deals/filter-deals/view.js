define([
	'App',
	'text!modules/hotels-deals/filter-deals/template.html'
],
function(
	App,
	template
){
	return Backbone.Marionette.View.extend({

		className : 'row',

		template: _.template(template),

		events : {
			'click #apply-search' : 'applySearch'
		},

		applySearch: function(){
			
			let criteria = {};
			_.each($('.userInputs'), function(el){
				let $el = $(el);
				if ($el.val().length > 0){
					criteria[$el.attr('name')] = $el.val();
				}
			});

			App.vent.trigger('filter:offers', criteria);
		},

		initialize : function (options) {
			
		},
		
		onRender: function(){
			
		},
	});
});