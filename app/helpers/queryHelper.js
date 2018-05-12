var queryHelper = {
	destinationName: {
		type:'string',
		path : 'destination.longName',
		comparer: 'match'
	},
	destinationCity: {
		type:'string',
		path : 'destination.city',
		comparer: 'match'
	},
	regionIds: {
		type:'stringArray',
		path : 'destination.regionID',
		comparer: 'match'
	},
	minTripStartDate: {
		type:'date',
		path : 'offerDateRange.travelStartDate',
		comparer: '>='
	},
	maxTripStartDate: {
		type:'date',
		path : 'offerDateRange.travelStartDate',
		comparer: '<='
	},
	lengthOfStay: {
		type:'number',
		path : 'offerDateRange.lengthOfStay',
		comparer:'==='
	},
	minStarRating: {
		type:'number',
		path : 'hotelInfo.hotelStarRating',
		comparer:'>='
	},
	maxStarRating: {
		type:'number',
		path : 'hotelInfo.hotelStarRating',
		comparer:'<='
	},
	minTotalRate: {
		type:'number',
		path : 'hotelInfo.hotelReviewTotal',
		comparer:'>='
	},
	maxTotalRate: {
		type:'number',
		path : 'hotelInfo.hotelReviewTotal',
		comparer:'<='
	},
	minGuestRating: {
		type:'number',
		path : 'hotelInfo.hotelGuestReviewRating',
		comparer:'>='
	},
	maxGuestRating: {
		type:'number',
		path : 'hotelInfo.hotelGuestReviewRating',
		comparer:'<='
	}
} 

module.exports = queryHelper;