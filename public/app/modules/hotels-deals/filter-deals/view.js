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

		ui:{
			datepicker : '.date'
		},

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


		onAttach : function(){

			let dateFormat = function(date){
				date = new Date(date);
				date.setDate(date.getDate() - 7);
				return date.toISOString().substring(0, 10);
			}

			this.ui.datepicker.datepicker({
				format: {
					toDisplay: function (date, format, language) {
						return dateFormat(date);
					},
					toValue: function (date, format, language) {
						return dateFormat(date);
					}
				}
			});
		},

		initialize : function (options) {
			
		},
		
		onRender: function(){
			
		},
	});
});