const mongoose = require("mongoose");

const CibilcheckSchema = mongoose.Schema({
	// clientid:{
	// 	type: String,
	// 	required: true,	
	// },
	candidatename: {
		type: String,
		required: true,
	},
	Fname: {
		type: String, 
		required: true,
	},
	DOB: {
		type: String,
		required: true,
	},
	pancard: {
		type: String,
		required: true,
	},
	Address: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		required: true,
	},
	
	
	contactnumber: {
		type: String,
		required: true,
	},
	
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Cibilchecks", CibilcheckSchema);
