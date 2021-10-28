const express = require("express");
const router = express.Router();
const EmpOperation = require("../modles/EmpOperation");
const multer = require("multer");
 const path = require("path");
// const upload = multer({dest : "public/uploads/"})

//for get request
var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, "./public/uploads");
        // cb(null,Date.now()+file.originalname)
    },
    filename:function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
      },
})
var upload=multer({storage:storage});
//for get request
router.get('/',async(req,res) => {
    try{
           const empoperation = await EmpOperation.find()
           res.json(empoperation)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const empoperation = await EmpOperation.findById(req.params.id)
           res.json(empoperation)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const empoperation = await EmpOperation.findById(req.params.id) 
        empoperation.name = req.body.name
        const a1 = await empoperation.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
router.delete('/:id',async(req,res)=> {
try{
    // const addresscheck = await Addresscheck.findById(req.params.id) 
     const empoperation =await EmpOperation.findByIdAndDelete(req.params.id);

   
     res.json(empoperation)   
 }catch(err){ 
     res.send('Error',err)
 }


})
//for image upload

//for post request :
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file)
	const empoperation = new EmpOperation({
        name: req.body.name,
	 	 Fname: req.body.Fname,
         phone: req.body.phone,
         email: req.body.email,
         password:req.body.password,
         dob:req.body.dob,
         gender: req.body.gender,
         place: req.body.place,
         address1: req.body.address1,
		 address2: req.body.address2,
         city: req.body.city,
         district: req.body.district,
         state: req.body.state,
		 pincode: req.body.pincode,
         country: req.body.country,
         image:req.file,
       
       
	});
    

	empoperation
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