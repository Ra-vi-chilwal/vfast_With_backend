const express = require("express");
const router = express.Router();
const EmployeRegistration = require("../modles/EmployeRegistration");
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
           const employeregistration = await EmployeRegistration.find()
           res.json(employeregistration)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const employeregistration = await EmployeRegistration.findById(req.params.id)
           res.json(employeregistration)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const employeregistration = await EmployeRegistration.findById(req.params.id) 
        employeregistration.name = req.body.name
        const a1 = await employeregistration.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=> {
try{
    // const addresscheck = await Addresscheck.findById(req.params.id) 
     const employeregistration =await EmployeRegistration.findByIdAndDelete(req.params.id);

   
     res.json(employeregistration)   
 }catch(err){ 
     res.send('Error',err)
 }


})
//for image upload

//for post request :
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file)
	const employeregistration = new EmployeRegistration({
         name: req.body.name,
	// 	 Fname: req.body.Fname,
    //     phone: req.body.phone,
    //    email: req.body.email,
    //    registration: req.body.registration,
    //      place: req.body.place,

    //      address1: req.body.address1,
	// 	 address2: req.body.address2,
    //      city: req.body.city,
    //      district: req.body.district,
    //      dob:req.body.dob,
    //      gender:req.body.gender,
    //      state: req.body.state,
	// 	 pincode: req.body.pincode,
    //      country: req.body.country,
    //      password:req.body.password,
         image:req.body.path
       
	});
    

	employeregistration
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