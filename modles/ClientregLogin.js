const mongoose = require("mongoose");

const ClientregLoginSchema = mongoose.Schema({
	
	username: {
		type:String,
		required: true,
	},
	
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	
	confirmpassword: {
		type: String,
		required: true,
    },
	
	contact: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("ClientregLogins", ClientregLoginSchema);
