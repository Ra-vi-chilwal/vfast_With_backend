const mongoose = require("mongoose");

const VendorInitSchema = mongoose.Schema({
  packages: {
    type: String,
    required: true,
  },
  CaseId: {
    type: String,
    required: true,
  },
  ClientId: {
    type: String,
    required: true,
  },
  pancardno: {
    type: String,
  },
  candidatename: {
    type: String,
    required: true,
  },
  Fname: {
    type: String,
  },
  Mname: {
    type: String,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
  contactnumber: {
    type: String,
  },

  dob: {
    type: String,
  },
  Aadharno: {
    type: String,
  },
  //permanent address
  address: {
    type: String,
  },
  street: {
    type: String,
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  pincode: {
    type: String,
  },
  //End address
  //current addres
  c_address: {
    type: String,
  },
  c_street: {
    type: String,
  },
  c_landmark: {
    type: String,
  },
  c_city: {
    type: String,
  },
  c_state: {
    type: String,
  },
  c_country: {
    type: String,
  },
  c_pincode: {
    type: String,
  },
  //end current addres

  companyname: {
    type: String,
  },
  referencename: {
    type: String,
  },
  referececontactno: {
    type: String,
  },
  refereceaddress: {
    type: String,
  },
  nameofemp: {
    type: String,
  },
  contactdetails: {
    type: String,
  },
  mobile_email: {
    type: String,
  },
  offerexp: {
    type: String,
  },
  Board: {
    type: String,
  },
  yearIn: {
    type: String,
  },
  yearOut: {
    type: String,
  },
  remark: {
    type: String,
  },
  detailremark: {
    type: String,
  },
  periodofstay: {
    type: String,
  },
  identity: {
    type: String,
  },
  identityNo: {
    type: String,
  },
  identityremark: {
    type: String,
  },
  bgc_docs: {
    type: String,
  },
  files: {
    type: Array,
  },
  files2: {
    type: Array,
  },
  files3: {
    type: Array,
  },
  files4: {
    type: Array,
  },
  files5: {
    type: Array,
  },
  totalremark: {
    type: String,
  },
  //vendor add
  vendorname: {
    type: String,
    required: true,
  },
  v_city: {
    type: String,
    required: true,
  },
  v_price: {
    type: String,
    required: true,
  },
  v_TAT: {
    type: String,
    required: true,
  },
 

  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("VendorInit", VendorInitSchema);
