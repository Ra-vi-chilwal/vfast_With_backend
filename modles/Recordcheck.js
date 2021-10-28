const mongoose = require("mongoose");

const RecordcheckSchema = mongoose.Schema({
	candidatename: {
		type:String,
		required: true,
	},
	
	pancard: {
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
module.exports = mongoose.model("Recordchecks", RecordcheckSchema);
