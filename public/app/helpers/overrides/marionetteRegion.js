define([
	'marionette'
], function(
	Marionette
){
	Marionette.Region.prototype.attachHtml = function(view){
		this.$el.hide();
		this.$el.html(view.el);
		this.$el.fadeIn(500);
	}
});