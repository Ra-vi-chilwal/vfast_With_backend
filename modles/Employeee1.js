
const mongoose = require("mongoose");

const Employeee1Schema = mongoose.Schema({

name:String,
image:String,


});
module.exports = mongoose.model("Employeee1", Employeee1Schema);
