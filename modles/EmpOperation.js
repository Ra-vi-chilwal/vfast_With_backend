//this is the audit registration api 
const mongoose = require("mongoose");

const EmpOperationSchema = mongoose.Schema({
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
	password:{
     type:String,
     required:true,
	},
	dob:{
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
	image :{
		type:Array,
		required:true,
	},
	date: {
		type: Date,
		default: Date.now,
	},

});
module.exports = mongoose.model("EmpOperation", EmpOperationSchema);
