module.exports = {

	attributes: {
	
	licensePlate:{
	    type: 'String',
	    required: true
	},	
	capacity:{
	    type: 'integer',
	    required: true
	},
	currentLatitude:{
	    type: 'float',
	    required: true
	},	
	currentLongitude:{
	    type: 'float',
	    required: true
	},	
	soldSeats:{
	    type: 'integer',
	    required: true
	},		
	color:{

	    type: 'string',

	    required: true
	},

	photo:{

	    type: 'string',

	    required: true
	}

	}
};
