const express = require("express");
const router = express.Router();
const VendorInit = require("../modles/vendorInit");
const multer = require("multer");

router.use(express.static(__dirname+"./public/"));

var storage=multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+file.originalname)
    }   
})

var upload = multer({ storage: storage });
//for get request
router.get("/", async (req, res) => {
  try {
    const vendorinit = await VendorInit.find();
    res.json(vendorinit);
  } catch (err) {
    res.send("Error " + err);
  }
});
//for get by id
router.get("/:id", async (req, res) => {
  try {
    const vendorinit = await VendorInit.findById(req.params.id);
    res.json(vendorinit);
  } catch (err) {
    res.send("Error " + err);
  }
});

//for update or patch
router.patch("/:id", async (req, res) => {
  try {
    const vendorinit = await VendorInit.findById(req.params.id);
    //const result=await Addresscheck.findByIdAndDelete(id);
    vendorinit.name = req.body.name;
    const a1 = await vendorinit.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});
//delete req
router.delete("/:id", async (req, res) => {
  try {
    // const addresscheck = await Addresscheck.findById(req.params.id)
    const vendorinit = await VendorInit.findByIdAndDelete(req.params.id);

    res.json(vendorinit);
  } catch (err) {
    res.send("Error", err);
  }
});

//for post request :
router.post("/", upload.array("files",12), (req, res) => {
  const vendorinit = new VendorInit({
    packages: req.body.packages,
    CaseId: req.body.CaseId,
    ClientId: req.body.ClientId,
    candidatename: req.body.candidatename,
    Fname: req.body.Fname,
    Mname: req.body.Mname,
    gender: req.body.gender,
    email: req.body.email,
    contactnumber: req.body.contactnumber,
    dob: req.body.dob,
    Aadharno: req.body.Aadharno,
    //address
    address: req.body.address,
    street: req.body.street,
    landmark: req.body.landmark,
    city: req.body.city,
    state: req.body.state,
    country: req.body.country,
    pincode: req.body.pincode,
    //current
    c_address: req.body.c_address,
    c_street: req.body.c_street,
    c_landmark: req.body.c_landmark,
    c_city: req.body.c_city,
    c_state: req.body.c_state,
    c_country: req.body.c_country,
    c_pincode: req.body.c_pincode,
    //end address
    companyname: req.body.companyname,
    referencename: req.body.referencename,
    referececontactno: req.body.referececontactno,
    refereceaddress: req.body.refereceaddress,
    nameofemp: req.body.nameofemp,
    contactdetails: req.body.contactdetails,
    mobile_email: req.body.mobile_email,
    offerexp: req.body.offerexp,
    Board: req.body.Board,
    yearIn: req.body.yearIn,
    yearOut: req.body.yearOut,
    detailremark: req.body.detailremark,
    periodofstay: req.body.periodofstay,
    identity: req.body.indentity,
    identityNo: req.body.identityNo,
    identityremark: req.body.identityremark,
    bgc_docs: req.body.bgc_docs,
    files: req.body.files,
    files2: req.body.files2,
    files3: req.body.files3,
    files4: req.body.files4,
    files5: req.body.files5,
 
    totalremark: req.body.totalremark,
    //vendor add
    vendorname: req.body.vendorname,
    v_city: req.body.v_city,
    v_price: req.body.v_price,
    v_TAT: req.body.v_TAT,
  });

  vendorinit
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
