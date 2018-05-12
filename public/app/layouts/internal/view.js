define([
	'modules/hotels-deals/view',
	'text!layouts/internal/template.html'
],
function(
	HotelsView,
	template
){
	return Backbone.Marionette.LayoutView.extend({
		
		el: 'body',

		template: _.template(template),

		regions: {
			content: "#page-content",
		},

		initialize : function (options) {
			// Based on options view hotelsdeals, now we only have one hotelsview 
			console.log('initialize')
		},
		
		onRender: function(){
			console.log('Render')
			this.contentView = new HotelsView();
			this.getRegion('content').show(this.contentView);
		},

		onDestroy: function(){
			$('html').append(document.createElement('body'));
		},
	});
});
