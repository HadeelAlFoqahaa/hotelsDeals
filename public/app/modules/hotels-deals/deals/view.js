define([
	'App',
	'modules/hotels-deals/deals/collection',
	'common/emptyView/view',
	'modules/hotels-deals/deals/deal/view'
],
function(
	App,
	DealsCollection,
	EmptyView,
	DealView
){
	return Backbone.Marionette.CollectionView.extend({

		className : 'row', 

		childView : DealView,

		emptyView: EmptyView,

		initialize : function (options) {

			this.collection = new DealsCollection();

			App.vent.on('filter:offers', this.getOffers, this);
		},

		onAttach : function(){
			$('.loader').fadeIn();
			this.collection.fetch({
				success : function(){
					$('.loader').fadeOut();
				}
			});
		},

		getOffers : function(criteria){
			$('.loader').fadeIn();
			this.collection.fetch({
				reset: true,
				data : criteria,
				success : function(){
					$('.loader').fadeOut();
				}
			});
		},

		onDestroy : function(){
			App.vent.off('filter:offers');
		},

	   	/* Override on collection update*/
		_onCollectionUpdate: function _onCollectionUpdate(collection, options) {
	  	},
	});
});
