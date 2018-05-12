$(function(){
	
	getOffers(null);

	$('#apply-search').click(function(){
		let criteria = {};
		_.each($('.userInputs'), function(el){
			let $el = $(el);
			if ($el.val().length > 0){
				criteria[$el.attr('name')] = $el.val();
			}
		});
		getOffers(criteria);
	});
});

function getOffers(criteria){
	$.ajax({
		data : criteria,
		type:'GET',
		url:'/getOffers',
		success: function (offers) {
			
			let elements = _.map(offers, function(offer){

				return '<div class="col-sm-3"> '+	
				
					'<div class="panel panel-default panel-front">' +		
						'<div class="panel-heading">'+
							'<h4 class="panel-title"><a HREF="#">'+
								'<img class"hotels" src="' + offer.hotelInfo.hotelImageUrl + '">'+
								'</a>'+
							'</h4>' +	
						'</div>' +
						
						'<div class="panel-body">' +
						
							'<h4>' + offer.destination.shortName + '</h4>' +
						  
							'<div class="text-right">' +
								'<a href="#" class="btn btn-info btn-sm" role="button">Big Kahuna</a>'
							'</div>' +
						'</div>'+
					'</div>' +		
				'</div>';
			});

			$('#deals').html(elements);
		}
	});
} 