const mongoose = require("mongoose");

const IDcheckSchema = mongoose.Schema({
	clientid:{
     type:String,
     required:true,
    },
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
	pincode :{
        type:String,
        required:true,
    },
	card: {
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
    city:{
        type:String,
        required:true,
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
module.exports = mongoose.model("IDchecks", IDcheckSchema);
