const express = require("express");
const router = express.Router();
const Recordcheck= require("../modles/Recordcheck");
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
           const recordcheck= await Recordcheck.find()
           res.json(recordcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})
//for get by id
router.get('/:id', async(req,res) => {
    try{
           const recordcheck = await Recordcheck.findById(req.params.id)
           res.json(recordcheck)
    }catch(err){
        res.send('Error ' + err)
    }
})

//for update or patch
router.patch('/:id',async(req,res)=> {
    try{
        const recordcheck = await Recordcheck.findById(req.params.id) 
        recordcheck.name = req.body.name
        const a1 = await recordcheck.save()
        res.json(a1)   
    }catch(err){
        res.send('Error')
    }

})
//for image upload

//for post request :
router.post("/",upload.single('image'), (req, res) => {
    console.log(req.file)
	const recordcheck = new Recordcheck({
       
		 candidatename: req.body.candidatename,
         pancard: req.body.pancard,  
		 address: req.body.address,
         pincode: req.body.pincode,
		 
         DOB: req.body.DOB,  
		 Fname: req.body.Fname,
         contactnumber:req.body.contactnumber
        // image:req.file.path
		


	});
    

	recordcheck
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