const mongoose = require("mongoose");

const VendorRegistrationSchema = mongoose.Schema({
	nameoftheentity: {
		type: String,
		required: true,
	},
	legalnameofentity: {
		type: String,
		required: true,
	},
	typeofentity :{
		type:String,
		required:true,
	},
	dateofestablishment:{
		type:String,
		required:true,
	},
	complateaddressofoffice:{
		type:String,
		required:true,
	},
	otherofficelocation:{
		type:String,
		required:true,
	},
	street:{
		type:String,
		required:true,
	},
	landmark:{
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
	website:{
		type:String,
		required:true,
	},
	emailid:{
		type:String,
		required:true,
	},
	firmcontactnumber:{
		type:String,
		required:true,
	},
	//bank details
	accountno:{
		type:String,
		required:true,
	},
	ifsccode:{
		type:String,
		required:true,
	},
	nameofbank:{
		type:String,
		required:true,
	},
	branch:{
		type:String,
		required:true,
	},
	//firm details(img files)
	rocregistrationno:{
		type:String,
	
	},
	udyogaadhaarregistration:{
		type:String,
	
	},
	panno:{
		type:String,
	
	},
	gstin:{
		type:String,
	
	},
	addressproof:{
		type:String,
	
	},
 authorityletter:{
		type:String,
	
	},
	
	aggerment:{
		type:String,
	
	},

	//contact details

	personname:{
		type:String,
		required:true,
	},
	fname:{
    type:String,
    required:true,
	},
	DOB:{
		type:String,
		required:true,
	},
	number:{
		type:String,
		required:true,
	},
	landlineno:{
		type:String,
		required:true,
	},
	emailaddress:{
		type:String,
		required:true,
	},
      designation:{
		type:String,
		required:true,
	},
	C_address:{
		type:String,
		required:true,
	},
	C_street:{
		type:String,
		required:true,
	},
	C_landmark:{
		type:String,
		required:true,
	},
	C_city:{
		type:String,
		required:true,
	},
	C_pincode:{
		type:String,
		required:true,
	},
	C_district:{
		type:String,
		required:true,
	},
	C_state:{
		type:String,
		required:true,
	},
	C_country:{
		type:String,
		required:true,
	},
	C_typeofownership:{
		type:String,
		required:true,
	},
	p_address:{
		type:String,
		required:true,
	},
	p_street:{
		type:String,
		required:true,
	},
	p_landmark:{
		type:String,
		required:true,
	},
	p_city:{
		type:String,
		required:true,
	},
	p_pincode:{
		type:String,
		required:true,
	},
	p_district:{
		type:String,
		required:true,
	},
	p_state:{
		type:String,
		required:true,
	},
	p_country:{
		type:String,
		required:true,
	},
	p_typeofownership:{
		type:String,
		required:true,
	},
	aadharno:{
		type:String,
		// required:true,
	},
	photograph:{
		type:String,
		// required:true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("VendorRegistrations", VendorRegistrationSchema);