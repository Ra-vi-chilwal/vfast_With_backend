const mongoose = require("mongoose");

const ClientRelationshipSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	Fname: {
		type: String,
		required: true,
	},
    contactnumber: {
		type: Number,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
    registrationno: {
		type: String,
		required: true,
	},
    place: {
		type: String,
		required: true,
	},
    address1: {
		type: String,
		required: true,
	},
    address2: {
		type: String,
		required: true,
	},
    city: {
		type: String,
		required: true,
	},
	district: {
		type: String,
		required: true,
	},

	state: {
		type: String,
		required: true,
	},
    
    zipcode: {
		type: Number,
        required: true,
    },
    country: {
		type: String,
        required: true,
    },
	
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("ClientRelationships", ClientRelationshipSchema);
