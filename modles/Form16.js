const mongoose = require("mongoose");

const Form16Schema = mongoose.Schema({
	
	candidatename: {
		type:String,
		required: true,
	},
	
	gender: {
		type: String,
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	
	pancard: {
		type: String,
		required: true,
    },
	
	DOB: {
		type: String,
		required: true,
	},
	Fname: {
		type:String,
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
module.exports = mongoose.model("Forms16", Form16Schema);
