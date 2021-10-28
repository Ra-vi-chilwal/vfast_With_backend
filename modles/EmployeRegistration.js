const mongoose = require("mongoose");

const EmployeRegistrationSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	Fname: {
		type: String,
		required: true,
	},
	phone:{
		type:String,
		required:true,
	},
	email:{
		type:String,
		required:true,
	},
	registration:{
		type:String,
		
	},
	place:{
		type:String,
		required:true,
	},
	address1:{
		type:String,
		required:true,
	},
	address2:{
		type:String,
		required:true,
	},
    city:{
		type:String,
		required:true,
	},
    district:{
		type:String,
		required:true,
	},
	state:{
		type:String,
		required:true,
	},
	pincode:{
		type:String,
		required:true,
	},
	country:{
		type:String,
		required:true,
	},
	image:{
		type:String,

	},
	dob:{
		type:String,
	},
	gender:{
		type:String,
	},
	password:{
		type:String,
	},
	
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("EmployeRegistrations", EmployeRegistrationSchema);
