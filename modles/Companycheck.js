const mongoose = require("mongoose");

const CompanycheckSchema = mongoose.Schema({
	clientid: {
		type: String,
		required: true,
	},
// 	clientname: {
// 		type: String,
// 		required: true,
// 	},
//     companyname: {
// 		type: Number,
// 		required: true,
// 	},
// 	contactpersonname: {
// 		type: String,
// 		required: true,
// 	},
// 	contactnumber: {
// 		type: String,
// 		required: true,
// 	},
//     address: {
// 		type: String,
// 		required: true,
// 	},
// pincode: {
// 		type: String,
// 		required: true,
// 	},
//     pancard: {
// 		type: String,
// 		required: true,
// 	},
   
	files:{
		type:Array,
		required:true,
	},
	files2:{
		type:Array,
		required:true,
	},
      date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Companychecks", CompanycheckSchema);
