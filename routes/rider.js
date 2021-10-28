const express = require("express");
const router = express.Router();
const Rider = require("../modles/Rider");
const multer = require("multer");
 const path = require("path");
// const upload = multer({dest : "public/uploads/"})

//for get request
var storage=multer.diskStorage({
        distination:function(req,file,cb){
        cb(null,"./upload/images")
        // cb(null,Date.now()+file.originalname)
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})
var upload=multer({storage:storage});
//for get request
router.get('/',async(req,res) => {
    try{
           const rider = await Rider.find()
           res.json(rider)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const  rider = await Rider.findById(req.params.id)
           res.json(rider)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const rider = await Rider.findById(req.params.id) 
        rider.name = req.body.name
        const a1 = await rider.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for image upload

//for post request :
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file)
	const rider = new Rider({
        clientId:req.body.clientId,
        caseId:req.body.caseId,
        candidatename: req.body.candidatename,
        Fname: req.body.Fname,
        Mname:req.body.Mname,
        gender: req.body.gender,
        email:req.body.email,
        contactnumber: req.body.contactnumber,
        address: req.body.address,
        street:req.body.street,
        landmark:req.body.landmark,
        city: req.body.city,
        state:req.body.state,
        country: req.body.country,
        pincode: req.body.pincode,
        c_address: req.body.c_address,
        c_street:req.body.c_street,
        c_landmark:req.body.c_landmark,
        c_city: req.body.c_city,
        c_state:req.body.c_state,
        c_country: req.body.c_country,
        c_pincode: req.body.c_pincode,
        companyname: req.body.companyname,
        // contact: req.body.contact,
        vendorname:req.body.vendorname,
        v_city:req.body.city,
        price:req.body.price,
        TAT:req.body.TAT,
        venderstatus:req.body.venderstatus,
        meetingpersonname:req.body.meetingpersonname,
        meetingpersoncontactnumber:req.body. meetingpersoncontactnumber,
        residentialstatus:req.body. residentialstatus,
        IDofmeetingperson:req.body.IDofmeetingperson,
        IDofzip:req.body.IDofzip,
        candidaterelision:req.body.candidaterelision,
        numberoffamilymember:req.body.numberoffamilymember,
        attachofremark:req.body.attachofremark,
        imageofhouse:req.body.imageofhouse,
        imageoflandmark:req.body.imageoflandmark,
        periodofstayatthegivenaddress:req.body.periodofstayatthegivenaddress,
        contactPersonSignature:req.body.contactPersonSignature,
        dateofVerification:req.body.dateofVerification,
        nameExecutive:req.body.nameExecutive
        // image:req.file.path
		
	});
    

	rider
		.save()
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json({ message: err });
		});
});

module.exports = router;
//http://localhost:3000/gapcheck

module.exports = router;