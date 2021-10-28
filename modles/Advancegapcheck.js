const mongoose = require("mongoose");

const AdvancegapcheckSchema = mongoose.Schema({
	
	candidatename: {
		type:String,
		required: true,
	},
	
	Fcompany: {
		type: String,
		required: true,
	},
	Seccompany: {
		type: String,
		required: true,
	},
	
	Dufirst: {
		type: String,
		required: true,
    },
	
	Dusec: {
		type: String,
		required: true,
	},
	reasonofgap: {
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
module.exports = mongoose.model("Advancegapchecks", AdvancegapcheckSchema);
