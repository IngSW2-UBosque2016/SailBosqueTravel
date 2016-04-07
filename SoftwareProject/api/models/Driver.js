
module.exports = {

	attributes: {
	
	firstName:{
	    type: 'string',
	    required: true
	},

	lastName:{

	    type: 'string',

	    required: true
	},

	email:{

	    type: 'string',

	    email: true,

	    unique: true
	},
	encryptedPassword:{

	    type: 'string',

	    required: true

	}
	}
};
