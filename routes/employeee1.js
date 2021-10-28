const express = require("express");
const router = express.Router();
const VendorRegistration = require("../modles/VendorRegistration");
const multer = require("multer");
 const path = require("path");
const Employeee1 = require("../modles/Employeee1");
// const upload = multer({dest : "public/uploads/"})

//for get request
var storage=multer.diskStorage({
  destination:"./public/uploads/",
  filename:(req,file,cb)=>{
      cb(null,file,filename+"_"+Date.now()+path.extname(file.originalname));
  }
});
var upload=multer({
    storage:storage
}).single('file');

router.post("/upload",upload,function(req,res,next){
    var imageFile=req.file.filename;
    var success=req.file.filename+"uploaded successfully";

    var imageDetails= new uploadModel({
        imagename:imageFile
    });
    imageDetails.save(function(err,doc){
        if(err)throw err;

        imageData.exec(function(err,data){
            if(err)throw err;
        })
    })
})
//for get request
router.get('/',async(req,res) => {
    try{
           const vendorregistration = await VendorRegistration.find()
           res.json(vendorregistration)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const vendorregistration = await VendorRegistration.findById(req.params.id)
           res.json(vendorregistration)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const vendorregistration = await VendorRegistration.findById(req.params.id) 
        vendorregistration.name = req.body.name
        const a1 = await vendorregistration.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for image upload

//for post request :
router.post("/",upload, function(req, res){
    console.log(req.file)
	const employeee1 = new Employeee1({
         name:req.body.name,
         image:req.body.image
        });
        
        
        employeee1
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


