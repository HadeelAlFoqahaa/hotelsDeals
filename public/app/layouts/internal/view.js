define([
	'modules/hotels-deals/view',
	'text!layouts/internal/template.html'
],
function(
	HotelsView,
	template
){
	return Backbone.Marionette.View.extend({
		
		el: 'body',

		template: _.template(template),

		regions: {
			content: "#page-content",
		},

		onRender: function(){
			this.getRegion('content').show(new HotelsView())
		},
	});
});
