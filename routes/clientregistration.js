const express = require("express");
const router = express.Router();
const ClientRegistration = require("../modles/ClientRegistration");
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
           const clientregistration = await ClientRegistration.find()
           res.json(clientregistration)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const clientregistration = await ClientRegistration.findById(req.params.id)
           res.json(clientregistration)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const clientregistration = await ClientRegistration.findById(req.params.id) 
        clientregistration.name = req.body.name
        const a1 = await clientregistration.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for image upload

//for post request :
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file)
	const clientregistration = new ClientRegistration({
              nameoftheentity: req.body.nameoftheentity,
		 legalnameofentity: req.body.legalnameofentity,
         typeofentity: req.body.typeofentity,
         dateofestablishment: req.body.dateofestablishment,

         complateaddressofoffice: req.body.complateaddressofoffice,
         street:req.body.street,
         landmark:req.body.landmark,
         city: req.body.city,
         district: req.body.district,
         
         state: req.body.state,
		 pincode: req.body.pincode,
         country: req.body.country,
         website: req.body.website,
         
         
         emailid: req.body.emailid,
		 firmcontactnumber: req.body.firmcontactnumber,

         //this is your bamk details
         accountno: req.body.accountno,
         ifsccode: req.body.ifsccode,
         
         nameofbank: req.body.nameofbank,
		 branch: req.body.branch,

         //firm detail(images)
         rocregistrationno: req.body.rocregistrationno,
       

         udyogaadhaarregistration: req.body.udyogaadhaarregistration,
		 panno: req.body.panno,
         gstin: req.body.gstin,
        
		 addressproof: req.body.addressproof,
        authorityletter: req.body.authorityletter,
         aggrement: req.body.aggrement,
         otherofficelocation: req.body.otherofficelocation,

         //contact details
        personname:req.body.personname,
        fname:req.body.fname,
        DOB:req.body.DOB,
        number:req.body.number,
        landlineno:req.body.landlineno,
        emailaddress:req.body.emailaddress,
        designation:req.body.designation,

        C_address:req.body.C_address,
        C_street:req.body.C_street,
        C_landmark:req.body.C_landmark,
        C_city:req.body.C_city,
        C_pincode:req.body.C_pincode,
        C_district:req.body.C_district,
        C_state:req.body.C_state,

        C_country:req.body.C_country,
        C_typeofownership:req.body.C_typeofownership,
        p_address:req.body.p_address,
        p_street:req.body.p_street,
        p_landmark:req.body.p_landmark,
        p_city:req.body.p_city,
        p_pincode:req.body.p_pincode,

        p_district:req.body.p_district,
        p_state:req.body.p_state,
        p_country:req.body.p_country,

        p_typeofownership:req.body.p_typeofownership,
        aadharno:req.body.aadharno,
        photograph:req.body.photograph,
		


	});
    

	clientregistration
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