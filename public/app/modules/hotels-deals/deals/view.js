define([
	'App',
	'modules/hotels-deals/deals/collection',
	'modules/hotels-deals/deals/deal/view'
],
function(
	App,
	DealsCollection,
	DealView
){
	return Backbone.Marionette.CollectionView.extend({

		childView : DealView,

		collection : DealsCollection,

		initialize : function (options) {
			
		},
		
		onRender: function(){
			this.collection.fetch();
		},
	});
});
