const express = require("express");
const router = express.Router();
const Companycheck = require("../modles/Companycheck");
const multer = require("multer");
 const path = require("path");

 router.use(express.static(__dirname+"./public/"));

//for get request 
var storage=multer.diskStorage({
    destination:"./public/uploads/",
    filename:(req,file,cb)=>{
        cb(null,file.fieldname+"_"+Date.now()+file.originalname)
    }
})

const fileFilter = (req,file,cb)=> {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype ==="image/pdf"){
    cb(null,true);
}
 else {
cb(null,false);
}
};
var upload=multer({storage:storage,
limits:{
    //fileSize:
},
fileFilter:fileFilter
});

//for get by id
router.get("/", async(req, res, next) => {
    try{
        const companycheck= await Companycheck.find()
        res.json(companycheck)
 }catch(err){
     res.send('Error ' + err)
 }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const companycheck = await Companycheck.findById(req.params.id) 
        companycheck.imgname = req.body.imgname
        const a1 = await companycheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for delete request
router.delete("/:id",async(req,res)=>{
    try{
        const companycheck=await Companycheck.findByIdAndDelete(req.params.id);
        res.json(companycheck)
    }catch(err){
        res.send("error",err)
    }
})

//for post request :
router.post("/",upload.array('files',2), (req, res) => { 
    // router.post("/",upload.single('images'), (req, res) => { 
    console.log(req.files)
	const companycheck = new Companycheck({
        clientid: req.body.clientid,
		// clientname: req.body.clientid,
		// companyname: req.body.companyname,
        // contactpersonname:req.body.contactpersonname,
		// contactnumber: req.body.contact,
		// address: req.body.address,
		// pincode: req.body.pincode,
        // pancard:req.body.pancard,
        files:req.files,
        files2:req.files
   
	});
    

	companycheck
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