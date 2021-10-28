const mongoose = require("mongoose");

const ReferencecheckSchema = mongoose.Schema({
    clientid:{
        type:String,
        required:true,
    },
	candidatename: {
		type: String,
		required: true,
	},
    candidatecontactnumber: {
		type: String,
		required: true,
	},
	
	candidateaddress: {
		type: String,
		required: true,
	},
	referencenumber: {
		type: String,
		required: true,
	},
	
referencename: {
		type: String,
		required: true,
    },
	referenceaddress: {
		type: String,
		required: true,
    },
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Referencechecks", ReferencecheckSchema);
