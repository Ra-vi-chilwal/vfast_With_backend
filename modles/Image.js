const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
	imgname: {
		type: String,
		
	},
	packageimage: {
		type: Array,
		required: true,
	},
   	
	date: {
		type: Date,
		default: Date.now,
	},
});
module.exports = mongoose.model("Images",ImageSchema);
